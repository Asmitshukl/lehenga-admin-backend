import { Router } from "express";

import type { Prisma } from "../generated/prisma/client.js";
import { InvoicePaymentStatus } from "../generated/prisma/enums.js";
import { prisma } from "../lib/prisma.js";
import type { AuthenticatedRequest } from "../middleware/auth.js";
import { AppError } from "../utils/app-error.js";
import { asyncHandler } from "../utils/async-handler.js";
import { buildInvoicePdf } from "../utils/invoice-pdf.js";
import { ensureObject, getOptionalNumber, getOptionalString, getRequiredString } from "../utils/validation.js";

const invoiceInclude = {
  createdByAdmin: {
    select: {
      id: true,
      name: true,
      email: true,
    },
  },
  order: {
    select: {
      id: true,
      orderNumber: true,
      status: true,
    },
  },
  lineItems: {
    orderBy: {
      createdAt: "asc" as const,
    },
  },
};

const orderForInvoiceInclude = {
  customer: true,
  createdByAdmin: {
    select: {
      id: true,
      name: true,
      email: true,
    },
  },
  items: {
    orderBy: {
      createdAt: "asc" as const,
    },
    include: {
      lehenga: {
        include: {
          images: {
            orderBy: {
              sortOrder: "asc" as const,
            },
          },
        },
      },
      jewellery: {
        include: {
          images: {
            orderBy: {
              sortOrder: "asc" as const,
            },
          },
        },
      },
    },
  },
};

const DEFAULT_BUSINESS = {
  name: "Lehenga Atelier",
  address: "Store pickup",
  phone: "",
  email: "",
};

const DEFAULT_LATE_FEE_POLICY = "Late returns may be charged per day after the committed return date.";
const DEFAULT_DAMAGE_POLICY =
  "Damage, loss, stains, missing pieces, or repair costs may be deducted from the refundable security deposit.";
const DEFAULT_CANCELLATION_POLICY =
  "Cancellation and refund decisions are handled by store policy and depend on booking status and pickup timing.";

function toNumber(value: unknown) {
  return Number(value ?? 0);
}

function parseOptionalDate(value: unknown, key: string) {
  if (value === undefined || value === null || value === "") {
    return undefined;
  }

  if (typeof value !== "string") {
    throw new AppError(`${key} must be a date string`, 400);
  }

  const date = new Date(value);

  if (Number.isNaN(date.getTime())) {
    throw new AppError(`${key} must be a valid date`, 400);
  }

  return date;
}

function getInvoicePaymentStatus(totalPayable: number, amountPaid: number) {
  if (amountPaid >= totalPayable && totalPayable > 0) {
    return InvoicePaymentStatus.PAID;
  }

  if (amountPaid > 0) {
    return InvoicePaymentStatus.PARTIAL;
  }

  return InvoicePaymentStatus.PENDING;
}

function getOrderItemImageUrl(item: {
  lehenga?: { images?: Array<{ imageUrl: string }> } | null;
  jewellery?: { images?: Array<{ imageUrl: string }> } | null;
}) {
  return item.lehenga?.images?.[0]?.imageUrl ?? item.jewellery?.images?.[0]?.imageUrl ?? null;
}

async function generateInvoiceNumber(tx: Prisma.TransactionClient) {
  const year = new Date().getFullYear();
  const prefix = `INV-${year}-`;
  const latestInvoice = await tx.invoice.findFirst({
    where: {
      invoiceNumber: {
        startsWith: prefix,
      },
    },
    orderBy: {
      invoiceNumber: "desc",
    },
    select: {
      invoiceNumber: true,
    },
  });
  const latestSequence = latestInvoice ? Number(latestInvoice.invoiceNumber.slice(prefix.length)) : 0;

  return `${prefix}${String(latestSequence + 1).padStart(4, "0")}`;
}

export const invoicesRouter = Router();

invoicesRouter.get(
  "/",
  asyncHandler(async (_request, response) => {
    const invoices = await prisma.invoice.findMany({
      orderBy: {
        invoiceDate: "desc",
      },
      include: invoiceInclude,
    });

    response.json({
      success: true,
      data: invoices,
    });
  }),
);

invoicesRouter.post(
  "/",
  asyncHandler(async (request: AuthenticatedRequest, response) => {
    const body = ensureObject(request.body);
    const orderId = getRequiredString(body, "orderId");
    const existingInvoice = await prisma.invoice.findUnique({
      where: {
        orderId,
      },
      include: invoiceInclude,
    });

    if (existingInvoice) {
      response.json({
        success: true,
        message: "Invoice already exists for this order",
        data: existingInvoice,
      });
      return;
    }

    const order = await prisma.rentalOrder.findUnique({
      where: {
        id: orderId,
      },
      include: orderForInvoiceInclude,
    });

    if (!order) {
      throw new AppError("Order not found", 404);
    }

    if (order.items.length === 0) {
      throw new AppError("Order must have at least one item before creating an invoice", 400);
    }

    const dryCleaningCharge = Math.max(0, getOptionalNumber(body, "dryCleaningCharge") ?? 0);
    const alterationCharge = Math.max(0, getOptionalNumber(body, "alterationCharge") ?? 0);
    const deliveryCharge = Math.max(0, getOptionalNumber(body, "deliveryCharge") ?? 0);
    const otherCharge = Math.max(0, getOptionalNumber(body, "otherCharge") ?? 0);
    const discountAmount = Math.max(0, getOptionalNumber(body, "discountAmount") ?? toNumber(order.discountAmount));
    const rentalFee = toNumber(order.subtotalAmount);
    const securityDeposit = toNumber(order.securityDeposit);
    const totalPayable = Math.max(
      0,
      rentalFee + securityDeposit + dryCleaningCharge + alterationCharge + deliveryCharge + otherCharge - discountAmount,
    );
    const amountPaid = Math.max(0, getOptionalNumber(body, "amountPaid") ?? toNumber(order.amountPaid));
    const balanceDue = Math.max(0, totalPayable - amountPaid);
    const paymentMode = getOptionalString(body, "paymentMode") ?? order.paymentMethod;
    const returnDateTime = parseOptionalDate(body.returnDateTime, "returnDateTime") ?? order.returnDate ?? order.rentalEndDate;
    const customerName = [order.customer.firstName, order.customer.lastName].filter(Boolean).join(" ");

    const invoice = await prisma.$transaction(async (tx) => {
      const invoiceNumber = await generateInvoiceNumber(tx);

      return tx.invoice.create({
        data: {
          invoiceNumber,
          order: {
            connect: {
              id: order.id,
            },
          },
          ...(request.admin?.id
            ? {
                createdByAdmin: {
                  connect: {
                    id: request.admin.id,
                  },
                },
              }
            : {}),
          businessName: getOptionalString(body, "businessName") ?? DEFAULT_BUSINESS.name,
          businessLogoUrl: getOptionalString(body, "businessLogoUrl") ?? null,
          businessAddress: getOptionalString(body, "businessAddress") ?? DEFAULT_BUSINESS.address,
          businessPhone: getOptionalString(body, "businessPhone") ?? DEFAULT_BUSINESS.phone,
          businessEmail: getOptionalString(body, "businessEmail") ?? DEFAULT_BUSINESS.email,
          customerName,
          customerPhone: order.customer.phone,
          customerEmail: order.customer.email,
          orderNumberSnapshot: order.orderNumber,
          rentalFee,
          securityDeposit,
          dryCleaningCharge,
          alterationCharge,
          deliveryCharge,
          otherCharge,
          discountAmount,
          totalPayable,
          amountPaid,
          balanceDue,
          paymentMode,
          paymentStatus: getInvoicePaymentStatus(totalPayable, amountPaid),
          returnDateTime,
          lateFeePolicy: getOptionalString(body, "lateFeePolicy") ?? DEFAULT_LATE_FEE_POLICY,
          conditionNotes: getOptionalString(body, "conditionNotes") ?? null,
          damagePolicy: getOptionalString(body, "damagePolicy") ?? DEFAULT_DAMAGE_POLICY,
          cancellationPolicy: getOptionalString(body, "cancellationPolicy") ?? DEFAULT_CANCELLATION_POLICY,
          acknowledgementName: getOptionalString(body, "acknowledgementName") ?? customerName,
          lineItems: {
            create: order.items.map((item) => ({
              itemType: item.itemType,
              productNameSnapshot: item.productNameSnapshot,
              skuSnapshot: item.skuSnapshot,
              imageUrlSnapshot: getOrderItemImageUrl(item),
              sizeLabelSnapshot: item.sizeLabelSnapshot,
              quantity: item.quantity,
              rentalStartDate: item.rentalStartDate,
              rentalEndDate: item.rentalEndDate,
              rentalDays: item.rentalDays,
              rentalPricePerDay: item.pricePerDay,
              lineTotal: item.lineTotal,
              depositAmount: item.depositAmount,
            })),
          },
        },
        include: invoiceInclude,
      });
    });

    response.status(201).json({
      success: true,
      message: "Invoice generated successfully",
      data: invoice,
    });
  }),
);

invoicesRouter.get(
  "/:id/pdf",
  asyncHandler(async (request, response) => {
    const invoiceId = getRequiredString({ id: request.params.id }, "id");
    const invoice = await prisma.invoice.findUnique({
      where: {
        id: invoiceId,
      },
      include: invoiceInclude,
    });

    if (!invoice) {
      throw new AppError("Invoice not found", 404);
    }

    const pdfBuffer = await buildInvoicePdf(invoice);

    response.setHeader("Content-Type", "application/pdf");
    response.setHeader("Content-Disposition", `attachment; filename="${invoice.invoiceNumber}.pdf"`);
    response.send(pdfBuffer);
  }),
);
