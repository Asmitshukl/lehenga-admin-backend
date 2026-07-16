import * as runtime from "@prisma/client/runtime/index-browser";
export type * from '../models.js';
export type * from './prismaNamespace.js';
export declare const Decimal: typeof runtime.Decimal;
export declare const NullTypes: {
    DbNull: (new (secret: never) => typeof runtime.DbNull);
    JsonNull: (new (secret: never) => typeof runtime.JsonNull);
    AnyNull: (new (secret: never) => typeof runtime.AnyNull);
};
/**
 * Helper for filtering JSON entries that have `null` on the database (empty on the db)
 *
 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
 */
export declare const DbNull: import("@prisma/client-runtime-utils").DbNullClass;
/**
 * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
 *
 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
 */
export declare const JsonNull: import("@prisma/client-runtime-utils").JsonNullClass;
/**
 * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
 *
 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
 */
export declare const AnyNull: import("@prisma/client-runtime-utils").AnyNullClass;
export declare const ModelName: {
    readonly AdminUser: "AdminUser";
    readonly Customer: "Customer";
    readonly Category: "Category";
    readonly Lehenga: "Lehenga";
    readonly LehengaSize: "LehengaSize";
    readonly LehengaImage: "LehengaImage";
    readonly Jewellery: "Jewellery";
    readonly JewelleryImage: "JewelleryImage";
    readonly StoreLocation: "StoreLocation";
    readonly RentalOrder: "RentalOrder";
    readonly CheckoutPaymentAttempt: "CheckoutPaymentAttempt";
    readonly RentalOrderItem: "RentalOrderItem";
    readonly Invoice: "Invoice";
    readonly InvoiceLineItem: "InvoiceLineItem";
    readonly ProductReview: "ProductReview";
};
export type ModelName = (typeof ModelName)[keyof typeof ModelName];
export declare const TransactionIsolationLevel: {
    readonly ReadUncommitted: "ReadUncommitted";
    readonly ReadCommitted: "ReadCommitted";
    readonly RepeatableRead: "RepeatableRead";
    readonly Serializable: "Serializable";
};
export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];
export declare const AdminUserScalarFieldEnum: {
    readonly id: "id";
    readonly name: "name";
    readonly email: "email";
    readonly passwordHash: "passwordHash";
    readonly phone: "phone";
    readonly isActive: "isActive";
    readonly lastLoginAt: "lastLoginAt";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type AdminUserScalarFieldEnum = (typeof AdminUserScalarFieldEnum)[keyof typeof AdminUserScalarFieldEnum];
export declare const CustomerScalarFieldEnum: {
    readonly id: "id";
    readonly firstName: "firstName";
    readonly lastName: "lastName";
    readonly email: "email";
    readonly phone: "phone";
    readonly passwordHash: "passwordHash";
    readonly notes: "notes";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type CustomerScalarFieldEnum = (typeof CustomerScalarFieldEnum)[keyof typeof CustomerScalarFieldEnum];
export declare const CategoryScalarFieldEnum: {
    readonly id: "id";
    readonly name: "name";
    readonly slug: "slug";
    readonly style: "style";
    readonly description: "description";
    readonly isFeatured: "isFeatured";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type CategoryScalarFieldEnum = (typeof CategoryScalarFieldEnum)[keyof typeof CategoryScalarFieldEnum];
export declare const LehengaScalarFieldEnum: {
    readonly id: "id";
    readonly name: "name";
    readonly slug: "slug";
    readonly sku: "sku";
    readonly shortDescription: "shortDescription";
    readonly description: "description";
    readonly designer: "designer";
    readonly color: "color";
    readonly fabric: "fabric";
    readonly embroideryDetails: "embroideryDetails";
    readonly occasion: "occasion";
    readonly setIncludes: "setIncludes";
    readonly careInstructions: "careInstructions";
    readonly rentalPricePerDay: "rentalPricePerDay";
    readonly discountPercent: "discountPercent";
    readonly securityDeposit: "securityDeposit";
    readonly originalPrice: "originalPrice";
    readonly minimumRentalDays: "minimumRentalDays";
    readonly pickupAvailable: "pickupAvailable";
    readonly status: "status";
    readonly isFeatured: "isFeatured";
    readonly isLatest: "isLatest";
    readonly isCategoryFeatured: "isCategoryFeatured";
    readonly categoryId: "categoryId";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type LehengaScalarFieldEnum = (typeof LehengaScalarFieldEnum)[keyof typeof LehengaScalarFieldEnum];
export declare const LehengaSizeScalarFieldEnum: {
    readonly id: "id";
    readonly lehengaId: "lehengaId";
    readonly sizeLabel: "sizeLabel";
    readonly blouseSize: "blouseSize";
    readonly waistInInches: "waistInInches";
    readonly bustInInches: "bustInInches";
    readonly hipInInches: "hipInInches";
    readonly lengthInInches: "lengthInInches";
    readonly quantityTotal: "quantityTotal";
    readonly quantityReserved: "quantityReserved";
    readonly notes: "notes";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type LehengaSizeScalarFieldEnum = (typeof LehengaSizeScalarFieldEnum)[keyof typeof LehengaSizeScalarFieldEnum];
export declare const LehengaImageScalarFieldEnum: {
    readonly id: "id";
    readonly lehengaId: "lehengaId";
    readonly imageUrl: "imageUrl";
    readonly altText: "altText";
    readonly isPrimary: "isPrimary";
    readonly sortOrder: "sortOrder";
    readonly createdAt: "createdAt";
};
export type LehengaImageScalarFieldEnum = (typeof LehengaImageScalarFieldEnum)[keyof typeof LehengaImageScalarFieldEnum];
export declare const JewelleryScalarFieldEnum: {
    readonly id: "id";
    readonly name: "name";
    readonly slug: "slug";
    readonly sku: "sku";
    readonly shortDescription: "shortDescription";
    readonly description: "description";
    readonly type: "type";
    readonly material: "material";
    readonly color: "color";
    readonly finish: "finish";
    readonly stoneDetails: "stoneDetails";
    readonly occasion: "occasion";
    readonly rentalPricePerDay: "rentalPricePerDay";
    readonly securityDeposit: "securityDeposit";
    readonly originalPrice: "originalPrice";
    readonly minimumRentalDays: "minimumRentalDays";
    readonly stockQuantity: "stockQuantity";
    readonly pickupAvailable: "pickupAvailable";
    readonly status: "status";
    readonly isFeatured: "isFeatured";
    readonly categoryId: "categoryId";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type JewelleryScalarFieldEnum = (typeof JewelleryScalarFieldEnum)[keyof typeof JewelleryScalarFieldEnum];
export declare const JewelleryImageScalarFieldEnum: {
    readonly id: "id";
    readonly jewelleryId: "jewelleryId";
    readonly imageUrl: "imageUrl";
    readonly altText: "altText";
    readonly isPrimary: "isPrimary";
    readonly sortOrder: "sortOrder";
    readonly createdAt: "createdAt";
};
export type JewelleryImageScalarFieldEnum = (typeof JewelleryImageScalarFieldEnum)[keyof typeof JewelleryImageScalarFieldEnum];
export declare const StoreLocationScalarFieldEnum: {
    readonly id: "id";
    readonly name: "name";
    readonly slug: "slug";
    readonly phone: "phone";
    readonly email: "email";
    readonly addressLine1: "addressLine1";
    readonly addressLine2: "addressLine2";
    readonly city: "city";
    readonly state: "state";
    readonly postalCode: "postalCode";
    readonly country: "country";
    readonly pickupNotes: "pickupNotes";
    readonly isActive: "isActive";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type StoreLocationScalarFieldEnum = (typeof StoreLocationScalarFieldEnum)[keyof typeof StoreLocationScalarFieldEnum];
export declare const RentalOrderScalarFieldEnum: {
    readonly id: "id";
    readonly orderNumber: "orderNumber";
    readonly customerId: "customerId";
    readonly pickupLocationId: "pickupLocationId";
    readonly createdByAdminId: "createdByAdminId";
    readonly status: "status";
    readonly paymentStatus: "paymentStatus";
    readonly paymentMethod: "paymentMethod";
    readonly rentalStartDate: "rentalStartDate";
    readonly rentalEndDate: "rentalEndDate";
    readonly pickupDate: "pickupDate";
    readonly returnDate: "returnDate";
    readonly subtotalAmount: "subtotalAmount";
    readonly securityDeposit: "securityDeposit";
    readonly discountAmount: "discountAmount";
    readonly totalAmount: "totalAmount";
    readonly amountPaid: "amountPaid";
    readonly amountDueAtPickup: "amountDueAtPickup";
    readonly depositRefundStatus: "depositRefundStatus";
    readonly depositRefundedAmount: "depositRefundedAmount";
    readonly depositRefundedAt: "depositRefundedAt";
    readonly depositRefundReference: "depositRefundReference";
    readonly depositRefundNotes: "depositRefundNotes";
    readonly paymentGatewayOrderId: "paymentGatewayOrderId";
    readonly paymentGatewayPaymentId: "paymentGatewayPaymentId";
    readonly paymentGatewaySignature: "paymentGatewaySignature";
    readonly paymentCapturedAt: "paymentCapturedAt";
    readonly specialInstructions: "specialInstructions";
    readonly internalNotes: "internalNotes";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type RentalOrderScalarFieldEnum = (typeof RentalOrderScalarFieldEnum)[keyof typeof RentalOrderScalarFieldEnum];
export declare const CheckoutPaymentAttemptScalarFieldEnum: {
    readonly id: "id";
    readonly paymentGatewayOrderId: "paymentGatewayOrderId";
    readonly paymentGatewayPaymentId: "paymentGatewayPaymentId";
    readonly paymentMethod: "paymentMethod";
    readonly paymentAmount: "paymentAmount";
    readonly checkoutPayload: "checkoutPayload";
    readonly customerId: "customerId";
    readonly status: "status";
    readonly expiresAt: "expiresAt";
    readonly rentalOrderId: "rentalOrderId";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type CheckoutPaymentAttemptScalarFieldEnum = (typeof CheckoutPaymentAttemptScalarFieldEnum)[keyof typeof CheckoutPaymentAttemptScalarFieldEnum];
export declare const RentalOrderItemScalarFieldEnum: {
    readonly id: "id";
    readonly orderId: "orderId";
    readonly itemType: "itemType";
    readonly lehengaId: "lehengaId";
    readonly lehengaSizeId: "lehengaSizeId";
    readonly jewelleryId: "jewelleryId";
    readonly productNameSnapshot: "productNameSnapshot";
    readonly skuSnapshot: "skuSnapshot";
    readonly sizeLabelSnapshot: "sizeLabelSnapshot";
    readonly quantity: "quantity";
    readonly rentalStartDate: "rentalStartDate";
    readonly rentalEndDate: "rentalEndDate";
    readonly pricePerDay: "pricePerDay";
    readonly rentalDays: "rentalDays";
    readonly lineTotal: "lineTotal";
    readonly depositAmount: "depositAmount";
    readonly measurementUpper: "measurementUpper";
    readonly measurementChest: "measurementChest";
    readonly measurementWaist: "measurementWaist";
    readonly measurementArmHole: "measurementArmHole";
    readonly measurementMori: "measurementMori";
    readonly measurementNotes: "measurementNotes";
    readonly createdAt: "createdAt";
};
export type RentalOrderItemScalarFieldEnum = (typeof RentalOrderItemScalarFieldEnum)[keyof typeof RentalOrderItemScalarFieldEnum];
export declare const InvoiceScalarFieldEnum: {
    readonly id: "id";
    readonly invoiceNumber: "invoiceNumber";
    readonly orderId: "orderId";
    readonly createdByAdminId: "createdByAdminId";
    readonly status: "status";
    readonly paymentStatus: "paymentStatus";
    readonly invoiceDate: "invoiceDate";
    readonly businessName: "businessName";
    readonly businessLogoUrl: "businessLogoUrl";
    readonly businessAddress: "businessAddress";
    readonly businessPhone: "businessPhone";
    readonly businessEmail: "businessEmail";
    readonly customerName: "customerName";
    readonly customerPhone: "customerPhone";
    readonly customerEmail: "customerEmail";
    readonly orderNumberSnapshot: "orderNumberSnapshot";
    readonly rentalFee: "rentalFee";
    readonly securityDeposit: "securityDeposit";
    readonly dryCleaningCharge: "dryCleaningCharge";
    readonly alterationCharge: "alterationCharge";
    readonly deliveryCharge: "deliveryCharge";
    readonly otherCharge: "otherCharge";
    readonly discountAmount: "discountAmount";
    readonly totalPayable: "totalPayable";
    readonly amountPaid: "amountPaid";
    readonly balanceDue: "balanceDue";
    readonly paymentMode: "paymentMode";
    readonly returnDateTime: "returnDateTime";
    readonly lateFeePolicy: "lateFeePolicy";
    readonly conditionNotes: "conditionNotes";
    readonly damagePolicy: "damagePolicy";
    readonly cancellationPolicy: "cancellationPolicy";
    readonly acknowledgementName: "acknowledgementName";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type InvoiceScalarFieldEnum = (typeof InvoiceScalarFieldEnum)[keyof typeof InvoiceScalarFieldEnum];
export declare const InvoiceLineItemScalarFieldEnum: {
    readonly id: "id";
    readonly invoiceId: "invoiceId";
    readonly itemType: "itemType";
    readonly productNameSnapshot: "productNameSnapshot";
    readonly skuSnapshot: "skuSnapshot";
    readonly imageUrlSnapshot: "imageUrlSnapshot";
    readonly sizeLabelSnapshot: "sizeLabelSnapshot";
    readonly quantity: "quantity";
    readonly rentalStartDate: "rentalStartDate";
    readonly rentalEndDate: "rentalEndDate";
    readonly rentalDays: "rentalDays";
    readonly rentalPricePerDay: "rentalPricePerDay";
    readonly lineTotal: "lineTotal";
    readonly depositAmount: "depositAmount";
    readonly createdAt: "createdAt";
};
export type InvoiceLineItemScalarFieldEnum = (typeof InvoiceLineItemScalarFieldEnum)[keyof typeof InvoiceLineItemScalarFieldEnum];
export declare const ProductReviewScalarFieldEnum: {
    readonly id: "id";
    readonly customerId: "customerId";
    readonly itemType: "itemType";
    readonly lehengaId: "lehengaId";
    readonly jewelleryId: "jewelleryId";
    readonly rating: "rating";
    readonly comment: "comment";
    readonly isVisible: "isVisible";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type ProductReviewScalarFieldEnum = (typeof ProductReviewScalarFieldEnum)[keyof typeof ProductReviewScalarFieldEnum];
export declare const SortOrder: {
    readonly asc: "asc";
    readonly desc: "desc";
};
export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];
export declare const JsonNullValueInput: {
    readonly JsonNull: import("@prisma/client-runtime-utils").JsonNullClass;
};
export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput];
export declare const QueryMode: {
    readonly default: "default";
    readonly insensitive: "insensitive";
};
export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode];
export declare const NullsOrder: {
    readonly first: "first";
    readonly last: "last";
};
export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder];
export declare const JsonNullValueFilter: {
    readonly DbNull: import("@prisma/client-runtime-utils").DbNullClass;
    readonly JsonNull: import("@prisma/client-runtime-utils").JsonNullClass;
    readonly AnyNull: import("@prisma/client-runtime-utils").AnyNullClass;
};
export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter];
//# sourceMappingURL=prismaNamespaceBrowser.d.ts.map