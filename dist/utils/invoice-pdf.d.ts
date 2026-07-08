type InvoicePdfLineItem = {
    productNameSnapshot: string;
    skuSnapshot: string;
    sizeLabelSnapshot?: string | null;
    quantity: number;
    rentalStartDate: Date | string;
    rentalEndDate: Date | string;
    rentalDays: number;
    rentalPricePerDay: unknown;
    lineTotal: unknown;
    depositAmount: unknown;
};
type InvoicePdfData = {
    invoiceNumber: string;
    invoiceDate: Date | string;
    businessName: string;
    businessAddress: string;
    businessPhone?: string | null;
    businessEmail?: string | null;
    customerName: string;
    customerPhone: string;
    customerEmail?: string | null;
    orderNumberSnapshot: string;
    rentalFee: unknown;
    securityDeposit: unknown;
    dryCleaningCharge: unknown;
    alterationCharge: unknown;
    deliveryCharge: unknown;
    otherCharge: unknown;
    discountAmount: unknown;
    totalPayable: unknown;
    amountPaid: unknown;
    balanceDue: unknown;
    paymentMode?: string | null;
    paymentStatus: string;
    returnDateTime?: Date | string | null;
    lateFeePolicy: string;
    conditionNotes?: string | null;
    damagePolicy: string;
    cancellationPolicy: string;
    acknowledgementName?: string | null;
    createdByAdmin?: {
        name: string;
    } | null;
    lineItems: InvoicePdfLineItem[];
};
export declare function buildInvoicePdf(invoice: InvoicePdfData): Promise<Buffer>;
export {};
//# sourceMappingURL=invoice-pdf.d.ts.map