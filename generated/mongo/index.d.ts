
/**
 * Client
**/

import * as runtime from './runtime/library';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Notification
 * 
 */
export type Notification = $Result.DefaultSelection<Prisma.$NotificationPayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Post
 * 
 */
export type Post = $Result.DefaultSelection<Prisma.$PostPayload>
/**
 * Model LikeTable
 * 
 */
export type LikeTable = $Result.DefaultSelection<Prisma.$LikeTablePayload>
/**
 * Model Reply
 * 
 */
export type Reply = $Result.DefaultSelection<Prisma.$ReplyPayload>
/**
 * Model NotificationCenter
 * 
 */
export type NotificationCenter = $Result.DefaultSelection<Prisma.$NotificationCenterPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const PostStatus: {
  DRAFT: 'DRAFT',
  UNDER_REVIEW: 'UNDER_REVIEW',
  PUBLISHED: 'PUBLISHED',
  HIDDEN: 'HIDDEN'
};

export type PostStatus = (typeof PostStatus)[keyof typeof PostStatus]


export const NotificationType: {
  LIKE: 'LIKE',
  REPLY: 'REPLY',
  FOLLOW: 'FOLLOW'
};

export type NotificationType = (typeof NotificationType)[keyof typeof NotificationType]

}

export type PostStatus = $Enums.PostStatus

export const PostStatus: typeof $Enums.PostStatus

export type NotificationType = $Enums.NotificationType

export const NotificationType: typeof $Enums.NotificationType

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
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
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

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

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
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P]): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number }): $Utils.JsPromise<R>

  /**
   * Executes a raw MongoDB command and returns the result of it.
   * @example
   * ```
   * const user = await prisma.$runCommandRaw({
   *   aggregate: 'User',
   *   pipeline: [{ $match: { name: 'Bob' } }, { $project: { email: true, _id: false } }],
   *   explain: false,
   * })
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $runCommandRaw(command: Prisma.InputJsonObject): Prisma.PrismaPromise<Prisma.JsonObject>

  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs>;

  /**
   * `prisma.post`: Exposes CRUD operations for the **Post** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Posts
    * const posts = await prisma.post.findMany()
    * ```
    */
  get post(): Prisma.PostDelegate<ExtArgs>;

  /**
   * `prisma.likeTable`: Exposes CRUD operations for the **LikeTable** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more LikeTables
    * const likeTables = await prisma.likeTable.findMany()
    * ```
    */
  get likeTable(): Prisma.LikeTableDelegate<ExtArgs>;

  /**
   * `prisma.reply`: Exposes CRUD operations for the **Reply** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Replies
    * const replies = await prisma.reply.findMany()
    * ```
    */
  get reply(): Prisma.ReplyDelegate<ExtArgs>;

  /**
   * `prisma.notificationCenter`: Exposes CRUD operations for the **NotificationCenter** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more NotificationCenters
    * const notificationCenters = await prisma.notificationCenter.findMany()
    * ```
    */
  get notificationCenter(): Prisma.NotificationCenterDelegate<ExtArgs>;
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
  export import NotFoundError = runtime.NotFoundError

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
   * Prisma Client JS version: 5.8.1
   * Query Engine version: 78caf6feeaed953168c64e15a249c3e9a033ebe2
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown }

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
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
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
    Post: 'Post',
    LikeTable: 'LikeTable',
    Reply: 'Reply',
    NotificationCenter: 'NotificationCenter'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }


  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs}, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'user' | 'post' | 'likeTable' | 'reply' | 'notificationCenter'
      txIsolationLevel: never
    },
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>,
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.UserFindRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          aggregateRaw: {
            args: Prisma.UserAggregateRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>,
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Post: {
        payload: Prisma.$PostPayload<ExtArgs>
        fields: Prisma.PostFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PostFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PostPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PostFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          findFirst: {
            args: Prisma.PostFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PostPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PostFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          findMany: {
            args: Prisma.PostFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PostPayload>[]
          }
          create: {
            args: Prisma.PostCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          createMany: {
            args: Prisma.PostCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.PostDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          update: {
            args: Prisma.PostUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          deleteMany: {
            args: Prisma.PostDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.PostUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.PostUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          aggregate: {
            args: Prisma.PostAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregatePost>
          }
          groupBy: {
            args: Prisma.PostGroupByArgs<ExtArgs>,
            result: $Utils.Optional<PostGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.PostFindRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          aggregateRaw: {
            args: Prisma.PostAggregateRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          count: {
            args: Prisma.PostCountArgs<ExtArgs>,
            result: $Utils.Optional<PostCountAggregateOutputType> | number
          }
        }
      }
      LikeTable: {
        payload: Prisma.$LikeTablePayload<ExtArgs>
        fields: Prisma.LikeTableFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LikeTableFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LikeTablePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LikeTableFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LikeTablePayload>
          }
          findFirst: {
            args: Prisma.LikeTableFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LikeTablePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LikeTableFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LikeTablePayload>
          }
          findMany: {
            args: Prisma.LikeTableFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LikeTablePayload>[]
          }
          create: {
            args: Prisma.LikeTableCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LikeTablePayload>
          }
          createMany: {
            args: Prisma.LikeTableCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.LikeTableDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LikeTablePayload>
          }
          update: {
            args: Prisma.LikeTableUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LikeTablePayload>
          }
          deleteMany: {
            args: Prisma.LikeTableDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.LikeTableUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.LikeTableUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LikeTablePayload>
          }
          aggregate: {
            args: Prisma.LikeTableAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateLikeTable>
          }
          groupBy: {
            args: Prisma.LikeTableGroupByArgs<ExtArgs>,
            result: $Utils.Optional<LikeTableGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.LikeTableFindRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          aggregateRaw: {
            args: Prisma.LikeTableAggregateRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          count: {
            args: Prisma.LikeTableCountArgs<ExtArgs>,
            result: $Utils.Optional<LikeTableCountAggregateOutputType> | number
          }
        }
      }
      Reply: {
        payload: Prisma.$ReplyPayload<ExtArgs>
        fields: Prisma.ReplyFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ReplyFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ReplyPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ReplyFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ReplyPayload>
          }
          findFirst: {
            args: Prisma.ReplyFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ReplyPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ReplyFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ReplyPayload>
          }
          findMany: {
            args: Prisma.ReplyFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ReplyPayload>[]
          }
          create: {
            args: Prisma.ReplyCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ReplyPayload>
          }
          createMany: {
            args: Prisma.ReplyCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.ReplyDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ReplyPayload>
          }
          update: {
            args: Prisma.ReplyUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ReplyPayload>
          }
          deleteMany: {
            args: Prisma.ReplyDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.ReplyUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.ReplyUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ReplyPayload>
          }
          aggregate: {
            args: Prisma.ReplyAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateReply>
          }
          groupBy: {
            args: Prisma.ReplyGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ReplyGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.ReplyFindRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          aggregateRaw: {
            args: Prisma.ReplyAggregateRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          count: {
            args: Prisma.ReplyCountArgs<ExtArgs>,
            result: $Utils.Optional<ReplyCountAggregateOutputType> | number
          }
        }
      }
      NotificationCenter: {
        payload: Prisma.$NotificationCenterPayload<ExtArgs>
        fields: Prisma.NotificationCenterFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NotificationCenterFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$NotificationCenterPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NotificationCenterFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$NotificationCenterPayload>
          }
          findFirst: {
            args: Prisma.NotificationCenterFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$NotificationCenterPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NotificationCenterFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$NotificationCenterPayload>
          }
          findMany: {
            args: Prisma.NotificationCenterFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$NotificationCenterPayload>[]
          }
          create: {
            args: Prisma.NotificationCenterCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$NotificationCenterPayload>
          }
          createMany: {
            args: Prisma.NotificationCenterCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.NotificationCenterDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$NotificationCenterPayload>
          }
          update: {
            args: Prisma.NotificationCenterUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$NotificationCenterPayload>
          }
          deleteMany: {
            args: Prisma.NotificationCenterDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.NotificationCenterUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.NotificationCenterUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$NotificationCenterPayload>
          }
          aggregate: {
            args: Prisma.NotificationCenterAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateNotificationCenter>
          }
          groupBy: {
            args: Prisma.NotificationCenterGroupByArgs<ExtArgs>,
            result: $Utils.Optional<NotificationCenterGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.NotificationCenterFindRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          aggregateRaw: {
            args: Prisma.NotificationCenterAggregateRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          count: {
            args: Prisma.NotificationCenterCountArgs<ExtArgs>,
            result: $Utils.Optional<NotificationCenterCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $runCommandRaw: {
          args: Prisma.InputJsonObject,
          result: Prisma.JsonObject
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>
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
    | 'update'
    | 'updateMany'
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
    posts: number
    repliesFrom: number
    repliesTo: number
    LikeTable: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    posts?: boolean | UserCountOutputTypeCountPostsArgs
    repliesFrom?: boolean | UserCountOutputTypeCountRepliesFromArgs
    repliesTo?: boolean | UserCountOutputTypeCountRepliesToArgs
    LikeTable?: boolean | UserCountOutputTypeCountLikeTableArgs
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
  export type UserCountOutputTypeCountPostsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PostWhereInput
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountRepliesFromArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReplyWhereInput
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountRepliesToArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReplyWhereInput
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountLikeTableArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LikeTableWhereInput
  }



  /**
   * Count Type PostCountOutputType
   */

  export type PostCountOutputType = {
    replies: number
    LikeTable: number
  }

  export type PostCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    replies?: boolean | PostCountOutputTypeCountRepliesArgs
    LikeTable?: boolean | PostCountOutputTypeCountLikeTableArgs
  }

  // Custom InputTypes

  /**
   * PostCountOutputType without action
   */
  export type PostCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostCountOutputType
     */
    select?: PostCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * PostCountOutputType without action
   */
  export type PostCountOutputTypeCountRepliesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReplyWhereInput
  }


  /**
   * PostCountOutputType without action
   */
  export type PostCountOutputTypeCountLikeTableArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LikeTableWhereInput
  }



  /**
   * Models
   */

  /**
   * Model Notification
   */





  export type NotificationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    type?: boolean
    content?: boolean
    sender?: boolean
    createTime?: boolean
    read?: boolean
  }, ExtArgs["result"]["notification"]>

  export type NotificationSelectScalar = {
    type?: boolean
    content?: boolean
    sender?: boolean
    createTime?: boolean
    read?: boolean
  }


  export type $NotificationPayload = {
    name: "Notification"
    objects: {}
    scalars: {
      type: $Enums.NotificationType
      content: string
      sender: string
      createTime: Date
      read: boolean
    }
    composites: {}
  }


  type NotificationGetPayload<S extends boolean | null | undefined | NotificationDefaultArgs> = $Result.GetResult<Prisma.$NotificationPayload, S>





  /**
   * Fields of the Notification model
   */ 
  interface NotificationFieldRefs {
    readonly type: FieldRef<"Notification", 'NotificationType'>
    readonly content: FieldRef<"Notification", 'String'>
    readonly sender: FieldRef<"Notification", 'String'>
    readonly createTime: FieldRef<"Notification", 'DateTime'>
    readonly read: FieldRef<"Notification", 'Boolean'>
  }
    

  // Custom InputTypes

  /**
   * Notification without action
   */
  export type NotificationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
  }



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
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
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
    posts?: boolean | User$postsArgs<ExtArgs>
    repliesFrom?: boolean | User$repliesFromArgs<ExtArgs>
    repliesTo?: boolean | User$repliesToArgs<ExtArgs>
    LikeTable?: boolean | User$LikeTableArgs<ExtArgs>
    notificationCenter?: boolean | User$notificationCenterArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
  }

  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    posts?: boolean | User$postsArgs<ExtArgs>
    repliesFrom?: boolean | User$repliesFromArgs<ExtArgs>
    repliesTo?: boolean | User$repliesToArgs<ExtArgs>
    LikeTable?: boolean | User$LikeTableArgs<ExtArgs>
    notificationCenter?: boolean | User$notificationCenterArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      posts: Prisma.$PostPayload<ExtArgs>[]
      repliesFrom: Prisma.$ReplyPayload<ExtArgs>[]
      repliesTo: Prisma.$ReplyPayload<ExtArgs>[]
      LikeTable: Prisma.$LikeTablePayload<ExtArgs>[]
      notificationCenter: Prisma.$NotificationCenterPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
    }, ExtArgs["result"]["user"]>
    composites: {}
  }


  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
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
    **/
    findUnique<T extends UserFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one User that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

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
    **/
    findFirst<T extends UserFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

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
    **/
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs=} args - Arguments to filter and select certain fields only.
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
    **/
    findMany<T extends UserFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findMany'>>

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
    **/
    create<T extends UserCreateArgs<ExtArgs>>(
      args: SelectSubset<T, UserCreateArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Users.
     *     @param {UserCreateManyArgs} args - Arguments to create many Users.
     *     @example
     *     // Create many Users
     *     const user = await prisma.user.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends UserCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

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
    **/
    delete<T extends UserDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, UserDeleteArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

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
    **/
    update<T extends UserUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpdateArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

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
    **/
    deleteMany<T extends UserDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

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
    **/
    updateMany<T extends UserUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

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
    **/
    upsert<T extends UserUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpsertArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Find zero or more Users that matches the filter.
     * @param {UserFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const user = await prisma.user.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
    **/
    findRaw(
      args?: UserFindRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a User.
     * @param {UserAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const user = await prisma.user.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
    **/
    aggregateRaw(
      args?: UserAggregateRawArgs
    ): Prisma.PrismaPromise<JsonObject>

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
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    posts<T extends User$postsArgs<ExtArgs> = {}>(args?: Subset<T, User$postsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, 'findMany'> | Null>;

    repliesFrom<T extends User$repliesFromArgs<ExtArgs> = {}>(args?: Subset<T, User$repliesFromArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReplyPayload<ExtArgs>, T, 'findMany'> | Null>;

    repliesTo<T extends User$repliesToArgs<ExtArgs> = {}>(args?: Subset<T, User$repliesToArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReplyPayload<ExtArgs>, T, 'findMany'> | Null>;

    LikeTable<T extends User$LikeTableArgs<ExtArgs> = {}>(args?: Subset<T, User$LikeTableArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LikeTablePayload<ExtArgs>, T, 'findMany'> | Null>;

    notificationCenter<T extends User$notificationCenterArgs<ExtArgs> = {}>(args?: Subset<T, User$notificationCenterArgs<ExtArgs>>): Prisma__NotificationCenterClient<$Result.GetResult<Prisma.$NotificationCenterPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the User model
   */ 
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
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
     * Choose, which related nodes to fetch as well.
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
     * Choose, which related nodes to fetch as well.
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
     * Choose, which related nodes to fetch as well.
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
     * Choose, which related nodes to fetch as well.
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
     * Choose, which related nodes to fetch as well.
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
     * Choose, which related nodes to fetch as well.
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
     * Choose, which related nodes to fetch as well.
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
     * Choose, which related nodes to fetch as well.
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
     * Choose, which related nodes to fetch as well.
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
  }


  /**
   * User findRaw
   */
  export type UserFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * User aggregateRaw
   */
  export type UserAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * User.posts
   */
  export type User$postsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PostInclude<ExtArgs> | null
    where?: PostWhereInput
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    cursor?: PostWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[]
  }


  /**
   * User.repliesFrom
   */
  export type User$repliesFromArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reply
     */
    select?: ReplySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ReplyInclude<ExtArgs> | null
    where?: ReplyWhereInput
    orderBy?: ReplyOrderByWithRelationInput | ReplyOrderByWithRelationInput[]
    cursor?: ReplyWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReplyScalarFieldEnum | ReplyScalarFieldEnum[]
  }


  /**
   * User.repliesTo
   */
  export type User$repliesToArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reply
     */
    select?: ReplySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ReplyInclude<ExtArgs> | null
    where?: ReplyWhereInput
    orderBy?: ReplyOrderByWithRelationInput | ReplyOrderByWithRelationInput[]
    cursor?: ReplyWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReplyScalarFieldEnum | ReplyScalarFieldEnum[]
  }


  /**
   * User.LikeTable
   */
  export type User$LikeTableArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LikeTable
     */
    select?: LikeTableSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LikeTableInclude<ExtArgs> | null
    where?: LikeTableWhereInput
    orderBy?: LikeTableOrderByWithRelationInput | LikeTableOrderByWithRelationInput[]
    cursor?: LikeTableWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LikeTableScalarFieldEnum | LikeTableScalarFieldEnum[]
  }


  /**
   * User.notificationCenter
   */
  export type User$notificationCenterArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationCenter
     */
    select?: NotificationCenterSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: NotificationCenterInclude<ExtArgs> | null
    where?: NotificationCenterWhereInput
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
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
  }



  /**
   * Model Post
   */

  export type AggregatePost = {
    _count: PostCountAggregateOutputType | null
    _min: PostMinAggregateOutputType | null
    _max: PostMaxAggregateOutputType | null
  }

  export type PostMinAggregateOutputType = {
    id: string | null
    title: string | null
    content: string | null
    media: string | null
    status: $Enums.PostStatus | null
    authorId: string | null
    originPost: string | null
  }

  export type PostMaxAggregateOutputType = {
    id: string | null
    title: string | null
    content: string | null
    media: string | null
    status: $Enums.PostStatus | null
    authorId: string | null
    originPost: string | null
  }

  export type PostCountAggregateOutputType = {
    id: number
    title: number
    content: number
    media: number
    status: number
    authorId: number
    originPost: number
    _all: number
  }


  export type PostMinAggregateInputType = {
    id?: true
    title?: true
    content?: true
    media?: true
    status?: true
    authorId?: true
    originPost?: true
  }

  export type PostMaxAggregateInputType = {
    id?: true
    title?: true
    content?: true
    media?: true
    status?: true
    authorId?: true
    originPost?: true
  }

  export type PostCountAggregateInputType = {
    id?: true
    title?: true
    content?: true
    media?: true
    status?: true
    authorId?: true
    originPost?: true
    _all?: true
  }

  export type PostAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Post to aggregate.
     */
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Posts
    **/
    _count?: true | PostCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PostMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PostMaxAggregateInputType
  }

  export type GetPostAggregateType<T extends PostAggregateArgs> = {
        [P in keyof T & keyof AggregatePost]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePost[P]>
      : GetScalarType<T[P], AggregatePost[P]>
  }




  export type PostGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PostWhereInput
    orderBy?: PostOrderByWithAggregationInput | PostOrderByWithAggregationInput[]
    by: PostScalarFieldEnum[] | PostScalarFieldEnum
    having?: PostScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PostCountAggregateInputType | true
    _min?: PostMinAggregateInputType
    _max?: PostMaxAggregateInputType
  }

  export type PostGroupByOutputType = {
    id: string
    title: string
    content: string
    media: string | null
    status: $Enums.PostStatus
    authorId: string
    originPost: string | null
    _count: PostCountAggregateOutputType | null
    _min: PostMinAggregateOutputType | null
    _max: PostMaxAggregateOutputType | null
  }

  type GetPostGroupByPayload<T extends PostGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PostGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PostGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PostGroupByOutputType[P]>
            : GetScalarType<T[P], PostGroupByOutputType[P]>
        }
      >
    >


  export type PostSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    content?: boolean
    media?: boolean
    status?: boolean
    authorId?: boolean
    originPost?: boolean
    author?: boolean | UserDefaultArgs<ExtArgs>
    replies?: boolean | Post$repliesArgs<ExtArgs>
    LikeTable?: boolean | Post$LikeTableArgs<ExtArgs>
    _count?: boolean | PostCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["post"]>

  export type PostSelectScalar = {
    id?: boolean
    title?: boolean
    content?: boolean
    media?: boolean
    status?: boolean
    authorId?: boolean
    originPost?: boolean
  }

  export type PostInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    author?: boolean | UserDefaultArgs<ExtArgs>
    replies?: boolean | Post$repliesArgs<ExtArgs>
    LikeTable?: boolean | Post$LikeTableArgs<ExtArgs>
    _count?: boolean | PostCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $PostPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Post"
    objects: {
      author: Prisma.$UserPayload<ExtArgs>
      replies: Prisma.$ReplyPayload<ExtArgs>[]
      LikeTable: Prisma.$LikeTablePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      content: string
      media: string | null
      status: $Enums.PostStatus
      authorId: string
      originPost: string | null
    }, ExtArgs["result"]["post"]>
    composites: {}
  }


  type PostGetPayload<S extends boolean | null | undefined | PostDefaultArgs> = $Result.GetResult<Prisma.$PostPayload, S>

  type PostCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<PostFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: PostCountAggregateInputType | true
    }

  export interface PostDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Post'], meta: { name: 'Post' } }
    /**
     * Find zero or one Post that matches the filter.
     * @param {PostFindUniqueArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends PostFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, PostFindUniqueArgs<ExtArgs>>
    ): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Post that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {PostFindUniqueOrThrowArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends PostFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, PostFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Post that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostFindFirstArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends PostFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, PostFindFirstArgs<ExtArgs>>
    ): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Post that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostFindFirstOrThrowArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends PostFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, PostFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Posts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Posts
     * const posts = await prisma.post.findMany()
     * 
     * // Get first 10 Posts
     * const posts = await prisma.post.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const postWithIdOnly = await prisma.post.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends PostFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PostFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Post.
     * @param {PostCreateArgs} args - Arguments to create a Post.
     * @example
     * // Create one Post
     * const Post = await prisma.post.create({
     *   data: {
     *     // ... data to create a Post
     *   }
     * })
     * 
    **/
    create<T extends PostCreateArgs<ExtArgs>>(
      args: SelectSubset<T, PostCreateArgs<ExtArgs>>
    ): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Posts.
     *     @param {PostCreateManyArgs} args - Arguments to create many Posts.
     *     @example
     *     // Create many Posts
     *     const post = await prisma.post.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends PostCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PostCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Post.
     * @param {PostDeleteArgs} args - Arguments to delete one Post.
     * @example
     * // Delete one Post
     * const Post = await prisma.post.delete({
     *   where: {
     *     // ... filter to delete one Post
     *   }
     * })
     * 
    **/
    delete<T extends PostDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, PostDeleteArgs<ExtArgs>>
    ): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Post.
     * @param {PostUpdateArgs} args - Arguments to update one Post.
     * @example
     * // Update one Post
     * const post = await prisma.post.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends PostUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, PostUpdateArgs<ExtArgs>>
    ): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Posts.
     * @param {PostDeleteManyArgs} args - Arguments to filter Posts to delete.
     * @example
     * // Delete a few Posts
     * const { count } = await prisma.post.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends PostDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PostDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Posts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Posts
     * const post = await prisma.post.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends PostUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, PostUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Post.
     * @param {PostUpsertArgs} args - Arguments to update or create a Post.
     * @example
     * // Update or create a Post
     * const post = await prisma.post.upsert({
     *   create: {
     *     // ... data to create a Post
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Post we want to update
     *   }
     * })
    **/
    upsert<T extends PostUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, PostUpsertArgs<ExtArgs>>
    ): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Find zero or more Posts that matches the filter.
     * @param {PostFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const post = await prisma.post.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
    **/
    findRaw(
      args?: PostFindRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Post.
     * @param {PostAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const post = await prisma.post.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
    **/
    aggregateRaw(
      args?: PostAggregateRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Count the number of Posts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostCountArgs} args - Arguments to filter Posts to count.
     * @example
     * // Count the number of Posts
     * const count = await prisma.post.count({
     *   where: {
     *     // ... the filter for the Posts we want to count
     *   }
     * })
    **/
    count<T extends PostCountArgs>(
      args?: Subset<T, PostCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PostCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Post.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PostAggregateArgs>(args: Subset<T, PostAggregateArgs>): Prisma.PrismaPromise<GetPostAggregateType<T>>

    /**
     * Group by Post.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostGroupByArgs} args - Group by arguments.
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
      T extends PostGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PostGroupByArgs['orderBy'] }
        : { orderBy?: PostGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PostGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPostGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Post model
   */
  readonly fields: PostFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Post.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PostClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    author<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    replies<T extends Post$repliesArgs<ExtArgs> = {}>(args?: Subset<T, Post$repliesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReplyPayload<ExtArgs>, T, 'findMany'> | Null>;

    LikeTable<T extends Post$LikeTableArgs<ExtArgs> = {}>(args?: Subset<T, Post$LikeTableArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LikeTablePayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Post model
   */ 
  interface PostFieldRefs {
    readonly id: FieldRef<"Post", 'String'>
    readonly title: FieldRef<"Post", 'String'>
    readonly content: FieldRef<"Post", 'String'>
    readonly media: FieldRef<"Post", 'String'>
    readonly status: FieldRef<"Post", 'PostStatus'>
    readonly authorId: FieldRef<"Post", 'String'>
    readonly originPost: FieldRef<"Post", 'String'>
  }
    

  // Custom InputTypes

  /**
   * Post findUnique
   */
  export type PostFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Post to fetch.
     */
    where: PostWhereUniqueInput
  }


  /**
   * Post findUniqueOrThrow
   */
  export type PostFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Post to fetch.
     */
    where: PostWhereUniqueInput
  }


  /**
   * Post findFirst
   */
  export type PostFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Post to fetch.
     */
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Posts.
     */
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Posts.
     */
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[]
  }


  /**
   * Post findFirstOrThrow
   */
  export type PostFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Post to fetch.
     */
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Posts.
     */
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Posts.
     */
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[]
  }


  /**
   * Post findMany
   */
  export type PostFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Posts to fetch.
     */
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Posts.
     */
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[]
  }


  /**
   * Post create
   */
  export type PostCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * The data needed to create a Post.
     */
    data: XOR<PostCreateInput, PostUncheckedCreateInput>
  }


  /**
   * Post createMany
   */
  export type PostCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Posts.
     */
    data: PostCreateManyInput | PostCreateManyInput[]
  }


  /**
   * Post update
   */
  export type PostUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * The data needed to update a Post.
     */
    data: XOR<PostUpdateInput, PostUncheckedUpdateInput>
    /**
     * Choose, which Post to update.
     */
    where: PostWhereUniqueInput
  }


  /**
   * Post updateMany
   */
  export type PostUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Posts.
     */
    data: XOR<PostUpdateManyMutationInput, PostUncheckedUpdateManyInput>
    /**
     * Filter which Posts to update
     */
    where?: PostWhereInput
  }


  /**
   * Post upsert
   */
  export type PostUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * The filter to search for the Post to update in case it exists.
     */
    where: PostWhereUniqueInput
    /**
     * In case the Post found by the `where` argument doesn't exist, create a new Post with this data.
     */
    create: XOR<PostCreateInput, PostUncheckedCreateInput>
    /**
     * In case the Post was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PostUpdateInput, PostUncheckedUpdateInput>
  }


  /**
   * Post delete
   */
  export type PostDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter which Post to delete.
     */
    where: PostWhereUniqueInput
  }


  /**
   * Post deleteMany
   */
  export type PostDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Posts to delete
     */
    where?: PostWhereInput
  }


  /**
   * Post findRaw
   */
  export type PostFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * Post aggregateRaw
   */
  export type PostAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * Post.replies
   */
  export type Post$repliesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reply
     */
    select?: ReplySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ReplyInclude<ExtArgs> | null
    where?: ReplyWhereInput
    orderBy?: ReplyOrderByWithRelationInput | ReplyOrderByWithRelationInput[]
    cursor?: ReplyWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReplyScalarFieldEnum | ReplyScalarFieldEnum[]
  }


  /**
   * Post.LikeTable
   */
  export type Post$LikeTableArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LikeTable
     */
    select?: LikeTableSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LikeTableInclude<ExtArgs> | null
    where?: LikeTableWhereInput
    orderBy?: LikeTableOrderByWithRelationInput | LikeTableOrderByWithRelationInput[]
    cursor?: LikeTableWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LikeTableScalarFieldEnum | LikeTableScalarFieldEnum[]
  }


  /**
   * Post without action
   */
  export type PostDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PostInclude<ExtArgs> | null
  }



  /**
   * Model LikeTable
   */

  export type AggregateLikeTable = {
    _count: LikeTableCountAggregateOutputType | null
    _min: LikeTableMinAggregateOutputType | null
    _max: LikeTableMaxAggregateOutputType | null
  }

  export type LikeTableMinAggregateOutputType = {
    id: string | null
    postId: string | null
    userId: string | null
  }

  export type LikeTableMaxAggregateOutputType = {
    id: string | null
    postId: string | null
    userId: string | null
  }

  export type LikeTableCountAggregateOutputType = {
    id: number
    postId: number
    userId: number
    _all: number
  }


  export type LikeTableMinAggregateInputType = {
    id?: true
    postId?: true
    userId?: true
  }

  export type LikeTableMaxAggregateInputType = {
    id?: true
    postId?: true
    userId?: true
  }

  export type LikeTableCountAggregateInputType = {
    id?: true
    postId?: true
    userId?: true
    _all?: true
  }

  export type LikeTableAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LikeTable to aggregate.
     */
    where?: LikeTableWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LikeTables to fetch.
     */
    orderBy?: LikeTableOrderByWithRelationInput | LikeTableOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LikeTableWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LikeTables from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LikeTables.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned LikeTables
    **/
    _count?: true | LikeTableCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LikeTableMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LikeTableMaxAggregateInputType
  }

  export type GetLikeTableAggregateType<T extends LikeTableAggregateArgs> = {
        [P in keyof T & keyof AggregateLikeTable]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLikeTable[P]>
      : GetScalarType<T[P], AggregateLikeTable[P]>
  }




  export type LikeTableGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LikeTableWhereInput
    orderBy?: LikeTableOrderByWithAggregationInput | LikeTableOrderByWithAggregationInput[]
    by: LikeTableScalarFieldEnum[] | LikeTableScalarFieldEnum
    having?: LikeTableScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LikeTableCountAggregateInputType | true
    _min?: LikeTableMinAggregateInputType
    _max?: LikeTableMaxAggregateInputType
  }

  export type LikeTableGroupByOutputType = {
    id: string
    postId: string
    userId: string
    _count: LikeTableCountAggregateOutputType | null
    _min: LikeTableMinAggregateOutputType | null
    _max: LikeTableMaxAggregateOutputType | null
  }

  type GetLikeTableGroupByPayload<T extends LikeTableGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LikeTableGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LikeTableGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LikeTableGroupByOutputType[P]>
            : GetScalarType<T[P], LikeTableGroupByOutputType[P]>
        }
      >
    >


  export type LikeTableSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    postId?: boolean
    userId?: boolean
    post?: boolean | PostDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["likeTable"]>

  export type LikeTableSelectScalar = {
    id?: boolean
    postId?: boolean
    userId?: boolean
  }

  export type LikeTableInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    post?: boolean | PostDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }


  export type $LikeTablePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "LikeTable"
    objects: {
      post: Prisma.$PostPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      postId: string
      userId: string
    }, ExtArgs["result"]["likeTable"]>
    composites: {}
  }


  type LikeTableGetPayload<S extends boolean | null | undefined | LikeTableDefaultArgs> = $Result.GetResult<Prisma.$LikeTablePayload, S>

  type LikeTableCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<LikeTableFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: LikeTableCountAggregateInputType | true
    }

  export interface LikeTableDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['LikeTable'], meta: { name: 'LikeTable' } }
    /**
     * Find zero or one LikeTable that matches the filter.
     * @param {LikeTableFindUniqueArgs} args - Arguments to find a LikeTable
     * @example
     * // Get one LikeTable
     * const likeTable = await prisma.likeTable.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends LikeTableFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, LikeTableFindUniqueArgs<ExtArgs>>
    ): Prisma__LikeTableClient<$Result.GetResult<Prisma.$LikeTablePayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one LikeTable that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {LikeTableFindUniqueOrThrowArgs} args - Arguments to find a LikeTable
     * @example
     * // Get one LikeTable
     * const likeTable = await prisma.likeTable.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends LikeTableFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, LikeTableFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__LikeTableClient<$Result.GetResult<Prisma.$LikeTablePayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first LikeTable that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LikeTableFindFirstArgs} args - Arguments to find a LikeTable
     * @example
     * // Get one LikeTable
     * const likeTable = await prisma.likeTable.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends LikeTableFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, LikeTableFindFirstArgs<ExtArgs>>
    ): Prisma__LikeTableClient<$Result.GetResult<Prisma.$LikeTablePayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first LikeTable that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LikeTableFindFirstOrThrowArgs} args - Arguments to find a LikeTable
     * @example
     * // Get one LikeTable
     * const likeTable = await prisma.likeTable.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends LikeTableFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, LikeTableFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__LikeTableClient<$Result.GetResult<Prisma.$LikeTablePayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more LikeTables that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LikeTableFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all LikeTables
     * const likeTables = await prisma.likeTable.findMany()
     * 
     * // Get first 10 LikeTables
     * const likeTables = await prisma.likeTable.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const likeTableWithIdOnly = await prisma.likeTable.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends LikeTableFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, LikeTableFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LikeTablePayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a LikeTable.
     * @param {LikeTableCreateArgs} args - Arguments to create a LikeTable.
     * @example
     * // Create one LikeTable
     * const LikeTable = await prisma.likeTable.create({
     *   data: {
     *     // ... data to create a LikeTable
     *   }
     * })
     * 
    **/
    create<T extends LikeTableCreateArgs<ExtArgs>>(
      args: SelectSubset<T, LikeTableCreateArgs<ExtArgs>>
    ): Prisma__LikeTableClient<$Result.GetResult<Prisma.$LikeTablePayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many LikeTables.
     *     @param {LikeTableCreateManyArgs} args - Arguments to create many LikeTables.
     *     @example
     *     // Create many LikeTables
     *     const likeTable = await prisma.likeTable.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends LikeTableCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, LikeTableCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a LikeTable.
     * @param {LikeTableDeleteArgs} args - Arguments to delete one LikeTable.
     * @example
     * // Delete one LikeTable
     * const LikeTable = await prisma.likeTable.delete({
     *   where: {
     *     // ... filter to delete one LikeTable
     *   }
     * })
     * 
    **/
    delete<T extends LikeTableDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, LikeTableDeleteArgs<ExtArgs>>
    ): Prisma__LikeTableClient<$Result.GetResult<Prisma.$LikeTablePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one LikeTable.
     * @param {LikeTableUpdateArgs} args - Arguments to update one LikeTable.
     * @example
     * // Update one LikeTable
     * const likeTable = await prisma.likeTable.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends LikeTableUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, LikeTableUpdateArgs<ExtArgs>>
    ): Prisma__LikeTableClient<$Result.GetResult<Prisma.$LikeTablePayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more LikeTables.
     * @param {LikeTableDeleteManyArgs} args - Arguments to filter LikeTables to delete.
     * @example
     * // Delete a few LikeTables
     * const { count } = await prisma.likeTable.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends LikeTableDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, LikeTableDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LikeTables.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LikeTableUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many LikeTables
     * const likeTable = await prisma.likeTable.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends LikeTableUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, LikeTableUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one LikeTable.
     * @param {LikeTableUpsertArgs} args - Arguments to update or create a LikeTable.
     * @example
     * // Update or create a LikeTable
     * const likeTable = await prisma.likeTable.upsert({
     *   create: {
     *     // ... data to create a LikeTable
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the LikeTable we want to update
     *   }
     * })
    **/
    upsert<T extends LikeTableUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, LikeTableUpsertArgs<ExtArgs>>
    ): Prisma__LikeTableClient<$Result.GetResult<Prisma.$LikeTablePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Find zero or more LikeTables that matches the filter.
     * @param {LikeTableFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const likeTable = await prisma.likeTable.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
    **/
    findRaw(
      args?: LikeTableFindRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a LikeTable.
     * @param {LikeTableAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const likeTable = await prisma.likeTable.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
    **/
    aggregateRaw(
      args?: LikeTableAggregateRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Count the number of LikeTables.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LikeTableCountArgs} args - Arguments to filter LikeTables to count.
     * @example
     * // Count the number of LikeTables
     * const count = await prisma.likeTable.count({
     *   where: {
     *     // ... the filter for the LikeTables we want to count
     *   }
     * })
    **/
    count<T extends LikeTableCountArgs>(
      args?: Subset<T, LikeTableCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LikeTableCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a LikeTable.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LikeTableAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LikeTableAggregateArgs>(args: Subset<T, LikeTableAggregateArgs>): Prisma.PrismaPromise<GetLikeTableAggregateType<T>>

    /**
     * Group by LikeTable.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LikeTableGroupByArgs} args - Group by arguments.
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
      T extends LikeTableGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LikeTableGroupByArgs['orderBy'] }
        : { orderBy?: LikeTableGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, LikeTableGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLikeTableGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the LikeTable model
   */
  readonly fields: LikeTableFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for LikeTable.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LikeTableClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    post<T extends PostDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PostDefaultArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the LikeTable model
   */ 
  interface LikeTableFieldRefs {
    readonly id: FieldRef<"LikeTable", 'String'>
    readonly postId: FieldRef<"LikeTable", 'String'>
    readonly userId: FieldRef<"LikeTable", 'String'>
  }
    

  // Custom InputTypes

  /**
   * LikeTable findUnique
   */
  export type LikeTableFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LikeTable
     */
    select?: LikeTableSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LikeTableInclude<ExtArgs> | null
    /**
     * Filter, which LikeTable to fetch.
     */
    where: LikeTableWhereUniqueInput
  }


  /**
   * LikeTable findUniqueOrThrow
   */
  export type LikeTableFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LikeTable
     */
    select?: LikeTableSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LikeTableInclude<ExtArgs> | null
    /**
     * Filter, which LikeTable to fetch.
     */
    where: LikeTableWhereUniqueInput
  }


  /**
   * LikeTable findFirst
   */
  export type LikeTableFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LikeTable
     */
    select?: LikeTableSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LikeTableInclude<ExtArgs> | null
    /**
     * Filter, which LikeTable to fetch.
     */
    where?: LikeTableWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LikeTables to fetch.
     */
    orderBy?: LikeTableOrderByWithRelationInput | LikeTableOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LikeTables.
     */
    cursor?: LikeTableWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LikeTables from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LikeTables.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LikeTables.
     */
    distinct?: LikeTableScalarFieldEnum | LikeTableScalarFieldEnum[]
  }


  /**
   * LikeTable findFirstOrThrow
   */
  export type LikeTableFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LikeTable
     */
    select?: LikeTableSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LikeTableInclude<ExtArgs> | null
    /**
     * Filter, which LikeTable to fetch.
     */
    where?: LikeTableWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LikeTables to fetch.
     */
    orderBy?: LikeTableOrderByWithRelationInput | LikeTableOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LikeTables.
     */
    cursor?: LikeTableWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LikeTables from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LikeTables.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LikeTables.
     */
    distinct?: LikeTableScalarFieldEnum | LikeTableScalarFieldEnum[]
  }


  /**
   * LikeTable findMany
   */
  export type LikeTableFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LikeTable
     */
    select?: LikeTableSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LikeTableInclude<ExtArgs> | null
    /**
     * Filter, which LikeTables to fetch.
     */
    where?: LikeTableWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LikeTables to fetch.
     */
    orderBy?: LikeTableOrderByWithRelationInput | LikeTableOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing LikeTables.
     */
    cursor?: LikeTableWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LikeTables from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LikeTables.
     */
    skip?: number
    distinct?: LikeTableScalarFieldEnum | LikeTableScalarFieldEnum[]
  }


  /**
   * LikeTable create
   */
  export type LikeTableCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LikeTable
     */
    select?: LikeTableSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LikeTableInclude<ExtArgs> | null
    /**
     * The data needed to create a LikeTable.
     */
    data: XOR<LikeTableCreateInput, LikeTableUncheckedCreateInput>
  }


  /**
   * LikeTable createMany
   */
  export type LikeTableCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many LikeTables.
     */
    data: LikeTableCreateManyInput | LikeTableCreateManyInput[]
  }


  /**
   * LikeTable update
   */
  export type LikeTableUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LikeTable
     */
    select?: LikeTableSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LikeTableInclude<ExtArgs> | null
    /**
     * The data needed to update a LikeTable.
     */
    data: XOR<LikeTableUpdateInput, LikeTableUncheckedUpdateInput>
    /**
     * Choose, which LikeTable to update.
     */
    where: LikeTableWhereUniqueInput
  }


  /**
   * LikeTable updateMany
   */
  export type LikeTableUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update LikeTables.
     */
    data: XOR<LikeTableUpdateManyMutationInput, LikeTableUncheckedUpdateManyInput>
    /**
     * Filter which LikeTables to update
     */
    where?: LikeTableWhereInput
  }


  /**
   * LikeTable upsert
   */
  export type LikeTableUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LikeTable
     */
    select?: LikeTableSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LikeTableInclude<ExtArgs> | null
    /**
     * The filter to search for the LikeTable to update in case it exists.
     */
    where: LikeTableWhereUniqueInput
    /**
     * In case the LikeTable found by the `where` argument doesn't exist, create a new LikeTable with this data.
     */
    create: XOR<LikeTableCreateInput, LikeTableUncheckedCreateInput>
    /**
     * In case the LikeTable was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LikeTableUpdateInput, LikeTableUncheckedUpdateInput>
  }


  /**
   * LikeTable delete
   */
  export type LikeTableDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LikeTable
     */
    select?: LikeTableSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LikeTableInclude<ExtArgs> | null
    /**
     * Filter which LikeTable to delete.
     */
    where: LikeTableWhereUniqueInput
  }


  /**
   * LikeTable deleteMany
   */
  export type LikeTableDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LikeTables to delete
     */
    where?: LikeTableWhereInput
  }


  /**
   * LikeTable findRaw
   */
  export type LikeTableFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * LikeTable aggregateRaw
   */
  export type LikeTableAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * LikeTable without action
   */
  export type LikeTableDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LikeTable
     */
    select?: LikeTableSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LikeTableInclude<ExtArgs> | null
  }



  /**
   * Model Reply
   */

  export type AggregateReply = {
    _count: ReplyCountAggregateOutputType | null
    _min: ReplyMinAggregateOutputType | null
    _max: ReplyMaxAggregateOutputType | null
  }

  export type ReplyMinAggregateOutputType = {
    id: string | null
    text: string | null
    fromId: string | null
    toId: string | null
    postId: string | null
  }

  export type ReplyMaxAggregateOutputType = {
    id: string | null
    text: string | null
    fromId: string | null
    toId: string | null
    postId: string | null
  }

  export type ReplyCountAggregateOutputType = {
    id: number
    text: number
    fromId: number
    toId: number
    postId: number
    _all: number
  }


  export type ReplyMinAggregateInputType = {
    id?: true
    text?: true
    fromId?: true
    toId?: true
    postId?: true
  }

  export type ReplyMaxAggregateInputType = {
    id?: true
    text?: true
    fromId?: true
    toId?: true
    postId?: true
  }

  export type ReplyCountAggregateInputType = {
    id?: true
    text?: true
    fromId?: true
    toId?: true
    postId?: true
    _all?: true
  }

  export type ReplyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Reply to aggregate.
     */
    where?: ReplyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Replies to fetch.
     */
    orderBy?: ReplyOrderByWithRelationInput | ReplyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ReplyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Replies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Replies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Replies
    **/
    _count?: true | ReplyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReplyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReplyMaxAggregateInputType
  }

  export type GetReplyAggregateType<T extends ReplyAggregateArgs> = {
        [P in keyof T & keyof AggregateReply]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReply[P]>
      : GetScalarType<T[P], AggregateReply[P]>
  }




  export type ReplyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReplyWhereInput
    orderBy?: ReplyOrderByWithAggregationInput | ReplyOrderByWithAggregationInput[]
    by: ReplyScalarFieldEnum[] | ReplyScalarFieldEnum
    having?: ReplyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReplyCountAggregateInputType | true
    _min?: ReplyMinAggregateInputType
    _max?: ReplyMaxAggregateInputType
  }

  export type ReplyGroupByOutputType = {
    id: string
    text: string
    fromId: string
    toId: string
    postId: string
    _count: ReplyCountAggregateOutputType | null
    _min: ReplyMinAggregateOutputType | null
    _max: ReplyMaxAggregateOutputType | null
  }

  type GetReplyGroupByPayload<T extends ReplyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReplyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReplyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReplyGroupByOutputType[P]>
            : GetScalarType<T[P], ReplyGroupByOutputType[P]>
        }
      >
    >


  export type ReplySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    text?: boolean
    fromId?: boolean
    toId?: boolean
    postId?: boolean
    from?: boolean | UserDefaultArgs<ExtArgs>
    to?: boolean | UserDefaultArgs<ExtArgs>
    post?: boolean | PostDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reply"]>

  export type ReplySelectScalar = {
    id?: boolean
    text?: boolean
    fromId?: boolean
    toId?: boolean
    postId?: boolean
  }

  export type ReplyInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    from?: boolean | UserDefaultArgs<ExtArgs>
    to?: boolean | UserDefaultArgs<ExtArgs>
    post?: boolean | PostDefaultArgs<ExtArgs>
  }


  export type $ReplyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Reply"
    objects: {
      from: Prisma.$UserPayload<ExtArgs>
      to: Prisma.$UserPayload<ExtArgs>
      post: Prisma.$PostPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      text: string
      fromId: string
      toId: string
      postId: string
    }, ExtArgs["result"]["reply"]>
    composites: {}
  }


  type ReplyGetPayload<S extends boolean | null | undefined | ReplyDefaultArgs> = $Result.GetResult<Prisma.$ReplyPayload, S>

  type ReplyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ReplyFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ReplyCountAggregateInputType | true
    }

  export interface ReplyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Reply'], meta: { name: 'Reply' } }
    /**
     * Find zero or one Reply that matches the filter.
     * @param {ReplyFindUniqueArgs} args - Arguments to find a Reply
     * @example
     * // Get one Reply
     * const reply = await prisma.reply.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ReplyFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, ReplyFindUniqueArgs<ExtArgs>>
    ): Prisma__ReplyClient<$Result.GetResult<Prisma.$ReplyPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Reply that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ReplyFindUniqueOrThrowArgs} args - Arguments to find a Reply
     * @example
     * // Get one Reply
     * const reply = await prisma.reply.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ReplyFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ReplyFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__ReplyClient<$Result.GetResult<Prisma.$ReplyPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Reply that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReplyFindFirstArgs} args - Arguments to find a Reply
     * @example
     * // Get one Reply
     * const reply = await prisma.reply.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ReplyFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, ReplyFindFirstArgs<ExtArgs>>
    ): Prisma__ReplyClient<$Result.GetResult<Prisma.$ReplyPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Reply that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReplyFindFirstOrThrowArgs} args - Arguments to find a Reply
     * @example
     * // Get one Reply
     * const reply = await prisma.reply.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ReplyFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ReplyFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__ReplyClient<$Result.GetResult<Prisma.$ReplyPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Replies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReplyFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Replies
     * const replies = await prisma.reply.findMany()
     * 
     * // Get first 10 Replies
     * const replies = await prisma.reply.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const replyWithIdOnly = await prisma.reply.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ReplyFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ReplyFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReplyPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Reply.
     * @param {ReplyCreateArgs} args - Arguments to create a Reply.
     * @example
     * // Create one Reply
     * const Reply = await prisma.reply.create({
     *   data: {
     *     // ... data to create a Reply
     *   }
     * })
     * 
    **/
    create<T extends ReplyCreateArgs<ExtArgs>>(
      args: SelectSubset<T, ReplyCreateArgs<ExtArgs>>
    ): Prisma__ReplyClient<$Result.GetResult<Prisma.$ReplyPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Replies.
     *     @param {ReplyCreateManyArgs} args - Arguments to create many Replies.
     *     @example
     *     // Create many Replies
     *     const reply = await prisma.reply.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ReplyCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ReplyCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Reply.
     * @param {ReplyDeleteArgs} args - Arguments to delete one Reply.
     * @example
     * // Delete one Reply
     * const Reply = await prisma.reply.delete({
     *   where: {
     *     // ... filter to delete one Reply
     *   }
     * })
     * 
    **/
    delete<T extends ReplyDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, ReplyDeleteArgs<ExtArgs>>
    ): Prisma__ReplyClient<$Result.GetResult<Prisma.$ReplyPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Reply.
     * @param {ReplyUpdateArgs} args - Arguments to update one Reply.
     * @example
     * // Update one Reply
     * const reply = await prisma.reply.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ReplyUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, ReplyUpdateArgs<ExtArgs>>
    ): Prisma__ReplyClient<$Result.GetResult<Prisma.$ReplyPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Replies.
     * @param {ReplyDeleteManyArgs} args - Arguments to filter Replies to delete.
     * @example
     * // Delete a few Replies
     * const { count } = await prisma.reply.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ReplyDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ReplyDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Replies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReplyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Replies
     * const reply = await prisma.reply.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ReplyUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, ReplyUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Reply.
     * @param {ReplyUpsertArgs} args - Arguments to update or create a Reply.
     * @example
     * // Update or create a Reply
     * const reply = await prisma.reply.upsert({
     *   create: {
     *     // ... data to create a Reply
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Reply we want to update
     *   }
     * })
    **/
    upsert<T extends ReplyUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, ReplyUpsertArgs<ExtArgs>>
    ): Prisma__ReplyClient<$Result.GetResult<Prisma.$ReplyPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Find zero or more Replies that matches the filter.
     * @param {ReplyFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const reply = await prisma.reply.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
    **/
    findRaw(
      args?: ReplyFindRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Reply.
     * @param {ReplyAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const reply = await prisma.reply.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
    **/
    aggregateRaw(
      args?: ReplyAggregateRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Count the number of Replies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReplyCountArgs} args - Arguments to filter Replies to count.
     * @example
     * // Count the number of Replies
     * const count = await prisma.reply.count({
     *   where: {
     *     // ... the filter for the Replies we want to count
     *   }
     * })
    **/
    count<T extends ReplyCountArgs>(
      args?: Subset<T, ReplyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReplyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Reply.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReplyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ReplyAggregateArgs>(args: Subset<T, ReplyAggregateArgs>): Prisma.PrismaPromise<GetReplyAggregateType<T>>

    /**
     * Group by Reply.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReplyGroupByArgs} args - Group by arguments.
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
      T extends ReplyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ReplyGroupByArgs['orderBy'] }
        : { orderBy?: ReplyGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ReplyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReplyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Reply model
   */
  readonly fields: ReplyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Reply.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ReplyClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    from<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    to<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    post<T extends PostDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PostDefaultArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Reply model
   */ 
  interface ReplyFieldRefs {
    readonly id: FieldRef<"Reply", 'String'>
    readonly text: FieldRef<"Reply", 'String'>
    readonly fromId: FieldRef<"Reply", 'String'>
    readonly toId: FieldRef<"Reply", 'String'>
    readonly postId: FieldRef<"Reply", 'String'>
  }
    

  // Custom InputTypes

  /**
   * Reply findUnique
   */
  export type ReplyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reply
     */
    select?: ReplySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ReplyInclude<ExtArgs> | null
    /**
     * Filter, which Reply to fetch.
     */
    where: ReplyWhereUniqueInput
  }


  /**
   * Reply findUniqueOrThrow
   */
  export type ReplyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reply
     */
    select?: ReplySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ReplyInclude<ExtArgs> | null
    /**
     * Filter, which Reply to fetch.
     */
    where: ReplyWhereUniqueInput
  }


  /**
   * Reply findFirst
   */
  export type ReplyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reply
     */
    select?: ReplySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ReplyInclude<ExtArgs> | null
    /**
     * Filter, which Reply to fetch.
     */
    where?: ReplyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Replies to fetch.
     */
    orderBy?: ReplyOrderByWithRelationInput | ReplyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Replies.
     */
    cursor?: ReplyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Replies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Replies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Replies.
     */
    distinct?: ReplyScalarFieldEnum | ReplyScalarFieldEnum[]
  }


  /**
   * Reply findFirstOrThrow
   */
  export type ReplyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reply
     */
    select?: ReplySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ReplyInclude<ExtArgs> | null
    /**
     * Filter, which Reply to fetch.
     */
    where?: ReplyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Replies to fetch.
     */
    orderBy?: ReplyOrderByWithRelationInput | ReplyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Replies.
     */
    cursor?: ReplyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Replies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Replies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Replies.
     */
    distinct?: ReplyScalarFieldEnum | ReplyScalarFieldEnum[]
  }


  /**
   * Reply findMany
   */
  export type ReplyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reply
     */
    select?: ReplySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ReplyInclude<ExtArgs> | null
    /**
     * Filter, which Replies to fetch.
     */
    where?: ReplyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Replies to fetch.
     */
    orderBy?: ReplyOrderByWithRelationInput | ReplyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Replies.
     */
    cursor?: ReplyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Replies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Replies.
     */
    skip?: number
    distinct?: ReplyScalarFieldEnum | ReplyScalarFieldEnum[]
  }


  /**
   * Reply create
   */
  export type ReplyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reply
     */
    select?: ReplySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ReplyInclude<ExtArgs> | null
    /**
     * The data needed to create a Reply.
     */
    data: XOR<ReplyCreateInput, ReplyUncheckedCreateInput>
  }


  /**
   * Reply createMany
   */
  export type ReplyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Replies.
     */
    data: ReplyCreateManyInput | ReplyCreateManyInput[]
  }


  /**
   * Reply update
   */
  export type ReplyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reply
     */
    select?: ReplySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ReplyInclude<ExtArgs> | null
    /**
     * The data needed to update a Reply.
     */
    data: XOR<ReplyUpdateInput, ReplyUncheckedUpdateInput>
    /**
     * Choose, which Reply to update.
     */
    where: ReplyWhereUniqueInput
  }


  /**
   * Reply updateMany
   */
  export type ReplyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Replies.
     */
    data: XOR<ReplyUpdateManyMutationInput, ReplyUncheckedUpdateManyInput>
    /**
     * Filter which Replies to update
     */
    where?: ReplyWhereInput
  }


  /**
   * Reply upsert
   */
  export type ReplyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reply
     */
    select?: ReplySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ReplyInclude<ExtArgs> | null
    /**
     * The filter to search for the Reply to update in case it exists.
     */
    where: ReplyWhereUniqueInput
    /**
     * In case the Reply found by the `where` argument doesn't exist, create a new Reply with this data.
     */
    create: XOR<ReplyCreateInput, ReplyUncheckedCreateInput>
    /**
     * In case the Reply was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ReplyUpdateInput, ReplyUncheckedUpdateInput>
  }


  /**
   * Reply delete
   */
  export type ReplyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reply
     */
    select?: ReplySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ReplyInclude<ExtArgs> | null
    /**
     * Filter which Reply to delete.
     */
    where: ReplyWhereUniqueInput
  }


  /**
   * Reply deleteMany
   */
  export type ReplyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Replies to delete
     */
    where?: ReplyWhereInput
  }


  /**
   * Reply findRaw
   */
  export type ReplyFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * Reply aggregateRaw
   */
  export type ReplyAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * Reply without action
   */
  export type ReplyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reply
     */
    select?: ReplySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ReplyInclude<ExtArgs> | null
  }



  /**
   * Model NotificationCenter
   */

  export type AggregateNotificationCenter = {
    _count: NotificationCenterCountAggregateOutputType | null
    _min: NotificationCenterMinAggregateOutputType | null
    _max: NotificationCenterMaxAggregateOutputType | null
  }

  export type NotificationCenterMinAggregateOutputType = {
    userId: string | null
  }

  export type NotificationCenterMaxAggregateOutputType = {
    userId: string | null
  }

  export type NotificationCenterCountAggregateOutputType = {
    userId: number
    _all: number
  }


  export type NotificationCenterMinAggregateInputType = {
    userId?: true
  }

  export type NotificationCenterMaxAggregateInputType = {
    userId?: true
  }

  export type NotificationCenterCountAggregateInputType = {
    userId?: true
    _all?: true
  }

  export type NotificationCenterAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which NotificationCenter to aggregate.
     */
    where?: NotificationCenterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NotificationCenters to fetch.
     */
    orderBy?: NotificationCenterOrderByWithRelationInput | NotificationCenterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NotificationCenterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NotificationCenters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NotificationCenters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned NotificationCenters
    **/
    _count?: true | NotificationCenterCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NotificationCenterMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NotificationCenterMaxAggregateInputType
  }

  export type GetNotificationCenterAggregateType<T extends NotificationCenterAggregateArgs> = {
        [P in keyof T & keyof AggregateNotificationCenter]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNotificationCenter[P]>
      : GetScalarType<T[P], AggregateNotificationCenter[P]>
  }




  export type NotificationCenterGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotificationCenterWhereInput
    orderBy?: NotificationCenterOrderByWithAggregationInput | NotificationCenterOrderByWithAggregationInput[]
    by: NotificationCenterScalarFieldEnum[] | NotificationCenterScalarFieldEnum
    having?: NotificationCenterScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NotificationCenterCountAggregateInputType | true
    _min?: NotificationCenterMinAggregateInputType
    _max?: NotificationCenterMaxAggregateInputType
  }

  export type NotificationCenterGroupByOutputType = {
    userId: string
    _count: NotificationCenterCountAggregateOutputType | null
    _min: NotificationCenterMinAggregateOutputType | null
    _max: NotificationCenterMaxAggregateOutputType | null
  }

  type GetNotificationCenterGroupByPayload<T extends NotificationCenterGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NotificationCenterGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NotificationCenterGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NotificationCenterGroupByOutputType[P]>
            : GetScalarType<T[P], NotificationCenterGroupByOutputType[P]>
        }
      >
    >


  export type NotificationCenterSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    notifications?: boolean | NotificationDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["notificationCenter"]>

  export type NotificationCenterSelectScalar = {
    userId?: boolean
  }

  export type NotificationCenterInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }


  export type $NotificationCenterPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "NotificationCenter"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      userId: string
    }, ExtArgs["result"]["notificationCenter"]>
    composites: {
      notifications: Prisma.$NotificationPayload[]
    }
  }


  type NotificationCenterGetPayload<S extends boolean | null | undefined | NotificationCenterDefaultArgs> = $Result.GetResult<Prisma.$NotificationCenterPayload, S>

  type NotificationCenterCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<NotificationCenterFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: NotificationCenterCountAggregateInputType | true
    }

  export interface NotificationCenterDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['NotificationCenter'], meta: { name: 'NotificationCenter' } }
    /**
     * Find zero or one NotificationCenter that matches the filter.
     * @param {NotificationCenterFindUniqueArgs} args - Arguments to find a NotificationCenter
     * @example
     * // Get one NotificationCenter
     * const notificationCenter = await prisma.notificationCenter.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends NotificationCenterFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, NotificationCenterFindUniqueArgs<ExtArgs>>
    ): Prisma__NotificationCenterClient<$Result.GetResult<Prisma.$NotificationCenterPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one NotificationCenter that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {NotificationCenterFindUniqueOrThrowArgs} args - Arguments to find a NotificationCenter
     * @example
     * // Get one NotificationCenter
     * const notificationCenter = await prisma.notificationCenter.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends NotificationCenterFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, NotificationCenterFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__NotificationCenterClient<$Result.GetResult<Prisma.$NotificationCenterPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first NotificationCenter that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationCenterFindFirstArgs} args - Arguments to find a NotificationCenter
     * @example
     * // Get one NotificationCenter
     * const notificationCenter = await prisma.notificationCenter.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends NotificationCenterFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, NotificationCenterFindFirstArgs<ExtArgs>>
    ): Prisma__NotificationCenterClient<$Result.GetResult<Prisma.$NotificationCenterPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first NotificationCenter that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationCenterFindFirstOrThrowArgs} args - Arguments to find a NotificationCenter
     * @example
     * // Get one NotificationCenter
     * const notificationCenter = await prisma.notificationCenter.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends NotificationCenterFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, NotificationCenterFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__NotificationCenterClient<$Result.GetResult<Prisma.$NotificationCenterPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more NotificationCenters that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationCenterFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all NotificationCenters
     * const notificationCenters = await prisma.notificationCenter.findMany()
     * 
     * // Get first 10 NotificationCenters
     * const notificationCenters = await prisma.notificationCenter.findMany({ take: 10 })
     * 
     * // Only select the `userId`
     * const notificationCenterWithUserIdOnly = await prisma.notificationCenter.findMany({ select: { userId: true } })
     * 
    **/
    findMany<T extends NotificationCenterFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, NotificationCenterFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationCenterPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a NotificationCenter.
     * @param {NotificationCenterCreateArgs} args - Arguments to create a NotificationCenter.
     * @example
     * // Create one NotificationCenter
     * const NotificationCenter = await prisma.notificationCenter.create({
     *   data: {
     *     // ... data to create a NotificationCenter
     *   }
     * })
     * 
    **/
    create<T extends NotificationCenterCreateArgs<ExtArgs>>(
      args: SelectSubset<T, NotificationCenterCreateArgs<ExtArgs>>
    ): Prisma__NotificationCenterClient<$Result.GetResult<Prisma.$NotificationCenterPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many NotificationCenters.
     *     @param {NotificationCenterCreateManyArgs} args - Arguments to create many NotificationCenters.
     *     @example
     *     // Create many NotificationCenters
     *     const notificationCenter = await prisma.notificationCenter.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends NotificationCenterCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, NotificationCenterCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a NotificationCenter.
     * @param {NotificationCenterDeleteArgs} args - Arguments to delete one NotificationCenter.
     * @example
     * // Delete one NotificationCenter
     * const NotificationCenter = await prisma.notificationCenter.delete({
     *   where: {
     *     // ... filter to delete one NotificationCenter
     *   }
     * })
     * 
    **/
    delete<T extends NotificationCenterDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, NotificationCenterDeleteArgs<ExtArgs>>
    ): Prisma__NotificationCenterClient<$Result.GetResult<Prisma.$NotificationCenterPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one NotificationCenter.
     * @param {NotificationCenterUpdateArgs} args - Arguments to update one NotificationCenter.
     * @example
     * // Update one NotificationCenter
     * const notificationCenter = await prisma.notificationCenter.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends NotificationCenterUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, NotificationCenterUpdateArgs<ExtArgs>>
    ): Prisma__NotificationCenterClient<$Result.GetResult<Prisma.$NotificationCenterPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more NotificationCenters.
     * @param {NotificationCenterDeleteManyArgs} args - Arguments to filter NotificationCenters to delete.
     * @example
     * // Delete a few NotificationCenters
     * const { count } = await prisma.notificationCenter.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends NotificationCenterDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, NotificationCenterDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more NotificationCenters.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationCenterUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many NotificationCenters
     * const notificationCenter = await prisma.notificationCenter.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends NotificationCenterUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, NotificationCenterUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one NotificationCenter.
     * @param {NotificationCenterUpsertArgs} args - Arguments to update or create a NotificationCenter.
     * @example
     * // Update or create a NotificationCenter
     * const notificationCenter = await prisma.notificationCenter.upsert({
     *   create: {
     *     // ... data to create a NotificationCenter
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the NotificationCenter we want to update
     *   }
     * })
    **/
    upsert<T extends NotificationCenterUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, NotificationCenterUpsertArgs<ExtArgs>>
    ): Prisma__NotificationCenterClient<$Result.GetResult<Prisma.$NotificationCenterPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Find zero or more NotificationCenters that matches the filter.
     * @param {NotificationCenterFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const notificationCenter = await prisma.notificationCenter.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
    **/
    findRaw(
      args?: NotificationCenterFindRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a NotificationCenter.
     * @param {NotificationCenterAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const notificationCenter = await prisma.notificationCenter.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
    **/
    aggregateRaw(
      args?: NotificationCenterAggregateRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Count the number of NotificationCenters.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationCenterCountArgs} args - Arguments to filter NotificationCenters to count.
     * @example
     * // Count the number of NotificationCenters
     * const count = await prisma.notificationCenter.count({
     *   where: {
     *     // ... the filter for the NotificationCenters we want to count
     *   }
     * })
    **/
    count<T extends NotificationCenterCountArgs>(
      args?: Subset<T, NotificationCenterCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NotificationCenterCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a NotificationCenter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationCenterAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends NotificationCenterAggregateArgs>(args: Subset<T, NotificationCenterAggregateArgs>): Prisma.PrismaPromise<GetNotificationCenterAggregateType<T>>

    /**
     * Group by NotificationCenter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationCenterGroupByArgs} args - Group by arguments.
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
      T extends NotificationCenterGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NotificationCenterGroupByArgs['orderBy'] }
        : { orderBy?: NotificationCenterGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, NotificationCenterGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNotificationCenterGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the NotificationCenter model
   */
  readonly fields: NotificationCenterFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for NotificationCenter.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NotificationCenterClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the NotificationCenter model
   */ 
  interface NotificationCenterFieldRefs {
    readonly userId: FieldRef<"NotificationCenter", 'String'>
  }
    

  // Custom InputTypes

  /**
   * NotificationCenter findUnique
   */
  export type NotificationCenterFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationCenter
     */
    select?: NotificationCenterSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: NotificationCenterInclude<ExtArgs> | null
    /**
     * Filter, which NotificationCenter to fetch.
     */
    where: NotificationCenterWhereUniqueInput
  }


  /**
   * NotificationCenter findUniqueOrThrow
   */
  export type NotificationCenterFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationCenter
     */
    select?: NotificationCenterSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: NotificationCenterInclude<ExtArgs> | null
    /**
     * Filter, which NotificationCenter to fetch.
     */
    where: NotificationCenterWhereUniqueInput
  }


  /**
   * NotificationCenter findFirst
   */
  export type NotificationCenterFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationCenter
     */
    select?: NotificationCenterSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: NotificationCenterInclude<ExtArgs> | null
    /**
     * Filter, which NotificationCenter to fetch.
     */
    where?: NotificationCenterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NotificationCenters to fetch.
     */
    orderBy?: NotificationCenterOrderByWithRelationInput | NotificationCenterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for NotificationCenters.
     */
    cursor?: NotificationCenterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NotificationCenters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NotificationCenters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of NotificationCenters.
     */
    distinct?: NotificationCenterScalarFieldEnum | NotificationCenterScalarFieldEnum[]
  }


  /**
   * NotificationCenter findFirstOrThrow
   */
  export type NotificationCenterFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationCenter
     */
    select?: NotificationCenterSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: NotificationCenterInclude<ExtArgs> | null
    /**
     * Filter, which NotificationCenter to fetch.
     */
    where?: NotificationCenterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NotificationCenters to fetch.
     */
    orderBy?: NotificationCenterOrderByWithRelationInput | NotificationCenterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for NotificationCenters.
     */
    cursor?: NotificationCenterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NotificationCenters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NotificationCenters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of NotificationCenters.
     */
    distinct?: NotificationCenterScalarFieldEnum | NotificationCenterScalarFieldEnum[]
  }


  /**
   * NotificationCenter findMany
   */
  export type NotificationCenterFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationCenter
     */
    select?: NotificationCenterSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: NotificationCenterInclude<ExtArgs> | null
    /**
     * Filter, which NotificationCenters to fetch.
     */
    where?: NotificationCenterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NotificationCenters to fetch.
     */
    orderBy?: NotificationCenterOrderByWithRelationInput | NotificationCenterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing NotificationCenters.
     */
    cursor?: NotificationCenterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NotificationCenters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NotificationCenters.
     */
    skip?: number
    distinct?: NotificationCenterScalarFieldEnum | NotificationCenterScalarFieldEnum[]
  }


  /**
   * NotificationCenter create
   */
  export type NotificationCenterCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationCenter
     */
    select?: NotificationCenterSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: NotificationCenterInclude<ExtArgs> | null
    /**
     * The data needed to create a NotificationCenter.
     */
    data: XOR<NotificationCenterCreateInput, NotificationCenterUncheckedCreateInput>
  }


  /**
   * NotificationCenter createMany
   */
  export type NotificationCenterCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many NotificationCenters.
     */
    data: NotificationCenterCreateManyInput | NotificationCenterCreateManyInput[]
  }


  /**
   * NotificationCenter update
   */
  export type NotificationCenterUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationCenter
     */
    select?: NotificationCenterSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: NotificationCenterInclude<ExtArgs> | null
    /**
     * The data needed to update a NotificationCenter.
     */
    data: XOR<NotificationCenterUpdateInput, NotificationCenterUncheckedUpdateInput>
    /**
     * Choose, which NotificationCenter to update.
     */
    where: NotificationCenterWhereUniqueInput
  }


  /**
   * NotificationCenter updateMany
   */
  export type NotificationCenterUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update NotificationCenters.
     */
    data: XOR<NotificationCenterUpdateManyMutationInput, NotificationCenterUncheckedUpdateManyInput>
    /**
     * Filter which NotificationCenters to update
     */
    where?: NotificationCenterWhereInput
  }


  /**
   * NotificationCenter upsert
   */
  export type NotificationCenterUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationCenter
     */
    select?: NotificationCenterSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: NotificationCenterInclude<ExtArgs> | null
    /**
     * The filter to search for the NotificationCenter to update in case it exists.
     */
    where: NotificationCenterWhereUniqueInput
    /**
     * In case the NotificationCenter found by the `where` argument doesn't exist, create a new NotificationCenter with this data.
     */
    create: XOR<NotificationCenterCreateInput, NotificationCenterUncheckedCreateInput>
    /**
     * In case the NotificationCenter was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NotificationCenterUpdateInput, NotificationCenterUncheckedUpdateInput>
  }


  /**
   * NotificationCenter delete
   */
  export type NotificationCenterDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationCenter
     */
    select?: NotificationCenterSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: NotificationCenterInclude<ExtArgs> | null
    /**
     * Filter which NotificationCenter to delete.
     */
    where: NotificationCenterWhereUniqueInput
  }


  /**
   * NotificationCenter deleteMany
   */
  export type NotificationCenterDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which NotificationCenters to delete
     */
    where?: NotificationCenterWhereInput
  }


  /**
   * NotificationCenter findRaw
   */
  export type NotificationCenterFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * NotificationCenter aggregateRaw
   */
  export type NotificationCenterAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * NotificationCenter without action
   */
  export type NotificationCenterDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationCenter
     */
    select?: NotificationCenterSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: NotificationCenterInclude<ExtArgs> | null
  }



  /**
   * Enums
   */

  export const UserScalarFieldEnum: {
    id: 'id'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const PostScalarFieldEnum: {
    id: 'id',
    title: 'title',
    content: 'content',
    media: 'media',
    status: 'status',
    authorId: 'authorId',
    originPost: 'originPost'
  };

  export type PostScalarFieldEnum = (typeof PostScalarFieldEnum)[keyof typeof PostScalarFieldEnum]


  export const LikeTableScalarFieldEnum: {
    id: 'id',
    postId: 'postId',
    userId: 'userId'
  };

  export type LikeTableScalarFieldEnum = (typeof LikeTableScalarFieldEnum)[keyof typeof LikeTableScalarFieldEnum]


  export const ReplyScalarFieldEnum: {
    id: 'id',
    text: 'text',
    fromId: 'fromId',
    toId: 'toId',
    postId: 'postId'
  };

  export type ReplyScalarFieldEnum = (typeof ReplyScalarFieldEnum)[keyof typeof ReplyScalarFieldEnum]


  export const NotificationCenterScalarFieldEnum: {
    userId: 'userId'
  };

  export type NotificationCenterScalarFieldEnum = (typeof NotificationCenterScalarFieldEnum)[keyof typeof NotificationCenterScalarFieldEnum]


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
   * Reference to a field of type 'PostStatus'
   */
  export type EnumPostStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PostStatus'>
    


  /**
   * Reference to a field of type 'PostStatus[]'
   */
  export type ListEnumPostStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PostStatus[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'NotificationType'
   */
  export type EnumNotificationTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'NotificationType'>
    


  /**
   * Reference to a field of type 'NotificationType[]'
   */
  export type ListEnumNotificationTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'NotificationType[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    posts?: PostListRelationFilter
    repliesFrom?: ReplyListRelationFilter
    repliesTo?: ReplyListRelationFilter
    LikeTable?: LikeTableListRelationFilter
    notificationCenter?: XOR<NotificationCenterNullableRelationFilter, NotificationCenterWhereInput> | null
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    posts?: PostOrderByRelationAggregateInput
    repliesFrom?: ReplyOrderByRelationAggregateInput
    repliesTo?: ReplyOrderByRelationAggregateInput
    LikeTable?: LikeTableOrderByRelationAggregateInput
    notificationCenter?: NotificationCenterOrderByWithRelationInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    posts?: PostListRelationFilter
    repliesFrom?: ReplyListRelationFilter
    repliesTo?: ReplyListRelationFilter
    LikeTable?: LikeTableListRelationFilter
    notificationCenter?: XOR<NotificationCenterNullableRelationFilter, NotificationCenterWhereInput> | null
  }, "id">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
  }

  export type PostWhereInput = {
    AND?: PostWhereInput | PostWhereInput[]
    OR?: PostWhereInput[]
    NOT?: PostWhereInput | PostWhereInput[]
    id?: StringFilter<"Post"> | string
    title?: StringFilter<"Post"> | string
    content?: StringFilter<"Post"> | string
    media?: StringNullableFilter<"Post"> | string | null
    status?: EnumPostStatusFilter<"Post"> | $Enums.PostStatus
    authorId?: StringFilter<"Post"> | string
    originPost?: StringNullableFilter<"Post"> | string | null
    author?: XOR<UserRelationFilter, UserWhereInput>
    replies?: ReplyListRelationFilter
    LikeTable?: LikeTableListRelationFilter
  }

  export type PostOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    media?: SortOrder
    status?: SortOrder
    authorId?: SortOrder
    originPost?: SortOrder
    author?: UserOrderByWithRelationInput
    replies?: ReplyOrderByRelationAggregateInput
    LikeTable?: LikeTableOrderByRelationAggregateInput
  }

  export type PostWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PostWhereInput | PostWhereInput[]
    OR?: PostWhereInput[]
    NOT?: PostWhereInput | PostWhereInput[]
    title?: StringFilter<"Post"> | string
    content?: StringFilter<"Post"> | string
    media?: StringNullableFilter<"Post"> | string | null
    status?: EnumPostStatusFilter<"Post"> | $Enums.PostStatus
    authorId?: StringFilter<"Post"> | string
    originPost?: StringNullableFilter<"Post"> | string | null
    author?: XOR<UserRelationFilter, UserWhereInput>
    replies?: ReplyListRelationFilter
    LikeTable?: LikeTableListRelationFilter
  }, "id">

  export type PostOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    media?: SortOrder
    status?: SortOrder
    authorId?: SortOrder
    originPost?: SortOrder
    _count?: PostCountOrderByAggregateInput
    _max?: PostMaxOrderByAggregateInput
    _min?: PostMinOrderByAggregateInput
  }

  export type PostScalarWhereWithAggregatesInput = {
    AND?: PostScalarWhereWithAggregatesInput | PostScalarWhereWithAggregatesInput[]
    OR?: PostScalarWhereWithAggregatesInput[]
    NOT?: PostScalarWhereWithAggregatesInput | PostScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Post"> | string
    title?: StringWithAggregatesFilter<"Post"> | string
    content?: StringWithAggregatesFilter<"Post"> | string
    media?: StringNullableWithAggregatesFilter<"Post"> | string | null
    status?: EnumPostStatusWithAggregatesFilter<"Post"> | $Enums.PostStatus
    authorId?: StringWithAggregatesFilter<"Post"> | string
    originPost?: StringNullableWithAggregatesFilter<"Post"> | string | null
  }

  export type LikeTableWhereInput = {
    AND?: LikeTableWhereInput | LikeTableWhereInput[]
    OR?: LikeTableWhereInput[]
    NOT?: LikeTableWhereInput | LikeTableWhereInput[]
    id?: StringFilter<"LikeTable"> | string
    postId?: StringFilter<"LikeTable"> | string
    userId?: StringFilter<"LikeTable"> | string
    post?: XOR<PostRelationFilter, PostWhereInput>
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type LikeTableOrderByWithRelationInput = {
    id?: SortOrder
    postId?: SortOrder
    userId?: SortOrder
    post?: PostOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type LikeTableWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    postId_userId?: LikeTablePostIdUserIdCompoundUniqueInput
    AND?: LikeTableWhereInput | LikeTableWhereInput[]
    OR?: LikeTableWhereInput[]
    NOT?: LikeTableWhereInput | LikeTableWhereInput[]
    postId?: StringFilter<"LikeTable"> | string
    userId?: StringFilter<"LikeTable"> | string
    post?: XOR<PostRelationFilter, PostWhereInput>
    user?: XOR<UserRelationFilter, UserWhereInput>
  }, "id" | "postId_userId">

  export type LikeTableOrderByWithAggregationInput = {
    id?: SortOrder
    postId?: SortOrder
    userId?: SortOrder
    _count?: LikeTableCountOrderByAggregateInput
    _max?: LikeTableMaxOrderByAggregateInput
    _min?: LikeTableMinOrderByAggregateInput
  }

  export type LikeTableScalarWhereWithAggregatesInput = {
    AND?: LikeTableScalarWhereWithAggregatesInput | LikeTableScalarWhereWithAggregatesInput[]
    OR?: LikeTableScalarWhereWithAggregatesInput[]
    NOT?: LikeTableScalarWhereWithAggregatesInput | LikeTableScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"LikeTable"> | string
    postId?: StringWithAggregatesFilter<"LikeTable"> | string
    userId?: StringWithAggregatesFilter<"LikeTable"> | string
  }

  export type ReplyWhereInput = {
    AND?: ReplyWhereInput | ReplyWhereInput[]
    OR?: ReplyWhereInput[]
    NOT?: ReplyWhereInput | ReplyWhereInput[]
    id?: StringFilter<"Reply"> | string
    text?: StringFilter<"Reply"> | string
    fromId?: StringFilter<"Reply"> | string
    toId?: StringFilter<"Reply"> | string
    postId?: StringFilter<"Reply"> | string
    from?: XOR<UserRelationFilter, UserWhereInput>
    to?: XOR<UserRelationFilter, UserWhereInput>
    post?: XOR<PostRelationFilter, PostWhereInput>
  }

  export type ReplyOrderByWithRelationInput = {
    id?: SortOrder
    text?: SortOrder
    fromId?: SortOrder
    toId?: SortOrder
    postId?: SortOrder
    from?: UserOrderByWithRelationInput
    to?: UserOrderByWithRelationInput
    post?: PostOrderByWithRelationInput
  }

  export type ReplyWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ReplyWhereInput | ReplyWhereInput[]
    OR?: ReplyWhereInput[]
    NOT?: ReplyWhereInput | ReplyWhereInput[]
    text?: StringFilter<"Reply"> | string
    fromId?: StringFilter<"Reply"> | string
    toId?: StringFilter<"Reply"> | string
    postId?: StringFilter<"Reply"> | string
    from?: XOR<UserRelationFilter, UserWhereInput>
    to?: XOR<UserRelationFilter, UserWhereInput>
    post?: XOR<PostRelationFilter, PostWhereInput>
  }, "id">

  export type ReplyOrderByWithAggregationInput = {
    id?: SortOrder
    text?: SortOrder
    fromId?: SortOrder
    toId?: SortOrder
    postId?: SortOrder
    _count?: ReplyCountOrderByAggregateInput
    _max?: ReplyMaxOrderByAggregateInput
    _min?: ReplyMinOrderByAggregateInput
  }

  export type ReplyScalarWhereWithAggregatesInput = {
    AND?: ReplyScalarWhereWithAggregatesInput | ReplyScalarWhereWithAggregatesInput[]
    OR?: ReplyScalarWhereWithAggregatesInput[]
    NOT?: ReplyScalarWhereWithAggregatesInput | ReplyScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Reply"> | string
    text?: StringWithAggregatesFilter<"Reply"> | string
    fromId?: StringWithAggregatesFilter<"Reply"> | string
    toId?: StringWithAggregatesFilter<"Reply"> | string
    postId?: StringWithAggregatesFilter<"Reply"> | string
  }

  export type NotificationCenterWhereInput = {
    AND?: NotificationCenterWhereInput | NotificationCenterWhereInput[]
    OR?: NotificationCenterWhereInput[]
    NOT?: NotificationCenterWhereInput | NotificationCenterWhereInput[]
    userId?: StringFilter<"NotificationCenter"> | string
    notifications?: NotificationCompositeListFilter | NotificationObjectEqualityInput[]
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type NotificationCenterOrderByWithRelationInput = {
    userId?: SortOrder
    notifications?: NotificationOrderByCompositeAggregateInput
    user?: UserOrderByWithRelationInput
  }

  export type NotificationCenterWhereUniqueInput = Prisma.AtLeast<{
    userId?: string
    AND?: NotificationCenterWhereInput | NotificationCenterWhereInput[]
    OR?: NotificationCenterWhereInput[]
    NOT?: NotificationCenterWhereInput | NotificationCenterWhereInput[]
    notifications?: NotificationCompositeListFilter | NotificationObjectEqualityInput[]
    user?: XOR<UserRelationFilter, UserWhereInput>
  }, "userId">

  export type NotificationCenterOrderByWithAggregationInput = {
    userId?: SortOrder
    _count?: NotificationCenterCountOrderByAggregateInput
    _max?: NotificationCenterMaxOrderByAggregateInput
    _min?: NotificationCenterMinOrderByAggregateInput
  }

  export type NotificationCenterScalarWhereWithAggregatesInput = {
    AND?: NotificationCenterScalarWhereWithAggregatesInput | NotificationCenterScalarWhereWithAggregatesInput[]
    OR?: NotificationCenterScalarWhereWithAggregatesInput[]
    NOT?: NotificationCenterScalarWhereWithAggregatesInput | NotificationCenterScalarWhereWithAggregatesInput[]
    userId?: StringWithAggregatesFilter<"NotificationCenter"> | string
  }

  export type UserCreateInput = {
    id: string
    posts?: PostCreateNestedManyWithoutAuthorInput
    repliesFrom?: ReplyCreateNestedManyWithoutFromInput
    repliesTo?: ReplyCreateNestedManyWithoutToInput
    LikeTable?: LikeTableCreateNestedManyWithoutUserInput
    notificationCenter?: NotificationCenterCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id: string
    posts?: PostUncheckedCreateNestedManyWithoutAuthorInput
    repliesFrom?: ReplyUncheckedCreateNestedManyWithoutFromInput
    repliesTo?: ReplyUncheckedCreateNestedManyWithoutToInput
    LikeTable?: LikeTableUncheckedCreateNestedManyWithoutUserInput
    notificationCenter?: NotificationCenterUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserUpdateInput = {
    posts?: PostUpdateManyWithoutAuthorNestedInput
    repliesFrom?: ReplyUpdateManyWithoutFromNestedInput
    repliesTo?: ReplyUpdateManyWithoutToNestedInput
    LikeTable?: LikeTableUpdateManyWithoutUserNestedInput
    notificationCenter?: NotificationCenterUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    posts?: PostUncheckedUpdateManyWithoutAuthorNestedInput
    repliesFrom?: ReplyUncheckedUpdateManyWithoutFromNestedInput
    repliesTo?: ReplyUncheckedUpdateManyWithoutToNestedInput
    LikeTable?: LikeTableUncheckedUpdateManyWithoutUserNestedInput
    notificationCenter?: NotificationCenterUncheckedUpdateOneWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id: string
  }

  export type UserUpdateManyMutationInput = {

  }

  export type UserUncheckedUpdateManyInput = {

  }

  export type PostCreateInput = {
    id?: string
    title: string
    content: string
    media?: string | null
    status?: $Enums.PostStatus
    originPost?: string | null
    author: UserCreateNestedOneWithoutPostsInput
    replies?: ReplyCreateNestedManyWithoutPostInput
    LikeTable?: LikeTableCreateNestedManyWithoutPostInput
  }

  export type PostUncheckedCreateInput = {
    id?: string
    title: string
    content: string
    media?: string | null
    status?: $Enums.PostStatus
    authorId: string
    originPost?: string | null
    replies?: ReplyUncheckedCreateNestedManyWithoutPostInput
    LikeTable?: LikeTableUncheckedCreateNestedManyWithoutPostInput
  }

  export type PostUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    media?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumPostStatusFieldUpdateOperationsInput | $Enums.PostStatus
    originPost?: NullableStringFieldUpdateOperationsInput | string | null
    author?: UserUpdateOneRequiredWithoutPostsNestedInput
    replies?: ReplyUpdateManyWithoutPostNestedInput
    LikeTable?: LikeTableUpdateManyWithoutPostNestedInput
  }

  export type PostUncheckedUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    media?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumPostStatusFieldUpdateOperationsInput | $Enums.PostStatus
    authorId?: StringFieldUpdateOperationsInput | string
    originPost?: NullableStringFieldUpdateOperationsInput | string | null
    replies?: ReplyUncheckedUpdateManyWithoutPostNestedInput
    LikeTable?: LikeTableUncheckedUpdateManyWithoutPostNestedInput
  }

  export type PostCreateManyInput = {
    id?: string
    title: string
    content: string
    media?: string | null
    status?: $Enums.PostStatus
    authorId: string
    originPost?: string | null
  }

  export type PostUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    media?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumPostStatusFieldUpdateOperationsInput | $Enums.PostStatus
    originPost?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PostUncheckedUpdateManyInput = {
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    media?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumPostStatusFieldUpdateOperationsInput | $Enums.PostStatus
    authorId?: StringFieldUpdateOperationsInput | string
    originPost?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type LikeTableCreateInput = {
    id?: string
    post: PostCreateNestedOneWithoutLikeTableInput
    user: UserCreateNestedOneWithoutLikeTableInput
  }

  export type LikeTableUncheckedCreateInput = {
    id?: string
    postId: string
    userId: string
  }

  export type LikeTableUpdateInput = {
    post?: PostUpdateOneRequiredWithoutLikeTableNestedInput
    user?: UserUpdateOneRequiredWithoutLikeTableNestedInput
  }

  export type LikeTableUncheckedUpdateInput = {
    postId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type LikeTableCreateManyInput = {
    id?: string
    postId: string
    userId: string
  }

  export type LikeTableUpdateManyMutationInput = {

  }

  export type LikeTableUncheckedUpdateManyInput = {
    postId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type ReplyCreateInput = {
    id?: string
    text: string
    from: UserCreateNestedOneWithoutRepliesFromInput
    to: UserCreateNestedOneWithoutRepliesToInput
    post: PostCreateNestedOneWithoutRepliesInput
  }

  export type ReplyUncheckedCreateInput = {
    id?: string
    text: string
    fromId: string
    toId: string
    postId: string
  }

  export type ReplyUpdateInput = {
    text?: StringFieldUpdateOperationsInput | string
    from?: UserUpdateOneRequiredWithoutRepliesFromNestedInput
    to?: UserUpdateOneRequiredWithoutRepliesToNestedInput
    post?: PostUpdateOneRequiredWithoutRepliesNestedInput
  }

  export type ReplyUncheckedUpdateInput = {
    text?: StringFieldUpdateOperationsInput | string
    fromId?: StringFieldUpdateOperationsInput | string
    toId?: StringFieldUpdateOperationsInput | string
    postId?: StringFieldUpdateOperationsInput | string
  }

  export type ReplyCreateManyInput = {
    id?: string
    text: string
    fromId: string
    toId: string
    postId: string
  }

  export type ReplyUpdateManyMutationInput = {
    text?: StringFieldUpdateOperationsInput | string
  }

  export type ReplyUncheckedUpdateManyInput = {
    text?: StringFieldUpdateOperationsInput | string
    fromId?: StringFieldUpdateOperationsInput | string
    toId?: StringFieldUpdateOperationsInput | string
    postId?: StringFieldUpdateOperationsInput | string
  }

  export type NotificationCenterCreateInput = {
    notifications?: XOR<NotificationListCreateEnvelopeInput, NotificationCreateInput> | NotificationCreateInput[]
    user: UserCreateNestedOneWithoutNotificationCenterInput
  }

  export type NotificationCenterUncheckedCreateInput = {
    userId: string
    notifications?: XOR<NotificationListCreateEnvelopeInput, NotificationCreateInput> | NotificationCreateInput[]
  }

  export type NotificationCenterUpdateInput = {
    notifications?: XOR<NotificationListUpdateEnvelopeInput, NotificationCreateInput> | NotificationCreateInput[]
    user?: UserUpdateOneRequiredWithoutNotificationCenterNestedInput
  }

  export type NotificationCenterUncheckedUpdateInput = {
    notifications?: XOR<NotificationListUpdateEnvelopeInput, NotificationCreateInput> | NotificationCreateInput[]
  }

  export type NotificationCenterCreateManyInput = {
    userId: string
    notifications?: XOR<NotificationListCreateEnvelopeInput, NotificationCreateInput> | NotificationCreateInput[]
  }

  export type NotificationCenterUpdateManyMutationInput = {
    notifications?: XOR<NotificationListUpdateEnvelopeInput, NotificationCreateInput> | NotificationCreateInput[]
  }

  export type NotificationCenterUncheckedUpdateManyInput = {
    notifications?: XOR<NotificationListUpdateEnvelopeInput, NotificationCreateInput> | NotificationCreateInput[]
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

  export type PostListRelationFilter = {
    every?: PostWhereInput
    some?: PostWhereInput
    none?: PostWhereInput
  }

  export type ReplyListRelationFilter = {
    every?: ReplyWhereInput
    some?: ReplyWhereInput
    none?: ReplyWhereInput
  }

  export type LikeTableListRelationFilter = {
    every?: LikeTableWhereInput
    some?: LikeTableWhereInput
    none?: LikeTableWhereInput
  }

  export type NotificationCenterNullableRelationFilter = {
    is?: NotificationCenterWhereInput | null
    isNot?: NotificationCenterWhereInput | null
  }

  export type PostOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ReplyOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type LikeTableOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
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
    isSet?: boolean
  }

  export type EnumPostStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PostStatus | EnumPostStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PostStatus[] | ListEnumPostStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PostStatus[] | ListEnumPostStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPostStatusFilter<$PrismaModel> | $Enums.PostStatus
  }

  export type UserRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type PostCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    media?: SortOrder
    status?: SortOrder
    authorId?: SortOrder
    originPost?: SortOrder
  }

  export type PostMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    media?: SortOrder
    status?: SortOrder
    authorId?: SortOrder
    originPost?: SortOrder
  }

  export type PostMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    media?: SortOrder
    status?: SortOrder
    authorId?: SortOrder
    originPost?: SortOrder
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
    isSet?: boolean
  }

  export type EnumPostStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PostStatus | EnumPostStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PostStatus[] | ListEnumPostStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PostStatus[] | ListEnumPostStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPostStatusWithAggregatesFilter<$PrismaModel> | $Enums.PostStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPostStatusFilter<$PrismaModel>
    _max?: NestedEnumPostStatusFilter<$PrismaModel>
  }

  export type PostRelationFilter = {
    is?: PostWhereInput
    isNot?: PostWhereInput
  }

  export type LikeTablePostIdUserIdCompoundUniqueInput = {
    postId: string
    userId: string
  }

  export type LikeTableCountOrderByAggregateInput = {
    id?: SortOrder
    postId?: SortOrder
    userId?: SortOrder
  }

  export type LikeTableMaxOrderByAggregateInput = {
    id?: SortOrder
    postId?: SortOrder
    userId?: SortOrder
  }

  export type LikeTableMinOrderByAggregateInput = {
    id?: SortOrder
    postId?: SortOrder
    userId?: SortOrder
  }

  export type ReplyCountOrderByAggregateInput = {
    id?: SortOrder
    text?: SortOrder
    fromId?: SortOrder
    toId?: SortOrder
    postId?: SortOrder
  }

  export type ReplyMaxOrderByAggregateInput = {
    id?: SortOrder
    text?: SortOrder
    fromId?: SortOrder
    toId?: SortOrder
    postId?: SortOrder
  }

  export type ReplyMinOrderByAggregateInput = {
    id?: SortOrder
    text?: SortOrder
    fromId?: SortOrder
    toId?: SortOrder
    postId?: SortOrder
  }

  export type NotificationCompositeListFilter = {
    equals?: NotificationObjectEqualityInput[]
    every?: NotificationWhereInput
    some?: NotificationWhereInput
    none?: NotificationWhereInput
    isEmpty?: boolean
    isSet?: boolean
  }

  export type NotificationObjectEqualityInput = {
    type: $Enums.NotificationType
    content: string
    sender: string
    createTime: Date | string
    read: boolean
  }

  export type NotificationOrderByCompositeAggregateInput = {
    _count?: SortOrder
  }

  export type NotificationCenterCountOrderByAggregateInput = {
    userId?: SortOrder
  }

  export type NotificationCenterMaxOrderByAggregateInput = {
    userId?: SortOrder
  }

  export type NotificationCenterMinOrderByAggregateInput = {
    userId?: SortOrder
  }

  export type PostCreateNestedManyWithoutAuthorInput = {
    create?: XOR<PostCreateWithoutAuthorInput, PostUncheckedCreateWithoutAuthorInput> | PostCreateWithoutAuthorInput[] | PostUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: PostCreateOrConnectWithoutAuthorInput | PostCreateOrConnectWithoutAuthorInput[]
    createMany?: PostCreateManyAuthorInputEnvelope
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
  }

  export type ReplyCreateNestedManyWithoutFromInput = {
    create?: XOR<ReplyCreateWithoutFromInput, ReplyUncheckedCreateWithoutFromInput> | ReplyCreateWithoutFromInput[] | ReplyUncheckedCreateWithoutFromInput[]
    connectOrCreate?: ReplyCreateOrConnectWithoutFromInput | ReplyCreateOrConnectWithoutFromInput[]
    createMany?: ReplyCreateManyFromInputEnvelope
    connect?: ReplyWhereUniqueInput | ReplyWhereUniqueInput[]
  }

  export type ReplyCreateNestedManyWithoutToInput = {
    create?: XOR<ReplyCreateWithoutToInput, ReplyUncheckedCreateWithoutToInput> | ReplyCreateWithoutToInput[] | ReplyUncheckedCreateWithoutToInput[]
    connectOrCreate?: ReplyCreateOrConnectWithoutToInput | ReplyCreateOrConnectWithoutToInput[]
    createMany?: ReplyCreateManyToInputEnvelope
    connect?: ReplyWhereUniqueInput | ReplyWhereUniqueInput[]
  }

  export type LikeTableCreateNestedManyWithoutUserInput = {
    create?: XOR<LikeTableCreateWithoutUserInput, LikeTableUncheckedCreateWithoutUserInput> | LikeTableCreateWithoutUserInput[] | LikeTableUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LikeTableCreateOrConnectWithoutUserInput | LikeTableCreateOrConnectWithoutUserInput[]
    createMany?: LikeTableCreateManyUserInputEnvelope
    connect?: LikeTableWhereUniqueInput | LikeTableWhereUniqueInput[]
  }

  export type NotificationCenterCreateNestedOneWithoutUserInput = {
    create?: XOR<NotificationCenterCreateWithoutUserInput, NotificationCenterUncheckedCreateWithoutUserInput>
    connectOrCreate?: NotificationCenterCreateOrConnectWithoutUserInput
    connect?: NotificationCenterWhereUniqueInput
  }

  export type PostUncheckedCreateNestedManyWithoutAuthorInput = {
    create?: XOR<PostCreateWithoutAuthorInput, PostUncheckedCreateWithoutAuthorInput> | PostCreateWithoutAuthorInput[] | PostUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: PostCreateOrConnectWithoutAuthorInput | PostCreateOrConnectWithoutAuthorInput[]
    createMany?: PostCreateManyAuthorInputEnvelope
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
  }

  export type ReplyUncheckedCreateNestedManyWithoutFromInput = {
    create?: XOR<ReplyCreateWithoutFromInput, ReplyUncheckedCreateWithoutFromInput> | ReplyCreateWithoutFromInput[] | ReplyUncheckedCreateWithoutFromInput[]
    connectOrCreate?: ReplyCreateOrConnectWithoutFromInput | ReplyCreateOrConnectWithoutFromInput[]
    createMany?: ReplyCreateManyFromInputEnvelope
    connect?: ReplyWhereUniqueInput | ReplyWhereUniqueInput[]
  }

  export type ReplyUncheckedCreateNestedManyWithoutToInput = {
    create?: XOR<ReplyCreateWithoutToInput, ReplyUncheckedCreateWithoutToInput> | ReplyCreateWithoutToInput[] | ReplyUncheckedCreateWithoutToInput[]
    connectOrCreate?: ReplyCreateOrConnectWithoutToInput | ReplyCreateOrConnectWithoutToInput[]
    createMany?: ReplyCreateManyToInputEnvelope
    connect?: ReplyWhereUniqueInput | ReplyWhereUniqueInput[]
  }

  export type LikeTableUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<LikeTableCreateWithoutUserInput, LikeTableUncheckedCreateWithoutUserInput> | LikeTableCreateWithoutUserInput[] | LikeTableUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LikeTableCreateOrConnectWithoutUserInput | LikeTableCreateOrConnectWithoutUserInput[]
    createMany?: LikeTableCreateManyUserInputEnvelope
    connect?: LikeTableWhereUniqueInput | LikeTableWhereUniqueInput[]
  }

  export type NotificationCenterUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<NotificationCenterCreateWithoutUserInput, NotificationCenterUncheckedCreateWithoutUserInput>
    connectOrCreate?: NotificationCenterCreateOrConnectWithoutUserInput
    connect?: NotificationCenterWhereUniqueInput
  }

  export type PostUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<PostCreateWithoutAuthorInput, PostUncheckedCreateWithoutAuthorInput> | PostCreateWithoutAuthorInput[] | PostUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: PostCreateOrConnectWithoutAuthorInput | PostCreateOrConnectWithoutAuthorInput[]
    upsert?: PostUpsertWithWhereUniqueWithoutAuthorInput | PostUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: PostCreateManyAuthorInputEnvelope
    set?: PostWhereUniqueInput | PostWhereUniqueInput[]
    disconnect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    delete?: PostWhereUniqueInput | PostWhereUniqueInput[]
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    update?: PostUpdateWithWhereUniqueWithoutAuthorInput | PostUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: PostUpdateManyWithWhereWithoutAuthorInput | PostUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: PostScalarWhereInput | PostScalarWhereInput[]
  }

  export type ReplyUpdateManyWithoutFromNestedInput = {
    create?: XOR<ReplyCreateWithoutFromInput, ReplyUncheckedCreateWithoutFromInput> | ReplyCreateWithoutFromInput[] | ReplyUncheckedCreateWithoutFromInput[]
    connectOrCreate?: ReplyCreateOrConnectWithoutFromInput | ReplyCreateOrConnectWithoutFromInput[]
    upsert?: ReplyUpsertWithWhereUniqueWithoutFromInput | ReplyUpsertWithWhereUniqueWithoutFromInput[]
    createMany?: ReplyCreateManyFromInputEnvelope
    set?: ReplyWhereUniqueInput | ReplyWhereUniqueInput[]
    disconnect?: ReplyWhereUniqueInput | ReplyWhereUniqueInput[]
    delete?: ReplyWhereUniqueInput | ReplyWhereUniqueInput[]
    connect?: ReplyWhereUniqueInput | ReplyWhereUniqueInput[]
    update?: ReplyUpdateWithWhereUniqueWithoutFromInput | ReplyUpdateWithWhereUniqueWithoutFromInput[]
    updateMany?: ReplyUpdateManyWithWhereWithoutFromInput | ReplyUpdateManyWithWhereWithoutFromInput[]
    deleteMany?: ReplyScalarWhereInput | ReplyScalarWhereInput[]
  }

  export type ReplyUpdateManyWithoutToNestedInput = {
    create?: XOR<ReplyCreateWithoutToInput, ReplyUncheckedCreateWithoutToInput> | ReplyCreateWithoutToInput[] | ReplyUncheckedCreateWithoutToInput[]
    connectOrCreate?: ReplyCreateOrConnectWithoutToInput | ReplyCreateOrConnectWithoutToInput[]
    upsert?: ReplyUpsertWithWhereUniqueWithoutToInput | ReplyUpsertWithWhereUniqueWithoutToInput[]
    createMany?: ReplyCreateManyToInputEnvelope
    set?: ReplyWhereUniqueInput | ReplyWhereUniqueInput[]
    disconnect?: ReplyWhereUniqueInput | ReplyWhereUniqueInput[]
    delete?: ReplyWhereUniqueInput | ReplyWhereUniqueInput[]
    connect?: ReplyWhereUniqueInput | ReplyWhereUniqueInput[]
    update?: ReplyUpdateWithWhereUniqueWithoutToInput | ReplyUpdateWithWhereUniqueWithoutToInput[]
    updateMany?: ReplyUpdateManyWithWhereWithoutToInput | ReplyUpdateManyWithWhereWithoutToInput[]
    deleteMany?: ReplyScalarWhereInput | ReplyScalarWhereInput[]
  }

  export type LikeTableUpdateManyWithoutUserNestedInput = {
    create?: XOR<LikeTableCreateWithoutUserInput, LikeTableUncheckedCreateWithoutUserInput> | LikeTableCreateWithoutUserInput[] | LikeTableUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LikeTableCreateOrConnectWithoutUserInput | LikeTableCreateOrConnectWithoutUserInput[]
    upsert?: LikeTableUpsertWithWhereUniqueWithoutUserInput | LikeTableUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: LikeTableCreateManyUserInputEnvelope
    set?: LikeTableWhereUniqueInput | LikeTableWhereUniqueInput[]
    disconnect?: LikeTableWhereUniqueInput | LikeTableWhereUniqueInput[]
    delete?: LikeTableWhereUniqueInput | LikeTableWhereUniqueInput[]
    connect?: LikeTableWhereUniqueInput | LikeTableWhereUniqueInput[]
    update?: LikeTableUpdateWithWhereUniqueWithoutUserInput | LikeTableUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: LikeTableUpdateManyWithWhereWithoutUserInput | LikeTableUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: LikeTableScalarWhereInput | LikeTableScalarWhereInput[]
  }

  export type NotificationCenterUpdateOneWithoutUserNestedInput = {
    create?: XOR<NotificationCenterCreateWithoutUserInput, NotificationCenterUncheckedCreateWithoutUserInput>
    connectOrCreate?: NotificationCenterCreateOrConnectWithoutUserInput
    upsert?: NotificationCenterUpsertWithoutUserInput
    disconnect?: NotificationCenterWhereInput | boolean
    delete?: NotificationCenterWhereInput | boolean
    connect?: NotificationCenterWhereUniqueInput
    update?: XOR<XOR<NotificationCenterUpdateToOneWithWhereWithoutUserInput, NotificationCenterUpdateWithoutUserInput>, NotificationCenterUncheckedUpdateWithoutUserInput>
  }

  export type PostUncheckedUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<PostCreateWithoutAuthorInput, PostUncheckedCreateWithoutAuthorInput> | PostCreateWithoutAuthorInput[] | PostUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: PostCreateOrConnectWithoutAuthorInput | PostCreateOrConnectWithoutAuthorInput[]
    upsert?: PostUpsertWithWhereUniqueWithoutAuthorInput | PostUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: PostCreateManyAuthorInputEnvelope
    set?: PostWhereUniqueInput | PostWhereUniqueInput[]
    disconnect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    delete?: PostWhereUniqueInput | PostWhereUniqueInput[]
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    update?: PostUpdateWithWhereUniqueWithoutAuthorInput | PostUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: PostUpdateManyWithWhereWithoutAuthorInput | PostUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: PostScalarWhereInput | PostScalarWhereInput[]
  }

  export type ReplyUncheckedUpdateManyWithoutFromNestedInput = {
    create?: XOR<ReplyCreateWithoutFromInput, ReplyUncheckedCreateWithoutFromInput> | ReplyCreateWithoutFromInput[] | ReplyUncheckedCreateWithoutFromInput[]
    connectOrCreate?: ReplyCreateOrConnectWithoutFromInput | ReplyCreateOrConnectWithoutFromInput[]
    upsert?: ReplyUpsertWithWhereUniqueWithoutFromInput | ReplyUpsertWithWhereUniqueWithoutFromInput[]
    createMany?: ReplyCreateManyFromInputEnvelope
    set?: ReplyWhereUniqueInput | ReplyWhereUniqueInput[]
    disconnect?: ReplyWhereUniqueInput | ReplyWhereUniqueInput[]
    delete?: ReplyWhereUniqueInput | ReplyWhereUniqueInput[]
    connect?: ReplyWhereUniqueInput | ReplyWhereUniqueInput[]
    update?: ReplyUpdateWithWhereUniqueWithoutFromInput | ReplyUpdateWithWhereUniqueWithoutFromInput[]
    updateMany?: ReplyUpdateManyWithWhereWithoutFromInput | ReplyUpdateManyWithWhereWithoutFromInput[]
    deleteMany?: ReplyScalarWhereInput | ReplyScalarWhereInput[]
  }

  export type ReplyUncheckedUpdateManyWithoutToNestedInput = {
    create?: XOR<ReplyCreateWithoutToInput, ReplyUncheckedCreateWithoutToInput> | ReplyCreateWithoutToInput[] | ReplyUncheckedCreateWithoutToInput[]
    connectOrCreate?: ReplyCreateOrConnectWithoutToInput | ReplyCreateOrConnectWithoutToInput[]
    upsert?: ReplyUpsertWithWhereUniqueWithoutToInput | ReplyUpsertWithWhereUniqueWithoutToInput[]
    createMany?: ReplyCreateManyToInputEnvelope
    set?: ReplyWhereUniqueInput | ReplyWhereUniqueInput[]
    disconnect?: ReplyWhereUniqueInput | ReplyWhereUniqueInput[]
    delete?: ReplyWhereUniqueInput | ReplyWhereUniqueInput[]
    connect?: ReplyWhereUniqueInput | ReplyWhereUniqueInput[]
    update?: ReplyUpdateWithWhereUniqueWithoutToInput | ReplyUpdateWithWhereUniqueWithoutToInput[]
    updateMany?: ReplyUpdateManyWithWhereWithoutToInput | ReplyUpdateManyWithWhereWithoutToInput[]
    deleteMany?: ReplyScalarWhereInput | ReplyScalarWhereInput[]
  }

  export type LikeTableUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<LikeTableCreateWithoutUserInput, LikeTableUncheckedCreateWithoutUserInput> | LikeTableCreateWithoutUserInput[] | LikeTableUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LikeTableCreateOrConnectWithoutUserInput | LikeTableCreateOrConnectWithoutUserInput[]
    upsert?: LikeTableUpsertWithWhereUniqueWithoutUserInput | LikeTableUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: LikeTableCreateManyUserInputEnvelope
    set?: LikeTableWhereUniqueInput | LikeTableWhereUniqueInput[]
    disconnect?: LikeTableWhereUniqueInput | LikeTableWhereUniqueInput[]
    delete?: LikeTableWhereUniqueInput | LikeTableWhereUniqueInput[]
    connect?: LikeTableWhereUniqueInput | LikeTableWhereUniqueInput[]
    update?: LikeTableUpdateWithWhereUniqueWithoutUserInput | LikeTableUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: LikeTableUpdateManyWithWhereWithoutUserInput | LikeTableUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: LikeTableScalarWhereInput | LikeTableScalarWhereInput[]
  }

  export type NotificationCenterUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<NotificationCenterCreateWithoutUserInput, NotificationCenterUncheckedCreateWithoutUserInput>
    connectOrCreate?: NotificationCenterCreateOrConnectWithoutUserInput
    upsert?: NotificationCenterUpsertWithoutUserInput
    disconnect?: NotificationCenterWhereInput | boolean
    delete?: NotificationCenterWhereInput | boolean
    connect?: NotificationCenterWhereUniqueInput
    update?: XOR<XOR<NotificationCenterUpdateToOneWithWhereWithoutUserInput, NotificationCenterUpdateWithoutUserInput>, NotificationCenterUncheckedUpdateWithoutUserInput>
  }

  export type UserCreateNestedOneWithoutPostsInput = {
    create?: XOR<UserCreateWithoutPostsInput, UserUncheckedCreateWithoutPostsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPostsInput
    connect?: UserWhereUniqueInput
  }

  export type ReplyCreateNestedManyWithoutPostInput = {
    create?: XOR<ReplyCreateWithoutPostInput, ReplyUncheckedCreateWithoutPostInput> | ReplyCreateWithoutPostInput[] | ReplyUncheckedCreateWithoutPostInput[]
    connectOrCreate?: ReplyCreateOrConnectWithoutPostInput | ReplyCreateOrConnectWithoutPostInput[]
    createMany?: ReplyCreateManyPostInputEnvelope
    connect?: ReplyWhereUniqueInput | ReplyWhereUniqueInput[]
  }

  export type LikeTableCreateNestedManyWithoutPostInput = {
    create?: XOR<LikeTableCreateWithoutPostInput, LikeTableUncheckedCreateWithoutPostInput> | LikeTableCreateWithoutPostInput[] | LikeTableUncheckedCreateWithoutPostInput[]
    connectOrCreate?: LikeTableCreateOrConnectWithoutPostInput | LikeTableCreateOrConnectWithoutPostInput[]
    createMany?: LikeTableCreateManyPostInputEnvelope
    connect?: LikeTableWhereUniqueInput | LikeTableWhereUniqueInput[]
  }

  export type ReplyUncheckedCreateNestedManyWithoutPostInput = {
    create?: XOR<ReplyCreateWithoutPostInput, ReplyUncheckedCreateWithoutPostInput> | ReplyCreateWithoutPostInput[] | ReplyUncheckedCreateWithoutPostInput[]
    connectOrCreate?: ReplyCreateOrConnectWithoutPostInput | ReplyCreateOrConnectWithoutPostInput[]
    createMany?: ReplyCreateManyPostInputEnvelope
    connect?: ReplyWhereUniqueInput | ReplyWhereUniqueInput[]
  }

  export type LikeTableUncheckedCreateNestedManyWithoutPostInput = {
    create?: XOR<LikeTableCreateWithoutPostInput, LikeTableUncheckedCreateWithoutPostInput> | LikeTableCreateWithoutPostInput[] | LikeTableUncheckedCreateWithoutPostInput[]
    connectOrCreate?: LikeTableCreateOrConnectWithoutPostInput | LikeTableCreateOrConnectWithoutPostInput[]
    createMany?: LikeTableCreateManyPostInputEnvelope
    connect?: LikeTableWhereUniqueInput | LikeTableWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
    unset?: boolean
  }

  export type EnumPostStatusFieldUpdateOperationsInput = {
    set?: $Enums.PostStatus
  }

  export type UserUpdateOneRequiredWithoutPostsNestedInput = {
    create?: XOR<UserCreateWithoutPostsInput, UserUncheckedCreateWithoutPostsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPostsInput
    upsert?: UserUpsertWithoutPostsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPostsInput, UserUpdateWithoutPostsInput>, UserUncheckedUpdateWithoutPostsInput>
  }

  export type ReplyUpdateManyWithoutPostNestedInput = {
    create?: XOR<ReplyCreateWithoutPostInput, ReplyUncheckedCreateWithoutPostInput> | ReplyCreateWithoutPostInput[] | ReplyUncheckedCreateWithoutPostInput[]
    connectOrCreate?: ReplyCreateOrConnectWithoutPostInput | ReplyCreateOrConnectWithoutPostInput[]
    upsert?: ReplyUpsertWithWhereUniqueWithoutPostInput | ReplyUpsertWithWhereUniqueWithoutPostInput[]
    createMany?: ReplyCreateManyPostInputEnvelope
    set?: ReplyWhereUniqueInput | ReplyWhereUniqueInput[]
    disconnect?: ReplyWhereUniqueInput | ReplyWhereUniqueInput[]
    delete?: ReplyWhereUniqueInput | ReplyWhereUniqueInput[]
    connect?: ReplyWhereUniqueInput | ReplyWhereUniqueInput[]
    update?: ReplyUpdateWithWhereUniqueWithoutPostInput | ReplyUpdateWithWhereUniqueWithoutPostInput[]
    updateMany?: ReplyUpdateManyWithWhereWithoutPostInput | ReplyUpdateManyWithWhereWithoutPostInput[]
    deleteMany?: ReplyScalarWhereInput | ReplyScalarWhereInput[]
  }

  export type LikeTableUpdateManyWithoutPostNestedInput = {
    create?: XOR<LikeTableCreateWithoutPostInput, LikeTableUncheckedCreateWithoutPostInput> | LikeTableCreateWithoutPostInput[] | LikeTableUncheckedCreateWithoutPostInput[]
    connectOrCreate?: LikeTableCreateOrConnectWithoutPostInput | LikeTableCreateOrConnectWithoutPostInput[]
    upsert?: LikeTableUpsertWithWhereUniqueWithoutPostInput | LikeTableUpsertWithWhereUniqueWithoutPostInput[]
    createMany?: LikeTableCreateManyPostInputEnvelope
    set?: LikeTableWhereUniqueInput | LikeTableWhereUniqueInput[]
    disconnect?: LikeTableWhereUniqueInput | LikeTableWhereUniqueInput[]
    delete?: LikeTableWhereUniqueInput | LikeTableWhereUniqueInput[]
    connect?: LikeTableWhereUniqueInput | LikeTableWhereUniqueInput[]
    update?: LikeTableUpdateWithWhereUniqueWithoutPostInput | LikeTableUpdateWithWhereUniqueWithoutPostInput[]
    updateMany?: LikeTableUpdateManyWithWhereWithoutPostInput | LikeTableUpdateManyWithWhereWithoutPostInput[]
    deleteMany?: LikeTableScalarWhereInput | LikeTableScalarWhereInput[]
  }

  export type ReplyUncheckedUpdateManyWithoutPostNestedInput = {
    create?: XOR<ReplyCreateWithoutPostInput, ReplyUncheckedCreateWithoutPostInput> | ReplyCreateWithoutPostInput[] | ReplyUncheckedCreateWithoutPostInput[]
    connectOrCreate?: ReplyCreateOrConnectWithoutPostInput | ReplyCreateOrConnectWithoutPostInput[]
    upsert?: ReplyUpsertWithWhereUniqueWithoutPostInput | ReplyUpsertWithWhereUniqueWithoutPostInput[]
    createMany?: ReplyCreateManyPostInputEnvelope
    set?: ReplyWhereUniqueInput | ReplyWhereUniqueInput[]
    disconnect?: ReplyWhereUniqueInput | ReplyWhereUniqueInput[]
    delete?: ReplyWhereUniqueInput | ReplyWhereUniqueInput[]
    connect?: ReplyWhereUniqueInput | ReplyWhereUniqueInput[]
    update?: ReplyUpdateWithWhereUniqueWithoutPostInput | ReplyUpdateWithWhereUniqueWithoutPostInput[]
    updateMany?: ReplyUpdateManyWithWhereWithoutPostInput | ReplyUpdateManyWithWhereWithoutPostInput[]
    deleteMany?: ReplyScalarWhereInput | ReplyScalarWhereInput[]
  }

  export type LikeTableUncheckedUpdateManyWithoutPostNestedInput = {
    create?: XOR<LikeTableCreateWithoutPostInput, LikeTableUncheckedCreateWithoutPostInput> | LikeTableCreateWithoutPostInput[] | LikeTableUncheckedCreateWithoutPostInput[]
    connectOrCreate?: LikeTableCreateOrConnectWithoutPostInput | LikeTableCreateOrConnectWithoutPostInput[]
    upsert?: LikeTableUpsertWithWhereUniqueWithoutPostInput | LikeTableUpsertWithWhereUniqueWithoutPostInput[]
    createMany?: LikeTableCreateManyPostInputEnvelope
    set?: LikeTableWhereUniqueInput | LikeTableWhereUniqueInput[]
    disconnect?: LikeTableWhereUniqueInput | LikeTableWhereUniqueInput[]
    delete?: LikeTableWhereUniqueInput | LikeTableWhereUniqueInput[]
    connect?: LikeTableWhereUniqueInput | LikeTableWhereUniqueInput[]
    update?: LikeTableUpdateWithWhereUniqueWithoutPostInput | LikeTableUpdateWithWhereUniqueWithoutPostInput[]
    updateMany?: LikeTableUpdateManyWithWhereWithoutPostInput | LikeTableUpdateManyWithWhereWithoutPostInput[]
    deleteMany?: LikeTableScalarWhereInput | LikeTableScalarWhereInput[]
  }

  export type PostCreateNestedOneWithoutLikeTableInput = {
    create?: XOR<PostCreateWithoutLikeTableInput, PostUncheckedCreateWithoutLikeTableInput>
    connectOrCreate?: PostCreateOrConnectWithoutLikeTableInput
    connect?: PostWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutLikeTableInput = {
    create?: XOR<UserCreateWithoutLikeTableInput, UserUncheckedCreateWithoutLikeTableInput>
    connectOrCreate?: UserCreateOrConnectWithoutLikeTableInput
    connect?: UserWhereUniqueInput
  }

  export type PostUpdateOneRequiredWithoutLikeTableNestedInput = {
    create?: XOR<PostCreateWithoutLikeTableInput, PostUncheckedCreateWithoutLikeTableInput>
    connectOrCreate?: PostCreateOrConnectWithoutLikeTableInput
    upsert?: PostUpsertWithoutLikeTableInput
    connect?: PostWhereUniqueInput
    update?: XOR<XOR<PostUpdateToOneWithWhereWithoutLikeTableInput, PostUpdateWithoutLikeTableInput>, PostUncheckedUpdateWithoutLikeTableInput>
  }

  export type UserUpdateOneRequiredWithoutLikeTableNestedInput = {
    create?: XOR<UserCreateWithoutLikeTableInput, UserUncheckedCreateWithoutLikeTableInput>
    connectOrCreate?: UserCreateOrConnectWithoutLikeTableInput
    upsert?: UserUpsertWithoutLikeTableInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutLikeTableInput, UserUpdateWithoutLikeTableInput>, UserUncheckedUpdateWithoutLikeTableInput>
  }

  export type UserCreateNestedOneWithoutRepliesFromInput = {
    create?: XOR<UserCreateWithoutRepliesFromInput, UserUncheckedCreateWithoutRepliesFromInput>
    connectOrCreate?: UserCreateOrConnectWithoutRepliesFromInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutRepliesToInput = {
    create?: XOR<UserCreateWithoutRepliesToInput, UserUncheckedCreateWithoutRepliesToInput>
    connectOrCreate?: UserCreateOrConnectWithoutRepliesToInput
    connect?: UserWhereUniqueInput
  }

  export type PostCreateNestedOneWithoutRepliesInput = {
    create?: XOR<PostCreateWithoutRepliesInput, PostUncheckedCreateWithoutRepliesInput>
    connectOrCreate?: PostCreateOrConnectWithoutRepliesInput
    connect?: PostWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutRepliesFromNestedInput = {
    create?: XOR<UserCreateWithoutRepliesFromInput, UserUncheckedCreateWithoutRepliesFromInput>
    connectOrCreate?: UserCreateOrConnectWithoutRepliesFromInput
    upsert?: UserUpsertWithoutRepliesFromInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutRepliesFromInput, UserUpdateWithoutRepliesFromInput>, UserUncheckedUpdateWithoutRepliesFromInput>
  }

  export type UserUpdateOneRequiredWithoutRepliesToNestedInput = {
    create?: XOR<UserCreateWithoutRepliesToInput, UserUncheckedCreateWithoutRepliesToInput>
    connectOrCreate?: UserCreateOrConnectWithoutRepliesToInput
    upsert?: UserUpsertWithoutRepliesToInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutRepliesToInput, UserUpdateWithoutRepliesToInput>, UserUncheckedUpdateWithoutRepliesToInput>
  }

  export type PostUpdateOneRequiredWithoutRepliesNestedInput = {
    create?: XOR<PostCreateWithoutRepliesInput, PostUncheckedCreateWithoutRepliesInput>
    connectOrCreate?: PostCreateOrConnectWithoutRepliesInput
    upsert?: PostUpsertWithoutRepliesInput
    connect?: PostWhereUniqueInput
    update?: XOR<XOR<PostUpdateToOneWithWhereWithoutRepliesInput, PostUpdateWithoutRepliesInput>, PostUncheckedUpdateWithoutRepliesInput>
  }

  export type NotificationListCreateEnvelopeInput = {
    set?: NotificationCreateInput | NotificationCreateInput[]
  }

  export type NotificationCreateInput = {
    type: $Enums.NotificationType
    content: string
    sender: string
    createTime?: Date | string
    read?: boolean
  }

  export type UserCreateNestedOneWithoutNotificationCenterInput = {
    create?: XOR<UserCreateWithoutNotificationCenterInput, UserUncheckedCreateWithoutNotificationCenterInput>
    connectOrCreate?: UserCreateOrConnectWithoutNotificationCenterInput
    connect?: UserWhereUniqueInput
  }

  export type NotificationListUpdateEnvelopeInput = {
    set?: NotificationCreateInput | NotificationCreateInput[]
    push?: NotificationCreateInput | NotificationCreateInput[]
    updateMany?: NotificationUpdateManyInput
    deleteMany?: NotificationDeleteManyInput
  }

  export type UserUpdateOneRequiredWithoutNotificationCenterNestedInput = {
    create?: XOR<UserCreateWithoutNotificationCenterInput, UserUncheckedCreateWithoutNotificationCenterInput>
    connectOrCreate?: UserCreateOrConnectWithoutNotificationCenterInput
    upsert?: UserUpsertWithoutNotificationCenterInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutNotificationCenterInput, UserUpdateWithoutNotificationCenterInput>, UserUncheckedUpdateWithoutNotificationCenterInput>
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
    isSet?: boolean
  }

  export type NestedEnumPostStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PostStatus | EnumPostStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PostStatus[] | ListEnumPostStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PostStatus[] | ListEnumPostStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPostStatusFilter<$PrismaModel> | $Enums.PostStatus
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
    isSet?: boolean
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
    isSet?: boolean
  }

  export type NestedEnumPostStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PostStatus | EnumPostStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PostStatus[] | ListEnumPostStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PostStatus[] | ListEnumPostStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPostStatusWithAggregatesFilter<$PrismaModel> | $Enums.PostStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPostStatusFilter<$PrismaModel>
    _max?: NestedEnumPostStatusFilter<$PrismaModel>
  }

  export type NotificationWhereInput = {
    AND?: NotificationWhereInput | NotificationWhereInput[]
    OR?: NotificationWhereInput[]
    NOT?: NotificationWhereInput | NotificationWhereInput[]
    type?: EnumNotificationTypeFilter<"Notification"> | $Enums.NotificationType
    content?: StringFilter<"Notification"> | string
    sender?: StringFilter<"Notification"> | string
    createTime?: DateTimeFilter<"Notification"> | Date | string
    read?: BoolFilter<"Notification"> | boolean
  }

  export type PostCreateWithoutAuthorInput = {
    id?: string
    title: string
    content: string
    media?: string | null
    status?: $Enums.PostStatus
    originPost?: string | null
    replies?: ReplyCreateNestedManyWithoutPostInput
    LikeTable?: LikeTableCreateNestedManyWithoutPostInput
  }

  export type PostUncheckedCreateWithoutAuthorInput = {
    id?: string
    title: string
    content: string
    media?: string | null
    status?: $Enums.PostStatus
    originPost?: string | null
    replies?: ReplyUncheckedCreateNestedManyWithoutPostInput
    LikeTable?: LikeTableUncheckedCreateNestedManyWithoutPostInput
  }

  export type PostCreateOrConnectWithoutAuthorInput = {
    where: PostWhereUniqueInput
    create: XOR<PostCreateWithoutAuthorInput, PostUncheckedCreateWithoutAuthorInput>
  }

  export type PostCreateManyAuthorInputEnvelope = {
    data: PostCreateManyAuthorInput | PostCreateManyAuthorInput[]
  }

  export type ReplyCreateWithoutFromInput = {
    id?: string
    text: string
    to: UserCreateNestedOneWithoutRepliesToInput
    post: PostCreateNestedOneWithoutRepliesInput
  }

  export type ReplyUncheckedCreateWithoutFromInput = {
    id?: string
    text: string
    toId: string
    postId: string
  }

  export type ReplyCreateOrConnectWithoutFromInput = {
    where: ReplyWhereUniqueInput
    create: XOR<ReplyCreateWithoutFromInput, ReplyUncheckedCreateWithoutFromInput>
  }

  export type ReplyCreateManyFromInputEnvelope = {
    data: ReplyCreateManyFromInput | ReplyCreateManyFromInput[]
  }

  export type ReplyCreateWithoutToInput = {
    id?: string
    text: string
    from: UserCreateNestedOneWithoutRepliesFromInput
    post: PostCreateNestedOneWithoutRepliesInput
  }

  export type ReplyUncheckedCreateWithoutToInput = {
    id?: string
    text: string
    fromId: string
    postId: string
  }

  export type ReplyCreateOrConnectWithoutToInput = {
    where: ReplyWhereUniqueInput
    create: XOR<ReplyCreateWithoutToInput, ReplyUncheckedCreateWithoutToInput>
  }

  export type ReplyCreateManyToInputEnvelope = {
    data: ReplyCreateManyToInput | ReplyCreateManyToInput[]
  }

  export type LikeTableCreateWithoutUserInput = {
    id?: string
    post: PostCreateNestedOneWithoutLikeTableInput
  }

  export type LikeTableUncheckedCreateWithoutUserInput = {
    id?: string
    postId: string
  }

  export type LikeTableCreateOrConnectWithoutUserInput = {
    where: LikeTableWhereUniqueInput
    create: XOR<LikeTableCreateWithoutUserInput, LikeTableUncheckedCreateWithoutUserInput>
  }

  export type LikeTableCreateManyUserInputEnvelope = {
    data: LikeTableCreateManyUserInput | LikeTableCreateManyUserInput[]
  }

  export type NotificationCenterCreateWithoutUserInput = {
    notifications?: XOR<NotificationListCreateEnvelopeInput, NotificationCreateInput> | NotificationCreateInput[]
  }

  export type NotificationCenterUncheckedCreateWithoutUserInput = {
    notifications?: XOR<NotificationListCreateEnvelopeInput, NotificationCreateInput> | NotificationCreateInput[]
  }

  export type NotificationCenterCreateOrConnectWithoutUserInput = {
    where: NotificationCenterWhereUniqueInput
    create: XOR<NotificationCenterCreateWithoutUserInput, NotificationCenterUncheckedCreateWithoutUserInput>
  }

  export type PostUpsertWithWhereUniqueWithoutAuthorInput = {
    where: PostWhereUniqueInput
    update: XOR<PostUpdateWithoutAuthorInput, PostUncheckedUpdateWithoutAuthorInput>
    create: XOR<PostCreateWithoutAuthorInput, PostUncheckedCreateWithoutAuthorInput>
  }

  export type PostUpdateWithWhereUniqueWithoutAuthorInput = {
    where: PostWhereUniqueInput
    data: XOR<PostUpdateWithoutAuthorInput, PostUncheckedUpdateWithoutAuthorInput>
  }

  export type PostUpdateManyWithWhereWithoutAuthorInput = {
    where: PostScalarWhereInput
    data: XOR<PostUpdateManyMutationInput, PostUncheckedUpdateManyWithoutAuthorInput>
  }

  export type PostScalarWhereInput = {
    AND?: PostScalarWhereInput | PostScalarWhereInput[]
    OR?: PostScalarWhereInput[]
    NOT?: PostScalarWhereInput | PostScalarWhereInput[]
    id?: StringFilter<"Post"> | string
    title?: StringFilter<"Post"> | string
    content?: StringFilter<"Post"> | string
    media?: StringNullableFilter<"Post"> | string | null
    status?: EnumPostStatusFilter<"Post"> | $Enums.PostStatus
    authorId?: StringFilter<"Post"> | string
    originPost?: StringNullableFilter<"Post"> | string | null
  }

  export type ReplyUpsertWithWhereUniqueWithoutFromInput = {
    where: ReplyWhereUniqueInput
    update: XOR<ReplyUpdateWithoutFromInput, ReplyUncheckedUpdateWithoutFromInput>
    create: XOR<ReplyCreateWithoutFromInput, ReplyUncheckedCreateWithoutFromInput>
  }

  export type ReplyUpdateWithWhereUniqueWithoutFromInput = {
    where: ReplyWhereUniqueInput
    data: XOR<ReplyUpdateWithoutFromInput, ReplyUncheckedUpdateWithoutFromInput>
  }

  export type ReplyUpdateManyWithWhereWithoutFromInput = {
    where: ReplyScalarWhereInput
    data: XOR<ReplyUpdateManyMutationInput, ReplyUncheckedUpdateManyWithoutFromInput>
  }

  export type ReplyScalarWhereInput = {
    AND?: ReplyScalarWhereInput | ReplyScalarWhereInput[]
    OR?: ReplyScalarWhereInput[]
    NOT?: ReplyScalarWhereInput | ReplyScalarWhereInput[]
    id?: StringFilter<"Reply"> | string
    text?: StringFilter<"Reply"> | string
    fromId?: StringFilter<"Reply"> | string
    toId?: StringFilter<"Reply"> | string
    postId?: StringFilter<"Reply"> | string
  }

  export type ReplyUpsertWithWhereUniqueWithoutToInput = {
    where: ReplyWhereUniqueInput
    update: XOR<ReplyUpdateWithoutToInput, ReplyUncheckedUpdateWithoutToInput>
    create: XOR<ReplyCreateWithoutToInput, ReplyUncheckedCreateWithoutToInput>
  }

  export type ReplyUpdateWithWhereUniqueWithoutToInput = {
    where: ReplyWhereUniqueInput
    data: XOR<ReplyUpdateWithoutToInput, ReplyUncheckedUpdateWithoutToInput>
  }

  export type ReplyUpdateManyWithWhereWithoutToInput = {
    where: ReplyScalarWhereInput
    data: XOR<ReplyUpdateManyMutationInput, ReplyUncheckedUpdateManyWithoutToInput>
  }

  export type LikeTableUpsertWithWhereUniqueWithoutUserInput = {
    where: LikeTableWhereUniqueInput
    update: XOR<LikeTableUpdateWithoutUserInput, LikeTableUncheckedUpdateWithoutUserInput>
    create: XOR<LikeTableCreateWithoutUserInput, LikeTableUncheckedCreateWithoutUserInput>
  }

  export type LikeTableUpdateWithWhereUniqueWithoutUserInput = {
    where: LikeTableWhereUniqueInput
    data: XOR<LikeTableUpdateWithoutUserInput, LikeTableUncheckedUpdateWithoutUserInput>
  }

  export type LikeTableUpdateManyWithWhereWithoutUserInput = {
    where: LikeTableScalarWhereInput
    data: XOR<LikeTableUpdateManyMutationInput, LikeTableUncheckedUpdateManyWithoutUserInput>
  }

  export type LikeTableScalarWhereInput = {
    AND?: LikeTableScalarWhereInput | LikeTableScalarWhereInput[]
    OR?: LikeTableScalarWhereInput[]
    NOT?: LikeTableScalarWhereInput | LikeTableScalarWhereInput[]
    id?: StringFilter<"LikeTable"> | string
    postId?: StringFilter<"LikeTable"> | string
    userId?: StringFilter<"LikeTable"> | string
  }

  export type NotificationCenterUpsertWithoutUserInput = {
    update: XOR<NotificationCenterUpdateWithoutUserInput, NotificationCenterUncheckedUpdateWithoutUserInput>
    create: XOR<NotificationCenterCreateWithoutUserInput, NotificationCenterUncheckedCreateWithoutUserInput>
    where?: NotificationCenterWhereInput
  }

  export type NotificationCenterUpdateToOneWithWhereWithoutUserInput = {
    where?: NotificationCenterWhereInput
    data: XOR<NotificationCenterUpdateWithoutUserInput, NotificationCenterUncheckedUpdateWithoutUserInput>
  }

  export type NotificationCenterUpdateWithoutUserInput = {
    notifications?: XOR<NotificationListUpdateEnvelopeInput, NotificationCreateInput> | NotificationCreateInput[]
  }

  export type NotificationCenterUncheckedUpdateWithoutUserInput = {
    notifications?: XOR<NotificationListUpdateEnvelopeInput, NotificationCreateInput> | NotificationCreateInput[]
  }

  export type UserCreateWithoutPostsInput = {
    id: string
    repliesFrom?: ReplyCreateNestedManyWithoutFromInput
    repliesTo?: ReplyCreateNestedManyWithoutToInput
    LikeTable?: LikeTableCreateNestedManyWithoutUserInput
    notificationCenter?: NotificationCenterCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutPostsInput = {
    id: string
    repliesFrom?: ReplyUncheckedCreateNestedManyWithoutFromInput
    repliesTo?: ReplyUncheckedCreateNestedManyWithoutToInput
    LikeTable?: LikeTableUncheckedCreateNestedManyWithoutUserInput
    notificationCenter?: NotificationCenterUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutPostsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPostsInput, UserUncheckedCreateWithoutPostsInput>
  }

  export type ReplyCreateWithoutPostInput = {
    id?: string
    text: string
    from: UserCreateNestedOneWithoutRepliesFromInput
    to: UserCreateNestedOneWithoutRepliesToInput
  }

  export type ReplyUncheckedCreateWithoutPostInput = {
    id?: string
    text: string
    fromId: string
    toId: string
  }

  export type ReplyCreateOrConnectWithoutPostInput = {
    where: ReplyWhereUniqueInput
    create: XOR<ReplyCreateWithoutPostInput, ReplyUncheckedCreateWithoutPostInput>
  }

  export type ReplyCreateManyPostInputEnvelope = {
    data: ReplyCreateManyPostInput | ReplyCreateManyPostInput[]
  }

  export type LikeTableCreateWithoutPostInput = {
    id?: string
    user: UserCreateNestedOneWithoutLikeTableInput
  }

  export type LikeTableUncheckedCreateWithoutPostInput = {
    id?: string
    userId: string
  }

  export type LikeTableCreateOrConnectWithoutPostInput = {
    where: LikeTableWhereUniqueInput
    create: XOR<LikeTableCreateWithoutPostInput, LikeTableUncheckedCreateWithoutPostInput>
  }

  export type LikeTableCreateManyPostInputEnvelope = {
    data: LikeTableCreateManyPostInput | LikeTableCreateManyPostInput[]
  }

  export type UserUpsertWithoutPostsInput = {
    update: XOR<UserUpdateWithoutPostsInput, UserUncheckedUpdateWithoutPostsInput>
    create: XOR<UserCreateWithoutPostsInput, UserUncheckedCreateWithoutPostsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPostsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPostsInput, UserUncheckedUpdateWithoutPostsInput>
  }

  export type UserUpdateWithoutPostsInput = {
    repliesFrom?: ReplyUpdateManyWithoutFromNestedInput
    repliesTo?: ReplyUpdateManyWithoutToNestedInput
    LikeTable?: LikeTableUpdateManyWithoutUserNestedInput
    notificationCenter?: NotificationCenterUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutPostsInput = {
    repliesFrom?: ReplyUncheckedUpdateManyWithoutFromNestedInput
    repliesTo?: ReplyUncheckedUpdateManyWithoutToNestedInput
    LikeTable?: LikeTableUncheckedUpdateManyWithoutUserNestedInput
    notificationCenter?: NotificationCenterUncheckedUpdateOneWithoutUserNestedInput
  }

  export type ReplyUpsertWithWhereUniqueWithoutPostInput = {
    where: ReplyWhereUniqueInput
    update: XOR<ReplyUpdateWithoutPostInput, ReplyUncheckedUpdateWithoutPostInput>
    create: XOR<ReplyCreateWithoutPostInput, ReplyUncheckedCreateWithoutPostInput>
  }

  export type ReplyUpdateWithWhereUniqueWithoutPostInput = {
    where: ReplyWhereUniqueInput
    data: XOR<ReplyUpdateWithoutPostInput, ReplyUncheckedUpdateWithoutPostInput>
  }

  export type ReplyUpdateManyWithWhereWithoutPostInput = {
    where: ReplyScalarWhereInput
    data: XOR<ReplyUpdateManyMutationInput, ReplyUncheckedUpdateManyWithoutPostInput>
  }

  export type LikeTableUpsertWithWhereUniqueWithoutPostInput = {
    where: LikeTableWhereUniqueInput
    update: XOR<LikeTableUpdateWithoutPostInput, LikeTableUncheckedUpdateWithoutPostInput>
    create: XOR<LikeTableCreateWithoutPostInput, LikeTableUncheckedCreateWithoutPostInput>
  }

  export type LikeTableUpdateWithWhereUniqueWithoutPostInput = {
    where: LikeTableWhereUniqueInput
    data: XOR<LikeTableUpdateWithoutPostInput, LikeTableUncheckedUpdateWithoutPostInput>
  }

  export type LikeTableUpdateManyWithWhereWithoutPostInput = {
    where: LikeTableScalarWhereInput
    data: XOR<LikeTableUpdateManyMutationInput, LikeTableUncheckedUpdateManyWithoutPostInput>
  }

  export type PostCreateWithoutLikeTableInput = {
    id?: string
    title: string
    content: string
    media?: string | null
    status?: $Enums.PostStatus
    originPost?: string | null
    author: UserCreateNestedOneWithoutPostsInput
    replies?: ReplyCreateNestedManyWithoutPostInput
  }

  export type PostUncheckedCreateWithoutLikeTableInput = {
    id?: string
    title: string
    content: string
    media?: string | null
    status?: $Enums.PostStatus
    authorId: string
    originPost?: string | null
    replies?: ReplyUncheckedCreateNestedManyWithoutPostInput
  }

  export type PostCreateOrConnectWithoutLikeTableInput = {
    where: PostWhereUniqueInput
    create: XOR<PostCreateWithoutLikeTableInput, PostUncheckedCreateWithoutLikeTableInput>
  }

  export type UserCreateWithoutLikeTableInput = {
    id: string
    posts?: PostCreateNestedManyWithoutAuthorInput
    repliesFrom?: ReplyCreateNestedManyWithoutFromInput
    repliesTo?: ReplyCreateNestedManyWithoutToInput
    notificationCenter?: NotificationCenterCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutLikeTableInput = {
    id: string
    posts?: PostUncheckedCreateNestedManyWithoutAuthorInput
    repliesFrom?: ReplyUncheckedCreateNestedManyWithoutFromInput
    repliesTo?: ReplyUncheckedCreateNestedManyWithoutToInput
    notificationCenter?: NotificationCenterUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutLikeTableInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutLikeTableInput, UserUncheckedCreateWithoutLikeTableInput>
  }

  export type PostUpsertWithoutLikeTableInput = {
    update: XOR<PostUpdateWithoutLikeTableInput, PostUncheckedUpdateWithoutLikeTableInput>
    create: XOR<PostCreateWithoutLikeTableInput, PostUncheckedCreateWithoutLikeTableInput>
    where?: PostWhereInput
  }

  export type PostUpdateToOneWithWhereWithoutLikeTableInput = {
    where?: PostWhereInput
    data: XOR<PostUpdateWithoutLikeTableInput, PostUncheckedUpdateWithoutLikeTableInput>
  }

  export type PostUpdateWithoutLikeTableInput = {
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    media?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumPostStatusFieldUpdateOperationsInput | $Enums.PostStatus
    originPost?: NullableStringFieldUpdateOperationsInput | string | null
    author?: UserUpdateOneRequiredWithoutPostsNestedInput
    replies?: ReplyUpdateManyWithoutPostNestedInput
  }

  export type PostUncheckedUpdateWithoutLikeTableInput = {
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    media?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumPostStatusFieldUpdateOperationsInput | $Enums.PostStatus
    authorId?: StringFieldUpdateOperationsInput | string
    originPost?: NullableStringFieldUpdateOperationsInput | string | null
    replies?: ReplyUncheckedUpdateManyWithoutPostNestedInput
  }

  export type UserUpsertWithoutLikeTableInput = {
    update: XOR<UserUpdateWithoutLikeTableInput, UserUncheckedUpdateWithoutLikeTableInput>
    create: XOR<UserCreateWithoutLikeTableInput, UserUncheckedCreateWithoutLikeTableInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutLikeTableInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutLikeTableInput, UserUncheckedUpdateWithoutLikeTableInput>
  }

  export type UserUpdateWithoutLikeTableInput = {
    posts?: PostUpdateManyWithoutAuthorNestedInput
    repliesFrom?: ReplyUpdateManyWithoutFromNestedInput
    repliesTo?: ReplyUpdateManyWithoutToNestedInput
    notificationCenter?: NotificationCenterUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutLikeTableInput = {
    posts?: PostUncheckedUpdateManyWithoutAuthorNestedInput
    repliesFrom?: ReplyUncheckedUpdateManyWithoutFromNestedInput
    repliesTo?: ReplyUncheckedUpdateManyWithoutToNestedInput
    notificationCenter?: NotificationCenterUncheckedUpdateOneWithoutUserNestedInput
  }

  export type UserCreateWithoutRepliesFromInput = {
    id: string
    posts?: PostCreateNestedManyWithoutAuthorInput
    repliesTo?: ReplyCreateNestedManyWithoutToInput
    LikeTable?: LikeTableCreateNestedManyWithoutUserInput
    notificationCenter?: NotificationCenterCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutRepliesFromInput = {
    id: string
    posts?: PostUncheckedCreateNestedManyWithoutAuthorInput
    repliesTo?: ReplyUncheckedCreateNestedManyWithoutToInput
    LikeTable?: LikeTableUncheckedCreateNestedManyWithoutUserInput
    notificationCenter?: NotificationCenterUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutRepliesFromInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutRepliesFromInput, UserUncheckedCreateWithoutRepliesFromInput>
  }

  export type UserCreateWithoutRepliesToInput = {
    id: string
    posts?: PostCreateNestedManyWithoutAuthorInput
    repliesFrom?: ReplyCreateNestedManyWithoutFromInput
    LikeTable?: LikeTableCreateNestedManyWithoutUserInput
    notificationCenter?: NotificationCenterCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutRepliesToInput = {
    id: string
    posts?: PostUncheckedCreateNestedManyWithoutAuthorInput
    repliesFrom?: ReplyUncheckedCreateNestedManyWithoutFromInput
    LikeTable?: LikeTableUncheckedCreateNestedManyWithoutUserInput
    notificationCenter?: NotificationCenterUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutRepliesToInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutRepliesToInput, UserUncheckedCreateWithoutRepliesToInput>
  }

  export type PostCreateWithoutRepliesInput = {
    id?: string
    title: string
    content: string
    media?: string | null
    status?: $Enums.PostStatus
    originPost?: string | null
    author: UserCreateNestedOneWithoutPostsInput
    LikeTable?: LikeTableCreateNestedManyWithoutPostInput
  }

  export type PostUncheckedCreateWithoutRepliesInput = {
    id?: string
    title: string
    content: string
    media?: string | null
    status?: $Enums.PostStatus
    authorId: string
    originPost?: string | null
    LikeTable?: LikeTableUncheckedCreateNestedManyWithoutPostInput
  }

  export type PostCreateOrConnectWithoutRepliesInput = {
    where: PostWhereUniqueInput
    create: XOR<PostCreateWithoutRepliesInput, PostUncheckedCreateWithoutRepliesInput>
  }

  export type UserUpsertWithoutRepliesFromInput = {
    update: XOR<UserUpdateWithoutRepliesFromInput, UserUncheckedUpdateWithoutRepliesFromInput>
    create: XOR<UserCreateWithoutRepliesFromInput, UserUncheckedCreateWithoutRepliesFromInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutRepliesFromInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutRepliesFromInput, UserUncheckedUpdateWithoutRepliesFromInput>
  }

  export type UserUpdateWithoutRepliesFromInput = {
    posts?: PostUpdateManyWithoutAuthorNestedInput
    repliesTo?: ReplyUpdateManyWithoutToNestedInput
    LikeTable?: LikeTableUpdateManyWithoutUserNestedInput
    notificationCenter?: NotificationCenterUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutRepliesFromInput = {
    posts?: PostUncheckedUpdateManyWithoutAuthorNestedInput
    repliesTo?: ReplyUncheckedUpdateManyWithoutToNestedInput
    LikeTable?: LikeTableUncheckedUpdateManyWithoutUserNestedInput
    notificationCenter?: NotificationCenterUncheckedUpdateOneWithoutUserNestedInput
  }

  export type UserUpsertWithoutRepliesToInput = {
    update: XOR<UserUpdateWithoutRepliesToInput, UserUncheckedUpdateWithoutRepliesToInput>
    create: XOR<UserCreateWithoutRepliesToInput, UserUncheckedCreateWithoutRepliesToInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutRepliesToInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutRepliesToInput, UserUncheckedUpdateWithoutRepliesToInput>
  }

  export type UserUpdateWithoutRepliesToInput = {
    posts?: PostUpdateManyWithoutAuthorNestedInput
    repliesFrom?: ReplyUpdateManyWithoutFromNestedInput
    LikeTable?: LikeTableUpdateManyWithoutUserNestedInput
    notificationCenter?: NotificationCenterUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutRepliesToInput = {
    posts?: PostUncheckedUpdateManyWithoutAuthorNestedInput
    repliesFrom?: ReplyUncheckedUpdateManyWithoutFromNestedInput
    LikeTable?: LikeTableUncheckedUpdateManyWithoutUserNestedInput
    notificationCenter?: NotificationCenterUncheckedUpdateOneWithoutUserNestedInput
  }

  export type PostUpsertWithoutRepliesInput = {
    update: XOR<PostUpdateWithoutRepliesInput, PostUncheckedUpdateWithoutRepliesInput>
    create: XOR<PostCreateWithoutRepliesInput, PostUncheckedCreateWithoutRepliesInput>
    where?: PostWhereInput
  }

  export type PostUpdateToOneWithWhereWithoutRepliesInput = {
    where?: PostWhereInput
    data: XOR<PostUpdateWithoutRepliesInput, PostUncheckedUpdateWithoutRepliesInput>
  }

  export type PostUpdateWithoutRepliesInput = {
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    media?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumPostStatusFieldUpdateOperationsInput | $Enums.PostStatus
    originPost?: NullableStringFieldUpdateOperationsInput | string | null
    author?: UserUpdateOneRequiredWithoutPostsNestedInput
    LikeTable?: LikeTableUpdateManyWithoutPostNestedInput
  }

  export type PostUncheckedUpdateWithoutRepliesInput = {
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    media?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumPostStatusFieldUpdateOperationsInput | $Enums.PostStatus
    authorId?: StringFieldUpdateOperationsInput | string
    originPost?: NullableStringFieldUpdateOperationsInput | string | null
    LikeTable?: LikeTableUncheckedUpdateManyWithoutPostNestedInput
  }

  export type UserCreateWithoutNotificationCenterInput = {
    id: string
    posts?: PostCreateNestedManyWithoutAuthorInput
    repliesFrom?: ReplyCreateNestedManyWithoutFromInput
    repliesTo?: ReplyCreateNestedManyWithoutToInput
    LikeTable?: LikeTableCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutNotificationCenterInput = {
    id: string
    posts?: PostUncheckedCreateNestedManyWithoutAuthorInput
    repliesFrom?: ReplyUncheckedCreateNestedManyWithoutFromInput
    repliesTo?: ReplyUncheckedCreateNestedManyWithoutToInput
    LikeTable?: LikeTableUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutNotificationCenterInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutNotificationCenterInput, UserUncheckedCreateWithoutNotificationCenterInput>
  }

  export type NotificationUpdateManyInput = {
    where: NotificationWhereInput
    data: NotificationUpdateInput
  }

  export type NotificationDeleteManyInput = {
    where: NotificationWhereInput
  }

  export type UserUpsertWithoutNotificationCenterInput = {
    update: XOR<UserUpdateWithoutNotificationCenterInput, UserUncheckedUpdateWithoutNotificationCenterInput>
    create: XOR<UserCreateWithoutNotificationCenterInput, UserUncheckedCreateWithoutNotificationCenterInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutNotificationCenterInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutNotificationCenterInput, UserUncheckedUpdateWithoutNotificationCenterInput>
  }

  export type UserUpdateWithoutNotificationCenterInput = {
    posts?: PostUpdateManyWithoutAuthorNestedInput
    repliesFrom?: ReplyUpdateManyWithoutFromNestedInput
    repliesTo?: ReplyUpdateManyWithoutToNestedInput
    LikeTable?: LikeTableUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutNotificationCenterInput = {
    posts?: PostUncheckedUpdateManyWithoutAuthorNestedInput
    repliesFrom?: ReplyUncheckedUpdateManyWithoutFromNestedInput
    repliesTo?: ReplyUncheckedUpdateManyWithoutToNestedInput
    LikeTable?: LikeTableUncheckedUpdateManyWithoutUserNestedInput
  }

  export type EnumNotificationTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.NotificationType | EnumNotificationTypeFieldRefInput<$PrismaModel>
    in?: $Enums.NotificationType[] | ListEnumNotificationTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.NotificationType[] | ListEnumNotificationTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumNotificationTypeFilter<$PrismaModel> | $Enums.NotificationType
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

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type PostCreateManyAuthorInput = {
    id?: string
    title: string
    content: string
    media?: string | null
    status?: $Enums.PostStatus
    originPost?: string | null
  }

  export type ReplyCreateManyFromInput = {
    id?: string
    text: string
    toId: string
    postId: string
  }

  export type ReplyCreateManyToInput = {
    id?: string
    text: string
    fromId: string
    postId: string
  }

  export type LikeTableCreateManyUserInput = {
    id?: string
    postId: string
  }

  export type PostUpdateWithoutAuthorInput = {
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    media?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumPostStatusFieldUpdateOperationsInput | $Enums.PostStatus
    originPost?: NullableStringFieldUpdateOperationsInput | string | null
    replies?: ReplyUpdateManyWithoutPostNestedInput
    LikeTable?: LikeTableUpdateManyWithoutPostNestedInput
  }

  export type PostUncheckedUpdateWithoutAuthorInput = {
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    media?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumPostStatusFieldUpdateOperationsInput | $Enums.PostStatus
    originPost?: NullableStringFieldUpdateOperationsInput | string | null
    replies?: ReplyUncheckedUpdateManyWithoutPostNestedInput
    LikeTable?: LikeTableUncheckedUpdateManyWithoutPostNestedInput
  }

  export type PostUncheckedUpdateManyWithoutAuthorInput = {
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    media?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumPostStatusFieldUpdateOperationsInput | $Enums.PostStatus
    originPost?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ReplyUpdateWithoutFromInput = {
    text?: StringFieldUpdateOperationsInput | string
    to?: UserUpdateOneRequiredWithoutRepliesToNestedInput
    post?: PostUpdateOneRequiredWithoutRepliesNestedInput
  }

  export type ReplyUncheckedUpdateWithoutFromInput = {
    text?: StringFieldUpdateOperationsInput | string
    toId?: StringFieldUpdateOperationsInput | string
    postId?: StringFieldUpdateOperationsInput | string
  }

  export type ReplyUncheckedUpdateManyWithoutFromInput = {
    text?: StringFieldUpdateOperationsInput | string
    toId?: StringFieldUpdateOperationsInput | string
    postId?: StringFieldUpdateOperationsInput | string
  }

  export type ReplyUpdateWithoutToInput = {
    text?: StringFieldUpdateOperationsInput | string
    from?: UserUpdateOneRequiredWithoutRepliesFromNestedInput
    post?: PostUpdateOneRequiredWithoutRepliesNestedInput
  }

  export type ReplyUncheckedUpdateWithoutToInput = {
    text?: StringFieldUpdateOperationsInput | string
    fromId?: StringFieldUpdateOperationsInput | string
    postId?: StringFieldUpdateOperationsInput | string
  }

  export type ReplyUncheckedUpdateManyWithoutToInput = {
    text?: StringFieldUpdateOperationsInput | string
    fromId?: StringFieldUpdateOperationsInput | string
    postId?: StringFieldUpdateOperationsInput | string
  }

  export type LikeTableUpdateWithoutUserInput = {
    post?: PostUpdateOneRequiredWithoutLikeTableNestedInput
  }

  export type LikeTableUncheckedUpdateWithoutUserInput = {
    postId?: StringFieldUpdateOperationsInput | string
  }

  export type LikeTableUncheckedUpdateManyWithoutUserInput = {
    postId?: StringFieldUpdateOperationsInput | string
  }

  export type ReplyCreateManyPostInput = {
    id?: string
    text: string
    fromId: string
    toId: string
  }

  export type LikeTableCreateManyPostInput = {
    id?: string
    userId: string
  }

  export type ReplyUpdateWithoutPostInput = {
    text?: StringFieldUpdateOperationsInput | string
    from?: UserUpdateOneRequiredWithoutRepliesFromNestedInput
    to?: UserUpdateOneRequiredWithoutRepliesToNestedInput
  }

  export type ReplyUncheckedUpdateWithoutPostInput = {
    text?: StringFieldUpdateOperationsInput | string
    fromId?: StringFieldUpdateOperationsInput | string
    toId?: StringFieldUpdateOperationsInput | string
  }

  export type ReplyUncheckedUpdateManyWithoutPostInput = {
    text?: StringFieldUpdateOperationsInput | string
    fromId?: StringFieldUpdateOperationsInput | string
    toId?: StringFieldUpdateOperationsInput | string
  }

  export type LikeTableUpdateWithoutPostInput = {
    user?: UserUpdateOneRequiredWithoutLikeTableNestedInput
  }

  export type LikeTableUncheckedUpdateWithoutPostInput = {
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type LikeTableUncheckedUpdateManyWithoutPostInput = {
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type NotificationUpdateInput = {
    type?: EnumNotificationTypeFieldUpdateOperationsInput | $Enums.NotificationType
    content?: StringFieldUpdateOperationsInput | string
    sender?: StringFieldUpdateOperationsInput | string
    createTime?: DateTimeFieldUpdateOperationsInput | Date | string
    read?: BoolFieldUpdateOperationsInput | boolean
  }

  export type NestedEnumNotificationTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.NotificationType | EnumNotificationTypeFieldRefInput<$PrismaModel>
    in?: $Enums.NotificationType[] | ListEnumNotificationTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.NotificationType[] | ListEnumNotificationTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumNotificationTypeFilter<$PrismaModel> | $Enums.NotificationType
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type EnumNotificationTypeFieldUpdateOperationsInput = {
    set?: $Enums.NotificationType
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use UserCountOutputTypeDefaultArgs instead
     */
    export type UserCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PostCountOutputTypeDefaultArgs instead
     */
    export type PostCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PostCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use NotificationDefaultArgs instead
     */
    export type NotificationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = NotificationDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserDefaultArgs instead
     */
    export type UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PostDefaultArgs instead
     */
    export type PostArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PostDefaultArgs<ExtArgs>
    /**
     * @deprecated Use LikeTableDefaultArgs instead
     */
    export type LikeTableArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = LikeTableDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ReplyDefaultArgs instead
     */
    export type ReplyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ReplyDefaultArgs<ExtArgs>
    /**
     * @deprecated Use NotificationCenterDefaultArgs instead
     */
    export type NotificationCenterArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = NotificationCenterDefaultArgs<ExtArgs>

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