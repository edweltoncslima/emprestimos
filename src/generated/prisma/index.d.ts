
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Cliente
 * 
 */
export type Cliente = $Result.DefaultSelection<Prisma.$ClientePayload>
/**
 * Model Caixa
 * 
 */
export type Caixa = $Result.DefaultSelection<Prisma.$CaixaPayload>
/**
 * Model MovimentacaoCaixa
 * 
 */
export type MovimentacaoCaixa = $Result.DefaultSelection<Prisma.$MovimentacaoCaixaPayload>
/**
 * Model Emprestimo
 * 
 */
export type Emprestimo = $Result.DefaultSelection<Prisma.$EmprestimoPayload>
/**
 * Model Pagamento
 * 
 */
export type Pagamento = $Result.DefaultSelection<Prisma.$PagamentoPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const StatusEmprestimo: {
  ATIVO: 'ATIVO',
  QUITADO: 'QUITADO',
  EM_ATRASO: 'EM_ATRASO',
  CANCELADO: 'CANCELADO'
};

export type StatusEmprestimo = (typeof StatusEmprestimo)[keyof typeof StatusEmprestimo]


export const StatusPagamento: {
  PENDENTE: 'PENDENTE',
  PAGO: 'PAGO',
  EM_ATRASO: 'EM_ATRASO',
  PARCIAL: 'PARCIAL'
};

export type StatusPagamento = (typeof StatusPagamento)[keyof typeof StatusPagamento]


export const FormaPagamento: {
  DINHEIRO: 'DINHEIRO',
  PIX: 'PIX',
  CARTAO_CREDITO: 'CARTAO_CREDITO',
  CARTAO_DEBITO: 'CARTAO_DEBITO',
  TRANSFERENCIA: 'TRANSFERENCIA',
  BOLETO: 'BOLETO'
};

export type FormaPagamento = (typeof FormaPagamento)[keyof typeof FormaPagamento]


export const TipoMovimentacao: {
  ENTRADA: 'ENTRADA',
  SAIDA: 'SAIDA'
};

export type TipoMovimentacao = (typeof TipoMovimentacao)[keyof typeof TipoMovimentacao]

}

export type StatusEmprestimo = $Enums.StatusEmprestimo

export const StatusEmprestimo: typeof $Enums.StatusEmprestimo

export type StatusPagamento = $Enums.StatusPagamento

export const StatusPagamento: typeof $Enums.StatusPagamento

export type FormaPagamento = $Enums.FormaPagamento

export const FormaPagamento: typeof $Enums.FormaPagamento

export type TipoMovimentacao = $Enums.TipoMovimentacao

export const TipoMovimentacao: typeof $Enums.TipoMovimentacao

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.cliente`: Exposes CRUD operations for the **Cliente** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Clientes
    * const clientes = await prisma.cliente.findMany()
    * ```
    */
  get cliente(): Prisma.ClienteDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.caixa`: Exposes CRUD operations for the **Caixa** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Caixas
    * const caixas = await prisma.caixa.findMany()
    * ```
    */
  get caixa(): Prisma.CaixaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.movimentacaoCaixa`: Exposes CRUD operations for the **MovimentacaoCaixa** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MovimentacaoCaixas
    * const movimentacaoCaixas = await prisma.movimentacaoCaixa.findMany()
    * ```
    */
  get movimentacaoCaixa(): Prisma.MovimentacaoCaixaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.emprestimo`: Exposes CRUD operations for the **Emprestimo** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Emprestimos
    * const emprestimos = await prisma.emprestimo.findMany()
    * ```
    */
  get emprestimo(): Prisma.EmprestimoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.pagamento`: Exposes CRUD operations for the **Pagamento** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Pagamentos
    * const pagamentos = await prisma.pagamento.findMany()
    * ```
    */
  get pagamento(): Prisma.PagamentoDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.10.1
   * Query Engine version: 9b628578b3b7cae625e8c927178f15a170e74a9c
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Cliente: 'Cliente',
    Caixa: 'Caixa',
    MovimentacaoCaixa: 'MovimentacaoCaixa',
    Emprestimo: 'Emprestimo',
    Pagamento: 'Pagamento'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "cliente" | "caixa" | "movimentacaoCaixa" | "emprestimo" | "pagamento"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Cliente: {
        payload: Prisma.$ClientePayload<ExtArgs>
        fields: Prisma.ClienteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ClienteFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ClienteFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>
          }
          findFirst: {
            args: Prisma.ClienteFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ClienteFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>
          }
          findMany: {
            args: Prisma.ClienteFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>[]
          }
          create: {
            args: Prisma.ClienteCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>
          }
          createMany: {
            args: Prisma.ClienteCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ClienteCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>[]
          }
          delete: {
            args: Prisma.ClienteDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>
          }
          update: {
            args: Prisma.ClienteUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>
          }
          deleteMany: {
            args: Prisma.ClienteDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ClienteUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ClienteUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>[]
          }
          upsert: {
            args: Prisma.ClienteUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>
          }
          aggregate: {
            args: Prisma.ClienteAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCliente>
          }
          groupBy: {
            args: Prisma.ClienteGroupByArgs<ExtArgs>
            result: $Utils.Optional<ClienteGroupByOutputType>[]
          }
          count: {
            args: Prisma.ClienteCountArgs<ExtArgs>
            result: $Utils.Optional<ClienteCountAggregateOutputType> | number
          }
        }
      }
      Caixa: {
        payload: Prisma.$CaixaPayload<ExtArgs>
        fields: Prisma.CaixaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CaixaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CaixaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CaixaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CaixaPayload>
          }
          findFirst: {
            args: Prisma.CaixaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CaixaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CaixaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CaixaPayload>
          }
          findMany: {
            args: Prisma.CaixaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CaixaPayload>[]
          }
          create: {
            args: Prisma.CaixaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CaixaPayload>
          }
          createMany: {
            args: Prisma.CaixaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CaixaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CaixaPayload>[]
          }
          delete: {
            args: Prisma.CaixaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CaixaPayload>
          }
          update: {
            args: Prisma.CaixaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CaixaPayload>
          }
          deleteMany: {
            args: Prisma.CaixaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CaixaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CaixaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CaixaPayload>[]
          }
          upsert: {
            args: Prisma.CaixaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CaixaPayload>
          }
          aggregate: {
            args: Prisma.CaixaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCaixa>
          }
          groupBy: {
            args: Prisma.CaixaGroupByArgs<ExtArgs>
            result: $Utils.Optional<CaixaGroupByOutputType>[]
          }
          count: {
            args: Prisma.CaixaCountArgs<ExtArgs>
            result: $Utils.Optional<CaixaCountAggregateOutputType> | number
          }
        }
      }
      MovimentacaoCaixa: {
        payload: Prisma.$MovimentacaoCaixaPayload<ExtArgs>
        fields: Prisma.MovimentacaoCaixaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MovimentacaoCaixaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MovimentacaoCaixaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MovimentacaoCaixaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MovimentacaoCaixaPayload>
          }
          findFirst: {
            args: Prisma.MovimentacaoCaixaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MovimentacaoCaixaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MovimentacaoCaixaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MovimentacaoCaixaPayload>
          }
          findMany: {
            args: Prisma.MovimentacaoCaixaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MovimentacaoCaixaPayload>[]
          }
          create: {
            args: Prisma.MovimentacaoCaixaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MovimentacaoCaixaPayload>
          }
          createMany: {
            args: Prisma.MovimentacaoCaixaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MovimentacaoCaixaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MovimentacaoCaixaPayload>[]
          }
          delete: {
            args: Prisma.MovimentacaoCaixaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MovimentacaoCaixaPayload>
          }
          update: {
            args: Prisma.MovimentacaoCaixaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MovimentacaoCaixaPayload>
          }
          deleteMany: {
            args: Prisma.MovimentacaoCaixaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MovimentacaoCaixaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MovimentacaoCaixaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MovimentacaoCaixaPayload>[]
          }
          upsert: {
            args: Prisma.MovimentacaoCaixaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MovimentacaoCaixaPayload>
          }
          aggregate: {
            args: Prisma.MovimentacaoCaixaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMovimentacaoCaixa>
          }
          groupBy: {
            args: Prisma.MovimentacaoCaixaGroupByArgs<ExtArgs>
            result: $Utils.Optional<MovimentacaoCaixaGroupByOutputType>[]
          }
          count: {
            args: Prisma.MovimentacaoCaixaCountArgs<ExtArgs>
            result: $Utils.Optional<MovimentacaoCaixaCountAggregateOutputType> | number
          }
        }
      }
      Emprestimo: {
        payload: Prisma.$EmprestimoPayload<ExtArgs>
        fields: Prisma.EmprestimoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EmprestimoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmprestimoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EmprestimoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmprestimoPayload>
          }
          findFirst: {
            args: Prisma.EmprestimoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmprestimoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EmprestimoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmprestimoPayload>
          }
          findMany: {
            args: Prisma.EmprestimoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmprestimoPayload>[]
          }
          create: {
            args: Prisma.EmprestimoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmprestimoPayload>
          }
          createMany: {
            args: Prisma.EmprestimoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EmprestimoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmprestimoPayload>[]
          }
          delete: {
            args: Prisma.EmprestimoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmprestimoPayload>
          }
          update: {
            args: Prisma.EmprestimoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmprestimoPayload>
          }
          deleteMany: {
            args: Prisma.EmprestimoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EmprestimoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EmprestimoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmprestimoPayload>[]
          }
          upsert: {
            args: Prisma.EmprestimoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmprestimoPayload>
          }
          aggregate: {
            args: Prisma.EmprestimoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEmprestimo>
          }
          groupBy: {
            args: Prisma.EmprestimoGroupByArgs<ExtArgs>
            result: $Utils.Optional<EmprestimoGroupByOutputType>[]
          }
          count: {
            args: Prisma.EmprestimoCountArgs<ExtArgs>
            result: $Utils.Optional<EmprestimoCountAggregateOutputType> | number
          }
        }
      }
      Pagamento: {
        payload: Prisma.$PagamentoPayload<ExtArgs>
        fields: Prisma.PagamentoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PagamentoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PagamentoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PagamentoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PagamentoPayload>
          }
          findFirst: {
            args: Prisma.PagamentoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PagamentoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PagamentoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PagamentoPayload>
          }
          findMany: {
            args: Prisma.PagamentoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PagamentoPayload>[]
          }
          create: {
            args: Prisma.PagamentoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PagamentoPayload>
          }
          createMany: {
            args: Prisma.PagamentoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PagamentoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PagamentoPayload>[]
          }
          delete: {
            args: Prisma.PagamentoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PagamentoPayload>
          }
          update: {
            args: Prisma.PagamentoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PagamentoPayload>
          }
          deleteMany: {
            args: Prisma.PagamentoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PagamentoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PagamentoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PagamentoPayload>[]
          }
          upsert: {
            args: Prisma.PagamentoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PagamentoPayload>
          }
          aggregate: {
            args: Prisma.PagamentoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePagamento>
          }
          groupBy: {
            args: Prisma.PagamentoGroupByArgs<ExtArgs>
            result: $Utils.Optional<PagamentoGroupByOutputType>[]
          }
          count: {
            args: Prisma.PagamentoCountArgs<ExtArgs>
            result: $Utils.Optional<PagamentoCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    cliente?: ClienteOmit
    caixa?: CaixaOmit
    movimentacaoCaixa?: MovimentacaoCaixaOmit
    emprestimo?: EmprestimoOmit
    pagamento?: PagamentoOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    clientes: number
    emprestimos: number
    pagamentos: number
    caixa: number
    movimentacoes: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    clientes?: boolean | UserCountOutputTypeCountClientesArgs
    emprestimos?: boolean | UserCountOutputTypeCountEmprestimosArgs
    pagamentos?: boolean | UserCountOutputTypeCountPagamentosArgs
    caixa?: boolean | UserCountOutputTypeCountCaixaArgs
    movimentacoes?: boolean | UserCountOutputTypeCountMovimentacoesArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountClientesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClienteWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountEmprestimosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EmprestimoWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPagamentosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PagamentoWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCaixaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CaixaWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountMovimentacoesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MovimentacaoCaixaWhereInput
  }


  /**
   * Count Type ClienteCountOutputType
   */

  export type ClienteCountOutputType = {
    emprestimos: number
  }

  export type ClienteCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    emprestimos?: boolean | ClienteCountOutputTypeCountEmprestimosArgs
  }

  // Custom InputTypes
  /**
   * ClienteCountOutputType without action
   */
  export type ClienteCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClienteCountOutputType
     */
    select?: ClienteCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ClienteCountOutputType without action
   */
  export type ClienteCountOutputTypeCountEmprestimosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EmprestimoWhereInput
  }


  /**
   * Count Type EmprestimoCountOutputType
   */

  export type EmprestimoCountOutputType = {
    pagamentos: number
    movimentacoes: number
  }

  export type EmprestimoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pagamentos?: boolean | EmprestimoCountOutputTypeCountPagamentosArgs
    movimentacoes?: boolean | EmprestimoCountOutputTypeCountMovimentacoesArgs
  }

  // Custom InputTypes
  /**
   * EmprestimoCountOutputType without action
   */
  export type EmprestimoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmprestimoCountOutputType
     */
    select?: EmprestimoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * EmprestimoCountOutputType without action
   */
  export type EmprestimoCountOutputTypeCountPagamentosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PagamentoWhereInput
  }

  /**
   * EmprestimoCountOutputType without action
   */
  export type EmprestimoCountOutputTypeCountMovimentacoesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MovimentacaoCaixaWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    clerkId: string | null
    email: string | null
    firstName: string | null
    lastName: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    clerkId: string | null
    email: string | null
    firstName: string | null
    lastName: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    clerkId: number
    email: number
    firstName: number
    lastName: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    clerkId?: true
    email?: true
    firstName?: true
    lastName?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    clerkId?: true
    email?: true
    firstName?: true
    lastName?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    clerkId?: true
    email?: true
    firstName?: true
    lastName?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    clerkId: string
    email: string
    firstName: string | null
    lastName: string | null
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clerkId?: boolean
    email?: boolean
    firstName?: boolean
    lastName?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    clientes?: boolean | User$clientesArgs<ExtArgs>
    emprestimos?: boolean | User$emprestimosArgs<ExtArgs>
    pagamentos?: boolean | User$pagamentosArgs<ExtArgs>
    caixa?: boolean | User$caixaArgs<ExtArgs>
    movimentacoes?: boolean | User$movimentacoesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clerkId?: boolean
    email?: boolean
    firstName?: boolean
    lastName?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clerkId?: boolean
    email?: boolean
    firstName?: boolean
    lastName?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    clerkId?: boolean
    email?: boolean
    firstName?: boolean
    lastName?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "clerkId" | "email" | "firstName" | "lastName" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    clientes?: boolean | User$clientesArgs<ExtArgs>
    emprestimos?: boolean | User$emprestimosArgs<ExtArgs>
    pagamentos?: boolean | User$pagamentosArgs<ExtArgs>
    caixa?: boolean | User$caixaArgs<ExtArgs>
    movimentacoes?: boolean | User$movimentacoesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      clientes: Prisma.$ClientePayload<ExtArgs>[]
      emprestimos: Prisma.$EmprestimoPayload<ExtArgs>[]
      pagamentos: Prisma.$PagamentoPayload<ExtArgs>[]
      caixa: Prisma.$CaixaPayload<ExtArgs>[]
      movimentacoes: Prisma.$MovimentacaoCaixaPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      clerkId: string
      email: string
      firstName: string | null
      lastName: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
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
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    clientes<T extends User$clientesArgs<ExtArgs> = {}>(args?: Subset<T, User$clientesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    emprestimos<T extends User$emprestimosArgs<ExtArgs> = {}>(args?: Subset<T, User$emprestimosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmprestimoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    pagamentos<T extends User$pagamentosArgs<ExtArgs> = {}>(args?: Subset<T, User$pagamentosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PagamentoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    caixa<T extends User$caixaArgs<ExtArgs> = {}>(args?: Subset<T, User$caixaArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CaixaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    movimentacoes<T extends User$movimentacoesArgs<ExtArgs> = {}>(args?: Subset<T, User$movimentacoesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MovimentacaoCaixaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly clerkId: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly firstName: FieldRef<"User", 'String'>
    readonly lastName: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.clientes
   */
  export type User$clientesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    where?: ClienteWhereInput
    orderBy?: ClienteOrderByWithRelationInput | ClienteOrderByWithRelationInput[]
    cursor?: ClienteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ClienteScalarFieldEnum | ClienteScalarFieldEnum[]
  }

  /**
   * User.emprestimos
   */
  export type User$emprestimosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Emprestimo
     */
    select?: EmprestimoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Emprestimo
     */
    omit?: EmprestimoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmprestimoInclude<ExtArgs> | null
    where?: EmprestimoWhereInput
    orderBy?: EmprestimoOrderByWithRelationInput | EmprestimoOrderByWithRelationInput[]
    cursor?: EmprestimoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EmprestimoScalarFieldEnum | EmprestimoScalarFieldEnum[]
  }

  /**
   * User.pagamentos
   */
  export type User$pagamentosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pagamento
     */
    select?: PagamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pagamento
     */
    omit?: PagamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PagamentoInclude<ExtArgs> | null
    where?: PagamentoWhereInput
    orderBy?: PagamentoOrderByWithRelationInput | PagamentoOrderByWithRelationInput[]
    cursor?: PagamentoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PagamentoScalarFieldEnum | PagamentoScalarFieldEnum[]
  }

  /**
   * User.caixa
   */
  export type User$caixaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Caixa
     */
    select?: CaixaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Caixa
     */
    omit?: CaixaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CaixaInclude<ExtArgs> | null
    where?: CaixaWhereInput
    orderBy?: CaixaOrderByWithRelationInput | CaixaOrderByWithRelationInput[]
    cursor?: CaixaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CaixaScalarFieldEnum | CaixaScalarFieldEnum[]
  }

  /**
   * User.movimentacoes
   */
  export type User$movimentacoesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MovimentacaoCaixa
     */
    select?: MovimentacaoCaixaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MovimentacaoCaixa
     */
    omit?: MovimentacaoCaixaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovimentacaoCaixaInclude<ExtArgs> | null
    where?: MovimentacaoCaixaWhereInput
    orderBy?: MovimentacaoCaixaOrderByWithRelationInput | MovimentacaoCaixaOrderByWithRelationInput[]
    cursor?: MovimentacaoCaixaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MovimentacaoCaixaScalarFieldEnum | MovimentacaoCaixaScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Cliente
   */

  export type AggregateCliente = {
    _count: ClienteCountAggregateOutputType | null
    _min: ClienteMinAggregateOutputType | null
    _max: ClienteMaxAggregateOutputType | null
  }

  export type ClienteMinAggregateOutputType = {
    id: string | null
    nome: string | null
    email: string | null
    telefone: string | null
    cpf: string | null
    endereco: string | null
    cidade: string | null
    estado: string | null
    cep: string | null
    dataNascimento: Date | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: string | null
  }

  export type ClienteMaxAggregateOutputType = {
    id: string | null
    nome: string | null
    email: string | null
    telefone: string | null
    cpf: string | null
    endereco: string | null
    cidade: string | null
    estado: string | null
    cep: string | null
    dataNascimento: Date | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: string | null
  }

  export type ClienteCountAggregateOutputType = {
    id: number
    nome: number
    email: number
    telefone: number
    cpf: number
    endereco: number
    cidade: number
    estado: number
    cep: number
    dataNascimento: number
    createdAt: number
    updatedAt: number
    userId: number
    _all: number
  }


  export type ClienteMinAggregateInputType = {
    id?: true
    nome?: true
    email?: true
    telefone?: true
    cpf?: true
    endereco?: true
    cidade?: true
    estado?: true
    cep?: true
    dataNascimento?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
  }

  export type ClienteMaxAggregateInputType = {
    id?: true
    nome?: true
    email?: true
    telefone?: true
    cpf?: true
    endereco?: true
    cidade?: true
    estado?: true
    cep?: true
    dataNascimento?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
  }

  export type ClienteCountAggregateInputType = {
    id?: true
    nome?: true
    email?: true
    telefone?: true
    cpf?: true
    endereco?: true
    cidade?: true
    estado?: true
    cep?: true
    dataNascimento?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    _all?: true
  }

  export type ClienteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Cliente to aggregate.
     */
    where?: ClienteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clientes to fetch.
     */
    orderBy?: ClienteOrderByWithRelationInput | ClienteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ClienteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clientes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Clientes
    **/
    _count?: true | ClienteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ClienteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ClienteMaxAggregateInputType
  }

  export type GetClienteAggregateType<T extends ClienteAggregateArgs> = {
        [P in keyof T & keyof AggregateCliente]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCliente[P]>
      : GetScalarType<T[P], AggregateCliente[P]>
  }




  export type ClienteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClienteWhereInput
    orderBy?: ClienteOrderByWithAggregationInput | ClienteOrderByWithAggregationInput[]
    by: ClienteScalarFieldEnum[] | ClienteScalarFieldEnum
    having?: ClienteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ClienteCountAggregateInputType | true
    _min?: ClienteMinAggregateInputType
    _max?: ClienteMaxAggregateInputType
  }

  export type ClienteGroupByOutputType = {
    id: string
    nome: string
    email: string
    telefone: string | null
    cpf: string
    endereco: string | null
    cidade: string | null
    estado: string | null
    cep: string | null
    dataNascimento: Date | null
    createdAt: Date
    updatedAt: Date
    userId: string
    _count: ClienteCountAggregateOutputType | null
    _min: ClienteMinAggregateOutputType | null
    _max: ClienteMaxAggregateOutputType | null
  }

  type GetClienteGroupByPayload<T extends ClienteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ClienteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ClienteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ClienteGroupByOutputType[P]>
            : GetScalarType<T[P], ClienteGroupByOutputType[P]>
        }
      >
    >


  export type ClienteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    email?: boolean
    telefone?: boolean
    cpf?: boolean
    endereco?: boolean
    cidade?: boolean
    estado?: boolean
    cep?: boolean
    dataNascimento?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    emprestimos?: boolean | Cliente$emprestimosArgs<ExtArgs>
    _count?: boolean | ClienteCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cliente"]>

  export type ClienteSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    email?: boolean
    telefone?: boolean
    cpf?: boolean
    endereco?: boolean
    cidade?: boolean
    estado?: boolean
    cep?: boolean
    dataNascimento?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cliente"]>

  export type ClienteSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    email?: boolean
    telefone?: boolean
    cpf?: boolean
    endereco?: boolean
    cidade?: boolean
    estado?: boolean
    cep?: boolean
    dataNascimento?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cliente"]>

  export type ClienteSelectScalar = {
    id?: boolean
    nome?: boolean
    email?: boolean
    telefone?: boolean
    cpf?: boolean
    endereco?: boolean
    cidade?: boolean
    estado?: boolean
    cep?: boolean
    dataNascimento?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
  }

  export type ClienteOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome" | "email" | "telefone" | "cpf" | "endereco" | "cidade" | "estado" | "cep" | "dataNascimento" | "createdAt" | "updatedAt" | "userId", ExtArgs["result"]["cliente"]>
  export type ClienteInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    emprestimos?: boolean | Cliente$emprestimosArgs<ExtArgs>
    _count?: boolean | ClienteCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ClienteIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ClienteIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ClientePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Cliente"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      emprestimos: Prisma.$EmprestimoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      nome: string
      email: string
      telefone: string | null
      cpf: string
      endereco: string | null
      cidade: string | null
      estado: string | null
      cep: string | null
      dataNascimento: Date | null
      createdAt: Date
      updatedAt: Date
      userId: string
    }, ExtArgs["result"]["cliente"]>
    composites: {}
  }

  type ClienteGetPayload<S extends boolean | null | undefined | ClienteDefaultArgs> = $Result.GetResult<Prisma.$ClientePayload, S>

  type ClienteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ClienteFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ClienteCountAggregateInputType | true
    }

  export interface ClienteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Cliente'], meta: { name: 'Cliente' } }
    /**
     * Find zero or one Cliente that matches the filter.
     * @param {ClienteFindUniqueArgs} args - Arguments to find a Cliente
     * @example
     * // Get one Cliente
     * const cliente = await prisma.cliente.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ClienteFindUniqueArgs>(args: SelectSubset<T, ClienteFindUniqueArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Cliente that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ClienteFindUniqueOrThrowArgs} args - Arguments to find a Cliente
     * @example
     * // Get one Cliente
     * const cliente = await prisma.cliente.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ClienteFindUniqueOrThrowArgs>(args: SelectSubset<T, ClienteFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cliente that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClienteFindFirstArgs} args - Arguments to find a Cliente
     * @example
     * // Get one Cliente
     * const cliente = await prisma.cliente.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ClienteFindFirstArgs>(args?: SelectSubset<T, ClienteFindFirstArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cliente that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClienteFindFirstOrThrowArgs} args - Arguments to find a Cliente
     * @example
     * // Get one Cliente
     * const cliente = await prisma.cliente.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ClienteFindFirstOrThrowArgs>(args?: SelectSubset<T, ClienteFindFirstOrThrowArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Clientes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClienteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Clientes
     * const clientes = await prisma.cliente.findMany()
     * 
     * // Get first 10 Clientes
     * const clientes = await prisma.cliente.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const clienteWithIdOnly = await prisma.cliente.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ClienteFindManyArgs>(args?: SelectSubset<T, ClienteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Cliente.
     * @param {ClienteCreateArgs} args - Arguments to create a Cliente.
     * @example
     * // Create one Cliente
     * const Cliente = await prisma.cliente.create({
     *   data: {
     *     // ... data to create a Cliente
     *   }
     * })
     * 
     */
    create<T extends ClienteCreateArgs>(args: SelectSubset<T, ClienteCreateArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Clientes.
     * @param {ClienteCreateManyArgs} args - Arguments to create many Clientes.
     * @example
     * // Create many Clientes
     * const cliente = await prisma.cliente.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ClienteCreateManyArgs>(args?: SelectSubset<T, ClienteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Clientes and returns the data saved in the database.
     * @param {ClienteCreateManyAndReturnArgs} args - Arguments to create many Clientes.
     * @example
     * // Create many Clientes
     * const cliente = await prisma.cliente.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Clientes and only return the `id`
     * const clienteWithIdOnly = await prisma.cliente.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ClienteCreateManyAndReturnArgs>(args?: SelectSubset<T, ClienteCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Cliente.
     * @param {ClienteDeleteArgs} args - Arguments to delete one Cliente.
     * @example
     * // Delete one Cliente
     * const Cliente = await prisma.cliente.delete({
     *   where: {
     *     // ... filter to delete one Cliente
     *   }
     * })
     * 
     */
    delete<T extends ClienteDeleteArgs>(args: SelectSubset<T, ClienteDeleteArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Cliente.
     * @param {ClienteUpdateArgs} args - Arguments to update one Cliente.
     * @example
     * // Update one Cliente
     * const cliente = await prisma.cliente.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ClienteUpdateArgs>(args: SelectSubset<T, ClienteUpdateArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Clientes.
     * @param {ClienteDeleteManyArgs} args - Arguments to filter Clientes to delete.
     * @example
     * // Delete a few Clientes
     * const { count } = await prisma.cliente.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ClienteDeleteManyArgs>(args?: SelectSubset<T, ClienteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Clientes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClienteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Clientes
     * const cliente = await prisma.cliente.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ClienteUpdateManyArgs>(args: SelectSubset<T, ClienteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Clientes and returns the data updated in the database.
     * @param {ClienteUpdateManyAndReturnArgs} args - Arguments to update many Clientes.
     * @example
     * // Update many Clientes
     * const cliente = await prisma.cliente.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Clientes and only return the `id`
     * const clienteWithIdOnly = await prisma.cliente.updateManyAndReturn({
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
    updateManyAndReturn<T extends ClienteUpdateManyAndReturnArgs>(args: SelectSubset<T, ClienteUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Cliente.
     * @param {ClienteUpsertArgs} args - Arguments to update or create a Cliente.
     * @example
     * // Update or create a Cliente
     * const cliente = await prisma.cliente.upsert({
     *   create: {
     *     // ... data to create a Cliente
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Cliente we want to update
     *   }
     * })
     */
    upsert<T extends ClienteUpsertArgs>(args: SelectSubset<T, ClienteUpsertArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Clientes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClienteCountArgs} args - Arguments to filter Clientes to count.
     * @example
     * // Count the number of Clientes
     * const count = await prisma.cliente.count({
     *   where: {
     *     // ... the filter for the Clientes we want to count
     *   }
     * })
    **/
    count<T extends ClienteCountArgs>(
      args?: Subset<T, ClienteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ClienteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Cliente.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClienteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ClienteAggregateArgs>(args: Subset<T, ClienteAggregateArgs>): Prisma.PrismaPromise<GetClienteAggregateType<T>>

    /**
     * Group by Cliente.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClienteGroupByArgs} args - Group by arguments.
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
    groupBy<
      T extends ClienteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ClienteGroupByArgs['orderBy'] }
        : { orderBy?: ClienteGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ClienteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetClienteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Cliente model
   */
  readonly fields: ClienteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Cliente.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ClienteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    emprestimos<T extends Cliente$emprestimosArgs<ExtArgs> = {}>(args?: Subset<T, Cliente$emprestimosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmprestimoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Cliente model
   */
  interface ClienteFieldRefs {
    readonly id: FieldRef<"Cliente", 'String'>
    readonly nome: FieldRef<"Cliente", 'String'>
    readonly email: FieldRef<"Cliente", 'String'>
    readonly telefone: FieldRef<"Cliente", 'String'>
    readonly cpf: FieldRef<"Cliente", 'String'>
    readonly endereco: FieldRef<"Cliente", 'String'>
    readonly cidade: FieldRef<"Cliente", 'String'>
    readonly estado: FieldRef<"Cliente", 'String'>
    readonly cep: FieldRef<"Cliente", 'String'>
    readonly dataNascimento: FieldRef<"Cliente", 'DateTime'>
    readonly createdAt: FieldRef<"Cliente", 'DateTime'>
    readonly updatedAt: FieldRef<"Cliente", 'DateTime'>
    readonly userId: FieldRef<"Cliente", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Cliente findUnique
   */
  export type ClienteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * Filter, which Cliente to fetch.
     */
    where: ClienteWhereUniqueInput
  }

  /**
   * Cliente findUniqueOrThrow
   */
  export type ClienteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * Filter, which Cliente to fetch.
     */
    where: ClienteWhereUniqueInput
  }

  /**
   * Cliente findFirst
   */
  export type ClienteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * Filter, which Cliente to fetch.
     */
    where?: ClienteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clientes to fetch.
     */
    orderBy?: ClienteOrderByWithRelationInput | ClienteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Clientes.
     */
    cursor?: ClienteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clientes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Clientes.
     */
    distinct?: ClienteScalarFieldEnum | ClienteScalarFieldEnum[]
  }

  /**
   * Cliente findFirstOrThrow
   */
  export type ClienteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * Filter, which Cliente to fetch.
     */
    where?: ClienteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clientes to fetch.
     */
    orderBy?: ClienteOrderByWithRelationInput | ClienteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Clientes.
     */
    cursor?: ClienteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clientes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Clientes.
     */
    distinct?: ClienteScalarFieldEnum | ClienteScalarFieldEnum[]
  }

  /**
   * Cliente findMany
   */
  export type ClienteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * Filter, which Clientes to fetch.
     */
    where?: ClienteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clientes to fetch.
     */
    orderBy?: ClienteOrderByWithRelationInput | ClienteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Clientes.
     */
    cursor?: ClienteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clientes.
     */
    skip?: number
    distinct?: ClienteScalarFieldEnum | ClienteScalarFieldEnum[]
  }

  /**
   * Cliente create
   */
  export type ClienteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * The data needed to create a Cliente.
     */
    data: XOR<ClienteCreateInput, ClienteUncheckedCreateInput>
  }

  /**
   * Cliente createMany
   */
  export type ClienteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Clientes.
     */
    data: ClienteCreateManyInput | ClienteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Cliente createManyAndReturn
   */
  export type ClienteCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * The data used to create many Clientes.
     */
    data: ClienteCreateManyInput | ClienteCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Cliente update
   */
  export type ClienteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * The data needed to update a Cliente.
     */
    data: XOR<ClienteUpdateInput, ClienteUncheckedUpdateInput>
    /**
     * Choose, which Cliente to update.
     */
    where: ClienteWhereUniqueInput
  }

  /**
   * Cliente updateMany
   */
  export type ClienteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Clientes.
     */
    data: XOR<ClienteUpdateManyMutationInput, ClienteUncheckedUpdateManyInput>
    /**
     * Filter which Clientes to update
     */
    where?: ClienteWhereInput
    /**
     * Limit how many Clientes to update.
     */
    limit?: number
  }

  /**
   * Cliente updateManyAndReturn
   */
  export type ClienteUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * The data used to update Clientes.
     */
    data: XOR<ClienteUpdateManyMutationInput, ClienteUncheckedUpdateManyInput>
    /**
     * Filter which Clientes to update
     */
    where?: ClienteWhereInput
    /**
     * Limit how many Clientes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Cliente upsert
   */
  export type ClienteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * The filter to search for the Cliente to update in case it exists.
     */
    where: ClienteWhereUniqueInput
    /**
     * In case the Cliente found by the `where` argument doesn't exist, create a new Cliente with this data.
     */
    create: XOR<ClienteCreateInput, ClienteUncheckedCreateInput>
    /**
     * In case the Cliente was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ClienteUpdateInput, ClienteUncheckedUpdateInput>
  }

  /**
   * Cliente delete
   */
  export type ClienteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * Filter which Cliente to delete.
     */
    where: ClienteWhereUniqueInput
  }

  /**
   * Cliente deleteMany
   */
  export type ClienteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Clientes to delete
     */
    where?: ClienteWhereInput
    /**
     * Limit how many Clientes to delete.
     */
    limit?: number
  }

  /**
   * Cliente.emprestimos
   */
  export type Cliente$emprestimosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Emprestimo
     */
    select?: EmprestimoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Emprestimo
     */
    omit?: EmprestimoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmprestimoInclude<ExtArgs> | null
    where?: EmprestimoWhereInput
    orderBy?: EmprestimoOrderByWithRelationInput | EmprestimoOrderByWithRelationInput[]
    cursor?: EmprestimoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EmprestimoScalarFieldEnum | EmprestimoScalarFieldEnum[]
  }

  /**
   * Cliente without action
   */
  export type ClienteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
  }


  /**
   * Model Caixa
   */

  export type AggregateCaixa = {
    _count: CaixaCountAggregateOutputType | null
    _avg: CaixaAvgAggregateOutputType | null
    _sum: CaixaSumAggregateOutputType | null
    _min: CaixaMinAggregateOutputType | null
    _max: CaixaMaxAggregateOutputType | null
  }

  export type CaixaAvgAggregateOutputType = {
    saldoInicial: Decimal | null
    saldoAtual: Decimal | null
  }

  export type CaixaSumAggregateOutputType = {
    saldoInicial: Decimal | null
    saldoAtual: Decimal | null
  }

  export type CaixaMinAggregateOutputType = {
    id: string | null
    saldoInicial: Decimal | null
    saldoAtual: Decimal | null
    dataInicial: Date | null
    observacoes: string | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: string | null
  }

  export type CaixaMaxAggregateOutputType = {
    id: string | null
    saldoInicial: Decimal | null
    saldoAtual: Decimal | null
    dataInicial: Date | null
    observacoes: string | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: string | null
  }

  export type CaixaCountAggregateOutputType = {
    id: number
    saldoInicial: number
    saldoAtual: number
    dataInicial: number
    observacoes: number
    createdAt: number
    updatedAt: number
    userId: number
    _all: number
  }


  export type CaixaAvgAggregateInputType = {
    saldoInicial?: true
    saldoAtual?: true
  }

  export type CaixaSumAggregateInputType = {
    saldoInicial?: true
    saldoAtual?: true
  }

  export type CaixaMinAggregateInputType = {
    id?: true
    saldoInicial?: true
    saldoAtual?: true
    dataInicial?: true
    observacoes?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
  }

  export type CaixaMaxAggregateInputType = {
    id?: true
    saldoInicial?: true
    saldoAtual?: true
    dataInicial?: true
    observacoes?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
  }

  export type CaixaCountAggregateInputType = {
    id?: true
    saldoInicial?: true
    saldoAtual?: true
    dataInicial?: true
    observacoes?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    _all?: true
  }

  export type CaixaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Caixa to aggregate.
     */
    where?: CaixaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Caixas to fetch.
     */
    orderBy?: CaixaOrderByWithRelationInput | CaixaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CaixaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Caixas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Caixas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Caixas
    **/
    _count?: true | CaixaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CaixaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CaixaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CaixaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CaixaMaxAggregateInputType
  }

  export type GetCaixaAggregateType<T extends CaixaAggregateArgs> = {
        [P in keyof T & keyof AggregateCaixa]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCaixa[P]>
      : GetScalarType<T[P], AggregateCaixa[P]>
  }




  export type CaixaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CaixaWhereInput
    orderBy?: CaixaOrderByWithAggregationInput | CaixaOrderByWithAggregationInput[]
    by: CaixaScalarFieldEnum[] | CaixaScalarFieldEnum
    having?: CaixaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CaixaCountAggregateInputType | true
    _avg?: CaixaAvgAggregateInputType
    _sum?: CaixaSumAggregateInputType
    _min?: CaixaMinAggregateInputType
    _max?: CaixaMaxAggregateInputType
  }

  export type CaixaGroupByOutputType = {
    id: string
    saldoInicial: Decimal
    saldoAtual: Decimal
    dataInicial: Date
    observacoes: string | null
    createdAt: Date
    updatedAt: Date
    userId: string
    _count: CaixaCountAggregateOutputType | null
    _avg: CaixaAvgAggregateOutputType | null
    _sum: CaixaSumAggregateOutputType | null
    _min: CaixaMinAggregateOutputType | null
    _max: CaixaMaxAggregateOutputType | null
  }

  type GetCaixaGroupByPayload<T extends CaixaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CaixaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CaixaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CaixaGroupByOutputType[P]>
            : GetScalarType<T[P], CaixaGroupByOutputType[P]>
        }
      >
    >


  export type CaixaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    saldoInicial?: boolean
    saldoAtual?: boolean
    dataInicial?: boolean
    observacoes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["caixa"]>

  export type CaixaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    saldoInicial?: boolean
    saldoAtual?: boolean
    dataInicial?: boolean
    observacoes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["caixa"]>

  export type CaixaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    saldoInicial?: boolean
    saldoAtual?: boolean
    dataInicial?: boolean
    observacoes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["caixa"]>

  export type CaixaSelectScalar = {
    id?: boolean
    saldoInicial?: boolean
    saldoAtual?: boolean
    dataInicial?: boolean
    observacoes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
  }

  export type CaixaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "saldoInicial" | "saldoAtual" | "dataInicial" | "observacoes" | "createdAt" | "updatedAt" | "userId", ExtArgs["result"]["caixa"]>
  export type CaixaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type CaixaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type CaixaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $CaixaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Caixa"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      saldoInicial: Prisma.Decimal
      saldoAtual: Prisma.Decimal
      dataInicial: Date
      observacoes: string | null
      createdAt: Date
      updatedAt: Date
      userId: string
    }, ExtArgs["result"]["caixa"]>
    composites: {}
  }

  type CaixaGetPayload<S extends boolean | null | undefined | CaixaDefaultArgs> = $Result.GetResult<Prisma.$CaixaPayload, S>

  type CaixaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CaixaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CaixaCountAggregateInputType | true
    }

  export interface CaixaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Caixa'], meta: { name: 'Caixa' } }
    /**
     * Find zero or one Caixa that matches the filter.
     * @param {CaixaFindUniqueArgs} args - Arguments to find a Caixa
     * @example
     * // Get one Caixa
     * const caixa = await prisma.caixa.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CaixaFindUniqueArgs>(args: SelectSubset<T, CaixaFindUniqueArgs<ExtArgs>>): Prisma__CaixaClient<$Result.GetResult<Prisma.$CaixaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Caixa that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CaixaFindUniqueOrThrowArgs} args - Arguments to find a Caixa
     * @example
     * // Get one Caixa
     * const caixa = await prisma.caixa.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CaixaFindUniqueOrThrowArgs>(args: SelectSubset<T, CaixaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CaixaClient<$Result.GetResult<Prisma.$CaixaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Caixa that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CaixaFindFirstArgs} args - Arguments to find a Caixa
     * @example
     * // Get one Caixa
     * const caixa = await prisma.caixa.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CaixaFindFirstArgs>(args?: SelectSubset<T, CaixaFindFirstArgs<ExtArgs>>): Prisma__CaixaClient<$Result.GetResult<Prisma.$CaixaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Caixa that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CaixaFindFirstOrThrowArgs} args - Arguments to find a Caixa
     * @example
     * // Get one Caixa
     * const caixa = await prisma.caixa.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CaixaFindFirstOrThrowArgs>(args?: SelectSubset<T, CaixaFindFirstOrThrowArgs<ExtArgs>>): Prisma__CaixaClient<$Result.GetResult<Prisma.$CaixaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Caixas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CaixaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Caixas
     * const caixas = await prisma.caixa.findMany()
     * 
     * // Get first 10 Caixas
     * const caixas = await prisma.caixa.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const caixaWithIdOnly = await prisma.caixa.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CaixaFindManyArgs>(args?: SelectSubset<T, CaixaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CaixaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Caixa.
     * @param {CaixaCreateArgs} args - Arguments to create a Caixa.
     * @example
     * // Create one Caixa
     * const Caixa = await prisma.caixa.create({
     *   data: {
     *     // ... data to create a Caixa
     *   }
     * })
     * 
     */
    create<T extends CaixaCreateArgs>(args: SelectSubset<T, CaixaCreateArgs<ExtArgs>>): Prisma__CaixaClient<$Result.GetResult<Prisma.$CaixaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Caixas.
     * @param {CaixaCreateManyArgs} args - Arguments to create many Caixas.
     * @example
     * // Create many Caixas
     * const caixa = await prisma.caixa.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CaixaCreateManyArgs>(args?: SelectSubset<T, CaixaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Caixas and returns the data saved in the database.
     * @param {CaixaCreateManyAndReturnArgs} args - Arguments to create many Caixas.
     * @example
     * // Create many Caixas
     * const caixa = await prisma.caixa.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Caixas and only return the `id`
     * const caixaWithIdOnly = await prisma.caixa.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CaixaCreateManyAndReturnArgs>(args?: SelectSubset<T, CaixaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CaixaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Caixa.
     * @param {CaixaDeleteArgs} args - Arguments to delete one Caixa.
     * @example
     * // Delete one Caixa
     * const Caixa = await prisma.caixa.delete({
     *   where: {
     *     // ... filter to delete one Caixa
     *   }
     * })
     * 
     */
    delete<T extends CaixaDeleteArgs>(args: SelectSubset<T, CaixaDeleteArgs<ExtArgs>>): Prisma__CaixaClient<$Result.GetResult<Prisma.$CaixaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Caixa.
     * @param {CaixaUpdateArgs} args - Arguments to update one Caixa.
     * @example
     * // Update one Caixa
     * const caixa = await prisma.caixa.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CaixaUpdateArgs>(args: SelectSubset<T, CaixaUpdateArgs<ExtArgs>>): Prisma__CaixaClient<$Result.GetResult<Prisma.$CaixaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Caixas.
     * @param {CaixaDeleteManyArgs} args - Arguments to filter Caixas to delete.
     * @example
     * // Delete a few Caixas
     * const { count } = await prisma.caixa.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CaixaDeleteManyArgs>(args?: SelectSubset<T, CaixaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Caixas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CaixaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Caixas
     * const caixa = await prisma.caixa.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CaixaUpdateManyArgs>(args: SelectSubset<T, CaixaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Caixas and returns the data updated in the database.
     * @param {CaixaUpdateManyAndReturnArgs} args - Arguments to update many Caixas.
     * @example
     * // Update many Caixas
     * const caixa = await prisma.caixa.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Caixas and only return the `id`
     * const caixaWithIdOnly = await prisma.caixa.updateManyAndReturn({
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
    updateManyAndReturn<T extends CaixaUpdateManyAndReturnArgs>(args: SelectSubset<T, CaixaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CaixaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Caixa.
     * @param {CaixaUpsertArgs} args - Arguments to update or create a Caixa.
     * @example
     * // Update or create a Caixa
     * const caixa = await prisma.caixa.upsert({
     *   create: {
     *     // ... data to create a Caixa
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Caixa we want to update
     *   }
     * })
     */
    upsert<T extends CaixaUpsertArgs>(args: SelectSubset<T, CaixaUpsertArgs<ExtArgs>>): Prisma__CaixaClient<$Result.GetResult<Prisma.$CaixaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Caixas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CaixaCountArgs} args - Arguments to filter Caixas to count.
     * @example
     * // Count the number of Caixas
     * const count = await prisma.caixa.count({
     *   where: {
     *     // ... the filter for the Caixas we want to count
     *   }
     * })
    **/
    count<T extends CaixaCountArgs>(
      args?: Subset<T, CaixaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CaixaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Caixa.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CaixaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CaixaAggregateArgs>(args: Subset<T, CaixaAggregateArgs>): Prisma.PrismaPromise<GetCaixaAggregateType<T>>

    /**
     * Group by Caixa.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CaixaGroupByArgs} args - Group by arguments.
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
    groupBy<
      T extends CaixaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CaixaGroupByArgs['orderBy'] }
        : { orderBy?: CaixaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CaixaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCaixaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Caixa model
   */
  readonly fields: CaixaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Caixa.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CaixaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Caixa model
   */
  interface CaixaFieldRefs {
    readonly id: FieldRef<"Caixa", 'String'>
    readonly saldoInicial: FieldRef<"Caixa", 'Decimal'>
    readonly saldoAtual: FieldRef<"Caixa", 'Decimal'>
    readonly dataInicial: FieldRef<"Caixa", 'DateTime'>
    readonly observacoes: FieldRef<"Caixa", 'String'>
    readonly createdAt: FieldRef<"Caixa", 'DateTime'>
    readonly updatedAt: FieldRef<"Caixa", 'DateTime'>
    readonly userId: FieldRef<"Caixa", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Caixa findUnique
   */
  export type CaixaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Caixa
     */
    select?: CaixaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Caixa
     */
    omit?: CaixaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CaixaInclude<ExtArgs> | null
    /**
     * Filter, which Caixa to fetch.
     */
    where: CaixaWhereUniqueInput
  }

  /**
   * Caixa findUniqueOrThrow
   */
  export type CaixaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Caixa
     */
    select?: CaixaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Caixa
     */
    omit?: CaixaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CaixaInclude<ExtArgs> | null
    /**
     * Filter, which Caixa to fetch.
     */
    where: CaixaWhereUniqueInput
  }

  /**
   * Caixa findFirst
   */
  export type CaixaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Caixa
     */
    select?: CaixaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Caixa
     */
    omit?: CaixaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CaixaInclude<ExtArgs> | null
    /**
     * Filter, which Caixa to fetch.
     */
    where?: CaixaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Caixas to fetch.
     */
    orderBy?: CaixaOrderByWithRelationInput | CaixaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Caixas.
     */
    cursor?: CaixaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Caixas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Caixas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Caixas.
     */
    distinct?: CaixaScalarFieldEnum | CaixaScalarFieldEnum[]
  }

  /**
   * Caixa findFirstOrThrow
   */
  export type CaixaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Caixa
     */
    select?: CaixaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Caixa
     */
    omit?: CaixaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CaixaInclude<ExtArgs> | null
    /**
     * Filter, which Caixa to fetch.
     */
    where?: CaixaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Caixas to fetch.
     */
    orderBy?: CaixaOrderByWithRelationInput | CaixaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Caixas.
     */
    cursor?: CaixaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Caixas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Caixas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Caixas.
     */
    distinct?: CaixaScalarFieldEnum | CaixaScalarFieldEnum[]
  }

  /**
   * Caixa findMany
   */
  export type CaixaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Caixa
     */
    select?: CaixaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Caixa
     */
    omit?: CaixaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CaixaInclude<ExtArgs> | null
    /**
     * Filter, which Caixas to fetch.
     */
    where?: CaixaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Caixas to fetch.
     */
    orderBy?: CaixaOrderByWithRelationInput | CaixaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Caixas.
     */
    cursor?: CaixaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Caixas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Caixas.
     */
    skip?: number
    distinct?: CaixaScalarFieldEnum | CaixaScalarFieldEnum[]
  }

  /**
   * Caixa create
   */
  export type CaixaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Caixa
     */
    select?: CaixaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Caixa
     */
    omit?: CaixaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CaixaInclude<ExtArgs> | null
    /**
     * The data needed to create a Caixa.
     */
    data: XOR<CaixaCreateInput, CaixaUncheckedCreateInput>
  }

  /**
   * Caixa createMany
   */
  export type CaixaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Caixas.
     */
    data: CaixaCreateManyInput | CaixaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Caixa createManyAndReturn
   */
  export type CaixaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Caixa
     */
    select?: CaixaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Caixa
     */
    omit?: CaixaOmit<ExtArgs> | null
    /**
     * The data used to create many Caixas.
     */
    data: CaixaCreateManyInput | CaixaCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CaixaIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Caixa update
   */
  export type CaixaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Caixa
     */
    select?: CaixaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Caixa
     */
    omit?: CaixaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CaixaInclude<ExtArgs> | null
    /**
     * The data needed to update a Caixa.
     */
    data: XOR<CaixaUpdateInput, CaixaUncheckedUpdateInput>
    /**
     * Choose, which Caixa to update.
     */
    where: CaixaWhereUniqueInput
  }

  /**
   * Caixa updateMany
   */
  export type CaixaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Caixas.
     */
    data: XOR<CaixaUpdateManyMutationInput, CaixaUncheckedUpdateManyInput>
    /**
     * Filter which Caixas to update
     */
    where?: CaixaWhereInput
    /**
     * Limit how many Caixas to update.
     */
    limit?: number
  }

  /**
   * Caixa updateManyAndReturn
   */
  export type CaixaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Caixa
     */
    select?: CaixaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Caixa
     */
    omit?: CaixaOmit<ExtArgs> | null
    /**
     * The data used to update Caixas.
     */
    data: XOR<CaixaUpdateManyMutationInput, CaixaUncheckedUpdateManyInput>
    /**
     * Filter which Caixas to update
     */
    where?: CaixaWhereInput
    /**
     * Limit how many Caixas to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CaixaIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Caixa upsert
   */
  export type CaixaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Caixa
     */
    select?: CaixaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Caixa
     */
    omit?: CaixaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CaixaInclude<ExtArgs> | null
    /**
     * The filter to search for the Caixa to update in case it exists.
     */
    where: CaixaWhereUniqueInput
    /**
     * In case the Caixa found by the `where` argument doesn't exist, create a new Caixa with this data.
     */
    create: XOR<CaixaCreateInput, CaixaUncheckedCreateInput>
    /**
     * In case the Caixa was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CaixaUpdateInput, CaixaUncheckedUpdateInput>
  }

  /**
   * Caixa delete
   */
  export type CaixaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Caixa
     */
    select?: CaixaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Caixa
     */
    omit?: CaixaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CaixaInclude<ExtArgs> | null
    /**
     * Filter which Caixa to delete.
     */
    where: CaixaWhereUniqueInput
  }

  /**
   * Caixa deleteMany
   */
  export type CaixaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Caixas to delete
     */
    where?: CaixaWhereInput
    /**
     * Limit how many Caixas to delete.
     */
    limit?: number
  }

  /**
   * Caixa without action
   */
  export type CaixaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Caixa
     */
    select?: CaixaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Caixa
     */
    omit?: CaixaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CaixaInclude<ExtArgs> | null
  }


  /**
   * Model MovimentacaoCaixa
   */

  export type AggregateMovimentacaoCaixa = {
    _count: MovimentacaoCaixaCountAggregateOutputType | null
    _avg: MovimentacaoCaixaAvgAggregateOutputType | null
    _sum: MovimentacaoCaixaSumAggregateOutputType | null
    _min: MovimentacaoCaixaMinAggregateOutputType | null
    _max: MovimentacaoCaixaMaxAggregateOutputType | null
  }

  export type MovimentacaoCaixaAvgAggregateOutputType = {
    valor: Decimal | null
  }

  export type MovimentacaoCaixaSumAggregateOutputType = {
    valor: Decimal | null
  }

  export type MovimentacaoCaixaMinAggregateOutputType = {
    id: string | null
    tipo: $Enums.TipoMovimentacao | null
    valor: Decimal | null
    descricao: string | null
    dataMovimentacao: Date | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: string | null
    emprestimoId: string | null
  }

  export type MovimentacaoCaixaMaxAggregateOutputType = {
    id: string | null
    tipo: $Enums.TipoMovimentacao | null
    valor: Decimal | null
    descricao: string | null
    dataMovimentacao: Date | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: string | null
    emprestimoId: string | null
  }

  export type MovimentacaoCaixaCountAggregateOutputType = {
    id: number
    tipo: number
    valor: number
    descricao: number
    dataMovimentacao: number
    createdAt: number
    updatedAt: number
    userId: number
    emprestimoId: number
    _all: number
  }


  export type MovimentacaoCaixaAvgAggregateInputType = {
    valor?: true
  }

  export type MovimentacaoCaixaSumAggregateInputType = {
    valor?: true
  }

  export type MovimentacaoCaixaMinAggregateInputType = {
    id?: true
    tipo?: true
    valor?: true
    descricao?: true
    dataMovimentacao?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    emprestimoId?: true
  }

  export type MovimentacaoCaixaMaxAggregateInputType = {
    id?: true
    tipo?: true
    valor?: true
    descricao?: true
    dataMovimentacao?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    emprestimoId?: true
  }

  export type MovimentacaoCaixaCountAggregateInputType = {
    id?: true
    tipo?: true
    valor?: true
    descricao?: true
    dataMovimentacao?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    emprestimoId?: true
    _all?: true
  }

  export type MovimentacaoCaixaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MovimentacaoCaixa to aggregate.
     */
    where?: MovimentacaoCaixaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MovimentacaoCaixas to fetch.
     */
    orderBy?: MovimentacaoCaixaOrderByWithRelationInput | MovimentacaoCaixaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MovimentacaoCaixaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MovimentacaoCaixas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MovimentacaoCaixas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MovimentacaoCaixas
    **/
    _count?: true | MovimentacaoCaixaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MovimentacaoCaixaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MovimentacaoCaixaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MovimentacaoCaixaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MovimentacaoCaixaMaxAggregateInputType
  }

  export type GetMovimentacaoCaixaAggregateType<T extends MovimentacaoCaixaAggregateArgs> = {
        [P in keyof T & keyof AggregateMovimentacaoCaixa]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMovimentacaoCaixa[P]>
      : GetScalarType<T[P], AggregateMovimentacaoCaixa[P]>
  }




  export type MovimentacaoCaixaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MovimentacaoCaixaWhereInput
    orderBy?: MovimentacaoCaixaOrderByWithAggregationInput | MovimentacaoCaixaOrderByWithAggregationInput[]
    by: MovimentacaoCaixaScalarFieldEnum[] | MovimentacaoCaixaScalarFieldEnum
    having?: MovimentacaoCaixaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MovimentacaoCaixaCountAggregateInputType | true
    _avg?: MovimentacaoCaixaAvgAggregateInputType
    _sum?: MovimentacaoCaixaSumAggregateInputType
    _min?: MovimentacaoCaixaMinAggregateInputType
    _max?: MovimentacaoCaixaMaxAggregateInputType
  }

  export type MovimentacaoCaixaGroupByOutputType = {
    id: string
    tipo: $Enums.TipoMovimentacao
    valor: Decimal
    descricao: string
    dataMovimentacao: Date
    createdAt: Date
    updatedAt: Date
    userId: string
    emprestimoId: string | null
    _count: MovimentacaoCaixaCountAggregateOutputType | null
    _avg: MovimentacaoCaixaAvgAggregateOutputType | null
    _sum: MovimentacaoCaixaSumAggregateOutputType | null
    _min: MovimentacaoCaixaMinAggregateOutputType | null
    _max: MovimentacaoCaixaMaxAggregateOutputType | null
  }

  type GetMovimentacaoCaixaGroupByPayload<T extends MovimentacaoCaixaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MovimentacaoCaixaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MovimentacaoCaixaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MovimentacaoCaixaGroupByOutputType[P]>
            : GetScalarType<T[P], MovimentacaoCaixaGroupByOutputType[P]>
        }
      >
    >


  export type MovimentacaoCaixaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tipo?: boolean
    valor?: boolean
    descricao?: boolean
    dataMovimentacao?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    emprestimoId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    emprestimo?: boolean | MovimentacaoCaixa$emprestimoArgs<ExtArgs>
  }, ExtArgs["result"]["movimentacaoCaixa"]>

  export type MovimentacaoCaixaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tipo?: boolean
    valor?: boolean
    descricao?: boolean
    dataMovimentacao?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    emprestimoId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    emprestimo?: boolean | MovimentacaoCaixa$emprestimoArgs<ExtArgs>
  }, ExtArgs["result"]["movimentacaoCaixa"]>

  export type MovimentacaoCaixaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tipo?: boolean
    valor?: boolean
    descricao?: boolean
    dataMovimentacao?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    emprestimoId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    emprestimo?: boolean | MovimentacaoCaixa$emprestimoArgs<ExtArgs>
  }, ExtArgs["result"]["movimentacaoCaixa"]>

  export type MovimentacaoCaixaSelectScalar = {
    id?: boolean
    tipo?: boolean
    valor?: boolean
    descricao?: boolean
    dataMovimentacao?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    emprestimoId?: boolean
  }

  export type MovimentacaoCaixaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "tipo" | "valor" | "descricao" | "dataMovimentacao" | "createdAt" | "updatedAt" | "userId" | "emprestimoId", ExtArgs["result"]["movimentacaoCaixa"]>
  export type MovimentacaoCaixaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    emprestimo?: boolean | MovimentacaoCaixa$emprestimoArgs<ExtArgs>
  }
  export type MovimentacaoCaixaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    emprestimo?: boolean | MovimentacaoCaixa$emprestimoArgs<ExtArgs>
  }
  export type MovimentacaoCaixaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    emprestimo?: boolean | MovimentacaoCaixa$emprestimoArgs<ExtArgs>
  }

  export type $MovimentacaoCaixaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MovimentacaoCaixa"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      emprestimo: Prisma.$EmprestimoPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      tipo: $Enums.TipoMovimentacao
      valor: Prisma.Decimal
      descricao: string
      dataMovimentacao: Date
      createdAt: Date
      updatedAt: Date
      userId: string
      emprestimoId: string | null
    }, ExtArgs["result"]["movimentacaoCaixa"]>
    composites: {}
  }

  type MovimentacaoCaixaGetPayload<S extends boolean | null | undefined | MovimentacaoCaixaDefaultArgs> = $Result.GetResult<Prisma.$MovimentacaoCaixaPayload, S>

  type MovimentacaoCaixaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MovimentacaoCaixaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MovimentacaoCaixaCountAggregateInputType | true
    }

  export interface MovimentacaoCaixaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MovimentacaoCaixa'], meta: { name: 'MovimentacaoCaixa' } }
    /**
     * Find zero or one MovimentacaoCaixa that matches the filter.
     * @param {MovimentacaoCaixaFindUniqueArgs} args - Arguments to find a MovimentacaoCaixa
     * @example
     * // Get one MovimentacaoCaixa
     * const movimentacaoCaixa = await prisma.movimentacaoCaixa.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MovimentacaoCaixaFindUniqueArgs>(args: SelectSubset<T, MovimentacaoCaixaFindUniqueArgs<ExtArgs>>): Prisma__MovimentacaoCaixaClient<$Result.GetResult<Prisma.$MovimentacaoCaixaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MovimentacaoCaixa that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MovimentacaoCaixaFindUniqueOrThrowArgs} args - Arguments to find a MovimentacaoCaixa
     * @example
     * // Get one MovimentacaoCaixa
     * const movimentacaoCaixa = await prisma.movimentacaoCaixa.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MovimentacaoCaixaFindUniqueOrThrowArgs>(args: SelectSubset<T, MovimentacaoCaixaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MovimentacaoCaixaClient<$Result.GetResult<Prisma.$MovimentacaoCaixaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MovimentacaoCaixa that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovimentacaoCaixaFindFirstArgs} args - Arguments to find a MovimentacaoCaixa
     * @example
     * // Get one MovimentacaoCaixa
     * const movimentacaoCaixa = await prisma.movimentacaoCaixa.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MovimentacaoCaixaFindFirstArgs>(args?: SelectSubset<T, MovimentacaoCaixaFindFirstArgs<ExtArgs>>): Prisma__MovimentacaoCaixaClient<$Result.GetResult<Prisma.$MovimentacaoCaixaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MovimentacaoCaixa that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovimentacaoCaixaFindFirstOrThrowArgs} args - Arguments to find a MovimentacaoCaixa
     * @example
     * // Get one MovimentacaoCaixa
     * const movimentacaoCaixa = await prisma.movimentacaoCaixa.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MovimentacaoCaixaFindFirstOrThrowArgs>(args?: SelectSubset<T, MovimentacaoCaixaFindFirstOrThrowArgs<ExtArgs>>): Prisma__MovimentacaoCaixaClient<$Result.GetResult<Prisma.$MovimentacaoCaixaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MovimentacaoCaixas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovimentacaoCaixaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MovimentacaoCaixas
     * const movimentacaoCaixas = await prisma.movimentacaoCaixa.findMany()
     * 
     * // Get first 10 MovimentacaoCaixas
     * const movimentacaoCaixas = await prisma.movimentacaoCaixa.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const movimentacaoCaixaWithIdOnly = await prisma.movimentacaoCaixa.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MovimentacaoCaixaFindManyArgs>(args?: SelectSubset<T, MovimentacaoCaixaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MovimentacaoCaixaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MovimentacaoCaixa.
     * @param {MovimentacaoCaixaCreateArgs} args - Arguments to create a MovimentacaoCaixa.
     * @example
     * // Create one MovimentacaoCaixa
     * const MovimentacaoCaixa = await prisma.movimentacaoCaixa.create({
     *   data: {
     *     // ... data to create a MovimentacaoCaixa
     *   }
     * })
     * 
     */
    create<T extends MovimentacaoCaixaCreateArgs>(args: SelectSubset<T, MovimentacaoCaixaCreateArgs<ExtArgs>>): Prisma__MovimentacaoCaixaClient<$Result.GetResult<Prisma.$MovimentacaoCaixaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MovimentacaoCaixas.
     * @param {MovimentacaoCaixaCreateManyArgs} args - Arguments to create many MovimentacaoCaixas.
     * @example
     * // Create many MovimentacaoCaixas
     * const movimentacaoCaixa = await prisma.movimentacaoCaixa.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MovimentacaoCaixaCreateManyArgs>(args?: SelectSubset<T, MovimentacaoCaixaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MovimentacaoCaixas and returns the data saved in the database.
     * @param {MovimentacaoCaixaCreateManyAndReturnArgs} args - Arguments to create many MovimentacaoCaixas.
     * @example
     * // Create many MovimentacaoCaixas
     * const movimentacaoCaixa = await prisma.movimentacaoCaixa.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MovimentacaoCaixas and only return the `id`
     * const movimentacaoCaixaWithIdOnly = await prisma.movimentacaoCaixa.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MovimentacaoCaixaCreateManyAndReturnArgs>(args?: SelectSubset<T, MovimentacaoCaixaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MovimentacaoCaixaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a MovimentacaoCaixa.
     * @param {MovimentacaoCaixaDeleteArgs} args - Arguments to delete one MovimentacaoCaixa.
     * @example
     * // Delete one MovimentacaoCaixa
     * const MovimentacaoCaixa = await prisma.movimentacaoCaixa.delete({
     *   where: {
     *     // ... filter to delete one MovimentacaoCaixa
     *   }
     * })
     * 
     */
    delete<T extends MovimentacaoCaixaDeleteArgs>(args: SelectSubset<T, MovimentacaoCaixaDeleteArgs<ExtArgs>>): Prisma__MovimentacaoCaixaClient<$Result.GetResult<Prisma.$MovimentacaoCaixaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MovimentacaoCaixa.
     * @param {MovimentacaoCaixaUpdateArgs} args - Arguments to update one MovimentacaoCaixa.
     * @example
     * // Update one MovimentacaoCaixa
     * const movimentacaoCaixa = await prisma.movimentacaoCaixa.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MovimentacaoCaixaUpdateArgs>(args: SelectSubset<T, MovimentacaoCaixaUpdateArgs<ExtArgs>>): Prisma__MovimentacaoCaixaClient<$Result.GetResult<Prisma.$MovimentacaoCaixaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MovimentacaoCaixas.
     * @param {MovimentacaoCaixaDeleteManyArgs} args - Arguments to filter MovimentacaoCaixas to delete.
     * @example
     * // Delete a few MovimentacaoCaixas
     * const { count } = await prisma.movimentacaoCaixa.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MovimentacaoCaixaDeleteManyArgs>(args?: SelectSubset<T, MovimentacaoCaixaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MovimentacaoCaixas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovimentacaoCaixaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MovimentacaoCaixas
     * const movimentacaoCaixa = await prisma.movimentacaoCaixa.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MovimentacaoCaixaUpdateManyArgs>(args: SelectSubset<T, MovimentacaoCaixaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MovimentacaoCaixas and returns the data updated in the database.
     * @param {MovimentacaoCaixaUpdateManyAndReturnArgs} args - Arguments to update many MovimentacaoCaixas.
     * @example
     * // Update many MovimentacaoCaixas
     * const movimentacaoCaixa = await prisma.movimentacaoCaixa.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more MovimentacaoCaixas and only return the `id`
     * const movimentacaoCaixaWithIdOnly = await prisma.movimentacaoCaixa.updateManyAndReturn({
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
    updateManyAndReturn<T extends MovimentacaoCaixaUpdateManyAndReturnArgs>(args: SelectSubset<T, MovimentacaoCaixaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MovimentacaoCaixaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one MovimentacaoCaixa.
     * @param {MovimentacaoCaixaUpsertArgs} args - Arguments to update or create a MovimentacaoCaixa.
     * @example
     * // Update or create a MovimentacaoCaixa
     * const movimentacaoCaixa = await prisma.movimentacaoCaixa.upsert({
     *   create: {
     *     // ... data to create a MovimentacaoCaixa
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MovimentacaoCaixa we want to update
     *   }
     * })
     */
    upsert<T extends MovimentacaoCaixaUpsertArgs>(args: SelectSubset<T, MovimentacaoCaixaUpsertArgs<ExtArgs>>): Prisma__MovimentacaoCaixaClient<$Result.GetResult<Prisma.$MovimentacaoCaixaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of MovimentacaoCaixas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovimentacaoCaixaCountArgs} args - Arguments to filter MovimentacaoCaixas to count.
     * @example
     * // Count the number of MovimentacaoCaixas
     * const count = await prisma.movimentacaoCaixa.count({
     *   where: {
     *     // ... the filter for the MovimentacaoCaixas we want to count
     *   }
     * })
    **/
    count<T extends MovimentacaoCaixaCountArgs>(
      args?: Subset<T, MovimentacaoCaixaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MovimentacaoCaixaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MovimentacaoCaixa.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovimentacaoCaixaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MovimentacaoCaixaAggregateArgs>(args: Subset<T, MovimentacaoCaixaAggregateArgs>): Prisma.PrismaPromise<GetMovimentacaoCaixaAggregateType<T>>

    /**
     * Group by MovimentacaoCaixa.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovimentacaoCaixaGroupByArgs} args - Group by arguments.
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
    groupBy<
      T extends MovimentacaoCaixaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MovimentacaoCaixaGroupByArgs['orderBy'] }
        : { orderBy?: MovimentacaoCaixaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MovimentacaoCaixaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMovimentacaoCaixaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MovimentacaoCaixa model
   */
  readonly fields: MovimentacaoCaixaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MovimentacaoCaixa.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MovimentacaoCaixaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    emprestimo<T extends MovimentacaoCaixa$emprestimoArgs<ExtArgs> = {}>(args?: Subset<T, MovimentacaoCaixa$emprestimoArgs<ExtArgs>>): Prisma__EmprestimoClient<$Result.GetResult<Prisma.$EmprestimoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the MovimentacaoCaixa model
   */
  interface MovimentacaoCaixaFieldRefs {
    readonly id: FieldRef<"MovimentacaoCaixa", 'String'>
    readonly tipo: FieldRef<"MovimentacaoCaixa", 'TipoMovimentacao'>
    readonly valor: FieldRef<"MovimentacaoCaixa", 'Decimal'>
    readonly descricao: FieldRef<"MovimentacaoCaixa", 'String'>
    readonly dataMovimentacao: FieldRef<"MovimentacaoCaixa", 'DateTime'>
    readonly createdAt: FieldRef<"MovimentacaoCaixa", 'DateTime'>
    readonly updatedAt: FieldRef<"MovimentacaoCaixa", 'DateTime'>
    readonly userId: FieldRef<"MovimentacaoCaixa", 'String'>
    readonly emprestimoId: FieldRef<"MovimentacaoCaixa", 'String'>
  }
    

  // Custom InputTypes
  /**
   * MovimentacaoCaixa findUnique
   */
  export type MovimentacaoCaixaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MovimentacaoCaixa
     */
    select?: MovimentacaoCaixaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MovimentacaoCaixa
     */
    omit?: MovimentacaoCaixaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovimentacaoCaixaInclude<ExtArgs> | null
    /**
     * Filter, which MovimentacaoCaixa to fetch.
     */
    where: MovimentacaoCaixaWhereUniqueInput
  }

  /**
   * MovimentacaoCaixa findUniqueOrThrow
   */
  export type MovimentacaoCaixaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MovimentacaoCaixa
     */
    select?: MovimentacaoCaixaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MovimentacaoCaixa
     */
    omit?: MovimentacaoCaixaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovimentacaoCaixaInclude<ExtArgs> | null
    /**
     * Filter, which MovimentacaoCaixa to fetch.
     */
    where: MovimentacaoCaixaWhereUniqueInput
  }

  /**
   * MovimentacaoCaixa findFirst
   */
  export type MovimentacaoCaixaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MovimentacaoCaixa
     */
    select?: MovimentacaoCaixaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MovimentacaoCaixa
     */
    omit?: MovimentacaoCaixaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovimentacaoCaixaInclude<ExtArgs> | null
    /**
     * Filter, which MovimentacaoCaixa to fetch.
     */
    where?: MovimentacaoCaixaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MovimentacaoCaixas to fetch.
     */
    orderBy?: MovimentacaoCaixaOrderByWithRelationInput | MovimentacaoCaixaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MovimentacaoCaixas.
     */
    cursor?: MovimentacaoCaixaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MovimentacaoCaixas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MovimentacaoCaixas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MovimentacaoCaixas.
     */
    distinct?: MovimentacaoCaixaScalarFieldEnum | MovimentacaoCaixaScalarFieldEnum[]
  }

  /**
   * MovimentacaoCaixa findFirstOrThrow
   */
  export type MovimentacaoCaixaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MovimentacaoCaixa
     */
    select?: MovimentacaoCaixaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MovimentacaoCaixa
     */
    omit?: MovimentacaoCaixaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovimentacaoCaixaInclude<ExtArgs> | null
    /**
     * Filter, which MovimentacaoCaixa to fetch.
     */
    where?: MovimentacaoCaixaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MovimentacaoCaixas to fetch.
     */
    orderBy?: MovimentacaoCaixaOrderByWithRelationInput | MovimentacaoCaixaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MovimentacaoCaixas.
     */
    cursor?: MovimentacaoCaixaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MovimentacaoCaixas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MovimentacaoCaixas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MovimentacaoCaixas.
     */
    distinct?: MovimentacaoCaixaScalarFieldEnum | MovimentacaoCaixaScalarFieldEnum[]
  }

  /**
   * MovimentacaoCaixa findMany
   */
  export type MovimentacaoCaixaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MovimentacaoCaixa
     */
    select?: MovimentacaoCaixaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MovimentacaoCaixa
     */
    omit?: MovimentacaoCaixaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovimentacaoCaixaInclude<ExtArgs> | null
    /**
     * Filter, which MovimentacaoCaixas to fetch.
     */
    where?: MovimentacaoCaixaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MovimentacaoCaixas to fetch.
     */
    orderBy?: MovimentacaoCaixaOrderByWithRelationInput | MovimentacaoCaixaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MovimentacaoCaixas.
     */
    cursor?: MovimentacaoCaixaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MovimentacaoCaixas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MovimentacaoCaixas.
     */
    skip?: number
    distinct?: MovimentacaoCaixaScalarFieldEnum | MovimentacaoCaixaScalarFieldEnum[]
  }

  /**
   * MovimentacaoCaixa create
   */
  export type MovimentacaoCaixaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MovimentacaoCaixa
     */
    select?: MovimentacaoCaixaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MovimentacaoCaixa
     */
    omit?: MovimentacaoCaixaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovimentacaoCaixaInclude<ExtArgs> | null
    /**
     * The data needed to create a MovimentacaoCaixa.
     */
    data: XOR<MovimentacaoCaixaCreateInput, MovimentacaoCaixaUncheckedCreateInput>
  }

  /**
   * MovimentacaoCaixa createMany
   */
  export type MovimentacaoCaixaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MovimentacaoCaixas.
     */
    data: MovimentacaoCaixaCreateManyInput | MovimentacaoCaixaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MovimentacaoCaixa createManyAndReturn
   */
  export type MovimentacaoCaixaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MovimentacaoCaixa
     */
    select?: MovimentacaoCaixaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MovimentacaoCaixa
     */
    omit?: MovimentacaoCaixaOmit<ExtArgs> | null
    /**
     * The data used to create many MovimentacaoCaixas.
     */
    data: MovimentacaoCaixaCreateManyInput | MovimentacaoCaixaCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovimentacaoCaixaIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * MovimentacaoCaixa update
   */
  export type MovimentacaoCaixaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MovimentacaoCaixa
     */
    select?: MovimentacaoCaixaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MovimentacaoCaixa
     */
    omit?: MovimentacaoCaixaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovimentacaoCaixaInclude<ExtArgs> | null
    /**
     * The data needed to update a MovimentacaoCaixa.
     */
    data: XOR<MovimentacaoCaixaUpdateInput, MovimentacaoCaixaUncheckedUpdateInput>
    /**
     * Choose, which MovimentacaoCaixa to update.
     */
    where: MovimentacaoCaixaWhereUniqueInput
  }

  /**
   * MovimentacaoCaixa updateMany
   */
  export type MovimentacaoCaixaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MovimentacaoCaixas.
     */
    data: XOR<MovimentacaoCaixaUpdateManyMutationInput, MovimentacaoCaixaUncheckedUpdateManyInput>
    /**
     * Filter which MovimentacaoCaixas to update
     */
    where?: MovimentacaoCaixaWhereInput
    /**
     * Limit how many MovimentacaoCaixas to update.
     */
    limit?: number
  }

  /**
   * MovimentacaoCaixa updateManyAndReturn
   */
  export type MovimentacaoCaixaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MovimentacaoCaixa
     */
    select?: MovimentacaoCaixaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MovimentacaoCaixa
     */
    omit?: MovimentacaoCaixaOmit<ExtArgs> | null
    /**
     * The data used to update MovimentacaoCaixas.
     */
    data: XOR<MovimentacaoCaixaUpdateManyMutationInput, MovimentacaoCaixaUncheckedUpdateManyInput>
    /**
     * Filter which MovimentacaoCaixas to update
     */
    where?: MovimentacaoCaixaWhereInput
    /**
     * Limit how many MovimentacaoCaixas to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovimentacaoCaixaIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * MovimentacaoCaixa upsert
   */
  export type MovimentacaoCaixaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MovimentacaoCaixa
     */
    select?: MovimentacaoCaixaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MovimentacaoCaixa
     */
    omit?: MovimentacaoCaixaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovimentacaoCaixaInclude<ExtArgs> | null
    /**
     * The filter to search for the MovimentacaoCaixa to update in case it exists.
     */
    where: MovimentacaoCaixaWhereUniqueInput
    /**
     * In case the MovimentacaoCaixa found by the `where` argument doesn't exist, create a new MovimentacaoCaixa with this data.
     */
    create: XOR<MovimentacaoCaixaCreateInput, MovimentacaoCaixaUncheckedCreateInput>
    /**
     * In case the MovimentacaoCaixa was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MovimentacaoCaixaUpdateInput, MovimentacaoCaixaUncheckedUpdateInput>
  }

  /**
   * MovimentacaoCaixa delete
   */
  export type MovimentacaoCaixaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MovimentacaoCaixa
     */
    select?: MovimentacaoCaixaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MovimentacaoCaixa
     */
    omit?: MovimentacaoCaixaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovimentacaoCaixaInclude<ExtArgs> | null
    /**
     * Filter which MovimentacaoCaixa to delete.
     */
    where: MovimentacaoCaixaWhereUniqueInput
  }

  /**
   * MovimentacaoCaixa deleteMany
   */
  export type MovimentacaoCaixaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MovimentacaoCaixas to delete
     */
    where?: MovimentacaoCaixaWhereInput
    /**
     * Limit how many MovimentacaoCaixas to delete.
     */
    limit?: number
  }

  /**
   * MovimentacaoCaixa.emprestimo
   */
  export type MovimentacaoCaixa$emprestimoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Emprestimo
     */
    select?: EmprestimoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Emprestimo
     */
    omit?: EmprestimoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmprestimoInclude<ExtArgs> | null
    where?: EmprestimoWhereInput
  }

  /**
   * MovimentacaoCaixa without action
   */
  export type MovimentacaoCaixaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MovimentacaoCaixa
     */
    select?: MovimentacaoCaixaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MovimentacaoCaixa
     */
    omit?: MovimentacaoCaixaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovimentacaoCaixaInclude<ExtArgs> | null
  }


  /**
   * Model Emprestimo
   */

  export type AggregateEmprestimo = {
    _count: EmprestimoCountAggregateOutputType | null
    _avg: EmprestimoAvgAggregateOutputType | null
    _sum: EmprestimoSumAggregateOutputType | null
    _min: EmprestimoMinAggregateOutputType | null
    _max: EmprestimoMaxAggregateOutputType | null
  }

  export type EmprestimoAvgAggregateOutputType = {
    valor: Decimal | null
    valorTotal: Decimal | null
    taxaJuros: number | null
    numeroParcelas: number | null
    valorParcela: Decimal | null
  }

  export type EmprestimoSumAggregateOutputType = {
    valor: Decimal | null
    valorTotal: Decimal | null
    taxaJuros: number | null
    numeroParcelas: number | null
    valorParcela: Decimal | null
  }

  export type EmprestimoMinAggregateOutputType = {
    id: string | null
    valor: Decimal | null
    valorTotal: Decimal | null
    taxaJuros: number | null
    numeroParcelas: number | null
    valorParcela: Decimal | null
    dataEmprestimo: Date | null
    dataVencimento: Date | null
    status: $Enums.StatusEmprestimo | null
    observacoes: string | null
    createdAt: Date | null
    updatedAt: Date | null
    clienteId: string | null
    userId: string | null
  }

  export type EmprestimoMaxAggregateOutputType = {
    id: string | null
    valor: Decimal | null
    valorTotal: Decimal | null
    taxaJuros: number | null
    numeroParcelas: number | null
    valorParcela: Decimal | null
    dataEmprestimo: Date | null
    dataVencimento: Date | null
    status: $Enums.StatusEmprestimo | null
    observacoes: string | null
    createdAt: Date | null
    updatedAt: Date | null
    clienteId: string | null
    userId: string | null
  }

  export type EmprestimoCountAggregateOutputType = {
    id: number
    valor: number
    valorTotal: number
    taxaJuros: number
    numeroParcelas: number
    valorParcela: number
    dataEmprestimo: number
    dataVencimento: number
    status: number
    observacoes: number
    createdAt: number
    updatedAt: number
    clienteId: number
    userId: number
    _all: number
  }


  export type EmprestimoAvgAggregateInputType = {
    valor?: true
    valorTotal?: true
    taxaJuros?: true
    numeroParcelas?: true
    valorParcela?: true
  }

  export type EmprestimoSumAggregateInputType = {
    valor?: true
    valorTotal?: true
    taxaJuros?: true
    numeroParcelas?: true
    valorParcela?: true
  }

  export type EmprestimoMinAggregateInputType = {
    id?: true
    valor?: true
    valorTotal?: true
    taxaJuros?: true
    numeroParcelas?: true
    valorParcela?: true
    dataEmprestimo?: true
    dataVencimento?: true
    status?: true
    observacoes?: true
    createdAt?: true
    updatedAt?: true
    clienteId?: true
    userId?: true
  }

  export type EmprestimoMaxAggregateInputType = {
    id?: true
    valor?: true
    valorTotal?: true
    taxaJuros?: true
    numeroParcelas?: true
    valorParcela?: true
    dataEmprestimo?: true
    dataVencimento?: true
    status?: true
    observacoes?: true
    createdAt?: true
    updatedAt?: true
    clienteId?: true
    userId?: true
  }

  export type EmprestimoCountAggregateInputType = {
    id?: true
    valor?: true
    valorTotal?: true
    taxaJuros?: true
    numeroParcelas?: true
    valorParcela?: true
    dataEmprestimo?: true
    dataVencimento?: true
    status?: true
    observacoes?: true
    createdAt?: true
    updatedAt?: true
    clienteId?: true
    userId?: true
    _all?: true
  }

  export type EmprestimoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Emprestimo to aggregate.
     */
    where?: EmprestimoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Emprestimos to fetch.
     */
    orderBy?: EmprestimoOrderByWithRelationInput | EmprestimoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EmprestimoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Emprestimos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Emprestimos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Emprestimos
    **/
    _count?: true | EmprestimoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EmprestimoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EmprestimoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EmprestimoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EmprestimoMaxAggregateInputType
  }

  export type GetEmprestimoAggregateType<T extends EmprestimoAggregateArgs> = {
        [P in keyof T & keyof AggregateEmprestimo]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEmprestimo[P]>
      : GetScalarType<T[P], AggregateEmprestimo[P]>
  }




  export type EmprestimoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EmprestimoWhereInput
    orderBy?: EmprestimoOrderByWithAggregationInput | EmprestimoOrderByWithAggregationInput[]
    by: EmprestimoScalarFieldEnum[] | EmprestimoScalarFieldEnum
    having?: EmprestimoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EmprestimoCountAggregateInputType | true
    _avg?: EmprestimoAvgAggregateInputType
    _sum?: EmprestimoSumAggregateInputType
    _min?: EmprestimoMinAggregateInputType
    _max?: EmprestimoMaxAggregateInputType
  }

  export type EmprestimoGroupByOutputType = {
    id: string
    valor: Decimal
    valorTotal: Decimal
    taxaJuros: number
    numeroParcelas: number
    valorParcela: Decimal
    dataEmprestimo: Date
    dataVencimento: Date
    status: $Enums.StatusEmprestimo
    observacoes: string | null
    createdAt: Date
    updatedAt: Date
    clienteId: string
    userId: string
    _count: EmprestimoCountAggregateOutputType | null
    _avg: EmprestimoAvgAggregateOutputType | null
    _sum: EmprestimoSumAggregateOutputType | null
    _min: EmprestimoMinAggregateOutputType | null
    _max: EmprestimoMaxAggregateOutputType | null
  }

  type GetEmprestimoGroupByPayload<T extends EmprestimoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EmprestimoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EmprestimoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EmprestimoGroupByOutputType[P]>
            : GetScalarType<T[P], EmprestimoGroupByOutputType[P]>
        }
      >
    >


  export type EmprestimoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    valor?: boolean
    valorTotal?: boolean
    taxaJuros?: boolean
    numeroParcelas?: boolean
    valorParcela?: boolean
    dataEmprestimo?: boolean
    dataVencimento?: boolean
    status?: boolean
    observacoes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    clienteId?: boolean
    userId?: boolean
    cliente?: boolean | ClienteDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    pagamentos?: boolean | Emprestimo$pagamentosArgs<ExtArgs>
    movimentacoes?: boolean | Emprestimo$movimentacoesArgs<ExtArgs>
    _count?: boolean | EmprestimoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["emprestimo"]>

  export type EmprestimoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    valor?: boolean
    valorTotal?: boolean
    taxaJuros?: boolean
    numeroParcelas?: boolean
    valorParcela?: boolean
    dataEmprestimo?: boolean
    dataVencimento?: boolean
    status?: boolean
    observacoes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    clienteId?: boolean
    userId?: boolean
    cliente?: boolean | ClienteDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["emprestimo"]>

  export type EmprestimoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    valor?: boolean
    valorTotal?: boolean
    taxaJuros?: boolean
    numeroParcelas?: boolean
    valorParcela?: boolean
    dataEmprestimo?: boolean
    dataVencimento?: boolean
    status?: boolean
    observacoes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    clienteId?: boolean
    userId?: boolean
    cliente?: boolean | ClienteDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["emprestimo"]>

  export type EmprestimoSelectScalar = {
    id?: boolean
    valor?: boolean
    valorTotal?: boolean
    taxaJuros?: boolean
    numeroParcelas?: boolean
    valorParcela?: boolean
    dataEmprestimo?: boolean
    dataVencimento?: boolean
    status?: boolean
    observacoes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    clienteId?: boolean
    userId?: boolean
  }

  export type EmprestimoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "valor" | "valorTotal" | "taxaJuros" | "numeroParcelas" | "valorParcela" | "dataEmprestimo" | "dataVencimento" | "status" | "observacoes" | "createdAt" | "updatedAt" | "clienteId" | "userId", ExtArgs["result"]["emprestimo"]>
  export type EmprestimoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cliente?: boolean | ClienteDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    pagamentos?: boolean | Emprestimo$pagamentosArgs<ExtArgs>
    movimentacoes?: boolean | Emprestimo$movimentacoesArgs<ExtArgs>
    _count?: boolean | EmprestimoCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type EmprestimoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cliente?: boolean | ClienteDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type EmprestimoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cliente?: boolean | ClienteDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $EmprestimoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Emprestimo"
    objects: {
      cliente: Prisma.$ClientePayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
      pagamentos: Prisma.$PagamentoPayload<ExtArgs>[]
      movimentacoes: Prisma.$MovimentacaoCaixaPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      valor: Prisma.Decimal
      valorTotal: Prisma.Decimal
      taxaJuros: number
      numeroParcelas: number
      valorParcela: Prisma.Decimal
      dataEmprestimo: Date
      dataVencimento: Date
      status: $Enums.StatusEmprestimo
      observacoes: string | null
      createdAt: Date
      updatedAt: Date
      clienteId: string
      userId: string
    }, ExtArgs["result"]["emprestimo"]>
    composites: {}
  }

  type EmprestimoGetPayload<S extends boolean | null | undefined | EmprestimoDefaultArgs> = $Result.GetResult<Prisma.$EmprestimoPayload, S>

  type EmprestimoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EmprestimoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EmprestimoCountAggregateInputType | true
    }

  export interface EmprestimoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Emprestimo'], meta: { name: 'Emprestimo' } }
    /**
     * Find zero or one Emprestimo that matches the filter.
     * @param {EmprestimoFindUniqueArgs} args - Arguments to find a Emprestimo
     * @example
     * // Get one Emprestimo
     * const emprestimo = await prisma.emprestimo.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EmprestimoFindUniqueArgs>(args: SelectSubset<T, EmprestimoFindUniqueArgs<ExtArgs>>): Prisma__EmprestimoClient<$Result.GetResult<Prisma.$EmprestimoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Emprestimo that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EmprestimoFindUniqueOrThrowArgs} args - Arguments to find a Emprestimo
     * @example
     * // Get one Emprestimo
     * const emprestimo = await prisma.emprestimo.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EmprestimoFindUniqueOrThrowArgs>(args: SelectSubset<T, EmprestimoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EmprestimoClient<$Result.GetResult<Prisma.$EmprestimoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Emprestimo that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmprestimoFindFirstArgs} args - Arguments to find a Emprestimo
     * @example
     * // Get one Emprestimo
     * const emprestimo = await prisma.emprestimo.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EmprestimoFindFirstArgs>(args?: SelectSubset<T, EmprestimoFindFirstArgs<ExtArgs>>): Prisma__EmprestimoClient<$Result.GetResult<Prisma.$EmprestimoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Emprestimo that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmprestimoFindFirstOrThrowArgs} args - Arguments to find a Emprestimo
     * @example
     * // Get one Emprestimo
     * const emprestimo = await prisma.emprestimo.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EmprestimoFindFirstOrThrowArgs>(args?: SelectSubset<T, EmprestimoFindFirstOrThrowArgs<ExtArgs>>): Prisma__EmprestimoClient<$Result.GetResult<Prisma.$EmprestimoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Emprestimos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmprestimoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Emprestimos
     * const emprestimos = await prisma.emprestimo.findMany()
     * 
     * // Get first 10 Emprestimos
     * const emprestimos = await prisma.emprestimo.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const emprestimoWithIdOnly = await prisma.emprestimo.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EmprestimoFindManyArgs>(args?: SelectSubset<T, EmprestimoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmprestimoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Emprestimo.
     * @param {EmprestimoCreateArgs} args - Arguments to create a Emprestimo.
     * @example
     * // Create one Emprestimo
     * const Emprestimo = await prisma.emprestimo.create({
     *   data: {
     *     // ... data to create a Emprestimo
     *   }
     * })
     * 
     */
    create<T extends EmprestimoCreateArgs>(args: SelectSubset<T, EmprestimoCreateArgs<ExtArgs>>): Prisma__EmprestimoClient<$Result.GetResult<Prisma.$EmprestimoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Emprestimos.
     * @param {EmprestimoCreateManyArgs} args - Arguments to create many Emprestimos.
     * @example
     * // Create many Emprestimos
     * const emprestimo = await prisma.emprestimo.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EmprestimoCreateManyArgs>(args?: SelectSubset<T, EmprestimoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Emprestimos and returns the data saved in the database.
     * @param {EmprestimoCreateManyAndReturnArgs} args - Arguments to create many Emprestimos.
     * @example
     * // Create many Emprestimos
     * const emprestimo = await prisma.emprestimo.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Emprestimos and only return the `id`
     * const emprestimoWithIdOnly = await prisma.emprestimo.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EmprestimoCreateManyAndReturnArgs>(args?: SelectSubset<T, EmprestimoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmprestimoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Emprestimo.
     * @param {EmprestimoDeleteArgs} args - Arguments to delete one Emprestimo.
     * @example
     * // Delete one Emprestimo
     * const Emprestimo = await prisma.emprestimo.delete({
     *   where: {
     *     // ... filter to delete one Emprestimo
     *   }
     * })
     * 
     */
    delete<T extends EmprestimoDeleteArgs>(args: SelectSubset<T, EmprestimoDeleteArgs<ExtArgs>>): Prisma__EmprestimoClient<$Result.GetResult<Prisma.$EmprestimoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Emprestimo.
     * @param {EmprestimoUpdateArgs} args - Arguments to update one Emprestimo.
     * @example
     * // Update one Emprestimo
     * const emprestimo = await prisma.emprestimo.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EmprestimoUpdateArgs>(args: SelectSubset<T, EmprestimoUpdateArgs<ExtArgs>>): Prisma__EmprestimoClient<$Result.GetResult<Prisma.$EmprestimoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Emprestimos.
     * @param {EmprestimoDeleteManyArgs} args - Arguments to filter Emprestimos to delete.
     * @example
     * // Delete a few Emprestimos
     * const { count } = await prisma.emprestimo.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EmprestimoDeleteManyArgs>(args?: SelectSubset<T, EmprestimoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Emprestimos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmprestimoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Emprestimos
     * const emprestimo = await prisma.emprestimo.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EmprestimoUpdateManyArgs>(args: SelectSubset<T, EmprestimoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Emprestimos and returns the data updated in the database.
     * @param {EmprestimoUpdateManyAndReturnArgs} args - Arguments to update many Emprestimos.
     * @example
     * // Update many Emprestimos
     * const emprestimo = await prisma.emprestimo.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Emprestimos and only return the `id`
     * const emprestimoWithIdOnly = await prisma.emprestimo.updateManyAndReturn({
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
    updateManyAndReturn<T extends EmprestimoUpdateManyAndReturnArgs>(args: SelectSubset<T, EmprestimoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmprestimoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Emprestimo.
     * @param {EmprestimoUpsertArgs} args - Arguments to update or create a Emprestimo.
     * @example
     * // Update or create a Emprestimo
     * const emprestimo = await prisma.emprestimo.upsert({
     *   create: {
     *     // ... data to create a Emprestimo
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Emprestimo we want to update
     *   }
     * })
     */
    upsert<T extends EmprestimoUpsertArgs>(args: SelectSubset<T, EmprestimoUpsertArgs<ExtArgs>>): Prisma__EmprestimoClient<$Result.GetResult<Prisma.$EmprestimoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Emprestimos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmprestimoCountArgs} args - Arguments to filter Emprestimos to count.
     * @example
     * // Count the number of Emprestimos
     * const count = await prisma.emprestimo.count({
     *   where: {
     *     // ... the filter for the Emprestimos we want to count
     *   }
     * })
    **/
    count<T extends EmprestimoCountArgs>(
      args?: Subset<T, EmprestimoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EmprestimoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Emprestimo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmprestimoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EmprestimoAggregateArgs>(args: Subset<T, EmprestimoAggregateArgs>): Prisma.PrismaPromise<GetEmprestimoAggregateType<T>>

    /**
     * Group by Emprestimo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmprestimoGroupByArgs} args - Group by arguments.
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
    groupBy<
      T extends EmprestimoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EmprestimoGroupByArgs['orderBy'] }
        : { orderBy?: EmprestimoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, EmprestimoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEmprestimoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Emprestimo model
   */
  readonly fields: EmprestimoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Emprestimo.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EmprestimoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    cliente<T extends ClienteDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ClienteDefaultArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    pagamentos<T extends Emprestimo$pagamentosArgs<ExtArgs> = {}>(args?: Subset<T, Emprestimo$pagamentosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PagamentoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    movimentacoes<T extends Emprestimo$movimentacoesArgs<ExtArgs> = {}>(args?: Subset<T, Emprestimo$movimentacoesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MovimentacaoCaixaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Emprestimo model
   */
  interface EmprestimoFieldRefs {
    readonly id: FieldRef<"Emprestimo", 'String'>
    readonly valor: FieldRef<"Emprestimo", 'Decimal'>
    readonly valorTotal: FieldRef<"Emprestimo", 'Decimal'>
    readonly taxaJuros: FieldRef<"Emprestimo", 'Float'>
    readonly numeroParcelas: FieldRef<"Emprestimo", 'Int'>
    readonly valorParcela: FieldRef<"Emprestimo", 'Decimal'>
    readonly dataEmprestimo: FieldRef<"Emprestimo", 'DateTime'>
    readonly dataVencimento: FieldRef<"Emprestimo", 'DateTime'>
    readonly status: FieldRef<"Emprestimo", 'StatusEmprestimo'>
    readonly observacoes: FieldRef<"Emprestimo", 'String'>
    readonly createdAt: FieldRef<"Emprestimo", 'DateTime'>
    readonly updatedAt: FieldRef<"Emprestimo", 'DateTime'>
    readonly clienteId: FieldRef<"Emprestimo", 'String'>
    readonly userId: FieldRef<"Emprestimo", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Emprestimo findUnique
   */
  export type EmprestimoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Emprestimo
     */
    select?: EmprestimoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Emprestimo
     */
    omit?: EmprestimoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmprestimoInclude<ExtArgs> | null
    /**
     * Filter, which Emprestimo to fetch.
     */
    where: EmprestimoWhereUniqueInput
  }

  /**
   * Emprestimo findUniqueOrThrow
   */
  export type EmprestimoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Emprestimo
     */
    select?: EmprestimoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Emprestimo
     */
    omit?: EmprestimoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmprestimoInclude<ExtArgs> | null
    /**
     * Filter, which Emprestimo to fetch.
     */
    where: EmprestimoWhereUniqueInput
  }

  /**
   * Emprestimo findFirst
   */
  export type EmprestimoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Emprestimo
     */
    select?: EmprestimoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Emprestimo
     */
    omit?: EmprestimoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmprestimoInclude<ExtArgs> | null
    /**
     * Filter, which Emprestimo to fetch.
     */
    where?: EmprestimoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Emprestimos to fetch.
     */
    orderBy?: EmprestimoOrderByWithRelationInput | EmprestimoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Emprestimos.
     */
    cursor?: EmprestimoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Emprestimos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Emprestimos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Emprestimos.
     */
    distinct?: EmprestimoScalarFieldEnum | EmprestimoScalarFieldEnum[]
  }

  /**
   * Emprestimo findFirstOrThrow
   */
  export type EmprestimoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Emprestimo
     */
    select?: EmprestimoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Emprestimo
     */
    omit?: EmprestimoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmprestimoInclude<ExtArgs> | null
    /**
     * Filter, which Emprestimo to fetch.
     */
    where?: EmprestimoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Emprestimos to fetch.
     */
    orderBy?: EmprestimoOrderByWithRelationInput | EmprestimoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Emprestimos.
     */
    cursor?: EmprestimoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Emprestimos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Emprestimos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Emprestimos.
     */
    distinct?: EmprestimoScalarFieldEnum | EmprestimoScalarFieldEnum[]
  }

  /**
   * Emprestimo findMany
   */
  export type EmprestimoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Emprestimo
     */
    select?: EmprestimoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Emprestimo
     */
    omit?: EmprestimoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmprestimoInclude<ExtArgs> | null
    /**
     * Filter, which Emprestimos to fetch.
     */
    where?: EmprestimoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Emprestimos to fetch.
     */
    orderBy?: EmprestimoOrderByWithRelationInput | EmprestimoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Emprestimos.
     */
    cursor?: EmprestimoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Emprestimos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Emprestimos.
     */
    skip?: number
    distinct?: EmprestimoScalarFieldEnum | EmprestimoScalarFieldEnum[]
  }

  /**
   * Emprestimo create
   */
  export type EmprestimoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Emprestimo
     */
    select?: EmprestimoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Emprestimo
     */
    omit?: EmprestimoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmprestimoInclude<ExtArgs> | null
    /**
     * The data needed to create a Emprestimo.
     */
    data: XOR<EmprestimoCreateInput, EmprestimoUncheckedCreateInput>
  }

  /**
   * Emprestimo createMany
   */
  export type EmprestimoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Emprestimos.
     */
    data: EmprestimoCreateManyInput | EmprestimoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Emprestimo createManyAndReturn
   */
  export type EmprestimoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Emprestimo
     */
    select?: EmprestimoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Emprestimo
     */
    omit?: EmprestimoOmit<ExtArgs> | null
    /**
     * The data used to create many Emprestimos.
     */
    data: EmprestimoCreateManyInput | EmprestimoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmprestimoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Emprestimo update
   */
  export type EmprestimoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Emprestimo
     */
    select?: EmprestimoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Emprestimo
     */
    omit?: EmprestimoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmprestimoInclude<ExtArgs> | null
    /**
     * The data needed to update a Emprestimo.
     */
    data: XOR<EmprestimoUpdateInput, EmprestimoUncheckedUpdateInput>
    /**
     * Choose, which Emprestimo to update.
     */
    where: EmprestimoWhereUniqueInput
  }

  /**
   * Emprestimo updateMany
   */
  export type EmprestimoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Emprestimos.
     */
    data: XOR<EmprestimoUpdateManyMutationInput, EmprestimoUncheckedUpdateManyInput>
    /**
     * Filter which Emprestimos to update
     */
    where?: EmprestimoWhereInput
    /**
     * Limit how many Emprestimos to update.
     */
    limit?: number
  }

  /**
   * Emprestimo updateManyAndReturn
   */
  export type EmprestimoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Emprestimo
     */
    select?: EmprestimoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Emprestimo
     */
    omit?: EmprestimoOmit<ExtArgs> | null
    /**
     * The data used to update Emprestimos.
     */
    data: XOR<EmprestimoUpdateManyMutationInput, EmprestimoUncheckedUpdateManyInput>
    /**
     * Filter which Emprestimos to update
     */
    where?: EmprestimoWhereInput
    /**
     * Limit how many Emprestimos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmprestimoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Emprestimo upsert
   */
  export type EmprestimoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Emprestimo
     */
    select?: EmprestimoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Emprestimo
     */
    omit?: EmprestimoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmprestimoInclude<ExtArgs> | null
    /**
     * The filter to search for the Emprestimo to update in case it exists.
     */
    where: EmprestimoWhereUniqueInput
    /**
     * In case the Emprestimo found by the `where` argument doesn't exist, create a new Emprestimo with this data.
     */
    create: XOR<EmprestimoCreateInput, EmprestimoUncheckedCreateInput>
    /**
     * In case the Emprestimo was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EmprestimoUpdateInput, EmprestimoUncheckedUpdateInput>
  }

  /**
   * Emprestimo delete
   */
  export type EmprestimoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Emprestimo
     */
    select?: EmprestimoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Emprestimo
     */
    omit?: EmprestimoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmprestimoInclude<ExtArgs> | null
    /**
     * Filter which Emprestimo to delete.
     */
    where: EmprestimoWhereUniqueInput
  }

  /**
   * Emprestimo deleteMany
   */
  export type EmprestimoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Emprestimos to delete
     */
    where?: EmprestimoWhereInput
    /**
     * Limit how many Emprestimos to delete.
     */
    limit?: number
  }

  /**
   * Emprestimo.pagamentos
   */
  export type Emprestimo$pagamentosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pagamento
     */
    select?: PagamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pagamento
     */
    omit?: PagamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PagamentoInclude<ExtArgs> | null
    where?: PagamentoWhereInput
    orderBy?: PagamentoOrderByWithRelationInput | PagamentoOrderByWithRelationInput[]
    cursor?: PagamentoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PagamentoScalarFieldEnum | PagamentoScalarFieldEnum[]
  }

  /**
   * Emprestimo.movimentacoes
   */
  export type Emprestimo$movimentacoesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MovimentacaoCaixa
     */
    select?: MovimentacaoCaixaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MovimentacaoCaixa
     */
    omit?: MovimentacaoCaixaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovimentacaoCaixaInclude<ExtArgs> | null
    where?: MovimentacaoCaixaWhereInput
    orderBy?: MovimentacaoCaixaOrderByWithRelationInput | MovimentacaoCaixaOrderByWithRelationInput[]
    cursor?: MovimentacaoCaixaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MovimentacaoCaixaScalarFieldEnum | MovimentacaoCaixaScalarFieldEnum[]
  }

  /**
   * Emprestimo without action
   */
  export type EmprestimoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Emprestimo
     */
    select?: EmprestimoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Emprestimo
     */
    omit?: EmprestimoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmprestimoInclude<ExtArgs> | null
  }


  /**
   * Model Pagamento
   */

  export type AggregatePagamento = {
    _count: PagamentoCountAggregateOutputType | null
    _avg: PagamentoAvgAggregateOutputType | null
    _sum: PagamentoSumAggregateOutputType | null
    _min: PagamentoMinAggregateOutputType | null
    _max: PagamentoMaxAggregateOutputType | null
  }

  export type PagamentoAvgAggregateOutputType = {
    numeroParcela: number | null
    valorParcela: Decimal | null
    valorPago: Decimal | null
  }

  export type PagamentoSumAggregateOutputType = {
    numeroParcela: number | null
    valorParcela: Decimal | null
    valorPago: Decimal | null
  }

  export type PagamentoMinAggregateOutputType = {
    id: string | null
    numeroParcela: number | null
    valorParcela: Decimal | null
    valorPago: Decimal | null
    dataVencimento: Date | null
    dataPagamento: Date | null
    status: $Enums.StatusPagamento | null
    formaPagamento: $Enums.FormaPagamento | null
    observacoes: string | null
    createdAt: Date | null
    updatedAt: Date | null
    emprestimoId: string | null
    userId: string | null
  }

  export type PagamentoMaxAggregateOutputType = {
    id: string | null
    numeroParcela: number | null
    valorParcela: Decimal | null
    valorPago: Decimal | null
    dataVencimento: Date | null
    dataPagamento: Date | null
    status: $Enums.StatusPagamento | null
    formaPagamento: $Enums.FormaPagamento | null
    observacoes: string | null
    createdAt: Date | null
    updatedAt: Date | null
    emprestimoId: string | null
    userId: string | null
  }

  export type PagamentoCountAggregateOutputType = {
    id: number
    numeroParcela: number
    valorParcela: number
    valorPago: number
    dataVencimento: number
    dataPagamento: number
    status: number
    formaPagamento: number
    observacoes: number
    createdAt: number
    updatedAt: number
    emprestimoId: number
    userId: number
    _all: number
  }


  export type PagamentoAvgAggregateInputType = {
    numeroParcela?: true
    valorParcela?: true
    valorPago?: true
  }

  export type PagamentoSumAggregateInputType = {
    numeroParcela?: true
    valorParcela?: true
    valorPago?: true
  }

  export type PagamentoMinAggregateInputType = {
    id?: true
    numeroParcela?: true
    valorParcela?: true
    valorPago?: true
    dataVencimento?: true
    dataPagamento?: true
    status?: true
    formaPagamento?: true
    observacoes?: true
    createdAt?: true
    updatedAt?: true
    emprestimoId?: true
    userId?: true
  }

  export type PagamentoMaxAggregateInputType = {
    id?: true
    numeroParcela?: true
    valorParcela?: true
    valorPago?: true
    dataVencimento?: true
    dataPagamento?: true
    status?: true
    formaPagamento?: true
    observacoes?: true
    createdAt?: true
    updatedAt?: true
    emprestimoId?: true
    userId?: true
  }

  export type PagamentoCountAggregateInputType = {
    id?: true
    numeroParcela?: true
    valorParcela?: true
    valorPago?: true
    dataVencimento?: true
    dataPagamento?: true
    status?: true
    formaPagamento?: true
    observacoes?: true
    createdAt?: true
    updatedAt?: true
    emprestimoId?: true
    userId?: true
    _all?: true
  }

  export type PagamentoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Pagamento to aggregate.
     */
    where?: PagamentoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pagamentos to fetch.
     */
    orderBy?: PagamentoOrderByWithRelationInput | PagamentoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PagamentoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pagamentos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pagamentos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Pagamentos
    **/
    _count?: true | PagamentoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PagamentoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PagamentoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PagamentoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PagamentoMaxAggregateInputType
  }

  export type GetPagamentoAggregateType<T extends PagamentoAggregateArgs> = {
        [P in keyof T & keyof AggregatePagamento]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePagamento[P]>
      : GetScalarType<T[P], AggregatePagamento[P]>
  }




  export type PagamentoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PagamentoWhereInput
    orderBy?: PagamentoOrderByWithAggregationInput | PagamentoOrderByWithAggregationInput[]
    by: PagamentoScalarFieldEnum[] | PagamentoScalarFieldEnum
    having?: PagamentoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PagamentoCountAggregateInputType | true
    _avg?: PagamentoAvgAggregateInputType
    _sum?: PagamentoSumAggregateInputType
    _min?: PagamentoMinAggregateInputType
    _max?: PagamentoMaxAggregateInputType
  }

  export type PagamentoGroupByOutputType = {
    id: string
    numeroParcela: number
    valorParcela: Decimal
    valorPago: Decimal
    dataVencimento: Date
    dataPagamento: Date | null
    status: $Enums.StatusPagamento
    formaPagamento: $Enums.FormaPagamento | null
    observacoes: string | null
    createdAt: Date
    updatedAt: Date
    emprestimoId: string
    userId: string
    _count: PagamentoCountAggregateOutputType | null
    _avg: PagamentoAvgAggregateOutputType | null
    _sum: PagamentoSumAggregateOutputType | null
    _min: PagamentoMinAggregateOutputType | null
    _max: PagamentoMaxAggregateOutputType | null
  }

  type GetPagamentoGroupByPayload<T extends PagamentoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PagamentoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PagamentoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PagamentoGroupByOutputType[P]>
            : GetScalarType<T[P], PagamentoGroupByOutputType[P]>
        }
      >
    >


  export type PagamentoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    numeroParcela?: boolean
    valorParcela?: boolean
    valorPago?: boolean
    dataVencimento?: boolean
    dataPagamento?: boolean
    status?: boolean
    formaPagamento?: boolean
    observacoes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    emprestimoId?: boolean
    userId?: boolean
    emprestimo?: boolean | EmprestimoDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pagamento"]>

  export type PagamentoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    numeroParcela?: boolean
    valorParcela?: boolean
    valorPago?: boolean
    dataVencimento?: boolean
    dataPagamento?: boolean
    status?: boolean
    formaPagamento?: boolean
    observacoes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    emprestimoId?: boolean
    userId?: boolean
    emprestimo?: boolean | EmprestimoDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pagamento"]>

  export type PagamentoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    numeroParcela?: boolean
    valorParcela?: boolean
    valorPago?: boolean
    dataVencimento?: boolean
    dataPagamento?: boolean
    status?: boolean
    formaPagamento?: boolean
    observacoes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    emprestimoId?: boolean
    userId?: boolean
    emprestimo?: boolean | EmprestimoDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pagamento"]>

  export type PagamentoSelectScalar = {
    id?: boolean
    numeroParcela?: boolean
    valorParcela?: boolean
    valorPago?: boolean
    dataVencimento?: boolean
    dataPagamento?: boolean
    status?: boolean
    formaPagamento?: boolean
    observacoes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    emprestimoId?: boolean
    userId?: boolean
  }

  export type PagamentoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "numeroParcela" | "valorParcela" | "valorPago" | "dataVencimento" | "dataPagamento" | "status" | "formaPagamento" | "observacoes" | "createdAt" | "updatedAt" | "emprestimoId" | "userId", ExtArgs["result"]["pagamento"]>
  export type PagamentoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    emprestimo?: boolean | EmprestimoDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type PagamentoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    emprestimo?: boolean | EmprestimoDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type PagamentoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    emprestimo?: boolean | EmprestimoDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $PagamentoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Pagamento"
    objects: {
      emprestimo: Prisma.$EmprestimoPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      numeroParcela: number
      valorParcela: Prisma.Decimal
      valorPago: Prisma.Decimal
      dataVencimento: Date
      dataPagamento: Date | null
      status: $Enums.StatusPagamento
      formaPagamento: $Enums.FormaPagamento | null
      observacoes: string | null
      createdAt: Date
      updatedAt: Date
      emprestimoId: string
      userId: string
    }, ExtArgs["result"]["pagamento"]>
    composites: {}
  }

  type PagamentoGetPayload<S extends boolean | null | undefined | PagamentoDefaultArgs> = $Result.GetResult<Prisma.$PagamentoPayload, S>

  type PagamentoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PagamentoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PagamentoCountAggregateInputType | true
    }

  export interface PagamentoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Pagamento'], meta: { name: 'Pagamento' } }
    /**
     * Find zero or one Pagamento that matches the filter.
     * @param {PagamentoFindUniqueArgs} args - Arguments to find a Pagamento
     * @example
     * // Get one Pagamento
     * const pagamento = await prisma.pagamento.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PagamentoFindUniqueArgs>(args: SelectSubset<T, PagamentoFindUniqueArgs<ExtArgs>>): Prisma__PagamentoClient<$Result.GetResult<Prisma.$PagamentoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Pagamento that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PagamentoFindUniqueOrThrowArgs} args - Arguments to find a Pagamento
     * @example
     * // Get one Pagamento
     * const pagamento = await prisma.pagamento.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PagamentoFindUniqueOrThrowArgs>(args: SelectSubset<T, PagamentoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PagamentoClient<$Result.GetResult<Prisma.$PagamentoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Pagamento that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PagamentoFindFirstArgs} args - Arguments to find a Pagamento
     * @example
     * // Get one Pagamento
     * const pagamento = await prisma.pagamento.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PagamentoFindFirstArgs>(args?: SelectSubset<T, PagamentoFindFirstArgs<ExtArgs>>): Prisma__PagamentoClient<$Result.GetResult<Prisma.$PagamentoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Pagamento that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PagamentoFindFirstOrThrowArgs} args - Arguments to find a Pagamento
     * @example
     * // Get one Pagamento
     * const pagamento = await prisma.pagamento.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PagamentoFindFirstOrThrowArgs>(args?: SelectSubset<T, PagamentoFindFirstOrThrowArgs<ExtArgs>>): Prisma__PagamentoClient<$Result.GetResult<Prisma.$PagamentoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Pagamentos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PagamentoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Pagamentos
     * const pagamentos = await prisma.pagamento.findMany()
     * 
     * // Get first 10 Pagamentos
     * const pagamentos = await prisma.pagamento.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const pagamentoWithIdOnly = await prisma.pagamento.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PagamentoFindManyArgs>(args?: SelectSubset<T, PagamentoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PagamentoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Pagamento.
     * @param {PagamentoCreateArgs} args - Arguments to create a Pagamento.
     * @example
     * // Create one Pagamento
     * const Pagamento = await prisma.pagamento.create({
     *   data: {
     *     // ... data to create a Pagamento
     *   }
     * })
     * 
     */
    create<T extends PagamentoCreateArgs>(args: SelectSubset<T, PagamentoCreateArgs<ExtArgs>>): Prisma__PagamentoClient<$Result.GetResult<Prisma.$PagamentoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Pagamentos.
     * @param {PagamentoCreateManyArgs} args - Arguments to create many Pagamentos.
     * @example
     * // Create many Pagamentos
     * const pagamento = await prisma.pagamento.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PagamentoCreateManyArgs>(args?: SelectSubset<T, PagamentoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Pagamentos and returns the data saved in the database.
     * @param {PagamentoCreateManyAndReturnArgs} args - Arguments to create many Pagamentos.
     * @example
     * // Create many Pagamentos
     * const pagamento = await prisma.pagamento.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Pagamentos and only return the `id`
     * const pagamentoWithIdOnly = await prisma.pagamento.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PagamentoCreateManyAndReturnArgs>(args?: SelectSubset<T, PagamentoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PagamentoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Pagamento.
     * @param {PagamentoDeleteArgs} args - Arguments to delete one Pagamento.
     * @example
     * // Delete one Pagamento
     * const Pagamento = await prisma.pagamento.delete({
     *   where: {
     *     // ... filter to delete one Pagamento
     *   }
     * })
     * 
     */
    delete<T extends PagamentoDeleteArgs>(args: SelectSubset<T, PagamentoDeleteArgs<ExtArgs>>): Prisma__PagamentoClient<$Result.GetResult<Prisma.$PagamentoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Pagamento.
     * @param {PagamentoUpdateArgs} args - Arguments to update one Pagamento.
     * @example
     * // Update one Pagamento
     * const pagamento = await prisma.pagamento.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PagamentoUpdateArgs>(args: SelectSubset<T, PagamentoUpdateArgs<ExtArgs>>): Prisma__PagamentoClient<$Result.GetResult<Prisma.$PagamentoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Pagamentos.
     * @param {PagamentoDeleteManyArgs} args - Arguments to filter Pagamentos to delete.
     * @example
     * // Delete a few Pagamentos
     * const { count } = await prisma.pagamento.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PagamentoDeleteManyArgs>(args?: SelectSubset<T, PagamentoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pagamentos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PagamentoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Pagamentos
     * const pagamento = await prisma.pagamento.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PagamentoUpdateManyArgs>(args: SelectSubset<T, PagamentoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pagamentos and returns the data updated in the database.
     * @param {PagamentoUpdateManyAndReturnArgs} args - Arguments to update many Pagamentos.
     * @example
     * // Update many Pagamentos
     * const pagamento = await prisma.pagamento.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Pagamentos and only return the `id`
     * const pagamentoWithIdOnly = await prisma.pagamento.updateManyAndReturn({
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
    updateManyAndReturn<T extends PagamentoUpdateManyAndReturnArgs>(args: SelectSubset<T, PagamentoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PagamentoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Pagamento.
     * @param {PagamentoUpsertArgs} args - Arguments to update or create a Pagamento.
     * @example
     * // Update or create a Pagamento
     * const pagamento = await prisma.pagamento.upsert({
     *   create: {
     *     // ... data to create a Pagamento
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Pagamento we want to update
     *   }
     * })
     */
    upsert<T extends PagamentoUpsertArgs>(args: SelectSubset<T, PagamentoUpsertArgs<ExtArgs>>): Prisma__PagamentoClient<$Result.GetResult<Prisma.$PagamentoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Pagamentos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PagamentoCountArgs} args - Arguments to filter Pagamentos to count.
     * @example
     * // Count the number of Pagamentos
     * const count = await prisma.pagamento.count({
     *   where: {
     *     // ... the filter for the Pagamentos we want to count
     *   }
     * })
    **/
    count<T extends PagamentoCountArgs>(
      args?: Subset<T, PagamentoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PagamentoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Pagamento.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PagamentoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PagamentoAggregateArgs>(args: Subset<T, PagamentoAggregateArgs>): Prisma.PrismaPromise<GetPagamentoAggregateType<T>>

    /**
     * Group by Pagamento.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PagamentoGroupByArgs} args - Group by arguments.
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
    groupBy<
      T extends PagamentoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PagamentoGroupByArgs['orderBy'] }
        : { orderBy?: PagamentoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PagamentoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPagamentoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Pagamento model
   */
  readonly fields: PagamentoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Pagamento.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PagamentoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    emprestimo<T extends EmprestimoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EmprestimoDefaultArgs<ExtArgs>>): Prisma__EmprestimoClient<$Result.GetResult<Prisma.$EmprestimoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Pagamento model
   */
  interface PagamentoFieldRefs {
    readonly id: FieldRef<"Pagamento", 'String'>
    readonly numeroParcela: FieldRef<"Pagamento", 'Int'>
    readonly valorParcela: FieldRef<"Pagamento", 'Decimal'>
    readonly valorPago: FieldRef<"Pagamento", 'Decimal'>
    readonly dataVencimento: FieldRef<"Pagamento", 'DateTime'>
    readonly dataPagamento: FieldRef<"Pagamento", 'DateTime'>
    readonly status: FieldRef<"Pagamento", 'StatusPagamento'>
    readonly formaPagamento: FieldRef<"Pagamento", 'FormaPagamento'>
    readonly observacoes: FieldRef<"Pagamento", 'String'>
    readonly createdAt: FieldRef<"Pagamento", 'DateTime'>
    readonly updatedAt: FieldRef<"Pagamento", 'DateTime'>
    readonly emprestimoId: FieldRef<"Pagamento", 'String'>
    readonly userId: FieldRef<"Pagamento", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Pagamento findUnique
   */
  export type PagamentoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pagamento
     */
    select?: PagamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pagamento
     */
    omit?: PagamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PagamentoInclude<ExtArgs> | null
    /**
     * Filter, which Pagamento to fetch.
     */
    where: PagamentoWhereUniqueInput
  }

  /**
   * Pagamento findUniqueOrThrow
   */
  export type PagamentoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pagamento
     */
    select?: PagamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pagamento
     */
    omit?: PagamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PagamentoInclude<ExtArgs> | null
    /**
     * Filter, which Pagamento to fetch.
     */
    where: PagamentoWhereUniqueInput
  }

  /**
   * Pagamento findFirst
   */
  export type PagamentoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pagamento
     */
    select?: PagamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pagamento
     */
    omit?: PagamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PagamentoInclude<ExtArgs> | null
    /**
     * Filter, which Pagamento to fetch.
     */
    where?: PagamentoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pagamentos to fetch.
     */
    orderBy?: PagamentoOrderByWithRelationInput | PagamentoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Pagamentos.
     */
    cursor?: PagamentoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pagamentos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pagamentos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pagamentos.
     */
    distinct?: PagamentoScalarFieldEnum | PagamentoScalarFieldEnum[]
  }

  /**
   * Pagamento findFirstOrThrow
   */
  export type PagamentoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pagamento
     */
    select?: PagamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pagamento
     */
    omit?: PagamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PagamentoInclude<ExtArgs> | null
    /**
     * Filter, which Pagamento to fetch.
     */
    where?: PagamentoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pagamentos to fetch.
     */
    orderBy?: PagamentoOrderByWithRelationInput | PagamentoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Pagamentos.
     */
    cursor?: PagamentoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pagamentos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pagamentos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pagamentos.
     */
    distinct?: PagamentoScalarFieldEnum | PagamentoScalarFieldEnum[]
  }

  /**
   * Pagamento findMany
   */
  export type PagamentoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pagamento
     */
    select?: PagamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pagamento
     */
    omit?: PagamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PagamentoInclude<ExtArgs> | null
    /**
     * Filter, which Pagamentos to fetch.
     */
    where?: PagamentoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pagamentos to fetch.
     */
    orderBy?: PagamentoOrderByWithRelationInput | PagamentoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Pagamentos.
     */
    cursor?: PagamentoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pagamentos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pagamentos.
     */
    skip?: number
    distinct?: PagamentoScalarFieldEnum | PagamentoScalarFieldEnum[]
  }

  /**
   * Pagamento create
   */
  export type PagamentoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pagamento
     */
    select?: PagamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pagamento
     */
    omit?: PagamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PagamentoInclude<ExtArgs> | null
    /**
     * The data needed to create a Pagamento.
     */
    data: XOR<PagamentoCreateInput, PagamentoUncheckedCreateInput>
  }

  /**
   * Pagamento createMany
   */
  export type PagamentoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Pagamentos.
     */
    data: PagamentoCreateManyInput | PagamentoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Pagamento createManyAndReturn
   */
  export type PagamentoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pagamento
     */
    select?: PagamentoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Pagamento
     */
    omit?: PagamentoOmit<ExtArgs> | null
    /**
     * The data used to create many Pagamentos.
     */
    data: PagamentoCreateManyInput | PagamentoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PagamentoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Pagamento update
   */
  export type PagamentoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pagamento
     */
    select?: PagamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pagamento
     */
    omit?: PagamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PagamentoInclude<ExtArgs> | null
    /**
     * The data needed to update a Pagamento.
     */
    data: XOR<PagamentoUpdateInput, PagamentoUncheckedUpdateInput>
    /**
     * Choose, which Pagamento to update.
     */
    where: PagamentoWhereUniqueInput
  }

  /**
   * Pagamento updateMany
   */
  export type PagamentoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Pagamentos.
     */
    data: XOR<PagamentoUpdateManyMutationInput, PagamentoUncheckedUpdateManyInput>
    /**
     * Filter which Pagamentos to update
     */
    where?: PagamentoWhereInput
    /**
     * Limit how many Pagamentos to update.
     */
    limit?: number
  }

  /**
   * Pagamento updateManyAndReturn
   */
  export type PagamentoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pagamento
     */
    select?: PagamentoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Pagamento
     */
    omit?: PagamentoOmit<ExtArgs> | null
    /**
     * The data used to update Pagamentos.
     */
    data: XOR<PagamentoUpdateManyMutationInput, PagamentoUncheckedUpdateManyInput>
    /**
     * Filter which Pagamentos to update
     */
    where?: PagamentoWhereInput
    /**
     * Limit how many Pagamentos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PagamentoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Pagamento upsert
   */
  export type PagamentoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pagamento
     */
    select?: PagamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pagamento
     */
    omit?: PagamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PagamentoInclude<ExtArgs> | null
    /**
     * The filter to search for the Pagamento to update in case it exists.
     */
    where: PagamentoWhereUniqueInput
    /**
     * In case the Pagamento found by the `where` argument doesn't exist, create a new Pagamento with this data.
     */
    create: XOR<PagamentoCreateInput, PagamentoUncheckedCreateInput>
    /**
     * In case the Pagamento was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PagamentoUpdateInput, PagamentoUncheckedUpdateInput>
  }

  /**
   * Pagamento delete
   */
  export type PagamentoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pagamento
     */
    select?: PagamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pagamento
     */
    omit?: PagamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PagamentoInclude<ExtArgs> | null
    /**
     * Filter which Pagamento to delete.
     */
    where: PagamentoWhereUniqueInput
  }

  /**
   * Pagamento deleteMany
   */
  export type PagamentoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Pagamentos to delete
     */
    where?: PagamentoWhereInput
    /**
     * Limit how many Pagamentos to delete.
     */
    limit?: number
  }

  /**
   * Pagamento without action
   */
  export type PagamentoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pagamento
     */
    select?: PagamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pagamento
     */
    omit?: PagamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PagamentoInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    clerkId: 'clerkId',
    email: 'email',
    firstName: 'firstName',
    lastName: 'lastName',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const ClienteScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    email: 'email',
    telefone: 'telefone',
    cpf: 'cpf',
    endereco: 'endereco',
    cidade: 'cidade',
    estado: 'estado',
    cep: 'cep',
    dataNascimento: 'dataNascimento',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    userId: 'userId'
  };

  export type ClienteScalarFieldEnum = (typeof ClienteScalarFieldEnum)[keyof typeof ClienteScalarFieldEnum]


  export const CaixaScalarFieldEnum: {
    id: 'id',
    saldoInicial: 'saldoInicial',
    saldoAtual: 'saldoAtual',
    dataInicial: 'dataInicial',
    observacoes: 'observacoes',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    userId: 'userId'
  };

  export type CaixaScalarFieldEnum = (typeof CaixaScalarFieldEnum)[keyof typeof CaixaScalarFieldEnum]


  export const MovimentacaoCaixaScalarFieldEnum: {
    id: 'id',
    tipo: 'tipo',
    valor: 'valor',
    descricao: 'descricao',
    dataMovimentacao: 'dataMovimentacao',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    userId: 'userId',
    emprestimoId: 'emprestimoId'
  };

  export type MovimentacaoCaixaScalarFieldEnum = (typeof MovimentacaoCaixaScalarFieldEnum)[keyof typeof MovimentacaoCaixaScalarFieldEnum]


  export const EmprestimoScalarFieldEnum: {
    id: 'id',
    valor: 'valor',
    valorTotal: 'valorTotal',
    taxaJuros: 'taxaJuros',
    numeroParcelas: 'numeroParcelas',
    valorParcela: 'valorParcela',
    dataEmprestimo: 'dataEmprestimo',
    dataVencimento: 'dataVencimento',
    status: 'status',
    observacoes: 'observacoes',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    clienteId: 'clienteId',
    userId: 'userId'
  };

  export type EmprestimoScalarFieldEnum = (typeof EmprestimoScalarFieldEnum)[keyof typeof EmprestimoScalarFieldEnum]


  export const PagamentoScalarFieldEnum: {
    id: 'id',
    numeroParcela: 'numeroParcela',
    valorParcela: 'valorParcela',
    valorPago: 'valorPago',
    dataVencimento: 'dataVencimento',
    dataPagamento: 'dataPagamento',
    status: 'status',
    formaPagamento: 'formaPagamento',
    observacoes: 'observacoes',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    emprestimoId: 'emprestimoId',
    userId: 'userId'
  };

  export type PagamentoScalarFieldEnum = (typeof PagamentoScalarFieldEnum)[keyof typeof PagamentoScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


  /**
   * Reference to a field of type 'TipoMovimentacao'
   */
  export type EnumTipoMovimentacaoFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TipoMovimentacao'>
    


  /**
   * Reference to a field of type 'TipoMovimentacao[]'
   */
  export type ListEnumTipoMovimentacaoFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TipoMovimentacao[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'StatusEmprestimo'
   */
  export type EnumStatusEmprestimoFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StatusEmprestimo'>
    


  /**
   * Reference to a field of type 'StatusEmprestimo[]'
   */
  export type ListEnumStatusEmprestimoFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StatusEmprestimo[]'>
    


  /**
   * Reference to a field of type 'StatusPagamento'
   */
  export type EnumStatusPagamentoFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StatusPagamento'>
    


  /**
   * Reference to a field of type 'StatusPagamento[]'
   */
  export type ListEnumStatusPagamentoFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StatusPagamento[]'>
    


  /**
   * Reference to a field of type 'FormaPagamento'
   */
  export type EnumFormaPagamentoFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'FormaPagamento'>
    


  /**
   * Reference to a field of type 'FormaPagamento[]'
   */
  export type ListEnumFormaPagamentoFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'FormaPagamento[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    clerkId?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    firstName?: StringNullableFilter<"User"> | string | null
    lastName?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    clientes?: ClienteListRelationFilter
    emprestimos?: EmprestimoListRelationFilter
    pagamentos?: PagamentoListRelationFilter
    caixa?: CaixaListRelationFilter
    movimentacoes?: MovimentacaoCaixaListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    clerkId?: SortOrder
    email?: SortOrder
    firstName?: SortOrderInput | SortOrder
    lastName?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    clientes?: ClienteOrderByRelationAggregateInput
    emprestimos?: EmprestimoOrderByRelationAggregateInput
    pagamentos?: PagamentoOrderByRelationAggregateInput
    caixa?: CaixaOrderByRelationAggregateInput
    movimentacoes?: MovimentacaoCaixaOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    clerkId?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    firstName?: StringNullableFilter<"User"> | string | null
    lastName?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    clientes?: ClienteListRelationFilter
    emprestimos?: EmprestimoListRelationFilter
    pagamentos?: PagamentoListRelationFilter
    caixa?: CaixaListRelationFilter
    movimentacoes?: MovimentacaoCaixaListRelationFilter
  }, "id" | "clerkId" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    clerkId?: SortOrder
    email?: SortOrder
    firstName?: SortOrderInput | SortOrder
    lastName?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    clerkId?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    firstName?: StringNullableWithAggregatesFilter<"User"> | string | null
    lastName?: StringNullableWithAggregatesFilter<"User"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type ClienteWhereInput = {
    AND?: ClienteWhereInput | ClienteWhereInput[]
    OR?: ClienteWhereInput[]
    NOT?: ClienteWhereInput | ClienteWhereInput[]
    id?: StringFilter<"Cliente"> | string
    nome?: StringFilter<"Cliente"> | string
    email?: StringFilter<"Cliente"> | string
    telefone?: StringNullableFilter<"Cliente"> | string | null
    cpf?: StringFilter<"Cliente"> | string
    endereco?: StringNullableFilter<"Cliente"> | string | null
    cidade?: StringNullableFilter<"Cliente"> | string | null
    estado?: StringNullableFilter<"Cliente"> | string | null
    cep?: StringNullableFilter<"Cliente"> | string | null
    dataNascimento?: DateTimeNullableFilter<"Cliente"> | Date | string | null
    createdAt?: DateTimeFilter<"Cliente"> | Date | string
    updatedAt?: DateTimeFilter<"Cliente"> | Date | string
    userId?: StringFilter<"Cliente"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    emprestimos?: EmprestimoListRelationFilter
  }

  export type ClienteOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    telefone?: SortOrderInput | SortOrder
    cpf?: SortOrder
    endereco?: SortOrderInput | SortOrder
    cidade?: SortOrderInput | SortOrder
    estado?: SortOrderInput | SortOrder
    cep?: SortOrderInput | SortOrder
    dataNascimento?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    user?: UserOrderByWithRelationInput
    emprestimos?: EmprestimoOrderByRelationAggregateInput
  }

  export type ClienteWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    cpf?: string
    AND?: ClienteWhereInput | ClienteWhereInput[]
    OR?: ClienteWhereInput[]
    NOT?: ClienteWhereInput | ClienteWhereInput[]
    nome?: StringFilter<"Cliente"> | string
    telefone?: StringNullableFilter<"Cliente"> | string | null
    endereco?: StringNullableFilter<"Cliente"> | string | null
    cidade?: StringNullableFilter<"Cliente"> | string | null
    estado?: StringNullableFilter<"Cliente"> | string | null
    cep?: StringNullableFilter<"Cliente"> | string | null
    dataNascimento?: DateTimeNullableFilter<"Cliente"> | Date | string | null
    createdAt?: DateTimeFilter<"Cliente"> | Date | string
    updatedAt?: DateTimeFilter<"Cliente"> | Date | string
    userId?: StringFilter<"Cliente"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    emprestimos?: EmprestimoListRelationFilter
  }, "id" | "email" | "cpf">

  export type ClienteOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    telefone?: SortOrderInput | SortOrder
    cpf?: SortOrder
    endereco?: SortOrderInput | SortOrder
    cidade?: SortOrderInput | SortOrder
    estado?: SortOrderInput | SortOrder
    cep?: SortOrderInput | SortOrder
    dataNascimento?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    _count?: ClienteCountOrderByAggregateInput
    _max?: ClienteMaxOrderByAggregateInput
    _min?: ClienteMinOrderByAggregateInput
  }

  export type ClienteScalarWhereWithAggregatesInput = {
    AND?: ClienteScalarWhereWithAggregatesInput | ClienteScalarWhereWithAggregatesInput[]
    OR?: ClienteScalarWhereWithAggregatesInput[]
    NOT?: ClienteScalarWhereWithAggregatesInput | ClienteScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Cliente"> | string
    nome?: StringWithAggregatesFilter<"Cliente"> | string
    email?: StringWithAggregatesFilter<"Cliente"> | string
    telefone?: StringNullableWithAggregatesFilter<"Cliente"> | string | null
    cpf?: StringWithAggregatesFilter<"Cliente"> | string
    endereco?: StringNullableWithAggregatesFilter<"Cliente"> | string | null
    cidade?: StringNullableWithAggregatesFilter<"Cliente"> | string | null
    estado?: StringNullableWithAggregatesFilter<"Cliente"> | string | null
    cep?: StringNullableWithAggregatesFilter<"Cliente"> | string | null
    dataNascimento?: DateTimeNullableWithAggregatesFilter<"Cliente"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Cliente"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Cliente"> | Date | string
    userId?: StringWithAggregatesFilter<"Cliente"> | string
  }

  export type CaixaWhereInput = {
    AND?: CaixaWhereInput | CaixaWhereInput[]
    OR?: CaixaWhereInput[]
    NOT?: CaixaWhereInput | CaixaWhereInput[]
    id?: StringFilter<"Caixa"> | string
    saldoInicial?: DecimalFilter<"Caixa"> | Decimal | DecimalJsLike | number | string
    saldoAtual?: DecimalFilter<"Caixa"> | Decimal | DecimalJsLike | number | string
    dataInicial?: DateTimeFilter<"Caixa"> | Date | string
    observacoes?: StringNullableFilter<"Caixa"> | string | null
    createdAt?: DateTimeFilter<"Caixa"> | Date | string
    updatedAt?: DateTimeFilter<"Caixa"> | Date | string
    userId?: StringFilter<"Caixa"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type CaixaOrderByWithRelationInput = {
    id?: SortOrder
    saldoInicial?: SortOrder
    saldoAtual?: SortOrder
    dataInicial?: SortOrder
    observacoes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type CaixaWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CaixaWhereInput | CaixaWhereInput[]
    OR?: CaixaWhereInput[]
    NOT?: CaixaWhereInput | CaixaWhereInput[]
    saldoInicial?: DecimalFilter<"Caixa"> | Decimal | DecimalJsLike | number | string
    saldoAtual?: DecimalFilter<"Caixa"> | Decimal | DecimalJsLike | number | string
    dataInicial?: DateTimeFilter<"Caixa"> | Date | string
    observacoes?: StringNullableFilter<"Caixa"> | string | null
    createdAt?: DateTimeFilter<"Caixa"> | Date | string
    updatedAt?: DateTimeFilter<"Caixa"> | Date | string
    userId?: StringFilter<"Caixa"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type CaixaOrderByWithAggregationInput = {
    id?: SortOrder
    saldoInicial?: SortOrder
    saldoAtual?: SortOrder
    dataInicial?: SortOrder
    observacoes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    _count?: CaixaCountOrderByAggregateInput
    _avg?: CaixaAvgOrderByAggregateInput
    _max?: CaixaMaxOrderByAggregateInput
    _min?: CaixaMinOrderByAggregateInput
    _sum?: CaixaSumOrderByAggregateInput
  }

  export type CaixaScalarWhereWithAggregatesInput = {
    AND?: CaixaScalarWhereWithAggregatesInput | CaixaScalarWhereWithAggregatesInput[]
    OR?: CaixaScalarWhereWithAggregatesInput[]
    NOT?: CaixaScalarWhereWithAggregatesInput | CaixaScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Caixa"> | string
    saldoInicial?: DecimalWithAggregatesFilter<"Caixa"> | Decimal | DecimalJsLike | number | string
    saldoAtual?: DecimalWithAggregatesFilter<"Caixa"> | Decimal | DecimalJsLike | number | string
    dataInicial?: DateTimeWithAggregatesFilter<"Caixa"> | Date | string
    observacoes?: StringNullableWithAggregatesFilter<"Caixa"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Caixa"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Caixa"> | Date | string
    userId?: StringWithAggregatesFilter<"Caixa"> | string
  }

  export type MovimentacaoCaixaWhereInput = {
    AND?: MovimentacaoCaixaWhereInput | MovimentacaoCaixaWhereInput[]
    OR?: MovimentacaoCaixaWhereInput[]
    NOT?: MovimentacaoCaixaWhereInput | MovimentacaoCaixaWhereInput[]
    id?: StringFilter<"MovimentacaoCaixa"> | string
    tipo?: EnumTipoMovimentacaoFilter<"MovimentacaoCaixa"> | $Enums.TipoMovimentacao
    valor?: DecimalFilter<"MovimentacaoCaixa"> | Decimal | DecimalJsLike | number | string
    descricao?: StringFilter<"MovimentacaoCaixa"> | string
    dataMovimentacao?: DateTimeFilter<"MovimentacaoCaixa"> | Date | string
    createdAt?: DateTimeFilter<"MovimentacaoCaixa"> | Date | string
    updatedAt?: DateTimeFilter<"MovimentacaoCaixa"> | Date | string
    userId?: StringFilter<"MovimentacaoCaixa"> | string
    emprestimoId?: StringNullableFilter<"MovimentacaoCaixa"> | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    emprestimo?: XOR<EmprestimoNullableScalarRelationFilter, EmprestimoWhereInput> | null
  }

  export type MovimentacaoCaixaOrderByWithRelationInput = {
    id?: SortOrder
    tipo?: SortOrder
    valor?: SortOrder
    descricao?: SortOrder
    dataMovimentacao?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    emprestimoId?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
    emprestimo?: EmprestimoOrderByWithRelationInput
  }

  export type MovimentacaoCaixaWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MovimentacaoCaixaWhereInput | MovimentacaoCaixaWhereInput[]
    OR?: MovimentacaoCaixaWhereInput[]
    NOT?: MovimentacaoCaixaWhereInput | MovimentacaoCaixaWhereInput[]
    tipo?: EnumTipoMovimentacaoFilter<"MovimentacaoCaixa"> | $Enums.TipoMovimentacao
    valor?: DecimalFilter<"MovimentacaoCaixa"> | Decimal | DecimalJsLike | number | string
    descricao?: StringFilter<"MovimentacaoCaixa"> | string
    dataMovimentacao?: DateTimeFilter<"MovimentacaoCaixa"> | Date | string
    createdAt?: DateTimeFilter<"MovimentacaoCaixa"> | Date | string
    updatedAt?: DateTimeFilter<"MovimentacaoCaixa"> | Date | string
    userId?: StringFilter<"MovimentacaoCaixa"> | string
    emprestimoId?: StringNullableFilter<"MovimentacaoCaixa"> | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    emprestimo?: XOR<EmprestimoNullableScalarRelationFilter, EmprestimoWhereInput> | null
  }, "id">

  export type MovimentacaoCaixaOrderByWithAggregationInput = {
    id?: SortOrder
    tipo?: SortOrder
    valor?: SortOrder
    descricao?: SortOrder
    dataMovimentacao?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    emprestimoId?: SortOrderInput | SortOrder
    _count?: MovimentacaoCaixaCountOrderByAggregateInput
    _avg?: MovimentacaoCaixaAvgOrderByAggregateInput
    _max?: MovimentacaoCaixaMaxOrderByAggregateInput
    _min?: MovimentacaoCaixaMinOrderByAggregateInput
    _sum?: MovimentacaoCaixaSumOrderByAggregateInput
  }

  export type MovimentacaoCaixaScalarWhereWithAggregatesInput = {
    AND?: MovimentacaoCaixaScalarWhereWithAggregatesInput | MovimentacaoCaixaScalarWhereWithAggregatesInput[]
    OR?: MovimentacaoCaixaScalarWhereWithAggregatesInput[]
    NOT?: MovimentacaoCaixaScalarWhereWithAggregatesInput | MovimentacaoCaixaScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"MovimentacaoCaixa"> | string
    tipo?: EnumTipoMovimentacaoWithAggregatesFilter<"MovimentacaoCaixa"> | $Enums.TipoMovimentacao
    valor?: DecimalWithAggregatesFilter<"MovimentacaoCaixa"> | Decimal | DecimalJsLike | number | string
    descricao?: StringWithAggregatesFilter<"MovimentacaoCaixa"> | string
    dataMovimentacao?: DateTimeWithAggregatesFilter<"MovimentacaoCaixa"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"MovimentacaoCaixa"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"MovimentacaoCaixa"> | Date | string
    userId?: StringWithAggregatesFilter<"MovimentacaoCaixa"> | string
    emprestimoId?: StringNullableWithAggregatesFilter<"MovimentacaoCaixa"> | string | null
  }

  export type EmprestimoWhereInput = {
    AND?: EmprestimoWhereInput | EmprestimoWhereInput[]
    OR?: EmprestimoWhereInput[]
    NOT?: EmprestimoWhereInput | EmprestimoWhereInput[]
    id?: StringFilter<"Emprestimo"> | string
    valor?: DecimalFilter<"Emprestimo"> | Decimal | DecimalJsLike | number | string
    valorTotal?: DecimalFilter<"Emprestimo"> | Decimal | DecimalJsLike | number | string
    taxaJuros?: FloatFilter<"Emprestimo"> | number
    numeroParcelas?: IntFilter<"Emprestimo"> | number
    valorParcela?: DecimalFilter<"Emprestimo"> | Decimal | DecimalJsLike | number | string
    dataEmprestimo?: DateTimeFilter<"Emprestimo"> | Date | string
    dataVencimento?: DateTimeFilter<"Emprestimo"> | Date | string
    status?: EnumStatusEmprestimoFilter<"Emprestimo"> | $Enums.StatusEmprestimo
    observacoes?: StringNullableFilter<"Emprestimo"> | string | null
    createdAt?: DateTimeFilter<"Emprestimo"> | Date | string
    updatedAt?: DateTimeFilter<"Emprestimo"> | Date | string
    clienteId?: StringFilter<"Emprestimo"> | string
    userId?: StringFilter<"Emprestimo"> | string
    cliente?: XOR<ClienteScalarRelationFilter, ClienteWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    pagamentos?: PagamentoListRelationFilter
    movimentacoes?: MovimentacaoCaixaListRelationFilter
  }

  export type EmprestimoOrderByWithRelationInput = {
    id?: SortOrder
    valor?: SortOrder
    valorTotal?: SortOrder
    taxaJuros?: SortOrder
    numeroParcelas?: SortOrder
    valorParcela?: SortOrder
    dataEmprestimo?: SortOrder
    dataVencimento?: SortOrder
    status?: SortOrder
    observacoes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    clienteId?: SortOrder
    userId?: SortOrder
    cliente?: ClienteOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
    pagamentos?: PagamentoOrderByRelationAggregateInput
    movimentacoes?: MovimentacaoCaixaOrderByRelationAggregateInput
  }

  export type EmprestimoWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: EmprestimoWhereInput | EmprestimoWhereInput[]
    OR?: EmprestimoWhereInput[]
    NOT?: EmprestimoWhereInput | EmprestimoWhereInput[]
    valor?: DecimalFilter<"Emprestimo"> | Decimal | DecimalJsLike | number | string
    valorTotal?: DecimalFilter<"Emprestimo"> | Decimal | DecimalJsLike | number | string
    taxaJuros?: FloatFilter<"Emprestimo"> | number
    numeroParcelas?: IntFilter<"Emprestimo"> | number
    valorParcela?: DecimalFilter<"Emprestimo"> | Decimal | DecimalJsLike | number | string
    dataEmprestimo?: DateTimeFilter<"Emprestimo"> | Date | string
    dataVencimento?: DateTimeFilter<"Emprestimo"> | Date | string
    status?: EnumStatusEmprestimoFilter<"Emprestimo"> | $Enums.StatusEmprestimo
    observacoes?: StringNullableFilter<"Emprestimo"> | string | null
    createdAt?: DateTimeFilter<"Emprestimo"> | Date | string
    updatedAt?: DateTimeFilter<"Emprestimo"> | Date | string
    clienteId?: StringFilter<"Emprestimo"> | string
    userId?: StringFilter<"Emprestimo"> | string
    cliente?: XOR<ClienteScalarRelationFilter, ClienteWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    pagamentos?: PagamentoListRelationFilter
    movimentacoes?: MovimentacaoCaixaListRelationFilter
  }, "id">

  export type EmprestimoOrderByWithAggregationInput = {
    id?: SortOrder
    valor?: SortOrder
    valorTotal?: SortOrder
    taxaJuros?: SortOrder
    numeroParcelas?: SortOrder
    valorParcela?: SortOrder
    dataEmprestimo?: SortOrder
    dataVencimento?: SortOrder
    status?: SortOrder
    observacoes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    clienteId?: SortOrder
    userId?: SortOrder
    _count?: EmprestimoCountOrderByAggregateInput
    _avg?: EmprestimoAvgOrderByAggregateInput
    _max?: EmprestimoMaxOrderByAggregateInput
    _min?: EmprestimoMinOrderByAggregateInput
    _sum?: EmprestimoSumOrderByAggregateInput
  }

  export type EmprestimoScalarWhereWithAggregatesInput = {
    AND?: EmprestimoScalarWhereWithAggregatesInput | EmprestimoScalarWhereWithAggregatesInput[]
    OR?: EmprestimoScalarWhereWithAggregatesInput[]
    NOT?: EmprestimoScalarWhereWithAggregatesInput | EmprestimoScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Emprestimo"> | string
    valor?: DecimalWithAggregatesFilter<"Emprestimo"> | Decimal | DecimalJsLike | number | string
    valorTotal?: DecimalWithAggregatesFilter<"Emprestimo"> | Decimal | DecimalJsLike | number | string
    taxaJuros?: FloatWithAggregatesFilter<"Emprestimo"> | number
    numeroParcelas?: IntWithAggregatesFilter<"Emprestimo"> | number
    valorParcela?: DecimalWithAggregatesFilter<"Emprestimo"> | Decimal | DecimalJsLike | number | string
    dataEmprestimo?: DateTimeWithAggregatesFilter<"Emprestimo"> | Date | string
    dataVencimento?: DateTimeWithAggregatesFilter<"Emprestimo"> | Date | string
    status?: EnumStatusEmprestimoWithAggregatesFilter<"Emprestimo"> | $Enums.StatusEmprestimo
    observacoes?: StringNullableWithAggregatesFilter<"Emprestimo"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Emprestimo"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Emprestimo"> | Date | string
    clienteId?: StringWithAggregatesFilter<"Emprestimo"> | string
    userId?: StringWithAggregatesFilter<"Emprestimo"> | string
  }

  export type PagamentoWhereInput = {
    AND?: PagamentoWhereInput | PagamentoWhereInput[]
    OR?: PagamentoWhereInput[]
    NOT?: PagamentoWhereInput | PagamentoWhereInput[]
    id?: StringFilter<"Pagamento"> | string
    numeroParcela?: IntFilter<"Pagamento"> | number
    valorParcela?: DecimalFilter<"Pagamento"> | Decimal | DecimalJsLike | number | string
    valorPago?: DecimalFilter<"Pagamento"> | Decimal | DecimalJsLike | number | string
    dataVencimento?: DateTimeFilter<"Pagamento"> | Date | string
    dataPagamento?: DateTimeNullableFilter<"Pagamento"> | Date | string | null
    status?: EnumStatusPagamentoFilter<"Pagamento"> | $Enums.StatusPagamento
    formaPagamento?: EnumFormaPagamentoNullableFilter<"Pagamento"> | $Enums.FormaPagamento | null
    observacoes?: StringNullableFilter<"Pagamento"> | string | null
    createdAt?: DateTimeFilter<"Pagamento"> | Date | string
    updatedAt?: DateTimeFilter<"Pagamento"> | Date | string
    emprestimoId?: StringFilter<"Pagamento"> | string
    userId?: StringFilter<"Pagamento"> | string
    emprestimo?: XOR<EmprestimoScalarRelationFilter, EmprestimoWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type PagamentoOrderByWithRelationInput = {
    id?: SortOrder
    numeroParcela?: SortOrder
    valorParcela?: SortOrder
    valorPago?: SortOrder
    dataVencimento?: SortOrder
    dataPagamento?: SortOrderInput | SortOrder
    status?: SortOrder
    formaPagamento?: SortOrderInput | SortOrder
    observacoes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    emprestimoId?: SortOrder
    userId?: SortOrder
    emprestimo?: EmprestimoOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type PagamentoWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PagamentoWhereInput | PagamentoWhereInput[]
    OR?: PagamentoWhereInput[]
    NOT?: PagamentoWhereInput | PagamentoWhereInput[]
    numeroParcela?: IntFilter<"Pagamento"> | number
    valorParcela?: DecimalFilter<"Pagamento"> | Decimal | DecimalJsLike | number | string
    valorPago?: DecimalFilter<"Pagamento"> | Decimal | DecimalJsLike | number | string
    dataVencimento?: DateTimeFilter<"Pagamento"> | Date | string
    dataPagamento?: DateTimeNullableFilter<"Pagamento"> | Date | string | null
    status?: EnumStatusPagamentoFilter<"Pagamento"> | $Enums.StatusPagamento
    formaPagamento?: EnumFormaPagamentoNullableFilter<"Pagamento"> | $Enums.FormaPagamento | null
    observacoes?: StringNullableFilter<"Pagamento"> | string | null
    createdAt?: DateTimeFilter<"Pagamento"> | Date | string
    updatedAt?: DateTimeFilter<"Pagamento"> | Date | string
    emprestimoId?: StringFilter<"Pagamento"> | string
    userId?: StringFilter<"Pagamento"> | string
    emprestimo?: XOR<EmprestimoScalarRelationFilter, EmprestimoWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type PagamentoOrderByWithAggregationInput = {
    id?: SortOrder
    numeroParcela?: SortOrder
    valorParcela?: SortOrder
    valorPago?: SortOrder
    dataVencimento?: SortOrder
    dataPagamento?: SortOrderInput | SortOrder
    status?: SortOrder
    formaPagamento?: SortOrderInput | SortOrder
    observacoes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    emprestimoId?: SortOrder
    userId?: SortOrder
    _count?: PagamentoCountOrderByAggregateInput
    _avg?: PagamentoAvgOrderByAggregateInput
    _max?: PagamentoMaxOrderByAggregateInput
    _min?: PagamentoMinOrderByAggregateInput
    _sum?: PagamentoSumOrderByAggregateInput
  }

  export type PagamentoScalarWhereWithAggregatesInput = {
    AND?: PagamentoScalarWhereWithAggregatesInput | PagamentoScalarWhereWithAggregatesInput[]
    OR?: PagamentoScalarWhereWithAggregatesInput[]
    NOT?: PagamentoScalarWhereWithAggregatesInput | PagamentoScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Pagamento"> | string
    numeroParcela?: IntWithAggregatesFilter<"Pagamento"> | number
    valorParcela?: DecimalWithAggregatesFilter<"Pagamento"> | Decimal | DecimalJsLike | number | string
    valorPago?: DecimalWithAggregatesFilter<"Pagamento"> | Decimal | DecimalJsLike | number | string
    dataVencimento?: DateTimeWithAggregatesFilter<"Pagamento"> | Date | string
    dataPagamento?: DateTimeNullableWithAggregatesFilter<"Pagamento"> | Date | string | null
    status?: EnumStatusPagamentoWithAggregatesFilter<"Pagamento"> | $Enums.StatusPagamento
    formaPagamento?: EnumFormaPagamentoNullableWithAggregatesFilter<"Pagamento"> | $Enums.FormaPagamento | null
    observacoes?: StringNullableWithAggregatesFilter<"Pagamento"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Pagamento"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Pagamento"> | Date | string
    emprestimoId?: StringWithAggregatesFilter<"Pagamento"> | string
    userId?: StringWithAggregatesFilter<"Pagamento"> | string
  }

  export type UserCreateInput = {
    id?: string
    clerkId: string
    email: string
    firstName?: string | null
    lastName?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    clientes?: ClienteCreateNestedManyWithoutUserInput
    emprestimos?: EmprestimoCreateNestedManyWithoutUserInput
    pagamentos?: PagamentoCreateNestedManyWithoutUserInput
    caixa?: CaixaCreateNestedManyWithoutUserInput
    movimentacoes?: MovimentacaoCaixaCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    clerkId: string
    email: string
    firstName?: string | null
    lastName?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    clientes?: ClienteUncheckedCreateNestedManyWithoutUserInput
    emprestimos?: EmprestimoUncheckedCreateNestedManyWithoutUserInput
    pagamentos?: PagamentoUncheckedCreateNestedManyWithoutUserInput
    caixa?: CaixaUncheckedCreateNestedManyWithoutUserInput
    movimentacoes?: MovimentacaoCaixaUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    clientes?: ClienteUpdateManyWithoutUserNestedInput
    emprestimos?: EmprestimoUpdateManyWithoutUserNestedInput
    pagamentos?: PagamentoUpdateManyWithoutUserNestedInput
    caixa?: CaixaUpdateManyWithoutUserNestedInput
    movimentacoes?: MovimentacaoCaixaUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    clientes?: ClienteUncheckedUpdateManyWithoutUserNestedInput
    emprestimos?: EmprestimoUncheckedUpdateManyWithoutUserNestedInput
    pagamentos?: PagamentoUncheckedUpdateManyWithoutUserNestedInput
    caixa?: CaixaUncheckedUpdateManyWithoutUserNestedInput
    movimentacoes?: MovimentacaoCaixaUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    clerkId: string
    email: string
    firstName?: string | null
    lastName?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClienteCreateInput = {
    id?: string
    nome: string
    email: string
    telefone?: string | null
    cpf: string
    endereco?: string | null
    cidade?: string | null
    estado?: string | null
    cep?: string | null
    dataNascimento?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutClientesInput
    emprestimos?: EmprestimoCreateNestedManyWithoutClienteInput
  }

  export type ClienteUncheckedCreateInput = {
    id?: string
    nome: string
    email: string
    telefone?: string | null
    cpf: string
    endereco?: string | null
    cidade?: string | null
    estado?: string | null
    cep?: string | null
    dataNascimento?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    emprestimos?: EmprestimoUncheckedCreateNestedManyWithoutClienteInput
  }

  export type ClienteUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    cpf?: StringFieldUpdateOperationsInput | string
    endereco?: NullableStringFieldUpdateOperationsInput | string | null
    cidade?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: NullableStringFieldUpdateOperationsInput | string | null
    cep?: NullableStringFieldUpdateOperationsInput | string | null
    dataNascimento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutClientesNestedInput
    emprestimos?: EmprestimoUpdateManyWithoutClienteNestedInput
  }

  export type ClienteUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    cpf?: StringFieldUpdateOperationsInput | string
    endereco?: NullableStringFieldUpdateOperationsInput | string | null
    cidade?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: NullableStringFieldUpdateOperationsInput | string | null
    cep?: NullableStringFieldUpdateOperationsInput | string | null
    dataNascimento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    emprestimos?: EmprestimoUncheckedUpdateManyWithoutClienteNestedInput
  }

  export type ClienteCreateManyInput = {
    id?: string
    nome: string
    email: string
    telefone?: string | null
    cpf: string
    endereco?: string | null
    cidade?: string | null
    estado?: string | null
    cep?: string | null
    dataNascimento?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
  }

  export type ClienteUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    cpf?: StringFieldUpdateOperationsInput | string
    endereco?: NullableStringFieldUpdateOperationsInput | string | null
    cidade?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: NullableStringFieldUpdateOperationsInput | string | null
    cep?: NullableStringFieldUpdateOperationsInput | string | null
    dataNascimento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClienteUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    cpf?: StringFieldUpdateOperationsInput | string
    endereco?: NullableStringFieldUpdateOperationsInput | string | null
    cidade?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: NullableStringFieldUpdateOperationsInput | string | null
    cep?: NullableStringFieldUpdateOperationsInput | string | null
    dataNascimento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type CaixaCreateInput = {
    id?: string
    saldoInicial: Decimal | DecimalJsLike | number | string
    saldoAtual: Decimal | DecimalJsLike | number | string
    dataInicial?: Date | string
    observacoes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutCaixaInput
  }

  export type CaixaUncheckedCreateInput = {
    id?: string
    saldoInicial: Decimal | DecimalJsLike | number | string
    saldoAtual: Decimal | DecimalJsLike | number | string
    dataInicial?: Date | string
    observacoes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
  }

  export type CaixaUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    saldoInicial?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    saldoAtual?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    dataInicial?: DateTimeFieldUpdateOperationsInput | Date | string
    observacoes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutCaixaNestedInput
  }

  export type CaixaUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    saldoInicial?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    saldoAtual?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    dataInicial?: DateTimeFieldUpdateOperationsInput | Date | string
    observacoes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type CaixaCreateManyInput = {
    id?: string
    saldoInicial: Decimal | DecimalJsLike | number | string
    saldoAtual: Decimal | DecimalJsLike | number | string
    dataInicial?: Date | string
    observacoes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
  }

  export type CaixaUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    saldoInicial?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    saldoAtual?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    dataInicial?: DateTimeFieldUpdateOperationsInput | Date | string
    observacoes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CaixaUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    saldoInicial?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    saldoAtual?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    dataInicial?: DateTimeFieldUpdateOperationsInput | Date | string
    observacoes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type MovimentacaoCaixaCreateInput = {
    id?: string
    tipo: $Enums.TipoMovimentacao
    valor: Decimal | DecimalJsLike | number | string
    descricao: string
    dataMovimentacao?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutMovimentacoesInput
    emprestimo?: EmprestimoCreateNestedOneWithoutMovimentacoesInput
  }

  export type MovimentacaoCaixaUncheckedCreateInput = {
    id?: string
    tipo: $Enums.TipoMovimentacao
    valor: Decimal | DecimalJsLike | number | string
    descricao: string
    dataMovimentacao?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    emprestimoId?: string | null
  }

  export type MovimentacaoCaixaUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tipo?: EnumTipoMovimentacaoFieldUpdateOperationsInput | $Enums.TipoMovimentacao
    valor?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    descricao?: StringFieldUpdateOperationsInput | string
    dataMovimentacao?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutMovimentacoesNestedInput
    emprestimo?: EmprestimoUpdateOneWithoutMovimentacoesNestedInput
  }

  export type MovimentacaoCaixaUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tipo?: EnumTipoMovimentacaoFieldUpdateOperationsInput | $Enums.TipoMovimentacao
    valor?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    descricao?: StringFieldUpdateOperationsInput | string
    dataMovimentacao?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    emprestimoId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MovimentacaoCaixaCreateManyInput = {
    id?: string
    tipo: $Enums.TipoMovimentacao
    valor: Decimal | DecimalJsLike | number | string
    descricao: string
    dataMovimentacao?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    emprestimoId?: string | null
  }

  export type MovimentacaoCaixaUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    tipo?: EnumTipoMovimentacaoFieldUpdateOperationsInput | $Enums.TipoMovimentacao
    valor?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    descricao?: StringFieldUpdateOperationsInput | string
    dataMovimentacao?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MovimentacaoCaixaUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    tipo?: EnumTipoMovimentacaoFieldUpdateOperationsInput | $Enums.TipoMovimentacao
    valor?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    descricao?: StringFieldUpdateOperationsInput | string
    dataMovimentacao?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    emprestimoId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type EmprestimoCreateInput = {
    id?: string
    valor: Decimal | DecimalJsLike | number | string
    valorTotal: Decimal | DecimalJsLike | number | string
    taxaJuros: number
    numeroParcelas: number
    valorParcela: Decimal | DecimalJsLike | number | string
    dataEmprestimo?: Date | string
    dataVencimento: Date | string
    status?: $Enums.StatusEmprestimo
    observacoes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    cliente: ClienteCreateNestedOneWithoutEmprestimosInput
    user: UserCreateNestedOneWithoutEmprestimosInput
    pagamentos?: PagamentoCreateNestedManyWithoutEmprestimoInput
    movimentacoes?: MovimentacaoCaixaCreateNestedManyWithoutEmprestimoInput
  }

  export type EmprestimoUncheckedCreateInput = {
    id?: string
    valor: Decimal | DecimalJsLike | number | string
    valorTotal: Decimal | DecimalJsLike | number | string
    taxaJuros: number
    numeroParcelas: number
    valorParcela: Decimal | DecimalJsLike | number | string
    dataEmprestimo?: Date | string
    dataVencimento: Date | string
    status?: $Enums.StatusEmprestimo
    observacoes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    clienteId: string
    userId: string
    pagamentos?: PagamentoUncheckedCreateNestedManyWithoutEmprestimoInput
    movimentacoes?: MovimentacaoCaixaUncheckedCreateNestedManyWithoutEmprestimoInput
  }

  export type EmprestimoUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    valor?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    valorTotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    taxaJuros?: FloatFieldUpdateOperationsInput | number
    numeroParcelas?: IntFieldUpdateOperationsInput | number
    valorParcela?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    dataEmprestimo?: DateTimeFieldUpdateOperationsInput | Date | string
    dataVencimento?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusEmprestimoFieldUpdateOperationsInput | $Enums.StatusEmprestimo
    observacoes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cliente?: ClienteUpdateOneRequiredWithoutEmprestimosNestedInput
    user?: UserUpdateOneRequiredWithoutEmprestimosNestedInput
    pagamentos?: PagamentoUpdateManyWithoutEmprestimoNestedInput
    movimentacoes?: MovimentacaoCaixaUpdateManyWithoutEmprestimoNestedInput
  }

  export type EmprestimoUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    valor?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    valorTotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    taxaJuros?: FloatFieldUpdateOperationsInput | number
    numeroParcelas?: IntFieldUpdateOperationsInput | number
    valorParcela?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    dataEmprestimo?: DateTimeFieldUpdateOperationsInput | Date | string
    dataVencimento?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusEmprestimoFieldUpdateOperationsInput | $Enums.StatusEmprestimo
    observacoes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    clienteId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    pagamentos?: PagamentoUncheckedUpdateManyWithoutEmprestimoNestedInput
    movimentacoes?: MovimentacaoCaixaUncheckedUpdateManyWithoutEmprestimoNestedInput
  }

  export type EmprestimoCreateManyInput = {
    id?: string
    valor: Decimal | DecimalJsLike | number | string
    valorTotal: Decimal | DecimalJsLike | number | string
    taxaJuros: number
    numeroParcelas: number
    valorParcela: Decimal | DecimalJsLike | number | string
    dataEmprestimo?: Date | string
    dataVencimento: Date | string
    status?: $Enums.StatusEmprestimo
    observacoes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    clienteId: string
    userId: string
  }

  export type EmprestimoUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    valor?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    valorTotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    taxaJuros?: FloatFieldUpdateOperationsInput | number
    numeroParcelas?: IntFieldUpdateOperationsInput | number
    valorParcela?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    dataEmprestimo?: DateTimeFieldUpdateOperationsInput | Date | string
    dataVencimento?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusEmprestimoFieldUpdateOperationsInput | $Enums.StatusEmprestimo
    observacoes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmprestimoUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    valor?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    valorTotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    taxaJuros?: FloatFieldUpdateOperationsInput | number
    numeroParcelas?: IntFieldUpdateOperationsInput | number
    valorParcela?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    dataEmprestimo?: DateTimeFieldUpdateOperationsInput | Date | string
    dataVencimento?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusEmprestimoFieldUpdateOperationsInput | $Enums.StatusEmprestimo
    observacoes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    clienteId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type PagamentoCreateInput = {
    id?: string
    numeroParcela: number
    valorParcela: Decimal | DecimalJsLike | number | string
    valorPago: Decimal | DecimalJsLike | number | string
    dataVencimento: Date | string
    dataPagamento?: Date | string | null
    status?: $Enums.StatusPagamento
    formaPagamento?: $Enums.FormaPagamento | null
    observacoes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    emprestimo: EmprestimoCreateNestedOneWithoutPagamentosInput
    user: UserCreateNestedOneWithoutPagamentosInput
  }

  export type PagamentoUncheckedCreateInput = {
    id?: string
    numeroParcela: number
    valorParcela: Decimal | DecimalJsLike | number | string
    valorPago: Decimal | DecimalJsLike | number | string
    dataVencimento: Date | string
    dataPagamento?: Date | string | null
    status?: $Enums.StatusPagamento
    formaPagamento?: $Enums.FormaPagamento | null
    observacoes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    emprestimoId: string
    userId: string
  }

  export type PagamentoUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    numeroParcela?: IntFieldUpdateOperationsInput | number
    valorParcela?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    valorPago?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    dataVencimento?: DateTimeFieldUpdateOperationsInput | Date | string
    dataPagamento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumStatusPagamentoFieldUpdateOperationsInput | $Enums.StatusPagamento
    formaPagamento?: NullableEnumFormaPagamentoFieldUpdateOperationsInput | $Enums.FormaPagamento | null
    observacoes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    emprestimo?: EmprestimoUpdateOneRequiredWithoutPagamentosNestedInput
    user?: UserUpdateOneRequiredWithoutPagamentosNestedInput
  }

  export type PagamentoUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    numeroParcela?: IntFieldUpdateOperationsInput | number
    valorParcela?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    valorPago?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    dataVencimento?: DateTimeFieldUpdateOperationsInput | Date | string
    dataPagamento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumStatusPagamentoFieldUpdateOperationsInput | $Enums.StatusPagamento
    formaPagamento?: NullableEnumFormaPagamentoFieldUpdateOperationsInput | $Enums.FormaPagamento | null
    observacoes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    emprestimoId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type PagamentoCreateManyInput = {
    id?: string
    numeroParcela: number
    valorParcela: Decimal | DecimalJsLike | number | string
    valorPago: Decimal | DecimalJsLike | number | string
    dataVencimento: Date | string
    dataPagamento?: Date | string | null
    status?: $Enums.StatusPagamento
    formaPagamento?: $Enums.FormaPagamento | null
    observacoes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    emprestimoId: string
    userId: string
  }

  export type PagamentoUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    numeroParcela?: IntFieldUpdateOperationsInput | number
    valorParcela?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    valorPago?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    dataVencimento?: DateTimeFieldUpdateOperationsInput | Date | string
    dataPagamento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumStatusPagamentoFieldUpdateOperationsInput | $Enums.StatusPagamento
    formaPagamento?: NullableEnumFormaPagamentoFieldUpdateOperationsInput | $Enums.FormaPagamento | null
    observacoes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PagamentoUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    numeroParcela?: IntFieldUpdateOperationsInput | number
    valorParcela?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    valorPago?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    dataVencimento?: DateTimeFieldUpdateOperationsInput | Date | string
    dataPagamento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumStatusPagamentoFieldUpdateOperationsInput | $Enums.StatusPagamento
    formaPagamento?: NullableEnumFormaPagamentoFieldUpdateOperationsInput | $Enums.FormaPagamento | null
    observacoes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    emprestimoId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type ClienteListRelationFilter = {
    every?: ClienteWhereInput
    some?: ClienteWhereInput
    none?: ClienteWhereInput
  }

  export type EmprestimoListRelationFilter = {
    every?: EmprestimoWhereInput
    some?: EmprestimoWhereInput
    none?: EmprestimoWhereInput
  }

  export type PagamentoListRelationFilter = {
    every?: PagamentoWhereInput
    some?: PagamentoWhereInput
    none?: PagamentoWhereInput
  }

  export type CaixaListRelationFilter = {
    every?: CaixaWhereInput
    some?: CaixaWhereInput
    none?: CaixaWhereInput
  }

  export type MovimentacaoCaixaListRelationFilter = {
    every?: MovimentacaoCaixaWhereInput
    some?: MovimentacaoCaixaWhereInput
    none?: MovimentacaoCaixaWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ClienteOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EmprestimoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PagamentoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CaixaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MovimentacaoCaixaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    clerkId?: SortOrder
    email?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    clerkId?: SortOrder
    email?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    clerkId?: SortOrder
    email?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type ClienteCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    telefone?: SortOrder
    cpf?: SortOrder
    endereco?: SortOrder
    cidade?: SortOrder
    estado?: SortOrder
    cep?: SortOrder
    dataNascimento?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
  }

  export type ClienteMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    telefone?: SortOrder
    cpf?: SortOrder
    endereco?: SortOrder
    cidade?: SortOrder
    estado?: SortOrder
    cep?: SortOrder
    dataNascimento?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
  }

  export type ClienteMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    telefone?: SortOrder
    cpf?: SortOrder
    endereco?: SortOrder
    cidade?: SortOrder
    estado?: SortOrder
    cep?: SortOrder
    dataNascimento?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type CaixaCountOrderByAggregateInput = {
    id?: SortOrder
    saldoInicial?: SortOrder
    saldoAtual?: SortOrder
    dataInicial?: SortOrder
    observacoes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
  }

  export type CaixaAvgOrderByAggregateInput = {
    saldoInicial?: SortOrder
    saldoAtual?: SortOrder
  }

  export type CaixaMaxOrderByAggregateInput = {
    id?: SortOrder
    saldoInicial?: SortOrder
    saldoAtual?: SortOrder
    dataInicial?: SortOrder
    observacoes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
  }

  export type CaixaMinOrderByAggregateInput = {
    id?: SortOrder
    saldoInicial?: SortOrder
    saldoAtual?: SortOrder
    dataInicial?: SortOrder
    observacoes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
  }

  export type CaixaSumOrderByAggregateInput = {
    saldoInicial?: SortOrder
    saldoAtual?: SortOrder
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type EnumTipoMovimentacaoFilter<$PrismaModel = never> = {
    equals?: $Enums.TipoMovimentacao | EnumTipoMovimentacaoFieldRefInput<$PrismaModel>
    in?: $Enums.TipoMovimentacao[] | ListEnumTipoMovimentacaoFieldRefInput<$PrismaModel>
    notIn?: $Enums.TipoMovimentacao[] | ListEnumTipoMovimentacaoFieldRefInput<$PrismaModel>
    not?: NestedEnumTipoMovimentacaoFilter<$PrismaModel> | $Enums.TipoMovimentacao
  }

  export type EmprestimoNullableScalarRelationFilter = {
    is?: EmprestimoWhereInput | null
    isNot?: EmprestimoWhereInput | null
  }

  export type MovimentacaoCaixaCountOrderByAggregateInput = {
    id?: SortOrder
    tipo?: SortOrder
    valor?: SortOrder
    descricao?: SortOrder
    dataMovimentacao?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    emprestimoId?: SortOrder
  }

  export type MovimentacaoCaixaAvgOrderByAggregateInput = {
    valor?: SortOrder
  }

  export type MovimentacaoCaixaMaxOrderByAggregateInput = {
    id?: SortOrder
    tipo?: SortOrder
    valor?: SortOrder
    descricao?: SortOrder
    dataMovimentacao?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    emprestimoId?: SortOrder
  }

  export type MovimentacaoCaixaMinOrderByAggregateInput = {
    id?: SortOrder
    tipo?: SortOrder
    valor?: SortOrder
    descricao?: SortOrder
    dataMovimentacao?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    emprestimoId?: SortOrder
  }

  export type MovimentacaoCaixaSumOrderByAggregateInput = {
    valor?: SortOrder
  }

  export type EnumTipoMovimentacaoWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TipoMovimentacao | EnumTipoMovimentacaoFieldRefInput<$PrismaModel>
    in?: $Enums.TipoMovimentacao[] | ListEnumTipoMovimentacaoFieldRefInput<$PrismaModel>
    notIn?: $Enums.TipoMovimentacao[] | ListEnumTipoMovimentacaoFieldRefInput<$PrismaModel>
    not?: NestedEnumTipoMovimentacaoWithAggregatesFilter<$PrismaModel> | $Enums.TipoMovimentacao
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTipoMovimentacaoFilter<$PrismaModel>
    _max?: NestedEnumTipoMovimentacaoFilter<$PrismaModel>
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type EnumStatusEmprestimoFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusEmprestimo | EnumStatusEmprestimoFieldRefInput<$PrismaModel>
    in?: $Enums.StatusEmprestimo[] | ListEnumStatusEmprestimoFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusEmprestimo[] | ListEnumStatusEmprestimoFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusEmprestimoFilter<$PrismaModel> | $Enums.StatusEmprestimo
  }

  export type ClienteScalarRelationFilter = {
    is?: ClienteWhereInput
    isNot?: ClienteWhereInput
  }

  export type EmprestimoCountOrderByAggregateInput = {
    id?: SortOrder
    valor?: SortOrder
    valorTotal?: SortOrder
    taxaJuros?: SortOrder
    numeroParcelas?: SortOrder
    valorParcela?: SortOrder
    dataEmprestimo?: SortOrder
    dataVencimento?: SortOrder
    status?: SortOrder
    observacoes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    clienteId?: SortOrder
    userId?: SortOrder
  }

  export type EmprestimoAvgOrderByAggregateInput = {
    valor?: SortOrder
    valorTotal?: SortOrder
    taxaJuros?: SortOrder
    numeroParcelas?: SortOrder
    valorParcela?: SortOrder
  }

  export type EmprestimoMaxOrderByAggregateInput = {
    id?: SortOrder
    valor?: SortOrder
    valorTotal?: SortOrder
    taxaJuros?: SortOrder
    numeroParcelas?: SortOrder
    valorParcela?: SortOrder
    dataEmprestimo?: SortOrder
    dataVencimento?: SortOrder
    status?: SortOrder
    observacoes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    clienteId?: SortOrder
    userId?: SortOrder
  }

  export type EmprestimoMinOrderByAggregateInput = {
    id?: SortOrder
    valor?: SortOrder
    valorTotal?: SortOrder
    taxaJuros?: SortOrder
    numeroParcelas?: SortOrder
    valorParcela?: SortOrder
    dataEmprestimo?: SortOrder
    dataVencimento?: SortOrder
    status?: SortOrder
    observacoes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    clienteId?: SortOrder
    userId?: SortOrder
  }

  export type EmprestimoSumOrderByAggregateInput = {
    valor?: SortOrder
    valorTotal?: SortOrder
    taxaJuros?: SortOrder
    numeroParcelas?: SortOrder
    valorParcela?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type EnumStatusEmprestimoWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusEmprestimo | EnumStatusEmprestimoFieldRefInput<$PrismaModel>
    in?: $Enums.StatusEmprestimo[] | ListEnumStatusEmprestimoFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusEmprestimo[] | ListEnumStatusEmprestimoFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusEmprestimoWithAggregatesFilter<$PrismaModel> | $Enums.StatusEmprestimo
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusEmprestimoFilter<$PrismaModel>
    _max?: NestedEnumStatusEmprestimoFilter<$PrismaModel>
  }

  export type EnumStatusPagamentoFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusPagamento | EnumStatusPagamentoFieldRefInput<$PrismaModel>
    in?: $Enums.StatusPagamento[] | ListEnumStatusPagamentoFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusPagamento[] | ListEnumStatusPagamentoFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusPagamentoFilter<$PrismaModel> | $Enums.StatusPagamento
  }

  export type EnumFormaPagamentoNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.FormaPagamento | EnumFormaPagamentoFieldRefInput<$PrismaModel> | null
    in?: $Enums.FormaPagamento[] | ListEnumFormaPagamentoFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.FormaPagamento[] | ListEnumFormaPagamentoFieldRefInput<$PrismaModel> | null
    not?: NestedEnumFormaPagamentoNullableFilter<$PrismaModel> | $Enums.FormaPagamento | null
  }

  export type EmprestimoScalarRelationFilter = {
    is?: EmprestimoWhereInput
    isNot?: EmprestimoWhereInput
  }

  export type PagamentoCountOrderByAggregateInput = {
    id?: SortOrder
    numeroParcela?: SortOrder
    valorParcela?: SortOrder
    valorPago?: SortOrder
    dataVencimento?: SortOrder
    dataPagamento?: SortOrder
    status?: SortOrder
    formaPagamento?: SortOrder
    observacoes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    emprestimoId?: SortOrder
    userId?: SortOrder
  }

  export type PagamentoAvgOrderByAggregateInput = {
    numeroParcela?: SortOrder
    valorParcela?: SortOrder
    valorPago?: SortOrder
  }

  export type PagamentoMaxOrderByAggregateInput = {
    id?: SortOrder
    numeroParcela?: SortOrder
    valorParcela?: SortOrder
    valorPago?: SortOrder
    dataVencimento?: SortOrder
    dataPagamento?: SortOrder
    status?: SortOrder
    formaPagamento?: SortOrder
    observacoes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    emprestimoId?: SortOrder
    userId?: SortOrder
  }

  export type PagamentoMinOrderByAggregateInput = {
    id?: SortOrder
    numeroParcela?: SortOrder
    valorParcela?: SortOrder
    valorPago?: SortOrder
    dataVencimento?: SortOrder
    dataPagamento?: SortOrder
    status?: SortOrder
    formaPagamento?: SortOrder
    observacoes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    emprestimoId?: SortOrder
    userId?: SortOrder
  }

  export type PagamentoSumOrderByAggregateInput = {
    numeroParcela?: SortOrder
    valorParcela?: SortOrder
    valorPago?: SortOrder
  }

  export type EnumStatusPagamentoWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusPagamento | EnumStatusPagamentoFieldRefInput<$PrismaModel>
    in?: $Enums.StatusPagamento[] | ListEnumStatusPagamentoFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusPagamento[] | ListEnumStatusPagamentoFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusPagamentoWithAggregatesFilter<$PrismaModel> | $Enums.StatusPagamento
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusPagamentoFilter<$PrismaModel>
    _max?: NestedEnumStatusPagamentoFilter<$PrismaModel>
  }

  export type EnumFormaPagamentoNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.FormaPagamento | EnumFormaPagamentoFieldRefInput<$PrismaModel> | null
    in?: $Enums.FormaPagamento[] | ListEnumFormaPagamentoFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.FormaPagamento[] | ListEnumFormaPagamentoFieldRefInput<$PrismaModel> | null
    not?: NestedEnumFormaPagamentoNullableWithAggregatesFilter<$PrismaModel> | $Enums.FormaPagamento | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumFormaPagamentoNullableFilter<$PrismaModel>
    _max?: NestedEnumFormaPagamentoNullableFilter<$PrismaModel>
  }

  export type ClienteCreateNestedManyWithoutUserInput = {
    create?: XOR<ClienteCreateWithoutUserInput, ClienteUncheckedCreateWithoutUserInput> | ClienteCreateWithoutUserInput[] | ClienteUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ClienteCreateOrConnectWithoutUserInput | ClienteCreateOrConnectWithoutUserInput[]
    createMany?: ClienteCreateManyUserInputEnvelope
    connect?: ClienteWhereUniqueInput | ClienteWhereUniqueInput[]
  }

  export type EmprestimoCreateNestedManyWithoutUserInput = {
    create?: XOR<EmprestimoCreateWithoutUserInput, EmprestimoUncheckedCreateWithoutUserInput> | EmprestimoCreateWithoutUserInput[] | EmprestimoUncheckedCreateWithoutUserInput[]
    connectOrCreate?: EmprestimoCreateOrConnectWithoutUserInput | EmprestimoCreateOrConnectWithoutUserInput[]
    createMany?: EmprestimoCreateManyUserInputEnvelope
    connect?: EmprestimoWhereUniqueInput | EmprestimoWhereUniqueInput[]
  }

  export type PagamentoCreateNestedManyWithoutUserInput = {
    create?: XOR<PagamentoCreateWithoutUserInput, PagamentoUncheckedCreateWithoutUserInput> | PagamentoCreateWithoutUserInput[] | PagamentoUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PagamentoCreateOrConnectWithoutUserInput | PagamentoCreateOrConnectWithoutUserInput[]
    createMany?: PagamentoCreateManyUserInputEnvelope
    connect?: PagamentoWhereUniqueInput | PagamentoWhereUniqueInput[]
  }

  export type CaixaCreateNestedManyWithoutUserInput = {
    create?: XOR<CaixaCreateWithoutUserInput, CaixaUncheckedCreateWithoutUserInput> | CaixaCreateWithoutUserInput[] | CaixaUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CaixaCreateOrConnectWithoutUserInput | CaixaCreateOrConnectWithoutUserInput[]
    createMany?: CaixaCreateManyUserInputEnvelope
    connect?: CaixaWhereUniqueInput | CaixaWhereUniqueInput[]
  }

  export type MovimentacaoCaixaCreateNestedManyWithoutUserInput = {
    create?: XOR<MovimentacaoCaixaCreateWithoutUserInput, MovimentacaoCaixaUncheckedCreateWithoutUserInput> | MovimentacaoCaixaCreateWithoutUserInput[] | MovimentacaoCaixaUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MovimentacaoCaixaCreateOrConnectWithoutUserInput | MovimentacaoCaixaCreateOrConnectWithoutUserInput[]
    createMany?: MovimentacaoCaixaCreateManyUserInputEnvelope
    connect?: MovimentacaoCaixaWhereUniqueInput | MovimentacaoCaixaWhereUniqueInput[]
  }

  export type ClienteUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ClienteCreateWithoutUserInput, ClienteUncheckedCreateWithoutUserInput> | ClienteCreateWithoutUserInput[] | ClienteUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ClienteCreateOrConnectWithoutUserInput | ClienteCreateOrConnectWithoutUserInput[]
    createMany?: ClienteCreateManyUserInputEnvelope
    connect?: ClienteWhereUniqueInput | ClienteWhereUniqueInput[]
  }

  export type EmprestimoUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<EmprestimoCreateWithoutUserInput, EmprestimoUncheckedCreateWithoutUserInput> | EmprestimoCreateWithoutUserInput[] | EmprestimoUncheckedCreateWithoutUserInput[]
    connectOrCreate?: EmprestimoCreateOrConnectWithoutUserInput | EmprestimoCreateOrConnectWithoutUserInput[]
    createMany?: EmprestimoCreateManyUserInputEnvelope
    connect?: EmprestimoWhereUniqueInput | EmprestimoWhereUniqueInput[]
  }

  export type PagamentoUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<PagamentoCreateWithoutUserInput, PagamentoUncheckedCreateWithoutUserInput> | PagamentoCreateWithoutUserInput[] | PagamentoUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PagamentoCreateOrConnectWithoutUserInput | PagamentoCreateOrConnectWithoutUserInput[]
    createMany?: PagamentoCreateManyUserInputEnvelope
    connect?: PagamentoWhereUniqueInput | PagamentoWhereUniqueInput[]
  }

  export type CaixaUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<CaixaCreateWithoutUserInput, CaixaUncheckedCreateWithoutUserInput> | CaixaCreateWithoutUserInput[] | CaixaUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CaixaCreateOrConnectWithoutUserInput | CaixaCreateOrConnectWithoutUserInput[]
    createMany?: CaixaCreateManyUserInputEnvelope
    connect?: CaixaWhereUniqueInput | CaixaWhereUniqueInput[]
  }

  export type MovimentacaoCaixaUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<MovimentacaoCaixaCreateWithoutUserInput, MovimentacaoCaixaUncheckedCreateWithoutUserInput> | MovimentacaoCaixaCreateWithoutUserInput[] | MovimentacaoCaixaUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MovimentacaoCaixaCreateOrConnectWithoutUserInput | MovimentacaoCaixaCreateOrConnectWithoutUserInput[]
    createMany?: MovimentacaoCaixaCreateManyUserInputEnvelope
    connect?: MovimentacaoCaixaWhereUniqueInput | MovimentacaoCaixaWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type ClienteUpdateManyWithoutUserNestedInput = {
    create?: XOR<ClienteCreateWithoutUserInput, ClienteUncheckedCreateWithoutUserInput> | ClienteCreateWithoutUserInput[] | ClienteUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ClienteCreateOrConnectWithoutUserInput | ClienteCreateOrConnectWithoutUserInput[]
    upsert?: ClienteUpsertWithWhereUniqueWithoutUserInput | ClienteUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ClienteCreateManyUserInputEnvelope
    set?: ClienteWhereUniqueInput | ClienteWhereUniqueInput[]
    disconnect?: ClienteWhereUniqueInput | ClienteWhereUniqueInput[]
    delete?: ClienteWhereUniqueInput | ClienteWhereUniqueInput[]
    connect?: ClienteWhereUniqueInput | ClienteWhereUniqueInput[]
    update?: ClienteUpdateWithWhereUniqueWithoutUserInput | ClienteUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ClienteUpdateManyWithWhereWithoutUserInput | ClienteUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ClienteScalarWhereInput | ClienteScalarWhereInput[]
  }

  export type EmprestimoUpdateManyWithoutUserNestedInput = {
    create?: XOR<EmprestimoCreateWithoutUserInput, EmprestimoUncheckedCreateWithoutUserInput> | EmprestimoCreateWithoutUserInput[] | EmprestimoUncheckedCreateWithoutUserInput[]
    connectOrCreate?: EmprestimoCreateOrConnectWithoutUserInput | EmprestimoCreateOrConnectWithoutUserInput[]
    upsert?: EmprestimoUpsertWithWhereUniqueWithoutUserInput | EmprestimoUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: EmprestimoCreateManyUserInputEnvelope
    set?: EmprestimoWhereUniqueInput | EmprestimoWhereUniqueInput[]
    disconnect?: EmprestimoWhereUniqueInput | EmprestimoWhereUniqueInput[]
    delete?: EmprestimoWhereUniqueInput | EmprestimoWhereUniqueInput[]
    connect?: EmprestimoWhereUniqueInput | EmprestimoWhereUniqueInput[]
    update?: EmprestimoUpdateWithWhereUniqueWithoutUserInput | EmprestimoUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: EmprestimoUpdateManyWithWhereWithoutUserInput | EmprestimoUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: EmprestimoScalarWhereInput | EmprestimoScalarWhereInput[]
  }

  export type PagamentoUpdateManyWithoutUserNestedInput = {
    create?: XOR<PagamentoCreateWithoutUserInput, PagamentoUncheckedCreateWithoutUserInput> | PagamentoCreateWithoutUserInput[] | PagamentoUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PagamentoCreateOrConnectWithoutUserInput | PagamentoCreateOrConnectWithoutUserInput[]
    upsert?: PagamentoUpsertWithWhereUniqueWithoutUserInput | PagamentoUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PagamentoCreateManyUserInputEnvelope
    set?: PagamentoWhereUniqueInput | PagamentoWhereUniqueInput[]
    disconnect?: PagamentoWhereUniqueInput | PagamentoWhereUniqueInput[]
    delete?: PagamentoWhereUniqueInput | PagamentoWhereUniqueInput[]
    connect?: PagamentoWhereUniqueInput | PagamentoWhereUniqueInput[]
    update?: PagamentoUpdateWithWhereUniqueWithoutUserInput | PagamentoUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PagamentoUpdateManyWithWhereWithoutUserInput | PagamentoUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PagamentoScalarWhereInput | PagamentoScalarWhereInput[]
  }

  export type CaixaUpdateManyWithoutUserNestedInput = {
    create?: XOR<CaixaCreateWithoutUserInput, CaixaUncheckedCreateWithoutUserInput> | CaixaCreateWithoutUserInput[] | CaixaUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CaixaCreateOrConnectWithoutUserInput | CaixaCreateOrConnectWithoutUserInput[]
    upsert?: CaixaUpsertWithWhereUniqueWithoutUserInput | CaixaUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CaixaCreateManyUserInputEnvelope
    set?: CaixaWhereUniqueInput | CaixaWhereUniqueInput[]
    disconnect?: CaixaWhereUniqueInput | CaixaWhereUniqueInput[]
    delete?: CaixaWhereUniqueInput | CaixaWhereUniqueInput[]
    connect?: CaixaWhereUniqueInput | CaixaWhereUniqueInput[]
    update?: CaixaUpdateWithWhereUniqueWithoutUserInput | CaixaUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CaixaUpdateManyWithWhereWithoutUserInput | CaixaUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CaixaScalarWhereInput | CaixaScalarWhereInput[]
  }

  export type MovimentacaoCaixaUpdateManyWithoutUserNestedInput = {
    create?: XOR<MovimentacaoCaixaCreateWithoutUserInput, MovimentacaoCaixaUncheckedCreateWithoutUserInput> | MovimentacaoCaixaCreateWithoutUserInput[] | MovimentacaoCaixaUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MovimentacaoCaixaCreateOrConnectWithoutUserInput | MovimentacaoCaixaCreateOrConnectWithoutUserInput[]
    upsert?: MovimentacaoCaixaUpsertWithWhereUniqueWithoutUserInput | MovimentacaoCaixaUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: MovimentacaoCaixaCreateManyUserInputEnvelope
    set?: MovimentacaoCaixaWhereUniqueInput | MovimentacaoCaixaWhereUniqueInput[]
    disconnect?: MovimentacaoCaixaWhereUniqueInput | MovimentacaoCaixaWhereUniqueInput[]
    delete?: MovimentacaoCaixaWhereUniqueInput | MovimentacaoCaixaWhereUniqueInput[]
    connect?: MovimentacaoCaixaWhereUniqueInput | MovimentacaoCaixaWhereUniqueInput[]
    update?: MovimentacaoCaixaUpdateWithWhereUniqueWithoutUserInput | MovimentacaoCaixaUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: MovimentacaoCaixaUpdateManyWithWhereWithoutUserInput | MovimentacaoCaixaUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: MovimentacaoCaixaScalarWhereInput | MovimentacaoCaixaScalarWhereInput[]
  }

  export type ClienteUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ClienteCreateWithoutUserInput, ClienteUncheckedCreateWithoutUserInput> | ClienteCreateWithoutUserInput[] | ClienteUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ClienteCreateOrConnectWithoutUserInput | ClienteCreateOrConnectWithoutUserInput[]
    upsert?: ClienteUpsertWithWhereUniqueWithoutUserInput | ClienteUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ClienteCreateManyUserInputEnvelope
    set?: ClienteWhereUniqueInput | ClienteWhereUniqueInput[]
    disconnect?: ClienteWhereUniqueInput | ClienteWhereUniqueInput[]
    delete?: ClienteWhereUniqueInput | ClienteWhereUniqueInput[]
    connect?: ClienteWhereUniqueInput | ClienteWhereUniqueInput[]
    update?: ClienteUpdateWithWhereUniqueWithoutUserInput | ClienteUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ClienteUpdateManyWithWhereWithoutUserInput | ClienteUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ClienteScalarWhereInput | ClienteScalarWhereInput[]
  }

  export type EmprestimoUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<EmprestimoCreateWithoutUserInput, EmprestimoUncheckedCreateWithoutUserInput> | EmprestimoCreateWithoutUserInput[] | EmprestimoUncheckedCreateWithoutUserInput[]
    connectOrCreate?: EmprestimoCreateOrConnectWithoutUserInput | EmprestimoCreateOrConnectWithoutUserInput[]
    upsert?: EmprestimoUpsertWithWhereUniqueWithoutUserInput | EmprestimoUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: EmprestimoCreateManyUserInputEnvelope
    set?: EmprestimoWhereUniqueInput | EmprestimoWhereUniqueInput[]
    disconnect?: EmprestimoWhereUniqueInput | EmprestimoWhereUniqueInput[]
    delete?: EmprestimoWhereUniqueInput | EmprestimoWhereUniqueInput[]
    connect?: EmprestimoWhereUniqueInput | EmprestimoWhereUniqueInput[]
    update?: EmprestimoUpdateWithWhereUniqueWithoutUserInput | EmprestimoUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: EmprestimoUpdateManyWithWhereWithoutUserInput | EmprestimoUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: EmprestimoScalarWhereInput | EmprestimoScalarWhereInput[]
  }

  export type PagamentoUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<PagamentoCreateWithoutUserInput, PagamentoUncheckedCreateWithoutUserInput> | PagamentoCreateWithoutUserInput[] | PagamentoUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PagamentoCreateOrConnectWithoutUserInput | PagamentoCreateOrConnectWithoutUserInput[]
    upsert?: PagamentoUpsertWithWhereUniqueWithoutUserInput | PagamentoUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PagamentoCreateManyUserInputEnvelope
    set?: PagamentoWhereUniqueInput | PagamentoWhereUniqueInput[]
    disconnect?: PagamentoWhereUniqueInput | PagamentoWhereUniqueInput[]
    delete?: PagamentoWhereUniqueInput | PagamentoWhereUniqueInput[]
    connect?: PagamentoWhereUniqueInput | PagamentoWhereUniqueInput[]
    update?: PagamentoUpdateWithWhereUniqueWithoutUserInput | PagamentoUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PagamentoUpdateManyWithWhereWithoutUserInput | PagamentoUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PagamentoScalarWhereInput | PagamentoScalarWhereInput[]
  }

  export type CaixaUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<CaixaCreateWithoutUserInput, CaixaUncheckedCreateWithoutUserInput> | CaixaCreateWithoutUserInput[] | CaixaUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CaixaCreateOrConnectWithoutUserInput | CaixaCreateOrConnectWithoutUserInput[]
    upsert?: CaixaUpsertWithWhereUniqueWithoutUserInput | CaixaUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CaixaCreateManyUserInputEnvelope
    set?: CaixaWhereUniqueInput | CaixaWhereUniqueInput[]
    disconnect?: CaixaWhereUniqueInput | CaixaWhereUniqueInput[]
    delete?: CaixaWhereUniqueInput | CaixaWhereUniqueInput[]
    connect?: CaixaWhereUniqueInput | CaixaWhereUniqueInput[]
    update?: CaixaUpdateWithWhereUniqueWithoutUserInput | CaixaUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CaixaUpdateManyWithWhereWithoutUserInput | CaixaUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CaixaScalarWhereInput | CaixaScalarWhereInput[]
  }

  export type MovimentacaoCaixaUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<MovimentacaoCaixaCreateWithoutUserInput, MovimentacaoCaixaUncheckedCreateWithoutUserInput> | MovimentacaoCaixaCreateWithoutUserInput[] | MovimentacaoCaixaUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MovimentacaoCaixaCreateOrConnectWithoutUserInput | MovimentacaoCaixaCreateOrConnectWithoutUserInput[]
    upsert?: MovimentacaoCaixaUpsertWithWhereUniqueWithoutUserInput | MovimentacaoCaixaUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: MovimentacaoCaixaCreateManyUserInputEnvelope
    set?: MovimentacaoCaixaWhereUniqueInput | MovimentacaoCaixaWhereUniqueInput[]
    disconnect?: MovimentacaoCaixaWhereUniqueInput | MovimentacaoCaixaWhereUniqueInput[]
    delete?: MovimentacaoCaixaWhereUniqueInput | MovimentacaoCaixaWhereUniqueInput[]
    connect?: MovimentacaoCaixaWhereUniqueInput | MovimentacaoCaixaWhereUniqueInput[]
    update?: MovimentacaoCaixaUpdateWithWhereUniqueWithoutUserInput | MovimentacaoCaixaUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: MovimentacaoCaixaUpdateManyWithWhereWithoutUserInput | MovimentacaoCaixaUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: MovimentacaoCaixaScalarWhereInput | MovimentacaoCaixaScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutClientesInput = {
    create?: XOR<UserCreateWithoutClientesInput, UserUncheckedCreateWithoutClientesInput>
    connectOrCreate?: UserCreateOrConnectWithoutClientesInput
    connect?: UserWhereUniqueInput
  }

  export type EmprestimoCreateNestedManyWithoutClienteInput = {
    create?: XOR<EmprestimoCreateWithoutClienteInput, EmprestimoUncheckedCreateWithoutClienteInput> | EmprestimoCreateWithoutClienteInput[] | EmprestimoUncheckedCreateWithoutClienteInput[]
    connectOrCreate?: EmprestimoCreateOrConnectWithoutClienteInput | EmprestimoCreateOrConnectWithoutClienteInput[]
    createMany?: EmprestimoCreateManyClienteInputEnvelope
    connect?: EmprestimoWhereUniqueInput | EmprestimoWhereUniqueInput[]
  }

  export type EmprestimoUncheckedCreateNestedManyWithoutClienteInput = {
    create?: XOR<EmprestimoCreateWithoutClienteInput, EmprestimoUncheckedCreateWithoutClienteInput> | EmprestimoCreateWithoutClienteInput[] | EmprestimoUncheckedCreateWithoutClienteInput[]
    connectOrCreate?: EmprestimoCreateOrConnectWithoutClienteInput | EmprestimoCreateOrConnectWithoutClienteInput[]
    createMany?: EmprestimoCreateManyClienteInputEnvelope
    connect?: EmprestimoWhereUniqueInput | EmprestimoWhereUniqueInput[]
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type UserUpdateOneRequiredWithoutClientesNestedInput = {
    create?: XOR<UserCreateWithoutClientesInput, UserUncheckedCreateWithoutClientesInput>
    connectOrCreate?: UserCreateOrConnectWithoutClientesInput
    upsert?: UserUpsertWithoutClientesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutClientesInput, UserUpdateWithoutClientesInput>, UserUncheckedUpdateWithoutClientesInput>
  }

  export type EmprestimoUpdateManyWithoutClienteNestedInput = {
    create?: XOR<EmprestimoCreateWithoutClienteInput, EmprestimoUncheckedCreateWithoutClienteInput> | EmprestimoCreateWithoutClienteInput[] | EmprestimoUncheckedCreateWithoutClienteInput[]
    connectOrCreate?: EmprestimoCreateOrConnectWithoutClienteInput | EmprestimoCreateOrConnectWithoutClienteInput[]
    upsert?: EmprestimoUpsertWithWhereUniqueWithoutClienteInput | EmprestimoUpsertWithWhereUniqueWithoutClienteInput[]
    createMany?: EmprestimoCreateManyClienteInputEnvelope
    set?: EmprestimoWhereUniqueInput | EmprestimoWhereUniqueInput[]
    disconnect?: EmprestimoWhereUniqueInput | EmprestimoWhereUniqueInput[]
    delete?: EmprestimoWhereUniqueInput | EmprestimoWhereUniqueInput[]
    connect?: EmprestimoWhereUniqueInput | EmprestimoWhereUniqueInput[]
    update?: EmprestimoUpdateWithWhereUniqueWithoutClienteInput | EmprestimoUpdateWithWhereUniqueWithoutClienteInput[]
    updateMany?: EmprestimoUpdateManyWithWhereWithoutClienteInput | EmprestimoUpdateManyWithWhereWithoutClienteInput[]
    deleteMany?: EmprestimoScalarWhereInput | EmprestimoScalarWhereInput[]
  }

  export type EmprestimoUncheckedUpdateManyWithoutClienteNestedInput = {
    create?: XOR<EmprestimoCreateWithoutClienteInput, EmprestimoUncheckedCreateWithoutClienteInput> | EmprestimoCreateWithoutClienteInput[] | EmprestimoUncheckedCreateWithoutClienteInput[]
    connectOrCreate?: EmprestimoCreateOrConnectWithoutClienteInput | EmprestimoCreateOrConnectWithoutClienteInput[]
    upsert?: EmprestimoUpsertWithWhereUniqueWithoutClienteInput | EmprestimoUpsertWithWhereUniqueWithoutClienteInput[]
    createMany?: EmprestimoCreateManyClienteInputEnvelope
    set?: EmprestimoWhereUniqueInput | EmprestimoWhereUniqueInput[]
    disconnect?: EmprestimoWhereUniqueInput | EmprestimoWhereUniqueInput[]
    delete?: EmprestimoWhereUniqueInput | EmprestimoWhereUniqueInput[]
    connect?: EmprestimoWhereUniqueInput | EmprestimoWhereUniqueInput[]
    update?: EmprestimoUpdateWithWhereUniqueWithoutClienteInput | EmprestimoUpdateWithWhereUniqueWithoutClienteInput[]
    updateMany?: EmprestimoUpdateManyWithWhereWithoutClienteInput | EmprestimoUpdateManyWithWhereWithoutClienteInput[]
    deleteMany?: EmprestimoScalarWhereInput | EmprestimoScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutCaixaInput = {
    create?: XOR<UserCreateWithoutCaixaInput, UserUncheckedCreateWithoutCaixaInput>
    connectOrCreate?: UserCreateOrConnectWithoutCaixaInput
    connect?: UserWhereUniqueInput
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type UserUpdateOneRequiredWithoutCaixaNestedInput = {
    create?: XOR<UserCreateWithoutCaixaInput, UserUncheckedCreateWithoutCaixaInput>
    connectOrCreate?: UserCreateOrConnectWithoutCaixaInput
    upsert?: UserUpsertWithoutCaixaInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCaixaInput, UserUpdateWithoutCaixaInput>, UserUncheckedUpdateWithoutCaixaInput>
  }

  export type UserCreateNestedOneWithoutMovimentacoesInput = {
    create?: XOR<UserCreateWithoutMovimentacoesInput, UserUncheckedCreateWithoutMovimentacoesInput>
    connectOrCreate?: UserCreateOrConnectWithoutMovimentacoesInput
    connect?: UserWhereUniqueInput
  }

  export type EmprestimoCreateNestedOneWithoutMovimentacoesInput = {
    create?: XOR<EmprestimoCreateWithoutMovimentacoesInput, EmprestimoUncheckedCreateWithoutMovimentacoesInput>
    connectOrCreate?: EmprestimoCreateOrConnectWithoutMovimentacoesInput
    connect?: EmprestimoWhereUniqueInput
  }

  export type EnumTipoMovimentacaoFieldUpdateOperationsInput = {
    set?: $Enums.TipoMovimentacao
  }

  export type UserUpdateOneRequiredWithoutMovimentacoesNestedInput = {
    create?: XOR<UserCreateWithoutMovimentacoesInput, UserUncheckedCreateWithoutMovimentacoesInput>
    connectOrCreate?: UserCreateOrConnectWithoutMovimentacoesInput
    upsert?: UserUpsertWithoutMovimentacoesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutMovimentacoesInput, UserUpdateWithoutMovimentacoesInput>, UserUncheckedUpdateWithoutMovimentacoesInput>
  }

  export type EmprestimoUpdateOneWithoutMovimentacoesNestedInput = {
    create?: XOR<EmprestimoCreateWithoutMovimentacoesInput, EmprestimoUncheckedCreateWithoutMovimentacoesInput>
    connectOrCreate?: EmprestimoCreateOrConnectWithoutMovimentacoesInput
    upsert?: EmprestimoUpsertWithoutMovimentacoesInput
    disconnect?: EmprestimoWhereInput | boolean
    delete?: EmprestimoWhereInput | boolean
    connect?: EmprestimoWhereUniqueInput
    update?: XOR<XOR<EmprestimoUpdateToOneWithWhereWithoutMovimentacoesInput, EmprestimoUpdateWithoutMovimentacoesInput>, EmprestimoUncheckedUpdateWithoutMovimentacoesInput>
  }

  export type ClienteCreateNestedOneWithoutEmprestimosInput = {
    create?: XOR<ClienteCreateWithoutEmprestimosInput, ClienteUncheckedCreateWithoutEmprestimosInput>
    connectOrCreate?: ClienteCreateOrConnectWithoutEmprestimosInput
    connect?: ClienteWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutEmprestimosInput = {
    create?: XOR<UserCreateWithoutEmprestimosInput, UserUncheckedCreateWithoutEmprestimosInput>
    connectOrCreate?: UserCreateOrConnectWithoutEmprestimosInput
    connect?: UserWhereUniqueInput
  }

  export type PagamentoCreateNestedManyWithoutEmprestimoInput = {
    create?: XOR<PagamentoCreateWithoutEmprestimoInput, PagamentoUncheckedCreateWithoutEmprestimoInput> | PagamentoCreateWithoutEmprestimoInput[] | PagamentoUncheckedCreateWithoutEmprestimoInput[]
    connectOrCreate?: PagamentoCreateOrConnectWithoutEmprestimoInput | PagamentoCreateOrConnectWithoutEmprestimoInput[]
    createMany?: PagamentoCreateManyEmprestimoInputEnvelope
    connect?: PagamentoWhereUniqueInput | PagamentoWhereUniqueInput[]
  }

  export type MovimentacaoCaixaCreateNestedManyWithoutEmprestimoInput = {
    create?: XOR<MovimentacaoCaixaCreateWithoutEmprestimoInput, MovimentacaoCaixaUncheckedCreateWithoutEmprestimoInput> | MovimentacaoCaixaCreateWithoutEmprestimoInput[] | MovimentacaoCaixaUncheckedCreateWithoutEmprestimoInput[]
    connectOrCreate?: MovimentacaoCaixaCreateOrConnectWithoutEmprestimoInput | MovimentacaoCaixaCreateOrConnectWithoutEmprestimoInput[]
    createMany?: MovimentacaoCaixaCreateManyEmprestimoInputEnvelope
    connect?: MovimentacaoCaixaWhereUniqueInput | MovimentacaoCaixaWhereUniqueInput[]
  }

  export type PagamentoUncheckedCreateNestedManyWithoutEmprestimoInput = {
    create?: XOR<PagamentoCreateWithoutEmprestimoInput, PagamentoUncheckedCreateWithoutEmprestimoInput> | PagamentoCreateWithoutEmprestimoInput[] | PagamentoUncheckedCreateWithoutEmprestimoInput[]
    connectOrCreate?: PagamentoCreateOrConnectWithoutEmprestimoInput | PagamentoCreateOrConnectWithoutEmprestimoInput[]
    createMany?: PagamentoCreateManyEmprestimoInputEnvelope
    connect?: PagamentoWhereUniqueInput | PagamentoWhereUniqueInput[]
  }

  export type MovimentacaoCaixaUncheckedCreateNestedManyWithoutEmprestimoInput = {
    create?: XOR<MovimentacaoCaixaCreateWithoutEmprestimoInput, MovimentacaoCaixaUncheckedCreateWithoutEmprestimoInput> | MovimentacaoCaixaCreateWithoutEmprestimoInput[] | MovimentacaoCaixaUncheckedCreateWithoutEmprestimoInput[]
    connectOrCreate?: MovimentacaoCaixaCreateOrConnectWithoutEmprestimoInput | MovimentacaoCaixaCreateOrConnectWithoutEmprestimoInput[]
    createMany?: MovimentacaoCaixaCreateManyEmprestimoInputEnvelope
    connect?: MovimentacaoCaixaWhereUniqueInput | MovimentacaoCaixaWhereUniqueInput[]
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnumStatusEmprestimoFieldUpdateOperationsInput = {
    set?: $Enums.StatusEmprestimo
  }

  export type ClienteUpdateOneRequiredWithoutEmprestimosNestedInput = {
    create?: XOR<ClienteCreateWithoutEmprestimosInput, ClienteUncheckedCreateWithoutEmprestimosInput>
    connectOrCreate?: ClienteCreateOrConnectWithoutEmprestimosInput
    upsert?: ClienteUpsertWithoutEmprestimosInput
    connect?: ClienteWhereUniqueInput
    update?: XOR<XOR<ClienteUpdateToOneWithWhereWithoutEmprestimosInput, ClienteUpdateWithoutEmprestimosInput>, ClienteUncheckedUpdateWithoutEmprestimosInput>
  }

  export type UserUpdateOneRequiredWithoutEmprestimosNestedInput = {
    create?: XOR<UserCreateWithoutEmprestimosInput, UserUncheckedCreateWithoutEmprestimosInput>
    connectOrCreate?: UserCreateOrConnectWithoutEmprestimosInput
    upsert?: UserUpsertWithoutEmprestimosInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutEmprestimosInput, UserUpdateWithoutEmprestimosInput>, UserUncheckedUpdateWithoutEmprestimosInput>
  }

  export type PagamentoUpdateManyWithoutEmprestimoNestedInput = {
    create?: XOR<PagamentoCreateWithoutEmprestimoInput, PagamentoUncheckedCreateWithoutEmprestimoInput> | PagamentoCreateWithoutEmprestimoInput[] | PagamentoUncheckedCreateWithoutEmprestimoInput[]
    connectOrCreate?: PagamentoCreateOrConnectWithoutEmprestimoInput | PagamentoCreateOrConnectWithoutEmprestimoInput[]
    upsert?: PagamentoUpsertWithWhereUniqueWithoutEmprestimoInput | PagamentoUpsertWithWhereUniqueWithoutEmprestimoInput[]
    createMany?: PagamentoCreateManyEmprestimoInputEnvelope
    set?: PagamentoWhereUniqueInput | PagamentoWhereUniqueInput[]
    disconnect?: PagamentoWhereUniqueInput | PagamentoWhereUniqueInput[]
    delete?: PagamentoWhereUniqueInput | PagamentoWhereUniqueInput[]
    connect?: PagamentoWhereUniqueInput | PagamentoWhereUniqueInput[]
    update?: PagamentoUpdateWithWhereUniqueWithoutEmprestimoInput | PagamentoUpdateWithWhereUniqueWithoutEmprestimoInput[]
    updateMany?: PagamentoUpdateManyWithWhereWithoutEmprestimoInput | PagamentoUpdateManyWithWhereWithoutEmprestimoInput[]
    deleteMany?: PagamentoScalarWhereInput | PagamentoScalarWhereInput[]
  }

  export type MovimentacaoCaixaUpdateManyWithoutEmprestimoNestedInput = {
    create?: XOR<MovimentacaoCaixaCreateWithoutEmprestimoInput, MovimentacaoCaixaUncheckedCreateWithoutEmprestimoInput> | MovimentacaoCaixaCreateWithoutEmprestimoInput[] | MovimentacaoCaixaUncheckedCreateWithoutEmprestimoInput[]
    connectOrCreate?: MovimentacaoCaixaCreateOrConnectWithoutEmprestimoInput | MovimentacaoCaixaCreateOrConnectWithoutEmprestimoInput[]
    upsert?: MovimentacaoCaixaUpsertWithWhereUniqueWithoutEmprestimoInput | MovimentacaoCaixaUpsertWithWhereUniqueWithoutEmprestimoInput[]
    createMany?: MovimentacaoCaixaCreateManyEmprestimoInputEnvelope
    set?: MovimentacaoCaixaWhereUniqueInput | MovimentacaoCaixaWhereUniqueInput[]
    disconnect?: MovimentacaoCaixaWhereUniqueInput | MovimentacaoCaixaWhereUniqueInput[]
    delete?: MovimentacaoCaixaWhereUniqueInput | MovimentacaoCaixaWhereUniqueInput[]
    connect?: MovimentacaoCaixaWhereUniqueInput | MovimentacaoCaixaWhereUniqueInput[]
    update?: MovimentacaoCaixaUpdateWithWhereUniqueWithoutEmprestimoInput | MovimentacaoCaixaUpdateWithWhereUniqueWithoutEmprestimoInput[]
    updateMany?: MovimentacaoCaixaUpdateManyWithWhereWithoutEmprestimoInput | MovimentacaoCaixaUpdateManyWithWhereWithoutEmprestimoInput[]
    deleteMany?: MovimentacaoCaixaScalarWhereInput | MovimentacaoCaixaScalarWhereInput[]
  }

  export type PagamentoUncheckedUpdateManyWithoutEmprestimoNestedInput = {
    create?: XOR<PagamentoCreateWithoutEmprestimoInput, PagamentoUncheckedCreateWithoutEmprestimoInput> | PagamentoCreateWithoutEmprestimoInput[] | PagamentoUncheckedCreateWithoutEmprestimoInput[]
    connectOrCreate?: PagamentoCreateOrConnectWithoutEmprestimoInput | PagamentoCreateOrConnectWithoutEmprestimoInput[]
    upsert?: PagamentoUpsertWithWhereUniqueWithoutEmprestimoInput | PagamentoUpsertWithWhereUniqueWithoutEmprestimoInput[]
    createMany?: PagamentoCreateManyEmprestimoInputEnvelope
    set?: PagamentoWhereUniqueInput | PagamentoWhereUniqueInput[]
    disconnect?: PagamentoWhereUniqueInput | PagamentoWhereUniqueInput[]
    delete?: PagamentoWhereUniqueInput | PagamentoWhereUniqueInput[]
    connect?: PagamentoWhereUniqueInput | PagamentoWhereUniqueInput[]
    update?: PagamentoUpdateWithWhereUniqueWithoutEmprestimoInput | PagamentoUpdateWithWhereUniqueWithoutEmprestimoInput[]
    updateMany?: PagamentoUpdateManyWithWhereWithoutEmprestimoInput | PagamentoUpdateManyWithWhereWithoutEmprestimoInput[]
    deleteMany?: PagamentoScalarWhereInput | PagamentoScalarWhereInput[]
  }

  export type MovimentacaoCaixaUncheckedUpdateManyWithoutEmprestimoNestedInput = {
    create?: XOR<MovimentacaoCaixaCreateWithoutEmprestimoInput, MovimentacaoCaixaUncheckedCreateWithoutEmprestimoInput> | MovimentacaoCaixaCreateWithoutEmprestimoInput[] | MovimentacaoCaixaUncheckedCreateWithoutEmprestimoInput[]
    connectOrCreate?: MovimentacaoCaixaCreateOrConnectWithoutEmprestimoInput | MovimentacaoCaixaCreateOrConnectWithoutEmprestimoInput[]
    upsert?: MovimentacaoCaixaUpsertWithWhereUniqueWithoutEmprestimoInput | MovimentacaoCaixaUpsertWithWhereUniqueWithoutEmprestimoInput[]
    createMany?: MovimentacaoCaixaCreateManyEmprestimoInputEnvelope
    set?: MovimentacaoCaixaWhereUniqueInput | MovimentacaoCaixaWhereUniqueInput[]
    disconnect?: MovimentacaoCaixaWhereUniqueInput | MovimentacaoCaixaWhereUniqueInput[]
    delete?: MovimentacaoCaixaWhereUniqueInput | MovimentacaoCaixaWhereUniqueInput[]
    connect?: MovimentacaoCaixaWhereUniqueInput | MovimentacaoCaixaWhereUniqueInput[]
    update?: MovimentacaoCaixaUpdateWithWhereUniqueWithoutEmprestimoInput | MovimentacaoCaixaUpdateWithWhereUniqueWithoutEmprestimoInput[]
    updateMany?: MovimentacaoCaixaUpdateManyWithWhereWithoutEmprestimoInput | MovimentacaoCaixaUpdateManyWithWhereWithoutEmprestimoInput[]
    deleteMany?: MovimentacaoCaixaScalarWhereInput | MovimentacaoCaixaScalarWhereInput[]
  }

  export type EmprestimoCreateNestedOneWithoutPagamentosInput = {
    create?: XOR<EmprestimoCreateWithoutPagamentosInput, EmprestimoUncheckedCreateWithoutPagamentosInput>
    connectOrCreate?: EmprestimoCreateOrConnectWithoutPagamentosInput
    connect?: EmprestimoWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutPagamentosInput = {
    create?: XOR<UserCreateWithoutPagamentosInput, UserUncheckedCreateWithoutPagamentosInput>
    connectOrCreate?: UserCreateOrConnectWithoutPagamentosInput
    connect?: UserWhereUniqueInput
  }

  export type EnumStatusPagamentoFieldUpdateOperationsInput = {
    set?: $Enums.StatusPagamento
  }

  export type NullableEnumFormaPagamentoFieldUpdateOperationsInput = {
    set?: $Enums.FormaPagamento | null
  }

  export type EmprestimoUpdateOneRequiredWithoutPagamentosNestedInput = {
    create?: XOR<EmprestimoCreateWithoutPagamentosInput, EmprestimoUncheckedCreateWithoutPagamentosInput>
    connectOrCreate?: EmprestimoCreateOrConnectWithoutPagamentosInput
    upsert?: EmprestimoUpsertWithoutPagamentosInput
    connect?: EmprestimoWhereUniqueInput
    update?: XOR<XOR<EmprestimoUpdateToOneWithWhereWithoutPagamentosInput, EmprestimoUpdateWithoutPagamentosInput>, EmprestimoUncheckedUpdateWithoutPagamentosInput>
  }

  export type UserUpdateOneRequiredWithoutPagamentosNestedInput = {
    create?: XOR<UserCreateWithoutPagamentosInput, UserUncheckedCreateWithoutPagamentosInput>
    connectOrCreate?: UserCreateOrConnectWithoutPagamentosInput
    upsert?: UserUpsertWithoutPagamentosInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPagamentosInput, UserUpdateWithoutPagamentosInput>, UserUncheckedUpdateWithoutPagamentosInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type NestedEnumTipoMovimentacaoFilter<$PrismaModel = never> = {
    equals?: $Enums.TipoMovimentacao | EnumTipoMovimentacaoFieldRefInput<$PrismaModel>
    in?: $Enums.TipoMovimentacao[] | ListEnumTipoMovimentacaoFieldRefInput<$PrismaModel>
    notIn?: $Enums.TipoMovimentacao[] | ListEnumTipoMovimentacaoFieldRefInput<$PrismaModel>
    not?: NestedEnumTipoMovimentacaoFilter<$PrismaModel> | $Enums.TipoMovimentacao
  }

  export type NestedEnumTipoMovimentacaoWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TipoMovimentacao | EnumTipoMovimentacaoFieldRefInput<$PrismaModel>
    in?: $Enums.TipoMovimentacao[] | ListEnumTipoMovimentacaoFieldRefInput<$PrismaModel>
    notIn?: $Enums.TipoMovimentacao[] | ListEnumTipoMovimentacaoFieldRefInput<$PrismaModel>
    not?: NestedEnumTipoMovimentacaoWithAggregatesFilter<$PrismaModel> | $Enums.TipoMovimentacao
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTipoMovimentacaoFilter<$PrismaModel>
    _max?: NestedEnumTipoMovimentacaoFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedEnumStatusEmprestimoFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusEmprestimo | EnumStatusEmprestimoFieldRefInput<$PrismaModel>
    in?: $Enums.StatusEmprestimo[] | ListEnumStatusEmprestimoFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusEmprestimo[] | ListEnumStatusEmprestimoFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusEmprestimoFilter<$PrismaModel> | $Enums.StatusEmprestimo
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedEnumStatusEmprestimoWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusEmprestimo | EnumStatusEmprestimoFieldRefInput<$PrismaModel>
    in?: $Enums.StatusEmprestimo[] | ListEnumStatusEmprestimoFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusEmprestimo[] | ListEnumStatusEmprestimoFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusEmprestimoWithAggregatesFilter<$PrismaModel> | $Enums.StatusEmprestimo
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusEmprestimoFilter<$PrismaModel>
    _max?: NestedEnumStatusEmprestimoFilter<$PrismaModel>
  }

  export type NestedEnumStatusPagamentoFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusPagamento | EnumStatusPagamentoFieldRefInput<$PrismaModel>
    in?: $Enums.StatusPagamento[] | ListEnumStatusPagamentoFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusPagamento[] | ListEnumStatusPagamentoFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusPagamentoFilter<$PrismaModel> | $Enums.StatusPagamento
  }

  export type NestedEnumFormaPagamentoNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.FormaPagamento | EnumFormaPagamentoFieldRefInput<$PrismaModel> | null
    in?: $Enums.FormaPagamento[] | ListEnumFormaPagamentoFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.FormaPagamento[] | ListEnumFormaPagamentoFieldRefInput<$PrismaModel> | null
    not?: NestedEnumFormaPagamentoNullableFilter<$PrismaModel> | $Enums.FormaPagamento | null
  }

  export type NestedEnumStatusPagamentoWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusPagamento | EnumStatusPagamentoFieldRefInput<$PrismaModel>
    in?: $Enums.StatusPagamento[] | ListEnumStatusPagamentoFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusPagamento[] | ListEnumStatusPagamentoFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusPagamentoWithAggregatesFilter<$PrismaModel> | $Enums.StatusPagamento
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusPagamentoFilter<$PrismaModel>
    _max?: NestedEnumStatusPagamentoFilter<$PrismaModel>
  }

  export type NestedEnumFormaPagamentoNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.FormaPagamento | EnumFormaPagamentoFieldRefInput<$PrismaModel> | null
    in?: $Enums.FormaPagamento[] | ListEnumFormaPagamentoFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.FormaPagamento[] | ListEnumFormaPagamentoFieldRefInput<$PrismaModel> | null
    not?: NestedEnumFormaPagamentoNullableWithAggregatesFilter<$PrismaModel> | $Enums.FormaPagamento | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumFormaPagamentoNullableFilter<$PrismaModel>
    _max?: NestedEnumFormaPagamentoNullableFilter<$PrismaModel>
  }

  export type ClienteCreateWithoutUserInput = {
    id?: string
    nome: string
    email: string
    telefone?: string | null
    cpf: string
    endereco?: string | null
    cidade?: string | null
    estado?: string | null
    cep?: string | null
    dataNascimento?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    emprestimos?: EmprestimoCreateNestedManyWithoutClienteInput
  }

  export type ClienteUncheckedCreateWithoutUserInput = {
    id?: string
    nome: string
    email: string
    telefone?: string | null
    cpf: string
    endereco?: string | null
    cidade?: string | null
    estado?: string | null
    cep?: string | null
    dataNascimento?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    emprestimos?: EmprestimoUncheckedCreateNestedManyWithoutClienteInput
  }

  export type ClienteCreateOrConnectWithoutUserInput = {
    where: ClienteWhereUniqueInput
    create: XOR<ClienteCreateWithoutUserInput, ClienteUncheckedCreateWithoutUserInput>
  }

  export type ClienteCreateManyUserInputEnvelope = {
    data: ClienteCreateManyUserInput | ClienteCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type EmprestimoCreateWithoutUserInput = {
    id?: string
    valor: Decimal | DecimalJsLike | number | string
    valorTotal: Decimal | DecimalJsLike | number | string
    taxaJuros: number
    numeroParcelas: number
    valorParcela: Decimal | DecimalJsLike | number | string
    dataEmprestimo?: Date | string
    dataVencimento: Date | string
    status?: $Enums.StatusEmprestimo
    observacoes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    cliente: ClienteCreateNestedOneWithoutEmprestimosInput
    pagamentos?: PagamentoCreateNestedManyWithoutEmprestimoInput
    movimentacoes?: MovimentacaoCaixaCreateNestedManyWithoutEmprestimoInput
  }

  export type EmprestimoUncheckedCreateWithoutUserInput = {
    id?: string
    valor: Decimal | DecimalJsLike | number | string
    valorTotal: Decimal | DecimalJsLike | number | string
    taxaJuros: number
    numeroParcelas: number
    valorParcela: Decimal | DecimalJsLike | number | string
    dataEmprestimo?: Date | string
    dataVencimento: Date | string
    status?: $Enums.StatusEmprestimo
    observacoes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    clienteId: string
    pagamentos?: PagamentoUncheckedCreateNestedManyWithoutEmprestimoInput
    movimentacoes?: MovimentacaoCaixaUncheckedCreateNestedManyWithoutEmprestimoInput
  }

  export type EmprestimoCreateOrConnectWithoutUserInput = {
    where: EmprestimoWhereUniqueInput
    create: XOR<EmprestimoCreateWithoutUserInput, EmprestimoUncheckedCreateWithoutUserInput>
  }

  export type EmprestimoCreateManyUserInputEnvelope = {
    data: EmprestimoCreateManyUserInput | EmprestimoCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type PagamentoCreateWithoutUserInput = {
    id?: string
    numeroParcela: number
    valorParcela: Decimal | DecimalJsLike | number | string
    valorPago: Decimal | DecimalJsLike | number | string
    dataVencimento: Date | string
    dataPagamento?: Date | string | null
    status?: $Enums.StatusPagamento
    formaPagamento?: $Enums.FormaPagamento | null
    observacoes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    emprestimo: EmprestimoCreateNestedOneWithoutPagamentosInput
  }

  export type PagamentoUncheckedCreateWithoutUserInput = {
    id?: string
    numeroParcela: number
    valorParcela: Decimal | DecimalJsLike | number | string
    valorPago: Decimal | DecimalJsLike | number | string
    dataVencimento: Date | string
    dataPagamento?: Date | string | null
    status?: $Enums.StatusPagamento
    formaPagamento?: $Enums.FormaPagamento | null
    observacoes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    emprestimoId: string
  }

  export type PagamentoCreateOrConnectWithoutUserInput = {
    where: PagamentoWhereUniqueInput
    create: XOR<PagamentoCreateWithoutUserInput, PagamentoUncheckedCreateWithoutUserInput>
  }

  export type PagamentoCreateManyUserInputEnvelope = {
    data: PagamentoCreateManyUserInput | PagamentoCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type CaixaCreateWithoutUserInput = {
    id?: string
    saldoInicial: Decimal | DecimalJsLike | number | string
    saldoAtual: Decimal | DecimalJsLike | number | string
    dataInicial?: Date | string
    observacoes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CaixaUncheckedCreateWithoutUserInput = {
    id?: string
    saldoInicial: Decimal | DecimalJsLike | number | string
    saldoAtual: Decimal | DecimalJsLike | number | string
    dataInicial?: Date | string
    observacoes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CaixaCreateOrConnectWithoutUserInput = {
    where: CaixaWhereUniqueInput
    create: XOR<CaixaCreateWithoutUserInput, CaixaUncheckedCreateWithoutUserInput>
  }

  export type CaixaCreateManyUserInputEnvelope = {
    data: CaixaCreateManyUserInput | CaixaCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type MovimentacaoCaixaCreateWithoutUserInput = {
    id?: string
    tipo: $Enums.TipoMovimentacao
    valor: Decimal | DecimalJsLike | number | string
    descricao: string
    dataMovimentacao?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    emprestimo?: EmprestimoCreateNestedOneWithoutMovimentacoesInput
  }

  export type MovimentacaoCaixaUncheckedCreateWithoutUserInput = {
    id?: string
    tipo: $Enums.TipoMovimentacao
    valor: Decimal | DecimalJsLike | number | string
    descricao: string
    dataMovimentacao?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    emprestimoId?: string | null
  }

  export type MovimentacaoCaixaCreateOrConnectWithoutUserInput = {
    where: MovimentacaoCaixaWhereUniqueInput
    create: XOR<MovimentacaoCaixaCreateWithoutUserInput, MovimentacaoCaixaUncheckedCreateWithoutUserInput>
  }

  export type MovimentacaoCaixaCreateManyUserInputEnvelope = {
    data: MovimentacaoCaixaCreateManyUserInput | MovimentacaoCaixaCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ClienteUpsertWithWhereUniqueWithoutUserInput = {
    where: ClienteWhereUniqueInput
    update: XOR<ClienteUpdateWithoutUserInput, ClienteUncheckedUpdateWithoutUserInput>
    create: XOR<ClienteCreateWithoutUserInput, ClienteUncheckedCreateWithoutUserInput>
  }

  export type ClienteUpdateWithWhereUniqueWithoutUserInput = {
    where: ClienteWhereUniqueInput
    data: XOR<ClienteUpdateWithoutUserInput, ClienteUncheckedUpdateWithoutUserInput>
  }

  export type ClienteUpdateManyWithWhereWithoutUserInput = {
    where: ClienteScalarWhereInput
    data: XOR<ClienteUpdateManyMutationInput, ClienteUncheckedUpdateManyWithoutUserInput>
  }

  export type ClienteScalarWhereInput = {
    AND?: ClienteScalarWhereInput | ClienteScalarWhereInput[]
    OR?: ClienteScalarWhereInput[]
    NOT?: ClienteScalarWhereInput | ClienteScalarWhereInput[]
    id?: StringFilter<"Cliente"> | string
    nome?: StringFilter<"Cliente"> | string
    email?: StringFilter<"Cliente"> | string
    telefone?: StringNullableFilter<"Cliente"> | string | null
    cpf?: StringFilter<"Cliente"> | string
    endereco?: StringNullableFilter<"Cliente"> | string | null
    cidade?: StringNullableFilter<"Cliente"> | string | null
    estado?: StringNullableFilter<"Cliente"> | string | null
    cep?: StringNullableFilter<"Cliente"> | string | null
    dataNascimento?: DateTimeNullableFilter<"Cliente"> | Date | string | null
    createdAt?: DateTimeFilter<"Cliente"> | Date | string
    updatedAt?: DateTimeFilter<"Cliente"> | Date | string
    userId?: StringFilter<"Cliente"> | string
  }

  export type EmprestimoUpsertWithWhereUniqueWithoutUserInput = {
    where: EmprestimoWhereUniqueInput
    update: XOR<EmprestimoUpdateWithoutUserInput, EmprestimoUncheckedUpdateWithoutUserInput>
    create: XOR<EmprestimoCreateWithoutUserInput, EmprestimoUncheckedCreateWithoutUserInput>
  }

  export type EmprestimoUpdateWithWhereUniqueWithoutUserInput = {
    where: EmprestimoWhereUniqueInput
    data: XOR<EmprestimoUpdateWithoutUserInput, EmprestimoUncheckedUpdateWithoutUserInput>
  }

  export type EmprestimoUpdateManyWithWhereWithoutUserInput = {
    where: EmprestimoScalarWhereInput
    data: XOR<EmprestimoUpdateManyMutationInput, EmprestimoUncheckedUpdateManyWithoutUserInput>
  }

  export type EmprestimoScalarWhereInput = {
    AND?: EmprestimoScalarWhereInput | EmprestimoScalarWhereInput[]
    OR?: EmprestimoScalarWhereInput[]
    NOT?: EmprestimoScalarWhereInput | EmprestimoScalarWhereInput[]
    id?: StringFilter<"Emprestimo"> | string
    valor?: DecimalFilter<"Emprestimo"> | Decimal | DecimalJsLike | number | string
    valorTotal?: DecimalFilter<"Emprestimo"> | Decimal | DecimalJsLike | number | string
    taxaJuros?: FloatFilter<"Emprestimo"> | number
    numeroParcelas?: IntFilter<"Emprestimo"> | number
    valorParcela?: DecimalFilter<"Emprestimo"> | Decimal | DecimalJsLike | number | string
    dataEmprestimo?: DateTimeFilter<"Emprestimo"> | Date | string
    dataVencimento?: DateTimeFilter<"Emprestimo"> | Date | string
    status?: EnumStatusEmprestimoFilter<"Emprestimo"> | $Enums.StatusEmprestimo
    observacoes?: StringNullableFilter<"Emprestimo"> | string | null
    createdAt?: DateTimeFilter<"Emprestimo"> | Date | string
    updatedAt?: DateTimeFilter<"Emprestimo"> | Date | string
    clienteId?: StringFilter<"Emprestimo"> | string
    userId?: StringFilter<"Emprestimo"> | string
  }

  export type PagamentoUpsertWithWhereUniqueWithoutUserInput = {
    where: PagamentoWhereUniqueInput
    update: XOR<PagamentoUpdateWithoutUserInput, PagamentoUncheckedUpdateWithoutUserInput>
    create: XOR<PagamentoCreateWithoutUserInput, PagamentoUncheckedCreateWithoutUserInput>
  }

  export type PagamentoUpdateWithWhereUniqueWithoutUserInput = {
    where: PagamentoWhereUniqueInput
    data: XOR<PagamentoUpdateWithoutUserInput, PagamentoUncheckedUpdateWithoutUserInput>
  }

  export type PagamentoUpdateManyWithWhereWithoutUserInput = {
    where: PagamentoScalarWhereInput
    data: XOR<PagamentoUpdateManyMutationInput, PagamentoUncheckedUpdateManyWithoutUserInput>
  }

  export type PagamentoScalarWhereInput = {
    AND?: PagamentoScalarWhereInput | PagamentoScalarWhereInput[]
    OR?: PagamentoScalarWhereInput[]
    NOT?: PagamentoScalarWhereInput | PagamentoScalarWhereInput[]
    id?: StringFilter<"Pagamento"> | string
    numeroParcela?: IntFilter<"Pagamento"> | number
    valorParcela?: DecimalFilter<"Pagamento"> | Decimal | DecimalJsLike | number | string
    valorPago?: DecimalFilter<"Pagamento"> | Decimal | DecimalJsLike | number | string
    dataVencimento?: DateTimeFilter<"Pagamento"> | Date | string
    dataPagamento?: DateTimeNullableFilter<"Pagamento"> | Date | string | null
    status?: EnumStatusPagamentoFilter<"Pagamento"> | $Enums.StatusPagamento
    formaPagamento?: EnumFormaPagamentoNullableFilter<"Pagamento"> | $Enums.FormaPagamento | null
    observacoes?: StringNullableFilter<"Pagamento"> | string | null
    createdAt?: DateTimeFilter<"Pagamento"> | Date | string
    updatedAt?: DateTimeFilter<"Pagamento"> | Date | string
    emprestimoId?: StringFilter<"Pagamento"> | string
    userId?: StringFilter<"Pagamento"> | string
  }

  export type CaixaUpsertWithWhereUniqueWithoutUserInput = {
    where: CaixaWhereUniqueInput
    update: XOR<CaixaUpdateWithoutUserInput, CaixaUncheckedUpdateWithoutUserInput>
    create: XOR<CaixaCreateWithoutUserInput, CaixaUncheckedCreateWithoutUserInput>
  }

  export type CaixaUpdateWithWhereUniqueWithoutUserInput = {
    where: CaixaWhereUniqueInput
    data: XOR<CaixaUpdateWithoutUserInput, CaixaUncheckedUpdateWithoutUserInput>
  }

  export type CaixaUpdateManyWithWhereWithoutUserInput = {
    where: CaixaScalarWhereInput
    data: XOR<CaixaUpdateManyMutationInput, CaixaUncheckedUpdateManyWithoutUserInput>
  }

  export type CaixaScalarWhereInput = {
    AND?: CaixaScalarWhereInput | CaixaScalarWhereInput[]
    OR?: CaixaScalarWhereInput[]
    NOT?: CaixaScalarWhereInput | CaixaScalarWhereInput[]
    id?: StringFilter<"Caixa"> | string
    saldoInicial?: DecimalFilter<"Caixa"> | Decimal | DecimalJsLike | number | string
    saldoAtual?: DecimalFilter<"Caixa"> | Decimal | DecimalJsLike | number | string
    dataInicial?: DateTimeFilter<"Caixa"> | Date | string
    observacoes?: StringNullableFilter<"Caixa"> | string | null
    createdAt?: DateTimeFilter<"Caixa"> | Date | string
    updatedAt?: DateTimeFilter<"Caixa"> | Date | string
    userId?: StringFilter<"Caixa"> | string
  }

  export type MovimentacaoCaixaUpsertWithWhereUniqueWithoutUserInput = {
    where: MovimentacaoCaixaWhereUniqueInput
    update: XOR<MovimentacaoCaixaUpdateWithoutUserInput, MovimentacaoCaixaUncheckedUpdateWithoutUserInput>
    create: XOR<MovimentacaoCaixaCreateWithoutUserInput, MovimentacaoCaixaUncheckedCreateWithoutUserInput>
  }

  export type MovimentacaoCaixaUpdateWithWhereUniqueWithoutUserInput = {
    where: MovimentacaoCaixaWhereUniqueInput
    data: XOR<MovimentacaoCaixaUpdateWithoutUserInput, MovimentacaoCaixaUncheckedUpdateWithoutUserInput>
  }

  export type MovimentacaoCaixaUpdateManyWithWhereWithoutUserInput = {
    where: MovimentacaoCaixaScalarWhereInput
    data: XOR<MovimentacaoCaixaUpdateManyMutationInput, MovimentacaoCaixaUncheckedUpdateManyWithoutUserInput>
  }

  export type MovimentacaoCaixaScalarWhereInput = {
    AND?: MovimentacaoCaixaScalarWhereInput | MovimentacaoCaixaScalarWhereInput[]
    OR?: MovimentacaoCaixaScalarWhereInput[]
    NOT?: MovimentacaoCaixaScalarWhereInput | MovimentacaoCaixaScalarWhereInput[]
    id?: StringFilter<"MovimentacaoCaixa"> | string
    tipo?: EnumTipoMovimentacaoFilter<"MovimentacaoCaixa"> | $Enums.TipoMovimentacao
    valor?: DecimalFilter<"MovimentacaoCaixa"> | Decimal | DecimalJsLike | number | string
    descricao?: StringFilter<"MovimentacaoCaixa"> | string
    dataMovimentacao?: DateTimeFilter<"MovimentacaoCaixa"> | Date | string
    createdAt?: DateTimeFilter<"MovimentacaoCaixa"> | Date | string
    updatedAt?: DateTimeFilter<"MovimentacaoCaixa"> | Date | string
    userId?: StringFilter<"MovimentacaoCaixa"> | string
    emprestimoId?: StringNullableFilter<"MovimentacaoCaixa"> | string | null
  }

  export type UserCreateWithoutClientesInput = {
    id?: string
    clerkId: string
    email: string
    firstName?: string | null
    lastName?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    emprestimos?: EmprestimoCreateNestedManyWithoutUserInput
    pagamentos?: PagamentoCreateNestedManyWithoutUserInput
    caixa?: CaixaCreateNestedManyWithoutUserInput
    movimentacoes?: MovimentacaoCaixaCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutClientesInput = {
    id?: string
    clerkId: string
    email: string
    firstName?: string | null
    lastName?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    emprestimos?: EmprestimoUncheckedCreateNestedManyWithoutUserInput
    pagamentos?: PagamentoUncheckedCreateNestedManyWithoutUserInput
    caixa?: CaixaUncheckedCreateNestedManyWithoutUserInput
    movimentacoes?: MovimentacaoCaixaUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutClientesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutClientesInput, UserUncheckedCreateWithoutClientesInput>
  }

  export type EmprestimoCreateWithoutClienteInput = {
    id?: string
    valor: Decimal | DecimalJsLike | number | string
    valorTotal: Decimal | DecimalJsLike | number | string
    taxaJuros: number
    numeroParcelas: number
    valorParcela: Decimal | DecimalJsLike | number | string
    dataEmprestimo?: Date | string
    dataVencimento: Date | string
    status?: $Enums.StatusEmprestimo
    observacoes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutEmprestimosInput
    pagamentos?: PagamentoCreateNestedManyWithoutEmprestimoInput
    movimentacoes?: MovimentacaoCaixaCreateNestedManyWithoutEmprestimoInput
  }

  export type EmprestimoUncheckedCreateWithoutClienteInput = {
    id?: string
    valor: Decimal | DecimalJsLike | number | string
    valorTotal: Decimal | DecimalJsLike | number | string
    taxaJuros: number
    numeroParcelas: number
    valorParcela: Decimal | DecimalJsLike | number | string
    dataEmprestimo?: Date | string
    dataVencimento: Date | string
    status?: $Enums.StatusEmprestimo
    observacoes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    pagamentos?: PagamentoUncheckedCreateNestedManyWithoutEmprestimoInput
    movimentacoes?: MovimentacaoCaixaUncheckedCreateNestedManyWithoutEmprestimoInput
  }

  export type EmprestimoCreateOrConnectWithoutClienteInput = {
    where: EmprestimoWhereUniqueInput
    create: XOR<EmprestimoCreateWithoutClienteInput, EmprestimoUncheckedCreateWithoutClienteInput>
  }

  export type EmprestimoCreateManyClienteInputEnvelope = {
    data: EmprestimoCreateManyClienteInput | EmprestimoCreateManyClienteInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutClientesInput = {
    update: XOR<UserUpdateWithoutClientesInput, UserUncheckedUpdateWithoutClientesInput>
    create: XOR<UserCreateWithoutClientesInput, UserUncheckedCreateWithoutClientesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutClientesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutClientesInput, UserUncheckedUpdateWithoutClientesInput>
  }

  export type UserUpdateWithoutClientesInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    emprestimos?: EmprestimoUpdateManyWithoutUserNestedInput
    pagamentos?: PagamentoUpdateManyWithoutUserNestedInput
    caixa?: CaixaUpdateManyWithoutUserNestedInput
    movimentacoes?: MovimentacaoCaixaUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutClientesInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    emprestimos?: EmprestimoUncheckedUpdateManyWithoutUserNestedInput
    pagamentos?: PagamentoUncheckedUpdateManyWithoutUserNestedInput
    caixa?: CaixaUncheckedUpdateManyWithoutUserNestedInput
    movimentacoes?: MovimentacaoCaixaUncheckedUpdateManyWithoutUserNestedInput
  }

  export type EmprestimoUpsertWithWhereUniqueWithoutClienteInput = {
    where: EmprestimoWhereUniqueInput
    update: XOR<EmprestimoUpdateWithoutClienteInput, EmprestimoUncheckedUpdateWithoutClienteInput>
    create: XOR<EmprestimoCreateWithoutClienteInput, EmprestimoUncheckedCreateWithoutClienteInput>
  }

  export type EmprestimoUpdateWithWhereUniqueWithoutClienteInput = {
    where: EmprestimoWhereUniqueInput
    data: XOR<EmprestimoUpdateWithoutClienteInput, EmprestimoUncheckedUpdateWithoutClienteInput>
  }

  export type EmprestimoUpdateManyWithWhereWithoutClienteInput = {
    where: EmprestimoScalarWhereInput
    data: XOR<EmprestimoUpdateManyMutationInput, EmprestimoUncheckedUpdateManyWithoutClienteInput>
  }

  export type UserCreateWithoutCaixaInput = {
    id?: string
    clerkId: string
    email: string
    firstName?: string | null
    lastName?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    clientes?: ClienteCreateNestedManyWithoutUserInput
    emprestimos?: EmprestimoCreateNestedManyWithoutUserInput
    pagamentos?: PagamentoCreateNestedManyWithoutUserInput
    movimentacoes?: MovimentacaoCaixaCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutCaixaInput = {
    id?: string
    clerkId: string
    email: string
    firstName?: string | null
    lastName?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    clientes?: ClienteUncheckedCreateNestedManyWithoutUserInput
    emprestimos?: EmprestimoUncheckedCreateNestedManyWithoutUserInput
    pagamentos?: PagamentoUncheckedCreateNestedManyWithoutUserInput
    movimentacoes?: MovimentacaoCaixaUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutCaixaInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCaixaInput, UserUncheckedCreateWithoutCaixaInput>
  }

  export type UserUpsertWithoutCaixaInput = {
    update: XOR<UserUpdateWithoutCaixaInput, UserUncheckedUpdateWithoutCaixaInput>
    create: XOR<UserCreateWithoutCaixaInput, UserUncheckedCreateWithoutCaixaInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCaixaInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCaixaInput, UserUncheckedUpdateWithoutCaixaInput>
  }

  export type UserUpdateWithoutCaixaInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    clientes?: ClienteUpdateManyWithoutUserNestedInput
    emprestimos?: EmprestimoUpdateManyWithoutUserNestedInput
    pagamentos?: PagamentoUpdateManyWithoutUserNestedInput
    movimentacoes?: MovimentacaoCaixaUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutCaixaInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    clientes?: ClienteUncheckedUpdateManyWithoutUserNestedInput
    emprestimos?: EmprestimoUncheckedUpdateManyWithoutUserNestedInput
    pagamentos?: PagamentoUncheckedUpdateManyWithoutUserNestedInput
    movimentacoes?: MovimentacaoCaixaUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutMovimentacoesInput = {
    id?: string
    clerkId: string
    email: string
    firstName?: string | null
    lastName?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    clientes?: ClienteCreateNestedManyWithoutUserInput
    emprestimos?: EmprestimoCreateNestedManyWithoutUserInput
    pagamentos?: PagamentoCreateNestedManyWithoutUserInput
    caixa?: CaixaCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutMovimentacoesInput = {
    id?: string
    clerkId: string
    email: string
    firstName?: string | null
    lastName?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    clientes?: ClienteUncheckedCreateNestedManyWithoutUserInput
    emprestimos?: EmprestimoUncheckedCreateNestedManyWithoutUserInput
    pagamentos?: PagamentoUncheckedCreateNestedManyWithoutUserInput
    caixa?: CaixaUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutMovimentacoesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutMovimentacoesInput, UserUncheckedCreateWithoutMovimentacoesInput>
  }

  export type EmprestimoCreateWithoutMovimentacoesInput = {
    id?: string
    valor: Decimal | DecimalJsLike | number | string
    valorTotal: Decimal | DecimalJsLike | number | string
    taxaJuros: number
    numeroParcelas: number
    valorParcela: Decimal | DecimalJsLike | number | string
    dataEmprestimo?: Date | string
    dataVencimento: Date | string
    status?: $Enums.StatusEmprestimo
    observacoes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    cliente: ClienteCreateNestedOneWithoutEmprestimosInput
    user: UserCreateNestedOneWithoutEmprestimosInput
    pagamentos?: PagamentoCreateNestedManyWithoutEmprestimoInput
  }

  export type EmprestimoUncheckedCreateWithoutMovimentacoesInput = {
    id?: string
    valor: Decimal | DecimalJsLike | number | string
    valorTotal: Decimal | DecimalJsLike | number | string
    taxaJuros: number
    numeroParcelas: number
    valorParcela: Decimal | DecimalJsLike | number | string
    dataEmprestimo?: Date | string
    dataVencimento: Date | string
    status?: $Enums.StatusEmprestimo
    observacoes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    clienteId: string
    userId: string
    pagamentos?: PagamentoUncheckedCreateNestedManyWithoutEmprestimoInput
  }

  export type EmprestimoCreateOrConnectWithoutMovimentacoesInput = {
    where: EmprestimoWhereUniqueInput
    create: XOR<EmprestimoCreateWithoutMovimentacoesInput, EmprestimoUncheckedCreateWithoutMovimentacoesInput>
  }

  export type UserUpsertWithoutMovimentacoesInput = {
    update: XOR<UserUpdateWithoutMovimentacoesInput, UserUncheckedUpdateWithoutMovimentacoesInput>
    create: XOR<UserCreateWithoutMovimentacoesInput, UserUncheckedCreateWithoutMovimentacoesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutMovimentacoesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutMovimentacoesInput, UserUncheckedUpdateWithoutMovimentacoesInput>
  }

  export type UserUpdateWithoutMovimentacoesInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    clientes?: ClienteUpdateManyWithoutUserNestedInput
    emprestimos?: EmprestimoUpdateManyWithoutUserNestedInput
    pagamentos?: PagamentoUpdateManyWithoutUserNestedInput
    caixa?: CaixaUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutMovimentacoesInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    clientes?: ClienteUncheckedUpdateManyWithoutUserNestedInput
    emprestimos?: EmprestimoUncheckedUpdateManyWithoutUserNestedInput
    pagamentos?: PagamentoUncheckedUpdateManyWithoutUserNestedInput
    caixa?: CaixaUncheckedUpdateManyWithoutUserNestedInput
  }

  export type EmprestimoUpsertWithoutMovimentacoesInput = {
    update: XOR<EmprestimoUpdateWithoutMovimentacoesInput, EmprestimoUncheckedUpdateWithoutMovimentacoesInput>
    create: XOR<EmprestimoCreateWithoutMovimentacoesInput, EmprestimoUncheckedCreateWithoutMovimentacoesInput>
    where?: EmprestimoWhereInput
  }

  export type EmprestimoUpdateToOneWithWhereWithoutMovimentacoesInput = {
    where?: EmprestimoWhereInput
    data: XOR<EmprestimoUpdateWithoutMovimentacoesInput, EmprestimoUncheckedUpdateWithoutMovimentacoesInput>
  }

  export type EmprestimoUpdateWithoutMovimentacoesInput = {
    id?: StringFieldUpdateOperationsInput | string
    valor?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    valorTotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    taxaJuros?: FloatFieldUpdateOperationsInput | number
    numeroParcelas?: IntFieldUpdateOperationsInput | number
    valorParcela?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    dataEmprestimo?: DateTimeFieldUpdateOperationsInput | Date | string
    dataVencimento?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusEmprestimoFieldUpdateOperationsInput | $Enums.StatusEmprestimo
    observacoes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cliente?: ClienteUpdateOneRequiredWithoutEmprestimosNestedInput
    user?: UserUpdateOneRequiredWithoutEmprestimosNestedInput
    pagamentos?: PagamentoUpdateManyWithoutEmprestimoNestedInput
  }

  export type EmprestimoUncheckedUpdateWithoutMovimentacoesInput = {
    id?: StringFieldUpdateOperationsInput | string
    valor?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    valorTotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    taxaJuros?: FloatFieldUpdateOperationsInput | number
    numeroParcelas?: IntFieldUpdateOperationsInput | number
    valorParcela?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    dataEmprestimo?: DateTimeFieldUpdateOperationsInput | Date | string
    dataVencimento?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusEmprestimoFieldUpdateOperationsInput | $Enums.StatusEmprestimo
    observacoes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    clienteId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    pagamentos?: PagamentoUncheckedUpdateManyWithoutEmprestimoNestedInput
  }

  export type ClienteCreateWithoutEmprestimosInput = {
    id?: string
    nome: string
    email: string
    telefone?: string | null
    cpf: string
    endereco?: string | null
    cidade?: string | null
    estado?: string | null
    cep?: string | null
    dataNascimento?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutClientesInput
  }

  export type ClienteUncheckedCreateWithoutEmprestimosInput = {
    id?: string
    nome: string
    email: string
    telefone?: string | null
    cpf: string
    endereco?: string | null
    cidade?: string | null
    estado?: string | null
    cep?: string | null
    dataNascimento?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
  }

  export type ClienteCreateOrConnectWithoutEmprestimosInput = {
    where: ClienteWhereUniqueInput
    create: XOR<ClienteCreateWithoutEmprestimosInput, ClienteUncheckedCreateWithoutEmprestimosInput>
  }

  export type UserCreateWithoutEmprestimosInput = {
    id?: string
    clerkId: string
    email: string
    firstName?: string | null
    lastName?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    clientes?: ClienteCreateNestedManyWithoutUserInput
    pagamentos?: PagamentoCreateNestedManyWithoutUserInput
    caixa?: CaixaCreateNestedManyWithoutUserInput
    movimentacoes?: MovimentacaoCaixaCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutEmprestimosInput = {
    id?: string
    clerkId: string
    email: string
    firstName?: string | null
    lastName?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    clientes?: ClienteUncheckedCreateNestedManyWithoutUserInput
    pagamentos?: PagamentoUncheckedCreateNestedManyWithoutUserInput
    caixa?: CaixaUncheckedCreateNestedManyWithoutUserInput
    movimentacoes?: MovimentacaoCaixaUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutEmprestimosInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutEmprestimosInput, UserUncheckedCreateWithoutEmprestimosInput>
  }

  export type PagamentoCreateWithoutEmprestimoInput = {
    id?: string
    numeroParcela: number
    valorParcela: Decimal | DecimalJsLike | number | string
    valorPago: Decimal | DecimalJsLike | number | string
    dataVencimento: Date | string
    dataPagamento?: Date | string | null
    status?: $Enums.StatusPagamento
    formaPagamento?: $Enums.FormaPagamento | null
    observacoes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutPagamentosInput
  }

  export type PagamentoUncheckedCreateWithoutEmprestimoInput = {
    id?: string
    numeroParcela: number
    valorParcela: Decimal | DecimalJsLike | number | string
    valorPago: Decimal | DecimalJsLike | number | string
    dataVencimento: Date | string
    dataPagamento?: Date | string | null
    status?: $Enums.StatusPagamento
    formaPagamento?: $Enums.FormaPagamento | null
    observacoes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
  }

  export type PagamentoCreateOrConnectWithoutEmprestimoInput = {
    where: PagamentoWhereUniqueInput
    create: XOR<PagamentoCreateWithoutEmprestimoInput, PagamentoUncheckedCreateWithoutEmprestimoInput>
  }

  export type PagamentoCreateManyEmprestimoInputEnvelope = {
    data: PagamentoCreateManyEmprestimoInput | PagamentoCreateManyEmprestimoInput[]
    skipDuplicates?: boolean
  }

  export type MovimentacaoCaixaCreateWithoutEmprestimoInput = {
    id?: string
    tipo: $Enums.TipoMovimentacao
    valor: Decimal | DecimalJsLike | number | string
    descricao: string
    dataMovimentacao?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutMovimentacoesInput
  }

  export type MovimentacaoCaixaUncheckedCreateWithoutEmprestimoInput = {
    id?: string
    tipo: $Enums.TipoMovimentacao
    valor: Decimal | DecimalJsLike | number | string
    descricao: string
    dataMovimentacao?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
  }

  export type MovimentacaoCaixaCreateOrConnectWithoutEmprestimoInput = {
    where: MovimentacaoCaixaWhereUniqueInput
    create: XOR<MovimentacaoCaixaCreateWithoutEmprestimoInput, MovimentacaoCaixaUncheckedCreateWithoutEmprestimoInput>
  }

  export type MovimentacaoCaixaCreateManyEmprestimoInputEnvelope = {
    data: MovimentacaoCaixaCreateManyEmprestimoInput | MovimentacaoCaixaCreateManyEmprestimoInput[]
    skipDuplicates?: boolean
  }

  export type ClienteUpsertWithoutEmprestimosInput = {
    update: XOR<ClienteUpdateWithoutEmprestimosInput, ClienteUncheckedUpdateWithoutEmprestimosInput>
    create: XOR<ClienteCreateWithoutEmprestimosInput, ClienteUncheckedCreateWithoutEmprestimosInput>
    where?: ClienteWhereInput
  }

  export type ClienteUpdateToOneWithWhereWithoutEmprestimosInput = {
    where?: ClienteWhereInput
    data: XOR<ClienteUpdateWithoutEmprestimosInput, ClienteUncheckedUpdateWithoutEmprestimosInput>
  }

  export type ClienteUpdateWithoutEmprestimosInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    cpf?: StringFieldUpdateOperationsInput | string
    endereco?: NullableStringFieldUpdateOperationsInput | string | null
    cidade?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: NullableStringFieldUpdateOperationsInput | string | null
    cep?: NullableStringFieldUpdateOperationsInput | string | null
    dataNascimento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutClientesNestedInput
  }

  export type ClienteUncheckedUpdateWithoutEmprestimosInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    cpf?: StringFieldUpdateOperationsInput | string
    endereco?: NullableStringFieldUpdateOperationsInput | string | null
    cidade?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: NullableStringFieldUpdateOperationsInput | string | null
    cep?: NullableStringFieldUpdateOperationsInput | string | null
    dataNascimento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type UserUpsertWithoutEmprestimosInput = {
    update: XOR<UserUpdateWithoutEmprestimosInput, UserUncheckedUpdateWithoutEmprestimosInput>
    create: XOR<UserCreateWithoutEmprestimosInput, UserUncheckedCreateWithoutEmprestimosInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutEmprestimosInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutEmprestimosInput, UserUncheckedUpdateWithoutEmprestimosInput>
  }

  export type UserUpdateWithoutEmprestimosInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    clientes?: ClienteUpdateManyWithoutUserNestedInput
    pagamentos?: PagamentoUpdateManyWithoutUserNestedInput
    caixa?: CaixaUpdateManyWithoutUserNestedInput
    movimentacoes?: MovimentacaoCaixaUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutEmprestimosInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    clientes?: ClienteUncheckedUpdateManyWithoutUserNestedInput
    pagamentos?: PagamentoUncheckedUpdateManyWithoutUserNestedInput
    caixa?: CaixaUncheckedUpdateManyWithoutUserNestedInput
    movimentacoes?: MovimentacaoCaixaUncheckedUpdateManyWithoutUserNestedInput
  }

  export type PagamentoUpsertWithWhereUniqueWithoutEmprestimoInput = {
    where: PagamentoWhereUniqueInput
    update: XOR<PagamentoUpdateWithoutEmprestimoInput, PagamentoUncheckedUpdateWithoutEmprestimoInput>
    create: XOR<PagamentoCreateWithoutEmprestimoInput, PagamentoUncheckedCreateWithoutEmprestimoInput>
  }

  export type PagamentoUpdateWithWhereUniqueWithoutEmprestimoInput = {
    where: PagamentoWhereUniqueInput
    data: XOR<PagamentoUpdateWithoutEmprestimoInput, PagamentoUncheckedUpdateWithoutEmprestimoInput>
  }

  export type PagamentoUpdateManyWithWhereWithoutEmprestimoInput = {
    where: PagamentoScalarWhereInput
    data: XOR<PagamentoUpdateManyMutationInput, PagamentoUncheckedUpdateManyWithoutEmprestimoInput>
  }

  export type MovimentacaoCaixaUpsertWithWhereUniqueWithoutEmprestimoInput = {
    where: MovimentacaoCaixaWhereUniqueInput
    update: XOR<MovimentacaoCaixaUpdateWithoutEmprestimoInput, MovimentacaoCaixaUncheckedUpdateWithoutEmprestimoInput>
    create: XOR<MovimentacaoCaixaCreateWithoutEmprestimoInput, MovimentacaoCaixaUncheckedCreateWithoutEmprestimoInput>
  }

  export type MovimentacaoCaixaUpdateWithWhereUniqueWithoutEmprestimoInput = {
    where: MovimentacaoCaixaWhereUniqueInput
    data: XOR<MovimentacaoCaixaUpdateWithoutEmprestimoInput, MovimentacaoCaixaUncheckedUpdateWithoutEmprestimoInput>
  }

  export type MovimentacaoCaixaUpdateManyWithWhereWithoutEmprestimoInput = {
    where: MovimentacaoCaixaScalarWhereInput
    data: XOR<MovimentacaoCaixaUpdateManyMutationInput, MovimentacaoCaixaUncheckedUpdateManyWithoutEmprestimoInput>
  }

  export type EmprestimoCreateWithoutPagamentosInput = {
    id?: string
    valor: Decimal | DecimalJsLike | number | string
    valorTotal: Decimal | DecimalJsLike | number | string
    taxaJuros: number
    numeroParcelas: number
    valorParcela: Decimal | DecimalJsLike | number | string
    dataEmprestimo?: Date | string
    dataVencimento: Date | string
    status?: $Enums.StatusEmprestimo
    observacoes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    cliente: ClienteCreateNestedOneWithoutEmprestimosInput
    user: UserCreateNestedOneWithoutEmprestimosInput
    movimentacoes?: MovimentacaoCaixaCreateNestedManyWithoutEmprestimoInput
  }

  export type EmprestimoUncheckedCreateWithoutPagamentosInput = {
    id?: string
    valor: Decimal | DecimalJsLike | number | string
    valorTotal: Decimal | DecimalJsLike | number | string
    taxaJuros: number
    numeroParcelas: number
    valorParcela: Decimal | DecimalJsLike | number | string
    dataEmprestimo?: Date | string
    dataVencimento: Date | string
    status?: $Enums.StatusEmprestimo
    observacoes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    clienteId: string
    userId: string
    movimentacoes?: MovimentacaoCaixaUncheckedCreateNestedManyWithoutEmprestimoInput
  }

  export type EmprestimoCreateOrConnectWithoutPagamentosInput = {
    where: EmprestimoWhereUniqueInput
    create: XOR<EmprestimoCreateWithoutPagamentosInput, EmprestimoUncheckedCreateWithoutPagamentosInput>
  }

  export type UserCreateWithoutPagamentosInput = {
    id?: string
    clerkId: string
    email: string
    firstName?: string | null
    lastName?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    clientes?: ClienteCreateNestedManyWithoutUserInput
    emprestimos?: EmprestimoCreateNestedManyWithoutUserInput
    caixa?: CaixaCreateNestedManyWithoutUserInput
    movimentacoes?: MovimentacaoCaixaCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutPagamentosInput = {
    id?: string
    clerkId: string
    email: string
    firstName?: string | null
    lastName?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    clientes?: ClienteUncheckedCreateNestedManyWithoutUserInput
    emprestimos?: EmprestimoUncheckedCreateNestedManyWithoutUserInput
    caixa?: CaixaUncheckedCreateNestedManyWithoutUserInput
    movimentacoes?: MovimentacaoCaixaUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutPagamentosInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPagamentosInput, UserUncheckedCreateWithoutPagamentosInput>
  }

  export type EmprestimoUpsertWithoutPagamentosInput = {
    update: XOR<EmprestimoUpdateWithoutPagamentosInput, EmprestimoUncheckedUpdateWithoutPagamentosInput>
    create: XOR<EmprestimoCreateWithoutPagamentosInput, EmprestimoUncheckedCreateWithoutPagamentosInput>
    where?: EmprestimoWhereInput
  }

  export type EmprestimoUpdateToOneWithWhereWithoutPagamentosInput = {
    where?: EmprestimoWhereInput
    data: XOR<EmprestimoUpdateWithoutPagamentosInput, EmprestimoUncheckedUpdateWithoutPagamentosInput>
  }

  export type EmprestimoUpdateWithoutPagamentosInput = {
    id?: StringFieldUpdateOperationsInput | string
    valor?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    valorTotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    taxaJuros?: FloatFieldUpdateOperationsInput | number
    numeroParcelas?: IntFieldUpdateOperationsInput | number
    valorParcela?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    dataEmprestimo?: DateTimeFieldUpdateOperationsInput | Date | string
    dataVencimento?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusEmprestimoFieldUpdateOperationsInput | $Enums.StatusEmprestimo
    observacoes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cliente?: ClienteUpdateOneRequiredWithoutEmprestimosNestedInput
    user?: UserUpdateOneRequiredWithoutEmprestimosNestedInput
    movimentacoes?: MovimentacaoCaixaUpdateManyWithoutEmprestimoNestedInput
  }

  export type EmprestimoUncheckedUpdateWithoutPagamentosInput = {
    id?: StringFieldUpdateOperationsInput | string
    valor?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    valorTotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    taxaJuros?: FloatFieldUpdateOperationsInput | number
    numeroParcelas?: IntFieldUpdateOperationsInput | number
    valorParcela?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    dataEmprestimo?: DateTimeFieldUpdateOperationsInput | Date | string
    dataVencimento?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusEmprestimoFieldUpdateOperationsInput | $Enums.StatusEmprestimo
    observacoes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    clienteId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    movimentacoes?: MovimentacaoCaixaUncheckedUpdateManyWithoutEmprestimoNestedInput
  }

  export type UserUpsertWithoutPagamentosInput = {
    update: XOR<UserUpdateWithoutPagamentosInput, UserUncheckedUpdateWithoutPagamentosInput>
    create: XOR<UserCreateWithoutPagamentosInput, UserUncheckedCreateWithoutPagamentosInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPagamentosInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPagamentosInput, UserUncheckedUpdateWithoutPagamentosInput>
  }

  export type UserUpdateWithoutPagamentosInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    clientes?: ClienteUpdateManyWithoutUserNestedInput
    emprestimos?: EmprestimoUpdateManyWithoutUserNestedInput
    caixa?: CaixaUpdateManyWithoutUserNestedInput
    movimentacoes?: MovimentacaoCaixaUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutPagamentosInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    clientes?: ClienteUncheckedUpdateManyWithoutUserNestedInput
    emprestimos?: EmprestimoUncheckedUpdateManyWithoutUserNestedInput
    caixa?: CaixaUncheckedUpdateManyWithoutUserNestedInput
    movimentacoes?: MovimentacaoCaixaUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ClienteCreateManyUserInput = {
    id?: string
    nome: string
    email: string
    telefone?: string | null
    cpf: string
    endereco?: string | null
    cidade?: string | null
    estado?: string | null
    cep?: string | null
    dataNascimento?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EmprestimoCreateManyUserInput = {
    id?: string
    valor: Decimal | DecimalJsLike | number | string
    valorTotal: Decimal | DecimalJsLike | number | string
    taxaJuros: number
    numeroParcelas: number
    valorParcela: Decimal | DecimalJsLike | number | string
    dataEmprestimo?: Date | string
    dataVencimento: Date | string
    status?: $Enums.StatusEmprestimo
    observacoes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    clienteId: string
  }

  export type PagamentoCreateManyUserInput = {
    id?: string
    numeroParcela: number
    valorParcela: Decimal | DecimalJsLike | number | string
    valorPago: Decimal | DecimalJsLike | number | string
    dataVencimento: Date | string
    dataPagamento?: Date | string | null
    status?: $Enums.StatusPagamento
    formaPagamento?: $Enums.FormaPagamento | null
    observacoes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    emprestimoId: string
  }

  export type CaixaCreateManyUserInput = {
    id?: string
    saldoInicial: Decimal | DecimalJsLike | number | string
    saldoAtual: Decimal | DecimalJsLike | number | string
    dataInicial?: Date | string
    observacoes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MovimentacaoCaixaCreateManyUserInput = {
    id?: string
    tipo: $Enums.TipoMovimentacao
    valor: Decimal | DecimalJsLike | number | string
    descricao: string
    dataMovimentacao?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    emprestimoId?: string | null
  }

  export type ClienteUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    cpf?: StringFieldUpdateOperationsInput | string
    endereco?: NullableStringFieldUpdateOperationsInput | string | null
    cidade?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: NullableStringFieldUpdateOperationsInput | string | null
    cep?: NullableStringFieldUpdateOperationsInput | string | null
    dataNascimento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    emprestimos?: EmprestimoUpdateManyWithoutClienteNestedInput
  }

  export type ClienteUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    cpf?: StringFieldUpdateOperationsInput | string
    endereco?: NullableStringFieldUpdateOperationsInput | string | null
    cidade?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: NullableStringFieldUpdateOperationsInput | string | null
    cep?: NullableStringFieldUpdateOperationsInput | string | null
    dataNascimento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    emprestimos?: EmprestimoUncheckedUpdateManyWithoutClienteNestedInput
  }

  export type ClienteUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    cpf?: StringFieldUpdateOperationsInput | string
    endereco?: NullableStringFieldUpdateOperationsInput | string | null
    cidade?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: NullableStringFieldUpdateOperationsInput | string | null
    cep?: NullableStringFieldUpdateOperationsInput | string | null
    dataNascimento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmprestimoUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    valor?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    valorTotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    taxaJuros?: FloatFieldUpdateOperationsInput | number
    numeroParcelas?: IntFieldUpdateOperationsInput | number
    valorParcela?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    dataEmprestimo?: DateTimeFieldUpdateOperationsInput | Date | string
    dataVencimento?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusEmprestimoFieldUpdateOperationsInput | $Enums.StatusEmprestimo
    observacoes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cliente?: ClienteUpdateOneRequiredWithoutEmprestimosNestedInput
    pagamentos?: PagamentoUpdateManyWithoutEmprestimoNestedInput
    movimentacoes?: MovimentacaoCaixaUpdateManyWithoutEmprestimoNestedInput
  }

  export type EmprestimoUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    valor?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    valorTotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    taxaJuros?: FloatFieldUpdateOperationsInput | number
    numeroParcelas?: IntFieldUpdateOperationsInput | number
    valorParcela?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    dataEmprestimo?: DateTimeFieldUpdateOperationsInput | Date | string
    dataVencimento?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusEmprestimoFieldUpdateOperationsInput | $Enums.StatusEmprestimo
    observacoes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    clienteId?: StringFieldUpdateOperationsInput | string
    pagamentos?: PagamentoUncheckedUpdateManyWithoutEmprestimoNestedInput
    movimentacoes?: MovimentacaoCaixaUncheckedUpdateManyWithoutEmprestimoNestedInput
  }

  export type EmprestimoUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    valor?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    valorTotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    taxaJuros?: FloatFieldUpdateOperationsInput | number
    numeroParcelas?: IntFieldUpdateOperationsInput | number
    valorParcela?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    dataEmprestimo?: DateTimeFieldUpdateOperationsInput | Date | string
    dataVencimento?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusEmprestimoFieldUpdateOperationsInput | $Enums.StatusEmprestimo
    observacoes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    clienteId?: StringFieldUpdateOperationsInput | string
  }

  export type PagamentoUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    numeroParcela?: IntFieldUpdateOperationsInput | number
    valorParcela?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    valorPago?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    dataVencimento?: DateTimeFieldUpdateOperationsInput | Date | string
    dataPagamento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumStatusPagamentoFieldUpdateOperationsInput | $Enums.StatusPagamento
    formaPagamento?: NullableEnumFormaPagamentoFieldUpdateOperationsInput | $Enums.FormaPagamento | null
    observacoes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    emprestimo?: EmprestimoUpdateOneRequiredWithoutPagamentosNestedInput
  }

  export type PagamentoUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    numeroParcela?: IntFieldUpdateOperationsInput | number
    valorParcela?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    valorPago?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    dataVencimento?: DateTimeFieldUpdateOperationsInput | Date | string
    dataPagamento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumStatusPagamentoFieldUpdateOperationsInput | $Enums.StatusPagamento
    formaPagamento?: NullableEnumFormaPagamentoFieldUpdateOperationsInput | $Enums.FormaPagamento | null
    observacoes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    emprestimoId?: StringFieldUpdateOperationsInput | string
  }

  export type PagamentoUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    numeroParcela?: IntFieldUpdateOperationsInput | number
    valorParcela?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    valorPago?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    dataVencimento?: DateTimeFieldUpdateOperationsInput | Date | string
    dataPagamento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumStatusPagamentoFieldUpdateOperationsInput | $Enums.StatusPagamento
    formaPagamento?: NullableEnumFormaPagamentoFieldUpdateOperationsInput | $Enums.FormaPagamento | null
    observacoes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    emprestimoId?: StringFieldUpdateOperationsInput | string
  }

  export type CaixaUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    saldoInicial?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    saldoAtual?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    dataInicial?: DateTimeFieldUpdateOperationsInput | Date | string
    observacoes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CaixaUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    saldoInicial?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    saldoAtual?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    dataInicial?: DateTimeFieldUpdateOperationsInput | Date | string
    observacoes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CaixaUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    saldoInicial?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    saldoAtual?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    dataInicial?: DateTimeFieldUpdateOperationsInput | Date | string
    observacoes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MovimentacaoCaixaUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    tipo?: EnumTipoMovimentacaoFieldUpdateOperationsInput | $Enums.TipoMovimentacao
    valor?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    descricao?: StringFieldUpdateOperationsInput | string
    dataMovimentacao?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    emprestimo?: EmprestimoUpdateOneWithoutMovimentacoesNestedInput
  }

  export type MovimentacaoCaixaUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    tipo?: EnumTipoMovimentacaoFieldUpdateOperationsInput | $Enums.TipoMovimentacao
    valor?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    descricao?: StringFieldUpdateOperationsInput | string
    dataMovimentacao?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    emprestimoId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MovimentacaoCaixaUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    tipo?: EnumTipoMovimentacaoFieldUpdateOperationsInput | $Enums.TipoMovimentacao
    valor?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    descricao?: StringFieldUpdateOperationsInput | string
    dataMovimentacao?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    emprestimoId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type EmprestimoCreateManyClienteInput = {
    id?: string
    valor: Decimal | DecimalJsLike | number | string
    valorTotal: Decimal | DecimalJsLike | number | string
    taxaJuros: number
    numeroParcelas: number
    valorParcela: Decimal | DecimalJsLike | number | string
    dataEmprestimo?: Date | string
    dataVencimento: Date | string
    status?: $Enums.StatusEmprestimo
    observacoes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
  }

  export type EmprestimoUpdateWithoutClienteInput = {
    id?: StringFieldUpdateOperationsInput | string
    valor?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    valorTotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    taxaJuros?: FloatFieldUpdateOperationsInput | number
    numeroParcelas?: IntFieldUpdateOperationsInput | number
    valorParcela?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    dataEmprestimo?: DateTimeFieldUpdateOperationsInput | Date | string
    dataVencimento?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusEmprestimoFieldUpdateOperationsInput | $Enums.StatusEmprestimo
    observacoes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutEmprestimosNestedInput
    pagamentos?: PagamentoUpdateManyWithoutEmprestimoNestedInput
    movimentacoes?: MovimentacaoCaixaUpdateManyWithoutEmprestimoNestedInput
  }

  export type EmprestimoUncheckedUpdateWithoutClienteInput = {
    id?: StringFieldUpdateOperationsInput | string
    valor?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    valorTotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    taxaJuros?: FloatFieldUpdateOperationsInput | number
    numeroParcelas?: IntFieldUpdateOperationsInput | number
    valorParcela?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    dataEmprestimo?: DateTimeFieldUpdateOperationsInput | Date | string
    dataVencimento?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusEmprestimoFieldUpdateOperationsInput | $Enums.StatusEmprestimo
    observacoes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    pagamentos?: PagamentoUncheckedUpdateManyWithoutEmprestimoNestedInput
    movimentacoes?: MovimentacaoCaixaUncheckedUpdateManyWithoutEmprestimoNestedInput
  }

  export type EmprestimoUncheckedUpdateManyWithoutClienteInput = {
    id?: StringFieldUpdateOperationsInput | string
    valor?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    valorTotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    taxaJuros?: FloatFieldUpdateOperationsInput | number
    numeroParcelas?: IntFieldUpdateOperationsInput | number
    valorParcela?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    dataEmprestimo?: DateTimeFieldUpdateOperationsInput | Date | string
    dataVencimento?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusEmprestimoFieldUpdateOperationsInput | $Enums.StatusEmprestimo
    observacoes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type PagamentoCreateManyEmprestimoInput = {
    id?: string
    numeroParcela: number
    valorParcela: Decimal | DecimalJsLike | number | string
    valorPago: Decimal | DecimalJsLike | number | string
    dataVencimento: Date | string
    dataPagamento?: Date | string | null
    status?: $Enums.StatusPagamento
    formaPagamento?: $Enums.FormaPagamento | null
    observacoes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
  }

  export type MovimentacaoCaixaCreateManyEmprestimoInput = {
    id?: string
    tipo: $Enums.TipoMovimentacao
    valor: Decimal | DecimalJsLike | number | string
    descricao: string
    dataMovimentacao?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
  }

  export type PagamentoUpdateWithoutEmprestimoInput = {
    id?: StringFieldUpdateOperationsInput | string
    numeroParcela?: IntFieldUpdateOperationsInput | number
    valorParcela?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    valorPago?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    dataVencimento?: DateTimeFieldUpdateOperationsInput | Date | string
    dataPagamento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumStatusPagamentoFieldUpdateOperationsInput | $Enums.StatusPagamento
    formaPagamento?: NullableEnumFormaPagamentoFieldUpdateOperationsInput | $Enums.FormaPagamento | null
    observacoes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutPagamentosNestedInput
  }

  export type PagamentoUncheckedUpdateWithoutEmprestimoInput = {
    id?: StringFieldUpdateOperationsInput | string
    numeroParcela?: IntFieldUpdateOperationsInput | number
    valorParcela?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    valorPago?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    dataVencimento?: DateTimeFieldUpdateOperationsInput | Date | string
    dataPagamento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumStatusPagamentoFieldUpdateOperationsInput | $Enums.StatusPagamento
    formaPagamento?: NullableEnumFormaPagamentoFieldUpdateOperationsInput | $Enums.FormaPagamento | null
    observacoes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type PagamentoUncheckedUpdateManyWithoutEmprestimoInput = {
    id?: StringFieldUpdateOperationsInput | string
    numeroParcela?: IntFieldUpdateOperationsInput | number
    valorParcela?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    valorPago?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    dataVencimento?: DateTimeFieldUpdateOperationsInput | Date | string
    dataPagamento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumStatusPagamentoFieldUpdateOperationsInput | $Enums.StatusPagamento
    formaPagamento?: NullableEnumFormaPagamentoFieldUpdateOperationsInput | $Enums.FormaPagamento | null
    observacoes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type MovimentacaoCaixaUpdateWithoutEmprestimoInput = {
    id?: StringFieldUpdateOperationsInput | string
    tipo?: EnumTipoMovimentacaoFieldUpdateOperationsInput | $Enums.TipoMovimentacao
    valor?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    descricao?: StringFieldUpdateOperationsInput | string
    dataMovimentacao?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutMovimentacoesNestedInput
  }

  export type MovimentacaoCaixaUncheckedUpdateWithoutEmprestimoInput = {
    id?: StringFieldUpdateOperationsInput | string
    tipo?: EnumTipoMovimentacaoFieldUpdateOperationsInput | $Enums.TipoMovimentacao
    valor?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    descricao?: StringFieldUpdateOperationsInput | string
    dataMovimentacao?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type MovimentacaoCaixaUncheckedUpdateManyWithoutEmprestimoInput = {
    id?: StringFieldUpdateOperationsInput | string
    tipo?: EnumTipoMovimentacaoFieldUpdateOperationsInput | $Enums.TipoMovimentacao
    valor?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    descricao?: StringFieldUpdateOperationsInput | string
    dataMovimentacao?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}