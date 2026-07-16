import { Router } from "express";
import { CategoryStyle } from "../generated/prisma/enums.js";
import { Prisma } from "../generated/prisma/client.js";
import { sendCachedAdminResponse } from "../lib/catalog-cache.js";
import { prisma } from "../lib/prisma.js";
import { asyncHandler } from "../utils/async-handler.js";
import { AppError } from "../utils/app-error.js";
import { slugify } from "../utils/slug.js";
import { ensureObject, getOptionalBoolean, getOptionalString, getRequiredEnum, getRouteParam, } from "../utils/validation.js";
const categoryLabels = {
    BRIDAL: "Bridal",
    SEMI_BRIDAL: "Semi Bridal",
    GOWN: "Gown",
    KHADI: "Khadi",
    JEWELLERY: "Jewellery",
};
export const categoriesRouter = Router();
categoriesRouter.get("/", asyncHandler(async (_request, response) => {
    await sendCachedAdminResponse(response, ["categories", "all"], () => prisma.category.findMany({
        orderBy: {
            createdAt: "asc",
        },
        include: {
            _count: {
                select: {
                    lehengas: true,
                    jewelleryItems: true,
                },
            },
        },
    }));
}));
categoriesRouter.post("/", asyncHandler(async (request, response) => {
    const body = ensureObject(request.body);
    const style = getRequiredEnum(body, "style", Object.values(CategoryStyle));
    const name = categoryLabels[style];
    const description = getOptionalString(body, "description");
    const isFeatured = getOptionalBoolean(body, "isFeatured");
    const data = {
        name,
        slug: slugify(name),
        style,
    };
    if (description !== undefined) {
        data.description = description;
    }
    if (isFeatured !== undefined) {
        data.isFeatured = isFeatured;
    }
    const category = await prisma.category.create({
        data,
    });
    response.status(201).json({
        success: true,
        message: "Category created successfully",
        data: category,
    });
}));
categoriesRouter.get("/:id", asyncHandler(async (request, response) => {
    const categoryId = getRouteParam(request.params.id, "id");
    const category = await prisma.category.findUnique({
        where: { id: categoryId },
        include: {
            lehengas: {
                orderBy: { createdAt: "desc" },
                include: {
                    images: {
                        orderBy: { sortOrder: "asc" },
                    },
                },
            },
            jewelleryItems: {
                orderBy: { createdAt: "desc" },
                include: {
                    images: {
                        orderBy: { sortOrder: "asc" },
                    },
                },
            },
        },
    });
    if (!category) {
        throw new AppError("Category not found", 404);
    }
    response.json({
        success: true,
        data: category,
    });
}));
categoriesRouter.patch("/:id", asyncHandler(async (request, response) => {
    const body = ensureObject(request.body);
    const categoryId = getRouteParam(request.params.id, "id");
    const description = getOptionalString(body, "description");
    const isFeatured = getOptionalBoolean(body, "isFeatured");
    const data = {};
    if (description !== undefined) {
        data.description = description;
    }
    if (isFeatured !== undefined) {
        data.isFeatured = isFeatured;
    }
    const category = await prisma.category.update({
        where: { id: categoryId },
        data,
    });
    response.json({
        success: true,
        message: "Category updated successfully",
        data: category,
    });
}));
categoriesRouter.delete("/:id", asyncHandler(async (request, response) => {
    const categoryId = getRouteParam(request.params.id, "id");
    await prisma.category.delete({
        where: { id: categoryId },
    });
    response.json({
        success: true,
        message: "Category deleted successfully",
    });
}));
//# sourceMappingURL=categories.routes.js.map