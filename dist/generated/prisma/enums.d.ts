export declare const ProductStatus: {
    readonly DRAFT: "DRAFT";
    readonly ACTIVE: "ACTIVE";
    readonly ARCHIVED: "ARCHIVED";
};
export type ProductStatus = (typeof ProductStatus)[keyof typeof ProductStatus];
export declare const CategoryStyle: {
    readonly BRIDAL: "BRIDAL";
    readonly SEMI_BRIDAL: "SEMI_BRIDAL";
    readonly GOWN: "GOWN";
    readonly KHADI: "KHADI";
    readonly JEWELLERY: "JEWELLERY";
};
export type CategoryStyle = (typeof CategoryStyle)[keyof typeof CategoryStyle];
export declare const JewelleryType: {
    readonly NECKLACE: "NECKLACE";
    readonly EARRINGS: "EARRINGS";
    readonly MAANG_TIKKA: "MAANG_TIKKA";
    readonly BANGLE: "BANGLE";
    readonly BRACELET: "BRACELET";
    readonly RING: "RING";
    readonly NATH: "NATH";
    readonly WAIST_BELT: "WAIST_BELT";
    readonly ANKLET: "ANKLET";
    readonly BROOCH: "BROOCH";
    readonly SET: "SET";
    readonly OTHER: "OTHER";
};
export type JewelleryType = (typeof JewelleryType)[keyof typeof JewelleryType];
export declare const OrderStatus: {
    readonly PENDING: "PENDING";
    readonly CONFIRMED: "CONFIRMED";
    readonly READY_FOR_PICKUP: "READY_FOR_PICKUP";
    readonly PICKED_UP: "PICKED_UP";
    readonly RETURNED: "RETURNED";
    readonly FULFILLED: "FULFILLED";
    readonly CANCELLED: "CANCELLED";
};
export type OrderStatus = (typeof OrderStatus)[keyof typeof OrderStatus];
export declare const PaymentStatus: {
    readonly PENDING: "PENDING";
    readonly PARTIALLY_PAID: "PARTIALLY_PAID";
    readonly PAID: "PAID";
    readonly REFUNDED: "REFUNDED";
    readonly FAILED: "FAILED";
};
export type PaymentStatus = (typeof PaymentStatus)[keyof typeof PaymentStatus];
export declare const PaymentMethod: {
    readonly ONLINE: "ONLINE";
    readonly PICKUP: "PICKUP";
};
export type PaymentMethod = (typeof PaymentMethod)[keyof typeof PaymentMethod];
export declare const DepositRefundStatus: {
    readonly NOT_APPLICABLE: "NOT_APPLICABLE";
    readonly PENDING: "PENDING";
    readonly REFUNDED: "REFUNDED";
    readonly FAILED: "FAILED";
};
export type DepositRefundStatus = (typeof DepositRefundStatus)[keyof typeof DepositRefundStatus];
export declare const RentalItemType: {
    readonly LEHENGA: "LEHENGA";
    readonly JEWELLERY: "JEWELLERY";
};
export type RentalItemType = (typeof RentalItemType)[keyof typeof RentalItemType];
export declare const CheckoutPaymentAttemptStatus: {
    readonly INITIATED: "INITIATED";
    readonly VERIFIED: "VERIFIED";
    readonly CANCELLED: "CANCELLED";
    readonly EXPIRED: "EXPIRED";
};
export type CheckoutPaymentAttemptStatus = (typeof CheckoutPaymentAttemptStatus)[keyof typeof CheckoutPaymentAttemptStatus];
export declare const InvoiceStatus: {
    readonly ISSUED: "ISSUED";
    readonly CANCELLED: "CANCELLED";
};
export type InvoiceStatus = (typeof InvoiceStatus)[keyof typeof InvoiceStatus];
export declare const InvoicePaymentStatus: {
    readonly PENDING: "PENDING";
    readonly PARTIAL: "PARTIAL";
    readonly PAID: "PAID";
};
export type InvoicePaymentStatus = (typeof InvoicePaymentStatus)[keyof typeof InvoicePaymentStatus];
//# sourceMappingURL=enums.d.ts.map