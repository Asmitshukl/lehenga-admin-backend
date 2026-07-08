import * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "./prismaNamespace.js";
export type LogOptions<ClientOptions extends Prisma.PrismaClientOptions> = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never;
export interface PrismaClientConstructor {
    /**
   * ## Prisma Client
   *
   * Type-safe database client for TypeScript
   * @example
   * ```
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more AdminUsers
   * const adminUsers = await prisma.adminUser.findMany()
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */
    new <Options extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions, LogOpts extends LogOptions<Options> = LogOptions<Options>, OmitOpts extends Prisma.PrismaClientOptions['omit'] = Options extends {
        omit: infer U;
    } ? U : Prisma.PrismaClientOptions['omit'], ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs>(options: Prisma.Subset<Options, Prisma.PrismaClientOptions>): PrismaClient<LogOpts, OmitOpts, ExtArgs>;
}
/**
 * ## Prisma Client
 *
 * Type-safe database client for TypeScript
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more AdminUsers
 * const adminUsers = await prisma.adminUser.findMany()
 * ```
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export interface PrismaClient<in LogOpts extends Prisma.LogLevel = never, in out OmitOpts extends Prisma.PrismaClientOptions['omit'] = undefined, in out ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['other'];
    };
    $on<V extends LogOpts>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;
    /**
     * Connect with the database
     */
    $connect(): runtime.Types.Utils.JsPromise<void>;
    /**
     * Disconnect from the database
     */
    $disconnect(): runtime.Types.Utils.JsPromise<void>;
    /**
       * Executes a prepared raw query and returns the number of affected rows.
       * @example
       * ```
       * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
       * ```
       *
       * Read more in our [docs](https://pris.ly/d/raw-queries).
       */
    $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;
    /**
     * Executes a raw query and returns the number of affected rows.
     * Susceptible to SQL injections, see documentation.
     * @example
     * ```
     * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
     * ```
     *
     * Read more in our [docs](https://pris.ly/d/raw-queries).
     */
    $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;
    /**
     * Performs a prepared raw query and returns the `SELECT` data.
     * @example
     * ```
     * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
     * ```
     *
     * Read more in our [docs](https://pris.ly/d/raw-queries).
     */
    $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;
    /**
     * Performs a raw query and returns the `SELECT` data.
     * Susceptible to SQL injections, see documentation.
     * @example
     * ```
     * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
     * ```
     *
     * Read more in our [docs](https://pris.ly/d/raw-queries).
     */
    $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;
    /**
     * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
     * @example
     * ```
     * const [george, bob, alice] = await prisma.$transaction([
     *   prisma.user.create({ data: { name: 'George' } }),
     *   prisma.user.create({ data: { name: 'Bob' } }),
     *   prisma.user.create({ data: { name: 'Alice' } }),
     * ])
     * ```
     *
     * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
     */
    $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: {
        maxWait?: number;
        timeout?: number;
        isolationLevel?: Prisma.TransactionIsolationLevel;
    }): runtime.Types.Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>;
    $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => runtime.Types.Utils.JsPromise<R>, options?: {
        maxWait?: number;
        timeout?: number;
        isolationLevel?: Prisma.TransactionIsolationLevel;
    }): runtime.Types.Utils.JsPromise<R>;
    $extends: runtime.Types.Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<OmitOpts>, ExtArgs, runtime.Types.Utils.Call<Prisma.TypeMapCb<OmitOpts>, {
        extArgs: ExtArgs;
    }>>;
    /**
 * `prisma.adminUser`: Exposes CRUD operations for the **AdminUser** model.
  * Example usage:
  * ```ts
  * // Fetch zero or more AdminUsers
  * const adminUsers = await prisma.adminUser.findMany()
  * ```
  */
    get adminUser(): Prisma.AdminUserDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.customer`: Exposes CRUD operations for the **Customer** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Customers
      * const customers = await prisma.customer.findMany()
      * ```
      */
    get customer(): Prisma.CustomerDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.category`: Exposes CRUD operations for the **Category** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Categories
      * const categories = await prisma.category.findMany()
      * ```
      */
    get category(): Prisma.CategoryDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.lehenga`: Exposes CRUD operations for the **Lehenga** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Lehengas
      * const lehengas = await prisma.lehenga.findMany()
      * ```
      */
    get lehenga(): Prisma.LehengaDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.lehengaSize`: Exposes CRUD operations for the **LehengaSize** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more LehengaSizes
      * const lehengaSizes = await prisma.lehengaSize.findMany()
      * ```
      */
    get lehengaSize(): Prisma.LehengaSizeDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.lehengaImage`: Exposes CRUD operations for the **LehengaImage** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more LehengaImages
      * const lehengaImages = await prisma.lehengaImage.findMany()
      * ```
      */
    get lehengaImage(): Prisma.LehengaImageDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.jewellery`: Exposes CRUD operations for the **Jewellery** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Jewelleries
      * const jewelleries = await prisma.jewellery.findMany()
      * ```
      */
    get jewellery(): Prisma.JewelleryDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.jewelleryImage`: Exposes CRUD operations for the **JewelleryImage** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more JewelleryImages
      * const jewelleryImages = await prisma.jewelleryImage.findMany()
      * ```
      */
    get jewelleryImage(): Prisma.JewelleryImageDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.storeLocation`: Exposes CRUD operations for the **StoreLocation** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more StoreLocations
      * const storeLocations = await prisma.storeLocation.findMany()
      * ```
      */
    get storeLocation(): Prisma.StoreLocationDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.rentalOrder`: Exposes CRUD operations for the **RentalOrder** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more RentalOrders
      * const rentalOrders = await prisma.rentalOrder.findMany()
      * ```
      */
    get rentalOrder(): Prisma.RentalOrderDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.checkoutPaymentAttempt`: Exposes CRUD operations for the **CheckoutPaymentAttempt** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more CheckoutPaymentAttempts
      * const checkoutPaymentAttempts = await prisma.checkoutPaymentAttempt.findMany()
      * ```
      */
    get checkoutPaymentAttempt(): Prisma.CheckoutPaymentAttemptDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.rentalOrderItem`: Exposes CRUD operations for the **RentalOrderItem** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more RentalOrderItems
      * const rentalOrderItems = await prisma.rentalOrderItem.findMany()
      * ```
      */
    get rentalOrderItem(): Prisma.RentalOrderItemDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.invoice`: Exposes CRUD operations for the **Invoice** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Invoices
      * const invoices = await prisma.invoice.findMany()
      * ```
      */
    get invoice(): Prisma.InvoiceDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.invoiceLineItem`: Exposes CRUD operations for the **InvoiceLineItem** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more InvoiceLineItems
      * const invoiceLineItems = await prisma.invoiceLineItem.findMany()
      * ```
      */
    get invoiceLineItem(): Prisma.InvoiceLineItemDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.productReview`: Exposes CRUD operations for the **ProductReview** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more ProductReviews
      * const productReviews = await prisma.productReview.findMany()
      * ```
      */
    get productReview(): Prisma.ProductReviewDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
}
export declare function getPrismaClientClass(): PrismaClientConstructor;
//# sourceMappingURL=class.d.ts.map