import crypto from "node:crypto";

import { Prisma } from "../generated/prisma/client.js";
import { CheckoutPaymentAttemptStatus, DepositRefundStatus, OrderStatus, PaymentMethod, PaymentStatus, ProductStatus, RentalItemType } from "../generated/prisma/enums.js";
import { Router } from "express";

import { invalidateAvailabilityCache, sendCachedCatalogResponse } from "../lib/catalog-cache.js";
import { getItemAvailability } from "../lib/availability.js";
import { prisma } from "../lib/prisma.js";
import { env } from "../config/env.js";
import { asyncHandler } from "../utils/async-handler.js";
import { hashPassword, verifyPassword } from "../utils/admin-auth.js";
import { createCustomerToken, verifyCustomerToken } from "../utils/customer-auth.js";
import { AppError } from "../utils/app-error.js";
import {
  buildInventoryApplyOperations,
  buildInventoryRevertOperations,
  buildOrderItemCreates,
  parseCheckoutItems,
  prepareCheckoutItems,
  summarizePreparedCheckout,
} from "../utils/order-checkout.js";
import { createRazorpayOrder, fetchRazorpayPayment, verifyRazorpaySignature } from "../utils/razorpay.js";
import {
  ensureObject,
  getOptionalNumber,
  getOptionalString,
  getRequiredString,
} from "../utils/validation.js";
import { parseDateValue } from "../utils/order-checkout.js";
import { queueOrderConfirmationWhatsApp } from "../utils/whatsapp.js";

const orderedImageInclude = {
  orderBy: {
    sortOrder: "asc" as const,
  },
};

const publicLehengaInclude = {
  category: true,
  images: orderedImageInclude,
  sizes: {
    orderBy: {
      createdAt: "asc" as const,
    },
  },
  reviews: {
    where: {
      isVisible: true,
    },
    orderBy: {
      createdAt: "desc" as const,
    },
    include: {
      customer: {
        select: {
          firstName: true,
          lastName: true,
        },
      },
    },
  },
};

const publicJewelleryInclude = {
  category: true,
  images: orderedImageInclude,
  reviews: {
    where: {
      isVisible: true,
    },
    orderBy: {
      createdAt: "desc" as const,
    },
    include: {
      customer: {
        select: {
          firstName: true,
          lastName: true,
        },
      },
    },
  },
};

const publicCategoryInclude = {
  lehengas: {
    where: {
      status: {
        not: ProductStatus.ARCHIVED,
      },
    },
    orderBy: {
      createdAt: "desc" as const,
    },
    include: publicLehengaInclude,
  },
  jewelleryItems: {
    where: {
      status: {
        not: ProductStatus.ARCHIVED,
      },
    },
    orderBy: {
      createdAt: "desc" as const,
    },
    include: publicJewelleryInclude,
  },
};

const storefrontCategoryInclude = {
  ...publicCategoryInclude,
  lehengas: {
    ...publicCategoryInclude.lehengas,
    take: 4,
  },
  jewelleryItems: {
    ...publicCategoryInclude.jewelleryItems,
    take: 4,
  },
};

const orderInclude = {
  customer: true,
  pickupLocation: true,
  items: {
    orderBy: {
      createdAt: "asc" as const,
    },
    include: {
      lehenga: {
        include: {
          images: orderedImageInclude,
        },
      },
      lehengaSize: true,
      jewellery: {
        include: {
          images: orderedImageInclude,
        },
      },
    },
  },
};

const publicCustomerSelect = {
  id: true,
  firstName: true,
  lastName: true,
  email: true,
  phone: true,
  notes: true,
  createdAt: true,
  updatedAt: true,
} as const;

const ONLINE_PAYMENT_HOLD_WINDOW_MS = 15 * 60 * 1000;

async function getDefaultPickupLocation() {
  const existingLocation = await prisma.storeLocation.findFirst({
    where: {
      isActive: true,
    },
    orderBy: {
      createdAt: "asc",
    },
  });

  if (existingLocation) {
    return existingLocation;
  }

  return prisma.storeLocation.create({
    data: {
      name: "Main Store",
      slug: "main-store",
      addressLine1: "Store pickup address pending update",
      city: "Ahmedabad",
      state: "Gujarat",
      postalCode: "380001",
      country: "India",
      pickupNotes: "Please contact support before pickup.",
      isActive: true,
    },
  });
}

function generateOrderNumber() {
  return `ORD-${Date.now()}-${Math.floor(1000 + Math.random() * 9000)}`;
}

async function cancelUnpaidOnlineOrder(order: {
  id: string;
  items: Array<{
    id: string;
    quantity: number;
    lehengaSizeId: string | null;
    jewelleryId: string | null;
  }>;
}) {
  const transactionOperations = [
    ...buildInventoryRevertOperations(order),
    prisma.rentalOrder.update({
      where: { id: order.id },
      data: {
        status: OrderStatus.CANCELLED,
        paymentStatus: PaymentStatus.FAILED,
        amountDueAtPickup: 0,
        depositRefundStatus: DepositRefundStatus.NOT_APPLICABLE,
      },
      include: orderInclude,
    }),
  ];

  const results = await prisma.$transaction(transactionOperations);
  await invalidateAvailabilityCache();

  return results[results.length - 1];
}

async function releaseExpiredPaymentAttempts() {
  await prisma.checkoutPaymentAttempt.updateMany({
    where: {
      status: CheckoutPaymentAttemptStatus.INITIATED,
      expiresAt: {
        lt: new Date(),
      },
    },
    data: {
      status: CheckoutPaymentAttemptStatus.EXPIRED,
    },
  });
}

async function releaseExpiredPendingOnlineOrders() {
  const expiredAt = new Date(Date.now() - ONLINE_PAYMENT_HOLD_WINDOW_MS);
  const staleOrders = await prisma.rentalOrder.findMany({
    where: {
      paymentStatus: PaymentStatus.PENDING,
      status: OrderStatus.PENDING,
      paymentCapturedAt: null,
      OR: [
        {
          paymentMethod: PaymentMethod.ONLINE,
        },
        {
          paymentMethod: PaymentMethod.PICKUP,
          paymentGatewayOrderId: {
            not: null,
          },
        },
      ],
      createdAt: {
        lt: expiredAt,
      },
    },
    include: {
      items: true,
    },
  });

  for (const order of staleOrders) {
    await cancelUnpaidOnlineOrder(order);
  }
}

function getBearerToken(authorization?: string) {
  if (!authorization?.startsWith("Bearer ")) {
    throw new AppError("Authorization token is required", 401);
  }

  return authorization.slice("Bearer ".length);
}

async function getAuthenticatedCustomer(authorization?: string) {
  const token = getBearerToken(authorization);
  const { customerId } = verifyCustomerToken(token);

  const customer = await prisma.customer.findUnique({
    where: { id: customerId },
  });

  if (!customer) {
    throw new AppError("Customer account not found", 401);
  }

  return customer;
}

async function getOptionalAuthenticatedCustomer(authorization?: string) {
  if (!authorization?.startsWith("Bearer ")) {
    return null;
  }

  return getAuthenticatedCustomer(authorization);
}

function splitCustomerName(name?: string | null) {
  const trimmedName = name?.trim();

  if (!trimmedName) {
    return { firstName: "Guest", lastName: null };
  }

  const [firstName, ...rest] = trimmedName.split(/\s+/);

  return {
    firstName: firstName || "Guest",
    lastName: rest.length > 0 ? rest.join(" ") : null,
  };
}

async function findOrCreateCheckoutCustomer({
  authorization,
  customerName,
  customerEmail,
  customerPhone,
}: {
  authorization?: string | undefined;
  customerName?: string | null | undefined;
  customerEmail?: string | null | undefined;
  customerPhone?: string | null | undefined;
}) {
  const authenticatedCustomer = await getOptionalAuthenticatedCustomer(authorization);
  const email = customerEmail?.toLowerCase() || null;
  const phone = authenticatedCustomer?.phone ?? customerPhone?.trim();
  const { firstName, lastName } = splitCustomerName(customerName);

  if (!phone) {
    throw new AppError("customerPhone is required for guest checkout", 400);
  }

  if (authenticatedCustomer) {
    if (email) {
      const existingEmailOwner = await prisma.customer.findFirst({
        where: {
          email,
          id: {
            not: authenticatedCustomer.id,
          },
        },
        select: {
          id: true,
        },
      });

      if (existingEmailOwner) {
        throw new AppError("This email is already linked to another customer account", 409);
      }
    }

    return prisma.customer.update({
      where: { id: authenticatedCustomer.id },
      data: {
        ...(customerName ? { firstName, lastName } : {}),
        ...(email ? { email } : {}),
      },
    });
  }

  const existingPhoneCustomer = await prisma.customer.findUnique({
    where: {
      phone,
    },
  });

  if (existingPhoneCustomer) {
    if (email) {
      const existingEmailOwner = await prisma.customer.findFirst({
        where: {
          email,
          id: {
            not: existingPhoneCustomer.id,
          },
        },
        select: {
          id: true,
        },
      });

      if (existingEmailOwner) {
        throw new AppError("This email is already linked to another customer account", 409);
      }
    }

    return prisma.customer.update({
      where: { id: existingPhoneCustomer.id },
      data: {
        ...(customerName ? { firstName, lastName } : {}),
        ...(email ? { email } : {}),
      },
    });
  }

  if (email) {
    const existingEmailOwner = await prisma.customer.findUnique({
      where: {
        email,
      },
      select: {
        id: true,
      },
    });

    if (existingEmailOwner) {
      throw new AppError("This email is already linked to another customer account", 409);
    }
  }

  return prisma.customer.create({
    data: {
      firstName,
      lastName,
      email,
      phone,
    },
  });
}

function getOptionalPositiveInteger(value: unknown, fallback: number) {
  const parsedValue = Number(value);

  if (value === undefined || value === null || value === "") {
    return fallback;
  }

  if (!Number.isInteger(parsedValue) || parsedValue <= 0) {
    throw new AppError("limit must be a positive integer", 400);
  }

  return parsedValue;
}

export const publicRouter = Router();

publicRouter.post(
  "/auth/signup",
  asyncHandler(async (request, response) => {
    const body = ensureObject(request.body);
    const firstName = getRequiredString(body, "firstName");
    const lastName = getOptionalString(body, "lastName");
    const email = getRequiredString(body, "email").toLowerCase();
    const phone = getRequiredString(body, "phone");
    const password = getRequiredString(body, "password");

    const existingCustomers = await prisma.customer.findMany({
      where: {
        OR: [{ phone }, { email }],
      },
    });

    if (existingCustomers.length > 1) {
      throw new AppError("Email or phone number is already linked to another account.", 409);
    }

    const existingCustomer = existingCustomers[0];
    const passwordHash = await hashPassword(password);

    const customer =
      existingCustomer && existingCustomer.passwordHash
        ? (() => {
            throw new AppError("Customer already exists. Please log in.", 409);
          })()
        : existingCustomer
          ? await prisma.customer.update({
              where: { id: existingCustomer.id },
              data: {
                firstName,
                lastName: lastName ?? null,
                email,
                phone,
                passwordHash,
              },
              select: publicCustomerSelect,
            })
          : await prisma.customer.create({
              data: {
                firstName,
                lastName: lastName ?? null,
                email,
                phone,
                passwordHash,
              },
              select: publicCustomerSelect,
            });

    response.status(201).json({
      success: true,
      message: "Signup successful",
      data: {
        customer,
        token: createCustomerToken(customer.id, customer.phone, customer.email),
      },
    });
  }),
);

publicRouter.post(
  "/auth/login",
  asyncHandler(async (request, response) => {
    const body = ensureObject(request.body);
    const email = getRequiredString(body, "email").toLowerCase();
    const phone = getRequiredString(body, "phone");
    const password = getRequiredString(body, "password");

    const customer = await prisma.customer.findFirst({
      where: {
        email,
        phone,
      },
    });

    if (!customer || !customer.passwordHash) {
      throw new AppError("Customer account not found. Please sign up first.", 404);
    }

    if (!(await verifyPassword(password, customer.passwordHash))) {
      throw new AppError("Invalid login details", 401);
    }

    response.json({
      success: true,
      message: "Login successful",
      data: {
        customer: {
          id: customer.id,
          firstName: customer.firstName,
          lastName: customer.lastName,
          email: customer.email,
          phone: customer.phone,
          notes: customer.notes,
          createdAt: customer.createdAt,
          updatedAt: customer.updatedAt,
        },
        token: createCustomerToken(customer.id, customer.phone, customer.email),
      },
    });
  }),
);

publicRouter.get(
  "/auth/me",
  asyncHandler(async (request, response) => {
    const customer = await getAuthenticatedCustomer(request.headers.authorization);

    response.json({
      success: true,
      data: {
        id: customer.id,
        firstName: customer.firstName,
        lastName: customer.lastName,
        email: customer.email,
        phone: customer.phone,
        notes: customer.notes,
        createdAt: customer.createdAt,
        updatedAt: customer.updatedAt,
      },
    });
  }),
);

publicRouter.get(
  "/categories",
  asyncHandler(async (request, response) => {
    const limit = getOptionalPositiveInteger(request.query.limit, 0);
    const featuredOnly = request.query.featured === "true";

    await sendCachedCatalogResponse(response, ["categories", featuredOnly ? "featured" : "all", limit], () =>
      prisma.category.findMany({
        ...(featuredOnly
          ? {
              where: {
                isFeatured: true,
              },
            }
          : {}),
        orderBy: [{ createdAt: "asc" }],
        ...(limit > 0 ? { take: limit } : {}),
        include: featuredOnly ? storefrontCategoryInclude : publicCategoryInclude,
      }),
    );
  }),
);

publicRouter.get(
  "/lehengas",
  asyncHandler(async (request, response) => {
    const featuredOnly = request.query.featured === "true";
    const latestOnly = request.query.latest === "true";

    await sendCachedCatalogResponse(response, ["lehengas", featuredOnly ? "featured" : "all"], () =>
      prisma.lehenga.findMany({
        where: {
          status: {
            not: ProductStatus.ARCHIVED,
          },
          ...(featuredOnly ? { isFeatured: true } : {}),
          ...(latestOnly ? { isLatest: true } : {}),
        },
        orderBy: { createdAt: "desc" },
        include: publicLehengaInclude,
      }),
    );
  }),
);

publicRouter.get(
  "/availability",
  asyncHandler(async (request, response) => {
    const itemType = getRequiredString(request.query, "itemType");
    const productId = getRequiredString(request.query, "productId");
    const sizeId = getOptionalString(request.query, "sizeId");
    const startDate = parseDateValue(getRequiredString(request.query, "startDate"), "startDate");
    const endDate = parseDateValue(getRequiredString(request.query, "endDate"), "endDate");

    if (endDate < startDate) {
      throw new AppError("endDate must be on or after startDate", 400);
    }

    if (itemType !== RentalItemType.LEHENGA && itemType !== RentalItemType.JEWELLERY) {
      throw new AppError("itemType must be LEHENGA or JEWELLERY", 400);
    }

    const availability = await getItemAvailability({
      itemType,
      productId,
      ...(sizeId ? { sizeId } : {}),
      startDate,
      endDate,
    });

    response.setHeader("Cache-Control", `public, max-age=10, stale-while-revalidate=20`);
    response.json({ success: true, data: availability });
  }),
);

publicRouter.get(
  "/lehengas/:slug",
  asyncHandler(async (request, response) => {
    const slug = getRequiredString(request.params, "slug");

    await sendCachedCatalogResponse(response, ["lehengas", slug], async () => {
      const lehenga = await prisma.lehenga.findFirst({
        where: {
          slug,
          status: {
            not: ProductStatus.ARCHIVED,
          },
        },
        include: publicLehengaInclude,
      });

      if (!lehenga) {
        throw new AppError("Lehenga not found", 404);
      }

      return lehenga;
    });
  }),
);

publicRouter.get(
  "/jewellery",
  asyncHandler(async (_request, response) => {
    await sendCachedCatalogResponse(response, ["jewellery", "all"], () =>
      prisma.jewellery.findMany({
        where: {
          status: {
            not: ProductStatus.ARCHIVED,
          },
        },
        orderBy: { createdAt: "desc" },
        include: publicJewelleryInclude,
      }),
    );
  }),
);

publicRouter.get(
  "/jewellery/:slug",
  asyncHandler(async (request, response) => {
    const slug = getRequiredString(request.params, "slug");

    await sendCachedCatalogResponse(response, ["jewellery", slug], async () => {
      const jewellery = await prisma.jewellery.findFirst({
        where: {
          slug,
          status: {
            not: ProductStatus.ARCHIVED,
          },
        },
        include: publicJewelleryInclude,
      });

      if (!jewellery) {
        throw new AppError("Jewellery not found", 404);
      }

      return jewellery;
    });
  }),
);

publicRouter.get(
  "/orders/mine",
  asyncHandler(async (request, response) => {
    const customer = await getAuthenticatedCustomer(request.headers.authorization);
    await releaseExpiredPendingOnlineOrders();

    const orders = await prisma.rentalOrder.findMany({
      where: {
        customerId: customer.id,
        NOT: [
          {
            paymentMethod: PaymentMethod.ONLINE,
            paymentStatus: PaymentStatus.PENDING,
            paymentCapturedAt: null,
          },
          {
            paymentMethod: PaymentMethod.ONLINE,
            paymentStatus: PaymentStatus.FAILED,
            status: OrderStatus.CANCELLED,
          },
        ],
      },
      orderBy: {
        createdAt: "desc",
      },
      include: orderInclude,
    });

    response.json({
      success: true,
      data: orders,
    });
  }),
);

publicRouter.post(
  "/orders/preview",
  asyncHandler(async (request, response) => {
    await releaseExpiredPendingOnlineOrders();
    const body = ensureObject(request.body);
    const items = parseCheckoutItems(body.items);
    const preparedItems = await prepareCheckoutItems(items);
    const summary = summarizePreparedCheckout(preparedItems);

    response.json({
      success: true,
      data: {
        rentalStartDate: summary.rentalStartDate,
        rentalEndDate: summary.rentalEndDate,
        subtotalAmount: summary.subtotalAmount,
        securityDeposit: summary.securityDeposit,
        totalAmount: summary.totalAmount,
        items: preparedItems.map((item) => ({
          itemType: item.itemType,
          productNameSnapshot: item.productNameSnapshot,
          quantity: item.quantity,
          rentalStartDate: item.rentalStartDate,
          rentalEndDate: item.rentalEndDate,
          rentalDays: item.rentalDays,
          lineTotal: item.lineTotal,
          depositAmount: item.depositAmount,
          sizeLabelSnapshot: item.sizeLabelSnapshot,
        })),
      },
    });
  }),
);

publicRouter.post(
  "/orders",
  asyncHandler(async (request, response) => {
    await Promise.all([releaseExpiredPendingOnlineOrders(), releaseExpiredPaymentAttempts()]);
    const body = ensureObject(request.body);
    const rawPaymentMethod = getRequiredString(body, "paymentMethod");
    const paymentMethod =
      rawPaymentMethod === PaymentMethod.ONLINE
        ? PaymentMethod.ONLINE
        : rawPaymentMethod === PaymentMethod.PICKUP
          ? PaymentMethod.PICKUP
          : null;

    if (!paymentMethod) {
      throw new AppError("paymentMethod must be ONLINE or PICKUP", 400);
    }

    const items = parseCheckoutItems(body.items);
    const preparedItems = await prepareCheckoutItems(items);
    const summary = summarizePreparedCheckout(preparedItems);
    const authenticatedCustomer = await getOptionalAuthenticatedCustomer(request.headers.authorization);
    const customerPhone = getOptionalString(body, "customerPhone");

    if (!authenticatedCustomer && !customerPhone) {
      throw new AppError("customerPhone is required for guest checkout", 400);
    }

    const paymentAmount =
      paymentMethod === PaymentMethod.PICKUP ? summary.securityDeposit : summary.totalAmount;

    if (paymentMethod === PaymentMethod.PICKUP && paymentAmount <= 0) {
      throw new AppError("A fixed deposit greater than zero is required for pay at pickup orders", 400);
    }

    const paymentAttemptId = crypto.randomUUID();
    const razorpayOrder = await createRazorpayOrder({
      amountInPaise: Math.round(paymentAmount * 100),
      receipt: `PAY-${paymentAttemptId.slice(0, 24)}`,
      notes: {
        paymentAttemptId,
        paymentMethod,
      },
    });

    await prisma.checkoutPaymentAttempt.create({
      data: {
        id: paymentAttemptId,
        paymentGatewayOrderId: razorpayOrder.id,
        paymentMethod,
        paymentAmount,
        checkoutPayload: JSON.parse(JSON.stringify(body)) as Prisma.InputJsonValue,
        ...(authenticatedCustomer ? { customerId: authenticatedCustomer.id } : {}),
        expiresAt: new Date(Date.now() + ONLINE_PAYMENT_HOLD_WINDOW_MS),
      },
    });

    response.status(201).json({
      success: true,
      message: "Payment checkout created. The order will be placed after payment verification.",
      data: {
        paymentAttempt: {
          id: paymentAttemptId,
          expiresAt: new Date(Date.now() + ONLINE_PAYMENT_HOLD_WINDOW_MS).toISOString(),
        },
        razorpayOrder: {
          id: razorpayOrder.id,
          amount: razorpayOrder.amount,
          currency: razorpayOrder.currency,
          keyId: env.razorpayKeyId,
          name: "Lehenga Rental",
          description:
            paymentMethod === PaymentMethod.PICKUP
              ? "Fixed deposit payment"
              : "Complete rental payment",
        },
      },
    });
  }),
);

publicRouter.post(
  "/payments/razorpay/cancel",
  asyncHandler(async (request, response) => {
    const customer = await getOptionalAuthenticatedCustomer(request.headers.authorization);
    const body = ensureObject(request.body);
    const paymentAttemptId = getRequiredString(body, "paymentAttemptId");

    const attempt = await prisma.checkoutPaymentAttempt.findUnique({
      where: { id: paymentAttemptId },
    });

    if (!attempt || (attempt.customerId && attempt.customerId !== customer?.id)) {
      throw new AppError("Payment attempt not found", 404);
    }

    if (attempt.status === CheckoutPaymentAttemptStatus.VERIFIED) {
      throw new AppError("This payment is already completed", 409);
    }

    const updatedAttempt = await prisma.checkoutPaymentAttempt.update({
      where: { id: attempt.id },
      data: {
        status: CheckoutPaymentAttemptStatus.CANCELLED,
      },
      select: {
        id: true,
        status: true,
      },
    });

    response.json({
      success: true,
      message: "Payment checkout was cancelled. No order was created.",
      data: updatedAttempt,
    });
  }),
);

publicRouter.post(
  "/payments/razorpay/verify",
  asyncHandler(async (request, response) => {
    await releaseExpiredPaymentAttempts();
    const authenticatedCustomer = await getOptionalAuthenticatedCustomer(request.headers.authorization);
    const body = ensureObject(request.body);
    const paymentAttemptId = getRequiredString(body, "paymentAttemptId");
    const razorpayOrderId = getRequiredString(body, "razorpayOrderId");
    const razorpayPaymentId = getRequiredString(body, "razorpayPaymentId");
    const razorpaySignature = getRequiredString(body, "razorpaySignature");

    const attempt = await prisma.checkoutPaymentAttempt.findUnique({
      where: { id: paymentAttemptId },
      include: {
        rentalOrder: {
          include: orderInclude,
        },
      },
    });

    if (!attempt || (attempt.customerId && attempt.customerId !== authenticatedCustomer?.id)) {
      throw new AppError("Payment attempt not found", 404);
    }

    if (attempt.status === CheckoutPaymentAttemptStatus.VERIFIED && attempt.rentalOrder) {
      response.json({
        success: true,
        message: "Payment was already verified",
        data: attempt.rentalOrder,
      });
      return;
    }

    if (attempt.status !== CheckoutPaymentAttemptStatus.INITIATED || attempt.expiresAt < new Date()) {
      throw new AppError("This payment attempt is no longer active", 409);
    }

    if (attempt.paymentGatewayOrderId !== razorpayOrderId) {
      throw new AppError("Payment gateway order does not match this checkout", 400);
    }

    if (!verifyRazorpaySignature({ razorpayOrderId, razorpayPaymentId, razorpaySignature })) {
      throw new AppError("Invalid Razorpay payment signature", 400);
    }

    const razorpayPayment = await fetchRazorpayPayment(razorpayPaymentId);
    const expectedAmountInPaise = Math.round(Number(attempt.paymentAmount) * 100);

    if (
      razorpayPayment.order_id !== razorpayOrderId ||
      razorpayPayment.amount !== expectedAmountInPaise ||
      razorpayPayment.currency !== "INR"
    ) {
      throw new AppError("Razorpay payment details do not match this checkout", 400);
    }

    if (!razorpayPayment.captured || razorpayPayment.status !== "captured") {
      throw new AppError("Payment has not been captured by Razorpay", 409);
    }

    const checkoutPayload = ensureObject(attempt.checkoutPayload);
    const payloadPaymentMethod = getRequiredString(checkoutPayload, "paymentMethod");

    if (payloadPaymentMethod !== attempt.paymentMethod) {
      throw new AppError("Checkout payment method does not match the payment attempt", 400);
    }

    const items = parseCheckoutItems(checkoutPayload.items);
    const preparedItems = await prepareCheckoutItems(items);
    const summary = summarizePreparedCheckout(preparedItems);
    const expectedAmount =
      attempt.paymentMethod === PaymentMethod.PICKUP ? summary.securityDeposit : summary.totalAmount;

    if (Math.round(expectedAmount * 100) !== Math.round(Number(attempt.paymentAmount) * 100)) {
      throw new AppError("Checkout total changed. Please start payment again.", 409);
    }

    const customer = await findOrCreateCheckoutCustomer({
      authorization: request.headers.authorization,
      customerName: getOptionalString(checkoutPayload, "customerName"),
      customerEmail: getOptionalString(checkoutPayload, "customerEmail")?.toLowerCase(),
      customerPhone: getOptionalString(checkoutPayload, "customerPhone"),
    });
    const pickupLocation = await getDefaultPickupLocation();
    const orderNumber = generateOrderNumber();
    const amountPaid =
      attempt.paymentMethod === PaymentMethod.PICKUP ? summary.securityDeposit : summary.totalAmount;
    const amountDueAtPickup =
      attempt.paymentMethod === PaymentMethod.PICKUP ? summary.subtotalAmount : 0;
    const paymentStatus =
      amountDueAtPickup > 0 ? PaymentStatus.PARTIALLY_PAID : PaymentStatus.PAID;
    const specialInstructions = getOptionalString(checkoutPayload, "specialInstructions");

    await prisma.$transaction([
      prisma.rentalOrder.create({
        data: {
          orderNumber,
          customer: {
            connect: { id: customer.id },
          },
          pickupLocation: {
            connect: { id: pickupLocation.id },
          },
          paymentMethod: attempt.paymentMethod,
          paymentStatus,
          rentalStartDate: summary.rentalStartDate,
          rentalEndDate: summary.rentalEndDate,
          subtotalAmount: summary.subtotalAmount,
          securityDeposit: summary.securityDeposit,
          totalAmount: summary.totalAmount,
          amountPaid,
          amountDueAtPickup,
          depositRefundStatus:
            summary.securityDeposit > 0
              ? DepositRefundStatus.PENDING
              : DepositRefundStatus.NOT_APPLICABLE,
          paymentGatewayOrderId: razorpayOrderId,
          paymentGatewayPaymentId: razorpayPaymentId,
          paymentGatewaySignature: razorpaySignature,
          paymentCapturedAt: new Date(),
          ...(specialInstructions ? { specialInstructions } : {}),
          items: {
            create: buildOrderItemCreates(preparedItems),
          },
        },
      }),
      ...buildInventoryApplyOperations(preparedItems),
      prisma.checkoutPaymentAttempt.update({
        where: { id: attempt.id },
        data: {
          status: CheckoutPaymentAttemptStatus.VERIFIED,
          paymentGatewayPaymentId: razorpayPaymentId,
          rentalOrder: {
            connect: { orderNumber },
          },
        },
      }),
    ]);

    const order = await prisma.rentalOrder.findUniqueOrThrow({
      where: { orderNumber },
      include: orderInclude,
    });
    await invalidateAvailabilityCache();
    queueOrderConfirmationWhatsApp(order);

    response.status(201).json({
      success: true,
      message: "Payment verified and order created successfully",
      data: order,
    });
  }),
);

publicRouter.post(
  "/reviews",
  asyncHandler(async (request, response) => {
    const customer = await getAuthenticatedCustomer(request.headers.authorization);
    const body = ensureObject(request.body);
    const itemType = getRequiredString(body, "itemType");
    const rating = getOptionalNumber(body, "rating");
    const comment = getRequiredString(body, "comment");

    if (itemType !== RentalItemType.LEHENGA && itemType !== RentalItemType.JEWELLERY) {
      throw new AppError("itemType must be LEHENGA or JEWELLERY", 400);
    }

    if (!rating || !Number.isInteger(rating) || rating < 1 || rating > 5) {
      throw new AppError("rating must be an integer between 1 and 5", 400);
    }

    const lehengaId = itemType === RentalItemType.LEHENGA ? getRequiredString(body, "lehengaId") : undefined;
    const jewelleryId = itemType === RentalItemType.JEWELLERY ? getRequiredString(body, "jewelleryId") : undefined;

    const matchingOrderItem = await prisma.rentalOrderItem.findFirst({
      where: {
        order: {
          customerId: customer.id,
        },
        ...(lehengaId ? { lehengaId } : {}),
        ...(jewelleryId ? { jewelleryId } : {}),
      },
      select: {
        id: true,
      },
    });

    if (!matchingOrderItem) {
      throw new AppError("You can review only products you have ordered", 403);
    }

    const existingReview = await prisma.productReview.findFirst({
      where: {
        customerId: customer.id,
        ...(lehengaId ? { lehengaId } : {}),
        ...(jewelleryId ? { jewelleryId } : {}),
      },
    });

    const review = existingReview
      ? await prisma.productReview.update({
          where: {
            id: existingReview.id,
          },
          data: {
            rating,
            comment,
            isVisible: true,
          },
          include: {
            customer: {
              select: {
                firstName: true,
                lastName: true,
              },
            },
          },
        })
      : await prisma.productReview.create({
          data: {
            customer: {
              connect: { id: customer.id },
            },
            itemType: itemType as RentalItemType,
            ...(lehengaId ? { lehenga: { connect: { id: lehengaId } } } : {}),
            ...(jewelleryId ? { jewellery: { connect: { id: jewelleryId } } } : {}),
            rating,
            comment,
            isVisible: true,
          },
          include: {
            customer: {
              select: {
                firstName: true,
                lastName: true,
              },
            },
          },
        });

    response.status(201).json({
      success: true,
      message: "Review saved successfully",
      data: review,
    });
  }),
);
