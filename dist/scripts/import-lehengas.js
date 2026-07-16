import fs from "node:fs/promises";
import path from "node:path";
import { CategoryStyle, ProductStatus } from "../generated/prisma/enums.js";
import { invalidateCatalogCache } from "../lib/catalog-cache.js";
import { prisma } from "../lib/prisma.js";
import { getCatalogImageUrl, normalizeCatalogImageUrl } from "../utils/catalog-image-url.js";
import { uploadCatalogImageBuffer } from "../utils/s3-upload.js";
import { slugify } from "../utils/slug.js";
const categoryLabels = {
    BRIDAL: "Bridal",
    SEMI_BRIDAL: "Semi Bridal",
    GOWN: "Gown",
    KHADI: "Khadi",
    JEWELLERY: "Jewellery",
};
function readArg(name) {
    const exact = `--${name}`;
    const prefix = `${exact}=`;
    const value = process.argv.find((argument) => argument === exact || argument.startsWith(prefix));
    if (!value) {
        return undefined;
    }
    return value === exact ? "true" : value.slice(prefix.length);
}
function getOptions() {
    const sourceDirectory = path.resolve(readArg("source") ?? "../lehenga-editor");
    const metadataPath = path.resolve(sourceDirectory, readArg("metadata") ?? "final_image_details.json");
    const statusValue = (readArg("status") ?? ProductStatus.ACTIVE).toUpperCase();
    if (!Object.values(ProductStatus).includes(statusValue)) {
        throw new Error(`--status must be one of: ${Object.values(ProductStatus).join(", ")}`);
    }
    return {
        sourceDirectory,
        metadataPath,
        dryRun: readArg("dry-run") === "true",
        forceImages: readArg("force-images") === "true",
        status: statusValue,
    };
}
function assertNonEmptyString(value, label) {
    if (typeof value !== "string" || value.trim().length === 0) {
        throw new Error(`${label} must be a non-empty string`);
    }
}
function assertFiniteNumber(value, label) {
    if (typeof value !== "number" || !Number.isFinite(value)) {
        throw new Error(`${label} must be a finite number`);
    }
}
function validateProduct(value, index) {
    if (!value || typeof value !== "object" || Array.isArray(value)) {
        throw new Error(`Product at index ${index} must be an object`);
    }
    const product = value;
    assertNonEmptyString(product.name, `products[${index}].name`);
    assertNonEmptyString(product.sku, `products[${index}].sku`);
    assertFiniteNumber(product.rentalPricePerDay, `products[${index}].rentalPricePerDay`);
    if (!Object.values(CategoryStyle).includes(product.category)) {
        throw new Error(`products[${index}].category must be one of: ${Object.values(CategoryStyle).join(", ")}`);
    }
    if (!Array.isArray(product.images) || product.images.length === 0) {
        throw new Error(`products[${index}].images must be a non-empty array`);
    }
    for (const [imageIndex, image] of product.images.entries()) {
        assertNonEmptyString(image, `products[${index}].images[${imageIndex}]`);
    }
    if (product.securityDeposit !== undefined) {
        assertFiniteNumber(product.securityDeposit, `products[${index}].securityDeposit`);
    }
    if (product.minimumRentalDays !== undefined) {
        assertFiniteNumber(product.minimumRentalDays, `products[${index}].minimumRentalDays`);
    }
    if (product.availableQuantity !== undefined) {
        assertFiniteNumber(product.availableQuantity, `products[${index}].availableQuantity`);
    }
    return product;
}
async function readProducts(options) {
    const rawMetadata = await fs.readFile(options.metadataPath, "utf8");
    const parsedMetadata = JSON.parse(rawMetadata);
    if (!Array.isArray(parsedMetadata) || parsedMetadata.length === 0) {
        throw new Error("Metadata must contain a non-empty product array");
    }
    const products = parsedMetadata.map(validateProduct);
    const seenSkus = new Set();
    const seenSlugs = new Set();
    for (const product of products) {
        if (seenSkus.has(product.sku)) {
            throw new Error(`Duplicate SKU in metadata: ${product.sku}`);
        }
        const slug = slugify(product.name);
        if (seenSlugs.has(slug)) {
            throw new Error(`Duplicate generated slug in metadata: ${slug}`);
        }
        seenSkus.add(product.sku);
        seenSlugs.add(slug);
        for (const image of product.images) {
            const imagePath = path.resolve(options.sourceDirectory, image);
            const stats = await fs.stat(imagePath).catch(() => null);
            if (!stats?.isFile()) {
                throw new Error(`Missing image for ${product.sku}: ${imagePath}`);
            }
        }
    }
    return products;
}
function getContentType(filePath) {
    switch (path.extname(filePath).toLowerCase()) {
        case ".jpg":
        case ".jpeg":
            return "image/jpeg";
        case ".png":
            return "image/png";
        case ".webp":
            return "image/webp";
        case ".gif":
            return "image/gif";
        case ".avif":
            return "image/avif";
        default:
            throw new Error(`Unsupported image type: ${filePath}`);
    }
}
function sanitizeKeySegment(value) {
    return value
        .trim()
        .toLowerCase()
        .replace(/[^a-z0-9._-]+/g, "-")
        .replace(/^-+|-+$/g, "");
}
function buildImageKey(product, imagePath, index) {
    const category = product.category.toLowerCase().replaceAll("_", "-");
    const sku = sanitizeKeySegment(product.sku);
    const extension = path.extname(imagePath).toLowerCase();
    return `catalog/imports/${category}/lehengas/${sku}/${String(index + 1).padStart(2, "0")}${extension}`;
}
async function ensureCategories(products, dryRun) {
    const styles = [...new Set(products.map((product) => product.category))];
    const categories = new Map();
    for (const style of styles) {
        if (dryRun) {
            categories.set(style, `dry-run-${style}`);
            continue;
        }
        const name = categoryLabels[style];
        const category = await prisma.category.upsert({
            where: { style },
            create: {
                style,
                name,
                slug: slugify(name),
            },
            update: {},
            select: { id: true },
        });
        categories.set(style, category.id);
    }
    return categories;
}
async function importProduct(product, options, categoryId) {
    const slug = slugify(product.name);
    const expectedImages = product.images.map((relativeImagePath, index) => {
        const absoluteImagePath = path.resolve(options.sourceDirectory, relativeImagePath);
        const key = buildImageKey(product, absoluteImagePath, index);
        return {
            absoluteImagePath,
            imageUrl: getCatalogImageUrl(key),
            key,
            altText: product.name,
            isPrimary: index === 0,
            sortOrder: index,
        };
    });
    const existing = options.dryRun
        ? null
        : await prisma.lehenga.findUnique({
            where: { sku: product.sku },
            include: {
                images: {
                    orderBy: { sortOrder: "asc" },
                },
                sizes: true,
            },
        });
    const imagesMatch = existing?.images.length === expectedImages.length &&
        existing.images.every((image, index) => normalizeCatalogImageUrl(image.imageUrl) === expectedImages[index]?.imageUrl);
    const uploadImages = options.forceImages || !imagesMatch;
    if (options.dryRun) {
        return {
            action: "validated",
            uploadedImages: expectedImages.length,
        };
    }
    if (uploadImages) {
        for (const image of expectedImages) {
            await uploadCatalogImageBuffer({
                buffer: await fs.readFile(image.absoluteImagePath),
                contentType: getContentType(image.absoluteImagePath),
                key: image.key,
            });
        }
    }
    const quantityTotal = Math.max(0, Math.floor(product.availableQuantity ?? 1));
    const commonData = {
        name: product.name,
        slug,
        rentalPricePerDay: product.rentalPricePerDay,
        minimumRentalDays: Math.max(1, Math.floor(product.minimumRentalDays ?? 1)),
        status: options.status,
        category: {
            connect: { id: categoryId },
        },
        ...(product.shortDescription !== undefined
            ? { shortDescription: product.shortDescription }
            : {}),
        ...(product.description !== undefined ? { description: product.description } : {}),
        ...(product.securityDeposit !== undefined
            ? { securityDeposit: product.securityDeposit }
            : {}),
    };
    if (!existing) {
        await prisma.lehenga.create({
            data: {
                ...commonData,
                sku: product.sku,
                sizes: {
                    create: {
                        sizeLabel: "Free Size",
                        quantityTotal,
                        quantityReserved: 0,
                    },
                },
                images: {
                    create: expectedImages.map(({ absoluteImagePath: _path, key: _key, ...image }) => image),
                },
            },
        });
        return {
            action: "created",
            uploadedImages: expectedImages.length,
        };
    }
    await prisma.$transaction(async (transaction) => {
        await transaction.lehenga.update({
            where: { id: existing.id },
            data: commonData,
        });
        const freeSize = existing.sizes.find((size) => size.sizeLabel === "Free Size");
        if (freeSize) {
            await transaction.lehengaSize.update({
                where: { id: freeSize.id },
                data: { quantityTotal },
            });
        }
        else {
            await transaction.lehengaSize.create({
                data: {
                    lehengaId: existing.id,
                    sizeLabel: "Free Size",
                    quantityTotal,
                    quantityReserved: 0,
                },
            });
        }
        if (!imagesMatch) {
            await transaction.lehengaImage.deleteMany({
                where: { lehengaId: existing.id },
            });
            await transaction.lehengaImage.createMany({
                data: expectedImages.map(({ absoluteImagePath: _path, key: _key, ...image }) => ({
                    ...image,
                    lehengaId: existing.id,
                })),
            });
        }
    });
    return {
        action: "updated",
        uploadedImages: uploadImages ? expectedImages.length : 0,
    };
}
async function main() {
    const options = getOptions();
    const products = await readProducts(options);
    const categories = await ensureCategories(products, options.dryRun);
    const summary = {
        validated: 0,
        created: 0,
        updated: 0,
        uploadedImages: 0,
        failed: 0,
    };
    console.log(`${options.dryRun ? "Validating" : "Importing"} ${products.length} products from ${options.metadataPath}`);
    for (const [index, product] of products.entries()) {
        try {
            const categoryId = categories.get(product.category);
            if (!categoryId) {
                throw new Error(`Category was not prepared: ${product.category}`);
            }
            const result = await importProduct(product, options, categoryId);
            summary[result.action] += 1;
            summary.uploadedImages += result.uploadedImages;
            console.log(`[${index + 1}/${products.length}] ${result.action.toUpperCase()} ${product.sku} - ${product.name}`);
        }
        catch (error) {
            summary.failed += 1;
            console.error(`[${index + 1}/${products.length}] FAILED ${product.sku} - ${product.name}`, error);
        }
    }
    if (!options.dryRun && summary.failed === 0) {
        await invalidateCatalogCache();
    }
    console.log(JSON.stringify(summary, null, 2));
    if (summary.failed > 0) {
        process.exitCode = 1;
    }
}
try {
    await main();
}
catch (error) {
    console.error("Bulk lehenga import failed", error);
    process.exitCode = 1;
}
finally {
    await prisma.$disconnect();
}
//# sourceMappingURL=import-lehengas.js.map