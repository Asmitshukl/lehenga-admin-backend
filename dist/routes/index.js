import { Router } from "express";
import { getCatalogCacheMode, invalidateAvailabilityCache } from "../lib/catalog-cache.js";
import { requireAdmin } from "../middleware/auth.js";
import { invalidateCatalogCacheAfterMutation } from "../middleware/catalog-cache-invalidation.js";
import { authRouter } from "./auth.routes.js";
import { categoriesRouter } from "./categories.routes.js";
import { customersRouter } from "./customers.routes.js";
import { invoicesRouter } from "./invoices.routes.js";
import { jewelleryRouter } from "./jewellery.routes.js";
import { lehengasRouter } from "./lehengas.routes.js";
import { ordersRouter } from "./orders.routes.js";
import { publicRouter } from "./public.routes.js";
export const apiRouter = Router();
apiRouter.get("/health", (_request, response) => {
    response.json({
        success: true,
        message: "Lehenga admin backend is running",
        catalogCache: getCatalogCacheMode(),
    });
});
apiRouter.use("/admin/auth", authRouter);
apiRouter.use("/public", publicRouter);
apiRouter.use("/admin/categories", requireAdmin, invalidateCatalogCacheAfterMutation, categoriesRouter);
apiRouter.use("/admin/lehengas", requireAdmin, invalidateCatalogCacheAfterMutation, lehengasRouter);
apiRouter.use("/admin/jewellery", requireAdmin, invalidateCatalogCacheAfterMutation, jewelleryRouter);
apiRouter.use("/admin/customers", requireAdmin, customersRouter);
apiRouter.use("/admin/invoices", requireAdmin, invoicesRouter);
apiRouter.use("/admin/orders", requireAdmin, (request, response, next) => {
    if (request.method !== "GET") {
        response.on("finish", () => {
            if (response.statusCode >= 200 && response.statusCode < 300) {
                void invalidateAvailabilityCache();
            }
        });
    }
    next();
}, ordersRouter);
//# sourceMappingURL=index.js.map