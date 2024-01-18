
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
 * Model Course
 * 
 */
export type Course = $Result.DefaultSelection<Prisma.$CoursePayload>
/**
 * Model Instructor
 * 
 */
export type Instructor = $Result.DefaultSelection<Prisma.$InstructorPayload>
/**
 * Model Assignment
 * 
 */
export type Assignment = $Result.DefaultSelection<Prisma.$AssignmentPayload>
/**
 * Model Student
 * 
 */
export type Student = $Result.DefaultSelection<Prisma.$StudentPayload>
/**
 * Model Mark
 * 
 */
export type Mark = $Result.DefaultSelection<Prisma.$MarkPayload>
/**
 * Model Timeline
 * 
 */
export type Timeline = $Result.DefaultSelection<Prisma.$TimelinePayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Courses
 * const courses = await prisma.course.findMany()
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
   * // Fetch zero or more Courses
   * const courses = await prisma.course.findMany()
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


  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.course`: Exposes CRUD operations for the **Course** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Courses
    * const courses = await prisma.course.findMany()
    * ```
    */
  get course(): Prisma.CourseDelegate<ExtArgs>;

  /**
   * `prisma.instructor`: Exposes CRUD operations for the **Instructor** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Instructors
    * const instructors = await prisma.instructor.findMany()
    * ```
    */
  get instructor(): Prisma.InstructorDelegate<ExtArgs>;

  /**
   * `prisma.assignment`: Exposes CRUD operations for the **Assignment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Assignments
    * const assignments = await prisma.assignment.findMany()
    * ```
    */
  get assignment(): Prisma.AssignmentDelegate<ExtArgs>;

  /**
   * `prisma.student`: Exposes CRUD operations for the **Student** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Students
    * const students = await prisma.student.findMany()
    * ```
    */
  get student(): Prisma.StudentDelegate<ExtArgs>;

  /**
   * `prisma.mark`: Exposes CRUD operations for the **Mark** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Marks
    * const marks = await prisma.mark.findMany()
    * ```
    */
  get mark(): Prisma.MarkDelegate<ExtArgs>;

  /**
   * `prisma.timeline`: Exposes CRUD operations for the **Timeline** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Timelines
    * const timelines = await prisma.timeline.findMany()
    * ```
    */
  get timeline(): Prisma.TimelineDelegate<ExtArgs>;
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
    Course: 'Course',
    Instructor: 'Instructor',
    Assignment: 'Assignment',
    Student: 'Student',
    Mark: 'Mark',
    Timeline: 'Timeline'
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
      modelProps: 'course' | 'instructor' | 'assignment' | 'student' | 'mark' | 'timeline'
      txIsolationLevel: Prisma.TransactionIsolationLevel
    },
    model: {
      Course: {
        payload: Prisma.$CoursePayload<ExtArgs>
        fields: Prisma.CourseFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CourseFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CoursePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CourseFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>
          }
          findFirst: {
            args: Prisma.CourseFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CoursePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CourseFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>
          }
          findMany: {
            args: Prisma.CourseFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>[]
          }
          create: {
            args: Prisma.CourseCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>
          }
          createMany: {
            args: Prisma.CourseCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.CourseDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>
          }
          update: {
            args: Prisma.CourseUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>
          }
          deleteMany: {
            args: Prisma.CourseDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.CourseUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.CourseUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>
          }
          aggregate: {
            args: Prisma.CourseAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateCourse>
          }
          groupBy: {
            args: Prisma.CourseGroupByArgs<ExtArgs>,
            result: $Utils.Optional<CourseGroupByOutputType>[]
          }
          count: {
            args: Prisma.CourseCountArgs<ExtArgs>,
            result: $Utils.Optional<CourseCountAggregateOutputType> | number
          }
        }
      }
      Instructor: {
        payload: Prisma.$InstructorPayload<ExtArgs>
        fields: Prisma.InstructorFieldRefs
        operations: {
          findUnique: {
            args: Prisma.InstructorFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$InstructorPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.InstructorFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$InstructorPayload>
          }
          findFirst: {
            args: Prisma.InstructorFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$InstructorPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.InstructorFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$InstructorPayload>
          }
          findMany: {
            args: Prisma.InstructorFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$InstructorPayload>[]
          }
          create: {
            args: Prisma.InstructorCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$InstructorPayload>
          }
          createMany: {
            args: Prisma.InstructorCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.InstructorDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$InstructorPayload>
          }
          update: {
            args: Prisma.InstructorUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$InstructorPayload>
          }
          deleteMany: {
            args: Prisma.InstructorDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.InstructorUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.InstructorUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$InstructorPayload>
          }
          aggregate: {
            args: Prisma.InstructorAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateInstructor>
          }
          groupBy: {
            args: Prisma.InstructorGroupByArgs<ExtArgs>,
            result: $Utils.Optional<InstructorGroupByOutputType>[]
          }
          count: {
            args: Prisma.InstructorCountArgs<ExtArgs>,
            result: $Utils.Optional<InstructorCountAggregateOutputType> | number
          }
        }
      }
      Assignment: {
        payload: Prisma.$AssignmentPayload<ExtArgs>
        fields: Prisma.AssignmentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AssignmentFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AssignmentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AssignmentFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AssignmentPayload>
          }
          findFirst: {
            args: Prisma.AssignmentFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AssignmentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AssignmentFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AssignmentPayload>
          }
          findMany: {
            args: Prisma.AssignmentFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AssignmentPayload>[]
          }
          create: {
            args: Prisma.AssignmentCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AssignmentPayload>
          }
          createMany: {
            args: Prisma.AssignmentCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.AssignmentDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AssignmentPayload>
          }
          update: {
            args: Prisma.AssignmentUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AssignmentPayload>
          }
          deleteMany: {
            args: Prisma.AssignmentDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.AssignmentUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.AssignmentUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AssignmentPayload>
          }
          aggregate: {
            args: Prisma.AssignmentAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateAssignment>
          }
          groupBy: {
            args: Prisma.AssignmentGroupByArgs<ExtArgs>,
            result: $Utils.Optional<AssignmentGroupByOutputType>[]
          }
          count: {
            args: Prisma.AssignmentCountArgs<ExtArgs>,
            result: $Utils.Optional<AssignmentCountAggregateOutputType> | number
          }
        }
      }
      Student: {
        payload: Prisma.$StudentPayload<ExtArgs>
        fields: Prisma.StudentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StudentFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$StudentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StudentFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>
          }
          findFirst: {
            args: Prisma.StudentFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$StudentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StudentFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>
          }
          findMany: {
            args: Prisma.StudentFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>[]
          }
          create: {
            args: Prisma.StudentCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>
          }
          createMany: {
            args: Prisma.StudentCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.StudentDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>
          }
          update: {
            args: Prisma.StudentUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>
          }
          deleteMany: {
            args: Prisma.StudentDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.StudentUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.StudentUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>
          }
          aggregate: {
            args: Prisma.StudentAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateStudent>
          }
          groupBy: {
            args: Prisma.StudentGroupByArgs<ExtArgs>,
            result: $Utils.Optional<StudentGroupByOutputType>[]
          }
          count: {
            args: Prisma.StudentCountArgs<ExtArgs>,
            result: $Utils.Optional<StudentCountAggregateOutputType> | number
          }
        }
      }
      Mark: {
        payload: Prisma.$MarkPayload<ExtArgs>
        fields: Prisma.MarkFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MarkFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MarkPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MarkFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MarkPayload>
          }
          findFirst: {
            args: Prisma.MarkFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MarkPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MarkFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MarkPayload>
          }
          findMany: {
            args: Prisma.MarkFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MarkPayload>[]
          }
          create: {
            args: Prisma.MarkCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MarkPayload>
          }
          createMany: {
            args: Prisma.MarkCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.MarkDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MarkPayload>
          }
          update: {
            args: Prisma.MarkUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MarkPayload>
          }
          deleteMany: {
            args: Prisma.MarkDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.MarkUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.MarkUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MarkPayload>
          }
          aggregate: {
            args: Prisma.MarkAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateMark>
          }
          groupBy: {
            args: Prisma.MarkGroupByArgs<ExtArgs>,
            result: $Utils.Optional<MarkGroupByOutputType>[]
          }
          count: {
            args: Prisma.MarkCountArgs<ExtArgs>,
            result: $Utils.Optional<MarkCountAggregateOutputType> | number
          }
        }
      }
      Timeline: {
        payload: Prisma.$TimelinePayload<ExtArgs>
        fields: Prisma.TimelineFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TimelineFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TimelinePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TimelineFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TimelinePayload>
          }
          findFirst: {
            args: Prisma.TimelineFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TimelinePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TimelineFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TimelinePayload>
          }
          findMany: {
            args: Prisma.TimelineFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TimelinePayload>[]
          }
          create: {
            args: Prisma.TimelineCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TimelinePayload>
          }
          createMany: {
            args: Prisma.TimelineCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.TimelineDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TimelinePayload>
          }
          update: {
            args: Prisma.TimelineUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TimelinePayload>
          }
          deleteMany: {
            args: Prisma.TimelineDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.TimelineUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.TimelineUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TimelinePayload>
          }
          aggregate: {
            args: Prisma.TimelineAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateTimeline>
          }
          groupBy: {
            args: Prisma.TimelineGroupByArgs<ExtArgs>,
            result: $Utils.Optional<TimelineGroupByOutputType>[]
          }
          count: {
            args: Prisma.TimelineCountArgs<ExtArgs>,
            result: $Utils.Optional<TimelineCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
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
   * Count Type CourseCountOutputType
   */

  export type CourseCountOutputType = {
    assignments: number
    students: number
  }

  export type CourseCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    assignments?: boolean | CourseCountOutputTypeCountAssignmentsArgs
    students?: boolean | CourseCountOutputTypeCountStudentsArgs
  }

  // Custom InputTypes

  /**
   * CourseCountOutputType without action
   */
  export type CourseCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseCountOutputType
     */
    select?: CourseCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * CourseCountOutputType without action
   */
  export type CourseCountOutputTypeCountAssignmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AssignmentWhereInput
  }


  /**
   * CourseCountOutputType without action
   */
  export type CourseCountOutputTypeCountStudentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StudentWhereInput
  }



  /**
   * Count Type InstructorCountOutputType
   */

  export type InstructorCountOutputType = {
    courses: number
  }

  export type InstructorCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    courses?: boolean | InstructorCountOutputTypeCountCoursesArgs
  }

  // Custom InputTypes

  /**
   * InstructorCountOutputType without action
   */
  export type InstructorCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InstructorCountOutputType
     */
    select?: InstructorCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * InstructorCountOutputType without action
   */
  export type InstructorCountOutputTypeCountCoursesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CourseWhereInput
  }



  /**
   * Count Type AssignmentCountOutputType
   */

  export type AssignmentCountOutputType = {
    mark: number
  }

  export type AssignmentCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    mark?: boolean | AssignmentCountOutputTypeCountMarkArgs
  }

  // Custom InputTypes

  /**
   * AssignmentCountOutputType without action
   */
  export type AssignmentCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssignmentCountOutputType
     */
    select?: AssignmentCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * AssignmentCountOutputType without action
   */
  export type AssignmentCountOutputTypeCountMarkArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MarkWhereInput
  }



  /**
   * Count Type StudentCountOutputType
   */

  export type StudentCountOutputType = {
    courses: number
    marks: number
  }

  export type StudentCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    courses?: boolean | StudentCountOutputTypeCountCoursesArgs
    marks?: boolean | StudentCountOutputTypeCountMarksArgs
  }

  // Custom InputTypes

  /**
   * StudentCountOutputType without action
   */
  export type StudentCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentCountOutputType
     */
    select?: StudentCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * StudentCountOutputType without action
   */
  export type StudentCountOutputTypeCountCoursesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CourseWhereInput
  }


  /**
   * StudentCountOutputType without action
   */
  export type StudentCountOutputTypeCountMarksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MarkWhereInput
  }



  /**
   * Models
   */

  /**
   * Model Course
   */

  export type AggregateCourse = {
    _count: CourseCountAggregateOutputType | null
    _avg: CourseAvgAggregateOutputType | null
    _sum: CourseSumAggregateOutputType | null
    _min: CourseMinAggregateOutputType | null
    _max: CourseMaxAggregateOutputType | null
  }

  export type CourseAvgAggregateOutputType = {
    courseHours: number | null
  }

  export type CourseSumAggregateOutputType = {
    courseHours: number | null
  }

  export type CourseMinAggregateOutputType = {
    id: string | null
    name: string | null
    instId: string | null
    courseHours: number | null
    courseIntro: string | null
  }

  export type CourseMaxAggregateOutputType = {
    id: string | null
    name: string | null
    instId: string | null
    courseHours: number | null
    courseIntro: string | null
  }

  export type CourseCountAggregateOutputType = {
    id: number
    name: number
    instId: number
    courseHours: number
    courseIntro: number
    _all: number
  }


  export type CourseAvgAggregateInputType = {
    courseHours?: true
  }

  export type CourseSumAggregateInputType = {
    courseHours?: true
  }

  export type CourseMinAggregateInputType = {
    id?: true
    name?: true
    instId?: true
    courseHours?: true
    courseIntro?: true
  }

  export type CourseMaxAggregateInputType = {
    id?: true
    name?: true
    instId?: true
    courseHours?: true
    courseIntro?: true
  }

  export type CourseCountAggregateInputType = {
    id?: true
    name?: true
    instId?: true
    courseHours?: true
    courseIntro?: true
    _all?: true
  }

  export type CourseAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Course to aggregate.
     */
    where?: CourseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Courses to fetch.
     */
    orderBy?: CourseOrderByWithRelationInput | CourseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CourseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Courses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Courses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Courses
    **/
    _count?: true | CourseCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CourseAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CourseSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CourseMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CourseMaxAggregateInputType
  }

  export type GetCourseAggregateType<T extends CourseAggregateArgs> = {
        [P in keyof T & keyof AggregateCourse]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCourse[P]>
      : GetScalarType<T[P], AggregateCourse[P]>
  }




  export type CourseGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CourseWhereInput
    orderBy?: CourseOrderByWithAggregationInput | CourseOrderByWithAggregationInput[]
    by: CourseScalarFieldEnum[] | CourseScalarFieldEnum
    having?: CourseScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CourseCountAggregateInputType | true
    _avg?: CourseAvgAggregateInputType
    _sum?: CourseSumAggregateInputType
    _min?: CourseMinAggregateInputType
    _max?: CourseMaxAggregateInputType
  }

  export type CourseGroupByOutputType = {
    id: string
    name: string
    instId: string
    courseHours: number
    courseIntro: string | null
    _count: CourseCountAggregateOutputType | null
    _avg: CourseAvgAggregateOutputType | null
    _sum: CourseSumAggregateOutputType | null
    _min: CourseMinAggregateOutputType | null
    _max: CourseMaxAggregateOutputType | null
  }

  type GetCourseGroupByPayload<T extends CourseGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CourseGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CourseGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CourseGroupByOutputType[P]>
            : GetScalarType<T[P], CourseGroupByOutputType[P]>
        }
      >
    >


  export type CourseSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    instId?: boolean
    courseHours?: boolean
    courseIntro?: boolean
    instructor?: boolean | InstructorDefaultArgs<ExtArgs>
    assignments?: boolean | Course$assignmentsArgs<ExtArgs>
    students?: boolean | Course$studentsArgs<ExtArgs>
    timeline?: boolean | Course$timelineArgs<ExtArgs>
    _count?: boolean | CourseCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["course"]>

  export type CourseSelectScalar = {
    id?: boolean
    name?: boolean
    instId?: boolean
    courseHours?: boolean
    courseIntro?: boolean
  }

  export type CourseInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    instructor?: boolean | InstructorDefaultArgs<ExtArgs>
    assignments?: boolean | Course$assignmentsArgs<ExtArgs>
    students?: boolean | Course$studentsArgs<ExtArgs>
    timeline?: boolean | Course$timelineArgs<ExtArgs>
    _count?: boolean | CourseCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $CoursePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Course"
    objects: {
      instructor: Prisma.$InstructorPayload<ExtArgs>
      assignments: Prisma.$AssignmentPayload<ExtArgs>[]
      students: Prisma.$StudentPayload<ExtArgs>[]
      timeline: Prisma.$TimelinePayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      instId: string
      courseHours: number
      courseIntro: string | null
    }, ExtArgs["result"]["course"]>
    composites: {}
  }


  type CourseGetPayload<S extends boolean | null | undefined | CourseDefaultArgs> = $Result.GetResult<Prisma.$CoursePayload, S>

  type CourseCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<CourseFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: CourseCountAggregateInputType | true
    }

  export interface CourseDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Course'], meta: { name: 'Course' } }
    /**
     * Find zero or one Course that matches the filter.
     * @param {CourseFindUniqueArgs} args - Arguments to find a Course
     * @example
     * // Get one Course
     * const course = await prisma.course.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends CourseFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, CourseFindUniqueArgs<ExtArgs>>
    ): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Course that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {CourseFindUniqueOrThrowArgs} args - Arguments to find a Course
     * @example
     * // Get one Course
     * const course = await prisma.course.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends CourseFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, CourseFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Course that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseFindFirstArgs} args - Arguments to find a Course
     * @example
     * // Get one Course
     * const course = await prisma.course.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends CourseFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, CourseFindFirstArgs<ExtArgs>>
    ): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Course that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseFindFirstOrThrowArgs} args - Arguments to find a Course
     * @example
     * // Get one Course
     * const course = await prisma.course.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends CourseFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, CourseFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Courses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Courses
     * const courses = await prisma.course.findMany()
     * 
     * // Get first 10 Courses
     * const courses = await prisma.course.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const courseWithIdOnly = await prisma.course.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends CourseFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CourseFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Course.
     * @param {CourseCreateArgs} args - Arguments to create a Course.
     * @example
     * // Create one Course
     * const Course = await prisma.course.create({
     *   data: {
     *     // ... data to create a Course
     *   }
     * })
     * 
    **/
    create<T extends CourseCreateArgs<ExtArgs>>(
      args: SelectSubset<T, CourseCreateArgs<ExtArgs>>
    ): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Courses.
     *     @param {CourseCreateManyArgs} args - Arguments to create many Courses.
     *     @example
     *     // Create many Courses
     *     const course = await prisma.course.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends CourseCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CourseCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Course.
     * @param {CourseDeleteArgs} args - Arguments to delete one Course.
     * @example
     * // Delete one Course
     * const Course = await prisma.course.delete({
     *   where: {
     *     // ... filter to delete one Course
     *   }
     * })
     * 
    **/
    delete<T extends CourseDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, CourseDeleteArgs<ExtArgs>>
    ): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Course.
     * @param {CourseUpdateArgs} args - Arguments to update one Course.
     * @example
     * // Update one Course
     * const course = await prisma.course.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends CourseUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, CourseUpdateArgs<ExtArgs>>
    ): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Courses.
     * @param {CourseDeleteManyArgs} args - Arguments to filter Courses to delete.
     * @example
     * // Delete a few Courses
     * const { count } = await prisma.course.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends CourseDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CourseDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Courses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Courses
     * const course = await prisma.course.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends CourseUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, CourseUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Course.
     * @param {CourseUpsertArgs} args - Arguments to update or create a Course.
     * @example
     * // Update or create a Course
     * const course = await prisma.course.upsert({
     *   create: {
     *     // ... data to create a Course
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Course we want to update
     *   }
     * })
    **/
    upsert<T extends CourseUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, CourseUpsertArgs<ExtArgs>>
    ): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Courses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseCountArgs} args - Arguments to filter Courses to count.
     * @example
     * // Count the number of Courses
     * const count = await prisma.course.count({
     *   where: {
     *     // ... the filter for the Courses we want to count
     *   }
     * })
    **/
    count<T extends CourseCountArgs>(
      args?: Subset<T, CourseCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CourseCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Course.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CourseAggregateArgs>(args: Subset<T, CourseAggregateArgs>): Prisma.PrismaPromise<GetCourseAggregateType<T>>

    /**
     * Group by Course.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseGroupByArgs} args - Group by arguments.
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
      T extends CourseGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CourseGroupByArgs['orderBy'] }
        : { orderBy?: CourseGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CourseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCourseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Course model
   */
  readonly fields: CourseFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Course.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CourseClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    instructor<T extends InstructorDefaultArgs<ExtArgs> = {}>(args?: Subset<T, InstructorDefaultArgs<ExtArgs>>): Prisma__InstructorClient<$Result.GetResult<Prisma.$InstructorPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    assignments<T extends Course$assignmentsArgs<ExtArgs> = {}>(args?: Subset<T, Course$assignmentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AssignmentPayload<ExtArgs>, T, 'findMany'> | Null>;

    students<T extends Course$studentsArgs<ExtArgs> = {}>(args?: Subset<T, Course$studentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, 'findMany'> | Null>;

    timeline<T extends Course$timelineArgs<ExtArgs> = {}>(args?: Subset<T, Course$timelineArgs<ExtArgs>>): Prisma__TimelineClient<$Result.GetResult<Prisma.$TimelinePayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

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
   * Fields of the Course model
   */ 
  interface CourseFieldRefs {
    readonly id: FieldRef<"Course", 'String'>
    readonly name: FieldRef<"Course", 'String'>
    readonly instId: FieldRef<"Course", 'String'>
    readonly courseHours: FieldRef<"Course", 'Int'>
    readonly courseIntro: FieldRef<"Course", 'String'>
  }
    

  // Custom InputTypes

  /**
   * Course findUnique
   */
  export type CourseFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * Filter, which Course to fetch.
     */
    where: CourseWhereUniqueInput
  }


  /**
   * Course findUniqueOrThrow
   */
  export type CourseFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * Filter, which Course to fetch.
     */
    where: CourseWhereUniqueInput
  }


  /**
   * Course findFirst
   */
  export type CourseFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * Filter, which Course to fetch.
     */
    where?: CourseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Courses to fetch.
     */
    orderBy?: CourseOrderByWithRelationInput | CourseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Courses.
     */
    cursor?: CourseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Courses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Courses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Courses.
     */
    distinct?: CourseScalarFieldEnum | CourseScalarFieldEnum[]
  }


  /**
   * Course findFirstOrThrow
   */
  export type CourseFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * Filter, which Course to fetch.
     */
    where?: CourseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Courses to fetch.
     */
    orderBy?: CourseOrderByWithRelationInput | CourseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Courses.
     */
    cursor?: CourseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Courses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Courses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Courses.
     */
    distinct?: CourseScalarFieldEnum | CourseScalarFieldEnum[]
  }


  /**
   * Course findMany
   */
  export type CourseFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * Filter, which Courses to fetch.
     */
    where?: CourseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Courses to fetch.
     */
    orderBy?: CourseOrderByWithRelationInput | CourseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Courses.
     */
    cursor?: CourseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Courses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Courses.
     */
    skip?: number
    distinct?: CourseScalarFieldEnum | CourseScalarFieldEnum[]
  }


  /**
   * Course create
   */
  export type CourseCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * The data needed to create a Course.
     */
    data: XOR<CourseCreateInput, CourseUncheckedCreateInput>
  }


  /**
   * Course createMany
   */
  export type CourseCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Courses.
     */
    data: CourseCreateManyInput | CourseCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Course update
   */
  export type CourseUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * The data needed to update a Course.
     */
    data: XOR<CourseUpdateInput, CourseUncheckedUpdateInput>
    /**
     * Choose, which Course to update.
     */
    where: CourseWhereUniqueInput
  }


  /**
   * Course updateMany
   */
  export type CourseUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Courses.
     */
    data: XOR<CourseUpdateManyMutationInput, CourseUncheckedUpdateManyInput>
    /**
     * Filter which Courses to update
     */
    where?: CourseWhereInput
  }


  /**
   * Course upsert
   */
  export type CourseUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * The filter to search for the Course to update in case it exists.
     */
    where: CourseWhereUniqueInput
    /**
     * In case the Course found by the `where` argument doesn't exist, create a new Course with this data.
     */
    create: XOR<CourseCreateInput, CourseUncheckedCreateInput>
    /**
     * In case the Course was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CourseUpdateInput, CourseUncheckedUpdateInput>
  }


  /**
   * Course delete
   */
  export type CourseDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * Filter which Course to delete.
     */
    where: CourseWhereUniqueInput
  }


  /**
   * Course deleteMany
   */
  export type CourseDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Courses to delete
     */
    where?: CourseWhereInput
  }


  /**
   * Course.assignments
   */
  export type Course$assignmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assignment
     */
    select?: AssignmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AssignmentInclude<ExtArgs> | null
    where?: AssignmentWhereInput
    orderBy?: AssignmentOrderByWithRelationInput | AssignmentOrderByWithRelationInput[]
    cursor?: AssignmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AssignmentScalarFieldEnum | AssignmentScalarFieldEnum[]
  }


  /**
   * Course.students
   */
  export type Course$studentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StudentInclude<ExtArgs> | null
    where?: StudentWhereInput
    orderBy?: StudentOrderByWithRelationInput | StudentOrderByWithRelationInput[]
    cursor?: StudentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StudentScalarFieldEnum | StudentScalarFieldEnum[]
  }


  /**
   * Course.timeline
   */
  export type Course$timelineArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Timeline
     */
    select?: TimelineSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TimelineInclude<ExtArgs> | null
    where?: TimelineWhereInput
  }


  /**
   * Course without action
   */
  export type CourseDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CourseInclude<ExtArgs> | null
  }



  /**
   * Model Instructor
   */

  export type AggregateInstructor = {
    _count: InstructorCountAggregateOutputType | null
    _min: InstructorMinAggregateOutputType | null
    _max: InstructorMaxAggregateOutputType | null
  }

  export type InstructorMinAggregateOutputType = {
    id: string | null
    name: string | null
  }

  export type InstructorMaxAggregateOutputType = {
    id: string | null
    name: string | null
  }

  export type InstructorCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type InstructorMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type InstructorMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type InstructorCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type InstructorAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Instructor to aggregate.
     */
    where?: InstructorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Instructors to fetch.
     */
    orderBy?: InstructorOrderByWithRelationInput | InstructorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: InstructorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Instructors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Instructors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Instructors
    **/
    _count?: true | InstructorCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: InstructorMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: InstructorMaxAggregateInputType
  }

  export type GetInstructorAggregateType<T extends InstructorAggregateArgs> = {
        [P in keyof T & keyof AggregateInstructor]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInstructor[P]>
      : GetScalarType<T[P], AggregateInstructor[P]>
  }




  export type InstructorGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InstructorWhereInput
    orderBy?: InstructorOrderByWithAggregationInput | InstructorOrderByWithAggregationInput[]
    by: InstructorScalarFieldEnum[] | InstructorScalarFieldEnum
    having?: InstructorScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: InstructorCountAggregateInputType | true
    _min?: InstructorMinAggregateInputType
    _max?: InstructorMaxAggregateInputType
  }

  export type InstructorGroupByOutputType = {
    id: string
    name: string
    _count: InstructorCountAggregateOutputType | null
    _min: InstructorMinAggregateOutputType | null
    _max: InstructorMaxAggregateOutputType | null
  }

  type GetInstructorGroupByPayload<T extends InstructorGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<InstructorGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof InstructorGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InstructorGroupByOutputType[P]>
            : GetScalarType<T[P], InstructorGroupByOutputType[P]>
        }
      >
    >


  export type InstructorSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    courses?: boolean | Instructor$coursesArgs<ExtArgs>
    _count?: boolean | InstructorCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["instructor"]>

  export type InstructorSelectScalar = {
    id?: boolean
    name?: boolean
  }

  export type InstructorInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    courses?: boolean | Instructor$coursesArgs<ExtArgs>
    _count?: boolean | InstructorCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $InstructorPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Instructor"
    objects: {
      courses: Prisma.$CoursePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
    }, ExtArgs["result"]["instructor"]>
    composites: {}
  }


  type InstructorGetPayload<S extends boolean | null | undefined | InstructorDefaultArgs> = $Result.GetResult<Prisma.$InstructorPayload, S>

  type InstructorCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<InstructorFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: InstructorCountAggregateInputType | true
    }

  export interface InstructorDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Instructor'], meta: { name: 'Instructor' } }
    /**
     * Find zero or one Instructor that matches the filter.
     * @param {InstructorFindUniqueArgs} args - Arguments to find a Instructor
     * @example
     * // Get one Instructor
     * const instructor = await prisma.instructor.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends InstructorFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, InstructorFindUniqueArgs<ExtArgs>>
    ): Prisma__InstructorClient<$Result.GetResult<Prisma.$InstructorPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Instructor that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {InstructorFindUniqueOrThrowArgs} args - Arguments to find a Instructor
     * @example
     * // Get one Instructor
     * const instructor = await prisma.instructor.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends InstructorFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, InstructorFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__InstructorClient<$Result.GetResult<Prisma.$InstructorPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Instructor that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstructorFindFirstArgs} args - Arguments to find a Instructor
     * @example
     * // Get one Instructor
     * const instructor = await prisma.instructor.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends InstructorFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, InstructorFindFirstArgs<ExtArgs>>
    ): Prisma__InstructorClient<$Result.GetResult<Prisma.$InstructorPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Instructor that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstructorFindFirstOrThrowArgs} args - Arguments to find a Instructor
     * @example
     * // Get one Instructor
     * const instructor = await prisma.instructor.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends InstructorFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, InstructorFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__InstructorClient<$Result.GetResult<Prisma.$InstructorPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Instructors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstructorFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Instructors
     * const instructors = await prisma.instructor.findMany()
     * 
     * // Get first 10 Instructors
     * const instructors = await prisma.instructor.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const instructorWithIdOnly = await prisma.instructor.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends InstructorFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, InstructorFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InstructorPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Instructor.
     * @param {InstructorCreateArgs} args - Arguments to create a Instructor.
     * @example
     * // Create one Instructor
     * const Instructor = await prisma.instructor.create({
     *   data: {
     *     // ... data to create a Instructor
     *   }
     * })
     * 
    **/
    create<T extends InstructorCreateArgs<ExtArgs>>(
      args: SelectSubset<T, InstructorCreateArgs<ExtArgs>>
    ): Prisma__InstructorClient<$Result.GetResult<Prisma.$InstructorPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Instructors.
     *     @param {InstructorCreateManyArgs} args - Arguments to create many Instructors.
     *     @example
     *     // Create many Instructors
     *     const instructor = await prisma.instructor.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends InstructorCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, InstructorCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Instructor.
     * @param {InstructorDeleteArgs} args - Arguments to delete one Instructor.
     * @example
     * // Delete one Instructor
     * const Instructor = await prisma.instructor.delete({
     *   where: {
     *     // ... filter to delete one Instructor
     *   }
     * })
     * 
    **/
    delete<T extends InstructorDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, InstructorDeleteArgs<ExtArgs>>
    ): Prisma__InstructorClient<$Result.GetResult<Prisma.$InstructorPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Instructor.
     * @param {InstructorUpdateArgs} args - Arguments to update one Instructor.
     * @example
     * // Update one Instructor
     * const instructor = await prisma.instructor.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends InstructorUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, InstructorUpdateArgs<ExtArgs>>
    ): Prisma__InstructorClient<$Result.GetResult<Prisma.$InstructorPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Instructors.
     * @param {InstructorDeleteManyArgs} args - Arguments to filter Instructors to delete.
     * @example
     * // Delete a few Instructors
     * const { count } = await prisma.instructor.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends InstructorDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, InstructorDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Instructors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstructorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Instructors
     * const instructor = await prisma.instructor.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends InstructorUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, InstructorUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Instructor.
     * @param {InstructorUpsertArgs} args - Arguments to update or create a Instructor.
     * @example
     * // Update or create a Instructor
     * const instructor = await prisma.instructor.upsert({
     *   create: {
     *     // ... data to create a Instructor
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Instructor we want to update
     *   }
     * })
    **/
    upsert<T extends InstructorUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, InstructorUpsertArgs<ExtArgs>>
    ): Prisma__InstructorClient<$Result.GetResult<Prisma.$InstructorPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Instructors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstructorCountArgs} args - Arguments to filter Instructors to count.
     * @example
     * // Count the number of Instructors
     * const count = await prisma.instructor.count({
     *   where: {
     *     // ... the filter for the Instructors we want to count
     *   }
     * })
    **/
    count<T extends InstructorCountArgs>(
      args?: Subset<T, InstructorCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InstructorCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Instructor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstructorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends InstructorAggregateArgs>(args: Subset<T, InstructorAggregateArgs>): Prisma.PrismaPromise<GetInstructorAggregateType<T>>

    /**
     * Group by Instructor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstructorGroupByArgs} args - Group by arguments.
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
      T extends InstructorGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: InstructorGroupByArgs['orderBy'] }
        : { orderBy?: InstructorGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, InstructorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInstructorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Instructor model
   */
  readonly fields: InstructorFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Instructor.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__InstructorClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    courses<T extends Instructor$coursesArgs<ExtArgs> = {}>(args?: Subset<T, Instructor$coursesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, 'findMany'> | Null>;

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
   * Fields of the Instructor model
   */ 
  interface InstructorFieldRefs {
    readonly id: FieldRef<"Instructor", 'String'>
    readonly name: FieldRef<"Instructor", 'String'>
  }
    

  // Custom InputTypes

  /**
   * Instructor findUnique
   */
  export type InstructorFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Instructor
     */
    select?: InstructorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: InstructorInclude<ExtArgs> | null
    /**
     * Filter, which Instructor to fetch.
     */
    where: InstructorWhereUniqueInput
  }


  /**
   * Instructor findUniqueOrThrow
   */
  export type InstructorFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Instructor
     */
    select?: InstructorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: InstructorInclude<ExtArgs> | null
    /**
     * Filter, which Instructor to fetch.
     */
    where: InstructorWhereUniqueInput
  }


  /**
   * Instructor findFirst
   */
  export type InstructorFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Instructor
     */
    select?: InstructorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: InstructorInclude<ExtArgs> | null
    /**
     * Filter, which Instructor to fetch.
     */
    where?: InstructorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Instructors to fetch.
     */
    orderBy?: InstructorOrderByWithRelationInput | InstructorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Instructors.
     */
    cursor?: InstructorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Instructors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Instructors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Instructors.
     */
    distinct?: InstructorScalarFieldEnum | InstructorScalarFieldEnum[]
  }


  /**
   * Instructor findFirstOrThrow
   */
  export type InstructorFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Instructor
     */
    select?: InstructorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: InstructorInclude<ExtArgs> | null
    /**
     * Filter, which Instructor to fetch.
     */
    where?: InstructorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Instructors to fetch.
     */
    orderBy?: InstructorOrderByWithRelationInput | InstructorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Instructors.
     */
    cursor?: InstructorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Instructors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Instructors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Instructors.
     */
    distinct?: InstructorScalarFieldEnum | InstructorScalarFieldEnum[]
  }


  /**
   * Instructor findMany
   */
  export type InstructorFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Instructor
     */
    select?: InstructorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: InstructorInclude<ExtArgs> | null
    /**
     * Filter, which Instructors to fetch.
     */
    where?: InstructorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Instructors to fetch.
     */
    orderBy?: InstructorOrderByWithRelationInput | InstructorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Instructors.
     */
    cursor?: InstructorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Instructors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Instructors.
     */
    skip?: number
    distinct?: InstructorScalarFieldEnum | InstructorScalarFieldEnum[]
  }


  /**
   * Instructor create
   */
  export type InstructorCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Instructor
     */
    select?: InstructorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: InstructorInclude<ExtArgs> | null
    /**
     * The data needed to create a Instructor.
     */
    data: XOR<InstructorCreateInput, InstructorUncheckedCreateInput>
  }


  /**
   * Instructor createMany
   */
  export type InstructorCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Instructors.
     */
    data: InstructorCreateManyInput | InstructorCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Instructor update
   */
  export type InstructorUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Instructor
     */
    select?: InstructorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: InstructorInclude<ExtArgs> | null
    /**
     * The data needed to update a Instructor.
     */
    data: XOR<InstructorUpdateInput, InstructorUncheckedUpdateInput>
    /**
     * Choose, which Instructor to update.
     */
    where: InstructorWhereUniqueInput
  }


  /**
   * Instructor updateMany
   */
  export type InstructorUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Instructors.
     */
    data: XOR<InstructorUpdateManyMutationInput, InstructorUncheckedUpdateManyInput>
    /**
     * Filter which Instructors to update
     */
    where?: InstructorWhereInput
  }


  /**
   * Instructor upsert
   */
  export type InstructorUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Instructor
     */
    select?: InstructorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: InstructorInclude<ExtArgs> | null
    /**
     * The filter to search for the Instructor to update in case it exists.
     */
    where: InstructorWhereUniqueInput
    /**
     * In case the Instructor found by the `where` argument doesn't exist, create a new Instructor with this data.
     */
    create: XOR<InstructorCreateInput, InstructorUncheckedCreateInput>
    /**
     * In case the Instructor was found with the provided `where` argument, update it with this data.
     */
    update: XOR<InstructorUpdateInput, InstructorUncheckedUpdateInput>
  }


  /**
   * Instructor delete
   */
  export type InstructorDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Instructor
     */
    select?: InstructorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: InstructorInclude<ExtArgs> | null
    /**
     * Filter which Instructor to delete.
     */
    where: InstructorWhereUniqueInput
  }


  /**
   * Instructor deleteMany
   */
  export type InstructorDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Instructors to delete
     */
    where?: InstructorWhereInput
  }


  /**
   * Instructor.courses
   */
  export type Instructor$coursesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CourseInclude<ExtArgs> | null
    where?: CourseWhereInput
    orderBy?: CourseOrderByWithRelationInput | CourseOrderByWithRelationInput[]
    cursor?: CourseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CourseScalarFieldEnum | CourseScalarFieldEnum[]
  }


  /**
   * Instructor without action
   */
  export type InstructorDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Instructor
     */
    select?: InstructorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: InstructorInclude<ExtArgs> | null
  }



  /**
   * Model Assignment
   */

  export type AggregateAssignment = {
    _count: AssignmentCountAggregateOutputType | null
    _avg: AssignmentAvgAggregateOutputType | null
    _sum: AssignmentSumAggregateOutputType | null
    _min: AssignmentMinAggregateOutputType | null
    _max: AssignmentMaxAggregateOutputType | null
  }

  export type AssignmentAvgAggregateOutputType = {
    number: number | null
  }

  export type AssignmentSumAggregateOutputType = {
    number: number | null
  }

  export type AssignmentMinAggregateOutputType = {
    number: number | null
    title: string | null
    deadline: Date | null
    courseId: string | null
  }

  export type AssignmentMaxAggregateOutputType = {
    number: number | null
    title: string | null
    deadline: Date | null
    courseId: string | null
  }

  export type AssignmentCountAggregateOutputType = {
    number: number
    title: number
    deadline: number
    courseId: number
    _all: number
  }


  export type AssignmentAvgAggregateInputType = {
    number?: true
  }

  export type AssignmentSumAggregateInputType = {
    number?: true
  }

  export type AssignmentMinAggregateInputType = {
    number?: true
    title?: true
    deadline?: true
    courseId?: true
  }

  export type AssignmentMaxAggregateInputType = {
    number?: true
    title?: true
    deadline?: true
    courseId?: true
  }

  export type AssignmentCountAggregateInputType = {
    number?: true
    title?: true
    deadline?: true
    courseId?: true
    _all?: true
  }

  export type AssignmentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Assignment to aggregate.
     */
    where?: AssignmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Assignments to fetch.
     */
    orderBy?: AssignmentOrderByWithRelationInput | AssignmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AssignmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Assignments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Assignments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Assignments
    **/
    _count?: true | AssignmentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AssignmentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AssignmentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AssignmentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AssignmentMaxAggregateInputType
  }

  export type GetAssignmentAggregateType<T extends AssignmentAggregateArgs> = {
        [P in keyof T & keyof AggregateAssignment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAssignment[P]>
      : GetScalarType<T[P], AggregateAssignment[P]>
  }




  export type AssignmentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AssignmentWhereInput
    orderBy?: AssignmentOrderByWithAggregationInput | AssignmentOrderByWithAggregationInput[]
    by: AssignmentScalarFieldEnum[] | AssignmentScalarFieldEnum
    having?: AssignmentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AssignmentCountAggregateInputType | true
    _avg?: AssignmentAvgAggregateInputType
    _sum?: AssignmentSumAggregateInputType
    _min?: AssignmentMinAggregateInputType
    _max?: AssignmentMaxAggregateInputType
  }

  export type AssignmentGroupByOutputType = {
    number: number
    title: string
    deadline: Date
    courseId: string
    _count: AssignmentCountAggregateOutputType | null
    _avg: AssignmentAvgAggregateOutputType | null
    _sum: AssignmentSumAggregateOutputType | null
    _min: AssignmentMinAggregateOutputType | null
    _max: AssignmentMaxAggregateOutputType | null
  }

  type GetAssignmentGroupByPayload<T extends AssignmentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AssignmentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AssignmentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AssignmentGroupByOutputType[P]>
            : GetScalarType<T[P], AssignmentGroupByOutputType[P]>
        }
      >
    >


  export type AssignmentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    number?: boolean
    title?: boolean
    deadline?: boolean
    courseId?: boolean
    course?: boolean | CourseDefaultArgs<ExtArgs>
    mark?: boolean | Assignment$markArgs<ExtArgs>
    _count?: boolean | AssignmentCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["assignment"]>

  export type AssignmentSelectScalar = {
    number?: boolean
    title?: boolean
    deadline?: boolean
    courseId?: boolean
  }

  export type AssignmentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    course?: boolean | CourseDefaultArgs<ExtArgs>
    mark?: boolean | Assignment$markArgs<ExtArgs>
    _count?: boolean | AssignmentCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $AssignmentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Assignment"
    objects: {
      course: Prisma.$CoursePayload<ExtArgs>
      mark: Prisma.$MarkPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      number: number
      title: string
      deadline: Date
      courseId: string
    }, ExtArgs["result"]["assignment"]>
    composites: {}
  }


  type AssignmentGetPayload<S extends boolean | null | undefined | AssignmentDefaultArgs> = $Result.GetResult<Prisma.$AssignmentPayload, S>

  type AssignmentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<AssignmentFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: AssignmentCountAggregateInputType | true
    }

  export interface AssignmentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Assignment'], meta: { name: 'Assignment' } }
    /**
     * Find zero or one Assignment that matches the filter.
     * @param {AssignmentFindUniqueArgs} args - Arguments to find a Assignment
     * @example
     * // Get one Assignment
     * const assignment = await prisma.assignment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends AssignmentFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, AssignmentFindUniqueArgs<ExtArgs>>
    ): Prisma__AssignmentClient<$Result.GetResult<Prisma.$AssignmentPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Assignment that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {AssignmentFindUniqueOrThrowArgs} args - Arguments to find a Assignment
     * @example
     * // Get one Assignment
     * const assignment = await prisma.assignment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends AssignmentFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, AssignmentFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__AssignmentClient<$Result.GetResult<Prisma.$AssignmentPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Assignment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssignmentFindFirstArgs} args - Arguments to find a Assignment
     * @example
     * // Get one Assignment
     * const assignment = await prisma.assignment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends AssignmentFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, AssignmentFindFirstArgs<ExtArgs>>
    ): Prisma__AssignmentClient<$Result.GetResult<Prisma.$AssignmentPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Assignment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssignmentFindFirstOrThrowArgs} args - Arguments to find a Assignment
     * @example
     * // Get one Assignment
     * const assignment = await prisma.assignment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends AssignmentFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, AssignmentFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__AssignmentClient<$Result.GetResult<Prisma.$AssignmentPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Assignments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssignmentFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Assignments
     * const assignments = await prisma.assignment.findMany()
     * 
     * // Get first 10 Assignments
     * const assignments = await prisma.assignment.findMany({ take: 10 })
     * 
     * // Only select the `number`
     * const assignmentWithNumberOnly = await prisma.assignment.findMany({ select: { number: true } })
     * 
    **/
    findMany<T extends AssignmentFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, AssignmentFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AssignmentPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Assignment.
     * @param {AssignmentCreateArgs} args - Arguments to create a Assignment.
     * @example
     * // Create one Assignment
     * const Assignment = await prisma.assignment.create({
     *   data: {
     *     // ... data to create a Assignment
     *   }
     * })
     * 
    **/
    create<T extends AssignmentCreateArgs<ExtArgs>>(
      args: SelectSubset<T, AssignmentCreateArgs<ExtArgs>>
    ): Prisma__AssignmentClient<$Result.GetResult<Prisma.$AssignmentPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Assignments.
     *     @param {AssignmentCreateManyArgs} args - Arguments to create many Assignments.
     *     @example
     *     // Create many Assignments
     *     const assignment = await prisma.assignment.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends AssignmentCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, AssignmentCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Assignment.
     * @param {AssignmentDeleteArgs} args - Arguments to delete one Assignment.
     * @example
     * // Delete one Assignment
     * const Assignment = await prisma.assignment.delete({
     *   where: {
     *     // ... filter to delete one Assignment
     *   }
     * })
     * 
    **/
    delete<T extends AssignmentDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, AssignmentDeleteArgs<ExtArgs>>
    ): Prisma__AssignmentClient<$Result.GetResult<Prisma.$AssignmentPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Assignment.
     * @param {AssignmentUpdateArgs} args - Arguments to update one Assignment.
     * @example
     * // Update one Assignment
     * const assignment = await prisma.assignment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends AssignmentUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, AssignmentUpdateArgs<ExtArgs>>
    ): Prisma__AssignmentClient<$Result.GetResult<Prisma.$AssignmentPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Assignments.
     * @param {AssignmentDeleteManyArgs} args - Arguments to filter Assignments to delete.
     * @example
     * // Delete a few Assignments
     * const { count } = await prisma.assignment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends AssignmentDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, AssignmentDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Assignments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssignmentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Assignments
     * const assignment = await prisma.assignment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends AssignmentUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, AssignmentUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Assignment.
     * @param {AssignmentUpsertArgs} args - Arguments to update or create a Assignment.
     * @example
     * // Update or create a Assignment
     * const assignment = await prisma.assignment.upsert({
     *   create: {
     *     // ... data to create a Assignment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Assignment we want to update
     *   }
     * })
    **/
    upsert<T extends AssignmentUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, AssignmentUpsertArgs<ExtArgs>>
    ): Prisma__AssignmentClient<$Result.GetResult<Prisma.$AssignmentPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Assignments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssignmentCountArgs} args - Arguments to filter Assignments to count.
     * @example
     * // Count the number of Assignments
     * const count = await prisma.assignment.count({
     *   where: {
     *     // ... the filter for the Assignments we want to count
     *   }
     * })
    **/
    count<T extends AssignmentCountArgs>(
      args?: Subset<T, AssignmentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AssignmentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Assignment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssignmentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AssignmentAggregateArgs>(args: Subset<T, AssignmentAggregateArgs>): Prisma.PrismaPromise<GetAssignmentAggregateType<T>>

    /**
     * Group by Assignment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssignmentGroupByArgs} args - Group by arguments.
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
      T extends AssignmentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AssignmentGroupByArgs['orderBy'] }
        : { orderBy?: AssignmentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AssignmentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAssignmentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Assignment model
   */
  readonly fields: AssignmentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Assignment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AssignmentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    course<T extends CourseDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CourseDefaultArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    mark<T extends Assignment$markArgs<ExtArgs> = {}>(args?: Subset<T, Assignment$markArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MarkPayload<ExtArgs>, T, 'findMany'> | Null>;

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
   * Fields of the Assignment model
   */ 
  interface AssignmentFieldRefs {
    readonly number: FieldRef<"Assignment", 'Int'>
    readonly title: FieldRef<"Assignment", 'String'>
    readonly deadline: FieldRef<"Assignment", 'DateTime'>
    readonly courseId: FieldRef<"Assignment", 'String'>
  }
    

  // Custom InputTypes

  /**
   * Assignment findUnique
   */
  export type AssignmentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assignment
     */
    select?: AssignmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AssignmentInclude<ExtArgs> | null
    /**
     * Filter, which Assignment to fetch.
     */
    where: AssignmentWhereUniqueInput
  }


  /**
   * Assignment findUniqueOrThrow
   */
  export type AssignmentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assignment
     */
    select?: AssignmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AssignmentInclude<ExtArgs> | null
    /**
     * Filter, which Assignment to fetch.
     */
    where: AssignmentWhereUniqueInput
  }


  /**
   * Assignment findFirst
   */
  export type AssignmentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assignment
     */
    select?: AssignmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AssignmentInclude<ExtArgs> | null
    /**
     * Filter, which Assignment to fetch.
     */
    where?: AssignmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Assignments to fetch.
     */
    orderBy?: AssignmentOrderByWithRelationInput | AssignmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Assignments.
     */
    cursor?: AssignmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Assignments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Assignments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Assignments.
     */
    distinct?: AssignmentScalarFieldEnum | AssignmentScalarFieldEnum[]
  }


  /**
   * Assignment findFirstOrThrow
   */
  export type AssignmentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assignment
     */
    select?: AssignmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AssignmentInclude<ExtArgs> | null
    /**
     * Filter, which Assignment to fetch.
     */
    where?: AssignmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Assignments to fetch.
     */
    orderBy?: AssignmentOrderByWithRelationInput | AssignmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Assignments.
     */
    cursor?: AssignmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Assignments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Assignments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Assignments.
     */
    distinct?: AssignmentScalarFieldEnum | AssignmentScalarFieldEnum[]
  }


  /**
   * Assignment findMany
   */
  export type AssignmentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assignment
     */
    select?: AssignmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AssignmentInclude<ExtArgs> | null
    /**
     * Filter, which Assignments to fetch.
     */
    where?: AssignmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Assignments to fetch.
     */
    orderBy?: AssignmentOrderByWithRelationInput | AssignmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Assignments.
     */
    cursor?: AssignmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Assignments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Assignments.
     */
    skip?: number
    distinct?: AssignmentScalarFieldEnum | AssignmentScalarFieldEnum[]
  }


  /**
   * Assignment create
   */
  export type AssignmentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assignment
     */
    select?: AssignmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AssignmentInclude<ExtArgs> | null
    /**
     * The data needed to create a Assignment.
     */
    data: XOR<AssignmentCreateInput, AssignmentUncheckedCreateInput>
  }


  /**
   * Assignment createMany
   */
  export type AssignmentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Assignments.
     */
    data: AssignmentCreateManyInput | AssignmentCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Assignment update
   */
  export type AssignmentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assignment
     */
    select?: AssignmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AssignmentInclude<ExtArgs> | null
    /**
     * The data needed to update a Assignment.
     */
    data: XOR<AssignmentUpdateInput, AssignmentUncheckedUpdateInput>
    /**
     * Choose, which Assignment to update.
     */
    where: AssignmentWhereUniqueInput
  }


  /**
   * Assignment updateMany
   */
  export type AssignmentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Assignments.
     */
    data: XOR<AssignmentUpdateManyMutationInput, AssignmentUncheckedUpdateManyInput>
    /**
     * Filter which Assignments to update
     */
    where?: AssignmentWhereInput
  }


  /**
   * Assignment upsert
   */
  export type AssignmentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assignment
     */
    select?: AssignmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AssignmentInclude<ExtArgs> | null
    /**
     * The filter to search for the Assignment to update in case it exists.
     */
    where: AssignmentWhereUniqueInput
    /**
     * In case the Assignment found by the `where` argument doesn't exist, create a new Assignment with this data.
     */
    create: XOR<AssignmentCreateInput, AssignmentUncheckedCreateInput>
    /**
     * In case the Assignment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AssignmentUpdateInput, AssignmentUncheckedUpdateInput>
  }


  /**
   * Assignment delete
   */
  export type AssignmentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assignment
     */
    select?: AssignmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AssignmentInclude<ExtArgs> | null
    /**
     * Filter which Assignment to delete.
     */
    where: AssignmentWhereUniqueInput
  }


  /**
   * Assignment deleteMany
   */
  export type AssignmentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Assignments to delete
     */
    where?: AssignmentWhereInput
  }


  /**
   * Assignment.mark
   */
  export type Assignment$markArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mark
     */
    select?: MarkSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MarkInclude<ExtArgs> | null
    where?: MarkWhereInput
    orderBy?: MarkOrderByWithRelationInput | MarkOrderByWithRelationInput[]
    cursor?: MarkWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MarkScalarFieldEnum | MarkScalarFieldEnum[]
  }


  /**
   * Assignment without action
   */
  export type AssignmentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assignment
     */
    select?: AssignmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AssignmentInclude<ExtArgs> | null
  }



  /**
   * Model Student
   */

  export type AggregateStudent = {
    _count: StudentCountAggregateOutputType | null
    _min: StudentMinAggregateOutputType | null
    _max: StudentMaxAggregateOutputType | null
  }

  export type StudentMinAggregateOutputType = {
    id: string | null
    name: string | null
    password: string | null
    email: string | null
  }

  export type StudentMaxAggregateOutputType = {
    id: string | null
    name: string | null
    password: string | null
    email: string | null
  }

  export type StudentCountAggregateOutputType = {
    id: number
    name: number
    password: number
    email: number
    _all: number
  }


  export type StudentMinAggregateInputType = {
    id?: true
    name?: true
    password?: true
    email?: true
  }

  export type StudentMaxAggregateInputType = {
    id?: true
    name?: true
    password?: true
    email?: true
  }

  export type StudentCountAggregateInputType = {
    id?: true
    name?: true
    password?: true
    email?: true
    _all?: true
  }

  export type StudentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Student to aggregate.
     */
    where?: StudentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Students to fetch.
     */
    orderBy?: StudentOrderByWithRelationInput | StudentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StudentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Students from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Students.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Students
    **/
    _count?: true | StudentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StudentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StudentMaxAggregateInputType
  }

  export type GetStudentAggregateType<T extends StudentAggregateArgs> = {
        [P in keyof T & keyof AggregateStudent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStudent[P]>
      : GetScalarType<T[P], AggregateStudent[P]>
  }




  export type StudentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StudentWhereInput
    orderBy?: StudentOrderByWithAggregationInput | StudentOrderByWithAggregationInput[]
    by: StudentScalarFieldEnum[] | StudentScalarFieldEnum
    having?: StudentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StudentCountAggregateInputType | true
    _min?: StudentMinAggregateInputType
    _max?: StudentMaxAggregateInputType
  }

  export type StudentGroupByOutputType = {
    id: string
    name: string
    password: string
    email: string | null
    _count: StudentCountAggregateOutputType | null
    _min: StudentMinAggregateOutputType | null
    _max: StudentMaxAggregateOutputType | null
  }

  type GetStudentGroupByPayload<T extends StudentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StudentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StudentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StudentGroupByOutputType[P]>
            : GetScalarType<T[P], StudentGroupByOutputType[P]>
        }
      >
    >


  export type StudentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    password?: boolean
    email?: boolean
    courses?: boolean | Student$coursesArgs<ExtArgs>
    marks?: boolean | Student$marksArgs<ExtArgs>
    _count?: boolean | StudentCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["student"]>

  export type StudentSelectScalar = {
    id?: boolean
    name?: boolean
    password?: boolean
    email?: boolean
  }

  export type StudentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    courses?: boolean | Student$coursesArgs<ExtArgs>
    marks?: boolean | Student$marksArgs<ExtArgs>
    _count?: boolean | StudentCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $StudentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Student"
    objects: {
      courses: Prisma.$CoursePayload<ExtArgs>[]
      marks: Prisma.$MarkPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      password: string
      email: string | null
    }, ExtArgs["result"]["student"]>
    composites: {}
  }


  type StudentGetPayload<S extends boolean | null | undefined | StudentDefaultArgs> = $Result.GetResult<Prisma.$StudentPayload, S>

  type StudentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<StudentFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: StudentCountAggregateInputType | true
    }

  export interface StudentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Student'], meta: { name: 'Student' } }
    /**
     * Find zero or one Student that matches the filter.
     * @param {StudentFindUniqueArgs} args - Arguments to find a Student
     * @example
     * // Get one Student
     * const student = await prisma.student.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends StudentFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, StudentFindUniqueArgs<ExtArgs>>
    ): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Student that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {StudentFindUniqueOrThrowArgs} args - Arguments to find a Student
     * @example
     * // Get one Student
     * const student = await prisma.student.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends StudentFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, StudentFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Student that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentFindFirstArgs} args - Arguments to find a Student
     * @example
     * // Get one Student
     * const student = await prisma.student.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends StudentFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, StudentFindFirstArgs<ExtArgs>>
    ): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Student that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentFindFirstOrThrowArgs} args - Arguments to find a Student
     * @example
     * // Get one Student
     * const student = await prisma.student.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends StudentFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, StudentFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Students that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Students
     * const students = await prisma.student.findMany()
     * 
     * // Get first 10 Students
     * const students = await prisma.student.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const studentWithIdOnly = await prisma.student.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends StudentFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, StudentFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Student.
     * @param {StudentCreateArgs} args - Arguments to create a Student.
     * @example
     * // Create one Student
     * const Student = await prisma.student.create({
     *   data: {
     *     // ... data to create a Student
     *   }
     * })
     * 
    **/
    create<T extends StudentCreateArgs<ExtArgs>>(
      args: SelectSubset<T, StudentCreateArgs<ExtArgs>>
    ): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Students.
     *     @param {StudentCreateManyArgs} args - Arguments to create many Students.
     *     @example
     *     // Create many Students
     *     const student = await prisma.student.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends StudentCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, StudentCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Student.
     * @param {StudentDeleteArgs} args - Arguments to delete one Student.
     * @example
     * // Delete one Student
     * const Student = await prisma.student.delete({
     *   where: {
     *     // ... filter to delete one Student
     *   }
     * })
     * 
    **/
    delete<T extends StudentDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, StudentDeleteArgs<ExtArgs>>
    ): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Student.
     * @param {StudentUpdateArgs} args - Arguments to update one Student.
     * @example
     * // Update one Student
     * const student = await prisma.student.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends StudentUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, StudentUpdateArgs<ExtArgs>>
    ): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Students.
     * @param {StudentDeleteManyArgs} args - Arguments to filter Students to delete.
     * @example
     * // Delete a few Students
     * const { count } = await prisma.student.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends StudentDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, StudentDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Students.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Students
     * const student = await prisma.student.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends StudentUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, StudentUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Student.
     * @param {StudentUpsertArgs} args - Arguments to update or create a Student.
     * @example
     * // Update or create a Student
     * const student = await prisma.student.upsert({
     *   create: {
     *     // ... data to create a Student
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Student we want to update
     *   }
     * })
    **/
    upsert<T extends StudentUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, StudentUpsertArgs<ExtArgs>>
    ): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Students.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentCountArgs} args - Arguments to filter Students to count.
     * @example
     * // Count the number of Students
     * const count = await prisma.student.count({
     *   where: {
     *     // ... the filter for the Students we want to count
     *   }
     * })
    **/
    count<T extends StudentCountArgs>(
      args?: Subset<T, StudentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StudentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Student.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends StudentAggregateArgs>(args: Subset<T, StudentAggregateArgs>): Prisma.PrismaPromise<GetStudentAggregateType<T>>

    /**
     * Group by Student.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentGroupByArgs} args - Group by arguments.
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
      T extends StudentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StudentGroupByArgs['orderBy'] }
        : { orderBy?: StudentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, StudentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStudentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Student model
   */
  readonly fields: StudentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Student.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StudentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    courses<T extends Student$coursesArgs<ExtArgs> = {}>(args?: Subset<T, Student$coursesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, 'findMany'> | Null>;

    marks<T extends Student$marksArgs<ExtArgs> = {}>(args?: Subset<T, Student$marksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MarkPayload<ExtArgs>, T, 'findMany'> | Null>;

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
   * Fields of the Student model
   */ 
  interface StudentFieldRefs {
    readonly id: FieldRef<"Student", 'String'>
    readonly name: FieldRef<"Student", 'String'>
    readonly password: FieldRef<"Student", 'String'>
    readonly email: FieldRef<"Student", 'String'>
  }
    

  // Custom InputTypes

  /**
   * Student findUnique
   */
  export type StudentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * Filter, which Student to fetch.
     */
    where: StudentWhereUniqueInput
  }


  /**
   * Student findUniqueOrThrow
   */
  export type StudentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * Filter, which Student to fetch.
     */
    where: StudentWhereUniqueInput
  }


  /**
   * Student findFirst
   */
  export type StudentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * Filter, which Student to fetch.
     */
    where?: StudentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Students to fetch.
     */
    orderBy?: StudentOrderByWithRelationInput | StudentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Students.
     */
    cursor?: StudentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Students from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Students.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Students.
     */
    distinct?: StudentScalarFieldEnum | StudentScalarFieldEnum[]
  }


  /**
   * Student findFirstOrThrow
   */
  export type StudentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * Filter, which Student to fetch.
     */
    where?: StudentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Students to fetch.
     */
    orderBy?: StudentOrderByWithRelationInput | StudentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Students.
     */
    cursor?: StudentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Students from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Students.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Students.
     */
    distinct?: StudentScalarFieldEnum | StudentScalarFieldEnum[]
  }


  /**
   * Student findMany
   */
  export type StudentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * Filter, which Students to fetch.
     */
    where?: StudentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Students to fetch.
     */
    orderBy?: StudentOrderByWithRelationInput | StudentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Students.
     */
    cursor?: StudentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Students from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Students.
     */
    skip?: number
    distinct?: StudentScalarFieldEnum | StudentScalarFieldEnum[]
  }


  /**
   * Student create
   */
  export type StudentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * The data needed to create a Student.
     */
    data: XOR<StudentCreateInput, StudentUncheckedCreateInput>
  }


  /**
   * Student createMany
   */
  export type StudentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Students.
     */
    data: StudentCreateManyInput | StudentCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Student update
   */
  export type StudentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * The data needed to update a Student.
     */
    data: XOR<StudentUpdateInput, StudentUncheckedUpdateInput>
    /**
     * Choose, which Student to update.
     */
    where: StudentWhereUniqueInput
  }


  /**
   * Student updateMany
   */
  export type StudentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Students.
     */
    data: XOR<StudentUpdateManyMutationInput, StudentUncheckedUpdateManyInput>
    /**
     * Filter which Students to update
     */
    where?: StudentWhereInput
  }


  /**
   * Student upsert
   */
  export type StudentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * The filter to search for the Student to update in case it exists.
     */
    where: StudentWhereUniqueInput
    /**
     * In case the Student found by the `where` argument doesn't exist, create a new Student with this data.
     */
    create: XOR<StudentCreateInput, StudentUncheckedCreateInput>
    /**
     * In case the Student was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StudentUpdateInput, StudentUncheckedUpdateInput>
  }


  /**
   * Student delete
   */
  export type StudentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * Filter which Student to delete.
     */
    where: StudentWhereUniqueInput
  }


  /**
   * Student deleteMany
   */
  export type StudentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Students to delete
     */
    where?: StudentWhereInput
  }


  /**
   * Student.courses
   */
  export type Student$coursesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CourseInclude<ExtArgs> | null
    where?: CourseWhereInput
    orderBy?: CourseOrderByWithRelationInput | CourseOrderByWithRelationInput[]
    cursor?: CourseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CourseScalarFieldEnum | CourseScalarFieldEnum[]
  }


  /**
   * Student.marks
   */
  export type Student$marksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mark
     */
    select?: MarkSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MarkInclude<ExtArgs> | null
    where?: MarkWhereInput
    orderBy?: MarkOrderByWithRelationInput | MarkOrderByWithRelationInput[]
    cursor?: MarkWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MarkScalarFieldEnum | MarkScalarFieldEnum[]
  }


  /**
   * Student without action
   */
  export type StudentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StudentInclude<ExtArgs> | null
  }



  /**
   * Model Mark
   */

  export type AggregateMark = {
    _count: MarkCountAggregateOutputType | null
    _avg: MarkAvgAggregateOutputType | null
    _sum: MarkSumAggregateOutputType | null
    _min: MarkMinAggregateOutputType | null
    _max: MarkMaxAggregateOutputType | null
  }

  export type MarkAvgAggregateOutputType = {
    assignmentNumber: number | null
    score: number | null
  }

  export type MarkSumAggregateOutputType = {
    assignmentNumber: number | null
    score: number | null
  }

  export type MarkMinAggregateOutputType = {
    assignmentNumber: number | null
    courseId: string | null
    studentId: string | null
    content: string | null
    score: number | null
  }

  export type MarkMaxAggregateOutputType = {
    assignmentNumber: number | null
    courseId: string | null
    studentId: string | null
    content: string | null
    score: number | null
  }

  export type MarkCountAggregateOutputType = {
    assignmentNumber: number
    courseId: number
    studentId: number
    content: number
    score: number
    _all: number
  }


  export type MarkAvgAggregateInputType = {
    assignmentNumber?: true
    score?: true
  }

  export type MarkSumAggregateInputType = {
    assignmentNumber?: true
    score?: true
  }

  export type MarkMinAggregateInputType = {
    assignmentNumber?: true
    courseId?: true
    studentId?: true
    content?: true
    score?: true
  }

  export type MarkMaxAggregateInputType = {
    assignmentNumber?: true
    courseId?: true
    studentId?: true
    content?: true
    score?: true
  }

  export type MarkCountAggregateInputType = {
    assignmentNumber?: true
    courseId?: true
    studentId?: true
    content?: true
    score?: true
    _all?: true
  }

  export type MarkAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Mark to aggregate.
     */
    where?: MarkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Marks to fetch.
     */
    orderBy?: MarkOrderByWithRelationInput | MarkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MarkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Marks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Marks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Marks
    **/
    _count?: true | MarkCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MarkAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MarkSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MarkMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MarkMaxAggregateInputType
  }

  export type GetMarkAggregateType<T extends MarkAggregateArgs> = {
        [P in keyof T & keyof AggregateMark]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMark[P]>
      : GetScalarType<T[P], AggregateMark[P]>
  }




  export type MarkGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MarkWhereInput
    orderBy?: MarkOrderByWithAggregationInput | MarkOrderByWithAggregationInput[]
    by: MarkScalarFieldEnum[] | MarkScalarFieldEnum
    having?: MarkScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MarkCountAggregateInputType | true
    _avg?: MarkAvgAggregateInputType
    _sum?: MarkSumAggregateInputType
    _min?: MarkMinAggregateInputType
    _max?: MarkMaxAggregateInputType
  }

  export type MarkGroupByOutputType = {
    assignmentNumber: number
    courseId: string
    studentId: string
    content: string
    score: number | null
    _count: MarkCountAggregateOutputType | null
    _avg: MarkAvgAggregateOutputType | null
    _sum: MarkSumAggregateOutputType | null
    _min: MarkMinAggregateOutputType | null
    _max: MarkMaxAggregateOutputType | null
  }

  type GetMarkGroupByPayload<T extends MarkGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MarkGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MarkGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MarkGroupByOutputType[P]>
            : GetScalarType<T[P], MarkGroupByOutputType[P]>
        }
      >
    >


  export type MarkSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    assignmentNumber?: boolean
    courseId?: boolean
    studentId?: boolean
    content?: boolean
    score?: boolean
    assignment?: boolean | AssignmentDefaultArgs<ExtArgs>
    student?: boolean | StudentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["mark"]>

  export type MarkSelectScalar = {
    assignmentNumber?: boolean
    courseId?: boolean
    studentId?: boolean
    content?: boolean
    score?: boolean
  }

  export type MarkInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    assignment?: boolean | AssignmentDefaultArgs<ExtArgs>
    student?: boolean | StudentDefaultArgs<ExtArgs>
  }


  export type $MarkPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Mark"
    objects: {
      assignment: Prisma.$AssignmentPayload<ExtArgs>
      student: Prisma.$StudentPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      assignmentNumber: number
      courseId: string
      studentId: string
      content: string
      score: number | null
    }, ExtArgs["result"]["mark"]>
    composites: {}
  }


  type MarkGetPayload<S extends boolean | null | undefined | MarkDefaultArgs> = $Result.GetResult<Prisma.$MarkPayload, S>

  type MarkCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<MarkFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: MarkCountAggregateInputType | true
    }

  export interface MarkDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Mark'], meta: { name: 'Mark' } }
    /**
     * Find zero or one Mark that matches the filter.
     * @param {MarkFindUniqueArgs} args - Arguments to find a Mark
     * @example
     * // Get one Mark
     * const mark = await prisma.mark.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends MarkFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, MarkFindUniqueArgs<ExtArgs>>
    ): Prisma__MarkClient<$Result.GetResult<Prisma.$MarkPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Mark that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {MarkFindUniqueOrThrowArgs} args - Arguments to find a Mark
     * @example
     * // Get one Mark
     * const mark = await prisma.mark.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends MarkFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, MarkFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__MarkClient<$Result.GetResult<Prisma.$MarkPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Mark that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MarkFindFirstArgs} args - Arguments to find a Mark
     * @example
     * // Get one Mark
     * const mark = await prisma.mark.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends MarkFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, MarkFindFirstArgs<ExtArgs>>
    ): Prisma__MarkClient<$Result.GetResult<Prisma.$MarkPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Mark that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MarkFindFirstOrThrowArgs} args - Arguments to find a Mark
     * @example
     * // Get one Mark
     * const mark = await prisma.mark.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends MarkFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, MarkFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__MarkClient<$Result.GetResult<Prisma.$MarkPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Marks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MarkFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Marks
     * const marks = await prisma.mark.findMany()
     * 
     * // Get first 10 Marks
     * const marks = await prisma.mark.findMany({ take: 10 })
     * 
     * // Only select the `assignmentNumber`
     * const markWithAssignmentNumberOnly = await prisma.mark.findMany({ select: { assignmentNumber: true } })
     * 
    **/
    findMany<T extends MarkFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, MarkFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MarkPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Mark.
     * @param {MarkCreateArgs} args - Arguments to create a Mark.
     * @example
     * // Create one Mark
     * const Mark = await prisma.mark.create({
     *   data: {
     *     // ... data to create a Mark
     *   }
     * })
     * 
    **/
    create<T extends MarkCreateArgs<ExtArgs>>(
      args: SelectSubset<T, MarkCreateArgs<ExtArgs>>
    ): Prisma__MarkClient<$Result.GetResult<Prisma.$MarkPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Marks.
     *     @param {MarkCreateManyArgs} args - Arguments to create many Marks.
     *     @example
     *     // Create many Marks
     *     const mark = await prisma.mark.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends MarkCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, MarkCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Mark.
     * @param {MarkDeleteArgs} args - Arguments to delete one Mark.
     * @example
     * // Delete one Mark
     * const Mark = await prisma.mark.delete({
     *   where: {
     *     // ... filter to delete one Mark
     *   }
     * })
     * 
    **/
    delete<T extends MarkDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, MarkDeleteArgs<ExtArgs>>
    ): Prisma__MarkClient<$Result.GetResult<Prisma.$MarkPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Mark.
     * @param {MarkUpdateArgs} args - Arguments to update one Mark.
     * @example
     * // Update one Mark
     * const mark = await prisma.mark.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends MarkUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, MarkUpdateArgs<ExtArgs>>
    ): Prisma__MarkClient<$Result.GetResult<Prisma.$MarkPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Marks.
     * @param {MarkDeleteManyArgs} args - Arguments to filter Marks to delete.
     * @example
     * // Delete a few Marks
     * const { count } = await prisma.mark.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends MarkDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, MarkDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Marks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MarkUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Marks
     * const mark = await prisma.mark.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends MarkUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, MarkUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Mark.
     * @param {MarkUpsertArgs} args - Arguments to update or create a Mark.
     * @example
     * // Update or create a Mark
     * const mark = await prisma.mark.upsert({
     *   create: {
     *     // ... data to create a Mark
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Mark we want to update
     *   }
     * })
    **/
    upsert<T extends MarkUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, MarkUpsertArgs<ExtArgs>>
    ): Prisma__MarkClient<$Result.GetResult<Prisma.$MarkPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Marks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MarkCountArgs} args - Arguments to filter Marks to count.
     * @example
     * // Count the number of Marks
     * const count = await prisma.mark.count({
     *   where: {
     *     // ... the filter for the Marks we want to count
     *   }
     * })
    **/
    count<T extends MarkCountArgs>(
      args?: Subset<T, MarkCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MarkCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Mark.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MarkAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MarkAggregateArgs>(args: Subset<T, MarkAggregateArgs>): Prisma.PrismaPromise<GetMarkAggregateType<T>>

    /**
     * Group by Mark.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MarkGroupByArgs} args - Group by arguments.
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
      T extends MarkGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MarkGroupByArgs['orderBy'] }
        : { orderBy?: MarkGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MarkGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMarkGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Mark model
   */
  readonly fields: MarkFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Mark.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MarkClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    assignment<T extends AssignmentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AssignmentDefaultArgs<ExtArgs>>): Prisma__AssignmentClient<$Result.GetResult<Prisma.$AssignmentPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    student<T extends StudentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, StudentDefaultArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

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
   * Fields of the Mark model
   */ 
  interface MarkFieldRefs {
    readonly assignmentNumber: FieldRef<"Mark", 'Int'>
    readonly courseId: FieldRef<"Mark", 'String'>
    readonly studentId: FieldRef<"Mark", 'String'>
    readonly content: FieldRef<"Mark", 'String'>
    readonly score: FieldRef<"Mark", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * Mark findUnique
   */
  export type MarkFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mark
     */
    select?: MarkSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MarkInclude<ExtArgs> | null
    /**
     * Filter, which Mark to fetch.
     */
    where: MarkWhereUniqueInput
  }


  /**
   * Mark findUniqueOrThrow
   */
  export type MarkFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mark
     */
    select?: MarkSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MarkInclude<ExtArgs> | null
    /**
     * Filter, which Mark to fetch.
     */
    where: MarkWhereUniqueInput
  }


  /**
   * Mark findFirst
   */
  export type MarkFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mark
     */
    select?: MarkSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MarkInclude<ExtArgs> | null
    /**
     * Filter, which Mark to fetch.
     */
    where?: MarkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Marks to fetch.
     */
    orderBy?: MarkOrderByWithRelationInput | MarkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Marks.
     */
    cursor?: MarkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Marks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Marks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Marks.
     */
    distinct?: MarkScalarFieldEnum | MarkScalarFieldEnum[]
  }


  /**
   * Mark findFirstOrThrow
   */
  export type MarkFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mark
     */
    select?: MarkSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MarkInclude<ExtArgs> | null
    /**
     * Filter, which Mark to fetch.
     */
    where?: MarkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Marks to fetch.
     */
    orderBy?: MarkOrderByWithRelationInput | MarkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Marks.
     */
    cursor?: MarkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Marks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Marks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Marks.
     */
    distinct?: MarkScalarFieldEnum | MarkScalarFieldEnum[]
  }


  /**
   * Mark findMany
   */
  export type MarkFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mark
     */
    select?: MarkSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MarkInclude<ExtArgs> | null
    /**
     * Filter, which Marks to fetch.
     */
    where?: MarkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Marks to fetch.
     */
    orderBy?: MarkOrderByWithRelationInput | MarkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Marks.
     */
    cursor?: MarkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Marks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Marks.
     */
    skip?: number
    distinct?: MarkScalarFieldEnum | MarkScalarFieldEnum[]
  }


  /**
   * Mark create
   */
  export type MarkCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mark
     */
    select?: MarkSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MarkInclude<ExtArgs> | null
    /**
     * The data needed to create a Mark.
     */
    data: XOR<MarkCreateInput, MarkUncheckedCreateInput>
  }


  /**
   * Mark createMany
   */
  export type MarkCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Marks.
     */
    data: MarkCreateManyInput | MarkCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Mark update
   */
  export type MarkUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mark
     */
    select?: MarkSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MarkInclude<ExtArgs> | null
    /**
     * The data needed to update a Mark.
     */
    data: XOR<MarkUpdateInput, MarkUncheckedUpdateInput>
    /**
     * Choose, which Mark to update.
     */
    where: MarkWhereUniqueInput
  }


  /**
   * Mark updateMany
   */
  export type MarkUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Marks.
     */
    data: XOR<MarkUpdateManyMutationInput, MarkUncheckedUpdateManyInput>
    /**
     * Filter which Marks to update
     */
    where?: MarkWhereInput
  }


  /**
   * Mark upsert
   */
  export type MarkUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mark
     */
    select?: MarkSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MarkInclude<ExtArgs> | null
    /**
     * The filter to search for the Mark to update in case it exists.
     */
    where: MarkWhereUniqueInput
    /**
     * In case the Mark found by the `where` argument doesn't exist, create a new Mark with this data.
     */
    create: XOR<MarkCreateInput, MarkUncheckedCreateInput>
    /**
     * In case the Mark was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MarkUpdateInput, MarkUncheckedUpdateInput>
  }


  /**
   * Mark delete
   */
  export type MarkDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mark
     */
    select?: MarkSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MarkInclude<ExtArgs> | null
    /**
     * Filter which Mark to delete.
     */
    where: MarkWhereUniqueInput
  }


  /**
   * Mark deleteMany
   */
  export type MarkDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Marks to delete
     */
    where?: MarkWhereInput
  }


  /**
   * Mark without action
   */
  export type MarkDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mark
     */
    select?: MarkSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MarkInclude<ExtArgs> | null
  }



  /**
   * Model Timeline
   */

  export type AggregateTimeline = {
    _count: TimelineCountAggregateOutputType | null
    _min: TimelineMinAggregateOutputType | null
    _max: TimelineMaxAggregateOutputType | null
  }

  export type TimelineMinAggregateOutputType = {
    courseId: string | null
    createTime: Date | null
    endTime: Date | null
    examTime: Date | null
  }

  export type TimelineMaxAggregateOutputType = {
    courseId: string | null
    createTime: Date | null
    endTime: Date | null
    examTime: Date | null
  }

  export type TimelineCountAggregateOutputType = {
    courseId: number
    createTime: number
    endTime: number
    examTime: number
    _all: number
  }


  export type TimelineMinAggregateInputType = {
    courseId?: true
    createTime?: true
    endTime?: true
    examTime?: true
  }

  export type TimelineMaxAggregateInputType = {
    courseId?: true
    createTime?: true
    endTime?: true
    examTime?: true
  }

  export type TimelineCountAggregateInputType = {
    courseId?: true
    createTime?: true
    endTime?: true
    examTime?: true
    _all?: true
  }

  export type TimelineAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Timeline to aggregate.
     */
    where?: TimelineWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Timelines to fetch.
     */
    orderBy?: TimelineOrderByWithRelationInput | TimelineOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TimelineWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Timelines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Timelines.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Timelines
    **/
    _count?: true | TimelineCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TimelineMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TimelineMaxAggregateInputType
  }

  export type GetTimelineAggregateType<T extends TimelineAggregateArgs> = {
        [P in keyof T & keyof AggregateTimeline]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTimeline[P]>
      : GetScalarType<T[P], AggregateTimeline[P]>
  }




  export type TimelineGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TimelineWhereInput
    orderBy?: TimelineOrderByWithAggregationInput | TimelineOrderByWithAggregationInput[]
    by: TimelineScalarFieldEnum[] | TimelineScalarFieldEnum
    having?: TimelineScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TimelineCountAggregateInputType | true
    _min?: TimelineMinAggregateInputType
    _max?: TimelineMaxAggregateInputType
  }

  export type TimelineGroupByOutputType = {
    courseId: string
    createTime: Date
    endTime: Date
    examTime: Date | null
    _count: TimelineCountAggregateOutputType | null
    _min: TimelineMinAggregateOutputType | null
    _max: TimelineMaxAggregateOutputType | null
  }

  type GetTimelineGroupByPayload<T extends TimelineGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TimelineGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TimelineGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TimelineGroupByOutputType[P]>
            : GetScalarType<T[P], TimelineGroupByOutputType[P]>
        }
      >
    >


  export type TimelineSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    courseId?: boolean
    createTime?: boolean
    endTime?: boolean
    examTime?: boolean
    course?: boolean | CourseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["timeline"]>

  export type TimelineSelectScalar = {
    courseId?: boolean
    createTime?: boolean
    endTime?: boolean
    examTime?: boolean
  }

  export type TimelineInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    course?: boolean | CourseDefaultArgs<ExtArgs>
  }


  export type $TimelinePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Timeline"
    objects: {
      course: Prisma.$CoursePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      courseId: string
      createTime: Date
      endTime: Date
      examTime: Date | null
    }, ExtArgs["result"]["timeline"]>
    composites: {}
  }


  type TimelineGetPayload<S extends boolean | null | undefined | TimelineDefaultArgs> = $Result.GetResult<Prisma.$TimelinePayload, S>

  type TimelineCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<TimelineFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: TimelineCountAggregateInputType | true
    }

  export interface TimelineDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Timeline'], meta: { name: 'Timeline' } }
    /**
     * Find zero or one Timeline that matches the filter.
     * @param {TimelineFindUniqueArgs} args - Arguments to find a Timeline
     * @example
     * // Get one Timeline
     * const timeline = await prisma.timeline.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends TimelineFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, TimelineFindUniqueArgs<ExtArgs>>
    ): Prisma__TimelineClient<$Result.GetResult<Prisma.$TimelinePayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Timeline that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {TimelineFindUniqueOrThrowArgs} args - Arguments to find a Timeline
     * @example
     * // Get one Timeline
     * const timeline = await prisma.timeline.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends TimelineFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, TimelineFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__TimelineClient<$Result.GetResult<Prisma.$TimelinePayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Timeline that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TimelineFindFirstArgs} args - Arguments to find a Timeline
     * @example
     * // Get one Timeline
     * const timeline = await prisma.timeline.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends TimelineFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, TimelineFindFirstArgs<ExtArgs>>
    ): Prisma__TimelineClient<$Result.GetResult<Prisma.$TimelinePayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Timeline that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TimelineFindFirstOrThrowArgs} args - Arguments to find a Timeline
     * @example
     * // Get one Timeline
     * const timeline = await prisma.timeline.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends TimelineFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, TimelineFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__TimelineClient<$Result.GetResult<Prisma.$TimelinePayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Timelines that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TimelineFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Timelines
     * const timelines = await prisma.timeline.findMany()
     * 
     * // Get first 10 Timelines
     * const timelines = await prisma.timeline.findMany({ take: 10 })
     * 
     * // Only select the `courseId`
     * const timelineWithCourseIdOnly = await prisma.timeline.findMany({ select: { courseId: true } })
     * 
    **/
    findMany<T extends TimelineFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TimelineFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TimelinePayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Timeline.
     * @param {TimelineCreateArgs} args - Arguments to create a Timeline.
     * @example
     * // Create one Timeline
     * const Timeline = await prisma.timeline.create({
     *   data: {
     *     // ... data to create a Timeline
     *   }
     * })
     * 
    **/
    create<T extends TimelineCreateArgs<ExtArgs>>(
      args: SelectSubset<T, TimelineCreateArgs<ExtArgs>>
    ): Prisma__TimelineClient<$Result.GetResult<Prisma.$TimelinePayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Timelines.
     *     @param {TimelineCreateManyArgs} args - Arguments to create many Timelines.
     *     @example
     *     // Create many Timelines
     *     const timeline = await prisma.timeline.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends TimelineCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TimelineCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Timeline.
     * @param {TimelineDeleteArgs} args - Arguments to delete one Timeline.
     * @example
     * // Delete one Timeline
     * const Timeline = await prisma.timeline.delete({
     *   where: {
     *     // ... filter to delete one Timeline
     *   }
     * })
     * 
    **/
    delete<T extends TimelineDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, TimelineDeleteArgs<ExtArgs>>
    ): Prisma__TimelineClient<$Result.GetResult<Prisma.$TimelinePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Timeline.
     * @param {TimelineUpdateArgs} args - Arguments to update one Timeline.
     * @example
     * // Update one Timeline
     * const timeline = await prisma.timeline.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends TimelineUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, TimelineUpdateArgs<ExtArgs>>
    ): Prisma__TimelineClient<$Result.GetResult<Prisma.$TimelinePayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Timelines.
     * @param {TimelineDeleteManyArgs} args - Arguments to filter Timelines to delete.
     * @example
     * // Delete a few Timelines
     * const { count } = await prisma.timeline.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends TimelineDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TimelineDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Timelines.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TimelineUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Timelines
     * const timeline = await prisma.timeline.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends TimelineUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, TimelineUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Timeline.
     * @param {TimelineUpsertArgs} args - Arguments to update or create a Timeline.
     * @example
     * // Update or create a Timeline
     * const timeline = await prisma.timeline.upsert({
     *   create: {
     *     // ... data to create a Timeline
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Timeline we want to update
     *   }
     * })
    **/
    upsert<T extends TimelineUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, TimelineUpsertArgs<ExtArgs>>
    ): Prisma__TimelineClient<$Result.GetResult<Prisma.$TimelinePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Timelines.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TimelineCountArgs} args - Arguments to filter Timelines to count.
     * @example
     * // Count the number of Timelines
     * const count = await prisma.timeline.count({
     *   where: {
     *     // ... the filter for the Timelines we want to count
     *   }
     * })
    **/
    count<T extends TimelineCountArgs>(
      args?: Subset<T, TimelineCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TimelineCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Timeline.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TimelineAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TimelineAggregateArgs>(args: Subset<T, TimelineAggregateArgs>): Prisma.PrismaPromise<GetTimelineAggregateType<T>>

    /**
     * Group by Timeline.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TimelineGroupByArgs} args - Group by arguments.
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
      T extends TimelineGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TimelineGroupByArgs['orderBy'] }
        : { orderBy?: TimelineGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TimelineGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTimelineGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Timeline model
   */
  readonly fields: TimelineFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Timeline.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TimelineClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    course<T extends CourseDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CourseDefaultArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

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
   * Fields of the Timeline model
   */ 
  interface TimelineFieldRefs {
    readonly courseId: FieldRef<"Timeline", 'String'>
    readonly createTime: FieldRef<"Timeline", 'DateTime'>
    readonly endTime: FieldRef<"Timeline", 'DateTime'>
    readonly examTime: FieldRef<"Timeline", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * Timeline findUnique
   */
  export type TimelineFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Timeline
     */
    select?: TimelineSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TimelineInclude<ExtArgs> | null
    /**
     * Filter, which Timeline to fetch.
     */
    where: TimelineWhereUniqueInput
  }


  /**
   * Timeline findUniqueOrThrow
   */
  export type TimelineFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Timeline
     */
    select?: TimelineSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TimelineInclude<ExtArgs> | null
    /**
     * Filter, which Timeline to fetch.
     */
    where: TimelineWhereUniqueInput
  }


  /**
   * Timeline findFirst
   */
  export type TimelineFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Timeline
     */
    select?: TimelineSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TimelineInclude<ExtArgs> | null
    /**
     * Filter, which Timeline to fetch.
     */
    where?: TimelineWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Timelines to fetch.
     */
    orderBy?: TimelineOrderByWithRelationInput | TimelineOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Timelines.
     */
    cursor?: TimelineWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Timelines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Timelines.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Timelines.
     */
    distinct?: TimelineScalarFieldEnum | TimelineScalarFieldEnum[]
  }


  /**
   * Timeline findFirstOrThrow
   */
  export type TimelineFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Timeline
     */
    select?: TimelineSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TimelineInclude<ExtArgs> | null
    /**
     * Filter, which Timeline to fetch.
     */
    where?: TimelineWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Timelines to fetch.
     */
    orderBy?: TimelineOrderByWithRelationInput | TimelineOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Timelines.
     */
    cursor?: TimelineWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Timelines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Timelines.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Timelines.
     */
    distinct?: TimelineScalarFieldEnum | TimelineScalarFieldEnum[]
  }


  /**
   * Timeline findMany
   */
  export type TimelineFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Timeline
     */
    select?: TimelineSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TimelineInclude<ExtArgs> | null
    /**
     * Filter, which Timelines to fetch.
     */
    where?: TimelineWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Timelines to fetch.
     */
    orderBy?: TimelineOrderByWithRelationInput | TimelineOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Timelines.
     */
    cursor?: TimelineWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Timelines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Timelines.
     */
    skip?: number
    distinct?: TimelineScalarFieldEnum | TimelineScalarFieldEnum[]
  }


  /**
   * Timeline create
   */
  export type TimelineCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Timeline
     */
    select?: TimelineSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TimelineInclude<ExtArgs> | null
    /**
     * The data needed to create a Timeline.
     */
    data: XOR<TimelineCreateInput, TimelineUncheckedCreateInput>
  }


  /**
   * Timeline createMany
   */
  export type TimelineCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Timelines.
     */
    data: TimelineCreateManyInput | TimelineCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Timeline update
   */
  export type TimelineUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Timeline
     */
    select?: TimelineSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TimelineInclude<ExtArgs> | null
    /**
     * The data needed to update a Timeline.
     */
    data: XOR<TimelineUpdateInput, TimelineUncheckedUpdateInput>
    /**
     * Choose, which Timeline to update.
     */
    where: TimelineWhereUniqueInput
  }


  /**
   * Timeline updateMany
   */
  export type TimelineUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Timelines.
     */
    data: XOR<TimelineUpdateManyMutationInput, TimelineUncheckedUpdateManyInput>
    /**
     * Filter which Timelines to update
     */
    where?: TimelineWhereInput
  }


  /**
   * Timeline upsert
   */
  export type TimelineUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Timeline
     */
    select?: TimelineSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TimelineInclude<ExtArgs> | null
    /**
     * The filter to search for the Timeline to update in case it exists.
     */
    where: TimelineWhereUniqueInput
    /**
     * In case the Timeline found by the `where` argument doesn't exist, create a new Timeline with this data.
     */
    create: XOR<TimelineCreateInput, TimelineUncheckedCreateInput>
    /**
     * In case the Timeline was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TimelineUpdateInput, TimelineUncheckedUpdateInput>
  }


  /**
   * Timeline delete
   */
  export type TimelineDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Timeline
     */
    select?: TimelineSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TimelineInclude<ExtArgs> | null
    /**
     * Filter which Timeline to delete.
     */
    where: TimelineWhereUniqueInput
  }


  /**
   * Timeline deleteMany
   */
  export type TimelineDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Timelines to delete
     */
    where?: TimelineWhereInput
  }


  /**
   * Timeline without action
   */
  export type TimelineDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Timeline
     */
    select?: TimelineSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TimelineInclude<ExtArgs> | null
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


  export const CourseScalarFieldEnum: {
    id: 'id',
    name: 'name',
    instId: 'instId',
    courseHours: 'courseHours',
    courseIntro: 'courseIntro'
  };

  export type CourseScalarFieldEnum = (typeof CourseScalarFieldEnum)[keyof typeof CourseScalarFieldEnum]


  export const InstructorScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type InstructorScalarFieldEnum = (typeof InstructorScalarFieldEnum)[keyof typeof InstructorScalarFieldEnum]


  export const AssignmentScalarFieldEnum: {
    number: 'number',
    title: 'title',
    deadline: 'deadline',
    courseId: 'courseId'
  };

  export type AssignmentScalarFieldEnum = (typeof AssignmentScalarFieldEnum)[keyof typeof AssignmentScalarFieldEnum]


  export const StudentScalarFieldEnum: {
    id: 'id',
    name: 'name',
    password: 'password',
    email: 'email'
  };

  export type StudentScalarFieldEnum = (typeof StudentScalarFieldEnum)[keyof typeof StudentScalarFieldEnum]


  export const MarkScalarFieldEnum: {
    assignmentNumber: 'assignmentNumber',
    courseId: 'courseId',
    studentId: 'studentId',
    content: 'content',
    score: 'score'
  };

  export type MarkScalarFieldEnum = (typeof MarkScalarFieldEnum)[keyof typeof MarkScalarFieldEnum]


  export const TimelineScalarFieldEnum: {
    courseId: 'courseId',
    createTime: 'createTime',
    endTime: 'endTime',
    examTime: 'examTime'
  };

  export type TimelineScalarFieldEnum = (typeof TimelineScalarFieldEnum)[keyof typeof TimelineScalarFieldEnum]


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
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type CourseWhereInput = {
    AND?: CourseWhereInput | CourseWhereInput[]
    OR?: CourseWhereInput[]
    NOT?: CourseWhereInput | CourseWhereInput[]
    id?: StringFilter<"Course"> | string
    name?: StringFilter<"Course"> | string
    instId?: StringFilter<"Course"> | string
    courseHours?: IntFilter<"Course"> | number
    courseIntro?: StringNullableFilter<"Course"> | string | null
    instructor?: XOR<InstructorRelationFilter, InstructorWhereInput>
    assignments?: AssignmentListRelationFilter
    students?: StudentListRelationFilter
    timeline?: XOR<TimelineNullableRelationFilter, TimelineWhereInput> | null
  }

  export type CourseOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    instId?: SortOrder
    courseHours?: SortOrder
    courseIntro?: SortOrderInput | SortOrder
    instructor?: InstructorOrderByWithRelationInput
    assignments?: AssignmentOrderByRelationAggregateInput
    students?: StudentOrderByRelationAggregateInput
    timeline?: TimelineOrderByWithRelationInput
  }

  export type CourseWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CourseWhereInput | CourseWhereInput[]
    OR?: CourseWhereInput[]
    NOT?: CourseWhereInput | CourseWhereInput[]
    name?: StringFilter<"Course"> | string
    instId?: StringFilter<"Course"> | string
    courseHours?: IntFilter<"Course"> | number
    courseIntro?: StringNullableFilter<"Course"> | string | null
    instructor?: XOR<InstructorRelationFilter, InstructorWhereInput>
    assignments?: AssignmentListRelationFilter
    students?: StudentListRelationFilter
    timeline?: XOR<TimelineNullableRelationFilter, TimelineWhereInput> | null
  }, "id">

  export type CourseOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    instId?: SortOrder
    courseHours?: SortOrder
    courseIntro?: SortOrderInput | SortOrder
    _count?: CourseCountOrderByAggregateInput
    _avg?: CourseAvgOrderByAggregateInput
    _max?: CourseMaxOrderByAggregateInput
    _min?: CourseMinOrderByAggregateInput
    _sum?: CourseSumOrderByAggregateInput
  }

  export type CourseScalarWhereWithAggregatesInput = {
    AND?: CourseScalarWhereWithAggregatesInput | CourseScalarWhereWithAggregatesInput[]
    OR?: CourseScalarWhereWithAggregatesInput[]
    NOT?: CourseScalarWhereWithAggregatesInput | CourseScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Course"> | string
    name?: StringWithAggregatesFilter<"Course"> | string
    instId?: StringWithAggregatesFilter<"Course"> | string
    courseHours?: IntWithAggregatesFilter<"Course"> | number
    courseIntro?: StringNullableWithAggregatesFilter<"Course"> | string | null
  }

  export type InstructorWhereInput = {
    AND?: InstructorWhereInput | InstructorWhereInput[]
    OR?: InstructorWhereInput[]
    NOT?: InstructorWhereInput | InstructorWhereInput[]
    id?: StringFilter<"Instructor"> | string
    name?: StringFilter<"Instructor"> | string
    courses?: CourseListRelationFilter
  }

  export type InstructorOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    courses?: CourseOrderByRelationAggregateInput
  }

  export type InstructorWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: InstructorWhereInput | InstructorWhereInput[]
    OR?: InstructorWhereInput[]
    NOT?: InstructorWhereInput | InstructorWhereInput[]
    name?: StringFilter<"Instructor"> | string
    courses?: CourseListRelationFilter
  }, "id">

  export type InstructorOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: InstructorCountOrderByAggregateInput
    _max?: InstructorMaxOrderByAggregateInput
    _min?: InstructorMinOrderByAggregateInput
  }

  export type InstructorScalarWhereWithAggregatesInput = {
    AND?: InstructorScalarWhereWithAggregatesInput | InstructorScalarWhereWithAggregatesInput[]
    OR?: InstructorScalarWhereWithAggregatesInput[]
    NOT?: InstructorScalarWhereWithAggregatesInput | InstructorScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Instructor"> | string
    name?: StringWithAggregatesFilter<"Instructor"> | string
  }

  export type AssignmentWhereInput = {
    AND?: AssignmentWhereInput | AssignmentWhereInput[]
    OR?: AssignmentWhereInput[]
    NOT?: AssignmentWhereInput | AssignmentWhereInput[]
    number?: IntFilter<"Assignment"> | number
    title?: StringFilter<"Assignment"> | string
    deadline?: DateTimeFilter<"Assignment"> | Date | string
    courseId?: StringFilter<"Assignment"> | string
    course?: XOR<CourseRelationFilter, CourseWhereInput>
    mark?: MarkListRelationFilter
  }

  export type AssignmentOrderByWithRelationInput = {
    number?: SortOrder
    title?: SortOrder
    deadline?: SortOrder
    courseId?: SortOrder
    course?: CourseOrderByWithRelationInput
    mark?: MarkOrderByRelationAggregateInput
  }

  export type AssignmentWhereUniqueInput = Prisma.AtLeast<{
    number_courseId?: AssignmentNumberCourseIdCompoundUniqueInput
    AND?: AssignmentWhereInput | AssignmentWhereInput[]
    OR?: AssignmentWhereInput[]
    NOT?: AssignmentWhereInput | AssignmentWhereInput[]
    number?: IntFilter<"Assignment"> | number
    title?: StringFilter<"Assignment"> | string
    deadline?: DateTimeFilter<"Assignment"> | Date | string
    courseId?: StringFilter<"Assignment"> | string
    course?: XOR<CourseRelationFilter, CourseWhereInput>
    mark?: MarkListRelationFilter
  }, "number_courseId">

  export type AssignmentOrderByWithAggregationInput = {
    number?: SortOrder
    title?: SortOrder
    deadline?: SortOrder
    courseId?: SortOrder
    _count?: AssignmentCountOrderByAggregateInput
    _avg?: AssignmentAvgOrderByAggregateInput
    _max?: AssignmentMaxOrderByAggregateInput
    _min?: AssignmentMinOrderByAggregateInput
    _sum?: AssignmentSumOrderByAggregateInput
  }

  export type AssignmentScalarWhereWithAggregatesInput = {
    AND?: AssignmentScalarWhereWithAggregatesInput | AssignmentScalarWhereWithAggregatesInput[]
    OR?: AssignmentScalarWhereWithAggregatesInput[]
    NOT?: AssignmentScalarWhereWithAggregatesInput | AssignmentScalarWhereWithAggregatesInput[]
    number?: IntWithAggregatesFilter<"Assignment"> | number
    title?: StringWithAggregatesFilter<"Assignment"> | string
    deadline?: DateTimeWithAggregatesFilter<"Assignment"> | Date | string
    courseId?: StringWithAggregatesFilter<"Assignment"> | string
  }

  export type StudentWhereInput = {
    AND?: StudentWhereInput | StudentWhereInput[]
    OR?: StudentWhereInput[]
    NOT?: StudentWhereInput | StudentWhereInput[]
    id?: StringFilter<"Student"> | string
    name?: StringFilter<"Student"> | string
    password?: StringFilter<"Student"> | string
    email?: StringNullableFilter<"Student"> | string | null
    courses?: CourseListRelationFilter
    marks?: MarkListRelationFilter
  }

  export type StudentOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    password?: SortOrder
    email?: SortOrderInput | SortOrder
    courses?: CourseOrderByRelationAggregateInput
    marks?: MarkOrderByRelationAggregateInput
  }

  export type StudentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: StudentWhereInput | StudentWhereInput[]
    OR?: StudentWhereInput[]
    NOT?: StudentWhereInput | StudentWhereInput[]
    name?: StringFilter<"Student"> | string
    password?: StringFilter<"Student"> | string
    email?: StringNullableFilter<"Student"> | string | null
    courses?: CourseListRelationFilter
    marks?: MarkListRelationFilter
  }, "id">

  export type StudentOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    password?: SortOrder
    email?: SortOrderInput | SortOrder
    _count?: StudentCountOrderByAggregateInput
    _max?: StudentMaxOrderByAggregateInput
    _min?: StudentMinOrderByAggregateInput
  }

  export type StudentScalarWhereWithAggregatesInput = {
    AND?: StudentScalarWhereWithAggregatesInput | StudentScalarWhereWithAggregatesInput[]
    OR?: StudentScalarWhereWithAggregatesInput[]
    NOT?: StudentScalarWhereWithAggregatesInput | StudentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Student"> | string
    name?: StringWithAggregatesFilter<"Student"> | string
    password?: StringWithAggregatesFilter<"Student"> | string
    email?: StringNullableWithAggregatesFilter<"Student"> | string | null
  }

  export type MarkWhereInput = {
    AND?: MarkWhereInput | MarkWhereInput[]
    OR?: MarkWhereInput[]
    NOT?: MarkWhereInput | MarkWhereInput[]
    assignmentNumber?: IntFilter<"Mark"> | number
    courseId?: StringFilter<"Mark"> | string
    studentId?: StringFilter<"Mark"> | string
    content?: StringFilter<"Mark"> | string
    score?: IntNullableFilter<"Mark"> | number | null
    assignment?: XOR<AssignmentRelationFilter, AssignmentWhereInput>
    student?: XOR<StudentRelationFilter, StudentWhereInput>
  }

  export type MarkOrderByWithRelationInput = {
    assignmentNumber?: SortOrder
    courseId?: SortOrder
    studentId?: SortOrder
    content?: SortOrder
    score?: SortOrderInput | SortOrder
    assignment?: AssignmentOrderByWithRelationInput
    student?: StudentOrderByWithRelationInput
  }

  export type MarkWhereUniqueInput = Prisma.AtLeast<{
    courseId_assignmentNumber_studentId?: MarkCourseIdAssignmentNumberStudentIdCompoundUniqueInput
    AND?: MarkWhereInput | MarkWhereInput[]
    OR?: MarkWhereInput[]
    NOT?: MarkWhereInput | MarkWhereInput[]
    assignmentNumber?: IntFilter<"Mark"> | number
    courseId?: StringFilter<"Mark"> | string
    studentId?: StringFilter<"Mark"> | string
    content?: StringFilter<"Mark"> | string
    score?: IntNullableFilter<"Mark"> | number | null
    assignment?: XOR<AssignmentRelationFilter, AssignmentWhereInput>
    student?: XOR<StudentRelationFilter, StudentWhereInput>
  }, "courseId_assignmentNumber_studentId">

  export type MarkOrderByWithAggregationInput = {
    assignmentNumber?: SortOrder
    courseId?: SortOrder
    studentId?: SortOrder
    content?: SortOrder
    score?: SortOrderInput | SortOrder
    _count?: MarkCountOrderByAggregateInput
    _avg?: MarkAvgOrderByAggregateInput
    _max?: MarkMaxOrderByAggregateInput
    _min?: MarkMinOrderByAggregateInput
    _sum?: MarkSumOrderByAggregateInput
  }

  export type MarkScalarWhereWithAggregatesInput = {
    AND?: MarkScalarWhereWithAggregatesInput | MarkScalarWhereWithAggregatesInput[]
    OR?: MarkScalarWhereWithAggregatesInput[]
    NOT?: MarkScalarWhereWithAggregatesInput | MarkScalarWhereWithAggregatesInput[]
    assignmentNumber?: IntWithAggregatesFilter<"Mark"> | number
    courseId?: StringWithAggregatesFilter<"Mark"> | string
    studentId?: StringWithAggregatesFilter<"Mark"> | string
    content?: StringWithAggregatesFilter<"Mark"> | string
    score?: IntNullableWithAggregatesFilter<"Mark"> | number | null
  }

  export type TimelineWhereInput = {
    AND?: TimelineWhereInput | TimelineWhereInput[]
    OR?: TimelineWhereInput[]
    NOT?: TimelineWhereInput | TimelineWhereInput[]
    courseId?: StringFilter<"Timeline"> | string
    createTime?: DateTimeFilter<"Timeline"> | Date | string
    endTime?: DateTimeFilter<"Timeline"> | Date | string
    examTime?: DateTimeNullableFilter<"Timeline"> | Date | string | null
    course?: XOR<CourseRelationFilter, CourseWhereInput>
  }

  export type TimelineOrderByWithRelationInput = {
    courseId?: SortOrder
    createTime?: SortOrder
    endTime?: SortOrder
    examTime?: SortOrderInput | SortOrder
    course?: CourseOrderByWithRelationInput
  }

  export type TimelineWhereUniqueInput = Prisma.AtLeast<{
    courseId?: string
    AND?: TimelineWhereInput | TimelineWhereInput[]
    OR?: TimelineWhereInput[]
    NOT?: TimelineWhereInput | TimelineWhereInput[]
    createTime?: DateTimeFilter<"Timeline"> | Date | string
    endTime?: DateTimeFilter<"Timeline"> | Date | string
    examTime?: DateTimeNullableFilter<"Timeline"> | Date | string | null
    course?: XOR<CourseRelationFilter, CourseWhereInput>
  }, "courseId">

  export type TimelineOrderByWithAggregationInput = {
    courseId?: SortOrder
    createTime?: SortOrder
    endTime?: SortOrder
    examTime?: SortOrderInput | SortOrder
    _count?: TimelineCountOrderByAggregateInput
    _max?: TimelineMaxOrderByAggregateInput
    _min?: TimelineMinOrderByAggregateInput
  }

  export type TimelineScalarWhereWithAggregatesInput = {
    AND?: TimelineScalarWhereWithAggregatesInput | TimelineScalarWhereWithAggregatesInput[]
    OR?: TimelineScalarWhereWithAggregatesInput[]
    NOT?: TimelineScalarWhereWithAggregatesInput | TimelineScalarWhereWithAggregatesInput[]
    courseId?: StringWithAggregatesFilter<"Timeline"> | string
    createTime?: DateTimeWithAggregatesFilter<"Timeline"> | Date | string
    endTime?: DateTimeWithAggregatesFilter<"Timeline"> | Date | string
    examTime?: DateTimeNullableWithAggregatesFilter<"Timeline"> | Date | string | null
  }

  export type CourseCreateInput = {
    id?: string
    name: string
    courseHours: number
    courseIntro?: string | null
    instructor: InstructorCreateNestedOneWithoutCoursesInput
    assignments?: AssignmentCreateNestedManyWithoutCourseInput
    students?: StudentCreateNestedManyWithoutCoursesInput
    timeline?: TimelineCreateNestedOneWithoutCourseInput
  }

  export type CourseUncheckedCreateInput = {
    id?: string
    name: string
    instId: string
    courseHours: number
    courseIntro?: string | null
    assignments?: AssignmentUncheckedCreateNestedManyWithoutCourseInput
    students?: StudentUncheckedCreateNestedManyWithoutCoursesInput
    timeline?: TimelineUncheckedCreateNestedOneWithoutCourseInput
  }

  export type CourseUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    courseHours?: IntFieldUpdateOperationsInput | number
    courseIntro?: NullableStringFieldUpdateOperationsInput | string | null
    instructor?: InstructorUpdateOneRequiredWithoutCoursesNestedInput
    assignments?: AssignmentUpdateManyWithoutCourseNestedInput
    students?: StudentUpdateManyWithoutCoursesNestedInput
    timeline?: TimelineUpdateOneWithoutCourseNestedInput
  }

  export type CourseUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    instId?: StringFieldUpdateOperationsInput | string
    courseHours?: IntFieldUpdateOperationsInput | number
    courseIntro?: NullableStringFieldUpdateOperationsInput | string | null
    assignments?: AssignmentUncheckedUpdateManyWithoutCourseNestedInput
    students?: StudentUncheckedUpdateManyWithoutCoursesNestedInput
    timeline?: TimelineUncheckedUpdateOneWithoutCourseNestedInput
  }

  export type CourseCreateManyInput = {
    id?: string
    name: string
    instId: string
    courseHours: number
    courseIntro?: string | null
  }

  export type CourseUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    courseHours?: IntFieldUpdateOperationsInput | number
    courseIntro?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CourseUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    instId?: StringFieldUpdateOperationsInput | string
    courseHours?: IntFieldUpdateOperationsInput | number
    courseIntro?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type InstructorCreateInput = {
    id?: string
    name: string
    courses?: CourseCreateNestedManyWithoutInstructorInput
  }

  export type InstructorUncheckedCreateInput = {
    id?: string
    name: string
    courses?: CourseUncheckedCreateNestedManyWithoutInstructorInput
  }

  export type InstructorUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    courses?: CourseUpdateManyWithoutInstructorNestedInput
  }

  export type InstructorUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    courses?: CourseUncheckedUpdateManyWithoutInstructorNestedInput
  }

  export type InstructorCreateManyInput = {
    id?: string
    name: string
  }

  export type InstructorUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type InstructorUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type AssignmentCreateInput = {
    number: number
    title: string
    deadline: Date | string
    course: CourseCreateNestedOneWithoutAssignmentsInput
    mark?: MarkCreateNestedManyWithoutAssignmentInput
  }

  export type AssignmentUncheckedCreateInput = {
    number: number
    title: string
    deadline: Date | string
    courseId: string
    mark?: MarkUncheckedCreateNestedManyWithoutAssignmentInput
  }

  export type AssignmentUpdateInput = {
    number?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    deadline?: DateTimeFieldUpdateOperationsInput | Date | string
    course?: CourseUpdateOneRequiredWithoutAssignmentsNestedInput
    mark?: MarkUpdateManyWithoutAssignmentNestedInput
  }

  export type AssignmentUncheckedUpdateInput = {
    number?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    deadline?: DateTimeFieldUpdateOperationsInput | Date | string
    courseId?: StringFieldUpdateOperationsInput | string
    mark?: MarkUncheckedUpdateManyWithoutAssignmentNestedInput
  }

  export type AssignmentCreateManyInput = {
    number: number
    title: string
    deadline: Date | string
    courseId: string
  }

  export type AssignmentUpdateManyMutationInput = {
    number?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    deadline?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AssignmentUncheckedUpdateManyInput = {
    number?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    deadline?: DateTimeFieldUpdateOperationsInput | Date | string
    courseId?: StringFieldUpdateOperationsInput | string
  }

  export type StudentCreateInput = {
    id?: string
    name: string
    password: string
    email?: string | null
    courses?: CourseCreateNestedManyWithoutStudentsInput
    marks?: MarkCreateNestedManyWithoutStudentInput
  }

  export type StudentUncheckedCreateInput = {
    id?: string
    name: string
    password: string
    email?: string | null
    courses?: CourseUncheckedCreateNestedManyWithoutStudentsInput
    marks?: MarkUncheckedCreateNestedManyWithoutStudentInput
  }

  export type StudentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    courses?: CourseUpdateManyWithoutStudentsNestedInput
    marks?: MarkUpdateManyWithoutStudentNestedInput
  }

  export type StudentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    courses?: CourseUncheckedUpdateManyWithoutStudentsNestedInput
    marks?: MarkUncheckedUpdateManyWithoutStudentNestedInput
  }

  export type StudentCreateManyInput = {
    id?: string
    name: string
    password: string
    email?: string | null
  }

  export type StudentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type StudentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MarkCreateInput = {
    content: string
    score?: number | null
    assignment: AssignmentCreateNestedOneWithoutMarkInput
    student: StudentCreateNestedOneWithoutMarksInput
  }

  export type MarkUncheckedCreateInput = {
    assignmentNumber: number
    courseId: string
    studentId: string
    content: string
    score?: number | null
  }

  export type MarkUpdateInput = {
    content?: StringFieldUpdateOperationsInput | string
    score?: NullableIntFieldUpdateOperationsInput | number | null
    assignment?: AssignmentUpdateOneRequiredWithoutMarkNestedInput
    student?: StudentUpdateOneRequiredWithoutMarksNestedInput
  }

  export type MarkUncheckedUpdateInput = {
    assignmentNumber?: IntFieldUpdateOperationsInput | number
    courseId?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    score?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type MarkCreateManyInput = {
    assignmentNumber: number
    courseId: string
    studentId: string
    content: string
    score?: number | null
  }

  export type MarkUpdateManyMutationInput = {
    content?: StringFieldUpdateOperationsInput | string
    score?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type MarkUncheckedUpdateManyInput = {
    assignmentNumber?: IntFieldUpdateOperationsInput | number
    courseId?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    score?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type TimelineCreateInput = {
    createTime?: Date | string
    endTime: Date | string
    examTime?: Date | string | null
    course: CourseCreateNestedOneWithoutTimelineInput
  }

  export type TimelineUncheckedCreateInput = {
    courseId: string
    createTime?: Date | string
    endTime: Date | string
    examTime?: Date | string | null
  }

  export type TimelineUpdateInput = {
    createTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    examTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    course?: CourseUpdateOneRequiredWithoutTimelineNestedInput
  }

  export type TimelineUncheckedUpdateInput = {
    courseId?: StringFieldUpdateOperationsInput | string
    createTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    examTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type TimelineCreateManyInput = {
    courseId: string
    createTime?: Date | string
    endTime: Date | string
    examTime?: Date | string | null
  }

  export type TimelineUpdateManyMutationInput = {
    createTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    examTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type TimelineUncheckedUpdateManyInput = {
    courseId?: StringFieldUpdateOperationsInput | string
    createTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    examTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
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

  export type InstructorRelationFilter = {
    is?: InstructorWhereInput
    isNot?: InstructorWhereInput
  }

  export type AssignmentListRelationFilter = {
    every?: AssignmentWhereInput
    some?: AssignmentWhereInput
    none?: AssignmentWhereInput
  }

  export type StudentListRelationFilter = {
    every?: StudentWhereInput
    some?: StudentWhereInput
    none?: StudentWhereInput
  }

  export type TimelineNullableRelationFilter = {
    is?: TimelineWhereInput | null
    isNot?: TimelineWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type AssignmentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type StudentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CourseCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    instId?: SortOrder
    courseHours?: SortOrder
    courseIntro?: SortOrder
  }

  export type CourseAvgOrderByAggregateInput = {
    courseHours?: SortOrder
  }

  export type CourseMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    instId?: SortOrder
    courseHours?: SortOrder
    courseIntro?: SortOrder
  }

  export type CourseMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    instId?: SortOrder
    courseHours?: SortOrder
    courseIntro?: SortOrder
  }

  export type CourseSumOrderByAggregateInput = {
    courseHours?: SortOrder
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

  export type CourseListRelationFilter = {
    every?: CourseWhereInput
    some?: CourseWhereInput
    none?: CourseWhereInput
  }

  export type CourseOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type InstructorCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type InstructorMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type InstructorMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
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

  export type CourseRelationFilter = {
    is?: CourseWhereInput
    isNot?: CourseWhereInput
  }

  export type MarkListRelationFilter = {
    every?: MarkWhereInput
    some?: MarkWhereInput
    none?: MarkWhereInput
  }

  export type MarkOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AssignmentNumberCourseIdCompoundUniqueInput = {
    number: number
    courseId: string
  }

  export type AssignmentCountOrderByAggregateInput = {
    number?: SortOrder
    title?: SortOrder
    deadline?: SortOrder
    courseId?: SortOrder
  }

  export type AssignmentAvgOrderByAggregateInput = {
    number?: SortOrder
  }

  export type AssignmentMaxOrderByAggregateInput = {
    number?: SortOrder
    title?: SortOrder
    deadline?: SortOrder
    courseId?: SortOrder
  }

  export type AssignmentMinOrderByAggregateInput = {
    number?: SortOrder
    title?: SortOrder
    deadline?: SortOrder
    courseId?: SortOrder
  }

  export type AssignmentSumOrderByAggregateInput = {
    number?: SortOrder
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

  export type StudentCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    password?: SortOrder
    email?: SortOrder
  }

  export type StudentMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    password?: SortOrder
    email?: SortOrder
  }

  export type StudentMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    password?: SortOrder
    email?: SortOrder
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type AssignmentRelationFilter = {
    is?: AssignmentWhereInput
    isNot?: AssignmentWhereInput
  }

  export type StudentRelationFilter = {
    is?: StudentWhereInput
    isNot?: StudentWhereInput
  }

  export type MarkCourseIdAssignmentNumberStudentIdCompoundUniqueInput = {
    courseId: string
    assignmentNumber: number
    studentId: string
  }

  export type MarkCountOrderByAggregateInput = {
    assignmentNumber?: SortOrder
    courseId?: SortOrder
    studentId?: SortOrder
    content?: SortOrder
    score?: SortOrder
  }

  export type MarkAvgOrderByAggregateInput = {
    assignmentNumber?: SortOrder
    score?: SortOrder
  }

  export type MarkMaxOrderByAggregateInput = {
    assignmentNumber?: SortOrder
    courseId?: SortOrder
    studentId?: SortOrder
    content?: SortOrder
    score?: SortOrder
  }

  export type MarkMinOrderByAggregateInput = {
    assignmentNumber?: SortOrder
    courseId?: SortOrder
    studentId?: SortOrder
    content?: SortOrder
    score?: SortOrder
  }

  export type MarkSumOrderByAggregateInput = {
    assignmentNumber?: SortOrder
    score?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
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

  export type TimelineCountOrderByAggregateInput = {
    courseId?: SortOrder
    createTime?: SortOrder
    endTime?: SortOrder
    examTime?: SortOrder
  }

  export type TimelineMaxOrderByAggregateInput = {
    courseId?: SortOrder
    createTime?: SortOrder
    endTime?: SortOrder
    examTime?: SortOrder
  }

  export type TimelineMinOrderByAggregateInput = {
    courseId?: SortOrder
    createTime?: SortOrder
    endTime?: SortOrder
    examTime?: SortOrder
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

  export type InstructorCreateNestedOneWithoutCoursesInput = {
    create?: XOR<InstructorCreateWithoutCoursesInput, InstructorUncheckedCreateWithoutCoursesInput>
    connectOrCreate?: InstructorCreateOrConnectWithoutCoursesInput
    connect?: InstructorWhereUniqueInput
  }

  export type AssignmentCreateNestedManyWithoutCourseInput = {
    create?: XOR<AssignmentCreateWithoutCourseInput, AssignmentUncheckedCreateWithoutCourseInput> | AssignmentCreateWithoutCourseInput[] | AssignmentUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: AssignmentCreateOrConnectWithoutCourseInput | AssignmentCreateOrConnectWithoutCourseInput[]
    createMany?: AssignmentCreateManyCourseInputEnvelope
    connect?: AssignmentWhereUniqueInput | AssignmentWhereUniqueInput[]
  }

  export type StudentCreateNestedManyWithoutCoursesInput = {
    create?: XOR<StudentCreateWithoutCoursesInput, StudentUncheckedCreateWithoutCoursesInput> | StudentCreateWithoutCoursesInput[] | StudentUncheckedCreateWithoutCoursesInput[]
    connectOrCreate?: StudentCreateOrConnectWithoutCoursesInput | StudentCreateOrConnectWithoutCoursesInput[]
    connect?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
  }

  export type TimelineCreateNestedOneWithoutCourseInput = {
    create?: XOR<TimelineCreateWithoutCourseInput, TimelineUncheckedCreateWithoutCourseInput>
    connectOrCreate?: TimelineCreateOrConnectWithoutCourseInput
    connect?: TimelineWhereUniqueInput
  }

  export type AssignmentUncheckedCreateNestedManyWithoutCourseInput = {
    create?: XOR<AssignmentCreateWithoutCourseInput, AssignmentUncheckedCreateWithoutCourseInput> | AssignmentCreateWithoutCourseInput[] | AssignmentUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: AssignmentCreateOrConnectWithoutCourseInput | AssignmentCreateOrConnectWithoutCourseInput[]
    createMany?: AssignmentCreateManyCourseInputEnvelope
    connect?: AssignmentWhereUniqueInput | AssignmentWhereUniqueInput[]
  }

  export type StudentUncheckedCreateNestedManyWithoutCoursesInput = {
    create?: XOR<StudentCreateWithoutCoursesInput, StudentUncheckedCreateWithoutCoursesInput> | StudentCreateWithoutCoursesInput[] | StudentUncheckedCreateWithoutCoursesInput[]
    connectOrCreate?: StudentCreateOrConnectWithoutCoursesInput | StudentCreateOrConnectWithoutCoursesInput[]
    connect?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
  }

  export type TimelineUncheckedCreateNestedOneWithoutCourseInput = {
    create?: XOR<TimelineCreateWithoutCourseInput, TimelineUncheckedCreateWithoutCourseInput>
    connectOrCreate?: TimelineCreateOrConnectWithoutCourseInput
    connect?: TimelineWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type InstructorUpdateOneRequiredWithoutCoursesNestedInput = {
    create?: XOR<InstructorCreateWithoutCoursesInput, InstructorUncheckedCreateWithoutCoursesInput>
    connectOrCreate?: InstructorCreateOrConnectWithoutCoursesInput
    upsert?: InstructorUpsertWithoutCoursesInput
    connect?: InstructorWhereUniqueInput
    update?: XOR<XOR<InstructorUpdateToOneWithWhereWithoutCoursesInput, InstructorUpdateWithoutCoursesInput>, InstructorUncheckedUpdateWithoutCoursesInput>
  }

  export type AssignmentUpdateManyWithoutCourseNestedInput = {
    create?: XOR<AssignmentCreateWithoutCourseInput, AssignmentUncheckedCreateWithoutCourseInput> | AssignmentCreateWithoutCourseInput[] | AssignmentUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: AssignmentCreateOrConnectWithoutCourseInput | AssignmentCreateOrConnectWithoutCourseInput[]
    upsert?: AssignmentUpsertWithWhereUniqueWithoutCourseInput | AssignmentUpsertWithWhereUniqueWithoutCourseInput[]
    createMany?: AssignmentCreateManyCourseInputEnvelope
    set?: AssignmentWhereUniqueInput | AssignmentWhereUniqueInput[]
    disconnect?: AssignmentWhereUniqueInput | AssignmentWhereUniqueInput[]
    delete?: AssignmentWhereUniqueInput | AssignmentWhereUniqueInput[]
    connect?: AssignmentWhereUniqueInput | AssignmentWhereUniqueInput[]
    update?: AssignmentUpdateWithWhereUniqueWithoutCourseInput | AssignmentUpdateWithWhereUniqueWithoutCourseInput[]
    updateMany?: AssignmentUpdateManyWithWhereWithoutCourseInput | AssignmentUpdateManyWithWhereWithoutCourseInput[]
    deleteMany?: AssignmentScalarWhereInput | AssignmentScalarWhereInput[]
  }

  export type StudentUpdateManyWithoutCoursesNestedInput = {
    create?: XOR<StudentCreateWithoutCoursesInput, StudentUncheckedCreateWithoutCoursesInput> | StudentCreateWithoutCoursesInput[] | StudentUncheckedCreateWithoutCoursesInput[]
    connectOrCreate?: StudentCreateOrConnectWithoutCoursesInput | StudentCreateOrConnectWithoutCoursesInput[]
    upsert?: StudentUpsertWithWhereUniqueWithoutCoursesInput | StudentUpsertWithWhereUniqueWithoutCoursesInput[]
    set?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
    disconnect?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
    delete?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
    connect?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
    update?: StudentUpdateWithWhereUniqueWithoutCoursesInput | StudentUpdateWithWhereUniqueWithoutCoursesInput[]
    updateMany?: StudentUpdateManyWithWhereWithoutCoursesInput | StudentUpdateManyWithWhereWithoutCoursesInput[]
    deleteMany?: StudentScalarWhereInput | StudentScalarWhereInput[]
  }

  export type TimelineUpdateOneWithoutCourseNestedInput = {
    create?: XOR<TimelineCreateWithoutCourseInput, TimelineUncheckedCreateWithoutCourseInput>
    connectOrCreate?: TimelineCreateOrConnectWithoutCourseInput
    upsert?: TimelineUpsertWithoutCourseInput
    disconnect?: TimelineWhereInput | boolean
    delete?: TimelineWhereInput | boolean
    connect?: TimelineWhereUniqueInput
    update?: XOR<XOR<TimelineUpdateToOneWithWhereWithoutCourseInput, TimelineUpdateWithoutCourseInput>, TimelineUncheckedUpdateWithoutCourseInput>
  }

  export type AssignmentUncheckedUpdateManyWithoutCourseNestedInput = {
    create?: XOR<AssignmentCreateWithoutCourseInput, AssignmentUncheckedCreateWithoutCourseInput> | AssignmentCreateWithoutCourseInput[] | AssignmentUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: AssignmentCreateOrConnectWithoutCourseInput | AssignmentCreateOrConnectWithoutCourseInput[]
    upsert?: AssignmentUpsertWithWhereUniqueWithoutCourseInput | AssignmentUpsertWithWhereUniqueWithoutCourseInput[]
    createMany?: AssignmentCreateManyCourseInputEnvelope
    set?: AssignmentWhereUniqueInput | AssignmentWhereUniqueInput[]
    disconnect?: AssignmentWhereUniqueInput | AssignmentWhereUniqueInput[]
    delete?: AssignmentWhereUniqueInput | AssignmentWhereUniqueInput[]
    connect?: AssignmentWhereUniqueInput | AssignmentWhereUniqueInput[]
    update?: AssignmentUpdateWithWhereUniqueWithoutCourseInput | AssignmentUpdateWithWhereUniqueWithoutCourseInput[]
    updateMany?: AssignmentUpdateManyWithWhereWithoutCourseInput | AssignmentUpdateManyWithWhereWithoutCourseInput[]
    deleteMany?: AssignmentScalarWhereInput | AssignmentScalarWhereInput[]
  }

  export type StudentUncheckedUpdateManyWithoutCoursesNestedInput = {
    create?: XOR<StudentCreateWithoutCoursesInput, StudentUncheckedCreateWithoutCoursesInput> | StudentCreateWithoutCoursesInput[] | StudentUncheckedCreateWithoutCoursesInput[]
    connectOrCreate?: StudentCreateOrConnectWithoutCoursesInput | StudentCreateOrConnectWithoutCoursesInput[]
    upsert?: StudentUpsertWithWhereUniqueWithoutCoursesInput | StudentUpsertWithWhereUniqueWithoutCoursesInput[]
    set?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
    disconnect?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
    delete?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
    connect?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
    update?: StudentUpdateWithWhereUniqueWithoutCoursesInput | StudentUpdateWithWhereUniqueWithoutCoursesInput[]
    updateMany?: StudentUpdateManyWithWhereWithoutCoursesInput | StudentUpdateManyWithWhereWithoutCoursesInput[]
    deleteMany?: StudentScalarWhereInput | StudentScalarWhereInput[]
  }

  export type TimelineUncheckedUpdateOneWithoutCourseNestedInput = {
    create?: XOR<TimelineCreateWithoutCourseInput, TimelineUncheckedCreateWithoutCourseInput>
    connectOrCreate?: TimelineCreateOrConnectWithoutCourseInput
    upsert?: TimelineUpsertWithoutCourseInput
    disconnect?: TimelineWhereInput | boolean
    delete?: TimelineWhereInput | boolean
    connect?: TimelineWhereUniqueInput
    update?: XOR<XOR<TimelineUpdateToOneWithWhereWithoutCourseInput, TimelineUpdateWithoutCourseInput>, TimelineUncheckedUpdateWithoutCourseInput>
  }

  export type CourseCreateNestedManyWithoutInstructorInput = {
    create?: XOR<CourseCreateWithoutInstructorInput, CourseUncheckedCreateWithoutInstructorInput> | CourseCreateWithoutInstructorInput[] | CourseUncheckedCreateWithoutInstructorInput[]
    connectOrCreate?: CourseCreateOrConnectWithoutInstructorInput | CourseCreateOrConnectWithoutInstructorInput[]
    createMany?: CourseCreateManyInstructorInputEnvelope
    connect?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
  }

  export type CourseUncheckedCreateNestedManyWithoutInstructorInput = {
    create?: XOR<CourseCreateWithoutInstructorInput, CourseUncheckedCreateWithoutInstructorInput> | CourseCreateWithoutInstructorInput[] | CourseUncheckedCreateWithoutInstructorInput[]
    connectOrCreate?: CourseCreateOrConnectWithoutInstructorInput | CourseCreateOrConnectWithoutInstructorInput[]
    createMany?: CourseCreateManyInstructorInputEnvelope
    connect?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
  }

  export type CourseUpdateManyWithoutInstructorNestedInput = {
    create?: XOR<CourseCreateWithoutInstructorInput, CourseUncheckedCreateWithoutInstructorInput> | CourseCreateWithoutInstructorInput[] | CourseUncheckedCreateWithoutInstructorInput[]
    connectOrCreate?: CourseCreateOrConnectWithoutInstructorInput | CourseCreateOrConnectWithoutInstructorInput[]
    upsert?: CourseUpsertWithWhereUniqueWithoutInstructorInput | CourseUpsertWithWhereUniqueWithoutInstructorInput[]
    createMany?: CourseCreateManyInstructorInputEnvelope
    set?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
    disconnect?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
    delete?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
    connect?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
    update?: CourseUpdateWithWhereUniqueWithoutInstructorInput | CourseUpdateWithWhereUniqueWithoutInstructorInput[]
    updateMany?: CourseUpdateManyWithWhereWithoutInstructorInput | CourseUpdateManyWithWhereWithoutInstructorInput[]
    deleteMany?: CourseScalarWhereInput | CourseScalarWhereInput[]
  }

  export type CourseUncheckedUpdateManyWithoutInstructorNestedInput = {
    create?: XOR<CourseCreateWithoutInstructorInput, CourseUncheckedCreateWithoutInstructorInput> | CourseCreateWithoutInstructorInput[] | CourseUncheckedCreateWithoutInstructorInput[]
    connectOrCreate?: CourseCreateOrConnectWithoutInstructorInput | CourseCreateOrConnectWithoutInstructorInput[]
    upsert?: CourseUpsertWithWhereUniqueWithoutInstructorInput | CourseUpsertWithWhereUniqueWithoutInstructorInput[]
    createMany?: CourseCreateManyInstructorInputEnvelope
    set?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
    disconnect?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
    delete?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
    connect?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
    update?: CourseUpdateWithWhereUniqueWithoutInstructorInput | CourseUpdateWithWhereUniqueWithoutInstructorInput[]
    updateMany?: CourseUpdateManyWithWhereWithoutInstructorInput | CourseUpdateManyWithWhereWithoutInstructorInput[]
    deleteMany?: CourseScalarWhereInput | CourseScalarWhereInput[]
  }

  export type CourseCreateNestedOneWithoutAssignmentsInput = {
    create?: XOR<CourseCreateWithoutAssignmentsInput, CourseUncheckedCreateWithoutAssignmentsInput>
    connectOrCreate?: CourseCreateOrConnectWithoutAssignmentsInput
    connect?: CourseWhereUniqueInput
  }

  export type MarkCreateNestedManyWithoutAssignmentInput = {
    create?: XOR<MarkCreateWithoutAssignmentInput, MarkUncheckedCreateWithoutAssignmentInput> | MarkCreateWithoutAssignmentInput[] | MarkUncheckedCreateWithoutAssignmentInput[]
    connectOrCreate?: MarkCreateOrConnectWithoutAssignmentInput | MarkCreateOrConnectWithoutAssignmentInput[]
    createMany?: MarkCreateManyAssignmentInputEnvelope
    connect?: MarkWhereUniqueInput | MarkWhereUniqueInput[]
  }

  export type MarkUncheckedCreateNestedManyWithoutAssignmentInput = {
    create?: XOR<MarkCreateWithoutAssignmentInput, MarkUncheckedCreateWithoutAssignmentInput> | MarkCreateWithoutAssignmentInput[] | MarkUncheckedCreateWithoutAssignmentInput[]
    connectOrCreate?: MarkCreateOrConnectWithoutAssignmentInput | MarkCreateOrConnectWithoutAssignmentInput[]
    createMany?: MarkCreateManyAssignmentInputEnvelope
    connect?: MarkWhereUniqueInput | MarkWhereUniqueInput[]
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type CourseUpdateOneRequiredWithoutAssignmentsNestedInput = {
    create?: XOR<CourseCreateWithoutAssignmentsInput, CourseUncheckedCreateWithoutAssignmentsInput>
    connectOrCreate?: CourseCreateOrConnectWithoutAssignmentsInput
    upsert?: CourseUpsertWithoutAssignmentsInput
    connect?: CourseWhereUniqueInput
    update?: XOR<XOR<CourseUpdateToOneWithWhereWithoutAssignmentsInput, CourseUpdateWithoutAssignmentsInput>, CourseUncheckedUpdateWithoutAssignmentsInput>
  }

  export type MarkUpdateManyWithoutAssignmentNestedInput = {
    create?: XOR<MarkCreateWithoutAssignmentInput, MarkUncheckedCreateWithoutAssignmentInput> | MarkCreateWithoutAssignmentInput[] | MarkUncheckedCreateWithoutAssignmentInput[]
    connectOrCreate?: MarkCreateOrConnectWithoutAssignmentInput | MarkCreateOrConnectWithoutAssignmentInput[]
    upsert?: MarkUpsertWithWhereUniqueWithoutAssignmentInput | MarkUpsertWithWhereUniqueWithoutAssignmentInput[]
    createMany?: MarkCreateManyAssignmentInputEnvelope
    set?: MarkWhereUniqueInput | MarkWhereUniqueInput[]
    disconnect?: MarkWhereUniqueInput | MarkWhereUniqueInput[]
    delete?: MarkWhereUniqueInput | MarkWhereUniqueInput[]
    connect?: MarkWhereUniqueInput | MarkWhereUniqueInput[]
    update?: MarkUpdateWithWhereUniqueWithoutAssignmentInput | MarkUpdateWithWhereUniqueWithoutAssignmentInput[]
    updateMany?: MarkUpdateManyWithWhereWithoutAssignmentInput | MarkUpdateManyWithWhereWithoutAssignmentInput[]
    deleteMany?: MarkScalarWhereInput | MarkScalarWhereInput[]
  }

  export type MarkUncheckedUpdateManyWithoutAssignmentNestedInput = {
    create?: XOR<MarkCreateWithoutAssignmentInput, MarkUncheckedCreateWithoutAssignmentInput> | MarkCreateWithoutAssignmentInput[] | MarkUncheckedCreateWithoutAssignmentInput[]
    connectOrCreate?: MarkCreateOrConnectWithoutAssignmentInput | MarkCreateOrConnectWithoutAssignmentInput[]
    upsert?: MarkUpsertWithWhereUniqueWithoutAssignmentInput | MarkUpsertWithWhereUniqueWithoutAssignmentInput[]
    createMany?: MarkCreateManyAssignmentInputEnvelope
    set?: MarkWhereUniqueInput | MarkWhereUniqueInput[]
    disconnect?: MarkWhereUniqueInput | MarkWhereUniqueInput[]
    delete?: MarkWhereUniqueInput | MarkWhereUniqueInput[]
    connect?: MarkWhereUniqueInput | MarkWhereUniqueInput[]
    update?: MarkUpdateWithWhereUniqueWithoutAssignmentInput | MarkUpdateWithWhereUniqueWithoutAssignmentInput[]
    updateMany?: MarkUpdateManyWithWhereWithoutAssignmentInput | MarkUpdateManyWithWhereWithoutAssignmentInput[]
    deleteMany?: MarkScalarWhereInput | MarkScalarWhereInput[]
  }

  export type CourseCreateNestedManyWithoutStudentsInput = {
    create?: XOR<CourseCreateWithoutStudentsInput, CourseUncheckedCreateWithoutStudentsInput> | CourseCreateWithoutStudentsInput[] | CourseUncheckedCreateWithoutStudentsInput[]
    connectOrCreate?: CourseCreateOrConnectWithoutStudentsInput | CourseCreateOrConnectWithoutStudentsInput[]
    connect?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
  }

  export type MarkCreateNestedManyWithoutStudentInput = {
    create?: XOR<MarkCreateWithoutStudentInput, MarkUncheckedCreateWithoutStudentInput> | MarkCreateWithoutStudentInput[] | MarkUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: MarkCreateOrConnectWithoutStudentInput | MarkCreateOrConnectWithoutStudentInput[]
    createMany?: MarkCreateManyStudentInputEnvelope
    connect?: MarkWhereUniqueInput | MarkWhereUniqueInput[]
  }

  export type CourseUncheckedCreateNestedManyWithoutStudentsInput = {
    create?: XOR<CourseCreateWithoutStudentsInput, CourseUncheckedCreateWithoutStudentsInput> | CourseCreateWithoutStudentsInput[] | CourseUncheckedCreateWithoutStudentsInput[]
    connectOrCreate?: CourseCreateOrConnectWithoutStudentsInput | CourseCreateOrConnectWithoutStudentsInput[]
    connect?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
  }

  export type MarkUncheckedCreateNestedManyWithoutStudentInput = {
    create?: XOR<MarkCreateWithoutStudentInput, MarkUncheckedCreateWithoutStudentInput> | MarkCreateWithoutStudentInput[] | MarkUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: MarkCreateOrConnectWithoutStudentInput | MarkCreateOrConnectWithoutStudentInput[]
    createMany?: MarkCreateManyStudentInputEnvelope
    connect?: MarkWhereUniqueInput | MarkWhereUniqueInput[]
  }

  export type CourseUpdateManyWithoutStudentsNestedInput = {
    create?: XOR<CourseCreateWithoutStudentsInput, CourseUncheckedCreateWithoutStudentsInput> | CourseCreateWithoutStudentsInput[] | CourseUncheckedCreateWithoutStudentsInput[]
    connectOrCreate?: CourseCreateOrConnectWithoutStudentsInput | CourseCreateOrConnectWithoutStudentsInput[]
    upsert?: CourseUpsertWithWhereUniqueWithoutStudentsInput | CourseUpsertWithWhereUniqueWithoutStudentsInput[]
    set?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
    disconnect?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
    delete?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
    connect?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
    update?: CourseUpdateWithWhereUniqueWithoutStudentsInput | CourseUpdateWithWhereUniqueWithoutStudentsInput[]
    updateMany?: CourseUpdateManyWithWhereWithoutStudentsInput | CourseUpdateManyWithWhereWithoutStudentsInput[]
    deleteMany?: CourseScalarWhereInput | CourseScalarWhereInput[]
  }

  export type MarkUpdateManyWithoutStudentNestedInput = {
    create?: XOR<MarkCreateWithoutStudentInput, MarkUncheckedCreateWithoutStudentInput> | MarkCreateWithoutStudentInput[] | MarkUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: MarkCreateOrConnectWithoutStudentInput | MarkCreateOrConnectWithoutStudentInput[]
    upsert?: MarkUpsertWithWhereUniqueWithoutStudentInput | MarkUpsertWithWhereUniqueWithoutStudentInput[]
    createMany?: MarkCreateManyStudentInputEnvelope
    set?: MarkWhereUniqueInput | MarkWhereUniqueInput[]
    disconnect?: MarkWhereUniqueInput | MarkWhereUniqueInput[]
    delete?: MarkWhereUniqueInput | MarkWhereUniqueInput[]
    connect?: MarkWhereUniqueInput | MarkWhereUniqueInput[]
    update?: MarkUpdateWithWhereUniqueWithoutStudentInput | MarkUpdateWithWhereUniqueWithoutStudentInput[]
    updateMany?: MarkUpdateManyWithWhereWithoutStudentInput | MarkUpdateManyWithWhereWithoutStudentInput[]
    deleteMany?: MarkScalarWhereInput | MarkScalarWhereInput[]
  }

  export type CourseUncheckedUpdateManyWithoutStudentsNestedInput = {
    create?: XOR<CourseCreateWithoutStudentsInput, CourseUncheckedCreateWithoutStudentsInput> | CourseCreateWithoutStudentsInput[] | CourseUncheckedCreateWithoutStudentsInput[]
    connectOrCreate?: CourseCreateOrConnectWithoutStudentsInput | CourseCreateOrConnectWithoutStudentsInput[]
    upsert?: CourseUpsertWithWhereUniqueWithoutStudentsInput | CourseUpsertWithWhereUniqueWithoutStudentsInput[]
    set?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
    disconnect?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
    delete?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
    connect?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
    update?: CourseUpdateWithWhereUniqueWithoutStudentsInput | CourseUpdateWithWhereUniqueWithoutStudentsInput[]
    updateMany?: CourseUpdateManyWithWhereWithoutStudentsInput | CourseUpdateManyWithWhereWithoutStudentsInput[]
    deleteMany?: CourseScalarWhereInput | CourseScalarWhereInput[]
  }

  export type MarkUncheckedUpdateManyWithoutStudentNestedInput = {
    create?: XOR<MarkCreateWithoutStudentInput, MarkUncheckedCreateWithoutStudentInput> | MarkCreateWithoutStudentInput[] | MarkUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: MarkCreateOrConnectWithoutStudentInput | MarkCreateOrConnectWithoutStudentInput[]
    upsert?: MarkUpsertWithWhereUniqueWithoutStudentInput | MarkUpsertWithWhereUniqueWithoutStudentInput[]
    createMany?: MarkCreateManyStudentInputEnvelope
    set?: MarkWhereUniqueInput | MarkWhereUniqueInput[]
    disconnect?: MarkWhereUniqueInput | MarkWhereUniqueInput[]
    delete?: MarkWhereUniqueInput | MarkWhereUniqueInput[]
    connect?: MarkWhereUniqueInput | MarkWhereUniqueInput[]
    update?: MarkUpdateWithWhereUniqueWithoutStudentInput | MarkUpdateWithWhereUniqueWithoutStudentInput[]
    updateMany?: MarkUpdateManyWithWhereWithoutStudentInput | MarkUpdateManyWithWhereWithoutStudentInput[]
    deleteMany?: MarkScalarWhereInput | MarkScalarWhereInput[]
  }

  export type AssignmentCreateNestedOneWithoutMarkInput = {
    create?: XOR<AssignmentCreateWithoutMarkInput, AssignmentUncheckedCreateWithoutMarkInput>
    connectOrCreate?: AssignmentCreateOrConnectWithoutMarkInput
    connect?: AssignmentWhereUniqueInput
  }

  export type StudentCreateNestedOneWithoutMarksInput = {
    create?: XOR<StudentCreateWithoutMarksInput, StudentUncheckedCreateWithoutMarksInput>
    connectOrCreate?: StudentCreateOrConnectWithoutMarksInput
    connect?: StudentWhereUniqueInput
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type AssignmentUpdateOneRequiredWithoutMarkNestedInput = {
    create?: XOR<AssignmentCreateWithoutMarkInput, AssignmentUncheckedCreateWithoutMarkInput>
    connectOrCreate?: AssignmentCreateOrConnectWithoutMarkInput
    upsert?: AssignmentUpsertWithoutMarkInput
    connect?: AssignmentWhereUniqueInput
    update?: XOR<XOR<AssignmentUpdateToOneWithWhereWithoutMarkInput, AssignmentUpdateWithoutMarkInput>, AssignmentUncheckedUpdateWithoutMarkInput>
  }

  export type StudentUpdateOneRequiredWithoutMarksNestedInput = {
    create?: XOR<StudentCreateWithoutMarksInput, StudentUncheckedCreateWithoutMarksInput>
    connectOrCreate?: StudentCreateOrConnectWithoutMarksInput
    upsert?: StudentUpsertWithoutMarksInput
    connect?: StudentWhereUniqueInput
    update?: XOR<XOR<StudentUpdateToOneWithWhereWithoutMarksInput, StudentUpdateWithoutMarksInput>, StudentUncheckedUpdateWithoutMarksInput>
  }

  export type CourseCreateNestedOneWithoutTimelineInput = {
    create?: XOR<CourseCreateWithoutTimelineInput, CourseUncheckedCreateWithoutTimelineInput>
    connectOrCreate?: CourseCreateOrConnectWithoutTimelineInput
    connect?: CourseWhereUniqueInput
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type CourseUpdateOneRequiredWithoutTimelineNestedInput = {
    create?: XOR<CourseCreateWithoutTimelineInput, CourseUncheckedCreateWithoutTimelineInput>
    connectOrCreate?: CourseCreateOrConnectWithoutTimelineInput
    upsert?: CourseUpsertWithoutTimelineInput
    connect?: CourseWhereUniqueInput
    update?: XOR<XOR<CourseUpdateToOneWithWhereWithoutTimelineInput, CourseUpdateWithoutTimelineInput>, CourseUncheckedUpdateWithoutTimelineInput>
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

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
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

  export type InstructorCreateWithoutCoursesInput = {
    id?: string
    name: string
  }

  export type InstructorUncheckedCreateWithoutCoursesInput = {
    id?: string
    name: string
  }

  export type InstructorCreateOrConnectWithoutCoursesInput = {
    where: InstructorWhereUniqueInput
    create: XOR<InstructorCreateWithoutCoursesInput, InstructorUncheckedCreateWithoutCoursesInput>
  }

  export type AssignmentCreateWithoutCourseInput = {
    number: number
    title: string
    deadline: Date | string
    mark?: MarkCreateNestedManyWithoutAssignmentInput
  }

  export type AssignmentUncheckedCreateWithoutCourseInput = {
    number: number
    title: string
    deadline: Date | string
    mark?: MarkUncheckedCreateNestedManyWithoutAssignmentInput
  }

  export type AssignmentCreateOrConnectWithoutCourseInput = {
    where: AssignmentWhereUniqueInput
    create: XOR<AssignmentCreateWithoutCourseInput, AssignmentUncheckedCreateWithoutCourseInput>
  }

  export type AssignmentCreateManyCourseInputEnvelope = {
    data: AssignmentCreateManyCourseInput | AssignmentCreateManyCourseInput[]
    skipDuplicates?: boolean
  }

  export type StudentCreateWithoutCoursesInput = {
    id?: string
    name: string
    password: string
    email?: string | null
    marks?: MarkCreateNestedManyWithoutStudentInput
  }

  export type StudentUncheckedCreateWithoutCoursesInput = {
    id?: string
    name: string
    password: string
    email?: string | null
    marks?: MarkUncheckedCreateNestedManyWithoutStudentInput
  }

  export type StudentCreateOrConnectWithoutCoursesInput = {
    where: StudentWhereUniqueInput
    create: XOR<StudentCreateWithoutCoursesInput, StudentUncheckedCreateWithoutCoursesInput>
  }

  export type TimelineCreateWithoutCourseInput = {
    createTime?: Date | string
    endTime: Date | string
    examTime?: Date | string | null
  }

  export type TimelineUncheckedCreateWithoutCourseInput = {
    createTime?: Date | string
    endTime: Date | string
    examTime?: Date | string | null
  }

  export type TimelineCreateOrConnectWithoutCourseInput = {
    where: TimelineWhereUniqueInput
    create: XOR<TimelineCreateWithoutCourseInput, TimelineUncheckedCreateWithoutCourseInput>
  }

  export type InstructorUpsertWithoutCoursesInput = {
    update: XOR<InstructorUpdateWithoutCoursesInput, InstructorUncheckedUpdateWithoutCoursesInput>
    create: XOR<InstructorCreateWithoutCoursesInput, InstructorUncheckedCreateWithoutCoursesInput>
    where?: InstructorWhereInput
  }

  export type InstructorUpdateToOneWithWhereWithoutCoursesInput = {
    where?: InstructorWhereInput
    data: XOR<InstructorUpdateWithoutCoursesInput, InstructorUncheckedUpdateWithoutCoursesInput>
  }

  export type InstructorUpdateWithoutCoursesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type InstructorUncheckedUpdateWithoutCoursesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type AssignmentUpsertWithWhereUniqueWithoutCourseInput = {
    where: AssignmentWhereUniqueInput
    update: XOR<AssignmentUpdateWithoutCourseInput, AssignmentUncheckedUpdateWithoutCourseInput>
    create: XOR<AssignmentCreateWithoutCourseInput, AssignmentUncheckedCreateWithoutCourseInput>
  }

  export type AssignmentUpdateWithWhereUniqueWithoutCourseInput = {
    where: AssignmentWhereUniqueInput
    data: XOR<AssignmentUpdateWithoutCourseInput, AssignmentUncheckedUpdateWithoutCourseInput>
  }

  export type AssignmentUpdateManyWithWhereWithoutCourseInput = {
    where: AssignmentScalarWhereInput
    data: XOR<AssignmentUpdateManyMutationInput, AssignmentUncheckedUpdateManyWithoutCourseInput>
  }

  export type AssignmentScalarWhereInput = {
    AND?: AssignmentScalarWhereInput | AssignmentScalarWhereInput[]
    OR?: AssignmentScalarWhereInput[]
    NOT?: AssignmentScalarWhereInput | AssignmentScalarWhereInput[]
    number?: IntFilter<"Assignment"> | number
    title?: StringFilter<"Assignment"> | string
    deadline?: DateTimeFilter<"Assignment"> | Date | string
    courseId?: StringFilter<"Assignment"> | string
  }

  export type StudentUpsertWithWhereUniqueWithoutCoursesInput = {
    where: StudentWhereUniqueInput
    update: XOR<StudentUpdateWithoutCoursesInput, StudentUncheckedUpdateWithoutCoursesInput>
    create: XOR<StudentCreateWithoutCoursesInput, StudentUncheckedCreateWithoutCoursesInput>
  }

  export type StudentUpdateWithWhereUniqueWithoutCoursesInput = {
    where: StudentWhereUniqueInput
    data: XOR<StudentUpdateWithoutCoursesInput, StudentUncheckedUpdateWithoutCoursesInput>
  }

  export type StudentUpdateManyWithWhereWithoutCoursesInput = {
    where: StudentScalarWhereInput
    data: XOR<StudentUpdateManyMutationInput, StudentUncheckedUpdateManyWithoutCoursesInput>
  }

  export type StudentScalarWhereInput = {
    AND?: StudentScalarWhereInput | StudentScalarWhereInput[]
    OR?: StudentScalarWhereInput[]
    NOT?: StudentScalarWhereInput | StudentScalarWhereInput[]
    id?: StringFilter<"Student"> | string
    name?: StringFilter<"Student"> | string
    password?: StringFilter<"Student"> | string
    email?: StringNullableFilter<"Student"> | string | null
  }

  export type TimelineUpsertWithoutCourseInput = {
    update: XOR<TimelineUpdateWithoutCourseInput, TimelineUncheckedUpdateWithoutCourseInput>
    create: XOR<TimelineCreateWithoutCourseInput, TimelineUncheckedCreateWithoutCourseInput>
    where?: TimelineWhereInput
  }

  export type TimelineUpdateToOneWithWhereWithoutCourseInput = {
    where?: TimelineWhereInput
    data: XOR<TimelineUpdateWithoutCourseInput, TimelineUncheckedUpdateWithoutCourseInput>
  }

  export type TimelineUpdateWithoutCourseInput = {
    createTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    examTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type TimelineUncheckedUpdateWithoutCourseInput = {
    createTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    examTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type CourseCreateWithoutInstructorInput = {
    id?: string
    name: string
    courseHours: number
    courseIntro?: string | null
    assignments?: AssignmentCreateNestedManyWithoutCourseInput
    students?: StudentCreateNestedManyWithoutCoursesInput
    timeline?: TimelineCreateNestedOneWithoutCourseInput
  }

  export type CourseUncheckedCreateWithoutInstructorInput = {
    id?: string
    name: string
    courseHours: number
    courseIntro?: string | null
    assignments?: AssignmentUncheckedCreateNestedManyWithoutCourseInput
    students?: StudentUncheckedCreateNestedManyWithoutCoursesInput
    timeline?: TimelineUncheckedCreateNestedOneWithoutCourseInput
  }

  export type CourseCreateOrConnectWithoutInstructorInput = {
    where: CourseWhereUniqueInput
    create: XOR<CourseCreateWithoutInstructorInput, CourseUncheckedCreateWithoutInstructorInput>
  }

  export type CourseCreateManyInstructorInputEnvelope = {
    data: CourseCreateManyInstructorInput | CourseCreateManyInstructorInput[]
    skipDuplicates?: boolean
  }

  export type CourseUpsertWithWhereUniqueWithoutInstructorInput = {
    where: CourseWhereUniqueInput
    update: XOR<CourseUpdateWithoutInstructorInput, CourseUncheckedUpdateWithoutInstructorInput>
    create: XOR<CourseCreateWithoutInstructorInput, CourseUncheckedCreateWithoutInstructorInput>
  }

  export type CourseUpdateWithWhereUniqueWithoutInstructorInput = {
    where: CourseWhereUniqueInput
    data: XOR<CourseUpdateWithoutInstructorInput, CourseUncheckedUpdateWithoutInstructorInput>
  }

  export type CourseUpdateManyWithWhereWithoutInstructorInput = {
    where: CourseScalarWhereInput
    data: XOR<CourseUpdateManyMutationInput, CourseUncheckedUpdateManyWithoutInstructorInput>
  }

  export type CourseScalarWhereInput = {
    AND?: CourseScalarWhereInput | CourseScalarWhereInput[]
    OR?: CourseScalarWhereInput[]
    NOT?: CourseScalarWhereInput | CourseScalarWhereInput[]
    id?: StringFilter<"Course"> | string
    name?: StringFilter<"Course"> | string
    instId?: StringFilter<"Course"> | string
    courseHours?: IntFilter<"Course"> | number
    courseIntro?: StringNullableFilter<"Course"> | string | null
  }

  export type CourseCreateWithoutAssignmentsInput = {
    id?: string
    name: string
    courseHours: number
    courseIntro?: string | null
    instructor: InstructorCreateNestedOneWithoutCoursesInput
    students?: StudentCreateNestedManyWithoutCoursesInput
    timeline?: TimelineCreateNestedOneWithoutCourseInput
  }

  export type CourseUncheckedCreateWithoutAssignmentsInput = {
    id?: string
    name: string
    instId: string
    courseHours: number
    courseIntro?: string | null
    students?: StudentUncheckedCreateNestedManyWithoutCoursesInput
    timeline?: TimelineUncheckedCreateNestedOneWithoutCourseInput
  }

  export type CourseCreateOrConnectWithoutAssignmentsInput = {
    where: CourseWhereUniqueInput
    create: XOR<CourseCreateWithoutAssignmentsInput, CourseUncheckedCreateWithoutAssignmentsInput>
  }

  export type MarkCreateWithoutAssignmentInput = {
    content: string
    score?: number | null
    student: StudentCreateNestedOneWithoutMarksInput
  }

  export type MarkUncheckedCreateWithoutAssignmentInput = {
    studentId: string
    content: string
    score?: number | null
  }

  export type MarkCreateOrConnectWithoutAssignmentInput = {
    where: MarkWhereUniqueInput
    create: XOR<MarkCreateWithoutAssignmentInput, MarkUncheckedCreateWithoutAssignmentInput>
  }

  export type MarkCreateManyAssignmentInputEnvelope = {
    data: MarkCreateManyAssignmentInput | MarkCreateManyAssignmentInput[]
    skipDuplicates?: boolean
  }

  export type CourseUpsertWithoutAssignmentsInput = {
    update: XOR<CourseUpdateWithoutAssignmentsInput, CourseUncheckedUpdateWithoutAssignmentsInput>
    create: XOR<CourseCreateWithoutAssignmentsInput, CourseUncheckedCreateWithoutAssignmentsInput>
    where?: CourseWhereInput
  }

  export type CourseUpdateToOneWithWhereWithoutAssignmentsInput = {
    where?: CourseWhereInput
    data: XOR<CourseUpdateWithoutAssignmentsInput, CourseUncheckedUpdateWithoutAssignmentsInput>
  }

  export type CourseUpdateWithoutAssignmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    courseHours?: IntFieldUpdateOperationsInput | number
    courseIntro?: NullableStringFieldUpdateOperationsInput | string | null
    instructor?: InstructorUpdateOneRequiredWithoutCoursesNestedInput
    students?: StudentUpdateManyWithoutCoursesNestedInput
    timeline?: TimelineUpdateOneWithoutCourseNestedInput
  }

  export type CourseUncheckedUpdateWithoutAssignmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    instId?: StringFieldUpdateOperationsInput | string
    courseHours?: IntFieldUpdateOperationsInput | number
    courseIntro?: NullableStringFieldUpdateOperationsInput | string | null
    students?: StudentUncheckedUpdateManyWithoutCoursesNestedInput
    timeline?: TimelineUncheckedUpdateOneWithoutCourseNestedInput
  }

  export type MarkUpsertWithWhereUniqueWithoutAssignmentInput = {
    where: MarkWhereUniqueInput
    update: XOR<MarkUpdateWithoutAssignmentInput, MarkUncheckedUpdateWithoutAssignmentInput>
    create: XOR<MarkCreateWithoutAssignmentInput, MarkUncheckedCreateWithoutAssignmentInput>
  }

  export type MarkUpdateWithWhereUniqueWithoutAssignmentInput = {
    where: MarkWhereUniqueInput
    data: XOR<MarkUpdateWithoutAssignmentInput, MarkUncheckedUpdateWithoutAssignmentInput>
  }

  export type MarkUpdateManyWithWhereWithoutAssignmentInput = {
    where: MarkScalarWhereInput
    data: XOR<MarkUpdateManyMutationInput, MarkUncheckedUpdateManyWithoutAssignmentInput>
  }

  export type MarkScalarWhereInput = {
    AND?: MarkScalarWhereInput | MarkScalarWhereInput[]
    OR?: MarkScalarWhereInput[]
    NOT?: MarkScalarWhereInput | MarkScalarWhereInput[]
    assignmentNumber?: IntFilter<"Mark"> | number
    courseId?: StringFilter<"Mark"> | string
    studentId?: StringFilter<"Mark"> | string
    content?: StringFilter<"Mark"> | string
    score?: IntNullableFilter<"Mark"> | number | null
  }

  export type CourseCreateWithoutStudentsInput = {
    id?: string
    name: string
    courseHours: number
    courseIntro?: string | null
    instructor: InstructorCreateNestedOneWithoutCoursesInput
    assignments?: AssignmentCreateNestedManyWithoutCourseInput
    timeline?: TimelineCreateNestedOneWithoutCourseInput
  }

  export type CourseUncheckedCreateWithoutStudentsInput = {
    id?: string
    name: string
    instId: string
    courseHours: number
    courseIntro?: string | null
    assignments?: AssignmentUncheckedCreateNestedManyWithoutCourseInput
    timeline?: TimelineUncheckedCreateNestedOneWithoutCourseInput
  }

  export type CourseCreateOrConnectWithoutStudentsInput = {
    where: CourseWhereUniqueInput
    create: XOR<CourseCreateWithoutStudentsInput, CourseUncheckedCreateWithoutStudentsInput>
  }

  export type MarkCreateWithoutStudentInput = {
    content: string
    score?: number | null
    assignment: AssignmentCreateNestedOneWithoutMarkInput
  }

  export type MarkUncheckedCreateWithoutStudentInput = {
    assignmentNumber: number
    courseId: string
    content: string
    score?: number | null
  }

  export type MarkCreateOrConnectWithoutStudentInput = {
    where: MarkWhereUniqueInput
    create: XOR<MarkCreateWithoutStudentInput, MarkUncheckedCreateWithoutStudentInput>
  }

  export type MarkCreateManyStudentInputEnvelope = {
    data: MarkCreateManyStudentInput | MarkCreateManyStudentInput[]
    skipDuplicates?: boolean
  }

  export type CourseUpsertWithWhereUniqueWithoutStudentsInput = {
    where: CourseWhereUniqueInput
    update: XOR<CourseUpdateWithoutStudentsInput, CourseUncheckedUpdateWithoutStudentsInput>
    create: XOR<CourseCreateWithoutStudentsInput, CourseUncheckedCreateWithoutStudentsInput>
  }

  export type CourseUpdateWithWhereUniqueWithoutStudentsInput = {
    where: CourseWhereUniqueInput
    data: XOR<CourseUpdateWithoutStudentsInput, CourseUncheckedUpdateWithoutStudentsInput>
  }

  export type CourseUpdateManyWithWhereWithoutStudentsInput = {
    where: CourseScalarWhereInput
    data: XOR<CourseUpdateManyMutationInput, CourseUncheckedUpdateManyWithoutStudentsInput>
  }

  export type MarkUpsertWithWhereUniqueWithoutStudentInput = {
    where: MarkWhereUniqueInput
    update: XOR<MarkUpdateWithoutStudentInput, MarkUncheckedUpdateWithoutStudentInput>
    create: XOR<MarkCreateWithoutStudentInput, MarkUncheckedCreateWithoutStudentInput>
  }

  export type MarkUpdateWithWhereUniqueWithoutStudentInput = {
    where: MarkWhereUniqueInput
    data: XOR<MarkUpdateWithoutStudentInput, MarkUncheckedUpdateWithoutStudentInput>
  }

  export type MarkUpdateManyWithWhereWithoutStudentInput = {
    where: MarkScalarWhereInput
    data: XOR<MarkUpdateManyMutationInput, MarkUncheckedUpdateManyWithoutStudentInput>
  }

  export type AssignmentCreateWithoutMarkInput = {
    number: number
    title: string
    deadline: Date | string
    course: CourseCreateNestedOneWithoutAssignmentsInput
  }

  export type AssignmentUncheckedCreateWithoutMarkInput = {
    number: number
    title: string
    deadline: Date | string
    courseId: string
  }

  export type AssignmentCreateOrConnectWithoutMarkInput = {
    where: AssignmentWhereUniqueInput
    create: XOR<AssignmentCreateWithoutMarkInput, AssignmentUncheckedCreateWithoutMarkInput>
  }

  export type StudentCreateWithoutMarksInput = {
    id?: string
    name: string
    password: string
    email?: string | null
    courses?: CourseCreateNestedManyWithoutStudentsInput
  }

  export type StudentUncheckedCreateWithoutMarksInput = {
    id?: string
    name: string
    password: string
    email?: string | null
    courses?: CourseUncheckedCreateNestedManyWithoutStudentsInput
  }

  export type StudentCreateOrConnectWithoutMarksInput = {
    where: StudentWhereUniqueInput
    create: XOR<StudentCreateWithoutMarksInput, StudentUncheckedCreateWithoutMarksInput>
  }

  export type AssignmentUpsertWithoutMarkInput = {
    update: XOR<AssignmentUpdateWithoutMarkInput, AssignmentUncheckedUpdateWithoutMarkInput>
    create: XOR<AssignmentCreateWithoutMarkInput, AssignmentUncheckedCreateWithoutMarkInput>
    where?: AssignmentWhereInput
  }

  export type AssignmentUpdateToOneWithWhereWithoutMarkInput = {
    where?: AssignmentWhereInput
    data: XOR<AssignmentUpdateWithoutMarkInput, AssignmentUncheckedUpdateWithoutMarkInput>
  }

  export type AssignmentUpdateWithoutMarkInput = {
    number?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    deadline?: DateTimeFieldUpdateOperationsInput | Date | string
    course?: CourseUpdateOneRequiredWithoutAssignmentsNestedInput
  }

  export type AssignmentUncheckedUpdateWithoutMarkInput = {
    number?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    deadline?: DateTimeFieldUpdateOperationsInput | Date | string
    courseId?: StringFieldUpdateOperationsInput | string
  }

  export type StudentUpsertWithoutMarksInput = {
    update: XOR<StudentUpdateWithoutMarksInput, StudentUncheckedUpdateWithoutMarksInput>
    create: XOR<StudentCreateWithoutMarksInput, StudentUncheckedCreateWithoutMarksInput>
    where?: StudentWhereInput
  }

  export type StudentUpdateToOneWithWhereWithoutMarksInput = {
    where?: StudentWhereInput
    data: XOR<StudentUpdateWithoutMarksInput, StudentUncheckedUpdateWithoutMarksInput>
  }

  export type StudentUpdateWithoutMarksInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    courses?: CourseUpdateManyWithoutStudentsNestedInput
  }

  export type StudentUncheckedUpdateWithoutMarksInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    courses?: CourseUncheckedUpdateManyWithoutStudentsNestedInput
  }

  export type CourseCreateWithoutTimelineInput = {
    id?: string
    name: string
    courseHours: number
    courseIntro?: string | null
    instructor: InstructorCreateNestedOneWithoutCoursesInput
    assignments?: AssignmentCreateNestedManyWithoutCourseInput
    students?: StudentCreateNestedManyWithoutCoursesInput
  }

  export type CourseUncheckedCreateWithoutTimelineInput = {
    id?: string
    name: string
    instId: string
    courseHours: number
    courseIntro?: string | null
    assignments?: AssignmentUncheckedCreateNestedManyWithoutCourseInput
    students?: StudentUncheckedCreateNestedManyWithoutCoursesInput
  }

  export type CourseCreateOrConnectWithoutTimelineInput = {
    where: CourseWhereUniqueInput
    create: XOR<CourseCreateWithoutTimelineInput, CourseUncheckedCreateWithoutTimelineInput>
  }

  export type CourseUpsertWithoutTimelineInput = {
    update: XOR<CourseUpdateWithoutTimelineInput, CourseUncheckedUpdateWithoutTimelineInput>
    create: XOR<CourseCreateWithoutTimelineInput, CourseUncheckedCreateWithoutTimelineInput>
    where?: CourseWhereInput
  }

  export type CourseUpdateToOneWithWhereWithoutTimelineInput = {
    where?: CourseWhereInput
    data: XOR<CourseUpdateWithoutTimelineInput, CourseUncheckedUpdateWithoutTimelineInput>
  }

  export type CourseUpdateWithoutTimelineInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    courseHours?: IntFieldUpdateOperationsInput | number
    courseIntro?: NullableStringFieldUpdateOperationsInput | string | null
    instructor?: InstructorUpdateOneRequiredWithoutCoursesNestedInput
    assignments?: AssignmentUpdateManyWithoutCourseNestedInput
    students?: StudentUpdateManyWithoutCoursesNestedInput
  }

  export type CourseUncheckedUpdateWithoutTimelineInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    instId?: StringFieldUpdateOperationsInput | string
    courseHours?: IntFieldUpdateOperationsInput | number
    courseIntro?: NullableStringFieldUpdateOperationsInput | string | null
    assignments?: AssignmentUncheckedUpdateManyWithoutCourseNestedInput
    students?: StudentUncheckedUpdateManyWithoutCoursesNestedInput
  }

  export type AssignmentCreateManyCourseInput = {
    number: number
    title: string
    deadline: Date | string
  }

  export type AssignmentUpdateWithoutCourseInput = {
    number?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    deadline?: DateTimeFieldUpdateOperationsInput | Date | string
    mark?: MarkUpdateManyWithoutAssignmentNestedInput
  }

  export type AssignmentUncheckedUpdateWithoutCourseInput = {
    number?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    deadline?: DateTimeFieldUpdateOperationsInput | Date | string
    mark?: MarkUncheckedUpdateManyWithoutAssignmentNestedInput
  }

  export type AssignmentUncheckedUpdateManyWithoutCourseInput = {
    number?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    deadline?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StudentUpdateWithoutCoursesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    marks?: MarkUpdateManyWithoutStudentNestedInput
  }

  export type StudentUncheckedUpdateWithoutCoursesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    marks?: MarkUncheckedUpdateManyWithoutStudentNestedInput
  }

  export type StudentUncheckedUpdateManyWithoutCoursesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CourseCreateManyInstructorInput = {
    id?: string
    name: string
    courseHours: number
    courseIntro?: string | null
  }

  export type CourseUpdateWithoutInstructorInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    courseHours?: IntFieldUpdateOperationsInput | number
    courseIntro?: NullableStringFieldUpdateOperationsInput | string | null
    assignments?: AssignmentUpdateManyWithoutCourseNestedInput
    students?: StudentUpdateManyWithoutCoursesNestedInput
    timeline?: TimelineUpdateOneWithoutCourseNestedInput
  }

  export type CourseUncheckedUpdateWithoutInstructorInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    courseHours?: IntFieldUpdateOperationsInput | number
    courseIntro?: NullableStringFieldUpdateOperationsInput | string | null
    assignments?: AssignmentUncheckedUpdateManyWithoutCourseNestedInput
    students?: StudentUncheckedUpdateManyWithoutCoursesNestedInput
    timeline?: TimelineUncheckedUpdateOneWithoutCourseNestedInput
  }

  export type CourseUncheckedUpdateManyWithoutInstructorInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    courseHours?: IntFieldUpdateOperationsInput | number
    courseIntro?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MarkCreateManyAssignmentInput = {
    studentId: string
    content: string
    score?: number | null
  }

  export type MarkUpdateWithoutAssignmentInput = {
    content?: StringFieldUpdateOperationsInput | string
    score?: NullableIntFieldUpdateOperationsInput | number | null
    student?: StudentUpdateOneRequiredWithoutMarksNestedInput
  }

  export type MarkUncheckedUpdateWithoutAssignmentInput = {
    studentId?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    score?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type MarkUncheckedUpdateManyWithoutAssignmentInput = {
    studentId?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    score?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type MarkCreateManyStudentInput = {
    assignmentNumber: number
    courseId: string
    content: string
    score?: number | null
  }

  export type CourseUpdateWithoutStudentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    courseHours?: IntFieldUpdateOperationsInput | number
    courseIntro?: NullableStringFieldUpdateOperationsInput | string | null
    instructor?: InstructorUpdateOneRequiredWithoutCoursesNestedInput
    assignments?: AssignmentUpdateManyWithoutCourseNestedInput
    timeline?: TimelineUpdateOneWithoutCourseNestedInput
  }

  export type CourseUncheckedUpdateWithoutStudentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    instId?: StringFieldUpdateOperationsInput | string
    courseHours?: IntFieldUpdateOperationsInput | number
    courseIntro?: NullableStringFieldUpdateOperationsInput | string | null
    assignments?: AssignmentUncheckedUpdateManyWithoutCourseNestedInput
    timeline?: TimelineUncheckedUpdateOneWithoutCourseNestedInput
  }

  export type CourseUncheckedUpdateManyWithoutStudentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    instId?: StringFieldUpdateOperationsInput | string
    courseHours?: IntFieldUpdateOperationsInput | number
    courseIntro?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MarkUpdateWithoutStudentInput = {
    content?: StringFieldUpdateOperationsInput | string
    score?: NullableIntFieldUpdateOperationsInput | number | null
    assignment?: AssignmentUpdateOneRequiredWithoutMarkNestedInput
  }

  export type MarkUncheckedUpdateWithoutStudentInput = {
    assignmentNumber?: IntFieldUpdateOperationsInput | number
    courseId?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    score?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type MarkUncheckedUpdateManyWithoutStudentInput = {
    assignmentNumber?: IntFieldUpdateOperationsInput | number
    courseId?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    score?: NullableIntFieldUpdateOperationsInput | number | null
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use CourseCountOutputTypeDefaultArgs instead
     */
    export type CourseCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CourseCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use InstructorCountOutputTypeDefaultArgs instead
     */
    export type InstructorCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = InstructorCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AssignmentCountOutputTypeDefaultArgs instead
     */
    export type AssignmentCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AssignmentCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use StudentCountOutputTypeDefaultArgs instead
     */
    export type StudentCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = StudentCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CourseDefaultArgs instead
     */
    export type CourseArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CourseDefaultArgs<ExtArgs>
    /**
     * @deprecated Use InstructorDefaultArgs instead
     */
    export type InstructorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = InstructorDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AssignmentDefaultArgs instead
     */
    export type AssignmentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AssignmentDefaultArgs<ExtArgs>
    /**
     * @deprecated Use StudentDefaultArgs instead
     */
    export type StudentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = StudentDefaultArgs<ExtArgs>
    /**
     * @deprecated Use MarkDefaultArgs instead
     */
    export type MarkArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = MarkDefaultArgs<ExtArgs>
    /**
     * @deprecated Use TimelineDefaultArgs instead
     */
    export type TimelineArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TimelineDefaultArgs<ExtArgs>

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