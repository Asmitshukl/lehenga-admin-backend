import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model RentalOrder
 *
 */
export type RentalOrderModel = runtime.Types.Result.DefaultSelection<Prisma.$RentalOrderPayload>;
export type AggregateRentalOrder = {
    _count: RentalOrderCountAggregateOutputType | null;
    _avg: RentalOrderAvgAggregateOutputType | null;
    _sum: RentalOrderSumAggregateOutputType | null;
    _min: RentalOrderMinAggregateOutputType | null;
    _max: RentalOrderMaxAggregateOutputType | null;
};
export type RentalOrderAvgAggregateOutputType = {
    subtotalAmount: runtime.Decimal | null;
    securityDeposit: runtime.Decimal | null;
    discountAmount: runtime.Decimal | null;
    totalAmount: runtime.Decimal | null;
    amountPaid: runtime.Decimal | null;
    amountDueAtPickup: runtime.Decimal | null;
    depositRefundedAmount: runtime.Decimal | null;
};
export type RentalOrderSumAggregateOutputType = {
    subtotalAmount: runtime.Decimal | null;
    securityDeposit: runtime.Decimal | null;
    discountAmount: runtime.Decimal | null;
    totalAmount: runtime.Decimal | null;
    amountPaid: runtime.Decimal | null;
    amountDueAtPickup: runtime.Decimal | null;
    depositRefundedAmount: runtime.Decimal | null;
};
export type RentalOrderMinAggregateOutputType = {
    id: string | null;
    orderNumber: string | null;
    customerId: string | null;
    pickupLocationId: string | null;
    createdByAdminId: string | null;
    status: $Enums.OrderStatus | null;
    paymentStatus: $Enums.PaymentStatus | null;
    paymentMethod: $Enums.PaymentMethod | null;
    rentalStartDate: Date | null;
    rentalEndDate: Date | null;
    pickupDate: Date | null;
    returnDate: Date | null;
    subtotalAmount: runtime.Decimal | null;
    securityDeposit: runtime.Decimal | null;
    discountAmount: runtime.Decimal | null;
    totalAmount: runtime.Decimal | null;
    amountPaid: runtime.Decimal | null;
    amountDueAtPickup: runtime.Decimal | null;
    depositRefundStatus: $Enums.DepositRefundStatus | null;
    depositRefundedAmount: runtime.Decimal | null;
    depositRefundedAt: Date | null;
    depositRefundReference: string | null;
    depositRefundNotes: string | null;
    paymentGatewayOrderId: string | null;
    paymentGatewayPaymentId: string | null;
    paymentGatewaySignature: string | null;
    paymentCapturedAt: Date | null;
    specialInstructions: string | null;
    internalNotes: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type RentalOrderMaxAggregateOutputType = {
    id: string | null;
    orderNumber: string | null;
    customerId: string | null;
    pickupLocationId: string | null;
    createdByAdminId: string | null;
    status: $Enums.OrderStatus | null;
    paymentStatus: $Enums.PaymentStatus | null;
    paymentMethod: $Enums.PaymentMethod | null;
    rentalStartDate: Date | null;
    rentalEndDate: Date | null;
    pickupDate: Date | null;
    returnDate: Date | null;
    subtotalAmount: runtime.Decimal | null;
    securityDeposit: runtime.Decimal | null;
    discountAmount: runtime.Decimal | null;
    totalAmount: runtime.Decimal | null;
    amountPaid: runtime.Decimal | null;
    amountDueAtPickup: runtime.Decimal | null;
    depositRefundStatus: $Enums.DepositRefundStatus | null;
    depositRefundedAmount: runtime.Decimal | null;
    depositRefundedAt: Date | null;
    depositRefundReference: string | null;
    depositRefundNotes: string | null;
    paymentGatewayOrderId: string | null;
    paymentGatewayPaymentId: string | null;
    paymentGatewaySignature: string | null;
    paymentCapturedAt: Date | null;
    specialInstructions: string | null;
    internalNotes: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type RentalOrderCountAggregateOutputType = {
    id: number;
    orderNumber: number;
    customerId: number;
    pickupLocationId: number;
    createdByAdminId: number;
    status: number;
    paymentStatus: number;
    paymentMethod: number;
    rentalStartDate: number;
    rentalEndDate: number;
    pickupDate: number;
    returnDate: number;
    subtotalAmount: number;
    securityDeposit: number;
    discountAmount: number;
    totalAmount: number;
    amountPaid: number;
    amountDueAtPickup: number;
    depositRefundStatus: number;
    depositRefundedAmount: number;
    depositRefundedAt: number;
    depositRefundReference: number;
    depositRefundNotes: number;
    paymentGatewayOrderId: number;
    paymentGatewayPaymentId: number;
    paymentGatewaySignature: number;
    paymentCapturedAt: number;
    specialInstructions: number;
    internalNotes: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type RentalOrderAvgAggregateInputType = {
    subtotalAmount?: true;
    securityDeposit?: true;
    discountAmount?: true;
    totalAmount?: true;
    amountPaid?: true;
    amountDueAtPickup?: true;
    depositRefundedAmount?: true;
};
export type RentalOrderSumAggregateInputType = {
    subtotalAmount?: true;
    securityDeposit?: true;
    discountAmount?: true;
    totalAmount?: true;
    amountPaid?: true;
    amountDueAtPickup?: true;
    depositRefundedAmount?: true;
};
export type RentalOrderMinAggregateInputType = {
    id?: true;
    orderNumber?: true;
    customerId?: true;
    pickupLocationId?: true;
    createdByAdminId?: true;
    status?: true;
    paymentStatus?: true;
    paymentMethod?: true;
    rentalStartDate?: true;
    rentalEndDate?: true;
    pickupDate?: true;
    returnDate?: true;
    subtotalAmount?: true;
    securityDeposit?: true;
    discountAmount?: true;
    totalAmount?: true;
    amountPaid?: true;
    amountDueAtPickup?: true;
    depositRefundStatus?: true;
    depositRefundedAmount?: true;
    depositRefundedAt?: true;
    depositRefundReference?: true;
    depositRefundNotes?: true;
    paymentGatewayOrderId?: true;
    paymentGatewayPaymentId?: true;
    paymentGatewaySignature?: true;
    paymentCapturedAt?: true;
    specialInstructions?: true;
    internalNotes?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type RentalOrderMaxAggregateInputType = {
    id?: true;
    orderNumber?: true;
    customerId?: true;
    pickupLocationId?: true;
    createdByAdminId?: true;
    status?: true;
    paymentStatus?: true;
    paymentMethod?: true;
    rentalStartDate?: true;
    rentalEndDate?: true;
    pickupDate?: true;
    returnDate?: true;
    subtotalAmount?: true;
    securityDeposit?: true;
    discountAmount?: true;
    totalAmount?: true;
    amountPaid?: true;
    amountDueAtPickup?: true;
    depositRefundStatus?: true;
    depositRefundedAmount?: true;
    depositRefundedAt?: true;
    depositRefundReference?: true;
    depositRefundNotes?: true;
    paymentGatewayOrderId?: true;
    paymentGatewayPaymentId?: true;
    paymentGatewaySignature?: true;
    paymentCapturedAt?: true;
    specialInstructions?: true;
    internalNotes?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type RentalOrderCountAggregateInputType = {
    id?: true;
    orderNumber?: true;
    customerId?: true;
    pickupLocationId?: true;
    createdByAdminId?: true;
    status?: true;
    paymentStatus?: true;
    paymentMethod?: true;
    rentalStartDate?: true;
    rentalEndDate?: true;
    pickupDate?: true;
    returnDate?: true;
    subtotalAmount?: true;
    securityDeposit?: true;
    discountAmount?: true;
    totalAmount?: true;
    amountPaid?: true;
    amountDueAtPickup?: true;
    depositRefundStatus?: true;
    depositRefundedAmount?: true;
    depositRefundedAt?: true;
    depositRefundReference?: true;
    depositRefundNotes?: true;
    paymentGatewayOrderId?: true;
    paymentGatewayPaymentId?: true;
    paymentGatewaySignature?: true;
    paymentCapturedAt?: true;
    specialInstructions?: true;
    internalNotes?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type RentalOrderAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which RentalOrder to aggregate.
     */
    where?: Prisma.RentalOrderWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of RentalOrders to fetch.
     */
    orderBy?: Prisma.RentalOrderOrderByWithRelationInput | Prisma.RentalOrderOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.RentalOrderWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` RentalOrders from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` RentalOrders.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned RentalOrders
    **/
    _count?: true | RentalOrderCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: RentalOrderAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: RentalOrderSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: RentalOrderMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: RentalOrderMaxAggregateInputType;
};
export type GetRentalOrderAggregateType<T extends RentalOrderAggregateArgs> = {
    [P in keyof T & keyof AggregateRentalOrder]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateRentalOrder[P]> : Prisma.GetScalarType<T[P], AggregateRentalOrder[P]>;
};
export type RentalOrderGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.RentalOrderWhereInput;
    orderBy?: Prisma.RentalOrderOrderByWithAggregationInput | Prisma.RentalOrderOrderByWithAggregationInput[];
    by: Prisma.RentalOrderScalarFieldEnum[] | Prisma.RentalOrderScalarFieldEnum;
    having?: Prisma.RentalOrderScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: RentalOrderCountAggregateInputType | true;
    _avg?: RentalOrderAvgAggregateInputType;
    _sum?: RentalOrderSumAggregateInputType;
    _min?: RentalOrderMinAggregateInputType;
    _max?: RentalOrderMaxAggregateInputType;
};
export type RentalOrderGroupByOutputType = {
    id: string;
    orderNumber: string;
    customerId: string;
    pickupLocationId: string;
    createdByAdminId: string | null;
    status: $Enums.OrderStatus;
    paymentStatus: $Enums.PaymentStatus;
    paymentMethod: $Enums.PaymentMethod;
    rentalStartDate: Date;
    rentalEndDate: Date;
    pickupDate: Date | null;
    returnDate: Date | null;
    subtotalAmount: runtime.Decimal;
    securityDeposit: runtime.Decimal;
    discountAmount: runtime.Decimal;
    totalAmount: runtime.Decimal;
    amountPaid: runtime.Decimal;
    amountDueAtPickup: runtime.Decimal;
    depositRefundStatus: $Enums.DepositRefundStatus;
    depositRefundedAmount: runtime.Decimal;
    depositRefundedAt: Date | null;
    depositRefundReference: string | null;
    depositRefundNotes: string | null;
    paymentGatewayOrderId: string | null;
    paymentGatewayPaymentId: string | null;
    paymentGatewaySignature: string | null;
    paymentCapturedAt: Date | null;
    specialInstructions: string | null;
    internalNotes: string | null;
    createdAt: Date;
    updatedAt: Date;
    _count: RentalOrderCountAggregateOutputType | null;
    _avg: RentalOrderAvgAggregateOutputType | null;
    _sum: RentalOrderSumAggregateOutputType | null;
    _min: RentalOrderMinAggregateOutputType | null;
    _max: RentalOrderMaxAggregateOutputType | null;
};
export type GetRentalOrderGroupByPayload<T extends RentalOrderGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<RentalOrderGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof RentalOrderGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], RentalOrderGroupByOutputType[P]> : Prisma.GetScalarType<T[P], RentalOrderGroupByOutputType[P]>;
}>>;
export type RentalOrderWhereInput = {
    AND?: Prisma.RentalOrderWhereInput | Prisma.RentalOrderWhereInput[];
    OR?: Prisma.RentalOrderWhereInput[];
    NOT?: Prisma.RentalOrderWhereInput | Prisma.RentalOrderWhereInput[];
    id?: Prisma.StringFilter<"RentalOrder"> | string;
    orderNumber?: Prisma.StringFilter<"RentalOrder"> | string;
    customerId?: Prisma.StringFilter<"RentalOrder"> | string;
    pickupLocationId?: Prisma.StringFilter<"RentalOrder"> | string;
    createdByAdminId?: Prisma.StringNullableFilter<"RentalOrder"> | string | null;
    status?: Prisma.EnumOrderStatusFilter<"RentalOrder"> | $Enums.OrderStatus;
    paymentStatus?: Prisma.EnumPaymentStatusFilter<"RentalOrder"> | $Enums.PaymentStatus;
    paymentMethod?: Prisma.EnumPaymentMethodFilter<"RentalOrder"> | $Enums.PaymentMethod;
    rentalStartDate?: Prisma.DateTimeFilter<"RentalOrder"> | Date | string;
    rentalEndDate?: Prisma.DateTimeFilter<"RentalOrder"> | Date | string;
    pickupDate?: Prisma.DateTimeNullableFilter<"RentalOrder"> | Date | string | null;
    returnDate?: Prisma.DateTimeNullableFilter<"RentalOrder"> | Date | string | null;
    subtotalAmount?: Prisma.DecimalFilter<"RentalOrder"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    securityDeposit?: Prisma.DecimalFilter<"RentalOrder"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    discountAmount?: Prisma.DecimalFilter<"RentalOrder"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalAmount?: Prisma.DecimalFilter<"RentalOrder"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    amountPaid?: Prisma.DecimalFilter<"RentalOrder"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    amountDueAtPickup?: Prisma.DecimalFilter<"RentalOrder"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    depositRefundStatus?: Prisma.EnumDepositRefundStatusFilter<"RentalOrder"> | $Enums.DepositRefundStatus;
    depositRefundedAmount?: Prisma.DecimalFilter<"RentalOrder"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    depositRefundedAt?: Prisma.DateTimeNullableFilter<"RentalOrder"> | Date | string | null;
    depositRefundReference?: Prisma.StringNullableFilter<"RentalOrder"> | string | null;
    depositRefundNotes?: Prisma.StringNullableFilter<"RentalOrder"> | string | null;
    paymentGatewayOrderId?: Prisma.StringNullableFilter<"RentalOrder"> | string | null;
    paymentGatewayPaymentId?: Prisma.StringNullableFilter<"RentalOrder"> | string | null;
    paymentGatewaySignature?: Prisma.StringNullableFilter<"RentalOrder"> | string | null;
    paymentCapturedAt?: Prisma.DateTimeNullableFilter<"RentalOrder"> | Date | string | null;
    specialInstructions?: Prisma.StringNullableFilter<"RentalOrder"> | string | null;
    internalNotes?: Prisma.StringNullableFilter<"RentalOrder"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"RentalOrder"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"RentalOrder"> | Date | string;
    customer?: Prisma.XOR<Prisma.CustomerScalarRelationFilter, Prisma.CustomerWhereInput>;
    pickupLocation?: Prisma.XOR<Prisma.StoreLocationScalarRelationFilter, Prisma.StoreLocationWhereInput>;
    createdByAdmin?: Prisma.XOR<Prisma.AdminUserNullableScalarRelationFilter, Prisma.AdminUserWhereInput> | null;
    items?: Prisma.RentalOrderItemListRelationFilter;
    invoice?: Prisma.XOR<Prisma.InvoiceNullableScalarRelationFilter, Prisma.InvoiceWhereInput> | null;
    paymentAttempt?: Prisma.XOR<Prisma.CheckoutPaymentAttemptNullableScalarRelationFilter, Prisma.CheckoutPaymentAttemptWhereInput> | null;
};
export type RentalOrderOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    orderNumber?: Prisma.SortOrder;
    customerId?: Prisma.SortOrder;
    pickupLocationId?: Prisma.SortOrder;
    createdByAdminId?: Prisma.SortOrderInput | Prisma.SortOrder;
    status?: Prisma.SortOrder;
    paymentStatus?: Prisma.SortOrder;
    paymentMethod?: Prisma.SortOrder;
    rentalStartDate?: Prisma.SortOrder;
    rentalEndDate?: Prisma.SortOrder;
    pickupDate?: Prisma.SortOrderInput | Prisma.SortOrder;
    returnDate?: Prisma.SortOrderInput | Prisma.SortOrder;
    subtotalAmount?: Prisma.SortOrder;
    securityDeposit?: Prisma.SortOrder;
    discountAmount?: Prisma.SortOrder;
    totalAmount?: Prisma.SortOrder;
    amountPaid?: Prisma.SortOrder;
    amountDueAtPickup?: Prisma.SortOrder;
    depositRefundStatus?: Prisma.SortOrder;
    depositRefundedAmount?: Prisma.SortOrder;
    depositRefundedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    depositRefundReference?: Prisma.SortOrderInput | Prisma.SortOrder;
    depositRefundNotes?: Prisma.SortOrderInput | Prisma.SortOrder;
    paymentGatewayOrderId?: Prisma.SortOrderInput | Prisma.SortOrder;
    paymentGatewayPaymentId?: Prisma.SortOrderInput | Prisma.SortOrder;
    paymentGatewaySignature?: Prisma.SortOrderInput | Prisma.SortOrder;
    paymentCapturedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    specialInstructions?: Prisma.SortOrderInput | Prisma.SortOrder;
    internalNotes?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    customer?: Prisma.CustomerOrderByWithRelationInput;
    pickupLocation?: Prisma.StoreLocationOrderByWithRelationInput;
    createdByAdmin?: Prisma.AdminUserOrderByWithRelationInput;
    items?: Prisma.RentalOrderItemOrderByRelationAggregateInput;
    invoice?: Prisma.InvoiceOrderByWithRelationInput;
    paymentAttempt?: Prisma.CheckoutPaymentAttemptOrderByWithRelationInput;
};
export type RentalOrderWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    orderNumber?: string;
    paymentGatewayPaymentId?: string;
    AND?: Prisma.RentalOrderWhereInput | Prisma.RentalOrderWhereInput[];
    OR?: Prisma.RentalOrderWhereInput[];
    NOT?: Prisma.RentalOrderWhereInput | Prisma.RentalOrderWhereInput[];
    customerId?: Prisma.StringFilter<"RentalOrder"> | string;
    pickupLocationId?: Prisma.StringFilter<"RentalOrder"> | string;
    createdByAdminId?: Prisma.StringNullableFilter<"RentalOrder"> | string | null;
    status?: Prisma.EnumOrderStatusFilter<"RentalOrder"> | $Enums.OrderStatus;
    paymentStatus?: Prisma.EnumPaymentStatusFilter<"RentalOrder"> | $Enums.PaymentStatus;
    paymentMethod?: Prisma.EnumPaymentMethodFilter<"RentalOrder"> | $Enums.PaymentMethod;
    rentalStartDate?: Prisma.DateTimeFilter<"RentalOrder"> | Date | string;
    rentalEndDate?: Prisma.DateTimeFilter<"RentalOrder"> | Date | string;
    pickupDate?: Prisma.DateTimeNullableFilter<"RentalOrder"> | Date | string | null;
    returnDate?: Prisma.DateTimeNullableFilter<"RentalOrder"> | Date | string | null;
    subtotalAmount?: Prisma.DecimalFilter<"RentalOrder"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    securityDeposit?: Prisma.DecimalFilter<"RentalOrder"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    discountAmount?: Prisma.DecimalFilter<"RentalOrder"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalAmount?: Prisma.DecimalFilter<"RentalOrder"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    amountPaid?: Prisma.DecimalFilter<"RentalOrder"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    amountDueAtPickup?: Prisma.DecimalFilter<"RentalOrder"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    depositRefundStatus?: Prisma.EnumDepositRefundStatusFilter<"RentalOrder"> | $Enums.DepositRefundStatus;
    depositRefundedAmount?: Prisma.DecimalFilter<"RentalOrder"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    depositRefundedAt?: Prisma.DateTimeNullableFilter<"RentalOrder"> | Date | string | null;
    depositRefundReference?: Prisma.StringNullableFilter<"RentalOrder"> | string | null;
    depositRefundNotes?: Prisma.StringNullableFilter<"RentalOrder"> | string | null;
    paymentGatewayOrderId?: Prisma.StringNullableFilter<"RentalOrder"> | string | null;
    paymentGatewaySignature?: Prisma.StringNullableFilter<"RentalOrder"> | string | null;
    paymentCapturedAt?: Prisma.DateTimeNullableFilter<"RentalOrder"> | Date | string | null;
    specialInstructions?: Prisma.StringNullableFilter<"RentalOrder"> | string | null;
    internalNotes?: Prisma.StringNullableFilter<"RentalOrder"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"RentalOrder"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"RentalOrder"> | Date | string;
    customer?: Prisma.XOR<Prisma.CustomerScalarRelationFilter, Prisma.CustomerWhereInput>;
    pickupLocation?: Prisma.XOR<Prisma.StoreLocationScalarRelationFilter, Prisma.StoreLocationWhereInput>;
    createdByAdmin?: Prisma.XOR<Prisma.AdminUserNullableScalarRelationFilter, Prisma.AdminUserWhereInput> | null;
    items?: Prisma.RentalOrderItemListRelationFilter;
    invoice?: Prisma.XOR<Prisma.InvoiceNullableScalarRelationFilter, Prisma.InvoiceWhereInput> | null;
    paymentAttempt?: Prisma.XOR<Prisma.CheckoutPaymentAttemptNullableScalarRelationFilter, Prisma.CheckoutPaymentAttemptWhereInput> | null;
}, "id" | "orderNumber" | "paymentGatewayPaymentId">;
export type RentalOrderOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    orderNumber?: Prisma.SortOrder;
    customerId?: Prisma.SortOrder;
    pickupLocationId?: Prisma.SortOrder;
    createdByAdminId?: Prisma.SortOrderInput | Prisma.SortOrder;
    status?: Prisma.SortOrder;
    paymentStatus?: Prisma.SortOrder;
    paymentMethod?: Prisma.SortOrder;
    rentalStartDate?: Prisma.SortOrder;
    rentalEndDate?: Prisma.SortOrder;
    pickupDate?: Prisma.SortOrderInput | Prisma.SortOrder;
    returnDate?: Prisma.SortOrderInput | Prisma.SortOrder;
    subtotalAmount?: Prisma.SortOrder;
    securityDeposit?: Prisma.SortOrder;
    discountAmount?: Prisma.SortOrder;
    totalAmount?: Prisma.SortOrder;
    amountPaid?: Prisma.SortOrder;
    amountDueAtPickup?: Prisma.SortOrder;
    depositRefundStatus?: Prisma.SortOrder;
    depositRefundedAmount?: Prisma.SortOrder;
    depositRefundedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    depositRefundReference?: Prisma.SortOrderInput | Prisma.SortOrder;
    depositRefundNotes?: Prisma.SortOrderInput | Prisma.SortOrder;
    paymentGatewayOrderId?: Prisma.SortOrderInput | Prisma.SortOrder;
    paymentGatewayPaymentId?: Prisma.SortOrderInput | Prisma.SortOrder;
    paymentGatewaySignature?: Prisma.SortOrderInput | Prisma.SortOrder;
    paymentCapturedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    specialInstructions?: Prisma.SortOrderInput | Prisma.SortOrder;
    internalNotes?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.RentalOrderCountOrderByAggregateInput;
    _avg?: Prisma.RentalOrderAvgOrderByAggregateInput;
    _max?: Prisma.RentalOrderMaxOrderByAggregateInput;
    _min?: Prisma.RentalOrderMinOrderByAggregateInput;
    _sum?: Prisma.RentalOrderSumOrderByAggregateInput;
};
export type RentalOrderScalarWhereWithAggregatesInput = {
    AND?: Prisma.RentalOrderScalarWhereWithAggregatesInput | Prisma.RentalOrderScalarWhereWithAggregatesInput[];
    OR?: Prisma.RentalOrderScalarWhereWithAggregatesInput[];
    NOT?: Prisma.RentalOrderScalarWhereWithAggregatesInput | Prisma.RentalOrderScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"RentalOrder"> | string;
    orderNumber?: Prisma.StringWithAggregatesFilter<"RentalOrder"> | string;
    customerId?: Prisma.StringWithAggregatesFilter<"RentalOrder"> | string;
    pickupLocationId?: Prisma.StringWithAggregatesFilter<"RentalOrder"> | string;
    createdByAdminId?: Prisma.StringNullableWithAggregatesFilter<"RentalOrder"> | string | null;
    status?: Prisma.EnumOrderStatusWithAggregatesFilter<"RentalOrder"> | $Enums.OrderStatus;
    paymentStatus?: Prisma.EnumPaymentStatusWithAggregatesFilter<"RentalOrder"> | $Enums.PaymentStatus;
    paymentMethod?: Prisma.EnumPaymentMethodWithAggregatesFilter<"RentalOrder"> | $Enums.PaymentMethod;
    rentalStartDate?: Prisma.DateTimeWithAggregatesFilter<"RentalOrder"> | Date | string;
    rentalEndDate?: Prisma.DateTimeWithAggregatesFilter<"RentalOrder"> | Date | string;
    pickupDate?: Prisma.DateTimeNullableWithAggregatesFilter<"RentalOrder"> | Date | string | null;
    returnDate?: Prisma.DateTimeNullableWithAggregatesFilter<"RentalOrder"> | Date | string | null;
    subtotalAmount?: Prisma.DecimalWithAggregatesFilter<"RentalOrder"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    securityDeposit?: Prisma.DecimalWithAggregatesFilter<"RentalOrder"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    discountAmount?: Prisma.DecimalWithAggregatesFilter<"RentalOrder"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalAmount?: Prisma.DecimalWithAggregatesFilter<"RentalOrder"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    amountPaid?: Prisma.DecimalWithAggregatesFilter<"RentalOrder"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    amountDueAtPickup?: Prisma.DecimalWithAggregatesFilter<"RentalOrder"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    depositRefundStatus?: Prisma.EnumDepositRefundStatusWithAggregatesFilter<"RentalOrder"> | $Enums.DepositRefundStatus;
    depositRefundedAmount?: Prisma.DecimalWithAggregatesFilter<"RentalOrder"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    depositRefundedAt?: Prisma.DateTimeNullableWithAggregatesFilter<"RentalOrder"> | Date | string | null;
    depositRefundReference?: Prisma.StringNullableWithAggregatesFilter<"RentalOrder"> | string | null;
    depositRefundNotes?: Prisma.StringNullableWithAggregatesFilter<"RentalOrder"> | string | null;
    paymentGatewayOrderId?: Prisma.StringNullableWithAggregatesFilter<"RentalOrder"> | string | null;
    paymentGatewayPaymentId?: Prisma.StringNullableWithAggregatesFilter<"RentalOrder"> | string | null;
    paymentGatewaySignature?: Prisma.StringNullableWithAggregatesFilter<"RentalOrder"> | string | null;
    paymentCapturedAt?: Prisma.DateTimeNullableWithAggregatesFilter<"RentalOrder"> | Date | string | null;
    specialInstructions?: Prisma.StringNullableWithAggregatesFilter<"RentalOrder"> | string | null;
    internalNotes?: Prisma.StringNullableWithAggregatesFilter<"RentalOrder"> | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"RentalOrder"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"RentalOrder"> | Date | string;
};
export type RentalOrderCreateInput = {
    id?: string;
    orderNumber: string;
    status?: $Enums.OrderStatus;
    paymentStatus?: $Enums.PaymentStatus;
    paymentMethod?: $Enums.PaymentMethod;
    rentalStartDate: Date | string;
    rentalEndDate: Date | string;
    pickupDate?: Date | string | null;
    returnDate?: Date | string | null;
    subtotalAmount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    securityDeposit?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    discountAmount?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalAmount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    amountPaid?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    amountDueAtPickup?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    depositRefundStatus?: $Enums.DepositRefundStatus;
    depositRefundedAmount?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    depositRefundedAt?: Date | string | null;
    depositRefundReference?: string | null;
    depositRefundNotes?: string | null;
    paymentGatewayOrderId?: string | null;
    paymentGatewayPaymentId?: string | null;
    paymentGatewaySignature?: string | null;
    paymentCapturedAt?: Date | string | null;
    specialInstructions?: string | null;
    internalNotes?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    customer: Prisma.CustomerCreateNestedOneWithoutOrdersInput;
    pickupLocation: Prisma.StoreLocationCreateNestedOneWithoutOrdersInput;
    createdByAdmin?: Prisma.AdminUserCreateNestedOneWithoutCreatedOrdersInput;
    items?: Prisma.RentalOrderItemCreateNestedManyWithoutOrderInput;
    invoice?: Prisma.InvoiceCreateNestedOneWithoutOrderInput;
    paymentAttempt?: Prisma.CheckoutPaymentAttemptCreateNestedOneWithoutRentalOrderInput;
};
export type RentalOrderUncheckedCreateInput = {
    id?: string;
    orderNumber: string;
    customerId: string;
    pickupLocationId: string;
    createdByAdminId?: string | null;
    status?: $Enums.OrderStatus;
    paymentStatus?: $Enums.PaymentStatus;
    paymentMethod?: $Enums.PaymentMethod;
    rentalStartDate: Date | string;
    rentalEndDate: Date | string;
    pickupDate?: Date | string | null;
    returnDate?: Date | string | null;
    subtotalAmount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    securityDeposit?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    discountAmount?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalAmount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    amountPaid?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    amountDueAtPickup?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    depositRefundStatus?: $Enums.DepositRefundStatus;
    depositRefundedAmount?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    depositRefundedAt?: Date | string | null;
    depositRefundReference?: string | null;
    depositRefundNotes?: string | null;
    paymentGatewayOrderId?: string | null;
    paymentGatewayPaymentId?: string | null;
    paymentGatewaySignature?: string | null;
    paymentCapturedAt?: Date | string | null;
    specialInstructions?: string | null;
    internalNotes?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    items?: Prisma.RentalOrderItemUncheckedCreateNestedManyWithoutOrderInput;
    invoice?: Prisma.InvoiceUncheckedCreateNestedOneWithoutOrderInput;
    paymentAttempt?: Prisma.CheckoutPaymentAttemptUncheckedCreateNestedOneWithoutRentalOrderInput;
};
export type RentalOrderUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    orderNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus;
    paymentStatus?: Prisma.EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus;
    paymentMethod?: Prisma.EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod;
    rentalStartDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    rentalEndDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    pickupDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    returnDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    subtotalAmount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    securityDeposit?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    discountAmount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalAmount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    amountPaid?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    amountDueAtPickup?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    depositRefundStatus?: Prisma.EnumDepositRefundStatusFieldUpdateOperationsInput | $Enums.DepositRefundStatus;
    depositRefundedAmount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    depositRefundedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    depositRefundReference?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    depositRefundNotes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    paymentGatewayOrderId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    paymentGatewayPaymentId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    paymentGatewaySignature?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    paymentCapturedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    specialInstructions?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    internalNotes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    customer?: Prisma.CustomerUpdateOneRequiredWithoutOrdersNestedInput;
    pickupLocation?: Prisma.StoreLocationUpdateOneRequiredWithoutOrdersNestedInput;
    createdByAdmin?: Prisma.AdminUserUpdateOneWithoutCreatedOrdersNestedInput;
    items?: Prisma.RentalOrderItemUpdateManyWithoutOrderNestedInput;
    invoice?: Prisma.InvoiceUpdateOneWithoutOrderNestedInput;
    paymentAttempt?: Prisma.CheckoutPaymentAttemptUpdateOneWithoutRentalOrderNestedInput;
};
export type RentalOrderUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    orderNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    customerId?: Prisma.StringFieldUpdateOperationsInput | string;
    pickupLocationId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdByAdminId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus;
    paymentStatus?: Prisma.EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus;
    paymentMethod?: Prisma.EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod;
    rentalStartDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    rentalEndDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    pickupDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    returnDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    subtotalAmount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    securityDeposit?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    discountAmount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalAmount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    amountPaid?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    amountDueAtPickup?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    depositRefundStatus?: Prisma.EnumDepositRefundStatusFieldUpdateOperationsInput | $Enums.DepositRefundStatus;
    depositRefundedAmount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    depositRefundedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    depositRefundReference?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    depositRefundNotes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    paymentGatewayOrderId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    paymentGatewayPaymentId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    paymentGatewaySignature?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    paymentCapturedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    specialInstructions?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    internalNotes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    items?: Prisma.RentalOrderItemUncheckedUpdateManyWithoutOrderNestedInput;
    invoice?: Prisma.InvoiceUncheckedUpdateOneWithoutOrderNestedInput;
    paymentAttempt?: Prisma.CheckoutPaymentAttemptUncheckedUpdateOneWithoutRentalOrderNestedInput;
};
export type RentalOrderCreateManyInput = {
    id?: string;
    orderNumber: string;
    customerId: string;
    pickupLocationId: string;
    createdByAdminId?: string | null;
    status?: $Enums.OrderStatus;
    paymentStatus?: $Enums.PaymentStatus;
    paymentMethod?: $Enums.PaymentMethod;
    rentalStartDate: Date | string;
    rentalEndDate: Date | string;
    pickupDate?: Date | string | null;
    returnDate?: Date | string | null;
    subtotalAmount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    securityDeposit?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    discountAmount?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalAmount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    amountPaid?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    amountDueAtPickup?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    depositRefundStatus?: $Enums.DepositRefundStatus;
    depositRefundedAmount?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    depositRefundedAt?: Date | string | null;
    depositRefundReference?: string | null;
    depositRefundNotes?: string | null;
    paymentGatewayOrderId?: string | null;
    paymentGatewayPaymentId?: string | null;
    paymentGatewaySignature?: string | null;
    paymentCapturedAt?: Date | string | null;
    specialInstructions?: string | null;
    internalNotes?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type RentalOrderUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    orderNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus;
    paymentStatus?: Prisma.EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus;
    paymentMethod?: Prisma.EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod;
    rentalStartDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    rentalEndDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    pickupDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    returnDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    subtotalAmount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    securityDeposit?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    discountAmount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalAmount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    amountPaid?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    amountDueAtPickup?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    depositRefundStatus?: Prisma.EnumDepositRefundStatusFieldUpdateOperationsInput | $Enums.DepositRefundStatus;
    depositRefundedAmount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    depositRefundedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    depositRefundReference?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    depositRefundNotes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    paymentGatewayOrderId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    paymentGatewayPaymentId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    paymentGatewaySignature?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    paymentCapturedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    specialInstructions?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    internalNotes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type RentalOrderUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    orderNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    customerId?: Prisma.StringFieldUpdateOperationsInput | string;
    pickupLocationId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdByAdminId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus;
    paymentStatus?: Prisma.EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus;
    paymentMethod?: Prisma.EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod;
    rentalStartDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    rentalEndDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    pickupDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    returnDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    subtotalAmount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    securityDeposit?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    discountAmount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalAmount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    amountPaid?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    amountDueAtPickup?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    depositRefundStatus?: Prisma.EnumDepositRefundStatusFieldUpdateOperationsInput | $Enums.DepositRefundStatus;
    depositRefundedAmount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    depositRefundedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    depositRefundReference?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    depositRefundNotes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    paymentGatewayOrderId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    paymentGatewayPaymentId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    paymentGatewaySignature?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    paymentCapturedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    specialInstructions?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    internalNotes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type RentalOrderListRelationFilter = {
    every?: Prisma.RentalOrderWhereInput;
    some?: Prisma.RentalOrderWhereInput;
    none?: Prisma.RentalOrderWhereInput;
};
export type RentalOrderOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type RentalOrderCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    orderNumber?: Prisma.SortOrder;
    customerId?: Prisma.SortOrder;
    pickupLocationId?: Prisma.SortOrder;
    createdByAdminId?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    paymentStatus?: Prisma.SortOrder;
    paymentMethod?: Prisma.SortOrder;
    rentalStartDate?: Prisma.SortOrder;
    rentalEndDate?: Prisma.SortOrder;
    pickupDate?: Prisma.SortOrder;
    returnDate?: Prisma.SortOrder;
    subtotalAmount?: Prisma.SortOrder;
    securityDeposit?: Prisma.SortOrder;
    discountAmount?: Prisma.SortOrder;
    totalAmount?: Prisma.SortOrder;
    amountPaid?: Prisma.SortOrder;
    amountDueAtPickup?: Prisma.SortOrder;
    depositRefundStatus?: Prisma.SortOrder;
    depositRefundedAmount?: Prisma.SortOrder;
    depositRefundedAt?: Prisma.SortOrder;
    depositRefundReference?: Prisma.SortOrder;
    depositRefundNotes?: Prisma.SortOrder;
    paymentGatewayOrderId?: Prisma.SortOrder;
    paymentGatewayPaymentId?: Prisma.SortOrder;
    paymentGatewaySignature?: Prisma.SortOrder;
    paymentCapturedAt?: Prisma.SortOrder;
    specialInstructions?: Prisma.SortOrder;
    internalNotes?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type RentalOrderAvgOrderByAggregateInput = {
    subtotalAmount?: Prisma.SortOrder;
    securityDeposit?: Prisma.SortOrder;
    discountAmount?: Prisma.SortOrder;
    totalAmount?: Prisma.SortOrder;
    amountPaid?: Prisma.SortOrder;
    amountDueAtPickup?: Prisma.SortOrder;
    depositRefundedAmount?: Prisma.SortOrder;
};
export type RentalOrderMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    orderNumber?: Prisma.SortOrder;
    customerId?: Prisma.SortOrder;
    pickupLocationId?: Prisma.SortOrder;
    createdByAdminId?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    paymentStatus?: Prisma.SortOrder;
    paymentMethod?: Prisma.SortOrder;
    rentalStartDate?: Prisma.SortOrder;
    rentalEndDate?: Prisma.SortOrder;
    pickupDate?: Prisma.SortOrder;
    returnDate?: Prisma.SortOrder;
    subtotalAmount?: Prisma.SortOrder;
    securityDeposit?: Prisma.SortOrder;
    discountAmount?: Prisma.SortOrder;
    totalAmount?: Prisma.SortOrder;
    amountPaid?: Prisma.SortOrder;
    amountDueAtPickup?: Prisma.SortOrder;
    depositRefundStatus?: Prisma.SortOrder;
    depositRefundedAmount?: Prisma.SortOrder;
    depositRefundedAt?: Prisma.SortOrder;
    depositRefundReference?: Prisma.SortOrder;
    depositRefundNotes?: Prisma.SortOrder;
    paymentGatewayOrderId?: Prisma.SortOrder;
    paymentGatewayPaymentId?: Prisma.SortOrder;
    paymentGatewaySignature?: Prisma.SortOrder;
    paymentCapturedAt?: Prisma.SortOrder;
    specialInstructions?: Prisma.SortOrder;
    internalNotes?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type RentalOrderMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    orderNumber?: Prisma.SortOrder;
    customerId?: Prisma.SortOrder;
    pickupLocationId?: Prisma.SortOrder;
    createdByAdminId?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    paymentStatus?: Prisma.SortOrder;
    paymentMethod?: Prisma.SortOrder;
    rentalStartDate?: Prisma.SortOrder;
    rentalEndDate?: Prisma.SortOrder;
    pickupDate?: Prisma.SortOrder;
    returnDate?: Prisma.SortOrder;
    subtotalAmount?: Prisma.SortOrder;
    securityDeposit?: Prisma.SortOrder;
    discountAmount?: Prisma.SortOrder;
    totalAmount?: Prisma.SortOrder;
    amountPaid?: Prisma.SortOrder;
    amountDueAtPickup?: Prisma.SortOrder;
    depositRefundStatus?: Prisma.SortOrder;
    depositRefundedAmount?: Prisma.SortOrder;
    depositRefundedAt?: Prisma.SortOrder;
    depositRefundReference?: Prisma.SortOrder;
    depositRefundNotes?: Prisma.SortOrder;
    paymentGatewayOrderId?: Prisma.SortOrder;
    paymentGatewayPaymentId?: Prisma.SortOrder;
    paymentGatewaySignature?: Prisma.SortOrder;
    paymentCapturedAt?: Prisma.SortOrder;
    specialInstructions?: Prisma.SortOrder;
    internalNotes?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type RentalOrderSumOrderByAggregateInput = {
    subtotalAmount?: Prisma.SortOrder;
    securityDeposit?: Prisma.SortOrder;
    discountAmount?: Prisma.SortOrder;
    totalAmount?: Prisma.SortOrder;
    amountPaid?: Prisma.SortOrder;
    amountDueAtPickup?: Prisma.SortOrder;
    depositRefundedAmount?: Prisma.SortOrder;
};
export type RentalOrderNullableScalarRelationFilter = {
    is?: Prisma.RentalOrderWhereInput | null;
    isNot?: Prisma.RentalOrderWhereInput | null;
};
export type RentalOrderScalarRelationFilter = {
    is?: Prisma.RentalOrderWhereInput;
    isNot?: Prisma.RentalOrderWhereInput;
};
export type RentalOrderCreateNestedManyWithoutCreatedByAdminInput = {
    create?: Prisma.XOR<Prisma.RentalOrderCreateWithoutCreatedByAdminInput, Prisma.RentalOrderUncheckedCreateWithoutCreatedByAdminInput> | Prisma.RentalOrderCreateWithoutCreatedByAdminInput[] | Prisma.RentalOrderUncheckedCreateWithoutCreatedByAdminInput[];
    connectOrCreate?: Prisma.RentalOrderCreateOrConnectWithoutCreatedByAdminInput | Prisma.RentalOrderCreateOrConnectWithoutCreatedByAdminInput[];
    createMany?: Prisma.RentalOrderCreateManyCreatedByAdminInputEnvelope;
    connect?: Prisma.RentalOrderWhereUniqueInput | Prisma.RentalOrderWhereUniqueInput[];
};
export type RentalOrderUncheckedCreateNestedManyWithoutCreatedByAdminInput = {
    create?: Prisma.XOR<Prisma.RentalOrderCreateWithoutCreatedByAdminInput, Prisma.RentalOrderUncheckedCreateWithoutCreatedByAdminInput> | Prisma.RentalOrderCreateWithoutCreatedByAdminInput[] | Prisma.RentalOrderUncheckedCreateWithoutCreatedByAdminInput[];
    connectOrCreate?: Prisma.RentalOrderCreateOrConnectWithoutCreatedByAdminInput | Prisma.RentalOrderCreateOrConnectWithoutCreatedByAdminInput[];
    createMany?: Prisma.RentalOrderCreateManyCreatedByAdminInputEnvelope;
    connect?: Prisma.RentalOrderWhereUniqueInput | Prisma.RentalOrderWhereUniqueInput[];
};
export type RentalOrderUpdateManyWithoutCreatedByAdminNestedInput = {
    create?: Prisma.XOR<Prisma.RentalOrderCreateWithoutCreatedByAdminInput, Prisma.RentalOrderUncheckedCreateWithoutCreatedByAdminInput> | Prisma.RentalOrderCreateWithoutCreatedByAdminInput[] | Prisma.RentalOrderUncheckedCreateWithoutCreatedByAdminInput[];
    connectOrCreate?: Prisma.RentalOrderCreateOrConnectWithoutCreatedByAdminInput | Prisma.RentalOrderCreateOrConnectWithoutCreatedByAdminInput[];
    upsert?: Prisma.RentalOrderUpsertWithWhereUniqueWithoutCreatedByAdminInput | Prisma.RentalOrderUpsertWithWhereUniqueWithoutCreatedByAdminInput[];
    createMany?: Prisma.RentalOrderCreateManyCreatedByAdminInputEnvelope;
    set?: Prisma.RentalOrderWhereUniqueInput | Prisma.RentalOrderWhereUniqueInput[];
    disconnect?: Prisma.RentalOrderWhereUniqueInput | Prisma.RentalOrderWhereUniqueInput[];
    delete?: Prisma.RentalOrderWhereUniqueInput | Prisma.RentalOrderWhereUniqueInput[];
    connect?: Prisma.RentalOrderWhereUniqueInput | Prisma.RentalOrderWhereUniqueInput[];
    update?: Prisma.RentalOrderUpdateWithWhereUniqueWithoutCreatedByAdminInput | Prisma.RentalOrderUpdateWithWhereUniqueWithoutCreatedByAdminInput[];
    updateMany?: Prisma.RentalOrderUpdateManyWithWhereWithoutCreatedByAdminInput | Prisma.RentalOrderUpdateManyWithWhereWithoutCreatedByAdminInput[];
    deleteMany?: Prisma.RentalOrderScalarWhereInput | Prisma.RentalOrderScalarWhereInput[];
};
export type RentalOrderUncheckedUpdateManyWithoutCreatedByAdminNestedInput = {
    create?: Prisma.XOR<Prisma.RentalOrderCreateWithoutCreatedByAdminInput, Prisma.RentalOrderUncheckedCreateWithoutCreatedByAdminInput> | Prisma.RentalOrderCreateWithoutCreatedByAdminInput[] | Prisma.RentalOrderUncheckedCreateWithoutCreatedByAdminInput[];
    connectOrCreate?: Prisma.RentalOrderCreateOrConnectWithoutCreatedByAdminInput | Prisma.RentalOrderCreateOrConnectWithoutCreatedByAdminInput[];
    upsert?: Prisma.RentalOrderUpsertWithWhereUniqueWithoutCreatedByAdminInput | Prisma.RentalOrderUpsertWithWhereUniqueWithoutCreatedByAdminInput[];
    createMany?: Prisma.RentalOrderCreateManyCreatedByAdminInputEnvelope;
    set?: Prisma.RentalOrderWhereUniqueInput | Prisma.RentalOrderWhereUniqueInput[];
    disconnect?: Prisma.RentalOrderWhereUniqueInput | Prisma.RentalOrderWhereUniqueInput[];
    delete?: Prisma.RentalOrderWhereUniqueInput | Prisma.RentalOrderWhereUniqueInput[];
    connect?: Prisma.RentalOrderWhereUniqueInput | Prisma.RentalOrderWhereUniqueInput[];
    update?: Prisma.RentalOrderUpdateWithWhereUniqueWithoutCreatedByAdminInput | Prisma.RentalOrderUpdateWithWhereUniqueWithoutCreatedByAdminInput[];
    updateMany?: Prisma.RentalOrderUpdateManyWithWhereWithoutCreatedByAdminInput | Prisma.RentalOrderUpdateManyWithWhereWithoutCreatedByAdminInput[];
    deleteMany?: Prisma.RentalOrderScalarWhereInput | Prisma.RentalOrderScalarWhereInput[];
};
export type RentalOrderCreateNestedManyWithoutCustomerInput = {
    create?: Prisma.XOR<Prisma.RentalOrderCreateWithoutCustomerInput, Prisma.RentalOrderUncheckedCreateWithoutCustomerInput> | Prisma.RentalOrderCreateWithoutCustomerInput[] | Prisma.RentalOrderUncheckedCreateWithoutCustomerInput[];
    connectOrCreate?: Prisma.RentalOrderCreateOrConnectWithoutCustomerInput | Prisma.RentalOrderCreateOrConnectWithoutCustomerInput[];
    createMany?: Prisma.RentalOrderCreateManyCustomerInputEnvelope;
    connect?: Prisma.RentalOrderWhereUniqueInput | Prisma.RentalOrderWhereUniqueInput[];
};
export type RentalOrderUncheckedCreateNestedManyWithoutCustomerInput = {
    create?: Prisma.XOR<Prisma.RentalOrderCreateWithoutCustomerInput, Prisma.RentalOrderUncheckedCreateWithoutCustomerInput> | Prisma.RentalOrderCreateWithoutCustomerInput[] | Prisma.RentalOrderUncheckedCreateWithoutCustomerInput[];
    connectOrCreate?: Prisma.RentalOrderCreateOrConnectWithoutCustomerInput | Prisma.RentalOrderCreateOrConnectWithoutCustomerInput[];
    createMany?: Prisma.RentalOrderCreateManyCustomerInputEnvelope;
    connect?: Prisma.RentalOrderWhereUniqueInput | Prisma.RentalOrderWhereUniqueInput[];
};
export type RentalOrderUpdateManyWithoutCustomerNestedInput = {
    create?: Prisma.XOR<Prisma.RentalOrderCreateWithoutCustomerInput, Prisma.RentalOrderUncheckedCreateWithoutCustomerInput> | Prisma.RentalOrderCreateWithoutCustomerInput[] | Prisma.RentalOrderUncheckedCreateWithoutCustomerInput[];
    connectOrCreate?: Prisma.RentalOrderCreateOrConnectWithoutCustomerInput | Prisma.RentalOrderCreateOrConnectWithoutCustomerInput[];
    upsert?: Prisma.RentalOrderUpsertWithWhereUniqueWithoutCustomerInput | Prisma.RentalOrderUpsertWithWhereUniqueWithoutCustomerInput[];
    createMany?: Prisma.RentalOrderCreateManyCustomerInputEnvelope;
    set?: Prisma.RentalOrderWhereUniqueInput | Prisma.RentalOrderWhereUniqueInput[];
    disconnect?: Prisma.RentalOrderWhereUniqueInput | Prisma.RentalOrderWhereUniqueInput[];
    delete?: Prisma.RentalOrderWhereUniqueInput | Prisma.RentalOrderWhereUniqueInput[];
    connect?: Prisma.RentalOrderWhereUniqueInput | Prisma.RentalOrderWhereUniqueInput[];
    update?: Prisma.RentalOrderUpdateWithWhereUniqueWithoutCustomerInput | Prisma.RentalOrderUpdateWithWhereUniqueWithoutCustomerInput[];
    updateMany?: Prisma.RentalOrderUpdateManyWithWhereWithoutCustomerInput | Prisma.RentalOrderUpdateManyWithWhereWithoutCustomerInput[];
    deleteMany?: Prisma.RentalOrderScalarWhereInput | Prisma.RentalOrderScalarWhereInput[];
};
export type RentalOrderUncheckedUpdateManyWithoutCustomerNestedInput = {
    create?: Prisma.XOR<Prisma.RentalOrderCreateWithoutCustomerInput, Prisma.RentalOrderUncheckedCreateWithoutCustomerInput> | Prisma.RentalOrderCreateWithoutCustomerInput[] | Prisma.RentalOrderUncheckedCreateWithoutCustomerInput[];
    connectOrCreate?: Prisma.RentalOrderCreateOrConnectWithoutCustomerInput | Prisma.RentalOrderCreateOrConnectWithoutCustomerInput[];
    upsert?: Prisma.RentalOrderUpsertWithWhereUniqueWithoutCustomerInput | Prisma.RentalOrderUpsertWithWhereUniqueWithoutCustomerInput[];
    createMany?: Prisma.RentalOrderCreateManyCustomerInputEnvelope;
    set?: Prisma.RentalOrderWhereUniqueInput | Prisma.RentalOrderWhereUniqueInput[];
    disconnect?: Prisma.RentalOrderWhereUniqueInput | Prisma.RentalOrderWhereUniqueInput[];
    delete?: Prisma.RentalOrderWhereUniqueInput | Prisma.RentalOrderWhereUniqueInput[];
    connect?: Prisma.RentalOrderWhereUniqueInput | Prisma.RentalOrderWhereUniqueInput[];
    update?: Prisma.RentalOrderUpdateWithWhereUniqueWithoutCustomerInput | Prisma.RentalOrderUpdateWithWhereUniqueWithoutCustomerInput[];
    updateMany?: Prisma.RentalOrderUpdateManyWithWhereWithoutCustomerInput | Prisma.RentalOrderUpdateManyWithWhereWithoutCustomerInput[];
    deleteMany?: Prisma.RentalOrderScalarWhereInput | Prisma.RentalOrderScalarWhereInput[];
};
export type RentalOrderCreateNestedManyWithoutPickupLocationInput = {
    create?: Prisma.XOR<Prisma.RentalOrderCreateWithoutPickupLocationInput, Prisma.RentalOrderUncheckedCreateWithoutPickupLocationInput> | Prisma.RentalOrderCreateWithoutPickupLocationInput[] | Prisma.RentalOrderUncheckedCreateWithoutPickupLocationInput[];
    connectOrCreate?: Prisma.RentalOrderCreateOrConnectWithoutPickupLocationInput | Prisma.RentalOrderCreateOrConnectWithoutPickupLocationInput[];
    createMany?: Prisma.RentalOrderCreateManyPickupLocationInputEnvelope;
    connect?: Prisma.RentalOrderWhereUniqueInput | Prisma.RentalOrderWhereUniqueInput[];
};
export type RentalOrderUncheckedCreateNestedManyWithoutPickupLocationInput = {
    create?: Prisma.XOR<Prisma.RentalOrderCreateWithoutPickupLocationInput, Prisma.RentalOrderUncheckedCreateWithoutPickupLocationInput> | Prisma.RentalOrderCreateWithoutPickupLocationInput[] | Prisma.RentalOrderUncheckedCreateWithoutPickupLocationInput[];
    connectOrCreate?: Prisma.RentalOrderCreateOrConnectWithoutPickupLocationInput | Prisma.RentalOrderCreateOrConnectWithoutPickupLocationInput[];
    createMany?: Prisma.RentalOrderCreateManyPickupLocationInputEnvelope;
    connect?: Prisma.RentalOrderWhereUniqueInput | Prisma.RentalOrderWhereUniqueInput[];
};
export type RentalOrderUpdateManyWithoutPickupLocationNestedInput = {
    create?: Prisma.XOR<Prisma.RentalOrderCreateWithoutPickupLocationInput, Prisma.RentalOrderUncheckedCreateWithoutPickupLocationInput> | Prisma.RentalOrderCreateWithoutPickupLocationInput[] | Prisma.RentalOrderUncheckedCreateWithoutPickupLocationInput[];
    connectOrCreate?: Prisma.RentalOrderCreateOrConnectWithoutPickupLocationInput | Prisma.RentalOrderCreateOrConnectWithoutPickupLocationInput[];
    upsert?: Prisma.RentalOrderUpsertWithWhereUniqueWithoutPickupLocationInput | Prisma.RentalOrderUpsertWithWhereUniqueWithoutPickupLocationInput[];
    createMany?: Prisma.RentalOrderCreateManyPickupLocationInputEnvelope;
    set?: Prisma.RentalOrderWhereUniqueInput | Prisma.RentalOrderWhereUniqueInput[];
    disconnect?: Prisma.RentalOrderWhereUniqueInput | Prisma.RentalOrderWhereUniqueInput[];
    delete?: Prisma.RentalOrderWhereUniqueInput | Prisma.RentalOrderWhereUniqueInput[];
    connect?: Prisma.RentalOrderWhereUniqueInput | Prisma.RentalOrderWhereUniqueInput[];
    update?: Prisma.RentalOrderUpdateWithWhereUniqueWithoutPickupLocationInput | Prisma.RentalOrderUpdateWithWhereUniqueWithoutPickupLocationInput[];
    updateMany?: Prisma.RentalOrderUpdateManyWithWhereWithoutPickupLocationInput | Prisma.RentalOrderUpdateManyWithWhereWithoutPickupLocationInput[];
    deleteMany?: Prisma.RentalOrderScalarWhereInput | Prisma.RentalOrderScalarWhereInput[];
};
export type RentalOrderUncheckedUpdateManyWithoutPickupLocationNestedInput = {
    create?: Prisma.XOR<Prisma.RentalOrderCreateWithoutPickupLocationInput, Prisma.RentalOrderUncheckedCreateWithoutPickupLocationInput> | Prisma.RentalOrderCreateWithoutPickupLocationInput[] | Prisma.RentalOrderUncheckedCreateWithoutPickupLocationInput[];
    connectOrCreate?: Prisma.RentalOrderCreateOrConnectWithoutPickupLocationInput | Prisma.RentalOrderCreateOrConnectWithoutPickupLocationInput[];
    upsert?: Prisma.RentalOrderUpsertWithWhereUniqueWithoutPickupLocationInput | Prisma.RentalOrderUpsertWithWhereUniqueWithoutPickupLocationInput[];
    createMany?: Prisma.RentalOrderCreateManyPickupLocationInputEnvelope;
    set?: Prisma.RentalOrderWhereUniqueInput | Prisma.RentalOrderWhereUniqueInput[];
    disconnect?: Prisma.RentalOrderWhereUniqueInput | Prisma.RentalOrderWhereUniqueInput[];
    delete?: Prisma.RentalOrderWhereUniqueInput | Prisma.RentalOrderWhereUniqueInput[];
    connect?: Prisma.RentalOrderWhereUniqueInput | Prisma.RentalOrderWhereUniqueInput[];
    update?: Prisma.RentalOrderUpdateWithWhereUniqueWithoutPickupLocationInput | Prisma.RentalOrderUpdateWithWhereUniqueWithoutPickupLocationInput[];
    updateMany?: Prisma.RentalOrderUpdateManyWithWhereWithoutPickupLocationInput | Prisma.RentalOrderUpdateManyWithWhereWithoutPickupLocationInput[];
    deleteMany?: Prisma.RentalOrderScalarWhereInput | Prisma.RentalOrderScalarWhereInput[];
};
export type EnumOrderStatusFieldUpdateOperationsInput = {
    set?: $Enums.OrderStatus;
};
export type EnumPaymentStatusFieldUpdateOperationsInput = {
    set?: $Enums.PaymentStatus;
};
export type EnumPaymentMethodFieldUpdateOperationsInput = {
    set?: $Enums.PaymentMethod;
};
export type EnumDepositRefundStatusFieldUpdateOperationsInput = {
    set?: $Enums.DepositRefundStatus;
};
export type RentalOrderCreateNestedOneWithoutPaymentAttemptInput = {
    create?: Prisma.XOR<Prisma.RentalOrderCreateWithoutPaymentAttemptInput, Prisma.RentalOrderUncheckedCreateWithoutPaymentAttemptInput>;
    connectOrCreate?: Prisma.RentalOrderCreateOrConnectWithoutPaymentAttemptInput;
    connect?: Prisma.RentalOrderWhereUniqueInput;
};
export type RentalOrderUpdateOneWithoutPaymentAttemptNestedInput = {
    create?: Prisma.XOR<Prisma.RentalOrderCreateWithoutPaymentAttemptInput, Prisma.RentalOrderUncheckedCreateWithoutPaymentAttemptInput>;
    connectOrCreate?: Prisma.RentalOrderCreateOrConnectWithoutPaymentAttemptInput;
    upsert?: Prisma.RentalOrderUpsertWithoutPaymentAttemptInput;
    disconnect?: Prisma.RentalOrderWhereInput | boolean;
    delete?: Prisma.RentalOrderWhereInput | boolean;
    connect?: Prisma.RentalOrderWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.RentalOrderUpdateToOneWithWhereWithoutPaymentAttemptInput, Prisma.RentalOrderUpdateWithoutPaymentAttemptInput>, Prisma.RentalOrderUncheckedUpdateWithoutPaymentAttemptInput>;
};
export type RentalOrderCreateNestedOneWithoutItemsInput = {
    create?: Prisma.XOR<Prisma.RentalOrderCreateWithoutItemsInput, Prisma.RentalOrderUncheckedCreateWithoutItemsInput>;
    connectOrCreate?: Prisma.RentalOrderCreateOrConnectWithoutItemsInput;
    connect?: Prisma.RentalOrderWhereUniqueInput;
};
export type RentalOrderUpdateOneRequiredWithoutItemsNestedInput = {
    create?: Prisma.XOR<Prisma.RentalOrderCreateWithoutItemsInput, Prisma.RentalOrderUncheckedCreateWithoutItemsInput>;
    connectOrCreate?: Prisma.RentalOrderCreateOrConnectWithoutItemsInput;
    upsert?: Prisma.RentalOrderUpsertWithoutItemsInput;
    connect?: Prisma.RentalOrderWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.RentalOrderUpdateToOneWithWhereWithoutItemsInput, Prisma.RentalOrderUpdateWithoutItemsInput>, Prisma.RentalOrderUncheckedUpdateWithoutItemsInput>;
};
export type RentalOrderCreateNestedOneWithoutInvoiceInput = {
    create?: Prisma.XOR<Prisma.RentalOrderCreateWithoutInvoiceInput, Prisma.RentalOrderUncheckedCreateWithoutInvoiceInput>;
    connectOrCreate?: Prisma.RentalOrderCreateOrConnectWithoutInvoiceInput;
    connect?: Prisma.RentalOrderWhereUniqueInput;
};
export type RentalOrderUpdateOneRequiredWithoutInvoiceNestedInput = {
    create?: Prisma.XOR<Prisma.RentalOrderCreateWithoutInvoiceInput, Prisma.RentalOrderUncheckedCreateWithoutInvoiceInput>;
    connectOrCreate?: Prisma.RentalOrderCreateOrConnectWithoutInvoiceInput;
    upsert?: Prisma.RentalOrderUpsertWithoutInvoiceInput;
    connect?: Prisma.RentalOrderWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.RentalOrderUpdateToOneWithWhereWithoutInvoiceInput, Prisma.RentalOrderUpdateWithoutInvoiceInput>, Prisma.RentalOrderUncheckedUpdateWithoutInvoiceInput>;
};
export type RentalOrderCreateWithoutCreatedByAdminInput = {
    id?: string;
    orderNumber: string;
    status?: $Enums.OrderStatus;
    paymentStatus?: $Enums.PaymentStatus;
    paymentMethod?: $Enums.PaymentMethod;
    rentalStartDate: Date | string;
    rentalEndDate: Date | string;
    pickupDate?: Date | string | null;
    returnDate?: Date | string | null;
    subtotalAmount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    securityDeposit?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    discountAmount?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalAmount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    amountPaid?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    amountDueAtPickup?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    depositRefundStatus?: $Enums.DepositRefundStatus;
    depositRefundedAmount?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    depositRefundedAt?: Date | string | null;
    depositRefundReference?: string | null;
    depositRefundNotes?: string | null;
    paymentGatewayOrderId?: string | null;
    paymentGatewayPaymentId?: string | null;
    paymentGatewaySignature?: string | null;
    paymentCapturedAt?: Date | string | null;
    specialInstructions?: string | null;
    internalNotes?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    customer: Prisma.CustomerCreateNestedOneWithoutOrdersInput;
    pickupLocation: Prisma.StoreLocationCreateNestedOneWithoutOrdersInput;
    items?: Prisma.RentalOrderItemCreateNestedManyWithoutOrderInput;
    invoice?: Prisma.InvoiceCreateNestedOneWithoutOrderInput;
    paymentAttempt?: Prisma.CheckoutPaymentAttemptCreateNestedOneWithoutRentalOrderInput;
};
export type RentalOrderUncheckedCreateWithoutCreatedByAdminInput = {
    id?: string;
    orderNumber: string;
    customerId: string;
    pickupLocationId: string;
    status?: $Enums.OrderStatus;
    paymentStatus?: $Enums.PaymentStatus;
    paymentMethod?: $Enums.PaymentMethod;
    rentalStartDate: Date | string;
    rentalEndDate: Date | string;
    pickupDate?: Date | string | null;
    returnDate?: Date | string | null;
    subtotalAmount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    securityDeposit?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    discountAmount?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalAmount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    amountPaid?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    amountDueAtPickup?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    depositRefundStatus?: $Enums.DepositRefundStatus;
    depositRefundedAmount?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    depositRefundedAt?: Date | string | null;
    depositRefundReference?: string | null;
    depositRefundNotes?: string | null;
    paymentGatewayOrderId?: string | null;
    paymentGatewayPaymentId?: string | null;
    paymentGatewaySignature?: string | null;
    paymentCapturedAt?: Date | string | null;
    specialInstructions?: string | null;
    internalNotes?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    items?: Prisma.RentalOrderItemUncheckedCreateNestedManyWithoutOrderInput;
    invoice?: Prisma.InvoiceUncheckedCreateNestedOneWithoutOrderInput;
    paymentAttempt?: Prisma.CheckoutPaymentAttemptUncheckedCreateNestedOneWithoutRentalOrderInput;
};
export type RentalOrderCreateOrConnectWithoutCreatedByAdminInput = {
    where: Prisma.RentalOrderWhereUniqueInput;
    create: Prisma.XOR<Prisma.RentalOrderCreateWithoutCreatedByAdminInput, Prisma.RentalOrderUncheckedCreateWithoutCreatedByAdminInput>;
};
export type RentalOrderCreateManyCreatedByAdminInputEnvelope = {
    data: Prisma.RentalOrderCreateManyCreatedByAdminInput | Prisma.RentalOrderCreateManyCreatedByAdminInput[];
    skipDuplicates?: boolean;
};
export type RentalOrderUpsertWithWhereUniqueWithoutCreatedByAdminInput = {
    where: Prisma.RentalOrderWhereUniqueInput;
    update: Prisma.XOR<Prisma.RentalOrderUpdateWithoutCreatedByAdminInput, Prisma.RentalOrderUncheckedUpdateWithoutCreatedByAdminInput>;
    create: Prisma.XOR<Prisma.RentalOrderCreateWithoutCreatedByAdminInput, Prisma.RentalOrderUncheckedCreateWithoutCreatedByAdminInput>;
};
export type RentalOrderUpdateWithWhereUniqueWithoutCreatedByAdminInput = {
    where: Prisma.RentalOrderWhereUniqueInput;
    data: Prisma.XOR<Prisma.RentalOrderUpdateWithoutCreatedByAdminInput, Prisma.RentalOrderUncheckedUpdateWithoutCreatedByAdminInput>;
};
export type RentalOrderUpdateManyWithWhereWithoutCreatedByAdminInput = {
    where: Prisma.RentalOrderScalarWhereInput;
    data: Prisma.XOR<Prisma.RentalOrderUpdateManyMutationInput, Prisma.RentalOrderUncheckedUpdateManyWithoutCreatedByAdminInput>;
};
export type RentalOrderScalarWhereInput = {
    AND?: Prisma.RentalOrderScalarWhereInput | Prisma.RentalOrderScalarWhereInput[];
    OR?: Prisma.RentalOrderScalarWhereInput[];
    NOT?: Prisma.RentalOrderScalarWhereInput | Prisma.RentalOrderScalarWhereInput[];
    id?: Prisma.StringFilter<"RentalOrder"> | string;
    orderNumber?: Prisma.StringFilter<"RentalOrder"> | string;
    customerId?: Prisma.StringFilter<"RentalOrder"> | string;
    pickupLocationId?: Prisma.StringFilter<"RentalOrder"> | string;
    createdByAdminId?: Prisma.StringNullableFilter<"RentalOrder"> | string | null;
    status?: Prisma.EnumOrderStatusFilter<"RentalOrder"> | $Enums.OrderStatus;
    paymentStatus?: Prisma.EnumPaymentStatusFilter<"RentalOrder"> | $Enums.PaymentStatus;
    paymentMethod?: Prisma.EnumPaymentMethodFilter<"RentalOrder"> | $Enums.PaymentMethod;
    rentalStartDate?: Prisma.DateTimeFilter<"RentalOrder"> | Date | string;
    rentalEndDate?: Prisma.DateTimeFilter<"RentalOrder"> | Date | string;
    pickupDate?: Prisma.DateTimeNullableFilter<"RentalOrder"> | Date | string | null;
    returnDate?: Prisma.DateTimeNullableFilter<"RentalOrder"> | Date | string | null;
    subtotalAmount?: Prisma.DecimalFilter<"RentalOrder"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    securityDeposit?: Prisma.DecimalFilter<"RentalOrder"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    discountAmount?: Prisma.DecimalFilter<"RentalOrder"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalAmount?: Prisma.DecimalFilter<"RentalOrder"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    amountPaid?: Prisma.DecimalFilter<"RentalOrder"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    amountDueAtPickup?: Prisma.DecimalFilter<"RentalOrder"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    depositRefundStatus?: Prisma.EnumDepositRefundStatusFilter<"RentalOrder"> | $Enums.DepositRefundStatus;
    depositRefundedAmount?: Prisma.DecimalFilter<"RentalOrder"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    depositRefundedAt?: Prisma.DateTimeNullableFilter<"RentalOrder"> | Date | string | null;
    depositRefundReference?: Prisma.StringNullableFilter<"RentalOrder"> | string | null;
    depositRefundNotes?: Prisma.StringNullableFilter<"RentalOrder"> | string | null;
    paymentGatewayOrderId?: Prisma.StringNullableFilter<"RentalOrder"> | string | null;
    paymentGatewayPaymentId?: Prisma.StringNullableFilter<"RentalOrder"> | string | null;
    paymentGatewaySignature?: Prisma.StringNullableFilter<"RentalOrder"> | string | null;
    paymentCapturedAt?: Prisma.DateTimeNullableFilter<"RentalOrder"> | Date | string | null;
    specialInstructions?: Prisma.StringNullableFilter<"RentalOrder"> | string | null;
    internalNotes?: Prisma.StringNullableFilter<"RentalOrder"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"RentalOrder"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"RentalOrder"> | Date | string;
};
export type RentalOrderCreateWithoutCustomerInput = {
    id?: string;
    orderNumber: string;
    status?: $Enums.OrderStatus;
    paymentStatus?: $Enums.PaymentStatus;
    paymentMethod?: $Enums.PaymentMethod;
    rentalStartDate: Date | string;
    rentalEndDate: Date | string;
    pickupDate?: Date | string | null;
    returnDate?: Date | string | null;
    subtotalAmount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    securityDeposit?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    discountAmount?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalAmount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    amountPaid?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    amountDueAtPickup?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    depositRefundStatus?: $Enums.DepositRefundStatus;
    depositRefundedAmount?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    depositRefundedAt?: Date | string | null;
    depositRefundReference?: string | null;
    depositRefundNotes?: string | null;
    paymentGatewayOrderId?: string | null;
    paymentGatewayPaymentId?: string | null;
    paymentGatewaySignature?: string | null;
    paymentCapturedAt?: Date | string | null;
    specialInstructions?: string | null;
    internalNotes?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    pickupLocation: Prisma.StoreLocationCreateNestedOneWithoutOrdersInput;
    createdByAdmin?: Prisma.AdminUserCreateNestedOneWithoutCreatedOrdersInput;
    items?: Prisma.RentalOrderItemCreateNestedManyWithoutOrderInput;
    invoice?: Prisma.InvoiceCreateNestedOneWithoutOrderInput;
    paymentAttempt?: Prisma.CheckoutPaymentAttemptCreateNestedOneWithoutRentalOrderInput;
};
export type RentalOrderUncheckedCreateWithoutCustomerInput = {
    id?: string;
    orderNumber: string;
    pickupLocationId: string;
    createdByAdminId?: string | null;
    status?: $Enums.OrderStatus;
    paymentStatus?: $Enums.PaymentStatus;
    paymentMethod?: $Enums.PaymentMethod;
    rentalStartDate: Date | string;
    rentalEndDate: Date | string;
    pickupDate?: Date | string | null;
    returnDate?: Date | string | null;
    subtotalAmount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    securityDeposit?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    discountAmount?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalAmount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    amountPaid?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    amountDueAtPickup?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    depositRefundStatus?: $Enums.DepositRefundStatus;
    depositRefundedAmount?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    depositRefundedAt?: Date | string | null;
    depositRefundReference?: string | null;
    depositRefundNotes?: string | null;
    paymentGatewayOrderId?: string | null;
    paymentGatewayPaymentId?: string | null;
    paymentGatewaySignature?: string | null;
    paymentCapturedAt?: Date | string | null;
    specialInstructions?: string | null;
    internalNotes?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    items?: Prisma.RentalOrderItemUncheckedCreateNestedManyWithoutOrderInput;
    invoice?: Prisma.InvoiceUncheckedCreateNestedOneWithoutOrderInput;
    paymentAttempt?: Prisma.CheckoutPaymentAttemptUncheckedCreateNestedOneWithoutRentalOrderInput;
};
export type RentalOrderCreateOrConnectWithoutCustomerInput = {
    where: Prisma.RentalOrderWhereUniqueInput;
    create: Prisma.XOR<Prisma.RentalOrderCreateWithoutCustomerInput, Prisma.RentalOrderUncheckedCreateWithoutCustomerInput>;
};
export type RentalOrderCreateManyCustomerInputEnvelope = {
    data: Prisma.RentalOrderCreateManyCustomerInput | Prisma.RentalOrderCreateManyCustomerInput[];
    skipDuplicates?: boolean;
};
export type RentalOrderUpsertWithWhereUniqueWithoutCustomerInput = {
    where: Prisma.RentalOrderWhereUniqueInput;
    update: Prisma.XOR<Prisma.RentalOrderUpdateWithoutCustomerInput, Prisma.RentalOrderUncheckedUpdateWithoutCustomerInput>;
    create: Prisma.XOR<Prisma.RentalOrderCreateWithoutCustomerInput, Prisma.RentalOrderUncheckedCreateWithoutCustomerInput>;
};
export type RentalOrderUpdateWithWhereUniqueWithoutCustomerInput = {
    where: Prisma.RentalOrderWhereUniqueInput;
    data: Prisma.XOR<Prisma.RentalOrderUpdateWithoutCustomerInput, Prisma.RentalOrderUncheckedUpdateWithoutCustomerInput>;
};
export type RentalOrderUpdateManyWithWhereWithoutCustomerInput = {
    where: Prisma.RentalOrderScalarWhereInput;
    data: Prisma.XOR<Prisma.RentalOrderUpdateManyMutationInput, Prisma.RentalOrderUncheckedUpdateManyWithoutCustomerInput>;
};
export type RentalOrderCreateWithoutPickupLocationInput = {
    id?: string;
    orderNumber: string;
    status?: $Enums.OrderStatus;
    paymentStatus?: $Enums.PaymentStatus;
    paymentMethod?: $Enums.PaymentMethod;
    rentalStartDate: Date | string;
    rentalEndDate: Date | string;
    pickupDate?: Date | string | null;
    returnDate?: Date | string | null;
    subtotalAmount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    securityDeposit?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    discountAmount?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalAmount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    amountPaid?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    amountDueAtPickup?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    depositRefundStatus?: $Enums.DepositRefundStatus;
    depositRefundedAmount?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    depositRefundedAt?: Date | string | null;
    depositRefundReference?: string | null;
    depositRefundNotes?: string | null;
    paymentGatewayOrderId?: string | null;
    paymentGatewayPaymentId?: string | null;
    paymentGatewaySignature?: string | null;
    paymentCapturedAt?: Date | string | null;
    specialInstructions?: string | null;
    internalNotes?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    customer: Prisma.CustomerCreateNestedOneWithoutOrdersInput;
    createdByAdmin?: Prisma.AdminUserCreateNestedOneWithoutCreatedOrdersInput;
    items?: Prisma.RentalOrderItemCreateNestedManyWithoutOrderInput;
    invoice?: Prisma.InvoiceCreateNestedOneWithoutOrderInput;
    paymentAttempt?: Prisma.CheckoutPaymentAttemptCreateNestedOneWithoutRentalOrderInput;
};
export type RentalOrderUncheckedCreateWithoutPickupLocationInput = {
    id?: string;
    orderNumber: string;
    customerId: string;
    createdByAdminId?: string | null;
    status?: $Enums.OrderStatus;
    paymentStatus?: $Enums.PaymentStatus;
    paymentMethod?: $Enums.PaymentMethod;
    rentalStartDate: Date | string;
    rentalEndDate: Date | string;
    pickupDate?: Date | string | null;
    returnDate?: Date | string | null;
    subtotalAmount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    securityDeposit?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    discountAmount?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalAmount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    amountPaid?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    amountDueAtPickup?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    depositRefundStatus?: $Enums.DepositRefundStatus;
    depositRefundedAmount?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    depositRefundedAt?: Date | string | null;
    depositRefundReference?: string | null;
    depositRefundNotes?: string | null;
    paymentGatewayOrderId?: string | null;
    paymentGatewayPaymentId?: string | null;
    paymentGatewaySignature?: string | null;
    paymentCapturedAt?: Date | string | null;
    specialInstructions?: string | null;
    internalNotes?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    items?: Prisma.RentalOrderItemUncheckedCreateNestedManyWithoutOrderInput;
    invoice?: Prisma.InvoiceUncheckedCreateNestedOneWithoutOrderInput;
    paymentAttempt?: Prisma.CheckoutPaymentAttemptUncheckedCreateNestedOneWithoutRentalOrderInput;
};
export type RentalOrderCreateOrConnectWithoutPickupLocationInput = {
    where: Prisma.RentalOrderWhereUniqueInput;
    create: Prisma.XOR<Prisma.RentalOrderCreateWithoutPickupLocationInput, Prisma.RentalOrderUncheckedCreateWithoutPickupLocationInput>;
};
export type RentalOrderCreateManyPickupLocationInputEnvelope = {
    data: Prisma.RentalOrderCreateManyPickupLocationInput | Prisma.RentalOrderCreateManyPickupLocationInput[];
    skipDuplicates?: boolean;
};
export type RentalOrderUpsertWithWhereUniqueWithoutPickupLocationInput = {
    where: Prisma.RentalOrderWhereUniqueInput;
    update: Prisma.XOR<Prisma.RentalOrderUpdateWithoutPickupLocationInput, Prisma.RentalOrderUncheckedUpdateWithoutPickupLocationInput>;
    create: Prisma.XOR<Prisma.RentalOrderCreateWithoutPickupLocationInput, Prisma.RentalOrderUncheckedCreateWithoutPickupLocationInput>;
};
export type RentalOrderUpdateWithWhereUniqueWithoutPickupLocationInput = {
    where: Prisma.RentalOrderWhereUniqueInput;
    data: Prisma.XOR<Prisma.RentalOrderUpdateWithoutPickupLocationInput, Prisma.RentalOrderUncheckedUpdateWithoutPickupLocationInput>;
};
export type RentalOrderUpdateManyWithWhereWithoutPickupLocationInput = {
    where: Prisma.RentalOrderScalarWhereInput;
    data: Prisma.XOR<Prisma.RentalOrderUpdateManyMutationInput, Prisma.RentalOrderUncheckedUpdateManyWithoutPickupLocationInput>;
};
export type RentalOrderCreateWithoutPaymentAttemptInput = {
    id?: string;
    orderNumber: string;
    status?: $Enums.OrderStatus;
    paymentStatus?: $Enums.PaymentStatus;
    paymentMethod?: $Enums.PaymentMethod;
    rentalStartDate: Date | string;
    rentalEndDate: Date | string;
    pickupDate?: Date | string | null;
    returnDate?: Date | string | null;
    subtotalAmount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    securityDeposit?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    discountAmount?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalAmount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    amountPaid?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    amountDueAtPickup?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    depositRefundStatus?: $Enums.DepositRefundStatus;
    depositRefundedAmount?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    depositRefundedAt?: Date | string | null;
    depositRefundReference?: string | null;
    depositRefundNotes?: string | null;
    paymentGatewayOrderId?: string | null;
    paymentGatewayPaymentId?: string | null;
    paymentGatewaySignature?: string | null;
    paymentCapturedAt?: Date | string | null;
    specialInstructions?: string | null;
    internalNotes?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    customer: Prisma.CustomerCreateNestedOneWithoutOrdersInput;
    pickupLocation: Prisma.StoreLocationCreateNestedOneWithoutOrdersInput;
    createdByAdmin?: Prisma.AdminUserCreateNestedOneWithoutCreatedOrdersInput;
    items?: Prisma.RentalOrderItemCreateNestedManyWithoutOrderInput;
    invoice?: Prisma.InvoiceCreateNestedOneWithoutOrderInput;
};
export type RentalOrderUncheckedCreateWithoutPaymentAttemptInput = {
    id?: string;
    orderNumber: string;
    customerId: string;
    pickupLocationId: string;
    createdByAdminId?: string | null;
    status?: $Enums.OrderStatus;
    paymentStatus?: $Enums.PaymentStatus;
    paymentMethod?: $Enums.PaymentMethod;
    rentalStartDate: Date | string;
    rentalEndDate: Date | string;
    pickupDate?: Date | string | null;
    returnDate?: Date | string | null;
    subtotalAmount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    securityDeposit?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    discountAmount?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalAmount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    amountPaid?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    amountDueAtPickup?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    depositRefundStatus?: $Enums.DepositRefundStatus;
    depositRefundedAmount?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    depositRefundedAt?: Date | string | null;
    depositRefundReference?: string | null;
    depositRefundNotes?: string | null;
    paymentGatewayOrderId?: string | null;
    paymentGatewayPaymentId?: string | null;
    paymentGatewaySignature?: string | null;
    paymentCapturedAt?: Date | string | null;
    specialInstructions?: string | null;
    internalNotes?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    items?: Prisma.RentalOrderItemUncheckedCreateNestedManyWithoutOrderInput;
    invoice?: Prisma.InvoiceUncheckedCreateNestedOneWithoutOrderInput;
};
export type RentalOrderCreateOrConnectWithoutPaymentAttemptInput = {
    where: Prisma.RentalOrderWhereUniqueInput;
    create: Prisma.XOR<Prisma.RentalOrderCreateWithoutPaymentAttemptInput, Prisma.RentalOrderUncheckedCreateWithoutPaymentAttemptInput>;
};
export type RentalOrderUpsertWithoutPaymentAttemptInput = {
    update: Prisma.XOR<Prisma.RentalOrderUpdateWithoutPaymentAttemptInput, Prisma.RentalOrderUncheckedUpdateWithoutPaymentAttemptInput>;
    create: Prisma.XOR<Prisma.RentalOrderCreateWithoutPaymentAttemptInput, Prisma.RentalOrderUncheckedCreateWithoutPaymentAttemptInput>;
    where?: Prisma.RentalOrderWhereInput;
};
export type RentalOrderUpdateToOneWithWhereWithoutPaymentAttemptInput = {
    where?: Prisma.RentalOrderWhereInput;
    data: Prisma.XOR<Prisma.RentalOrderUpdateWithoutPaymentAttemptInput, Prisma.RentalOrderUncheckedUpdateWithoutPaymentAttemptInput>;
};
export type RentalOrderUpdateWithoutPaymentAttemptInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    orderNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus;
    paymentStatus?: Prisma.EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus;
    paymentMethod?: Prisma.EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod;
    rentalStartDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    rentalEndDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    pickupDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    returnDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    subtotalAmount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    securityDeposit?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    discountAmount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalAmount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    amountPaid?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    amountDueAtPickup?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    depositRefundStatus?: Prisma.EnumDepositRefundStatusFieldUpdateOperationsInput | $Enums.DepositRefundStatus;
    depositRefundedAmount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    depositRefundedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    depositRefundReference?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    depositRefundNotes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    paymentGatewayOrderId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    paymentGatewayPaymentId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    paymentGatewaySignature?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    paymentCapturedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    specialInstructions?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    internalNotes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    customer?: Prisma.CustomerUpdateOneRequiredWithoutOrdersNestedInput;
    pickupLocation?: Prisma.StoreLocationUpdateOneRequiredWithoutOrdersNestedInput;
    createdByAdmin?: Prisma.AdminUserUpdateOneWithoutCreatedOrdersNestedInput;
    items?: Prisma.RentalOrderItemUpdateManyWithoutOrderNestedInput;
    invoice?: Prisma.InvoiceUpdateOneWithoutOrderNestedInput;
};
export type RentalOrderUncheckedUpdateWithoutPaymentAttemptInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    orderNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    customerId?: Prisma.StringFieldUpdateOperationsInput | string;
    pickupLocationId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdByAdminId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus;
    paymentStatus?: Prisma.EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus;
    paymentMethod?: Prisma.EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod;
    rentalStartDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    rentalEndDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    pickupDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    returnDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    subtotalAmount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    securityDeposit?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    discountAmount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalAmount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    amountPaid?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    amountDueAtPickup?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    depositRefundStatus?: Prisma.EnumDepositRefundStatusFieldUpdateOperationsInput | $Enums.DepositRefundStatus;
    depositRefundedAmount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    depositRefundedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    depositRefundReference?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    depositRefundNotes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    paymentGatewayOrderId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    paymentGatewayPaymentId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    paymentGatewaySignature?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    paymentCapturedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    specialInstructions?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    internalNotes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    items?: Prisma.RentalOrderItemUncheckedUpdateManyWithoutOrderNestedInput;
    invoice?: Prisma.InvoiceUncheckedUpdateOneWithoutOrderNestedInput;
};
export type RentalOrderCreateWithoutItemsInput = {
    id?: string;
    orderNumber: string;
    status?: $Enums.OrderStatus;
    paymentStatus?: $Enums.PaymentStatus;
    paymentMethod?: $Enums.PaymentMethod;
    rentalStartDate: Date | string;
    rentalEndDate: Date | string;
    pickupDate?: Date | string | null;
    returnDate?: Date | string | null;
    subtotalAmount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    securityDeposit?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    discountAmount?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalAmount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    amountPaid?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    amountDueAtPickup?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    depositRefundStatus?: $Enums.DepositRefundStatus;
    depositRefundedAmount?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    depositRefundedAt?: Date | string | null;
    depositRefundReference?: string | null;
    depositRefundNotes?: string | null;
    paymentGatewayOrderId?: string | null;
    paymentGatewayPaymentId?: string | null;
    paymentGatewaySignature?: string | null;
    paymentCapturedAt?: Date | string | null;
    specialInstructions?: string | null;
    internalNotes?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    customer: Prisma.CustomerCreateNestedOneWithoutOrdersInput;
    pickupLocation: Prisma.StoreLocationCreateNestedOneWithoutOrdersInput;
    createdByAdmin?: Prisma.AdminUserCreateNestedOneWithoutCreatedOrdersInput;
    invoice?: Prisma.InvoiceCreateNestedOneWithoutOrderInput;
    paymentAttempt?: Prisma.CheckoutPaymentAttemptCreateNestedOneWithoutRentalOrderInput;
};
export type RentalOrderUncheckedCreateWithoutItemsInput = {
    id?: string;
    orderNumber: string;
    customerId: string;
    pickupLocationId: string;
    createdByAdminId?: string | null;
    status?: $Enums.OrderStatus;
    paymentStatus?: $Enums.PaymentStatus;
    paymentMethod?: $Enums.PaymentMethod;
    rentalStartDate: Date | string;
    rentalEndDate: Date | string;
    pickupDate?: Date | string | null;
    returnDate?: Date | string | null;
    subtotalAmount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    securityDeposit?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    discountAmount?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalAmount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    amountPaid?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    amountDueAtPickup?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    depositRefundStatus?: $Enums.DepositRefundStatus;
    depositRefundedAmount?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    depositRefundedAt?: Date | string | null;
    depositRefundReference?: string | null;
    depositRefundNotes?: string | null;
    paymentGatewayOrderId?: string | null;
    paymentGatewayPaymentId?: string | null;
    paymentGatewaySignature?: string | null;
    paymentCapturedAt?: Date | string | null;
    specialInstructions?: string | null;
    internalNotes?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    invoice?: Prisma.InvoiceUncheckedCreateNestedOneWithoutOrderInput;
    paymentAttempt?: Prisma.CheckoutPaymentAttemptUncheckedCreateNestedOneWithoutRentalOrderInput;
};
export type RentalOrderCreateOrConnectWithoutItemsInput = {
    where: Prisma.RentalOrderWhereUniqueInput;
    create: Prisma.XOR<Prisma.RentalOrderCreateWithoutItemsInput, Prisma.RentalOrderUncheckedCreateWithoutItemsInput>;
};
export type RentalOrderUpsertWithoutItemsInput = {
    update: Prisma.XOR<Prisma.RentalOrderUpdateWithoutItemsInput, Prisma.RentalOrderUncheckedUpdateWithoutItemsInput>;
    create: Prisma.XOR<Prisma.RentalOrderCreateWithoutItemsInput, Prisma.RentalOrderUncheckedCreateWithoutItemsInput>;
    where?: Prisma.RentalOrderWhereInput;
};
export type RentalOrderUpdateToOneWithWhereWithoutItemsInput = {
    where?: Prisma.RentalOrderWhereInput;
    data: Prisma.XOR<Prisma.RentalOrderUpdateWithoutItemsInput, Prisma.RentalOrderUncheckedUpdateWithoutItemsInput>;
};
export type RentalOrderUpdateWithoutItemsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    orderNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus;
    paymentStatus?: Prisma.EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus;
    paymentMethod?: Prisma.EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod;
    rentalStartDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    rentalEndDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    pickupDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    returnDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    subtotalAmount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    securityDeposit?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    discountAmount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalAmount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    amountPaid?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    amountDueAtPickup?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    depositRefundStatus?: Prisma.EnumDepositRefundStatusFieldUpdateOperationsInput | $Enums.DepositRefundStatus;
    depositRefundedAmount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    depositRefundedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    depositRefundReference?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    depositRefundNotes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    paymentGatewayOrderId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    paymentGatewayPaymentId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    paymentGatewaySignature?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    paymentCapturedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    specialInstructions?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    internalNotes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    customer?: Prisma.CustomerUpdateOneRequiredWithoutOrdersNestedInput;
    pickupLocation?: Prisma.StoreLocationUpdateOneRequiredWithoutOrdersNestedInput;
    createdByAdmin?: Prisma.AdminUserUpdateOneWithoutCreatedOrdersNestedInput;
    invoice?: Prisma.InvoiceUpdateOneWithoutOrderNestedInput;
    paymentAttempt?: Prisma.CheckoutPaymentAttemptUpdateOneWithoutRentalOrderNestedInput;
};
export type RentalOrderUncheckedUpdateWithoutItemsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    orderNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    customerId?: Prisma.StringFieldUpdateOperationsInput | string;
    pickupLocationId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdByAdminId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus;
    paymentStatus?: Prisma.EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus;
    paymentMethod?: Prisma.EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod;
    rentalStartDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    rentalEndDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    pickupDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    returnDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    subtotalAmount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    securityDeposit?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    discountAmount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalAmount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    amountPaid?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    amountDueAtPickup?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    depositRefundStatus?: Prisma.EnumDepositRefundStatusFieldUpdateOperationsInput | $Enums.DepositRefundStatus;
    depositRefundedAmount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    depositRefundedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    depositRefundReference?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    depositRefundNotes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    paymentGatewayOrderId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    paymentGatewayPaymentId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    paymentGatewaySignature?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    paymentCapturedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    specialInstructions?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    internalNotes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    invoice?: Prisma.InvoiceUncheckedUpdateOneWithoutOrderNestedInput;
    paymentAttempt?: Prisma.CheckoutPaymentAttemptUncheckedUpdateOneWithoutRentalOrderNestedInput;
};
export type RentalOrderCreateWithoutInvoiceInput = {
    id?: string;
    orderNumber: string;
    status?: $Enums.OrderStatus;
    paymentStatus?: $Enums.PaymentStatus;
    paymentMethod?: $Enums.PaymentMethod;
    rentalStartDate: Date | string;
    rentalEndDate: Date | string;
    pickupDate?: Date | string | null;
    returnDate?: Date | string | null;
    subtotalAmount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    securityDeposit?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    discountAmount?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalAmount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    amountPaid?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    amountDueAtPickup?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    depositRefundStatus?: $Enums.DepositRefundStatus;
    depositRefundedAmount?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    depositRefundedAt?: Date | string | null;
    depositRefundReference?: string | null;
    depositRefundNotes?: string | null;
    paymentGatewayOrderId?: string | null;
    paymentGatewayPaymentId?: string | null;
    paymentGatewaySignature?: string | null;
    paymentCapturedAt?: Date | string | null;
    specialInstructions?: string | null;
    internalNotes?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    customer: Prisma.CustomerCreateNestedOneWithoutOrdersInput;
    pickupLocation: Prisma.StoreLocationCreateNestedOneWithoutOrdersInput;
    createdByAdmin?: Prisma.AdminUserCreateNestedOneWithoutCreatedOrdersInput;
    items?: Prisma.RentalOrderItemCreateNestedManyWithoutOrderInput;
    paymentAttempt?: Prisma.CheckoutPaymentAttemptCreateNestedOneWithoutRentalOrderInput;
};
export type RentalOrderUncheckedCreateWithoutInvoiceInput = {
    id?: string;
    orderNumber: string;
    customerId: string;
    pickupLocationId: string;
    createdByAdminId?: string | null;
    status?: $Enums.OrderStatus;
    paymentStatus?: $Enums.PaymentStatus;
    paymentMethod?: $Enums.PaymentMethod;
    rentalStartDate: Date | string;
    rentalEndDate: Date | string;
    pickupDate?: Date | string | null;
    returnDate?: Date | string | null;
    subtotalAmount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    securityDeposit?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    discountAmount?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalAmount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    amountPaid?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    amountDueAtPickup?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    depositRefundStatus?: $Enums.DepositRefundStatus;
    depositRefundedAmount?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    depositRefundedAt?: Date | string | null;
    depositRefundReference?: string | null;
    depositRefundNotes?: string | null;
    paymentGatewayOrderId?: string | null;
    paymentGatewayPaymentId?: string | null;
    paymentGatewaySignature?: string | null;
    paymentCapturedAt?: Date | string | null;
    specialInstructions?: string | null;
    internalNotes?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    items?: Prisma.RentalOrderItemUncheckedCreateNestedManyWithoutOrderInput;
    paymentAttempt?: Prisma.CheckoutPaymentAttemptUncheckedCreateNestedOneWithoutRentalOrderInput;
};
export type RentalOrderCreateOrConnectWithoutInvoiceInput = {
    where: Prisma.RentalOrderWhereUniqueInput;
    create: Prisma.XOR<Prisma.RentalOrderCreateWithoutInvoiceInput, Prisma.RentalOrderUncheckedCreateWithoutInvoiceInput>;
};
export type RentalOrderUpsertWithoutInvoiceInput = {
    update: Prisma.XOR<Prisma.RentalOrderUpdateWithoutInvoiceInput, Prisma.RentalOrderUncheckedUpdateWithoutInvoiceInput>;
    create: Prisma.XOR<Prisma.RentalOrderCreateWithoutInvoiceInput, Prisma.RentalOrderUncheckedCreateWithoutInvoiceInput>;
    where?: Prisma.RentalOrderWhereInput;
};
export type RentalOrderUpdateToOneWithWhereWithoutInvoiceInput = {
    where?: Prisma.RentalOrderWhereInput;
    data: Prisma.XOR<Prisma.RentalOrderUpdateWithoutInvoiceInput, Prisma.RentalOrderUncheckedUpdateWithoutInvoiceInput>;
};
export type RentalOrderUpdateWithoutInvoiceInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    orderNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus;
    paymentStatus?: Prisma.EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus;
    paymentMethod?: Prisma.EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod;
    rentalStartDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    rentalEndDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    pickupDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    returnDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    subtotalAmount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    securityDeposit?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    discountAmount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalAmount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    amountPaid?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    amountDueAtPickup?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    depositRefundStatus?: Prisma.EnumDepositRefundStatusFieldUpdateOperationsInput | $Enums.DepositRefundStatus;
    depositRefundedAmount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    depositRefundedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    depositRefundReference?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    depositRefundNotes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    paymentGatewayOrderId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    paymentGatewayPaymentId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    paymentGatewaySignature?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    paymentCapturedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    specialInstructions?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    internalNotes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    customer?: Prisma.CustomerUpdateOneRequiredWithoutOrdersNestedInput;
    pickupLocation?: Prisma.StoreLocationUpdateOneRequiredWithoutOrdersNestedInput;
    createdByAdmin?: Prisma.AdminUserUpdateOneWithoutCreatedOrdersNestedInput;
    items?: Prisma.RentalOrderItemUpdateManyWithoutOrderNestedInput;
    paymentAttempt?: Prisma.CheckoutPaymentAttemptUpdateOneWithoutRentalOrderNestedInput;
};
export type RentalOrderUncheckedUpdateWithoutInvoiceInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    orderNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    customerId?: Prisma.StringFieldUpdateOperationsInput | string;
    pickupLocationId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdByAdminId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus;
    paymentStatus?: Prisma.EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus;
    paymentMethod?: Prisma.EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod;
    rentalStartDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    rentalEndDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    pickupDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    returnDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    subtotalAmount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    securityDeposit?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    discountAmount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalAmount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    amountPaid?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    amountDueAtPickup?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    depositRefundStatus?: Prisma.EnumDepositRefundStatusFieldUpdateOperationsInput | $Enums.DepositRefundStatus;
    depositRefundedAmount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    depositRefundedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    depositRefundReference?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    depositRefundNotes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    paymentGatewayOrderId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    paymentGatewayPaymentId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    paymentGatewaySignature?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    paymentCapturedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    specialInstructions?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    internalNotes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    items?: Prisma.RentalOrderItemUncheckedUpdateManyWithoutOrderNestedInput;
    paymentAttempt?: Prisma.CheckoutPaymentAttemptUncheckedUpdateOneWithoutRentalOrderNestedInput;
};
export type RentalOrderCreateManyCreatedByAdminInput = {
    id?: string;
    orderNumber: string;
    customerId: string;
    pickupLocationId: string;
    status?: $Enums.OrderStatus;
    paymentStatus?: $Enums.PaymentStatus;
    paymentMethod?: $Enums.PaymentMethod;
    rentalStartDate: Date | string;
    rentalEndDate: Date | string;
    pickupDate?: Date | string | null;
    returnDate?: Date | string | null;
    subtotalAmount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    securityDeposit?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    discountAmount?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalAmount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    amountPaid?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    amountDueAtPickup?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    depositRefundStatus?: $Enums.DepositRefundStatus;
    depositRefundedAmount?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    depositRefundedAt?: Date | string | null;
    depositRefundReference?: string | null;
    depositRefundNotes?: string | null;
    paymentGatewayOrderId?: string | null;
    paymentGatewayPaymentId?: string | null;
    paymentGatewaySignature?: string | null;
    paymentCapturedAt?: Date | string | null;
    specialInstructions?: string | null;
    internalNotes?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type RentalOrderUpdateWithoutCreatedByAdminInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    orderNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus;
    paymentStatus?: Prisma.EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus;
    paymentMethod?: Prisma.EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod;
    rentalStartDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    rentalEndDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    pickupDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    returnDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    subtotalAmount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    securityDeposit?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    discountAmount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalAmount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    amountPaid?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    amountDueAtPickup?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    depositRefundStatus?: Prisma.EnumDepositRefundStatusFieldUpdateOperationsInput | $Enums.DepositRefundStatus;
    depositRefundedAmount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    depositRefundedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    depositRefundReference?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    depositRefundNotes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    paymentGatewayOrderId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    paymentGatewayPaymentId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    paymentGatewaySignature?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    paymentCapturedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    specialInstructions?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    internalNotes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    customer?: Prisma.CustomerUpdateOneRequiredWithoutOrdersNestedInput;
    pickupLocation?: Prisma.StoreLocationUpdateOneRequiredWithoutOrdersNestedInput;
    items?: Prisma.RentalOrderItemUpdateManyWithoutOrderNestedInput;
    invoice?: Prisma.InvoiceUpdateOneWithoutOrderNestedInput;
    paymentAttempt?: Prisma.CheckoutPaymentAttemptUpdateOneWithoutRentalOrderNestedInput;
};
export type RentalOrderUncheckedUpdateWithoutCreatedByAdminInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    orderNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    customerId?: Prisma.StringFieldUpdateOperationsInput | string;
    pickupLocationId?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus;
    paymentStatus?: Prisma.EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus;
    paymentMethod?: Prisma.EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod;
    rentalStartDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    rentalEndDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    pickupDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    returnDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    subtotalAmount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    securityDeposit?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    discountAmount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalAmount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    amountPaid?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    amountDueAtPickup?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    depositRefundStatus?: Prisma.EnumDepositRefundStatusFieldUpdateOperationsInput | $Enums.DepositRefundStatus;
    depositRefundedAmount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    depositRefundedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    depositRefundReference?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    depositRefundNotes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    paymentGatewayOrderId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    paymentGatewayPaymentId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    paymentGatewaySignature?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    paymentCapturedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    specialInstructions?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    internalNotes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    items?: Prisma.RentalOrderItemUncheckedUpdateManyWithoutOrderNestedInput;
    invoice?: Prisma.InvoiceUncheckedUpdateOneWithoutOrderNestedInput;
    paymentAttempt?: Prisma.CheckoutPaymentAttemptUncheckedUpdateOneWithoutRentalOrderNestedInput;
};
export type RentalOrderUncheckedUpdateManyWithoutCreatedByAdminInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    orderNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    customerId?: Prisma.StringFieldUpdateOperationsInput | string;
    pickupLocationId?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus;
    paymentStatus?: Prisma.EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus;
    paymentMethod?: Prisma.EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod;
    rentalStartDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    rentalEndDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    pickupDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    returnDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    subtotalAmount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    securityDeposit?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    discountAmount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalAmount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    amountPaid?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    amountDueAtPickup?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    depositRefundStatus?: Prisma.EnumDepositRefundStatusFieldUpdateOperationsInput | $Enums.DepositRefundStatus;
    depositRefundedAmount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    depositRefundedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    depositRefundReference?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    depositRefundNotes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    paymentGatewayOrderId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    paymentGatewayPaymentId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    paymentGatewaySignature?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    paymentCapturedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    specialInstructions?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    internalNotes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type RentalOrderCreateManyCustomerInput = {
    id?: string;
    orderNumber: string;
    pickupLocationId: string;
    createdByAdminId?: string | null;
    status?: $Enums.OrderStatus;
    paymentStatus?: $Enums.PaymentStatus;
    paymentMethod?: $Enums.PaymentMethod;
    rentalStartDate: Date | string;
    rentalEndDate: Date | string;
    pickupDate?: Date | string | null;
    returnDate?: Date | string | null;
    subtotalAmount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    securityDeposit?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    discountAmount?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalAmount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    amountPaid?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    amountDueAtPickup?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    depositRefundStatus?: $Enums.DepositRefundStatus;
    depositRefundedAmount?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    depositRefundedAt?: Date | string | null;
    depositRefundReference?: string | null;
    depositRefundNotes?: string | null;
    paymentGatewayOrderId?: string | null;
    paymentGatewayPaymentId?: string | null;
    paymentGatewaySignature?: string | null;
    paymentCapturedAt?: Date | string | null;
    specialInstructions?: string | null;
    internalNotes?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type RentalOrderUpdateWithoutCustomerInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    orderNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus;
    paymentStatus?: Prisma.EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus;
    paymentMethod?: Prisma.EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod;
    rentalStartDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    rentalEndDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    pickupDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    returnDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    subtotalAmount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    securityDeposit?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    discountAmount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalAmount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    amountPaid?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    amountDueAtPickup?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    depositRefundStatus?: Prisma.EnumDepositRefundStatusFieldUpdateOperationsInput | $Enums.DepositRefundStatus;
    depositRefundedAmount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    depositRefundedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    depositRefundReference?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    depositRefundNotes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    paymentGatewayOrderId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    paymentGatewayPaymentId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    paymentGatewaySignature?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    paymentCapturedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    specialInstructions?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    internalNotes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    pickupLocation?: Prisma.StoreLocationUpdateOneRequiredWithoutOrdersNestedInput;
    createdByAdmin?: Prisma.AdminUserUpdateOneWithoutCreatedOrdersNestedInput;
    items?: Prisma.RentalOrderItemUpdateManyWithoutOrderNestedInput;
    invoice?: Prisma.InvoiceUpdateOneWithoutOrderNestedInput;
    paymentAttempt?: Prisma.CheckoutPaymentAttemptUpdateOneWithoutRentalOrderNestedInput;
};
export type RentalOrderUncheckedUpdateWithoutCustomerInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    orderNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    pickupLocationId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdByAdminId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus;
    paymentStatus?: Prisma.EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus;
    paymentMethod?: Prisma.EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod;
    rentalStartDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    rentalEndDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    pickupDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    returnDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    subtotalAmount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    securityDeposit?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    discountAmount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalAmount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    amountPaid?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    amountDueAtPickup?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    depositRefundStatus?: Prisma.EnumDepositRefundStatusFieldUpdateOperationsInput | $Enums.DepositRefundStatus;
    depositRefundedAmount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    depositRefundedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    depositRefundReference?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    depositRefundNotes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    paymentGatewayOrderId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    paymentGatewayPaymentId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    paymentGatewaySignature?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    paymentCapturedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    specialInstructions?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    internalNotes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    items?: Prisma.RentalOrderItemUncheckedUpdateManyWithoutOrderNestedInput;
    invoice?: Prisma.InvoiceUncheckedUpdateOneWithoutOrderNestedInput;
    paymentAttempt?: Prisma.CheckoutPaymentAttemptUncheckedUpdateOneWithoutRentalOrderNestedInput;
};
export type RentalOrderUncheckedUpdateManyWithoutCustomerInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    orderNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    pickupLocationId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdByAdminId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus;
    paymentStatus?: Prisma.EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus;
    paymentMethod?: Prisma.EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod;
    rentalStartDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    rentalEndDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    pickupDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    returnDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    subtotalAmount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    securityDeposit?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    discountAmount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalAmount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    amountPaid?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    amountDueAtPickup?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    depositRefundStatus?: Prisma.EnumDepositRefundStatusFieldUpdateOperationsInput | $Enums.DepositRefundStatus;
    depositRefundedAmount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    depositRefundedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    depositRefundReference?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    depositRefundNotes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    paymentGatewayOrderId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    paymentGatewayPaymentId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    paymentGatewaySignature?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    paymentCapturedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    specialInstructions?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    internalNotes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type RentalOrderCreateManyPickupLocationInput = {
    id?: string;
    orderNumber: string;
    customerId: string;
    createdByAdminId?: string | null;
    status?: $Enums.OrderStatus;
    paymentStatus?: $Enums.PaymentStatus;
    paymentMethod?: $Enums.PaymentMethod;
    rentalStartDate: Date | string;
    rentalEndDate: Date | string;
    pickupDate?: Date | string | null;
    returnDate?: Date | string | null;
    subtotalAmount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    securityDeposit?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    discountAmount?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalAmount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    amountPaid?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    amountDueAtPickup?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    depositRefundStatus?: $Enums.DepositRefundStatus;
    depositRefundedAmount?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    depositRefundedAt?: Date | string | null;
    depositRefundReference?: string | null;
    depositRefundNotes?: string | null;
    paymentGatewayOrderId?: string | null;
    paymentGatewayPaymentId?: string | null;
    paymentGatewaySignature?: string | null;
    paymentCapturedAt?: Date | string | null;
    specialInstructions?: string | null;
    internalNotes?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type RentalOrderUpdateWithoutPickupLocationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    orderNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus;
    paymentStatus?: Prisma.EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus;
    paymentMethod?: Prisma.EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod;
    rentalStartDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    rentalEndDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    pickupDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    returnDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    subtotalAmount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    securityDeposit?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    discountAmount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalAmount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    amountPaid?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    amountDueAtPickup?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    depositRefundStatus?: Prisma.EnumDepositRefundStatusFieldUpdateOperationsInput | $Enums.DepositRefundStatus;
    depositRefundedAmount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    depositRefundedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    depositRefundReference?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    depositRefundNotes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    paymentGatewayOrderId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    paymentGatewayPaymentId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    paymentGatewaySignature?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    paymentCapturedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    specialInstructions?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    internalNotes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    customer?: Prisma.CustomerUpdateOneRequiredWithoutOrdersNestedInput;
    createdByAdmin?: Prisma.AdminUserUpdateOneWithoutCreatedOrdersNestedInput;
    items?: Prisma.RentalOrderItemUpdateManyWithoutOrderNestedInput;
    invoice?: Prisma.InvoiceUpdateOneWithoutOrderNestedInput;
    paymentAttempt?: Prisma.CheckoutPaymentAttemptUpdateOneWithoutRentalOrderNestedInput;
};
export type RentalOrderUncheckedUpdateWithoutPickupLocationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    orderNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    customerId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdByAdminId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus;
    paymentStatus?: Prisma.EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus;
    paymentMethod?: Prisma.EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod;
    rentalStartDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    rentalEndDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    pickupDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    returnDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    subtotalAmount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    securityDeposit?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    discountAmount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalAmount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    amountPaid?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    amountDueAtPickup?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    depositRefundStatus?: Prisma.EnumDepositRefundStatusFieldUpdateOperationsInput | $Enums.DepositRefundStatus;
    depositRefundedAmount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    depositRefundedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    depositRefundReference?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    depositRefundNotes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    paymentGatewayOrderId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    paymentGatewayPaymentId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    paymentGatewaySignature?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    paymentCapturedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    specialInstructions?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    internalNotes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    items?: Prisma.RentalOrderItemUncheckedUpdateManyWithoutOrderNestedInput;
    invoice?: Prisma.InvoiceUncheckedUpdateOneWithoutOrderNestedInput;
    paymentAttempt?: Prisma.CheckoutPaymentAttemptUncheckedUpdateOneWithoutRentalOrderNestedInput;
};
export type RentalOrderUncheckedUpdateManyWithoutPickupLocationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    orderNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    customerId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdByAdminId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus;
    paymentStatus?: Prisma.EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus;
    paymentMethod?: Prisma.EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod;
    rentalStartDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    rentalEndDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    pickupDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    returnDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    subtotalAmount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    securityDeposit?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    discountAmount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalAmount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    amountPaid?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    amountDueAtPickup?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    depositRefundStatus?: Prisma.EnumDepositRefundStatusFieldUpdateOperationsInput | $Enums.DepositRefundStatus;
    depositRefundedAmount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    depositRefundedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    depositRefundReference?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    depositRefundNotes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    paymentGatewayOrderId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    paymentGatewayPaymentId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    paymentGatewaySignature?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    paymentCapturedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    specialInstructions?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    internalNotes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
/**
 * Count Type RentalOrderCountOutputType
 */
export type RentalOrderCountOutputType = {
    items: number;
};
export type RentalOrderCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    items?: boolean | RentalOrderCountOutputTypeCountItemsArgs;
};
/**
 * RentalOrderCountOutputType without action
 */
export type RentalOrderCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RentalOrderCountOutputType
     */
    select?: Prisma.RentalOrderCountOutputTypeSelect<ExtArgs> | null;
};
/**
 * RentalOrderCountOutputType without action
 */
export type RentalOrderCountOutputTypeCountItemsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.RentalOrderItemWhereInput;
};
export type RentalOrderSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    orderNumber?: boolean;
    customerId?: boolean;
    pickupLocationId?: boolean;
    createdByAdminId?: boolean;
    status?: boolean;
    paymentStatus?: boolean;
    paymentMethod?: boolean;
    rentalStartDate?: boolean;
    rentalEndDate?: boolean;
    pickupDate?: boolean;
    returnDate?: boolean;
    subtotalAmount?: boolean;
    securityDeposit?: boolean;
    discountAmount?: boolean;
    totalAmount?: boolean;
    amountPaid?: boolean;
    amountDueAtPickup?: boolean;
    depositRefundStatus?: boolean;
    depositRefundedAmount?: boolean;
    depositRefundedAt?: boolean;
    depositRefundReference?: boolean;
    depositRefundNotes?: boolean;
    paymentGatewayOrderId?: boolean;
    paymentGatewayPaymentId?: boolean;
    paymentGatewaySignature?: boolean;
    paymentCapturedAt?: boolean;
    specialInstructions?: boolean;
    internalNotes?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    customer?: boolean | Prisma.CustomerDefaultArgs<ExtArgs>;
    pickupLocation?: boolean | Prisma.StoreLocationDefaultArgs<ExtArgs>;
    createdByAdmin?: boolean | Prisma.RentalOrder$createdByAdminArgs<ExtArgs>;
    items?: boolean | Prisma.RentalOrder$itemsArgs<ExtArgs>;
    invoice?: boolean | Prisma.RentalOrder$invoiceArgs<ExtArgs>;
    paymentAttempt?: boolean | Prisma.RentalOrder$paymentAttemptArgs<ExtArgs>;
    _count?: boolean | Prisma.RentalOrderCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["rentalOrder"]>;
export type RentalOrderSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    orderNumber?: boolean;
    customerId?: boolean;
    pickupLocationId?: boolean;
    createdByAdminId?: boolean;
    status?: boolean;
    paymentStatus?: boolean;
    paymentMethod?: boolean;
    rentalStartDate?: boolean;
    rentalEndDate?: boolean;
    pickupDate?: boolean;
    returnDate?: boolean;
    subtotalAmount?: boolean;
    securityDeposit?: boolean;
    discountAmount?: boolean;
    totalAmount?: boolean;
    amountPaid?: boolean;
    amountDueAtPickup?: boolean;
    depositRefundStatus?: boolean;
    depositRefundedAmount?: boolean;
    depositRefundedAt?: boolean;
    depositRefundReference?: boolean;
    depositRefundNotes?: boolean;
    paymentGatewayOrderId?: boolean;
    paymentGatewayPaymentId?: boolean;
    paymentGatewaySignature?: boolean;
    paymentCapturedAt?: boolean;
    specialInstructions?: boolean;
    internalNotes?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    customer?: boolean | Prisma.CustomerDefaultArgs<ExtArgs>;
    pickupLocation?: boolean | Prisma.StoreLocationDefaultArgs<ExtArgs>;
    createdByAdmin?: boolean | Prisma.RentalOrder$createdByAdminArgs<ExtArgs>;
}, ExtArgs["result"]["rentalOrder"]>;
export type RentalOrderSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    orderNumber?: boolean;
    customerId?: boolean;
    pickupLocationId?: boolean;
    createdByAdminId?: boolean;
    status?: boolean;
    paymentStatus?: boolean;
    paymentMethod?: boolean;
    rentalStartDate?: boolean;
    rentalEndDate?: boolean;
    pickupDate?: boolean;
    returnDate?: boolean;
    subtotalAmount?: boolean;
    securityDeposit?: boolean;
    discountAmount?: boolean;
    totalAmount?: boolean;
    amountPaid?: boolean;
    amountDueAtPickup?: boolean;
    depositRefundStatus?: boolean;
    depositRefundedAmount?: boolean;
    depositRefundedAt?: boolean;
    depositRefundReference?: boolean;
    depositRefundNotes?: boolean;
    paymentGatewayOrderId?: boolean;
    paymentGatewayPaymentId?: boolean;
    paymentGatewaySignature?: boolean;
    paymentCapturedAt?: boolean;
    specialInstructions?: boolean;
    internalNotes?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    customer?: boolean | Prisma.CustomerDefaultArgs<ExtArgs>;
    pickupLocation?: boolean | Prisma.StoreLocationDefaultArgs<ExtArgs>;
    createdByAdmin?: boolean | Prisma.RentalOrder$createdByAdminArgs<ExtArgs>;
}, ExtArgs["result"]["rentalOrder"]>;
export type RentalOrderSelectScalar = {
    id?: boolean;
    orderNumber?: boolean;
    customerId?: boolean;
    pickupLocationId?: boolean;
    createdByAdminId?: boolean;
    status?: boolean;
    paymentStatus?: boolean;
    paymentMethod?: boolean;
    rentalStartDate?: boolean;
    rentalEndDate?: boolean;
    pickupDate?: boolean;
    returnDate?: boolean;
    subtotalAmount?: boolean;
    securityDeposit?: boolean;
    discountAmount?: boolean;
    totalAmount?: boolean;
    amountPaid?: boolean;
    amountDueAtPickup?: boolean;
    depositRefundStatus?: boolean;
    depositRefundedAmount?: boolean;
    depositRefundedAt?: boolean;
    depositRefundReference?: boolean;
    depositRefundNotes?: boolean;
    paymentGatewayOrderId?: boolean;
    paymentGatewayPaymentId?: boolean;
    paymentGatewaySignature?: boolean;
    paymentCapturedAt?: boolean;
    specialInstructions?: boolean;
    internalNotes?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type RentalOrderOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "orderNumber" | "customerId" | "pickupLocationId" | "createdByAdminId" | "status" | "paymentStatus" | "paymentMethod" | "rentalStartDate" | "rentalEndDate" | "pickupDate" | "returnDate" | "subtotalAmount" | "securityDeposit" | "discountAmount" | "totalAmount" | "amountPaid" | "amountDueAtPickup" | "depositRefundStatus" | "depositRefundedAmount" | "depositRefundedAt" | "depositRefundReference" | "depositRefundNotes" | "paymentGatewayOrderId" | "paymentGatewayPaymentId" | "paymentGatewaySignature" | "paymentCapturedAt" | "specialInstructions" | "internalNotes" | "createdAt" | "updatedAt", ExtArgs["result"]["rentalOrder"]>;
export type RentalOrderInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    customer?: boolean | Prisma.CustomerDefaultArgs<ExtArgs>;
    pickupLocation?: boolean | Prisma.StoreLocationDefaultArgs<ExtArgs>;
    createdByAdmin?: boolean | Prisma.RentalOrder$createdByAdminArgs<ExtArgs>;
    items?: boolean | Prisma.RentalOrder$itemsArgs<ExtArgs>;
    invoice?: boolean | Prisma.RentalOrder$invoiceArgs<ExtArgs>;
    paymentAttempt?: boolean | Prisma.RentalOrder$paymentAttemptArgs<ExtArgs>;
    _count?: boolean | Prisma.RentalOrderCountOutputTypeDefaultArgs<ExtArgs>;
};
export type RentalOrderIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    customer?: boolean | Prisma.CustomerDefaultArgs<ExtArgs>;
    pickupLocation?: boolean | Prisma.StoreLocationDefaultArgs<ExtArgs>;
    createdByAdmin?: boolean | Prisma.RentalOrder$createdByAdminArgs<ExtArgs>;
};
export type RentalOrderIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    customer?: boolean | Prisma.CustomerDefaultArgs<ExtArgs>;
    pickupLocation?: boolean | Prisma.StoreLocationDefaultArgs<ExtArgs>;
    createdByAdmin?: boolean | Prisma.RentalOrder$createdByAdminArgs<ExtArgs>;
};
export type $RentalOrderPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "RentalOrder";
    objects: {
        customer: Prisma.$CustomerPayload<ExtArgs>;
        pickupLocation: Prisma.$StoreLocationPayload<ExtArgs>;
        createdByAdmin: Prisma.$AdminUserPayload<ExtArgs> | null;
        items: Prisma.$RentalOrderItemPayload<ExtArgs>[];
        invoice: Prisma.$InvoicePayload<ExtArgs> | null;
        paymentAttempt: Prisma.$CheckoutPaymentAttemptPayload<ExtArgs> | null;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        orderNumber: string;
        customerId: string;
        pickupLocationId: string;
        createdByAdminId: string | null;
        status: $Enums.OrderStatus;
        paymentStatus: $Enums.PaymentStatus;
        paymentMethod: $Enums.PaymentMethod;
        rentalStartDate: Date;
        rentalEndDate: Date;
        pickupDate: Date | null;
        returnDate: Date | null;
        subtotalAmount: runtime.Decimal;
        securityDeposit: runtime.Decimal;
        discountAmount: runtime.Decimal;
        totalAmount: runtime.Decimal;
        amountPaid: runtime.Decimal;
        amountDueAtPickup: runtime.Decimal;
        depositRefundStatus: $Enums.DepositRefundStatus;
        depositRefundedAmount: runtime.Decimal;
        depositRefundedAt: Date | null;
        depositRefundReference: string | null;
        depositRefundNotes: string | null;
        paymentGatewayOrderId: string | null;
        paymentGatewayPaymentId: string | null;
        paymentGatewaySignature: string | null;
        paymentCapturedAt: Date | null;
        specialInstructions: string | null;
        internalNotes: string | null;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["rentalOrder"]>;
    composites: {};
};
export type RentalOrderGetPayload<S extends boolean | null | undefined | RentalOrderDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$RentalOrderPayload, S>;
export type RentalOrderCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<RentalOrderFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: RentalOrderCountAggregateInputType | true;
};
export interface RentalOrderDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['RentalOrder'];
        meta: {
            name: 'RentalOrder';
        };
    };
    /**
     * Find zero or one RentalOrder that matches the filter.
     * @param {RentalOrderFindUniqueArgs} args - Arguments to find a RentalOrder
     * @example
     * // Get one RentalOrder
     * const rentalOrder = await prisma.rentalOrder.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RentalOrderFindUniqueArgs>(args: Prisma.SelectSubset<T, RentalOrderFindUniqueArgs<ExtArgs>>): Prisma.Prisma__RentalOrderClient<runtime.Types.Result.GetResult<Prisma.$RentalOrderPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one RentalOrder that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RentalOrderFindUniqueOrThrowArgs} args - Arguments to find a RentalOrder
     * @example
     * // Get one RentalOrder
     * const rentalOrder = await prisma.rentalOrder.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RentalOrderFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, RentalOrderFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__RentalOrderClient<runtime.Types.Result.GetResult<Prisma.$RentalOrderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first RentalOrder that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RentalOrderFindFirstArgs} args - Arguments to find a RentalOrder
     * @example
     * // Get one RentalOrder
     * const rentalOrder = await prisma.rentalOrder.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RentalOrderFindFirstArgs>(args?: Prisma.SelectSubset<T, RentalOrderFindFirstArgs<ExtArgs>>): Prisma.Prisma__RentalOrderClient<runtime.Types.Result.GetResult<Prisma.$RentalOrderPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first RentalOrder that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RentalOrderFindFirstOrThrowArgs} args - Arguments to find a RentalOrder
     * @example
     * // Get one RentalOrder
     * const rentalOrder = await prisma.rentalOrder.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RentalOrderFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, RentalOrderFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__RentalOrderClient<runtime.Types.Result.GetResult<Prisma.$RentalOrderPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more RentalOrders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RentalOrderFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RentalOrders
     * const rentalOrders = await prisma.rentalOrder.findMany()
     *
     * // Get first 10 RentalOrders
     * const rentalOrders = await prisma.rentalOrder.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const rentalOrderWithIdOnly = await prisma.rentalOrder.findMany({ select: { id: true } })
     *
     */
    findMany<T extends RentalOrderFindManyArgs>(args?: Prisma.SelectSubset<T, RentalOrderFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$RentalOrderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a RentalOrder.
     * @param {RentalOrderCreateArgs} args - Arguments to create a RentalOrder.
     * @example
     * // Create one RentalOrder
     * const RentalOrder = await prisma.rentalOrder.create({
     *   data: {
     *     // ... data to create a RentalOrder
     *   }
     * })
     *
     */
    create<T extends RentalOrderCreateArgs>(args: Prisma.SelectSubset<T, RentalOrderCreateArgs<ExtArgs>>): Prisma.Prisma__RentalOrderClient<runtime.Types.Result.GetResult<Prisma.$RentalOrderPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many RentalOrders.
     * @param {RentalOrderCreateManyArgs} args - Arguments to create many RentalOrders.
     * @example
     * // Create many RentalOrders
     * const rentalOrder = await prisma.rentalOrder.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends RentalOrderCreateManyArgs>(args?: Prisma.SelectSubset<T, RentalOrderCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many RentalOrders and returns the data saved in the database.
     * @param {RentalOrderCreateManyAndReturnArgs} args - Arguments to create many RentalOrders.
     * @example
     * // Create many RentalOrders
     * const rentalOrder = await prisma.rentalOrder.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many RentalOrders and only return the `id`
     * const rentalOrderWithIdOnly = await prisma.rentalOrder.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends RentalOrderCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, RentalOrderCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$RentalOrderPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a RentalOrder.
     * @param {RentalOrderDeleteArgs} args - Arguments to delete one RentalOrder.
     * @example
     * // Delete one RentalOrder
     * const RentalOrder = await prisma.rentalOrder.delete({
     *   where: {
     *     // ... filter to delete one RentalOrder
     *   }
     * })
     *
     */
    delete<T extends RentalOrderDeleteArgs>(args: Prisma.SelectSubset<T, RentalOrderDeleteArgs<ExtArgs>>): Prisma.Prisma__RentalOrderClient<runtime.Types.Result.GetResult<Prisma.$RentalOrderPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one RentalOrder.
     * @param {RentalOrderUpdateArgs} args - Arguments to update one RentalOrder.
     * @example
     * // Update one RentalOrder
     * const rentalOrder = await prisma.rentalOrder.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends RentalOrderUpdateArgs>(args: Prisma.SelectSubset<T, RentalOrderUpdateArgs<ExtArgs>>): Prisma.Prisma__RentalOrderClient<runtime.Types.Result.GetResult<Prisma.$RentalOrderPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more RentalOrders.
     * @param {RentalOrderDeleteManyArgs} args - Arguments to filter RentalOrders to delete.
     * @example
     * // Delete a few RentalOrders
     * const { count } = await prisma.rentalOrder.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends RentalOrderDeleteManyArgs>(args?: Prisma.SelectSubset<T, RentalOrderDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more RentalOrders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RentalOrderUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RentalOrders
     * const rentalOrder = await prisma.rentalOrder.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends RentalOrderUpdateManyArgs>(args: Prisma.SelectSubset<T, RentalOrderUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more RentalOrders and returns the data updated in the database.
     * @param {RentalOrderUpdateManyAndReturnArgs} args - Arguments to update many RentalOrders.
     * @example
     * // Update many RentalOrders
     * const rentalOrder = await prisma.rentalOrder.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more RentalOrders and only return the `id`
     * const rentalOrderWithIdOnly = await prisma.rentalOrder.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends RentalOrderUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, RentalOrderUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$RentalOrderPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one RentalOrder.
     * @param {RentalOrderUpsertArgs} args - Arguments to update or create a RentalOrder.
     * @example
     * // Update or create a RentalOrder
     * const rentalOrder = await prisma.rentalOrder.upsert({
     *   create: {
     *     // ... data to create a RentalOrder
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RentalOrder we want to update
     *   }
     * })
     */
    upsert<T extends RentalOrderUpsertArgs>(args: Prisma.SelectSubset<T, RentalOrderUpsertArgs<ExtArgs>>): Prisma.Prisma__RentalOrderClient<runtime.Types.Result.GetResult<Prisma.$RentalOrderPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of RentalOrders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RentalOrderCountArgs} args - Arguments to filter RentalOrders to count.
     * @example
     * // Count the number of RentalOrders
     * const count = await prisma.rentalOrder.count({
     *   where: {
     *     // ... the filter for the RentalOrders we want to count
     *   }
     * })
    **/
    count<T extends RentalOrderCountArgs>(args?: Prisma.Subset<T, RentalOrderCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], RentalOrderCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a RentalOrder.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RentalOrderAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RentalOrderAggregateArgs>(args: Prisma.Subset<T, RentalOrderAggregateArgs>): Prisma.PrismaPromise<GetRentalOrderAggregateType<T>>;
    /**
     * Group by RentalOrder.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RentalOrderGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
    **/
    groupBy<T extends RentalOrderGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: RentalOrderGroupByArgs['orderBy'];
    } : {
        orderBy?: RentalOrderGroupByArgs['orderBy'];
    }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True ? `Error: "by" must not be empty.` : HavingValid extends Prisma.False ? {
        [P in HavingFields]: P extends ByFields ? never : P extends string ? `Error: Field "${P}" used in "having" needs to be provided in "by".` : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`
        ];
    }[HavingFields] : 'take' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "take", you also need to provide "orderBy"' : 'skip' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "skip", you also need to provide "orderBy"' : ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, RentalOrderGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRentalOrderGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the RentalOrder model
     */
    readonly fields: RentalOrderFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for RentalOrder.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__RentalOrderClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    customer<T extends Prisma.CustomerDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.CustomerDefaultArgs<ExtArgs>>): Prisma.Prisma__CustomerClient<runtime.Types.Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    pickupLocation<T extends Prisma.StoreLocationDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.StoreLocationDefaultArgs<ExtArgs>>): Prisma.Prisma__StoreLocationClient<runtime.Types.Result.GetResult<Prisma.$StoreLocationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    createdByAdmin<T extends Prisma.RentalOrder$createdByAdminArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.RentalOrder$createdByAdminArgs<ExtArgs>>): Prisma.Prisma__AdminUserClient<runtime.Types.Result.GetResult<Prisma.$AdminUserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    items<T extends Prisma.RentalOrder$itemsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.RentalOrder$itemsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$RentalOrderItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    invoice<T extends Prisma.RentalOrder$invoiceArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.RentalOrder$invoiceArgs<ExtArgs>>): Prisma.Prisma__InvoiceClient<runtime.Types.Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    paymentAttempt<T extends Prisma.RentalOrder$paymentAttemptArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.RentalOrder$paymentAttemptArgs<ExtArgs>>): Prisma.Prisma__CheckoutPaymentAttemptClient<runtime.Types.Result.GetResult<Prisma.$CheckoutPaymentAttemptPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
/**
 * Fields of the RentalOrder model
 */
export interface RentalOrderFieldRefs {
    readonly id: Prisma.FieldRef<"RentalOrder", 'String'>;
    readonly orderNumber: Prisma.FieldRef<"RentalOrder", 'String'>;
    readonly customerId: Prisma.FieldRef<"RentalOrder", 'String'>;
    readonly pickupLocationId: Prisma.FieldRef<"RentalOrder", 'String'>;
    readonly createdByAdminId: Prisma.FieldRef<"RentalOrder", 'String'>;
    readonly status: Prisma.FieldRef<"RentalOrder", 'OrderStatus'>;
    readonly paymentStatus: Prisma.FieldRef<"RentalOrder", 'PaymentStatus'>;
    readonly paymentMethod: Prisma.FieldRef<"RentalOrder", 'PaymentMethod'>;
    readonly rentalStartDate: Prisma.FieldRef<"RentalOrder", 'DateTime'>;
    readonly rentalEndDate: Prisma.FieldRef<"RentalOrder", 'DateTime'>;
    readonly pickupDate: Prisma.FieldRef<"RentalOrder", 'DateTime'>;
    readonly returnDate: Prisma.FieldRef<"RentalOrder", 'DateTime'>;
    readonly subtotalAmount: Prisma.FieldRef<"RentalOrder", 'Decimal'>;
    readonly securityDeposit: Prisma.FieldRef<"RentalOrder", 'Decimal'>;
    readonly discountAmount: Prisma.FieldRef<"RentalOrder", 'Decimal'>;
    readonly totalAmount: Prisma.FieldRef<"RentalOrder", 'Decimal'>;
    readonly amountPaid: Prisma.FieldRef<"RentalOrder", 'Decimal'>;
    readonly amountDueAtPickup: Prisma.FieldRef<"RentalOrder", 'Decimal'>;
    readonly depositRefundStatus: Prisma.FieldRef<"RentalOrder", 'DepositRefundStatus'>;
    readonly depositRefundedAmount: Prisma.FieldRef<"RentalOrder", 'Decimal'>;
    readonly depositRefundedAt: Prisma.FieldRef<"RentalOrder", 'DateTime'>;
    readonly depositRefundReference: Prisma.FieldRef<"RentalOrder", 'String'>;
    readonly depositRefundNotes: Prisma.FieldRef<"RentalOrder", 'String'>;
    readonly paymentGatewayOrderId: Prisma.FieldRef<"RentalOrder", 'String'>;
    readonly paymentGatewayPaymentId: Prisma.FieldRef<"RentalOrder", 'String'>;
    readonly paymentGatewaySignature: Prisma.FieldRef<"RentalOrder", 'String'>;
    readonly paymentCapturedAt: Prisma.FieldRef<"RentalOrder", 'DateTime'>;
    readonly specialInstructions: Prisma.FieldRef<"RentalOrder", 'String'>;
    readonly internalNotes: Prisma.FieldRef<"RentalOrder", 'String'>;
    readonly createdAt: Prisma.FieldRef<"RentalOrder", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"RentalOrder", 'DateTime'>;
}
/**
 * RentalOrder findUnique
 */
export type RentalOrderFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RentalOrder
     */
    select?: Prisma.RentalOrderSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the RentalOrder
     */
    omit?: Prisma.RentalOrderOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.RentalOrderInclude<ExtArgs> | null;
    /**
     * Filter, which RentalOrder to fetch.
     */
    where: Prisma.RentalOrderWhereUniqueInput;
};
/**
 * RentalOrder findUniqueOrThrow
 */
export type RentalOrderFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RentalOrder
     */
    select?: Prisma.RentalOrderSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the RentalOrder
     */
    omit?: Prisma.RentalOrderOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.RentalOrderInclude<ExtArgs> | null;
    /**
     * Filter, which RentalOrder to fetch.
     */
    where: Prisma.RentalOrderWhereUniqueInput;
};
/**
 * RentalOrder findFirst
 */
export type RentalOrderFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RentalOrder
     */
    select?: Prisma.RentalOrderSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the RentalOrder
     */
    omit?: Prisma.RentalOrderOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.RentalOrderInclude<ExtArgs> | null;
    /**
     * Filter, which RentalOrder to fetch.
     */
    where?: Prisma.RentalOrderWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of RentalOrders to fetch.
     */
    orderBy?: Prisma.RentalOrderOrderByWithRelationInput | Prisma.RentalOrderOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for RentalOrders.
     */
    cursor?: Prisma.RentalOrderWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` RentalOrders from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` RentalOrders.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of RentalOrders.
     */
    distinct?: Prisma.RentalOrderScalarFieldEnum | Prisma.RentalOrderScalarFieldEnum[];
};
/**
 * RentalOrder findFirstOrThrow
 */
export type RentalOrderFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RentalOrder
     */
    select?: Prisma.RentalOrderSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the RentalOrder
     */
    omit?: Prisma.RentalOrderOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.RentalOrderInclude<ExtArgs> | null;
    /**
     * Filter, which RentalOrder to fetch.
     */
    where?: Prisma.RentalOrderWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of RentalOrders to fetch.
     */
    orderBy?: Prisma.RentalOrderOrderByWithRelationInput | Prisma.RentalOrderOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for RentalOrders.
     */
    cursor?: Prisma.RentalOrderWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` RentalOrders from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` RentalOrders.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of RentalOrders.
     */
    distinct?: Prisma.RentalOrderScalarFieldEnum | Prisma.RentalOrderScalarFieldEnum[];
};
/**
 * RentalOrder findMany
 */
export type RentalOrderFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RentalOrder
     */
    select?: Prisma.RentalOrderSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the RentalOrder
     */
    omit?: Prisma.RentalOrderOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.RentalOrderInclude<ExtArgs> | null;
    /**
     * Filter, which RentalOrders to fetch.
     */
    where?: Prisma.RentalOrderWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of RentalOrders to fetch.
     */
    orderBy?: Prisma.RentalOrderOrderByWithRelationInput | Prisma.RentalOrderOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing RentalOrders.
     */
    cursor?: Prisma.RentalOrderWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` RentalOrders from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` RentalOrders.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of RentalOrders.
     */
    distinct?: Prisma.RentalOrderScalarFieldEnum | Prisma.RentalOrderScalarFieldEnum[];
};
/**
 * RentalOrder create
 */
export type RentalOrderCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RentalOrder
     */
    select?: Prisma.RentalOrderSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the RentalOrder
     */
    omit?: Prisma.RentalOrderOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.RentalOrderInclude<ExtArgs> | null;
    /**
     * The data needed to create a RentalOrder.
     */
    data: Prisma.XOR<Prisma.RentalOrderCreateInput, Prisma.RentalOrderUncheckedCreateInput>;
};
/**
 * RentalOrder createMany
 */
export type RentalOrderCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many RentalOrders.
     */
    data: Prisma.RentalOrderCreateManyInput | Prisma.RentalOrderCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * RentalOrder createManyAndReturn
 */
export type RentalOrderCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RentalOrder
     */
    select?: Prisma.RentalOrderSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the RentalOrder
     */
    omit?: Prisma.RentalOrderOmit<ExtArgs> | null;
    /**
     * The data used to create many RentalOrders.
     */
    data: Prisma.RentalOrderCreateManyInput | Prisma.RentalOrderCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.RentalOrderIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * RentalOrder update
 */
export type RentalOrderUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RentalOrder
     */
    select?: Prisma.RentalOrderSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the RentalOrder
     */
    omit?: Prisma.RentalOrderOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.RentalOrderInclude<ExtArgs> | null;
    /**
     * The data needed to update a RentalOrder.
     */
    data: Prisma.XOR<Prisma.RentalOrderUpdateInput, Prisma.RentalOrderUncheckedUpdateInput>;
    /**
     * Choose, which RentalOrder to update.
     */
    where: Prisma.RentalOrderWhereUniqueInput;
};
/**
 * RentalOrder updateMany
 */
export type RentalOrderUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update RentalOrders.
     */
    data: Prisma.XOR<Prisma.RentalOrderUpdateManyMutationInput, Prisma.RentalOrderUncheckedUpdateManyInput>;
    /**
     * Filter which RentalOrders to update
     */
    where?: Prisma.RentalOrderWhereInput;
    /**
     * Limit how many RentalOrders to update.
     */
    limit?: number;
};
/**
 * RentalOrder updateManyAndReturn
 */
export type RentalOrderUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RentalOrder
     */
    select?: Prisma.RentalOrderSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the RentalOrder
     */
    omit?: Prisma.RentalOrderOmit<ExtArgs> | null;
    /**
     * The data used to update RentalOrders.
     */
    data: Prisma.XOR<Prisma.RentalOrderUpdateManyMutationInput, Prisma.RentalOrderUncheckedUpdateManyInput>;
    /**
     * Filter which RentalOrders to update
     */
    where?: Prisma.RentalOrderWhereInput;
    /**
     * Limit how many RentalOrders to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.RentalOrderIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * RentalOrder upsert
 */
export type RentalOrderUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RentalOrder
     */
    select?: Prisma.RentalOrderSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the RentalOrder
     */
    omit?: Prisma.RentalOrderOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.RentalOrderInclude<ExtArgs> | null;
    /**
     * The filter to search for the RentalOrder to update in case it exists.
     */
    where: Prisma.RentalOrderWhereUniqueInput;
    /**
     * In case the RentalOrder found by the `where` argument doesn't exist, create a new RentalOrder with this data.
     */
    create: Prisma.XOR<Prisma.RentalOrderCreateInput, Prisma.RentalOrderUncheckedCreateInput>;
    /**
     * In case the RentalOrder was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.RentalOrderUpdateInput, Prisma.RentalOrderUncheckedUpdateInput>;
};
/**
 * RentalOrder delete
 */
export type RentalOrderDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RentalOrder
     */
    select?: Prisma.RentalOrderSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the RentalOrder
     */
    omit?: Prisma.RentalOrderOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.RentalOrderInclude<ExtArgs> | null;
    /**
     * Filter which RentalOrder to delete.
     */
    where: Prisma.RentalOrderWhereUniqueInput;
};
/**
 * RentalOrder deleteMany
 */
export type RentalOrderDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which RentalOrders to delete
     */
    where?: Prisma.RentalOrderWhereInput;
    /**
     * Limit how many RentalOrders to delete.
     */
    limit?: number;
};
/**
 * RentalOrder.createdByAdmin
 */
export type RentalOrder$createdByAdminArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminUser
     */
    select?: Prisma.AdminUserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the AdminUser
     */
    omit?: Prisma.AdminUserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.AdminUserInclude<ExtArgs> | null;
    where?: Prisma.AdminUserWhereInput;
};
/**
 * RentalOrder.items
 */
export type RentalOrder$itemsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RentalOrderItem
     */
    select?: Prisma.RentalOrderItemSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the RentalOrderItem
     */
    omit?: Prisma.RentalOrderItemOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.RentalOrderItemInclude<ExtArgs> | null;
    where?: Prisma.RentalOrderItemWhereInput;
    orderBy?: Prisma.RentalOrderItemOrderByWithRelationInput | Prisma.RentalOrderItemOrderByWithRelationInput[];
    cursor?: Prisma.RentalOrderItemWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.RentalOrderItemScalarFieldEnum | Prisma.RentalOrderItemScalarFieldEnum[];
};
/**
 * RentalOrder.invoice
 */
export type RentalOrder$invoiceArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: Prisma.InvoiceSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Invoice
     */
    omit?: Prisma.InvoiceOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.InvoiceInclude<ExtArgs> | null;
    where?: Prisma.InvoiceWhereInput;
};
/**
 * RentalOrder.paymentAttempt
 */
export type RentalOrder$paymentAttemptArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CheckoutPaymentAttempt
     */
    select?: Prisma.CheckoutPaymentAttemptSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the CheckoutPaymentAttempt
     */
    omit?: Prisma.CheckoutPaymentAttemptOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.CheckoutPaymentAttemptInclude<ExtArgs> | null;
    where?: Prisma.CheckoutPaymentAttemptWhereInput;
};
/**
 * RentalOrder without action
 */
export type RentalOrderDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RentalOrder
     */
    select?: Prisma.RentalOrderSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the RentalOrder
     */
    omit?: Prisma.RentalOrderOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.RentalOrderInclude<ExtArgs> | null;
};
//# sourceMappingURL=RentalOrder.d.ts.map