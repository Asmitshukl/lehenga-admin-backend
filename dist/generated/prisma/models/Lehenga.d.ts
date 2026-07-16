import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model Lehenga
 *
 */
export type LehengaModel = runtime.Types.Result.DefaultSelection<Prisma.$LehengaPayload>;
export type AggregateLehenga = {
    _count: LehengaCountAggregateOutputType | null;
    _avg: LehengaAvgAggregateOutputType | null;
    _sum: LehengaSumAggregateOutputType | null;
    _min: LehengaMinAggregateOutputType | null;
    _max: LehengaMaxAggregateOutputType | null;
};
export type LehengaAvgAggregateOutputType = {
    rentalPricePerDay: runtime.Decimal | null;
    discountPercent: runtime.Decimal | null;
    securityDeposit: runtime.Decimal | null;
    originalPrice: runtime.Decimal | null;
    minimumRentalDays: number | null;
};
export type LehengaSumAggregateOutputType = {
    rentalPricePerDay: runtime.Decimal | null;
    discountPercent: runtime.Decimal | null;
    securityDeposit: runtime.Decimal | null;
    originalPrice: runtime.Decimal | null;
    minimumRentalDays: number | null;
};
export type LehengaMinAggregateOutputType = {
    id: string | null;
    name: string | null;
    slug: string | null;
    sku: string | null;
    shortDescription: string | null;
    description: string | null;
    designer: string | null;
    color: string | null;
    fabric: string | null;
    embroideryDetails: string | null;
    occasion: string | null;
    setIncludes: string | null;
    careInstructions: string | null;
    rentalPricePerDay: runtime.Decimal | null;
    discountPercent: runtime.Decimal | null;
    securityDeposit: runtime.Decimal | null;
    originalPrice: runtime.Decimal | null;
    minimumRentalDays: number | null;
    pickupAvailable: boolean | null;
    status: $Enums.ProductStatus | null;
    isFeatured: boolean | null;
    isLatest: boolean | null;
    isCategoryFeatured: boolean | null;
    categoryId: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type LehengaMaxAggregateOutputType = {
    id: string | null;
    name: string | null;
    slug: string | null;
    sku: string | null;
    shortDescription: string | null;
    description: string | null;
    designer: string | null;
    color: string | null;
    fabric: string | null;
    embroideryDetails: string | null;
    occasion: string | null;
    setIncludes: string | null;
    careInstructions: string | null;
    rentalPricePerDay: runtime.Decimal | null;
    discountPercent: runtime.Decimal | null;
    securityDeposit: runtime.Decimal | null;
    originalPrice: runtime.Decimal | null;
    minimumRentalDays: number | null;
    pickupAvailable: boolean | null;
    status: $Enums.ProductStatus | null;
    isFeatured: boolean | null;
    isLatest: boolean | null;
    isCategoryFeatured: boolean | null;
    categoryId: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type LehengaCountAggregateOutputType = {
    id: number;
    name: number;
    slug: number;
    sku: number;
    shortDescription: number;
    description: number;
    designer: number;
    color: number;
    fabric: number;
    embroideryDetails: number;
    occasion: number;
    setIncludes: number;
    careInstructions: number;
    rentalPricePerDay: number;
    discountPercent: number;
    securityDeposit: number;
    originalPrice: number;
    minimumRentalDays: number;
    pickupAvailable: number;
    status: number;
    isFeatured: number;
    isLatest: number;
    isCategoryFeatured: number;
    categoryId: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type LehengaAvgAggregateInputType = {
    rentalPricePerDay?: true;
    discountPercent?: true;
    securityDeposit?: true;
    originalPrice?: true;
    minimumRentalDays?: true;
};
export type LehengaSumAggregateInputType = {
    rentalPricePerDay?: true;
    discountPercent?: true;
    securityDeposit?: true;
    originalPrice?: true;
    minimumRentalDays?: true;
};
export type LehengaMinAggregateInputType = {
    id?: true;
    name?: true;
    slug?: true;
    sku?: true;
    shortDescription?: true;
    description?: true;
    designer?: true;
    color?: true;
    fabric?: true;
    embroideryDetails?: true;
    occasion?: true;
    setIncludes?: true;
    careInstructions?: true;
    rentalPricePerDay?: true;
    discountPercent?: true;
    securityDeposit?: true;
    originalPrice?: true;
    minimumRentalDays?: true;
    pickupAvailable?: true;
    status?: true;
    isFeatured?: true;
    isLatest?: true;
    isCategoryFeatured?: true;
    categoryId?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type LehengaMaxAggregateInputType = {
    id?: true;
    name?: true;
    slug?: true;
    sku?: true;
    shortDescription?: true;
    description?: true;
    designer?: true;
    color?: true;
    fabric?: true;
    embroideryDetails?: true;
    occasion?: true;
    setIncludes?: true;
    careInstructions?: true;
    rentalPricePerDay?: true;
    discountPercent?: true;
    securityDeposit?: true;
    originalPrice?: true;
    minimumRentalDays?: true;
    pickupAvailable?: true;
    status?: true;
    isFeatured?: true;
    isLatest?: true;
    isCategoryFeatured?: true;
    categoryId?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type LehengaCountAggregateInputType = {
    id?: true;
    name?: true;
    slug?: true;
    sku?: true;
    shortDescription?: true;
    description?: true;
    designer?: true;
    color?: true;
    fabric?: true;
    embroideryDetails?: true;
    occasion?: true;
    setIncludes?: true;
    careInstructions?: true;
    rentalPricePerDay?: true;
    discountPercent?: true;
    securityDeposit?: true;
    originalPrice?: true;
    minimumRentalDays?: true;
    pickupAvailable?: true;
    status?: true;
    isFeatured?: true;
    isLatest?: true;
    isCategoryFeatured?: true;
    categoryId?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type LehengaAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Lehenga to aggregate.
     */
    where?: Prisma.LehengaWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Lehengas to fetch.
     */
    orderBy?: Prisma.LehengaOrderByWithRelationInput | Prisma.LehengaOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.LehengaWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Lehengas from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Lehengas.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Lehengas
    **/
    _count?: true | LehengaCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: LehengaAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: LehengaSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: LehengaMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: LehengaMaxAggregateInputType;
};
export type GetLehengaAggregateType<T extends LehengaAggregateArgs> = {
    [P in keyof T & keyof AggregateLehenga]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateLehenga[P]> : Prisma.GetScalarType<T[P], AggregateLehenga[P]>;
};
export type LehengaGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.LehengaWhereInput;
    orderBy?: Prisma.LehengaOrderByWithAggregationInput | Prisma.LehengaOrderByWithAggregationInput[];
    by: Prisma.LehengaScalarFieldEnum[] | Prisma.LehengaScalarFieldEnum;
    having?: Prisma.LehengaScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: LehengaCountAggregateInputType | true;
    _avg?: LehengaAvgAggregateInputType;
    _sum?: LehengaSumAggregateInputType;
    _min?: LehengaMinAggregateInputType;
    _max?: LehengaMaxAggregateInputType;
};
export type LehengaGroupByOutputType = {
    id: string;
    name: string;
    slug: string;
    sku: string;
    shortDescription: string | null;
    description: string | null;
    designer: string | null;
    color: string | null;
    fabric: string | null;
    embroideryDetails: string | null;
    occasion: string | null;
    setIncludes: string | null;
    careInstructions: string | null;
    rentalPricePerDay: runtime.Decimal;
    discountPercent: runtime.Decimal;
    securityDeposit: runtime.Decimal | null;
    originalPrice: runtime.Decimal | null;
    minimumRentalDays: number;
    pickupAvailable: boolean;
    status: $Enums.ProductStatus;
    isFeatured: boolean;
    isLatest: boolean;
    isCategoryFeatured: boolean;
    categoryId: string | null;
    createdAt: Date;
    updatedAt: Date;
    _count: LehengaCountAggregateOutputType | null;
    _avg: LehengaAvgAggregateOutputType | null;
    _sum: LehengaSumAggregateOutputType | null;
    _min: LehengaMinAggregateOutputType | null;
    _max: LehengaMaxAggregateOutputType | null;
};
export type GetLehengaGroupByPayload<T extends LehengaGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<LehengaGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof LehengaGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], LehengaGroupByOutputType[P]> : Prisma.GetScalarType<T[P], LehengaGroupByOutputType[P]>;
}>>;
export type LehengaWhereInput = {
    AND?: Prisma.LehengaWhereInput | Prisma.LehengaWhereInput[];
    OR?: Prisma.LehengaWhereInput[];
    NOT?: Prisma.LehengaWhereInput | Prisma.LehengaWhereInput[];
    id?: Prisma.StringFilter<"Lehenga"> | string;
    name?: Prisma.StringFilter<"Lehenga"> | string;
    slug?: Prisma.StringFilter<"Lehenga"> | string;
    sku?: Prisma.StringFilter<"Lehenga"> | string;
    shortDescription?: Prisma.StringNullableFilter<"Lehenga"> | string | null;
    description?: Prisma.StringNullableFilter<"Lehenga"> | string | null;
    designer?: Prisma.StringNullableFilter<"Lehenga"> | string | null;
    color?: Prisma.StringNullableFilter<"Lehenga"> | string | null;
    fabric?: Prisma.StringNullableFilter<"Lehenga"> | string | null;
    embroideryDetails?: Prisma.StringNullableFilter<"Lehenga"> | string | null;
    occasion?: Prisma.StringNullableFilter<"Lehenga"> | string | null;
    setIncludes?: Prisma.StringNullableFilter<"Lehenga"> | string | null;
    careInstructions?: Prisma.StringNullableFilter<"Lehenga"> | string | null;
    rentalPricePerDay?: Prisma.DecimalFilter<"Lehenga"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    discountPercent?: Prisma.DecimalFilter<"Lehenga"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    securityDeposit?: Prisma.DecimalNullableFilter<"Lehenga"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    originalPrice?: Prisma.DecimalNullableFilter<"Lehenga"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    minimumRentalDays?: Prisma.IntFilter<"Lehenga"> | number;
    pickupAvailable?: Prisma.BoolFilter<"Lehenga"> | boolean;
    status?: Prisma.EnumProductStatusFilter<"Lehenga"> | $Enums.ProductStatus;
    isFeatured?: Prisma.BoolFilter<"Lehenga"> | boolean;
    isLatest?: Prisma.BoolFilter<"Lehenga"> | boolean;
    isCategoryFeatured?: Prisma.BoolFilter<"Lehenga"> | boolean;
    categoryId?: Prisma.StringNullableFilter<"Lehenga"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"Lehenga"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Lehenga"> | Date | string;
    category?: Prisma.XOR<Prisma.CategoryNullableScalarRelationFilter, Prisma.CategoryWhereInput> | null;
    sizes?: Prisma.LehengaSizeListRelationFilter;
    images?: Prisma.LehengaImageListRelationFilter;
    orderItems?: Prisma.RentalOrderItemListRelationFilter;
    reviews?: Prisma.ProductReviewListRelationFilter;
};
export type LehengaOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    slug?: Prisma.SortOrder;
    sku?: Prisma.SortOrder;
    shortDescription?: Prisma.SortOrderInput | Prisma.SortOrder;
    description?: Prisma.SortOrderInput | Prisma.SortOrder;
    designer?: Prisma.SortOrderInput | Prisma.SortOrder;
    color?: Prisma.SortOrderInput | Prisma.SortOrder;
    fabric?: Prisma.SortOrderInput | Prisma.SortOrder;
    embroideryDetails?: Prisma.SortOrderInput | Prisma.SortOrder;
    occasion?: Prisma.SortOrderInput | Prisma.SortOrder;
    setIncludes?: Prisma.SortOrderInput | Prisma.SortOrder;
    careInstructions?: Prisma.SortOrderInput | Prisma.SortOrder;
    rentalPricePerDay?: Prisma.SortOrder;
    discountPercent?: Prisma.SortOrder;
    securityDeposit?: Prisma.SortOrderInput | Prisma.SortOrder;
    originalPrice?: Prisma.SortOrderInput | Prisma.SortOrder;
    minimumRentalDays?: Prisma.SortOrder;
    pickupAvailable?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    isFeatured?: Prisma.SortOrder;
    isLatest?: Prisma.SortOrder;
    isCategoryFeatured?: Prisma.SortOrder;
    categoryId?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    category?: Prisma.CategoryOrderByWithRelationInput;
    sizes?: Prisma.LehengaSizeOrderByRelationAggregateInput;
    images?: Prisma.LehengaImageOrderByRelationAggregateInput;
    orderItems?: Prisma.RentalOrderItemOrderByRelationAggregateInput;
    reviews?: Prisma.ProductReviewOrderByRelationAggregateInput;
};
export type LehengaWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    slug?: string;
    sku?: string;
    AND?: Prisma.LehengaWhereInput | Prisma.LehengaWhereInput[];
    OR?: Prisma.LehengaWhereInput[];
    NOT?: Prisma.LehengaWhereInput | Prisma.LehengaWhereInput[];
    name?: Prisma.StringFilter<"Lehenga"> | string;
    shortDescription?: Prisma.StringNullableFilter<"Lehenga"> | string | null;
    description?: Prisma.StringNullableFilter<"Lehenga"> | string | null;
    designer?: Prisma.StringNullableFilter<"Lehenga"> | string | null;
    color?: Prisma.StringNullableFilter<"Lehenga"> | string | null;
    fabric?: Prisma.StringNullableFilter<"Lehenga"> | string | null;
    embroideryDetails?: Prisma.StringNullableFilter<"Lehenga"> | string | null;
    occasion?: Prisma.StringNullableFilter<"Lehenga"> | string | null;
    setIncludes?: Prisma.StringNullableFilter<"Lehenga"> | string | null;
    careInstructions?: Prisma.StringNullableFilter<"Lehenga"> | string | null;
    rentalPricePerDay?: Prisma.DecimalFilter<"Lehenga"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    discountPercent?: Prisma.DecimalFilter<"Lehenga"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    securityDeposit?: Prisma.DecimalNullableFilter<"Lehenga"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    originalPrice?: Prisma.DecimalNullableFilter<"Lehenga"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    minimumRentalDays?: Prisma.IntFilter<"Lehenga"> | number;
    pickupAvailable?: Prisma.BoolFilter<"Lehenga"> | boolean;
    status?: Prisma.EnumProductStatusFilter<"Lehenga"> | $Enums.ProductStatus;
    isFeatured?: Prisma.BoolFilter<"Lehenga"> | boolean;
    isLatest?: Prisma.BoolFilter<"Lehenga"> | boolean;
    isCategoryFeatured?: Prisma.BoolFilter<"Lehenga"> | boolean;
    categoryId?: Prisma.StringNullableFilter<"Lehenga"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"Lehenga"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Lehenga"> | Date | string;
    category?: Prisma.XOR<Prisma.CategoryNullableScalarRelationFilter, Prisma.CategoryWhereInput> | null;
    sizes?: Prisma.LehengaSizeListRelationFilter;
    images?: Prisma.LehengaImageListRelationFilter;
    orderItems?: Prisma.RentalOrderItemListRelationFilter;
    reviews?: Prisma.ProductReviewListRelationFilter;
}, "id" | "slug" | "sku">;
export type LehengaOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    slug?: Prisma.SortOrder;
    sku?: Prisma.SortOrder;
    shortDescription?: Prisma.SortOrderInput | Prisma.SortOrder;
    description?: Prisma.SortOrderInput | Prisma.SortOrder;
    designer?: Prisma.SortOrderInput | Prisma.SortOrder;
    color?: Prisma.SortOrderInput | Prisma.SortOrder;
    fabric?: Prisma.SortOrderInput | Prisma.SortOrder;
    embroideryDetails?: Prisma.SortOrderInput | Prisma.SortOrder;
    occasion?: Prisma.SortOrderInput | Prisma.SortOrder;
    setIncludes?: Prisma.SortOrderInput | Prisma.SortOrder;
    careInstructions?: Prisma.SortOrderInput | Prisma.SortOrder;
    rentalPricePerDay?: Prisma.SortOrder;
    discountPercent?: Prisma.SortOrder;
    securityDeposit?: Prisma.SortOrderInput | Prisma.SortOrder;
    originalPrice?: Prisma.SortOrderInput | Prisma.SortOrder;
    minimumRentalDays?: Prisma.SortOrder;
    pickupAvailable?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    isFeatured?: Prisma.SortOrder;
    isLatest?: Prisma.SortOrder;
    isCategoryFeatured?: Prisma.SortOrder;
    categoryId?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.LehengaCountOrderByAggregateInput;
    _avg?: Prisma.LehengaAvgOrderByAggregateInput;
    _max?: Prisma.LehengaMaxOrderByAggregateInput;
    _min?: Prisma.LehengaMinOrderByAggregateInput;
    _sum?: Prisma.LehengaSumOrderByAggregateInput;
};
export type LehengaScalarWhereWithAggregatesInput = {
    AND?: Prisma.LehengaScalarWhereWithAggregatesInput | Prisma.LehengaScalarWhereWithAggregatesInput[];
    OR?: Prisma.LehengaScalarWhereWithAggregatesInput[];
    NOT?: Prisma.LehengaScalarWhereWithAggregatesInput | Prisma.LehengaScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"Lehenga"> | string;
    name?: Prisma.StringWithAggregatesFilter<"Lehenga"> | string;
    slug?: Prisma.StringWithAggregatesFilter<"Lehenga"> | string;
    sku?: Prisma.StringWithAggregatesFilter<"Lehenga"> | string;
    shortDescription?: Prisma.StringNullableWithAggregatesFilter<"Lehenga"> | string | null;
    description?: Prisma.StringNullableWithAggregatesFilter<"Lehenga"> | string | null;
    designer?: Prisma.StringNullableWithAggregatesFilter<"Lehenga"> | string | null;
    color?: Prisma.StringNullableWithAggregatesFilter<"Lehenga"> | string | null;
    fabric?: Prisma.StringNullableWithAggregatesFilter<"Lehenga"> | string | null;
    embroideryDetails?: Prisma.StringNullableWithAggregatesFilter<"Lehenga"> | string | null;
    occasion?: Prisma.StringNullableWithAggregatesFilter<"Lehenga"> | string | null;
    setIncludes?: Prisma.StringNullableWithAggregatesFilter<"Lehenga"> | string | null;
    careInstructions?: Prisma.StringNullableWithAggregatesFilter<"Lehenga"> | string | null;
    rentalPricePerDay?: Prisma.DecimalWithAggregatesFilter<"Lehenga"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    discountPercent?: Prisma.DecimalWithAggregatesFilter<"Lehenga"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    securityDeposit?: Prisma.DecimalNullableWithAggregatesFilter<"Lehenga"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    originalPrice?: Prisma.DecimalNullableWithAggregatesFilter<"Lehenga"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    minimumRentalDays?: Prisma.IntWithAggregatesFilter<"Lehenga"> | number;
    pickupAvailable?: Prisma.BoolWithAggregatesFilter<"Lehenga"> | boolean;
    status?: Prisma.EnumProductStatusWithAggregatesFilter<"Lehenga"> | $Enums.ProductStatus;
    isFeatured?: Prisma.BoolWithAggregatesFilter<"Lehenga"> | boolean;
    isLatest?: Prisma.BoolWithAggregatesFilter<"Lehenga"> | boolean;
    isCategoryFeatured?: Prisma.BoolWithAggregatesFilter<"Lehenga"> | boolean;
    categoryId?: Prisma.StringNullableWithAggregatesFilter<"Lehenga"> | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Lehenga"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"Lehenga"> | Date | string;
};
export type LehengaCreateInput = {
    id?: string;
    name: string;
    slug: string;
    sku: string;
    shortDescription?: string | null;
    description?: string | null;
    designer?: string | null;
    color?: string | null;
    fabric?: string | null;
    embroideryDetails?: string | null;
    occasion?: string | null;
    setIncludes?: string | null;
    careInstructions?: string | null;
    rentalPricePerDay: runtime.Decimal | runtime.DecimalJsLike | number | string;
    discountPercent?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    securityDeposit?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    originalPrice?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    minimumRentalDays?: number;
    pickupAvailable?: boolean;
    status?: $Enums.ProductStatus;
    isFeatured?: boolean;
    isLatest?: boolean;
    isCategoryFeatured?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    category?: Prisma.CategoryCreateNestedOneWithoutLehengasInput;
    sizes?: Prisma.LehengaSizeCreateNestedManyWithoutLehengaInput;
    images?: Prisma.LehengaImageCreateNestedManyWithoutLehengaInput;
    orderItems?: Prisma.RentalOrderItemCreateNestedManyWithoutLehengaInput;
    reviews?: Prisma.ProductReviewCreateNestedManyWithoutLehengaInput;
};
export type LehengaUncheckedCreateInput = {
    id?: string;
    name: string;
    slug: string;
    sku: string;
    shortDescription?: string | null;
    description?: string | null;
    designer?: string | null;
    color?: string | null;
    fabric?: string | null;
    embroideryDetails?: string | null;
    occasion?: string | null;
    setIncludes?: string | null;
    careInstructions?: string | null;
    rentalPricePerDay: runtime.Decimal | runtime.DecimalJsLike | number | string;
    discountPercent?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    securityDeposit?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    originalPrice?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    minimumRentalDays?: number;
    pickupAvailable?: boolean;
    status?: $Enums.ProductStatus;
    isFeatured?: boolean;
    isLatest?: boolean;
    isCategoryFeatured?: boolean;
    categoryId?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    sizes?: Prisma.LehengaSizeUncheckedCreateNestedManyWithoutLehengaInput;
    images?: Prisma.LehengaImageUncheckedCreateNestedManyWithoutLehengaInput;
    orderItems?: Prisma.RentalOrderItemUncheckedCreateNestedManyWithoutLehengaInput;
    reviews?: Prisma.ProductReviewUncheckedCreateNestedManyWithoutLehengaInput;
};
export type LehengaUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    sku?: Prisma.StringFieldUpdateOperationsInput | string;
    shortDescription?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    designer?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    color?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fabric?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    embroideryDetails?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    occasion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    setIncludes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    careInstructions?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    rentalPricePerDay?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    discountPercent?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    securityDeposit?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    originalPrice?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    minimumRentalDays?: Prisma.IntFieldUpdateOperationsInput | number;
    pickupAvailable?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    status?: Prisma.EnumProductStatusFieldUpdateOperationsInput | $Enums.ProductStatus;
    isFeatured?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    isLatest?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    isCategoryFeatured?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    category?: Prisma.CategoryUpdateOneWithoutLehengasNestedInput;
    sizes?: Prisma.LehengaSizeUpdateManyWithoutLehengaNestedInput;
    images?: Prisma.LehengaImageUpdateManyWithoutLehengaNestedInput;
    orderItems?: Prisma.RentalOrderItemUpdateManyWithoutLehengaNestedInput;
    reviews?: Prisma.ProductReviewUpdateManyWithoutLehengaNestedInput;
};
export type LehengaUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    sku?: Prisma.StringFieldUpdateOperationsInput | string;
    shortDescription?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    designer?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    color?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fabric?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    embroideryDetails?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    occasion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    setIncludes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    careInstructions?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    rentalPricePerDay?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    discountPercent?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    securityDeposit?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    originalPrice?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    minimumRentalDays?: Prisma.IntFieldUpdateOperationsInput | number;
    pickupAvailable?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    status?: Prisma.EnumProductStatusFieldUpdateOperationsInput | $Enums.ProductStatus;
    isFeatured?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    isLatest?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    isCategoryFeatured?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    categoryId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    sizes?: Prisma.LehengaSizeUncheckedUpdateManyWithoutLehengaNestedInput;
    images?: Prisma.LehengaImageUncheckedUpdateManyWithoutLehengaNestedInput;
    orderItems?: Prisma.RentalOrderItemUncheckedUpdateManyWithoutLehengaNestedInput;
    reviews?: Prisma.ProductReviewUncheckedUpdateManyWithoutLehengaNestedInput;
};
export type LehengaCreateManyInput = {
    id?: string;
    name: string;
    slug: string;
    sku: string;
    shortDescription?: string | null;
    description?: string | null;
    designer?: string | null;
    color?: string | null;
    fabric?: string | null;
    embroideryDetails?: string | null;
    occasion?: string | null;
    setIncludes?: string | null;
    careInstructions?: string | null;
    rentalPricePerDay: runtime.Decimal | runtime.DecimalJsLike | number | string;
    discountPercent?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    securityDeposit?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    originalPrice?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    minimumRentalDays?: number;
    pickupAvailable?: boolean;
    status?: $Enums.ProductStatus;
    isFeatured?: boolean;
    isLatest?: boolean;
    isCategoryFeatured?: boolean;
    categoryId?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type LehengaUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    sku?: Prisma.StringFieldUpdateOperationsInput | string;
    shortDescription?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    designer?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    color?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fabric?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    embroideryDetails?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    occasion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    setIncludes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    careInstructions?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    rentalPricePerDay?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    discountPercent?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    securityDeposit?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    originalPrice?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    minimumRentalDays?: Prisma.IntFieldUpdateOperationsInput | number;
    pickupAvailable?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    status?: Prisma.EnumProductStatusFieldUpdateOperationsInput | $Enums.ProductStatus;
    isFeatured?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    isLatest?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    isCategoryFeatured?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type LehengaUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    sku?: Prisma.StringFieldUpdateOperationsInput | string;
    shortDescription?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    designer?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    color?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fabric?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    embroideryDetails?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    occasion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    setIncludes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    careInstructions?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    rentalPricePerDay?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    discountPercent?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    securityDeposit?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    originalPrice?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    minimumRentalDays?: Prisma.IntFieldUpdateOperationsInput | number;
    pickupAvailable?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    status?: Prisma.EnumProductStatusFieldUpdateOperationsInput | $Enums.ProductStatus;
    isFeatured?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    isLatest?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    isCategoryFeatured?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    categoryId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type LehengaListRelationFilter = {
    every?: Prisma.LehengaWhereInput;
    some?: Prisma.LehengaWhereInput;
    none?: Prisma.LehengaWhereInput;
};
export type LehengaOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type LehengaCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    slug?: Prisma.SortOrder;
    sku?: Prisma.SortOrder;
    shortDescription?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    designer?: Prisma.SortOrder;
    color?: Prisma.SortOrder;
    fabric?: Prisma.SortOrder;
    embroideryDetails?: Prisma.SortOrder;
    occasion?: Prisma.SortOrder;
    setIncludes?: Prisma.SortOrder;
    careInstructions?: Prisma.SortOrder;
    rentalPricePerDay?: Prisma.SortOrder;
    discountPercent?: Prisma.SortOrder;
    securityDeposit?: Prisma.SortOrder;
    originalPrice?: Prisma.SortOrder;
    minimumRentalDays?: Prisma.SortOrder;
    pickupAvailable?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    isFeatured?: Prisma.SortOrder;
    isLatest?: Prisma.SortOrder;
    isCategoryFeatured?: Prisma.SortOrder;
    categoryId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type LehengaAvgOrderByAggregateInput = {
    rentalPricePerDay?: Prisma.SortOrder;
    discountPercent?: Prisma.SortOrder;
    securityDeposit?: Prisma.SortOrder;
    originalPrice?: Prisma.SortOrder;
    minimumRentalDays?: Prisma.SortOrder;
};
export type LehengaMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    slug?: Prisma.SortOrder;
    sku?: Prisma.SortOrder;
    shortDescription?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    designer?: Prisma.SortOrder;
    color?: Prisma.SortOrder;
    fabric?: Prisma.SortOrder;
    embroideryDetails?: Prisma.SortOrder;
    occasion?: Prisma.SortOrder;
    setIncludes?: Prisma.SortOrder;
    careInstructions?: Prisma.SortOrder;
    rentalPricePerDay?: Prisma.SortOrder;
    discountPercent?: Prisma.SortOrder;
    securityDeposit?: Prisma.SortOrder;
    originalPrice?: Prisma.SortOrder;
    minimumRentalDays?: Prisma.SortOrder;
    pickupAvailable?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    isFeatured?: Prisma.SortOrder;
    isLatest?: Prisma.SortOrder;
    isCategoryFeatured?: Prisma.SortOrder;
    categoryId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type LehengaMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    slug?: Prisma.SortOrder;
    sku?: Prisma.SortOrder;
    shortDescription?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    designer?: Prisma.SortOrder;
    color?: Prisma.SortOrder;
    fabric?: Prisma.SortOrder;
    embroideryDetails?: Prisma.SortOrder;
    occasion?: Prisma.SortOrder;
    setIncludes?: Prisma.SortOrder;
    careInstructions?: Prisma.SortOrder;
    rentalPricePerDay?: Prisma.SortOrder;
    discountPercent?: Prisma.SortOrder;
    securityDeposit?: Prisma.SortOrder;
    originalPrice?: Prisma.SortOrder;
    minimumRentalDays?: Prisma.SortOrder;
    pickupAvailable?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    isFeatured?: Prisma.SortOrder;
    isLatest?: Prisma.SortOrder;
    isCategoryFeatured?: Prisma.SortOrder;
    categoryId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type LehengaSumOrderByAggregateInput = {
    rentalPricePerDay?: Prisma.SortOrder;
    discountPercent?: Prisma.SortOrder;
    securityDeposit?: Prisma.SortOrder;
    originalPrice?: Prisma.SortOrder;
    minimumRentalDays?: Prisma.SortOrder;
};
export type LehengaScalarRelationFilter = {
    is?: Prisma.LehengaWhereInput;
    isNot?: Prisma.LehengaWhereInput;
};
export type LehengaNullableScalarRelationFilter = {
    is?: Prisma.LehengaWhereInput | null;
    isNot?: Prisma.LehengaWhereInput | null;
};
export type LehengaCreateNestedManyWithoutCategoryInput = {
    create?: Prisma.XOR<Prisma.LehengaCreateWithoutCategoryInput, Prisma.LehengaUncheckedCreateWithoutCategoryInput> | Prisma.LehengaCreateWithoutCategoryInput[] | Prisma.LehengaUncheckedCreateWithoutCategoryInput[];
    connectOrCreate?: Prisma.LehengaCreateOrConnectWithoutCategoryInput | Prisma.LehengaCreateOrConnectWithoutCategoryInput[];
    createMany?: Prisma.LehengaCreateManyCategoryInputEnvelope;
    connect?: Prisma.LehengaWhereUniqueInput | Prisma.LehengaWhereUniqueInput[];
};
export type LehengaUncheckedCreateNestedManyWithoutCategoryInput = {
    create?: Prisma.XOR<Prisma.LehengaCreateWithoutCategoryInput, Prisma.LehengaUncheckedCreateWithoutCategoryInput> | Prisma.LehengaCreateWithoutCategoryInput[] | Prisma.LehengaUncheckedCreateWithoutCategoryInput[];
    connectOrCreate?: Prisma.LehengaCreateOrConnectWithoutCategoryInput | Prisma.LehengaCreateOrConnectWithoutCategoryInput[];
    createMany?: Prisma.LehengaCreateManyCategoryInputEnvelope;
    connect?: Prisma.LehengaWhereUniqueInput | Prisma.LehengaWhereUniqueInput[];
};
export type LehengaUpdateManyWithoutCategoryNestedInput = {
    create?: Prisma.XOR<Prisma.LehengaCreateWithoutCategoryInput, Prisma.LehengaUncheckedCreateWithoutCategoryInput> | Prisma.LehengaCreateWithoutCategoryInput[] | Prisma.LehengaUncheckedCreateWithoutCategoryInput[];
    connectOrCreate?: Prisma.LehengaCreateOrConnectWithoutCategoryInput | Prisma.LehengaCreateOrConnectWithoutCategoryInput[];
    upsert?: Prisma.LehengaUpsertWithWhereUniqueWithoutCategoryInput | Prisma.LehengaUpsertWithWhereUniqueWithoutCategoryInput[];
    createMany?: Prisma.LehengaCreateManyCategoryInputEnvelope;
    set?: Prisma.LehengaWhereUniqueInput | Prisma.LehengaWhereUniqueInput[];
    disconnect?: Prisma.LehengaWhereUniqueInput | Prisma.LehengaWhereUniqueInput[];
    delete?: Prisma.LehengaWhereUniqueInput | Prisma.LehengaWhereUniqueInput[];
    connect?: Prisma.LehengaWhereUniqueInput | Prisma.LehengaWhereUniqueInput[];
    update?: Prisma.LehengaUpdateWithWhereUniqueWithoutCategoryInput | Prisma.LehengaUpdateWithWhereUniqueWithoutCategoryInput[];
    updateMany?: Prisma.LehengaUpdateManyWithWhereWithoutCategoryInput | Prisma.LehengaUpdateManyWithWhereWithoutCategoryInput[];
    deleteMany?: Prisma.LehengaScalarWhereInput | Prisma.LehengaScalarWhereInput[];
};
export type LehengaUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?: Prisma.XOR<Prisma.LehengaCreateWithoutCategoryInput, Prisma.LehengaUncheckedCreateWithoutCategoryInput> | Prisma.LehengaCreateWithoutCategoryInput[] | Prisma.LehengaUncheckedCreateWithoutCategoryInput[];
    connectOrCreate?: Prisma.LehengaCreateOrConnectWithoutCategoryInput | Prisma.LehengaCreateOrConnectWithoutCategoryInput[];
    upsert?: Prisma.LehengaUpsertWithWhereUniqueWithoutCategoryInput | Prisma.LehengaUpsertWithWhereUniqueWithoutCategoryInput[];
    createMany?: Prisma.LehengaCreateManyCategoryInputEnvelope;
    set?: Prisma.LehengaWhereUniqueInput | Prisma.LehengaWhereUniqueInput[];
    disconnect?: Prisma.LehengaWhereUniqueInput | Prisma.LehengaWhereUniqueInput[];
    delete?: Prisma.LehengaWhereUniqueInput | Prisma.LehengaWhereUniqueInput[];
    connect?: Prisma.LehengaWhereUniqueInput | Prisma.LehengaWhereUniqueInput[];
    update?: Prisma.LehengaUpdateWithWhereUniqueWithoutCategoryInput | Prisma.LehengaUpdateWithWhereUniqueWithoutCategoryInput[];
    updateMany?: Prisma.LehengaUpdateManyWithWhereWithoutCategoryInput | Prisma.LehengaUpdateManyWithWhereWithoutCategoryInput[];
    deleteMany?: Prisma.LehengaScalarWhereInput | Prisma.LehengaScalarWhereInput[];
};
export type DecimalFieldUpdateOperationsInput = {
    set?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    increment?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    decrement?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    multiply?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    divide?: runtime.Decimal | runtime.DecimalJsLike | number | string;
};
export type NullableDecimalFieldUpdateOperationsInput = {
    set?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    increment?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    decrement?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    multiply?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    divide?: runtime.Decimal | runtime.DecimalJsLike | number | string;
};
export type IntFieldUpdateOperationsInput = {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
};
export type EnumProductStatusFieldUpdateOperationsInput = {
    set?: $Enums.ProductStatus;
};
export type LehengaCreateNestedOneWithoutSizesInput = {
    create?: Prisma.XOR<Prisma.LehengaCreateWithoutSizesInput, Prisma.LehengaUncheckedCreateWithoutSizesInput>;
    connectOrCreate?: Prisma.LehengaCreateOrConnectWithoutSizesInput;
    connect?: Prisma.LehengaWhereUniqueInput;
};
export type LehengaUpdateOneRequiredWithoutSizesNestedInput = {
    create?: Prisma.XOR<Prisma.LehengaCreateWithoutSizesInput, Prisma.LehengaUncheckedCreateWithoutSizesInput>;
    connectOrCreate?: Prisma.LehengaCreateOrConnectWithoutSizesInput;
    upsert?: Prisma.LehengaUpsertWithoutSizesInput;
    connect?: Prisma.LehengaWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.LehengaUpdateToOneWithWhereWithoutSizesInput, Prisma.LehengaUpdateWithoutSizesInput>, Prisma.LehengaUncheckedUpdateWithoutSizesInput>;
};
export type LehengaCreateNestedOneWithoutImagesInput = {
    create?: Prisma.XOR<Prisma.LehengaCreateWithoutImagesInput, Prisma.LehengaUncheckedCreateWithoutImagesInput>;
    connectOrCreate?: Prisma.LehengaCreateOrConnectWithoutImagesInput;
    connect?: Prisma.LehengaWhereUniqueInput;
};
export type LehengaUpdateOneRequiredWithoutImagesNestedInput = {
    create?: Prisma.XOR<Prisma.LehengaCreateWithoutImagesInput, Prisma.LehengaUncheckedCreateWithoutImagesInput>;
    connectOrCreate?: Prisma.LehengaCreateOrConnectWithoutImagesInput;
    upsert?: Prisma.LehengaUpsertWithoutImagesInput;
    connect?: Prisma.LehengaWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.LehengaUpdateToOneWithWhereWithoutImagesInput, Prisma.LehengaUpdateWithoutImagesInput>, Prisma.LehengaUncheckedUpdateWithoutImagesInput>;
};
export type LehengaCreateNestedOneWithoutOrderItemsInput = {
    create?: Prisma.XOR<Prisma.LehengaCreateWithoutOrderItemsInput, Prisma.LehengaUncheckedCreateWithoutOrderItemsInput>;
    connectOrCreate?: Prisma.LehengaCreateOrConnectWithoutOrderItemsInput;
    connect?: Prisma.LehengaWhereUniqueInput;
};
export type LehengaUpdateOneWithoutOrderItemsNestedInput = {
    create?: Prisma.XOR<Prisma.LehengaCreateWithoutOrderItemsInput, Prisma.LehengaUncheckedCreateWithoutOrderItemsInput>;
    connectOrCreate?: Prisma.LehengaCreateOrConnectWithoutOrderItemsInput;
    upsert?: Prisma.LehengaUpsertWithoutOrderItemsInput;
    disconnect?: Prisma.LehengaWhereInput | boolean;
    delete?: Prisma.LehengaWhereInput | boolean;
    connect?: Prisma.LehengaWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.LehengaUpdateToOneWithWhereWithoutOrderItemsInput, Prisma.LehengaUpdateWithoutOrderItemsInput>, Prisma.LehengaUncheckedUpdateWithoutOrderItemsInput>;
};
export type LehengaCreateNestedOneWithoutReviewsInput = {
    create?: Prisma.XOR<Prisma.LehengaCreateWithoutReviewsInput, Prisma.LehengaUncheckedCreateWithoutReviewsInput>;
    connectOrCreate?: Prisma.LehengaCreateOrConnectWithoutReviewsInput;
    connect?: Prisma.LehengaWhereUniqueInput;
};
export type LehengaUpdateOneWithoutReviewsNestedInput = {
    create?: Prisma.XOR<Prisma.LehengaCreateWithoutReviewsInput, Prisma.LehengaUncheckedCreateWithoutReviewsInput>;
    connectOrCreate?: Prisma.LehengaCreateOrConnectWithoutReviewsInput;
    upsert?: Prisma.LehengaUpsertWithoutReviewsInput;
    disconnect?: Prisma.LehengaWhereInput | boolean;
    delete?: Prisma.LehengaWhereInput | boolean;
    connect?: Prisma.LehengaWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.LehengaUpdateToOneWithWhereWithoutReviewsInput, Prisma.LehengaUpdateWithoutReviewsInput>, Prisma.LehengaUncheckedUpdateWithoutReviewsInput>;
};
export type LehengaCreateWithoutCategoryInput = {
    id?: string;
    name: string;
    slug: string;
    sku: string;
    shortDescription?: string | null;
    description?: string | null;
    designer?: string | null;
    color?: string | null;
    fabric?: string | null;
    embroideryDetails?: string | null;
    occasion?: string | null;
    setIncludes?: string | null;
    careInstructions?: string | null;
    rentalPricePerDay: runtime.Decimal | runtime.DecimalJsLike | number | string;
    discountPercent?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    securityDeposit?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    originalPrice?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    minimumRentalDays?: number;
    pickupAvailable?: boolean;
    status?: $Enums.ProductStatus;
    isFeatured?: boolean;
    isLatest?: boolean;
    isCategoryFeatured?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    sizes?: Prisma.LehengaSizeCreateNestedManyWithoutLehengaInput;
    images?: Prisma.LehengaImageCreateNestedManyWithoutLehengaInput;
    orderItems?: Prisma.RentalOrderItemCreateNestedManyWithoutLehengaInput;
    reviews?: Prisma.ProductReviewCreateNestedManyWithoutLehengaInput;
};
export type LehengaUncheckedCreateWithoutCategoryInput = {
    id?: string;
    name: string;
    slug: string;
    sku: string;
    shortDescription?: string | null;
    description?: string | null;
    designer?: string | null;
    color?: string | null;
    fabric?: string | null;
    embroideryDetails?: string | null;
    occasion?: string | null;
    setIncludes?: string | null;
    careInstructions?: string | null;
    rentalPricePerDay: runtime.Decimal | runtime.DecimalJsLike | number | string;
    discountPercent?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    securityDeposit?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    originalPrice?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    minimumRentalDays?: number;
    pickupAvailable?: boolean;
    status?: $Enums.ProductStatus;
    isFeatured?: boolean;
    isLatest?: boolean;
    isCategoryFeatured?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    sizes?: Prisma.LehengaSizeUncheckedCreateNestedManyWithoutLehengaInput;
    images?: Prisma.LehengaImageUncheckedCreateNestedManyWithoutLehengaInput;
    orderItems?: Prisma.RentalOrderItemUncheckedCreateNestedManyWithoutLehengaInput;
    reviews?: Prisma.ProductReviewUncheckedCreateNestedManyWithoutLehengaInput;
};
export type LehengaCreateOrConnectWithoutCategoryInput = {
    where: Prisma.LehengaWhereUniqueInput;
    create: Prisma.XOR<Prisma.LehengaCreateWithoutCategoryInput, Prisma.LehengaUncheckedCreateWithoutCategoryInput>;
};
export type LehengaCreateManyCategoryInputEnvelope = {
    data: Prisma.LehengaCreateManyCategoryInput | Prisma.LehengaCreateManyCategoryInput[];
    skipDuplicates?: boolean;
};
export type LehengaUpsertWithWhereUniqueWithoutCategoryInput = {
    where: Prisma.LehengaWhereUniqueInput;
    update: Prisma.XOR<Prisma.LehengaUpdateWithoutCategoryInput, Prisma.LehengaUncheckedUpdateWithoutCategoryInput>;
    create: Prisma.XOR<Prisma.LehengaCreateWithoutCategoryInput, Prisma.LehengaUncheckedCreateWithoutCategoryInput>;
};
export type LehengaUpdateWithWhereUniqueWithoutCategoryInput = {
    where: Prisma.LehengaWhereUniqueInput;
    data: Prisma.XOR<Prisma.LehengaUpdateWithoutCategoryInput, Prisma.LehengaUncheckedUpdateWithoutCategoryInput>;
};
export type LehengaUpdateManyWithWhereWithoutCategoryInput = {
    where: Prisma.LehengaScalarWhereInput;
    data: Prisma.XOR<Prisma.LehengaUpdateManyMutationInput, Prisma.LehengaUncheckedUpdateManyWithoutCategoryInput>;
};
export type LehengaScalarWhereInput = {
    AND?: Prisma.LehengaScalarWhereInput | Prisma.LehengaScalarWhereInput[];
    OR?: Prisma.LehengaScalarWhereInput[];
    NOT?: Prisma.LehengaScalarWhereInput | Prisma.LehengaScalarWhereInput[];
    id?: Prisma.StringFilter<"Lehenga"> | string;
    name?: Prisma.StringFilter<"Lehenga"> | string;
    slug?: Prisma.StringFilter<"Lehenga"> | string;
    sku?: Prisma.StringFilter<"Lehenga"> | string;
    shortDescription?: Prisma.StringNullableFilter<"Lehenga"> | string | null;
    description?: Prisma.StringNullableFilter<"Lehenga"> | string | null;
    designer?: Prisma.StringNullableFilter<"Lehenga"> | string | null;
    color?: Prisma.StringNullableFilter<"Lehenga"> | string | null;
    fabric?: Prisma.StringNullableFilter<"Lehenga"> | string | null;
    embroideryDetails?: Prisma.StringNullableFilter<"Lehenga"> | string | null;
    occasion?: Prisma.StringNullableFilter<"Lehenga"> | string | null;
    setIncludes?: Prisma.StringNullableFilter<"Lehenga"> | string | null;
    careInstructions?: Prisma.StringNullableFilter<"Lehenga"> | string | null;
    rentalPricePerDay?: Prisma.DecimalFilter<"Lehenga"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    discountPercent?: Prisma.DecimalFilter<"Lehenga"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    securityDeposit?: Prisma.DecimalNullableFilter<"Lehenga"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    originalPrice?: Prisma.DecimalNullableFilter<"Lehenga"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    minimumRentalDays?: Prisma.IntFilter<"Lehenga"> | number;
    pickupAvailable?: Prisma.BoolFilter<"Lehenga"> | boolean;
    status?: Prisma.EnumProductStatusFilter<"Lehenga"> | $Enums.ProductStatus;
    isFeatured?: Prisma.BoolFilter<"Lehenga"> | boolean;
    isLatest?: Prisma.BoolFilter<"Lehenga"> | boolean;
    isCategoryFeatured?: Prisma.BoolFilter<"Lehenga"> | boolean;
    categoryId?: Prisma.StringNullableFilter<"Lehenga"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"Lehenga"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Lehenga"> | Date | string;
};
export type LehengaCreateWithoutSizesInput = {
    id?: string;
    name: string;
    slug: string;
    sku: string;
    shortDescription?: string | null;
    description?: string | null;
    designer?: string | null;
    color?: string | null;
    fabric?: string | null;
    embroideryDetails?: string | null;
    occasion?: string | null;
    setIncludes?: string | null;
    careInstructions?: string | null;
    rentalPricePerDay: runtime.Decimal | runtime.DecimalJsLike | number | string;
    discountPercent?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    securityDeposit?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    originalPrice?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    minimumRentalDays?: number;
    pickupAvailable?: boolean;
    status?: $Enums.ProductStatus;
    isFeatured?: boolean;
    isLatest?: boolean;
    isCategoryFeatured?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    category?: Prisma.CategoryCreateNestedOneWithoutLehengasInput;
    images?: Prisma.LehengaImageCreateNestedManyWithoutLehengaInput;
    orderItems?: Prisma.RentalOrderItemCreateNestedManyWithoutLehengaInput;
    reviews?: Prisma.ProductReviewCreateNestedManyWithoutLehengaInput;
};
export type LehengaUncheckedCreateWithoutSizesInput = {
    id?: string;
    name: string;
    slug: string;
    sku: string;
    shortDescription?: string | null;
    description?: string | null;
    designer?: string | null;
    color?: string | null;
    fabric?: string | null;
    embroideryDetails?: string | null;
    occasion?: string | null;
    setIncludes?: string | null;
    careInstructions?: string | null;
    rentalPricePerDay: runtime.Decimal | runtime.DecimalJsLike | number | string;
    discountPercent?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    securityDeposit?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    originalPrice?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    minimumRentalDays?: number;
    pickupAvailable?: boolean;
    status?: $Enums.ProductStatus;
    isFeatured?: boolean;
    isLatest?: boolean;
    isCategoryFeatured?: boolean;
    categoryId?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    images?: Prisma.LehengaImageUncheckedCreateNestedManyWithoutLehengaInput;
    orderItems?: Prisma.RentalOrderItemUncheckedCreateNestedManyWithoutLehengaInput;
    reviews?: Prisma.ProductReviewUncheckedCreateNestedManyWithoutLehengaInput;
};
export type LehengaCreateOrConnectWithoutSizesInput = {
    where: Prisma.LehengaWhereUniqueInput;
    create: Prisma.XOR<Prisma.LehengaCreateWithoutSizesInput, Prisma.LehengaUncheckedCreateWithoutSizesInput>;
};
export type LehengaUpsertWithoutSizesInput = {
    update: Prisma.XOR<Prisma.LehengaUpdateWithoutSizesInput, Prisma.LehengaUncheckedUpdateWithoutSizesInput>;
    create: Prisma.XOR<Prisma.LehengaCreateWithoutSizesInput, Prisma.LehengaUncheckedCreateWithoutSizesInput>;
    where?: Prisma.LehengaWhereInput;
};
export type LehengaUpdateToOneWithWhereWithoutSizesInput = {
    where?: Prisma.LehengaWhereInput;
    data: Prisma.XOR<Prisma.LehengaUpdateWithoutSizesInput, Prisma.LehengaUncheckedUpdateWithoutSizesInput>;
};
export type LehengaUpdateWithoutSizesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    sku?: Prisma.StringFieldUpdateOperationsInput | string;
    shortDescription?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    designer?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    color?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fabric?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    embroideryDetails?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    occasion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    setIncludes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    careInstructions?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    rentalPricePerDay?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    discountPercent?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    securityDeposit?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    originalPrice?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    minimumRentalDays?: Prisma.IntFieldUpdateOperationsInput | number;
    pickupAvailable?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    status?: Prisma.EnumProductStatusFieldUpdateOperationsInput | $Enums.ProductStatus;
    isFeatured?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    isLatest?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    isCategoryFeatured?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    category?: Prisma.CategoryUpdateOneWithoutLehengasNestedInput;
    images?: Prisma.LehengaImageUpdateManyWithoutLehengaNestedInput;
    orderItems?: Prisma.RentalOrderItemUpdateManyWithoutLehengaNestedInput;
    reviews?: Prisma.ProductReviewUpdateManyWithoutLehengaNestedInput;
};
export type LehengaUncheckedUpdateWithoutSizesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    sku?: Prisma.StringFieldUpdateOperationsInput | string;
    shortDescription?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    designer?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    color?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fabric?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    embroideryDetails?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    occasion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    setIncludes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    careInstructions?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    rentalPricePerDay?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    discountPercent?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    securityDeposit?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    originalPrice?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    minimumRentalDays?: Prisma.IntFieldUpdateOperationsInput | number;
    pickupAvailable?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    status?: Prisma.EnumProductStatusFieldUpdateOperationsInput | $Enums.ProductStatus;
    isFeatured?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    isLatest?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    isCategoryFeatured?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    categoryId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    images?: Prisma.LehengaImageUncheckedUpdateManyWithoutLehengaNestedInput;
    orderItems?: Prisma.RentalOrderItemUncheckedUpdateManyWithoutLehengaNestedInput;
    reviews?: Prisma.ProductReviewUncheckedUpdateManyWithoutLehengaNestedInput;
};
export type LehengaCreateWithoutImagesInput = {
    id?: string;
    name: string;
    slug: string;
    sku: string;
    shortDescription?: string | null;
    description?: string | null;
    designer?: string | null;
    color?: string | null;
    fabric?: string | null;
    embroideryDetails?: string | null;
    occasion?: string | null;
    setIncludes?: string | null;
    careInstructions?: string | null;
    rentalPricePerDay: runtime.Decimal | runtime.DecimalJsLike | number | string;
    discountPercent?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    securityDeposit?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    originalPrice?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    minimumRentalDays?: number;
    pickupAvailable?: boolean;
    status?: $Enums.ProductStatus;
    isFeatured?: boolean;
    isLatest?: boolean;
    isCategoryFeatured?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    category?: Prisma.CategoryCreateNestedOneWithoutLehengasInput;
    sizes?: Prisma.LehengaSizeCreateNestedManyWithoutLehengaInput;
    orderItems?: Prisma.RentalOrderItemCreateNestedManyWithoutLehengaInput;
    reviews?: Prisma.ProductReviewCreateNestedManyWithoutLehengaInput;
};
export type LehengaUncheckedCreateWithoutImagesInput = {
    id?: string;
    name: string;
    slug: string;
    sku: string;
    shortDescription?: string | null;
    description?: string | null;
    designer?: string | null;
    color?: string | null;
    fabric?: string | null;
    embroideryDetails?: string | null;
    occasion?: string | null;
    setIncludes?: string | null;
    careInstructions?: string | null;
    rentalPricePerDay: runtime.Decimal | runtime.DecimalJsLike | number | string;
    discountPercent?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    securityDeposit?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    originalPrice?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    minimumRentalDays?: number;
    pickupAvailable?: boolean;
    status?: $Enums.ProductStatus;
    isFeatured?: boolean;
    isLatest?: boolean;
    isCategoryFeatured?: boolean;
    categoryId?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    sizes?: Prisma.LehengaSizeUncheckedCreateNestedManyWithoutLehengaInput;
    orderItems?: Prisma.RentalOrderItemUncheckedCreateNestedManyWithoutLehengaInput;
    reviews?: Prisma.ProductReviewUncheckedCreateNestedManyWithoutLehengaInput;
};
export type LehengaCreateOrConnectWithoutImagesInput = {
    where: Prisma.LehengaWhereUniqueInput;
    create: Prisma.XOR<Prisma.LehengaCreateWithoutImagesInput, Prisma.LehengaUncheckedCreateWithoutImagesInput>;
};
export type LehengaUpsertWithoutImagesInput = {
    update: Prisma.XOR<Prisma.LehengaUpdateWithoutImagesInput, Prisma.LehengaUncheckedUpdateWithoutImagesInput>;
    create: Prisma.XOR<Prisma.LehengaCreateWithoutImagesInput, Prisma.LehengaUncheckedCreateWithoutImagesInput>;
    where?: Prisma.LehengaWhereInput;
};
export type LehengaUpdateToOneWithWhereWithoutImagesInput = {
    where?: Prisma.LehengaWhereInput;
    data: Prisma.XOR<Prisma.LehengaUpdateWithoutImagesInput, Prisma.LehengaUncheckedUpdateWithoutImagesInput>;
};
export type LehengaUpdateWithoutImagesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    sku?: Prisma.StringFieldUpdateOperationsInput | string;
    shortDescription?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    designer?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    color?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fabric?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    embroideryDetails?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    occasion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    setIncludes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    careInstructions?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    rentalPricePerDay?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    discountPercent?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    securityDeposit?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    originalPrice?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    minimumRentalDays?: Prisma.IntFieldUpdateOperationsInput | number;
    pickupAvailable?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    status?: Prisma.EnumProductStatusFieldUpdateOperationsInput | $Enums.ProductStatus;
    isFeatured?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    isLatest?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    isCategoryFeatured?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    category?: Prisma.CategoryUpdateOneWithoutLehengasNestedInput;
    sizes?: Prisma.LehengaSizeUpdateManyWithoutLehengaNestedInput;
    orderItems?: Prisma.RentalOrderItemUpdateManyWithoutLehengaNestedInput;
    reviews?: Prisma.ProductReviewUpdateManyWithoutLehengaNestedInput;
};
export type LehengaUncheckedUpdateWithoutImagesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    sku?: Prisma.StringFieldUpdateOperationsInput | string;
    shortDescription?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    designer?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    color?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fabric?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    embroideryDetails?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    occasion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    setIncludes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    careInstructions?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    rentalPricePerDay?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    discountPercent?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    securityDeposit?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    originalPrice?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    minimumRentalDays?: Prisma.IntFieldUpdateOperationsInput | number;
    pickupAvailable?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    status?: Prisma.EnumProductStatusFieldUpdateOperationsInput | $Enums.ProductStatus;
    isFeatured?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    isLatest?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    isCategoryFeatured?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    categoryId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    sizes?: Prisma.LehengaSizeUncheckedUpdateManyWithoutLehengaNestedInput;
    orderItems?: Prisma.RentalOrderItemUncheckedUpdateManyWithoutLehengaNestedInput;
    reviews?: Prisma.ProductReviewUncheckedUpdateManyWithoutLehengaNestedInput;
};
export type LehengaCreateWithoutOrderItemsInput = {
    id?: string;
    name: string;
    slug: string;
    sku: string;
    shortDescription?: string | null;
    description?: string | null;
    designer?: string | null;
    color?: string | null;
    fabric?: string | null;
    embroideryDetails?: string | null;
    occasion?: string | null;
    setIncludes?: string | null;
    careInstructions?: string | null;
    rentalPricePerDay: runtime.Decimal | runtime.DecimalJsLike | number | string;
    discountPercent?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    securityDeposit?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    originalPrice?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    minimumRentalDays?: number;
    pickupAvailable?: boolean;
    status?: $Enums.ProductStatus;
    isFeatured?: boolean;
    isLatest?: boolean;
    isCategoryFeatured?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    category?: Prisma.CategoryCreateNestedOneWithoutLehengasInput;
    sizes?: Prisma.LehengaSizeCreateNestedManyWithoutLehengaInput;
    images?: Prisma.LehengaImageCreateNestedManyWithoutLehengaInput;
    reviews?: Prisma.ProductReviewCreateNestedManyWithoutLehengaInput;
};
export type LehengaUncheckedCreateWithoutOrderItemsInput = {
    id?: string;
    name: string;
    slug: string;
    sku: string;
    shortDescription?: string | null;
    description?: string | null;
    designer?: string | null;
    color?: string | null;
    fabric?: string | null;
    embroideryDetails?: string | null;
    occasion?: string | null;
    setIncludes?: string | null;
    careInstructions?: string | null;
    rentalPricePerDay: runtime.Decimal | runtime.DecimalJsLike | number | string;
    discountPercent?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    securityDeposit?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    originalPrice?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    minimumRentalDays?: number;
    pickupAvailable?: boolean;
    status?: $Enums.ProductStatus;
    isFeatured?: boolean;
    isLatest?: boolean;
    isCategoryFeatured?: boolean;
    categoryId?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    sizes?: Prisma.LehengaSizeUncheckedCreateNestedManyWithoutLehengaInput;
    images?: Prisma.LehengaImageUncheckedCreateNestedManyWithoutLehengaInput;
    reviews?: Prisma.ProductReviewUncheckedCreateNestedManyWithoutLehengaInput;
};
export type LehengaCreateOrConnectWithoutOrderItemsInput = {
    where: Prisma.LehengaWhereUniqueInput;
    create: Prisma.XOR<Prisma.LehengaCreateWithoutOrderItemsInput, Prisma.LehengaUncheckedCreateWithoutOrderItemsInput>;
};
export type LehengaUpsertWithoutOrderItemsInput = {
    update: Prisma.XOR<Prisma.LehengaUpdateWithoutOrderItemsInput, Prisma.LehengaUncheckedUpdateWithoutOrderItemsInput>;
    create: Prisma.XOR<Prisma.LehengaCreateWithoutOrderItemsInput, Prisma.LehengaUncheckedCreateWithoutOrderItemsInput>;
    where?: Prisma.LehengaWhereInput;
};
export type LehengaUpdateToOneWithWhereWithoutOrderItemsInput = {
    where?: Prisma.LehengaWhereInput;
    data: Prisma.XOR<Prisma.LehengaUpdateWithoutOrderItemsInput, Prisma.LehengaUncheckedUpdateWithoutOrderItemsInput>;
};
export type LehengaUpdateWithoutOrderItemsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    sku?: Prisma.StringFieldUpdateOperationsInput | string;
    shortDescription?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    designer?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    color?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fabric?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    embroideryDetails?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    occasion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    setIncludes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    careInstructions?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    rentalPricePerDay?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    discountPercent?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    securityDeposit?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    originalPrice?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    minimumRentalDays?: Prisma.IntFieldUpdateOperationsInput | number;
    pickupAvailable?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    status?: Prisma.EnumProductStatusFieldUpdateOperationsInput | $Enums.ProductStatus;
    isFeatured?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    isLatest?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    isCategoryFeatured?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    category?: Prisma.CategoryUpdateOneWithoutLehengasNestedInput;
    sizes?: Prisma.LehengaSizeUpdateManyWithoutLehengaNestedInput;
    images?: Prisma.LehengaImageUpdateManyWithoutLehengaNestedInput;
    reviews?: Prisma.ProductReviewUpdateManyWithoutLehengaNestedInput;
};
export type LehengaUncheckedUpdateWithoutOrderItemsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    sku?: Prisma.StringFieldUpdateOperationsInput | string;
    shortDescription?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    designer?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    color?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fabric?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    embroideryDetails?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    occasion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    setIncludes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    careInstructions?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    rentalPricePerDay?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    discountPercent?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    securityDeposit?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    originalPrice?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    minimumRentalDays?: Prisma.IntFieldUpdateOperationsInput | number;
    pickupAvailable?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    status?: Prisma.EnumProductStatusFieldUpdateOperationsInput | $Enums.ProductStatus;
    isFeatured?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    isLatest?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    isCategoryFeatured?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    categoryId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    sizes?: Prisma.LehengaSizeUncheckedUpdateManyWithoutLehengaNestedInput;
    images?: Prisma.LehengaImageUncheckedUpdateManyWithoutLehengaNestedInput;
    reviews?: Prisma.ProductReviewUncheckedUpdateManyWithoutLehengaNestedInput;
};
export type LehengaCreateWithoutReviewsInput = {
    id?: string;
    name: string;
    slug: string;
    sku: string;
    shortDescription?: string | null;
    description?: string | null;
    designer?: string | null;
    color?: string | null;
    fabric?: string | null;
    embroideryDetails?: string | null;
    occasion?: string | null;
    setIncludes?: string | null;
    careInstructions?: string | null;
    rentalPricePerDay: runtime.Decimal | runtime.DecimalJsLike | number | string;
    discountPercent?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    securityDeposit?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    originalPrice?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    minimumRentalDays?: number;
    pickupAvailable?: boolean;
    status?: $Enums.ProductStatus;
    isFeatured?: boolean;
    isLatest?: boolean;
    isCategoryFeatured?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    category?: Prisma.CategoryCreateNestedOneWithoutLehengasInput;
    sizes?: Prisma.LehengaSizeCreateNestedManyWithoutLehengaInput;
    images?: Prisma.LehengaImageCreateNestedManyWithoutLehengaInput;
    orderItems?: Prisma.RentalOrderItemCreateNestedManyWithoutLehengaInput;
};
export type LehengaUncheckedCreateWithoutReviewsInput = {
    id?: string;
    name: string;
    slug: string;
    sku: string;
    shortDescription?: string | null;
    description?: string | null;
    designer?: string | null;
    color?: string | null;
    fabric?: string | null;
    embroideryDetails?: string | null;
    occasion?: string | null;
    setIncludes?: string | null;
    careInstructions?: string | null;
    rentalPricePerDay: runtime.Decimal | runtime.DecimalJsLike | number | string;
    discountPercent?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    securityDeposit?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    originalPrice?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    minimumRentalDays?: number;
    pickupAvailable?: boolean;
    status?: $Enums.ProductStatus;
    isFeatured?: boolean;
    isLatest?: boolean;
    isCategoryFeatured?: boolean;
    categoryId?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    sizes?: Prisma.LehengaSizeUncheckedCreateNestedManyWithoutLehengaInput;
    images?: Prisma.LehengaImageUncheckedCreateNestedManyWithoutLehengaInput;
    orderItems?: Prisma.RentalOrderItemUncheckedCreateNestedManyWithoutLehengaInput;
};
export type LehengaCreateOrConnectWithoutReviewsInput = {
    where: Prisma.LehengaWhereUniqueInput;
    create: Prisma.XOR<Prisma.LehengaCreateWithoutReviewsInput, Prisma.LehengaUncheckedCreateWithoutReviewsInput>;
};
export type LehengaUpsertWithoutReviewsInput = {
    update: Prisma.XOR<Prisma.LehengaUpdateWithoutReviewsInput, Prisma.LehengaUncheckedUpdateWithoutReviewsInput>;
    create: Prisma.XOR<Prisma.LehengaCreateWithoutReviewsInput, Prisma.LehengaUncheckedCreateWithoutReviewsInput>;
    where?: Prisma.LehengaWhereInput;
};
export type LehengaUpdateToOneWithWhereWithoutReviewsInput = {
    where?: Prisma.LehengaWhereInput;
    data: Prisma.XOR<Prisma.LehengaUpdateWithoutReviewsInput, Prisma.LehengaUncheckedUpdateWithoutReviewsInput>;
};
export type LehengaUpdateWithoutReviewsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    sku?: Prisma.StringFieldUpdateOperationsInput | string;
    shortDescription?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    designer?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    color?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fabric?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    embroideryDetails?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    occasion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    setIncludes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    careInstructions?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    rentalPricePerDay?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    discountPercent?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    securityDeposit?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    originalPrice?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    minimumRentalDays?: Prisma.IntFieldUpdateOperationsInput | number;
    pickupAvailable?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    status?: Prisma.EnumProductStatusFieldUpdateOperationsInput | $Enums.ProductStatus;
    isFeatured?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    isLatest?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    isCategoryFeatured?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    category?: Prisma.CategoryUpdateOneWithoutLehengasNestedInput;
    sizes?: Prisma.LehengaSizeUpdateManyWithoutLehengaNestedInput;
    images?: Prisma.LehengaImageUpdateManyWithoutLehengaNestedInput;
    orderItems?: Prisma.RentalOrderItemUpdateManyWithoutLehengaNestedInput;
};
export type LehengaUncheckedUpdateWithoutReviewsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    sku?: Prisma.StringFieldUpdateOperationsInput | string;
    shortDescription?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    designer?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    color?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fabric?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    embroideryDetails?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    occasion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    setIncludes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    careInstructions?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    rentalPricePerDay?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    discountPercent?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    securityDeposit?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    originalPrice?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    minimumRentalDays?: Prisma.IntFieldUpdateOperationsInput | number;
    pickupAvailable?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    status?: Prisma.EnumProductStatusFieldUpdateOperationsInput | $Enums.ProductStatus;
    isFeatured?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    isLatest?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    isCategoryFeatured?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    categoryId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    sizes?: Prisma.LehengaSizeUncheckedUpdateManyWithoutLehengaNestedInput;
    images?: Prisma.LehengaImageUncheckedUpdateManyWithoutLehengaNestedInput;
    orderItems?: Prisma.RentalOrderItemUncheckedUpdateManyWithoutLehengaNestedInput;
};
export type LehengaCreateManyCategoryInput = {
    id?: string;
    name: string;
    slug: string;
    sku: string;
    shortDescription?: string | null;
    description?: string | null;
    designer?: string | null;
    color?: string | null;
    fabric?: string | null;
    embroideryDetails?: string | null;
    occasion?: string | null;
    setIncludes?: string | null;
    careInstructions?: string | null;
    rentalPricePerDay: runtime.Decimal | runtime.DecimalJsLike | number | string;
    discountPercent?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    securityDeposit?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    originalPrice?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    minimumRentalDays?: number;
    pickupAvailable?: boolean;
    status?: $Enums.ProductStatus;
    isFeatured?: boolean;
    isLatest?: boolean;
    isCategoryFeatured?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type LehengaUpdateWithoutCategoryInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    sku?: Prisma.StringFieldUpdateOperationsInput | string;
    shortDescription?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    designer?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    color?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fabric?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    embroideryDetails?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    occasion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    setIncludes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    careInstructions?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    rentalPricePerDay?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    discountPercent?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    securityDeposit?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    originalPrice?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    minimumRentalDays?: Prisma.IntFieldUpdateOperationsInput | number;
    pickupAvailable?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    status?: Prisma.EnumProductStatusFieldUpdateOperationsInput | $Enums.ProductStatus;
    isFeatured?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    isLatest?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    isCategoryFeatured?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    sizes?: Prisma.LehengaSizeUpdateManyWithoutLehengaNestedInput;
    images?: Prisma.LehengaImageUpdateManyWithoutLehengaNestedInput;
    orderItems?: Prisma.RentalOrderItemUpdateManyWithoutLehengaNestedInput;
    reviews?: Prisma.ProductReviewUpdateManyWithoutLehengaNestedInput;
};
export type LehengaUncheckedUpdateWithoutCategoryInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    sku?: Prisma.StringFieldUpdateOperationsInput | string;
    shortDescription?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    designer?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    color?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fabric?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    embroideryDetails?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    occasion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    setIncludes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    careInstructions?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    rentalPricePerDay?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    discountPercent?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    securityDeposit?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    originalPrice?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    minimumRentalDays?: Prisma.IntFieldUpdateOperationsInput | number;
    pickupAvailable?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    status?: Prisma.EnumProductStatusFieldUpdateOperationsInput | $Enums.ProductStatus;
    isFeatured?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    isLatest?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    isCategoryFeatured?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    sizes?: Prisma.LehengaSizeUncheckedUpdateManyWithoutLehengaNestedInput;
    images?: Prisma.LehengaImageUncheckedUpdateManyWithoutLehengaNestedInput;
    orderItems?: Prisma.RentalOrderItemUncheckedUpdateManyWithoutLehengaNestedInput;
    reviews?: Prisma.ProductReviewUncheckedUpdateManyWithoutLehengaNestedInput;
};
export type LehengaUncheckedUpdateManyWithoutCategoryInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    sku?: Prisma.StringFieldUpdateOperationsInput | string;
    shortDescription?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    designer?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    color?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fabric?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    embroideryDetails?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    occasion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    setIncludes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    careInstructions?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    rentalPricePerDay?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    discountPercent?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    securityDeposit?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    originalPrice?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    minimumRentalDays?: Prisma.IntFieldUpdateOperationsInput | number;
    pickupAvailable?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    status?: Prisma.EnumProductStatusFieldUpdateOperationsInput | $Enums.ProductStatus;
    isFeatured?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    isLatest?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    isCategoryFeatured?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
/**
 * Count Type LehengaCountOutputType
 */
export type LehengaCountOutputType = {
    sizes: number;
    images: number;
    orderItems: number;
    reviews: number;
};
export type LehengaCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    sizes?: boolean | LehengaCountOutputTypeCountSizesArgs;
    images?: boolean | LehengaCountOutputTypeCountImagesArgs;
    orderItems?: boolean | LehengaCountOutputTypeCountOrderItemsArgs;
    reviews?: boolean | LehengaCountOutputTypeCountReviewsArgs;
};
/**
 * LehengaCountOutputType without action
 */
export type LehengaCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LehengaCountOutputType
     */
    select?: Prisma.LehengaCountOutputTypeSelect<ExtArgs> | null;
};
/**
 * LehengaCountOutputType without action
 */
export type LehengaCountOutputTypeCountSizesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.LehengaSizeWhereInput;
};
/**
 * LehengaCountOutputType without action
 */
export type LehengaCountOutputTypeCountImagesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.LehengaImageWhereInput;
};
/**
 * LehengaCountOutputType without action
 */
export type LehengaCountOutputTypeCountOrderItemsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.RentalOrderItemWhereInput;
};
/**
 * LehengaCountOutputType without action
 */
export type LehengaCountOutputTypeCountReviewsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ProductReviewWhereInput;
};
export type LehengaSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    slug?: boolean;
    sku?: boolean;
    shortDescription?: boolean;
    description?: boolean;
    designer?: boolean;
    color?: boolean;
    fabric?: boolean;
    embroideryDetails?: boolean;
    occasion?: boolean;
    setIncludes?: boolean;
    careInstructions?: boolean;
    rentalPricePerDay?: boolean;
    discountPercent?: boolean;
    securityDeposit?: boolean;
    originalPrice?: boolean;
    minimumRentalDays?: boolean;
    pickupAvailable?: boolean;
    status?: boolean;
    isFeatured?: boolean;
    isLatest?: boolean;
    isCategoryFeatured?: boolean;
    categoryId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    category?: boolean | Prisma.Lehenga$categoryArgs<ExtArgs>;
    sizes?: boolean | Prisma.Lehenga$sizesArgs<ExtArgs>;
    images?: boolean | Prisma.Lehenga$imagesArgs<ExtArgs>;
    orderItems?: boolean | Prisma.Lehenga$orderItemsArgs<ExtArgs>;
    reviews?: boolean | Prisma.Lehenga$reviewsArgs<ExtArgs>;
    _count?: boolean | Prisma.LehengaCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["lehenga"]>;
export type LehengaSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    slug?: boolean;
    sku?: boolean;
    shortDescription?: boolean;
    description?: boolean;
    designer?: boolean;
    color?: boolean;
    fabric?: boolean;
    embroideryDetails?: boolean;
    occasion?: boolean;
    setIncludes?: boolean;
    careInstructions?: boolean;
    rentalPricePerDay?: boolean;
    discountPercent?: boolean;
    securityDeposit?: boolean;
    originalPrice?: boolean;
    minimumRentalDays?: boolean;
    pickupAvailable?: boolean;
    status?: boolean;
    isFeatured?: boolean;
    isLatest?: boolean;
    isCategoryFeatured?: boolean;
    categoryId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    category?: boolean | Prisma.Lehenga$categoryArgs<ExtArgs>;
}, ExtArgs["result"]["lehenga"]>;
export type LehengaSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    slug?: boolean;
    sku?: boolean;
    shortDescription?: boolean;
    description?: boolean;
    designer?: boolean;
    color?: boolean;
    fabric?: boolean;
    embroideryDetails?: boolean;
    occasion?: boolean;
    setIncludes?: boolean;
    careInstructions?: boolean;
    rentalPricePerDay?: boolean;
    discountPercent?: boolean;
    securityDeposit?: boolean;
    originalPrice?: boolean;
    minimumRentalDays?: boolean;
    pickupAvailable?: boolean;
    status?: boolean;
    isFeatured?: boolean;
    isLatest?: boolean;
    isCategoryFeatured?: boolean;
    categoryId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    category?: boolean | Prisma.Lehenga$categoryArgs<ExtArgs>;
}, ExtArgs["result"]["lehenga"]>;
export type LehengaSelectScalar = {
    id?: boolean;
    name?: boolean;
    slug?: boolean;
    sku?: boolean;
    shortDescription?: boolean;
    description?: boolean;
    designer?: boolean;
    color?: boolean;
    fabric?: boolean;
    embroideryDetails?: boolean;
    occasion?: boolean;
    setIncludes?: boolean;
    careInstructions?: boolean;
    rentalPricePerDay?: boolean;
    discountPercent?: boolean;
    securityDeposit?: boolean;
    originalPrice?: boolean;
    minimumRentalDays?: boolean;
    pickupAvailable?: boolean;
    status?: boolean;
    isFeatured?: boolean;
    isLatest?: boolean;
    isCategoryFeatured?: boolean;
    categoryId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type LehengaOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "name" | "slug" | "sku" | "shortDescription" | "description" | "designer" | "color" | "fabric" | "embroideryDetails" | "occasion" | "setIncludes" | "careInstructions" | "rentalPricePerDay" | "discountPercent" | "securityDeposit" | "originalPrice" | "minimumRentalDays" | "pickupAvailable" | "status" | "isFeatured" | "isLatest" | "isCategoryFeatured" | "categoryId" | "createdAt" | "updatedAt", ExtArgs["result"]["lehenga"]>;
export type LehengaInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    category?: boolean | Prisma.Lehenga$categoryArgs<ExtArgs>;
    sizes?: boolean | Prisma.Lehenga$sizesArgs<ExtArgs>;
    images?: boolean | Prisma.Lehenga$imagesArgs<ExtArgs>;
    orderItems?: boolean | Prisma.Lehenga$orderItemsArgs<ExtArgs>;
    reviews?: boolean | Prisma.Lehenga$reviewsArgs<ExtArgs>;
    _count?: boolean | Prisma.LehengaCountOutputTypeDefaultArgs<ExtArgs>;
};
export type LehengaIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    category?: boolean | Prisma.Lehenga$categoryArgs<ExtArgs>;
};
export type LehengaIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    category?: boolean | Prisma.Lehenga$categoryArgs<ExtArgs>;
};
export type $LehengaPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Lehenga";
    objects: {
        category: Prisma.$CategoryPayload<ExtArgs> | null;
        sizes: Prisma.$LehengaSizePayload<ExtArgs>[];
        images: Prisma.$LehengaImagePayload<ExtArgs>[];
        orderItems: Prisma.$RentalOrderItemPayload<ExtArgs>[];
        reviews: Prisma.$ProductReviewPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        name: string;
        slug: string;
        sku: string;
        shortDescription: string | null;
        description: string | null;
        designer: string | null;
        color: string | null;
        fabric: string | null;
        embroideryDetails: string | null;
        occasion: string | null;
        setIncludes: string | null;
        careInstructions: string | null;
        rentalPricePerDay: runtime.Decimal;
        discountPercent: runtime.Decimal;
        securityDeposit: runtime.Decimal | null;
        originalPrice: runtime.Decimal | null;
        minimumRentalDays: number;
        pickupAvailable: boolean;
        status: $Enums.ProductStatus;
        isFeatured: boolean;
        isLatest: boolean;
        isCategoryFeatured: boolean;
        categoryId: string | null;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["lehenga"]>;
    composites: {};
};
export type LehengaGetPayload<S extends boolean | null | undefined | LehengaDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$LehengaPayload, S>;
export type LehengaCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<LehengaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: LehengaCountAggregateInputType | true;
};
export interface LehengaDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Lehenga'];
        meta: {
            name: 'Lehenga';
        };
    };
    /**
     * Find zero or one Lehenga that matches the filter.
     * @param {LehengaFindUniqueArgs} args - Arguments to find a Lehenga
     * @example
     * // Get one Lehenga
     * const lehenga = await prisma.lehenga.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LehengaFindUniqueArgs>(args: Prisma.SelectSubset<T, LehengaFindUniqueArgs<ExtArgs>>): Prisma.Prisma__LehengaClient<runtime.Types.Result.GetResult<Prisma.$LehengaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one Lehenga that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LehengaFindUniqueOrThrowArgs} args - Arguments to find a Lehenga
     * @example
     * // Get one Lehenga
     * const lehenga = await prisma.lehenga.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LehengaFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, LehengaFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__LehengaClient<runtime.Types.Result.GetResult<Prisma.$LehengaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Lehenga that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LehengaFindFirstArgs} args - Arguments to find a Lehenga
     * @example
     * // Get one Lehenga
     * const lehenga = await prisma.lehenga.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LehengaFindFirstArgs>(args?: Prisma.SelectSubset<T, LehengaFindFirstArgs<ExtArgs>>): Prisma.Prisma__LehengaClient<runtime.Types.Result.GetResult<Prisma.$LehengaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Lehenga that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LehengaFindFirstOrThrowArgs} args - Arguments to find a Lehenga
     * @example
     * // Get one Lehenga
     * const lehenga = await prisma.lehenga.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LehengaFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, LehengaFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__LehengaClient<runtime.Types.Result.GetResult<Prisma.$LehengaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more Lehengas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LehengaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Lehengas
     * const lehengas = await prisma.lehenga.findMany()
     *
     * // Get first 10 Lehengas
     * const lehengas = await prisma.lehenga.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const lehengaWithIdOnly = await prisma.lehenga.findMany({ select: { id: true } })
     *
     */
    findMany<T extends LehengaFindManyArgs>(args?: Prisma.SelectSubset<T, LehengaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$LehengaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a Lehenga.
     * @param {LehengaCreateArgs} args - Arguments to create a Lehenga.
     * @example
     * // Create one Lehenga
     * const Lehenga = await prisma.lehenga.create({
     *   data: {
     *     // ... data to create a Lehenga
     *   }
     * })
     *
     */
    create<T extends LehengaCreateArgs>(args: Prisma.SelectSubset<T, LehengaCreateArgs<ExtArgs>>): Prisma.Prisma__LehengaClient<runtime.Types.Result.GetResult<Prisma.$LehengaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many Lehengas.
     * @param {LehengaCreateManyArgs} args - Arguments to create many Lehengas.
     * @example
     * // Create many Lehengas
     * const lehenga = await prisma.lehenga.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends LehengaCreateManyArgs>(args?: Prisma.SelectSubset<T, LehengaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many Lehengas and returns the data saved in the database.
     * @param {LehengaCreateManyAndReturnArgs} args - Arguments to create many Lehengas.
     * @example
     * // Create many Lehengas
     * const lehenga = await prisma.lehenga.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Lehengas and only return the `id`
     * const lehengaWithIdOnly = await prisma.lehenga.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends LehengaCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, LehengaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$LehengaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a Lehenga.
     * @param {LehengaDeleteArgs} args - Arguments to delete one Lehenga.
     * @example
     * // Delete one Lehenga
     * const Lehenga = await prisma.lehenga.delete({
     *   where: {
     *     // ... filter to delete one Lehenga
     *   }
     * })
     *
     */
    delete<T extends LehengaDeleteArgs>(args: Prisma.SelectSubset<T, LehengaDeleteArgs<ExtArgs>>): Prisma.Prisma__LehengaClient<runtime.Types.Result.GetResult<Prisma.$LehengaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one Lehenga.
     * @param {LehengaUpdateArgs} args - Arguments to update one Lehenga.
     * @example
     * // Update one Lehenga
     * const lehenga = await prisma.lehenga.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends LehengaUpdateArgs>(args: Prisma.SelectSubset<T, LehengaUpdateArgs<ExtArgs>>): Prisma.Prisma__LehengaClient<runtime.Types.Result.GetResult<Prisma.$LehengaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more Lehengas.
     * @param {LehengaDeleteManyArgs} args - Arguments to filter Lehengas to delete.
     * @example
     * // Delete a few Lehengas
     * const { count } = await prisma.lehenga.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends LehengaDeleteManyArgs>(args?: Prisma.SelectSubset<T, LehengaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Lehengas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LehengaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Lehengas
     * const lehenga = await prisma.lehenga.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends LehengaUpdateManyArgs>(args: Prisma.SelectSubset<T, LehengaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Lehengas and returns the data updated in the database.
     * @param {LehengaUpdateManyAndReturnArgs} args - Arguments to update many Lehengas.
     * @example
     * // Update many Lehengas
     * const lehenga = await prisma.lehenga.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Lehengas and only return the `id`
     * const lehengaWithIdOnly = await prisma.lehenga.updateManyAndReturn({
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
    updateManyAndReturn<T extends LehengaUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, LehengaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$LehengaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one Lehenga.
     * @param {LehengaUpsertArgs} args - Arguments to update or create a Lehenga.
     * @example
     * // Update or create a Lehenga
     * const lehenga = await prisma.lehenga.upsert({
     *   create: {
     *     // ... data to create a Lehenga
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Lehenga we want to update
     *   }
     * })
     */
    upsert<T extends LehengaUpsertArgs>(args: Prisma.SelectSubset<T, LehengaUpsertArgs<ExtArgs>>): Prisma.Prisma__LehengaClient<runtime.Types.Result.GetResult<Prisma.$LehengaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of Lehengas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LehengaCountArgs} args - Arguments to filter Lehengas to count.
     * @example
     * // Count the number of Lehengas
     * const count = await prisma.lehenga.count({
     *   where: {
     *     // ... the filter for the Lehengas we want to count
     *   }
     * })
    **/
    count<T extends LehengaCountArgs>(args?: Prisma.Subset<T, LehengaCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], LehengaCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a Lehenga.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LehengaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LehengaAggregateArgs>(args: Prisma.Subset<T, LehengaAggregateArgs>): Prisma.PrismaPromise<GetLehengaAggregateType<T>>;
    /**
     * Group by Lehenga.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LehengaGroupByArgs} args - Group by arguments.
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
    groupBy<T extends LehengaGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: LehengaGroupByArgs['orderBy'];
    } : {
        orderBy?: LehengaGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, LehengaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLehengaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Lehenga model
     */
    readonly fields: LehengaFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for Lehenga.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__LehengaClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    category<T extends Prisma.Lehenga$categoryArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Lehenga$categoryArgs<ExtArgs>>): Prisma.Prisma__CategoryClient<runtime.Types.Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    sizes<T extends Prisma.Lehenga$sizesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Lehenga$sizesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$LehengaSizePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    images<T extends Prisma.Lehenga$imagesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Lehenga$imagesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$LehengaImagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    orderItems<T extends Prisma.Lehenga$orderItemsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Lehenga$orderItemsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$RentalOrderItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    reviews<T extends Prisma.Lehenga$reviewsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Lehenga$reviewsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ProductReviewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
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
 * Fields of the Lehenga model
 */
export interface LehengaFieldRefs {
    readonly id: Prisma.FieldRef<"Lehenga", 'String'>;
    readonly name: Prisma.FieldRef<"Lehenga", 'String'>;
    readonly slug: Prisma.FieldRef<"Lehenga", 'String'>;
    readonly sku: Prisma.FieldRef<"Lehenga", 'String'>;
    readonly shortDescription: Prisma.FieldRef<"Lehenga", 'String'>;
    readonly description: Prisma.FieldRef<"Lehenga", 'String'>;
    readonly designer: Prisma.FieldRef<"Lehenga", 'String'>;
    readonly color: Prisma.FieldRef<"Lehenga", 'String'>;
    readonly fabric: Prisma.FieldRef<"Lehenga", 'String'>;
    readonly embroideryDetails: Prisma.FieldRef<"Lehenga", 'String'>;
    readonly occasion: Prisma.FieldRef<"Lehenga", 'String'>;
    readonly setIncludes: Prisma.FieldRef<"Lehenga", 'String'>;
    readonly careInstructions: Prisma.FieldRef<"Lehenga", 'String'>;
    readonly rentalPricePerDay: Prisma.FieldRef<"Lehenga", 'Decimal'>;
    readonly discountPercent: Prisma.FieldRef<"Lehenga", 'Decimal'>;
    readonly securityDeposit: Prisma.FieldRef<"Lehenga", 'Decimal'>;
    readonly originalPrice: Prisma.FieldRef<"Lehenga", 'Decimal'>;
    readonly minimumRentalDays: Prisma.FieldRef<"Lehenga", 'Int'>;
    readonly pickupAvailable: Prisma.FieldRef<"Lehenga", 'Boolean'>;
    readonly status: Prisma.FieldRef<"Lehenga", 'ProductStatus'>;
    readonly isFeatured: Prisma.FieldRef<"Lehenga", 'Boolean'>;
    readonly isLatest: Prisma.FieldRef<"Lehenga", 'Boolean'>;
    readonly isCategoryFeatured: Prisma.FieldRef<"Lehenga", 'Boolean'>;
    readonly categoryId: Prisma.FieldRef<"Lehenga", 'String'>;
    readonly createdAt: Prisma.FieldRef<"Lehenga", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"Lehenga", 'DateTime'>;
}
/**
 * Lehenga findUnique
 */
export type LehengaFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lehenga
     */
    select?: Prisma.LehengaSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Lehenga
     */
    omit?: Prisma.LehengaOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.LehengaInclude<ExtArgs> | null;
    /**
     * Filter, which Lehenga to fetch.
     */
    where: Prisma.LehengaWhereUniqueInput;
};
/**
 * Lehenga findUniqueOrThrow
 */
export type LehengaFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lehenga
     */
    select?: Prisma.LehengaSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Lehenga
     */
    omit?: Prisma.LehengaOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.LehengaInclude<ExtArgs> | null;
    /**
     * Filter, which Lehenga to fetch.
     */
    where: Prisma.LehengaWhereUniqueInput;
};
/**
 * Lehenga findFirst
 */
export type LehengaFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lehenga
     */
    select?: Prisma.LehengaSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Lehenga
     */
    omit?: Prisma.LehengaOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.LehengaInclude<ExtArgs> | null;
    /**
     * Filter, which Lehenga to fetch.
     */
    where?: Prisma.LehengaWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Lehengas to fetch.
     */
    orderBy?: Prisma.LehengaOrderByWithRelationInput | Prisma.LehengaOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Lehengas.
     */
    cursor?: Prisma.LehengaWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Lehengas from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Lehengas.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Lehengas.
     */
    distinct?: Prisma.LehengaScalarFieldEnum | Prisma.LehengaScalarFieldEnum[];
};
/**
 * Lehenga findFirstOrThrow
 */
export type LehengaFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lehenga
     */
    select?: Prisma.LehengaSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Lehenga
     */
    omit?: Prisma.LehengaOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.LehengaInclude<ExtArgs> | null;
    /**
     * Filter, which Lehenga to fetch.
     */
    where?: Prisma.LehengaWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Lehengas to fetch.
     */
    orderBy?: Prisma.LehengaOrderByWithRelationInput | Prisma.LehengaOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Lehengas.
     */
    cursor?: Prisma.LehengaWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Lehengas from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Lehengas.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Lehengas.
     */
    distinct?: Prisma.LehengaScalarFieldEnum | Prisma.LehengaScalarFieldEnum[];
};
/**
 * Lehenga findMany
 */
export type LehengaFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lehenga
     */
    select?: Prisma.LehengaSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Lehenga
     */
    omit?: Prisma.LehengaOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.LehengaInclude<ExtArgs> | null;
    /**
     * Filter, which Lehengas to fetch.
     */
    where?: Prisma.LehengaWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Lehengas to fetch.
     */
    orderBy?: Prisma.LehengaOrderByWithRelationInput | Prisma.LehengaOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Lehengas.
     */
    cursor?: Prisma.LehengaWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Lehengas from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Lehengas.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Lehengas.
     */
    distinct?: Prisma.LehengaScalarFieldEnum | Prisma.LehengaScalarFieldEnum[];
};
/**
 * Lehenga create
 */
export type LehengaCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lehenga
     */
    select?: Prisma.LehengaSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Lehenga
     */
    omit?: Prisma.LehengaOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.LehengaInclude<ExtArgs> | null;
    /**
     * The data needed to create a Lehenga.
     */
    data: Prisma.XOR<Prisma.LehengaCreateInput, Prisma.LehengaUncheckedCreateInput>;
};
/**
 * Lehenga createMany
 */
export type LehengaCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many Lehengas.
     */
    data: Prisma.LehengaCreateManyInput | Prisma.LehengaCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * Lehenga createManyAndReturn
 */
export type LehengaCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lehenga
     */
    select?: Prisma.LehengaSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Lehenga
     */
    omit?: Prisma.LehengaOmit<ExtArgs> | null;
    /**
     * The data used to create many Lehengas.
     */
    data: Prisma.LehengaCreateManyInput | Prisma.LehengaCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.LehengaIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * Lehenga update
 */
export type LehengaUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lehenga
     */
    select?: Prisma.LehengaSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Lehenga
     */
    omit?: Prisma.LehengaOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.LehengaInclude<ExtArgs> | null;
    /**
     * The data needed to update a Lehenga.
     */
    data: Prisma.XOR<Prisma.LehengaUpdateInput, Prisma.LehengaUncheckedUpdateInput>;
    /**
     * Choose, which Lehenga to update.
     */
    where: Prisma.LehengaWhereUniqueInput;
};
/**
 * Lehenga updateMany
 */
export type LehengaUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update Lehengas.
     */
    data: Prisma.XOR<Prisma.LehengaUpdateManyMutationInput, Prisma.LehengaUncheckedUpdateManyInput>;
    /**
     * Filter which Lehengas to update
     */
    where?: Prisma.LehengaWhereInput;
    /**
     * Limit how many Lehengas to update.
     */
    limit?: number;
};
/**
 * Lehenga updateManyAndReturn
 */
export type LehengaUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lehenga
     */
    select?: Prisma.LehengaSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Lehenga
     */
    omit?: Prisma.LehengaOmit<ExtArgs> | null;
    /**
     * The data used to update Lehengas.
     */
    data: Prisma.XOR<Prisma.LehengaUpdateManyMutationInput, Prisma.LehengaUncheckedUpdateManyInput>;
    /**
     * Filter which Lehengas to update
     */
    where?: Prisma.LehengaWhereInput;
    /**
     * Limit how many Lehengas to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.LehengaIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * Lehenga upsert
 */
export type LehengaUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lehenga
     */
    select?: Prisma.LehengaSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Lehenga
     */
    omit?: Prisma.LehengaOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.LehengaInclude<ExtArgs> | null;
    /**
     * The filter to search for the Lehenga to update in case it exists.
     */
    where: Prisma.LehengaWhereUniqueInput;
    /**
     * In case the Lehenga found by the `where` argument doesn't exist, create a new Lehenga with this data.
     */
    create: Prisma.XOR<Prisma.LehengaCreateInput, Prisma.LehengaUncheckedCreateInput>;
    /**
     * In case the Lehenga was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.LehengaUpdateInput, Prisma.LehengaUncheckedUpdateInput>;
};
/**
 * Lehenga delete
 */
export type LehengaDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lehenga
     */
    select?: Prisma.LehengaSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Lehenga
     */
    omit?: Prisma.LehengaOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.LehengaInclude<ExtArgs> | null;
    /**
     * Filter which Lehenga to delete.
     */
    where: Prisma.LehengaWhereUniqueInput;
};
/**
 * Lehenga deleteMany
 */
export type LehengaDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Lehengas to delete
     */
    where?: Prisma.LehengaWhereInput;
    /**
     * Limit how many Lehengas to delete.
     */
    limit?: number;
};
/**
 * Lehenga.category
 */
export type Lehenga$categoryArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: Prisma.CategorySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Category
     */
    omit?: Prisma.CategoryOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.CategoryInclude<ExtArgs> | null;
    where?: Prisma.CategoryWhereInput;
};
/**
 * Lehenga.sizes
 */
export type Lehenga$sizesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LehengaSize
     */
    select?: Prisma.LehengaSizeSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the LehengaSize
     */
    omit?: Prisma.LehengaSizeOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.LehengaSizeInclude<ExtArgs> | null;
    where?: Prisma.LehengaSizeWhereInput;
    orderBy?: Prisma.LehengaSizeOrderByWithRelationInput | Prisma.LehengaSizeOrderByWithRelationInput[];
    cursor?: Prisma.LehengaSizeWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.LehengaSizeScalarFieldEnum | Prisma.LehengaSizeScalarFieldEnum[];
};
/**
 * Lehenga.images
 */
export type Lehenga$imagesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LehengaImage
     */
    select?: Prisma.LehengaImageSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the LehengaImage
     */
    omit?: Prisma.LehengaImageOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.LehengaImageInclude<ExtArgs> | null;
    where?: Prisma.LehengaImageWhereInput;
    orderBy?: Prisma.LehengaImageOrderByWithRelationInput | Prisma.LehengaImageOrderByWithRelationInput[];
    cursor?: Prisma.LehengaImageWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.LehengaImageScalarFieldEnum | Prisma.LehengaImageScalarFieldEnum[];
};
/**
 * Lehenga.orderItems
 */
export type Lehenga$orderItemsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
 * Lehenga.reviews
 */
export type Lehenga$reviewsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductReview
     */
    select?: Prisma.ProductReviewSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ProductReview
     */
    omit?: Prisma.ProductReviewOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ProductReviewInclude<ExtArgs> | null;
    where?: Prisma.ProductReviewWhereInput;
    orderBy?: Prisma.ProductReviewOrderByWithRelationInput | Prisma.ProductReviewOrderByWithRelationInput[];
    cursor?: Prisma.ProductReviewWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ProductReviewScalarFieldEnum | Prisma.ProductReviewScalarFieldEnum[];
};
/**
 * Lehenga without action
 */
export type LehengaDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lehenga
     */
    select?: Prisma.LehengaSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Lehenga
     */
    omit?: Prisma.LehengaOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.LehengaInclude<ExtArgs> | null;
};
//# sourceMappingURL=Lehenga.d.ts.map