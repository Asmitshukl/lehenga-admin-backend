import { Router } from "express";
import { ProductStatus } from "../generated/prisma/enums.js";
import { Prisma } from "../generated/prisma/client.js";
import { sendCachedAdminResponse } from "../lib/catalog-cache.js";
import { prisma } from "../lib/prisma.js";
import { asyncHandler } from "../utils/async-handler.js";
import { AppError } from "../utils/app-error.js";
import { uploadCatalogImages } from "../utils/s3-upload.js";
import { slugify } from "../utils/slug.js";
import { ensureObject, getRouteParam, getOptionalBoolean, getOptionalEnum, getOptionalNumber, getOptionalString, getRequiredNumber, getRequiredString, parseImageArray, parseLehengaSizeArray, } from "../utils/validation.js";
const lehengaInclude = {
    category: true,
    images: {
        orderBy: {
            sortOrder: "asc",
        },
    },
    sizes: {
        orderBy: {
            createdAt: "asc",
        },
    },
};
export const lehengasRouter = Router();
async function getCategorySlug(categoryId) {
    if (!categoryId) {
        return undefined;
    }
    const category = await prisma.category.findUnique({
        where: { id: categoryId },
        select: { slug: true },
    });
    if (!category) {
        throw new AppError("Category not found", 404);
    }
    return category.slug;
}
function parseDiscountPercent(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value < 0 || value > 100) {
        throw new AppError("discountPercent must be between 0 and 100", 400);
    }
    return value;
}
lehengasRouter.get("/", asyncHandler(async (_request, response) => {
    await sendCachedAdminResponse(response, ["lehengas", "all"], () => prisma.lehenga.findMany({
        orderBy: { createdAt: "desc" },
        include: lehengaInclude,
    }));
}));
lehengasRouter.post("/", asyncHandler(async (request, response) => {
    const body = ensureObject(request.body);
    const name = getRequiredString(body, "name");
    const slug = slugify(getOptionalString(body, "slug") ?? name);
    const rawImages = parseImageArray(body.images);
    const sizes = parseLehengaSizeArray(body.sizes);
    const categoryId = getOptionalString(body, "categoryId");
    const categorySlug = await getCategorySlug(categoryId);
    const images = await uploadCatalogImages(rawImages, {
        category: "lehengas",
        categorySlug,
        productSlug: slug,
    });
    const data = {
        name,
        slug,
        sku: getRequiredString(body, "sku"),
        rentalPricePerDay: getRequiredNumber(body, "rentalPricePerDay"),
        minimumRentalDays: getOptionalNumber(body, "minimumRentalDays") ?? 1,
        pickupAvailable: getOptionalBoolean(body, "pickupAvailable") ?? true,
        status: getOptionalEnum(body, "status", Object.values(ProductStatus)) ?? ProductStatus.DRAFT,
        isFeatured: getOptionalBoolean(body, "isFeatured") ?? false,
        isLatest: getOptionalBoolean(body, "isLatest") ?? false,
        isCategoryFeatured: getOptionalBoolean(body, "isCategoryFeatured") ?? false,
        images: {
            create: images,
        },
        sizes: {
            create: sizes,
        },
    };
    const shortDescription = getOptionalString(body, "shortDescription");
    const description = getOptionalString(body, "description");
    const color = getOptionalString(body, "color");
    const fabric = getOptionalString(body, "fabric");
    const embroideryDetails = getOptionalString(body, "embroideryDetails");
    const occasion = getOptionalString(body, "occasion");
    const setIncludes = getOptionalString(body, "setIncludes");
    const careInstructions = getOptionalString(body, "careInstructions");
    const securityDeposit = getOptionalNumber(body, "securityDeposit");
    const originalPrice = getOptionalNumber(body, "originalPrice");
    const discountPercent = parseDiscountPercent(getOptionalNumber(body, "discountPercent")) ?? 0;
    if (shortDescription !== undefined)
        data.shortDescription = shortDescription;
    if (description !== undefined)
        data.description = description;
    if (color !== undefined)
        data.color = color;
    if (fabric !== undefined)
        data.fabric = fabric;
    if (embroideryDetails !== undefined)
        data.embroideryDetails = embroideryDetails;
    if (occasion !== undefined)
        data.occasion = occasion;
    if (setIncludes !== undefined)
        data.setIncludes = setIncludes;
    if (careInstructions !== undefined)
        data.careInstructions = careInstructions;
    if (securityDeposit !== undefined)
        data.securityDeposit = securityDeposit;
    if (originalPrice !== undefined)
        data.originalPrice = originalPrice;
    data.discountPercent = discountPercent;
    if (categoryId) {
        data.category = {
            connect: { id: categoryId },
        };
    }
    const lehenga = await prisma.lehenga.create({
        data,
        include: lehengaInclude,
    });
    response.status(201).json({
        success: true,
        message: "Lehenga created successfully",
        data: lehenga,
    });
}));
lehengasRouter.get("/:id", asyncHandler(async (request, response) => {
    const lehengaId = getRouteParam(request.params.id, "id");
    const lehenga = await prisma.lehenga.findUnique({
        where: { id: lehengaId },
        include: lehengaInclude,
    });
    if (!lehenga) {
        throw new AppError("Lehenga not found", 404);
    }
    response.json({
        success: true,
        data: lehenga,
    });
}));
lehengasRouter.patch("/:id", asyncHandler(async (request, response) => {
    const body = ensureObject(request.body);
    const name = getOptionalString(body, "name");
    const slugValue = getOptionalString(body, "slug");
    const rawImages = body.images === undefined ? undefined : parseImageArray(body.images);
    const sizes = body.sizes === undefined ? undefined : parseLehengaSizeArray(body.sizes);
    const lehengaId = getRouteParam(request.params.id, "id");
    const existingLehenga = rawImages !== undefined || Object.prototype.hasOwnProperty.call(body, "categoryId") || name || slugValue
        ? await prisma.lehenga.findUnique({
            where: { id: lehengaId },
            select: {
                name: true,
                slug: true,
                category: {
                    select: {
                        slug: true,
                    },
                },
            },
        })
        : null;
    const data = {};
    if ((rawImages !== undefined || name || slugValue) && !existingLehenga) {
        throw new AppError("Lehenga not found", 404);
    }
    if (name !== undefined)
        data.name = name;
    if (slugValue) {
        data.slug = slugify(slugValue);
    }
    else if (name) {
        data.slug = slugify(name);
    }
    const sku = getOptionalString(body, "sku");
    const shortDescription = getOptionalString(body, "shortDescription");
    const description = getOptionalString(body, "description");
    const color = getOptionalString(body, "color");
    const fabric = getOptionalString(body, "fabric");
    const embroideryDetails = getOptionalString(body, "embroideryDetails");
    const occasion = getOptionalString(body, "occasion");
    const setIncludes = getOptionalString(body, "setIncludes");
    const careInstructions = getOptionalString(body, "careInstructions");
    const rentalPricePerDay = getOptionalNumber(body, "rentalPricePerDay");
    const discountPercent = parseDiscountPercent(getOptionalNumber(body, "discountPercent"));
    const securityDeposit = getOptionalNumber(body, "securityDeposit");
    const originalPrice = getOptionalNumber(body, "originalPrice");
    const minimumRentalDays = getOptionalNumber(body, "minimumRentalDays");
    const pickupAvailable = getOptionalBoolean(body, "pickupAvailable");
    const status = getOptionalEnum(body, "status", Object.values(ProductStatus));
    const isFeatured = getOptionalBoolean(body, "isFeatured");
    const isLatest = getOptionalBoolean(body, "isLatest");
    const isCategoryFeatured = getOptionalBoolean(body, "isCategoryFeatured");
    if (sku !== undefined)
        data.sku = sku;
    if (shortDescription !== undefined)
        data.shortDescription = shortDescription;
    if (description !== undefined)
        data.description = description;
    if (color !== undefined)
        data.color = color;
    if (fabric !== undefined)
        data.fabric = fabric;
    if (embroideryDetails !== undefined)
        data.embroideryDetails = embroideryDetails;
    if (occasion !== undefined)
        data.occasion = occasion;
    if (setIncludes !== undefined)
        data.setIncludes = setIncludes;
    if (careInstructions !== undefined)
        data.careInstructions = careInstructions;
    if (rentalPricePerDay !== undefined)
        data.rentalPricePerDay = rentalPricePerDay;
    if (discountPercent !== undefined)
        data.discountPercent = discountPercent;
    if (securityDeposit !== undefined)
        data.securityDeposit = securityDeposit;
    if (originalPrice !== undefined)
        data.originalPrice = originalPrice;
    if (minimumRentalDays !== undefined)
        data.minimumRentalDays = minimumRentalDays;
    if (pickupAvailable !== undefined)
        data.pickupAvailable = pickupAvailable;
    if (status !== undefined)
        data.status = status;
    if (isFeatured !== undefined)
        data.isFeatured = isFeatured;
    if (isLatest !== undefined)
        data.isLatest = isLatest;
    if (isCategoryFeatured !== undefined)
        data.isCategoryFeatured = isCategoryFeatured;
    if (Object.prototype.hasOwnProperty.call(body, "categoryId")) {
        const categoryId = getOptionalString(body, "categoryId");
        data.category = categoryId
            ? { connect: { id: categoryId } }
            : { disconnect: true };
    }
    if (rawImages) {
        const nextCategoryId = Object.prototype.hasOwnProperty.call(body, "categoryId")
            ? getOptionalString(body, "categoryId")
            : undefined;
        const categorySlug = nextCategoryId !== undefined
            ? await getCategorySlug(nextCategoryId)
            : existingLehenga?.category?.slug;
        const nextSlug = slugify(slugValue ?? name ?? existingLehenga?.slug ?? existingLehenga?.name ?? "lehenga");
        const images = await uploadCatalogImages(rawImages, {
            category: "lehengas",
            categorySlug,
            productSlug: nextSlug,
        });
        data.images = {
            deleteMany: {},
            create: images,
        };
    }
    const lehenga = await prisma.$transaction(async (tx) => {
        await tx.lehenga.update({
            where: { id: lehengaId },
            data,
        });
        if (sizes) {
            const existingSizes = await tx.lehengaSize.findMany({
                where: { lehengaId },
                orderBy: { createdAt: "asc" },
            });
            for (const [index, size] of sizes.entries()) {
                const existingSize = existingSizes.find((entry) => entry.sizeLabel === size.sizeLabel) ?? existingSizes[index] ?? null;
                if (existingSize) {
                    await tx.lehengaSize.update({
                        where: { id: existingSize.id },
                        data: size,
                    });
                }
                else {
                    await tx.lehengaSize.create({
                        data: {
                            ...size,
                            lehenga: {
                                connect: { id: lehengaId },
                            },
                        },
                    });
                }
            }
        }
        return tx.lehenga.findUniqueOrThrow({
            where: { id: lehengaId },
            include: lehengaInclude,
        });
    });
    response.json({
        success: true,
        message: "Lehenga updated successfully",
        data: lehenga,
    });
}));
lehengasRouter.delete("/:id", asyncHandler(async (request, response) => {
    const lehengaId = getRouteParam(request.params.id, "id");
    await prisma.lehenga.delete({
        where: { id: lehengaId },
    });
    response.json({
        success: true,
        message: "Lehenga deleted successfully",
    });
}));
//# sourceMappingURL=lehengas.routes.js.map