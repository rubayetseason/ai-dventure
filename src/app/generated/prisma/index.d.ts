
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
 * Model RoomTypes
 * 
 */
export type RoomTypes = $Result.DefaultSelection<Prisma.$RoomTypesPayload>
/**
 * Model CommuteTime
 * 
 */
export type CommuteTime = $Result.DefaultSelection<Prisma.$CommuteTimePayload>
/**
 * Model OpenHours
 * 
 */
export type OpenHours = $Result.DefaultSelection<Prisma.$OpenHoursPayload>
/**
 * Model Activity
 * 
 */
export type Activity = $Result.DefaultSelection<Prisma.$ActivityPayload>
/**
 * Model Caveat
 * 
 */
export type Caveat = $Result.DefaultSelection<Prisma.$CaveatPayload>
/**
 * Model LocationCost
 * 
 */
export type LocationCost = $Result.DefaultSelection<Prisma.$LocationCostPayload>
/**
 * Model City
 * 
 */
export type City = $Result.DefaultSelection<Prisma.$CityPayload>
/**
 * Model CityTransport
 * 
 */
export type CityTransport = $Result.DefaultSelection<Prisma.$CityTransportPayload>
/**
 * Model Hotel
 * 
 */
export type Hotel = $Result.DefaultSelection<Prisma.$HotelPayload>
/**
 * Model HotelsToLocations
 * 
 */
export type HotelsToLocations = $Result.DefaultSelection<Prisma.$HotelsToLocationsPayload>
/**
 * Model Location
 * 
 */
export type Location = $Result.DefaultSelection<Prisma.$LocationPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const TransportMedium: {
  BUS: 'BUS',
  TRAIN: 'TRAIN',
  FLIGHT: 'FLIGHT'
};

export type TransportMedium = (typeof TransportMedium)[keyof typeof TransportMedium]


export const RoomCategory: {
  SINGLE: 'SINGLE',
  DOUBLE: 'DOUBLE',
  TWIN: 'TWIN',
  FAMILY: 'FAMILY',
  SUITE: 'SUITE'
};

export type RoomCategory = (typeof RoomCategory)[keyof typeof RoomCategory]


export const RecommendedTime: {
  MORNING: 'MORNING',
  AFTERNOON: 'AFTERNOON',
  EVENING: 'EVENING',
  ANY: 'ANY'
};

export type RecommendedTime = (typeof RecommendedTime)[keyof typeof RecommendedTime]


export const FoodOption: {
  IS_RESTAURANT: 'IS_RESTAURANT',
  HAS_RESTAURANT: 'HAS_RESTAURANT',
  HAS_NEARBY_RESTAURANT: 'HAS_NEARBY_RESTAURANT',
  HAS_NEARBY_SNACKS: 'HAS_NEARBY_SNACKS',
  HAS_NEARBY_STREET_FOOD: 'HAS_NEARBY_STREET_FOOD'
};

export type FoodOption = (typeof FoodOption)[keyof typeof FoodOption]


export const WeekDays: {
  MONDAY: 'MONDAY',
  TUESDAY: 'TUESDAY',
  WEDNESDAY: 'WEDNESDAY',
  THURSDAY: 'THURSDAY',
  FRIDAY: 'FRIDAY',
  SATURDAY: 'SATURDAY',
  SUNDAY: 'SUNDAY'
};

export type WeekDays = (typeof WeekDays)[keyof typeof WeekDays]


export const TripType: {
  NATURE: 'NATURE',
  HISTORY: 'HISTORY',
  CULTURE: 'CULTURE',
  ROMANTIC: 'ROMANTIC',
  ADVENTURE: 'ADVENTURE',
  PILGRIMAGE: 'PILGRIMAGE'
};

export type TripType = (typeof TripType)[keyof typeof TripType]

}

export type TransportMedium = $Enums.TransportMedium

export const TransportMedium: typeof $Enums.TransportMedium

export type RoomCategory = $Enums.RoomCategory

export const RoomCategory: typeof $Enums.RoomCategory

export type RecommendedTime = $Enums.RecommendedTime

export const RecommendedTime: typeof $Enums.RecommendedTime

export type FoodOption = $Enums.FoodOption

export const FoodOption: typeof $Enums.FoodOption

export type WeekDays = $Enums.WeekDays

export const WeekDays: typeof $Enums.WeekDays

export type TripType = $Enums.TripType

export const TripType: typeof $Enums.TripType

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Cities
 * const cities = await prisma.city.findMany()
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
   * // Fetch zero or more Cities
   * const cities = await prisma.city.findMany()
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

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.city`: Exposes CRUD operations for the **City** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Cities
    * const cities = await prisma.city.findMany()
    * ```
    */
  get city(): Prisma.CityDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.cityTransport`: Exposes CRUD operations for the **CityTransport** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CityTransports
    * const cityTransports = await prisma.cityTransport.findMany()
    * ```
    */
  get cityTransport(): Prisma.CityTransportDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.hotel`: Exposes CRUD operations for the **Hotel** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Hotels
    * const hotels = await prisma.hotel.findMany()
    * ```
    */
  get hotel(): Prisma.HotelDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.hotelsToLocations`: Exposes CRUD operations for the **HotelsToLocations** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more HotelsToLocations
    * const hotelsToLocations = await prisma.hotelsToLocations.findMany()
    * ```
    */
  get hotelsToLocations(): Prisma.HotelsToLocationsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.location`: Exposes CRUD operations for the **Location** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Locations
    * const locations = await prisma.location.findMany()
    * ```
    */
  get location(): Prisma.LocationDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.11.0
   * Query Engine version: 9c30299f5a0ea26a96790e13f796dc6094db3173
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
    City: 'City',
    CityTransport: 'CityTransport',
    Hotel: 'Hotel',
    HotelsToLocations: 'HotelsToLocations',
    Location: 'Location'
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
      modelProps: "city" | "cityTransport" | "hotel" | "hotelsToLocations" | "location"
      txIsolationLevel: never
    }
    model: {
      City: {
        payload: Prisma.$CityPayload<ExtArgs>
        fields: Prisma.CityFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CityFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CityPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CityFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CityPayload>
          }
          findFirst: {
            args: Prisma.CityFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CityPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CityFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CityPayload>
          }
          findMany: {
            args: Prisma.CityFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CityPayload>[]
          }
          create: {
            args: Prisma.CityCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CityPayload>
          }
          createMany: {
            args: Prisma.CityCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.CityDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CityPayload>
          }
          update: {
            args: Prisma.CityUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CityPayload>
          }
          deleteMany: {
            args: Prisma.CityDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CityUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CityUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CityPayload>
          }
          aggregate: {
            args: Prisma.CityAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCity>
          }
          groupBy: {
            args: Prisma.CityGroupByArgs<ExtArgs>
            result: $Utils.Optional<CityGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.CityFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.CityAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.CityCountArgs<ExtArgs>
            result: $Utils.Optional<CityCountAggregateOutputType> | number
          }
        }
      }
      CityTransport: {
        payload: Prisma.$CityTransportPayload<ExtArgs>
        fields: Prisma.CityTransportFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CityTransportFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CityTransportPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CityTransportFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CityTransportPayload>
          }
          findFirst: {
            args: Prisma.CityTransportFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CityTransportPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CityTransportFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CityTransportPayload>
          }
          findMany: {
            args: Prisma.CityTransportFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CityTransportPayload>[]
          }
          create: {
            args: Prisma.CityTransportCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CityTransportPayload>
          }
          createMany: {
            args: Prisma.CityTransportCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.CityTransportDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CityTransportPayload>
          }
          update: {
            args: Prisma.CityTransportUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CityTransportPayload>
          }
          deleteMany: {
            args: Prisma.CityTransportDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CityTransportUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CityTransportUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CityTransportPayload>
          }
          aggregate: {
            args: Prisma.CityTransportAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCityTransport>
          }
          groupBy: {
            args: Prisma.CityTransportGroupByArgs<ExtArgs>
            result: $Utils.Optional<CityTransportGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.CityTransportFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.CityTransportAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.CityTransportCountArgs<ExtArgs>
            result: $Utils.Optional<CityTransportCountAggregateOutputType> | number
          }
        }
      }
      Hotel: {
        payload: Prisma.$HotelPayload<ExtArgs>
        fields: Prisma.HotelFieldRefs
        operations: {
          findUnique: {
            args: Prisma.HotelFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HotelPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.HotelFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HotelPayload>
          }
          findFirst: {
            args: Prisma.HotelFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HotelPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.HotelFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HotelPayload>
          }
          findMany: {
            args: Prisma.HotelFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HotelPayload>[]
          }
          create: {
            args: Prisma.HotelCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HotelPayload>
          }
          createMany: {
            args: Prisma.HotelCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.HotelDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HotelPayload>
          }
          update: {
            args: Prisma.HotelUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HotelPayload>
          }
          deleteMany: {
            args: Prisma.HotelDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.HotelUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.HotelUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HotelPayload>
          }
          aggregate: {
            args: Prisma.HotelAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateHotel>
          }
          groupBy: {
            args: Prisma.HotelGroupByArgs<ExtArgs>
            result: $Utils.Optional<HotelGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.HotelFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.HotelAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.HotelCountArgs<ExtArgs>
            result: $Utils.Optional<HotelCountAggregateOutputType> | number
          }
        }
      }
      HotelsToLocations: {
        payload: Prisma.$HotelsToLocationsPayload<ExtArgs>
        fields: Prisma.HotelsToLocationsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.HotelsToLocationsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HotelsToLocationsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.HotelsToLocationsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HotelsToLocationsPayload>
          }
          findFirst: {
            args: Prisma.HotelsToLocationsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HotelsToLocationsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.HotelsToLocationsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HotelsToLocationsPayload>
          }
          findMany: {
            args: Prisma.HotelsToLocationsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HotelsToLocationsPayload>[]
          }
          create: {
            args: Prisma.HotelsToLocationsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HotelsToLocationsPayload>
          }
          createMany: {
            args: Prisma.HotelsToLocationsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.HotelsToLocationsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HotelsToLocationsPayload>
          }
          update: {
            args: Prisma.HotelsToLocationsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HotelsToLocationsPayload>
          }
          deleteMany: {
            args: Prisma.HotelsToLocationsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.HotelsToLocationsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.HotelsToLocationsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HotelsToLocationsPayload>
          }
          aggregate: {
            args: Prisma.HotelsToLocationsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateHotelsToLocations>
          }
          groupBy: {
            args: Prisma.HotelsToLocationsGroupByArgs<ExtArgs>
            result: $Utils.Optional<HotelsToLocationsGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.HotelsToLocationsFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.HotelsToLocationsAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.HotelsToLocationsCountArgs<ExtArgs>
            result: $Utils.Optional<HotelsToLocationsCountAggregateOutputType> | number
          }
        }
      }
      Location: {
        payload: Prisma.$LocationPayload<ExtArgs>
        fields: Prisma.LocationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LocationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LocationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationPayload>
          }
          findFirst: {
            args: Prisma.LocationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LocationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationPayload>
          }
          findMany: {
            args: Prisma.LocationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationPayload>[]
          }
          create: {
            args: Prisma.LocationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationPayload>
          }
          createMany: {
            args: Prisma.LocationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.LocationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationPayload>
          }
          update: {
            args: Prisma.LocationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationPayload>
          }
          deleteMany: {
            args: Prisma.LocationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LocationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.LocationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationPayload>
          }
          aggregate: {
            args: Prisma.LocationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLocation>
          }
          groupBy: {
            args: Prisma.LocationGroupByArgs<ExtArgs>
            result: $Utils.Optional<LocationGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.LocationFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.LocationAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.LocationCountArgs<ExtArgs>
            result: $Utils.Optional<LocationCountAggregateOutputType> | number
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
    city?: CityOmit
    cityTransport?: CityTransportOmit
    hotel?: HotelOmit
    hotelsToLocations?: HotelsToLocationsOmit
    location?: LocationOmit
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
   * Count Type CityCountOutputType
   */

  export type CityCountOutputType = {
    hotels: number
    locations: number
    down: number
    up: number
  }

  export type CityCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    hotels?: boolean | CityCountOutputTypeCountHotelsArgs
    locations?: boolean | CityCountOutputTypeCountLocationsArgs
    down?: boolean | CityCountOutputTypeCountDownArgs
    up?: boolean | CityCountOutputTypeCountUpArgs
  }

  // Custom InputTypes
  /**
   * CityCountOutputType without action
   */
  export type CityCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CityCountOutputType
     */
    select?: CityCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CityCountOutputType without action
   */
  export type CityCountOutputTypeCountHotelsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HotelWhereInput
  }

  /**
   * CityCountOutputType without action
   */
  export type CityCountOutputTypeCountLocationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LocationWhereInput
  }

  /**
   * CityCountOutputType without action
   */
  export type CityCountOutputTypeCountDownArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CityTransportWhereInput
  }

  /**
   * CityCountOutputType without action
   */
  export type CityCountOutputTypeCountUpArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CityTransportWhereInput
  }


  /**
   * Count Type HotelCountOutputType
   */

  export type HotelCountOutputType = {
    locations: number
  }

  export type HotelCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    locations?: boolean | HotelCountOutputTypeCountLocationsArgs
  }

  // Custom InputTypes
  /**
   * HotelCountOutputType without action
   */
  export type HotelCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HotelCountOutputType
     */
    select?: HotelCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * HotelCountOutputType without action
   */
  export type HotelCountOutputTypeCountLocationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HotelsToLocationsWhereInput
  }


  /**
   * Count Type LocationCountOutputType
   */

  export type LocationCountOutputType = {
    hotels: number
  }

  export type LocationCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    hotels?: boolean | LocationCountOutputTypeCountHotelsArgs
  }

  // Custom InputTypes
  /**
   * LocationCountOutputType without action
   */
  export type LocationCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LocationCountOutputType
     */
    select?: LocationCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * LocationCountOutputType without action
   */
  export type LocationCountOutputTypeCountHotelsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HotelsToLocationsWhereInput
  }


  /**
   * Models
   */

  /**
   * Model RoomTypes
   */





  export type RoomTypesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    name?: boolean
    description?: boolean
    capacity?: boolean
    price?: boolean
  }, ExtArgs["result"]["roomTypes"]>



  export type RoomTypesSelectScalar = {
    name?: boolean
    description?: boolean
    capacity?: boolean
    price?: boolean
  }

  export type RoomTypesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"name" | "description" | "capacity" | "price", ExtArgs["result"]["roomTypes"]>

  export type $RoomTypesPayload = {
    name: "RoomTypes"
    objects: {}
    scalars: {
      name: $Enums.RoomCategory
      description: string
      capacity: number
      price: number
    }
    composites: {}
  }

  type RoomTypesGetPayload<S extends boolean | null | undefined | RoomTypesDefaultArgs> = $Result.GetResult<Prisma.$RoomTypesPayload, S>





  /**
   * Fields of the RoomTypes model
   */
  interface RoomTypesFieldRefs {
    readonly name: FieldRef<"RoomTypes", 'RoomCategory'>
    readonly description: FieldRef<"RoomTypes", 'String'>
    readonly capacity: FieldRef<"RoomTypes", 'Int'>
    readonly price: FieldRef<"RoomTypes", 'Float'>
  }
    

  // Custom InputTypes
  /**
   * RoomTypes without action
   */
  export type RoomTypesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomTypes
     */
    select?: RoomTypesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomTypes
     */
    omit?: RoomTypesOmit<ExtArgs> | null
  }


  /**
   * Model CommuteTime
   */





  export type CommuteTimeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    medium?: boolean
    estimatedTimeInMinutes?: boolean
    description?: boolean
  }, ExtArgs["result"]["commuteTime"]>



  export type CommuteTimeSelectScalar = {
    medium?: boolean
    estimatedTimeInMinutes?: boolean
    description?: boolean
  }

  export type CommuteTimeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"medium" | "estimatedTimeInMinutes" | "description", ExtArgs["result"]["commuteTime"]>

  export type $CommuteTimePayload = {
    name: "CommuteTime"
    objects: {}
    scalars: {
      medium: string
      estimatedTimeInMinutes: number
      description: string
    }
    composites: {}
  }

  type CommuteTimeGetPayload<S extends boolean | null | undefined | CommuteTimeDefaultArgs> = $Result.GetResult<Prisma.$CommuteTimePayload, S>





  /**
   * Fields of the CommuteTime model
   */
  interface CommuteTimeFieldRefs {
    readonly medium: FieldRef<"CommuteTime", 'String'>
    readonly estimatedTimeInMinutes: FieldRef<"CommuteTime", 'Int'>
    readonly description: FieldRef<"CommuteTime", 'String'>
  }
    

  // Custom InputTypes
  /**
   * CommuteTime without action
   */
  export type CommuteTimeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommuteTime
     */
    select?: CommuteTimeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommuteTime
     */
    omit?: CommuteTimeOmit<ExtArgs> | null
  }


  /**
   * Model OpenHours
   */





  export type OpenHoursSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    start?: boolean
    end?: boolean
  }, ExtArgs["result"]["openHours"]>



  export type OpenHoursSelectScalar = {
    start?: boolean
    end?: boolean
  }

  export type OpenHoursOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"start" | "end", ExtArgs["result"]["openHours"]>

  export type $OpenHoursPayload = {
    name: "OpenHours"
    objects: {}
    scalars: {
      start: string
      end: string
    }
    composites: {}
  }

  type OpenHoursGetPayload<S extends boolean | null | undefined | OpenHoursDefaultArgs> = $Result.GetResult<Prisma.$OpenHoursPayload, S>





  /**
   * Fields of the OpenHours model
   */
  interface OpenHoursFieldRefs {
    readonly start: FieldRef<"OpenHours", 'String'>
    readonly end: FieldRef<"OpenHours", 'String'>
  }
    

  // Custom InputTypes
  /**
   * OpenHours without action
   */
  export type OpenHoursDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OpenHours
     */
    select?: OpenHoursSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OpenHours
     */
    omit?: OpenHoursOmit<ExtArgs> | null
  }


  /**
   * Model Activity
   */





  export type ActivitySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    name?: boolean
    description?: boolean
  }, ExtArgs["result"]["activity"]>



  export type ActivitySelectScalar = {
    name?: boolean
    description?: boolean
  }

  export type ActivityOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"name" | "description", ExtArgs["result"]["activity"]>

  export type $ActivityPayload = {
    name: "Activity"
    objects: {}
    scalars: {
      name: string
      description: string
    }
    composites: {}
  }

  type ActivityGetPayload<S extends boolean | null | undefined | ActivityDefaultArgs> = $Result.GetResult<Prisma.$ActivityPayload, S>





  /**
   * Fields of the Activity model
   */
  interface ActivityFieldRefs {
    readonly name: FieldRef<"Activity", 'String'>
    readonly description: FieldRef<"Activity", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Activity without action
   */
  export type ActivityDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activity
     */
    select?: ActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Activity
     */
    omit?: ActivityOmit<ExtArgs> | null
  }


  /**
   * Model Caveat
   */





  export type CaveatSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    name?: boolean
    description?: boolean
  }, ExtArgs["result"]["caveat"]>



  export type CaveatSelectScalar = {
    name?: boolean
    description?: boolean
  }

  export type CaveatOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"name" | "description", ExtArgs["result"]["caveat"]>

  export type $CaveatPayload = {
    name: "Caveat"
    objects: {}
    scalars: {
      name: string
      description: string
    }
    composites: {}
  }

  type CaveatGetPayload<S extends boolean | null | undefined | CaveatDefaultArgs> = $Result.GetResult<Prisma.$CaveatPayload, S>





  /**
   * Fields of the Caveat model
   */
  interface CaveatFieldRefs {
    readonly name: FieldRef<"Caveat", 'String'>
    readonly description: FieldRef<"Caveat", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Caveat without action
   */
  export type CaveatDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Caveat
     */
    select?: CaveatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Caveat
     */
    omit?: CaveatOmit<ExtArgs> | null
  }


  /**
   * Model LocationCost
   */





  export type LocationCostSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    tier?: boolean
    cost?: boolean
  }, ExtArgs["result"]["locationCost"]>



  export type LocationCostSelectScalar = {
    tier?: boolean
    cost?: boolean
  }

  export type LocationCostOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"tier" | "cost", ExtArgs["result"]["locationCost"]>

  export type $LocationCostPayload = {
    name: "LocationCost"
    objects: {}
    scalars: {
      tier: string
      cost: number
    }
    composites: {}
  }

  type LocationCostGetPayload<S extends boolean | null | undefined | LocationCostDefaultArgs> = $Result.GetResult<Prisma.$LocationCostPayload, S>





  /**
   * Fields of the LocationCost model
   */
  interface LocationCostFieldRefs {
    readonly tier: FieldRef<"LocationCost", 'String'>
    readonly cost: FieldRef<"LocationCost", 'Float'>
  }
    

  // Custom InputTypes
  /**
   * LocationCost without action
   */
  export type LocationCostDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LocationCost
     */
    select?: LocationCostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LocationCost
     */
    omit?: LocationCostOmit<ExtArgs> | null
  }


  /**
   * Model City
   */

  export type AggregateCity = {
    _count: CityCountAggregateOutputType | null
    _min: CityMinAggregateOutputType | null
    _max: CityMaxAggregateOutputType | null
  }

  export type CityMinAggregateOutputType = {
    id: string | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CityMaxAggregateOutputType = {
    id: string | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CityCountAggregateOutputType = {
    id: number
    name: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CityMinAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CityMaxAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CityCountAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CityAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which City to aggregate.
     */
    where?: CityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cities to fetch.
     */
    orderBy?: CityOrderByWithRelationInput | CityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Cities
    **/
    _count?: true | CityCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CityMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CityMaxAggregateInputType
  }

  export type GetCityAggregateType<T extends CityAggregateArgs> = {
        [P in keyof T & keyof AggregateCity]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCity[P]>
      : GetScalarType<T[P], AggregateCity[P]>
  }




  export type CityGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CityWhereInput
    orderBy?: CityOrderByWithAggregationInput | CityOrderByWithAggregationInput[]
    by: CityScalarFieldEnum[] | CityScalarFieldEnum
    having?: CityScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CityCountAggregateInputType | true
    _min?: CityMinAggregateInputType
    _max?: CityMaxAggregateInputType
  }

  export type CityGroupByOutputType = {
    id: string
    name: string
    createdAt: Date
    updatedAt: Date
    _count: CityCountAggregateOutputType | null
    _min: CityMinAggregateOutputType | null
    _max: CityMaxAggregateOutputType | null
  }

  type GetCityGroupByPayload<T extends CityGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CityGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CityGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CityGroupByOutputType[P]>
            : GetScalarType<T[P], CityGroupByOutputType[P]>
        }
      >
    >


  export type CitySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    hotels?: boolean | City$hotelsArgs<ExtArgs>
    locations?: boolean | City$locationsArgs<ExtArgs>
    down?: boolean | City$downArgs<ExtArgs>
    up?: boolean | City$upArgs<ExtArgs>
    _count?: boolean | CityCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["city"]>



  export type CitySelectScalar = {
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CityOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "createdAt" | "updatedAt", ExtArgs["result"]["city"]>
  export type CityInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    hotels?: boolean | City$hotelsArgs<ExtArgs>
    locations?: boolean | City$locationsArgs<ExtArgs>
    down?: boolean | City$downArgs<ExtArgs>
    up?: boolean | City$upArgs<ExtArgs>
    _count?: boolean | CityCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $CityPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "City"
    objects: {
      hotels: Prisma.$HotelPayload<ExtArgs>[]
      locations: Prisma.$LocationPayload<ExtArgs>[]
      down: Prisma.$CityTransportPayload<ExtArgs>[]
      up: Prisma.$CityTransportPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["city"]>
    composites: {}
  }

  type CityGetPayload<S extends boolean | null | undefined | CityDefaultArgs> = $Result.GetResult<Prisma.$CityPayload, S>

  type CityCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CityFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CityCountAggregateInputType | true
    }

  export interface CityDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['City'], meta: { name: 'City' } }
    /**
     * Find zero or one City that matches the filter.
     * @param {CityFindUniqueArgs} args - Arguments to find a City
     * @example
     * // Get one City
     * const city = await prisma.city.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CityFindUniqueArgs>(args: SelectSubset<T, CityFindUniqueArgs<ExtArgs>>): Prisma__CityClient<$Result.GetResult<Prisma.$CityPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one City that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CityFindUniqueOrThrowArgs} args - Arguments to find a City
     * @example
     * // Get one City
     * const city = await prisma.city.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CityFindUniqueOrThrowArgs>(args: SelectSubset<T, CityFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CityClient<$Result.GetResult<Prisma.$CityPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first City that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CityFindFirstArgs} args - Arguments to find a City
     * @example
     * // Get one City
     * const city = await prisma.city.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CityFindFirstArgs>(args?: SelectSubset<T, CityFindFirstArgs<ExtArgs>>): Prisma__CityClient<$Result.GetResult<Prisma.$CityPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first City that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CityFindFirstOrThrowArgs} args - Arguments to find a City
     * @example
     * // Get one City
     * const city = await prisma.city.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CityFindFirstOrThrowArgs>(args?: SelectSubset<T, CityFindFirstOrThrowArgs<ExtArgs>>): Prisma__CityClient<$Result.GetResult<Prisma.$CityPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Cities that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CityFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Cities
     * const cities = await prisma.city.findMany()
     * 
     * // Get first 10 Cities
     * const cities = await prisma.city.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const cityWithIdOnly = await prisma.city.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CityFindManyArgs>(args?: SelectSubset<T, CityFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CityPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a City.
     * @param {CityCreateArgs} args - Arguments to create a City.
     * @example
     * // Create one City
     * const City = await prisma.city.create({
     *   data: {
     *     // ... data to create a City
     *   }
     * })
     * 
     */
    create<T extends CityCreateArgs>(args: SelectSubset<T, CityCreateArgs<ExtArgs>>): Prisma__CityClient<$Result.GetResult<Prisma.$CityPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Cities.
     * @param {CityCreateManyArgs} args - Arguments to create many Cities.
     * @example
     * // Create many Cities
     * const city = await prisma.city.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CityCreateManyArgs>(args?: SelectSubset<T, CityCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a City.
     * @param {CityDeleteArgs} args - Arguments to delete one City.
     * @example
     * // Delete one City
     * const City = await prisma.city.delete({
     *   where: {
     *     // ... filter to delete one City
     *   }
     * })
     * 
     */
    delete<T extends CityDeleteArgs>(args: SelectSubset<T, CityDeleteArgs<ExtArgs>>): Prisma__CityClient<$Result.GetResult<Prisma.$CityPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one City.
     * @param {CityUpdateArgs} args - Arguments to update one City.
     * @example
     * // Update one City
     * const city = await prisma.city.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CityUpdateArgs>(args: SelectSubset<T, CityUpdateArgs<ExtArgs>>): Prisma__CityClient<$Result.GetResult<Prisma.$CityPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Cities.
     * @param {CityDeleteManyArgs} args - Arguments to filter Cities to delete.
     * @example
     * // Delete a few Cities
     * const { count } = await prisma.city.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CityDeleteManyArgs>(args?: SelectSubset<T, CityDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Cities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CityUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Cities
     * const city = await prisma.city.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CityUpdateManyArgs>(args: SelectSubset<T, CityUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one City.
     * @param {CityUpsertArgs} args - Arguments to update or create a City.
     * @example
     * // Update or create a City
     * const city = await prisma.city.upsert({
     *   create: {
     *     // ... data to create a City
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the City we want to update
     *   }
     * })
     */
    upsert<T extends CityUpsertArgs>(args: SelectSubset<T, CityUpsertArgs<ExtArgs>>): Prisma__CityClient<$Result.GetResult<Prisma.$CityPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Cities that matches the filter.
     * @param {CityFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const city = await prisma.city.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: CityFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a City.
     * @param {CityAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const city = await prisma.city.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: CityAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Cities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CityCountArgs} args - Arguments to filter Cities to count.
     * @example
     * // Count the number of Cities
     * const count = await prisma.city.count({
     *   where: {
     *     // ... the filter for the Cities we want to count
     *   }
     * })
    **/
    count<T extends CityCountArgs>(
      args?: Subset<T, CityCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CityCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a City.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CityAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CityAggregateArgs>(args: Subset<T, CityAggregateArgs>): Prisma.PrismaPromise<GetCityAggregateType<T>>

    /**
     * Group by City.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CityGroupByArgs} args - Group by arguments.
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
      T extends CityGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CityGroupByArgs['orderBy'] }
        : { orderBy?: CityGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CityGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCityGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the City model
   */
  readonly fields: CityFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for City.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CityClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    hotels<T extends City$hotelsArgs<ExtArgs> = {}>(args?: Subset<T, City$hotelsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HotelPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    locations<T extends City$locationsArgs<ExtArgs> = {}>(args?: Subset<T, City$locationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    down<T extends City$downArgs<ExtArgs> = {}>(args?: Subset<T, City$downArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CityTransportPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    up<T extends City$upArgs<ExtArgs> = {}>(args?: Subset<T, City$upArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CityTransportPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the City model
   */
  interface CityFieldRefs {
    readonly id: FieldRef<"City", 'String'>
    readonly name: FieldRef<"City", 'String'>
    readonly createdAt: FieldRef<"City", 'DateTime'>
    readonly updatedAt: FieldRef<"City", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * City findUnique
   */
  export type CityFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the City
     */
    select?: CitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the City
     */
    omit?: CityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CityInclude<ExtArgs> | null
    /**
     * Filter, which City to fetch.
     */
    where: CityWhereUniqueInput
  }

  /**
   * City findUniqueOrThrow
   */
  export type CityFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the City
     */
    select?: CitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the City
     */
    omit?: CityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CityInclude<ExtArgs> | null
    /**
     * Filter, which City to fetch.
     */
    where: CityWhereUniqueInput
  }

  /**
   * City findFirst
   */
  export type CityFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the City
     */
    select?: CitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the City
     */
    omit?: CityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CityInclude<ExtArgs> | null
    /**
     * Filter, which City to fetch.
     */
    where?: CityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cities to fetch.
     */
    orderBy?: CityOrderByWithRelationInput | CityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Cities.
     */
    cursor?: CityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Cities.
     */
    distinct?: CityScalarFieldEnum | CityScalarFieldEnum[]
  }

  /**
   * City findFirstOrThrow
   */
  export type CityFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the City
     */
    select?: CitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the City
     */
    omit?: CityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CityInclude<ExtArgs> | null
    /**
     * Filter, which City to fetch.
     */
    where?: CityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cities to fetch.
     */
    orderBy?: CityOrderByWithRelationInput | CityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Cities.
     */
    cursor?: CityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Cities.
     */
    distinct?: CityScalarFieldEnum | CityScalarFieldEnum[]
  }

  /**
   * City findMany
   */
  export type CityFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the City
     */
    select?: CitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the City
     */
    omit?: CityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CityInclude<ExtArgs> | null
    /**
     * Filter, which Cities to fetch.
     */
    where?: CityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cities to fetch.
     */
    orderBy?: CityOrderByWithRelationInput | CityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Cities.
     */
    cursor?: CityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cities.
     */
    skip?: number
    distinct?: CityScalarFieldEnum | CityScalarFieldEnum[]
  }

  /**
   * City create
   */
  export type CityCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the City
     */
    select?: CitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the City
     */
    omit?: CityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CityInclude<ExtArgs> | null
    /**
     * The data needed to create a City.
     */
    data: XOR<CityCreateInput, CityUncheckedCreateInput>
  }

  /**
   * City createMany
   */
  export type CityCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Cities.
     */
    data: CityCreateManyInput | CityCreateManyInput[]
  }

  /**
   * City update
   */
  export type CityUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the City
     */
    select?: CitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the City
     */
    omit?: CityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CityInclude<ExtArgs> | null
    /**
     * The data needed to update a City.
     */
    data: XOR<CityUpdateInput, CityUncheckedUpdateInput>
    /**
     * Choose, which City to update.
     */
    where: CityWhereUniqueInput
  }

  /**
   * City updateMany
   */
  export type CityUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Cities.
     */
    data: XOR<CityUpdateManyMutationInput, CityUncheckedUpdateManyInput>
    /**
     * Filter which Cities to update
     */
    where?: CityWhereInput
    /**
     * Limit how many Cities to update.
     */
    limit?: number
  }

  /**
   * City upsert
   */
  export type CityUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the City
     */
    select?: CitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the City
     */
    omit?: CityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CityInclude<ExtArgs> | null
    /**
     * The filter to search for the City to update in case it exists.
     */
    where: CityWhereUniqueInput
    /**
     * In case the City found by the `where` argument doesn't exist, create a new City with this data.
     */
    create: XOR<CityCreateInput, CityUncheckedCreateInput>
    /**
     * In case the City was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CityUpdateInput, CityUncheckedUpdateInput>
  }

  /**
   * City delete
   */
  export type CityDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the City
     */
    select?: CitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the City
     */
    omit?: CityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CityInclude<ExtArgs> | null
    /**
     * Filter which City to delete.
     */
    where: CityWhereUniqueInput
  }

  /**
   * City deleteMany
   */
  export type CityDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Cities to delete
     */
    where?: CityWhereInput
    /**
     * Limit how many Cities to delete.
     */
    limit?: number
  }

  /**
   * City findRaw
   */
  export type CityFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * City aggregateRaw
   */
  export type CityAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * City.hotels
   */
  export type City$hotelsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hotel
     */
    select?: HotelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hotel
     */
    omit?: HotelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HotelInclude<ExtArgs> | null
    where?: HotelWhereInput
    orderBy?: HotelOrderByWithRelationInput | HotelOrderByWithRelationInput[]
    cursor?: HotelWhereUniqueInput
    take?: number
    skip?: number
    distinct?: HotelScalarFieldEnum | HotelScalarFieldEnum[]
  }

  /**
   * City.locations
   */
  export type City$locationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationInclude<ExtArgs> | null
    where?: LocationWhereInput
    orderBy?: LocationOrderByWithRelationInput | LocationOrderByWithRelationInput[]
    cursor?: LocationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LocationScalarFieldEnum | LocationScalarFieldEnum[]
  }

  /**
   * City.down
   */
  export type City$downArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CityTransport
     */
    select?: CityTransportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CityTransport
     */
    omit?: CityTransportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CityTransportInclude<ExtArgs> | null
    where?: CityTransportWhereInput
    orderBy?: CityTransportOrderByWithRelationInput | CityTransportOrderByWithRelationInput[]
    cursor?: CityTransportWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CityTransportScalarFieldEnum | CityTransportScalarFieldEnum[]
  }

  /**
   * City.up
   */
  export type City$upArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CityTransport
     */
    select?: CityTransportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CityTransport
     */
    omit?: CityTransportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CityTransportInclude<ExtArgs> | null
    where?: CityTransportWhereInput
    orderBy?: CityTransportOrderByWithRelationInput | CityTransportOrderByWithRelationInput[]
    cursor?: CityTransportWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CityTransportScalarFieldEnum | CityTransportScalarFieldEnum[]
  }

  /**
   * City without action
   */
  export type CityDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the City
     */
    select?: CitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the City
     */
    omit?: CityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CityInclude<ExtArgs> | null
  }


  /**
   * Model CityTransport
   */

  export type AggregateCityTransport = {
    _count: CityTransportCountAggregateOutputType | null
    _avg: CityTransportAvgAggregateOutputType | null
    _sum: CityTransportSumAggregateOutputType | null
    _min: CityTransportMinAggregateOutputType | null
    _max: CityTransportMaxAggregateOutputType | null
  }

  export type CityTransportAvgAggregateOutputType = {
    estimatedTimeInMinutes: number | null
    price: number | null
  }

  export type CityTransportSumAggregateOutputType = {
    estimatedTimeInMinutes: number | null
    price: number | null
  }

  export type CityTransportMinAggregateOutputType = {
    id: string | null
    medium: $Enums.TransportMedium | null
    fromId: string | null
    toId: string | null
    estimatedTimeInMinutes: number | null
    price: number | null
  }

  export type CityTransportMaxAggregateOutputType = {
    id: string | null
    medium: $Enums.TransportMedium | null
    fromId: string | null
    toId: string | null
    estimatedTimeInMinutes: number | null
    price: number | null
  }

  export type CityTransportCountAggregateOutputType = {
    id: number
    medium: number
    fromId: number
    toId: number
    estimatedTimeInMinutes: number
    price: number
    depertureTimes: number
    _all: number
  }


  export type CityTransportAvgAggregateInputType = {
    estimatedTimeInMinutes?: true
    price?: true
  }

  export type CityTransportSumAggregateInputType = {
    estimatedTimeInMinutes?: true
    price?: true
  }

  export type CityTransportMinAggregateInputType = {
    id?: true
    medium?: true
    fromId?: true
    toId?: true
    estimatedTimeInMinutes?: true
    price?: true
  }

  export type CityTransportMaxAggregateInputType = {
    id?: true
    medium?: true
    fromId?: true
    toId?: true
    estimatedTimeInMinutes?: true
    price?: true
  }

  export type CityTransportCountAggregateInputType = {
    id?: true
    medium?: true
    fromId?: true
    toId?: true
    estimatedTimeInMinutes?: true
    price?: true
    depertureTimes?: true
    _all?: true
  }

  export type CityTransportAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CityTransport to aggregate.
     */
    where?: CityTransportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CityTransports to fetch.
     */
    orderBy?: CityTransportOrderByWithRelationInput | CityTransportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CityTransportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CityTransports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CityTransports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CityTransports
    **/
    _count?: true | CityTransportCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CityTransportAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CityTransportSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CityTransportMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CityTransportMaxAggregateInputType
  }

  export type GetCityTransportAggregateType<T extends CityTransportAggregateArgs> = {
        [P in keyof T & keyof AggregateCityTransport]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCityTransport[P]>
      : GetScalarType<T[P], AggregateCityTransport[P]>
  }




  export type CityTransportGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CityTransportWhereInput
    orderBy?: CityTransportOrderByWithAggregationInput | CityTransportOrderByWithAggregationInput[]
    by: CityTransportScalarFieldEnum[] | CityTransportScalarFieldEnum
    having?: CityTransportScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CityTransportCountAggregateInputType | true
    _avg?: CityTransportAvgAggregateInputType
    _sum?: CityTransportSumAggregateInputType
    _min?: CityTransportMinAggregateInputType
    _max?: CityTransportMaxAggregateInputType
  }

  export type CityTransportGroupByOutputType = {
    id: string
    medium: $Enums.TransportMedium
    fromId: string
    toId: string
    estimatedTimeInMinutes: number
    price: number
    depertureTimes: Date[]
    _count: CityTransportCountAggregateOutputType | null
    _avg: CityTransportAvgAggregateOutputType | null
    _sum: CityTransportSumAggregateOutputType | null
    _min: CityTransportMinAggregateOutputType | null
    _max: CityTransportMaxAggregateOutputType | null
  }

  type GetCityTransportGroupByPayload<T extends CityTransportGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CityTransportGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CityTransportGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CityTransportGroupByOutputType[P]>
            : GetScalarType<T[P], CityTransportGroupByOutputType[P]>
        }
      >
    >


  export type CityTransportSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    medium?: boolean
    fromId?: boolean
    toId?: boolean
    estimatedTimeInMinutes?: boolean
    price?: boolean
    depertureTimes?: boolean
    from?: boolean | CityDefaultArgs<ExtArgs>
    to?: boolean | CityDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cityTransport"]>



  export type CityTransportSelectScalar = {
    id?: boolean
    medium?: boolean
    fromId?: boolean
    toId?: boolean
    estimatedTimeInMinutes?: boolean
    price?: boolean
    depertureTimes?: boolean
  }

  export type CityTransportOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "medium" | "fromId" | "toId" | "estimatedTimeInMinutes" | "price" | "depertureTimes", ExtArgs["result"]["cityTransport"]>
  export type CityTransportInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    from?: boolean | CityDefaultArgs<ExtArgs>
    to?: boolean | CityDefaultArgs<ExtArgs>
  }

  export type $CityTransportPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CityTransport"
    objects: {
      from: Prisma.$CityPayload<ExtArgs>
      to: Prisma.$CityPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      medium: $Enums.TransportMedium
      fromId: string
      toId: string
      estimatedTimeInMinutes: number
      price: number
      depertureTimes: Date[]
    }, ExtArgs["result"]["cityTransport"]>
    composites: {}
  }

  type CityTransportGetPayload<S extends boolean | null | undefined | CityTransportDefaultArgs> = $Result.GetResult<Prisma.$CityTransportPayload, S>

  type CityTransportCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CityTransportFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CityTransportCountAggregateInputType | true
    }

  export interface CityTransportDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CityTransport'], meta: { name: 'CityTransport' } }
    /**
     * Find zero or one CityTransport that matches the filter.
     * @param {CityTransportFindUniqueArgs} args - Arguments to find a CityTransport
     * @example
     * // Get one CityTransport
     * const cityTransport = await prisma.cityTransport.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CityTransportFindUniqueArgs>(args: SelectSubset<T, CityTransportFindUniqueArgs<ExtArgs>>): Prisma__CityTransportClient<$Result.GetResult<Prisma.$CityTransportPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CityTransport that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CityTransportFindUniqueOrThrowArgs} args - Arguments to find a CityTransport
     * @example
     * // Get one CityTransport
     * const cityTransport = await prisma.cityTransport.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CityTransportFindUniqueOrThrowArgs>(args: SelectSubset<T, CityTransportFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CityTransportClient<$Result.GetResult<Prisma.$CityTransportPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CityTransport that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CityTransportFindFirstArgs} args - Arguments to find a CityTransport
     * @example
     * // Get one CityTransport
     * const cityTransport = await prisma.cityTransport.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CityTransportFindFirstArgs>(args?: SelectSubset<T, CityTransportFindFirstArgs<ExtArgs>>): Prisma__CityTransportClient<$Result.GetResult<Prisma.$CityTransportPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CityTransport that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CityTransportFindFirstOrThrowArgs} args - Arguments to find a CityTransport
     * @example
     * // Get one CityTransport
     * const cityTransport = await prisma.cityTransport.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CityTransportFindFirstOrThrowArgs>(args?: SelectSubset<T, CityTransportFindFirstOrThrowArgs<ExtArgs>>): Prisma__CityTransportClient<$Result.GetResult<Prisma.$CityTransportPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CityTransports that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CityTransportFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CityTransports
     * const cityTransports = await prisma.cityTransport.findMany()
     * 
     * // Get first 10 CityTransports
     * const cityTransports = await prisma.cityTransport.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const cityTransportWithIdOnly = await prisma.cityTransport.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CityTransportFindManyArgs>(args?: SelectSubset<T, CityTransportFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CityTransportPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CityTransport.
     * @param {CityTransportCreateArgs} args - Arguments to create a CityTransport.
     * @example
     * // Create one CityTransport
     * const CityTransport = await prisma.cityTransport.create({
     *   data: {
     *     // ... data to create a CityTransport
     *   }
     * })
     * 
     */
    create<T extends CityTransportCreateArgs>(args: SelectSubset<T, CityTransportCreateArgs<ExtArgs>>): Prisma__CityTransportClient<$Result.GetResult<Prisma.$CityTransportPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CityTransports.
     * @param {CityTransportCreateManyArgs} args - Arguments to create many CityTransports.
     * @example
     * // Create many CityTransports
     * const cityTransport = await prisma.cityTransport.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CityTransportCreateManyArgs>(args?: SelectSubset<T, CityTransportCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a CityTransport.
     * @param {CityTransportDeleteArgs} args - Arguments to delete one CityTransport.
     * @example
     * // Delete one CityTransport
     * const CityTransport = await prisma.cityTransport.delete({
     *   where: {
     *     // ... filter to delete one CityTransport
     *   }
     * })
     * 
     */
    delete<T extends CityTransportDeleteArgs>(args: SelectSubset<T, CityTransportDeleteArgs<ExtArgs>>): Prisma__CityTransportClient<$Result.GetResult<Prisma.$CityTransportPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CityTransport.
     * @param {CityTransportUpdateArgs} args - Arguments to update one CityTransport.
     * @example
     * // Update one CityTransport
     * const cityTransport = await prisma.cityTransport.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CityTransportUpdateArgs>(args: SelectSubset<T, CityTransportUpdateArgs<ExtArgs>>): Prisma__CityTransportClient<$Result.GetResult<Prisma.$CityTransportPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CityTransports.
     * @param {CityTransportDeleteManyArgs} args - Arguments to filter CityTransports to delete.
     * @example
     * // Delete a few CityTransports
     * const { count } = await prisma.cityTransport.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CityTransportDeleteManyArgs>(args?: SelectSubset<T, CityTransportDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CityTransports.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CityTransportUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CityTransports
     * const cityTransport = await prisma.cityTransport.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CityTransportUpdateManyArgs>(args: SelectSubset<T, CityTransportUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one CityTransport.
     * @param {CityTransportUpsertArgs} args - Arguments to update or create a CityTransport.
     * @example
     * // Update or create a CityTransport
     * const cityTransport = await prisma.cityTransport.upsert({
     *   create: {
     *     // ... data to create a CityTransport
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CityTransport we want to update
     *   }
     * })
     */
    upsert<T extends CityTransportUpsertArgs>(args: SelectSubset<T, CityTransportUpsertArgs<ExtArgs>>): Prisma__CityTransportClient<$Result.GetResult<Prisma.$CityTransportPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CityTransports that matches the filter.
     * @param {CityTransportFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const cityTransport = await prisma.cityTransport.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: CityTransportFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a CityTransport.
     * @param {CityTransportAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const cityTransport = await prisma.cityTransport.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: CityTransportAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of CityTransports.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CityTransportCountArgs} args - Arguments to filter CityTransports to count.
     * @example
     * // Count the number of CityTransports
     * const count = await prisma.cityTransport.count({
     *   where: {
     *     // ... the filter for the CityTransports we want to count
     *   }
     * })
    **/
    count<T extends CityTransportCountArgs>(
      args?: Subset<T, CityTransportCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CityTransportCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CityTransport.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CityTransportAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CityTransportAggregateArgs>(args: Subset<T, CityTransportAggregateArgs>): Prisma.PrismaPromise<GetCityTransportAggregateType<T>>

    /**
     * Group by CityTransport.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CityTransportGroupByArgs} args - Group by arguments.
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
      T extends CityTransportGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CityTransportGroupByArgs['orderBy'] }
        : { orderBy?: CityTransportGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CityTransportGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCityTransportGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CityTransport model
   */
  readonly fields: CityTransportFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CityTransport.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CityTransportClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    from<T extends CityDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CityDefaultArgs<ExtArgs>>): Prisma__CityClient<$Result.GetResult<Prisma.$CityPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    to<T extends CityDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CityDefaultArgs<ExtArgs>>): Prisma__CityClient<$Result.GetResult<Prisma.$CityPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the CityTransport model
   */
  interface CityTransportFieldRefs {
    readonly id: FieldRef<"CityTransport", 'String'>
    readonly medium: FieldRef<"CityTransport", 'TransportMedium'>
    readonly fromId: FieldRef<"CityTransport", 'String'>
    readonly toId: FieldRef<"CityTransport", 'String'>
    readonly estimatedTimeInMinutes: FieldRef<"CityTransport", 'Int'>
    readonly price: FieldRef<"CityTransport", 'Float'>
    readonly depertureTimes: FieldRef<"CityTransport", 'DateTime[]'>
  }
    

  // Custom InputTypes
  /**
   * CityTransport findUnique
   */
  export type CityTransportFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CityTransport
     */
    select?: CityTransportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CityTransport
     */
    omit?: CityTransportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CityTransportInclude<ExtArgs> | null
    /**
     * Filter, which CityTransport to fetch.
     */
    where: CityTransportWhereUniqueInput
  }

  /**
   * CityTransport findUniqueOrThrow
   */
  export type CityTransportFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CityTransport
     */
    select?: CityTransportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CityTransport
     */
    omit?: CityTransportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CityTransportInclude<ExtArgs> | null
    /**
     * Filter, which CityTransport to fetch.
     */
    where: CityTransportWhereUniqueInput
  }

  /**
   * CityTransport findFirst
   */
  export type CityTransportFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CityTransport
     */
    select?: CityTransportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CityTransport
     */
    omit?: CityTransportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CityTransportInclude<ExtArgs> | null
    /**
     * Filter, which CityTransport to fetch.
     */
    where?: CityTransportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CityTransports to fetch.
     */
    orderBy?: CityTransportOrderByWithRelationInput | CityTransportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CityTransports.
     */
    cursor?: CityTransportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CityTransports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CityTransports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CityTransports.
     */
    distinct?: CityTransportScalarFieldEnum | CityTransportScalarFieldEnum[]
  }

  /**
   * CityTransport findFirstOrThrow
   */
  export type CityTransportFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CityTransport
     */
    select?: CityTransportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CityTransport
     */
    omit?: CityTransportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CityTransportInclude<ExtArgs> | null
    /**
     * Filter, which CityTransport to fetch.
     */
    where?: CityTransportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CityTransports to fetch.
     */
    orderBy?: CityTransportOrderByWithRelationInput | CityTransportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CityTransports.
     */
    cursor?: CityTransportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CityTransports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CityTransports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CityTransports.
     */
    distinct?: CityTransportScalarFieldEnum | CityTransportScalarFieldEnum[]
  }

  /**
   * CityTransport findMany
   */
  export type CityTransportFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CityTransport
     */
    select?: CityTransportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CityTransport
     */
    omit?: CityTransportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CityTransportInclude<ExtArgs> | null
    /**
     * Filter, which CityTransports to fetch.
     */
    where?: CityTransportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CityTransports to fetch.
     */
    orderBy?: CityTransportOrderByWithRelationInput | CityTransportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CityTransports.
     */
    cursor?: CityTransportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CityTransports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CityTransports.
     */
    skip?: number
    distinct?: CityTransportScalarFieldEnum | CityTransportScalarFieldEnum[]
  }

  /**
   * CityTransport create
   */
  export type CityTransportCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CityTransport
     */
    select?: CityTransportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CityTransport
     */
    omit?: CityTransportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CityTransportInclude<ExtArgs> | null
    /**
     * The data needed to create a CityTransport.
     */
    data: XOR<CityTransportCreateInput, CityTransportUncheckedCreateInput>
  }

  /**
   * CityTransport createMany
   */
  export type CityTransportCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CityTransports.
     */
    data: CityTransportCreateManyInput | CityTransportCreateManyInput[]
  }

  /**
   * CityTransport update
   */
  export type CityTransportUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CityTransport
     */
    select?: CityTransportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CityTransport
     */
    omit?: CityTransportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CityTransportInclude<ExtArgs> | null
    /**
     * The data needed to update a CityTransport.
     */
    data: XOR<CityTransportUpdateInput, CityTransportUncheckedUpdateInput>
    /**
     * Choose, which CityTransport to update.
     */
    where: CityTransportWhereUniqueInput
  }

  /**
   * CityTransport updateMany
   */
  export type CityTransportUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CityTransports.
     */
    data: XOR<CityTransportUpdateManyMutationInput, CityTransportUncheckedUpdateManyInput>
    /**
     * Filter which CityTransports to update
     */
    where?: CityTransportWhereInput
    /**
     * Limit how many CityTransports to update.
     */
    limit?: number
  }

  /**
   * CityTransport upsert
   */
  export type CityTransportUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CityTransport
     */
    select?: CityTransportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CityTransport
     */
    omit?: CityTransportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CityTransportInclude<ExtArgs> | null
    /**
     * The filter to search for the CityTransport to update in case it exists.
     */
    where: CityTransportWhereUniqueInput
    /**
     * In case the CityTransport found by the `where` argument doesn't exist, create a new CityTransport with this data.
     */
    create: XOR<CityTransportCreateInput, CityTransportUncheckedCreateInput>
    /**
     * In case the CityTransport was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CityTransportUpdateInput, CityTransportUncheckedUpdateInput>
  }

  /**
   * CityTransport delete
   */
  export type CityTransportDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CityTransport
     */
    select?: CityTransportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CityTransport
     */
    omit?: CityTransportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CityTransportInclude<ExtArgs> | null
    /**
     * Filter which CityTransport to delete.
     */
    where: CityTransportWhereUniqueInput
  }

  /**
   * CityTransport deleteMany
   */
  export type CityTransportDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CityTransports to delete
     */
    where?: CityTransportWhereInput
    /**
     * Limit how many CityTransports to delete.
     */
    limit?: number
  }

  /**
   * CityTransport findRaw
   */
  export type CityTransportFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * CityTransport aggregateRaw
   */
  export type CityTransportAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * CityTransport without action
   */
  export type CityTransportDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CityTransport
     */
    select?: CityTransportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CityTransport
     */
    omit?: CityTransportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CityTransportInclude<ExtArgs> | null
  }


  /**
   * Model Hotel
   */

  export type AggregateHotel = {
    _count: HotelCountAggregateOutputType | null
    _avg: HotelAvgAggregateOutputType | null
    _sum: HotelSumAggregateOutputType | null
    _min: HotelMinAggregateOutputType | null
    _max: HotelMaxAggregateOutputType | null
  }

  export type HotelAvgAggregateOutputType = {
    rating: number | null
  }

  export type HotelSumAggregateOutputType = {
    rating: number | null
  }

  export type HotelMinAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    rating: number | null
    cityId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type HotelMaxAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    rating: number | null
    cityId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type HotelCountAggregateOutputType = {
    id: number
    name: number
    description: number
    tags: number
    rating: number
    amenities: number
    recommendedFor: number
    cityId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type HotelAvgAggregateInputType = {
    rating?: true
  }

  export type HotelSumAggregateInputType = {
    rating?: true
  }

  export type HotelMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    rating?: true
    cityId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type HotelMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    rating?: true
    cityId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type HotelCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    tags?: true
    rating?: true
    amenities?: true
    recommendedFor?: true
    cityId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type HotelAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Hotel to aggregate.
     */
    where?: HotelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Hotels to fetch.
     */
    orderBy?: HotelOrderByWithRelationInput | HotelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: HotelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Hotels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Hotels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Hotels
    **/
    _count?: true | HotelCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: HotelAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: HotelSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: HotelMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: HotelMaxAggregateInputType
  }

  export type GetHotelAggregateType<T extends HotelAggregateArgs> = {
        [P in keyof T & keyof AggregateHotel]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHotel[P]>
      : GetScalarType<T[P], AggregateHotel[P]>
  }




  export type HotelGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HotelWhereInput
    orderBy?: HotelOrderByWithAggregationInput | HotelOrderByWithAggregationInput[]
    by: HotelScalarFieldEnum[] | HotelScalarFieldEnum
    having?: HotelScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: HotelCountAggregateInputType | true
    _avg?: HotelAvgAggregateInputType
    _sum?: HotelSumAggregateInputType
    _min?: HotelMinAggregateInputType
    _max?: HotelMaxAggregateInputType
  }

  export type HotelGroupByOutputType = {
    id: string
    name: string
    description: string
    tags: string[]
    rating: number
    amenities: string[]
    recommendedFor: $Enums.TripType[]
    cityId: string
    createdAt: Date
    updatedAt: Date
    _count: HotelCountAggregateOutputType | null
    _avg: HotelAvgAggregateOutputType | null
    _sum: HotelSumAggregateOutputType | null
    _min: HotelMinAggregateOutputType | null
    _max: HotelMaxAggregateOutputType | null
  }

  type GetHotelGroupByPayload<T extends HotelGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<HotelGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof HotelGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], HotelGroupByOutputType[P]>
            : GetScalarType<T[P], HotelGroupByOutputType[P]>
        }
      >
    >


  export type HotelSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    rooms?: boolean | RoomTypesDefaultArgs<ExtArgs>
    tags?: boolean
    rating?: boolean
    amenities?: boolean
    recommendedFor?: boolean
    cityId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    city?: boolean | CityDefaultArgs<ExtArgs>
    locations?: boolean | Hotel$locationsArgs<ExtArgs>
    _count?: boolean | HotelCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["hotel"]>



  export type HotelSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    tags?: boolean
    rating?: boolean
    amenities?: boolean
    recommendedFor?: boolean
    cityId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type HotelOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "rooms" | "tags" | "rating" | "amenities" | "recommendedFor" | "cityId" | "createdAt" | "updatedAt", ExtArgs["result"]["hotel"]>
  export type HotelInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    city?: boolean | CityDefaultArgs<ExtArgs>
    locations?: boolean | Hotel$locationsArgs<ExtArgs>
    _count?: boolean | HotelCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $HotelPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Hotel"
    objects: {
      city: Prisma.$CityPayload<ExtArgs>
      locations: Prisma.$HotelsToLocationsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      description: string
      tags: string[]
      rating: number
      amenities: string[]
      recommendedFor: $Enums.TripType[]
      cityId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["hotel"]>
    composites: {
      rooms: Prisma.$RoomTypesPayload[]
    }
  }

  type HotelGetPayload<S extends boolean | null | undefined | HotelDefaultArgs> = $Result.GetResult<Prisma.$HotelPayload, S>

  type HotelCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<HotelFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: HotelCountAggregateInputType | true
    }

  export interface HotelDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Hotel'], meta: { name: 'Hotel' } }
    /**
     * Find zero or one Hotel that matches the filter.
     * @param {HotelFindUniqueArgs} args - Arguments to find a Hotel
     * @example
     * // Get one Hotel
     * const hotel = await prisma.hotel.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends HotelFindUniqueArgs>(args: SelectSubset<T, HotelFindUniqueArgs<ExtArgs>>): Prisma__HotelClient<$Result.GetResult<Prisma.$HotelPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Hotel that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {HotelFindUniqueOrThrowArgs} args - Arguments to find a Hotel
     * @example
     * // Get one Hotel
     * const hotel = await prisma.hotel.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends HotelFindUniqueOrThrowArgs>(args: SelectSubset<T, HotelFindUniqueOrThrowArgs<ExtArgs>>): Prisma__HotelClient<$Result.GetResult<Prisma.$HotelPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Hotel that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HotelFindFirstArgs} args - Arguments to find a Hotel
     * @example
     * // Get one Hotel
     * const hotel = await prisma.hotel.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends HotelFindFirstArgs>(args?: SelectSubset<T, HotelFindFirstArgs<ExtArgs>>): Prisma__HotelClient<$Result.GetResult<Prisma.$HotelPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Hotel that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HotelFindFirstOrThrowArgs} args - Arguments to find a Hotel
     * @example
     * // Get one Hotel
     * const hotel = await prisma.hotel.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends HotelFindFirstOrThrowArgs>(args?: SelectSubset<T, HotelFindFirstOrThrowArgs<ExtArgs>>): Prisma__HotelClient<$Result.GetResult<Prisma.$HotelPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Hotels that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HotelFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Hotels
     * const hotels = await prisma.hotel.findMany()
     * 
     * // Get first 10 Hotels
     * const hotels = await prisma.hotel.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const hotelWithIdOnly = await prisma.hotel.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends HotelFindManyArgs>(args?: SelectSubset<T, HotelFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HotelPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Hotel.
     * @param {HotelCreateArgs} args - Arguments to create a Hotel.
     * @example
     * // Create one Hotel
     * const Hotel = await prisma.hotel.create({
     *   data: {
     *     // ... data to create a Hotel
     *   }
     * })
     * 
     */
    create<T extends HotelCreateArgs>(args: SelectSubset<T, HotelCreateArgs<ExtArgs>>): Prisma__HotelClient<$Result.GetResult<Prisma.$HotelPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Hotels.
     * @param {HotelCreateManyArgs} args - Arguments to create many Hotels.
     * @example
     * // Create many Hotels
     * const hotel = await prisma.hotel.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends HotelCreateManyArgs>(args?: SelectSubset<T, HotelCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Hotel.
     * @param {HotelDeleteArgs} args - Arguments to delete one Hotel.
     * @example
     * // Delete one Hotel
     * const Hotel = await prisma.hotel.delete({
     *   where: {
     *     // ... filter to delete one Hotel
     *   }
     * })
     * 
     */
    delete<T extends HotelDeleteArgs>(args: SelectSubset<T, HotelDeleteArgs<ExtArgs>>): Prisma__HotelClient<$Result.GetResult<Prisma.$HotelPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Hotel.
     * @param {HotelUpdateArgs} args - Arguments to update one Hotel.
     * @example
     * // Update one Hotel
     * const hotel = await prisma.hotel.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends HotelUpdateArgs>(args: SelectSubset<T, HotelUpdateArgs<ExtArgs>>): Prisma__HotelClient<$Result.GetResult<Prisma.$HotelPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Hotels.
     * @param {HotelDeleteManyArgs} args - Arguments to filter Hotels to delete.
     * @example
     * // Delete a few Hotels
     * const { count } = await prisma.hotel.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends HotelDeleteManyArgs>(args?: SelectSubset<T, HotelDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Hotels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HotelUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Hotels
     * const hotel = await prisma.hotel.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends HotelUpdateManyArgs>(args: SelectSubset<T, HotelUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Hotel.
     * @param {HotelUpsertArgs} args - Arguments to update or create a Hotel.
     * @example
     * // Update or create a Hotel
     * const hotel = await prisma.hotel.upsert({
     *   create: {
     *     // ... data to create a Hotel
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Hotel we want to update
     *   }
     * })
     */
    upsert<T extends HotelUpsertArgs>(args: SelectSubset<T, HotelUpsertArgs<ExtArgs>>): Prisma__HotelClient<$Result.GetResult<Prisma.$HotelPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Hotels that matches the filter.
     * @param {HotelFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const hotel = await prisma.hotel.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: HotelFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Hotel.
     * @param {HotelAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const hotel = await prisma.hotel.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: HotelAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Hotels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HotelCountArgs} args - Arguments to filter Hotels to count.
     * @example
     * // Count the number of Hotels
     * const count = await prisma.hotel.count({
     *   where: {
     *     // ... the filter for the Hotels we want to count
     *   }
     * })
    **/
    count<T extends HotelCountArgs>(
      args?: Subset<T, HotelCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], HotelCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Hotel.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HotelAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends HotelAggregateArgs>(args: Subset<T, HotelAggregateArgs>): Prisma.PrismaPromise<GetHotelAggregateType<T>>

    /**
     * Group by Hotel.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HotelGroupByArgs} args - Group by arguments.
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
      T extends HotelGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: HotelGroupByArgs['orderBy'] }
        : { orderBy?: HotelGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, HotelGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHotelGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Hotel model
   */
  readonly fields: HotelFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Hotel.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__HotelClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    city<T extends CityDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CityDefaultArgs<ExtArgs>>): Prisma__CityClient<$Result.GetResult<Prisma.$CityPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    locations<T extends Hotel$locationsArgs<ExtArgs> = {}>(args?: Subset<T, Hotel$locationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HotelsToLocationsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Hotel model
   */
  interface HotelFieldRefs {
    readonly id: FieldRef<"Hotel", 'String'>
    readonly name: FieldRef<"Hotel", 'String'>
    readonly description: FieldRef<"Hotel", 'String'>
    readonly tags: FieldRef<"Hotel", 'String[]'>
    readonly rating: FieldRef<"Hotel", 'Float'>
    readonly amenities: FieldRef<"Hotel", 'String[]'>
    readonly recommendedFor: FieldRef<"Hotel", 'TripType[]'>
    readonly cityId: FieldRef<"Hotel", 'String'>
    readonly createdAt: FieldRef<"Hotel", 'DateTime'>
    readonly updatedAt: FieldRef<"Hotel", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Hotel findUnique
   */
  export type HotelFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hotel
     */
    select?: HotelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hotel
     */
    omit?: HotelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HotelInclude<ExtArgs> | null
    /**
     * Filter, which Hotel to fetch.
     */
    where: HotelWhereUniqueInput
  }

  /**
   * Hotel findUniqueOrThrow
   */
  export type HotelFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hotel
     */
    select?: HotelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hotel
     */
    omit?: HotelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HotelInclude<ExtArgs> | null
    /**
     * Filter, which Hotel to fetch.
     */
    where: HotelWhereUniqueInput
  }

  /**
   * Hotel findFirst
   */
  export type HotelFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hotel
     */
    select?: HotelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hotel
     */
    omit?: HotelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HotelInclude<ExtArgs> | null
    /**
     * Filter, which Hotel to fetch.
     */
    where?: HotelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Hotels to fetch.
     */
    orderBy?: HotelOrderByWithRelationInput | HotelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Hotels.
     */
    cursor?: HotelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Hotels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Hotels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Hotels.
     */
    distinct?: HotelScalarFieldEnum | HotelScalarFieldEnum[]
  }

  /**
   * Hotel findFirstOrThrow
   */
  export type HotelFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hotel
     */
    select?: HotelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hotel
     */
    omit?: HotelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HotelInclude<ExtArgs> | null
    /**
     * Filter, which Hotel to fetch.
     */
    where?: HotelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Hotels to fetch.
     */
    orderBy?: HotelOrderByWithRelationInput | HotelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Hotels.
     */
    cursor?: HotelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Hotels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Hotels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Hotels.
     */
    distinct?: HotelScalarFieldEnum | HotelScalarFieldEnum[]
  }

  /**
   * Hotel findMany
   */
  export type HotelFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hotel
     */
    select?: HotelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hotel
     */
    omit?: HotelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HotelInclude<ExtArgs> | null
    /**
     * Filter, which Hotels to fetch.
     */
    where?: HotelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Hotels to fetch.
     */
    orderBy?: HotelOrderByWithRelationInput | HotelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Hotels.
     */
    cursor?: HotelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Hotels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Hotels.
     */
    skip?: number
    distinct?: HotelScalarFieldEnum | HotelScalarFieldEnum[]
  }

  /**
   * Hotel create
   */
  export type HotelCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hotel
     */
    select?: HotelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hotel
     */
    omit?: HotelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HotelInclude<ExtArgs> | null
    /**
     * The data needed to create a Hotel.
     */
    data: XOR<HotelCreateInput, HotelUncheckedCreateInput>
  }

  /**
   * Hotel createMany
   */
  export type HotelCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Hotels.
     */
    data: HotelCreateManyInput | HotelCreateManyInput[]
  }

  /**
   * Hotel update
   */
  export type HotelUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hotel
     */
    select?: HotelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hotel
     */
    omit?: HotelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HotelInclude<ExtArgs> | null
    /**
     * The data needed to update a Hotel.
     */
    data: XOR<HotelUpdateInput, HotelUncheckedUpdateInput>
    /**
     * Choose, which Hotel to update.
     */
    where: HotelWhereUniqueInput
  }

  /**
   * Hotel updateMany
   */
  export type HotelUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Hotels.
     */
    data: XOR<HotelUpdateManyMutationInput, HotelUncheckedUpdateManyInput>
    /**
     * Filter which Hotels to update
     */
    where?: HotelWhereInput
    /**
     * Limit how many Hotels to update.
     */
    limit?: number
  }

  /**
   * Hotel upsert
   */
  export type HotelUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hotel
     */
    select?: HotelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hotel
     */
    omit?: HotelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HotelInclude<ExtArgs> | null
    /**
     * The filter to search for the Hotel to update in case it exists.
     */
    where: HotelWhereUniqueInput
    /**
     * In case the Hotel found by the `where` argument doesn't exist, create a new Hotel with this data.
     */
    create: XOR<HotelCreateInput, HotelUncheckedCreateInput>
    /**
     * In case the Hotel was found with the provided `where` argument, update it with this data.
     */
    update: XOR<HotelUpdateInput, HotelUncheckedUpdateInput>
  }

  /**
   * Hotel delete
   */
  export type HotelDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hotel
     */
    select?: HotelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hotel
     */
    omit?: HotelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HotelInclude<ExtArgs> | null
    /**
     * Filter which Hotel to delete.
     */
    where: HotelWhereUniqueInput
  }

  /**
   * Hotel deleteMany
   */
  export type HotelDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Hotels to delete
     */
    where?: HotelWhereInput
    /**
     * Limit how many Hotels to delete.
     */
    limit?: number
  }

  /**
   * Hotel findRaw
   */
  export type HotelFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * Hotel aggregateRaw
   */
  export type HotelAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * Hotel.locations
   */
  export type Hotel$locationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HotelsToLocations
     */
    select?: HotelsToLocationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HotelsToLocations
     */
    omit?: HotelsToLocationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HotelsToLocationsInclude<ExtArgs> | null
    where?: HotelsToLocationsWhereInput
    orderBy?: HotelsToLocationsOrderByWithRelationInput | HotelsToLocationsOrderByWithRelationInput[]
    cursor?: HotelsToLocationsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: HotelsToLocationsScalarFieldEnum | HotelsToLocationsScalarFieldEnum[]
  }

  /**
   * Hotel without action
   */
  export type HotelDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hotel
     */
    select?: HotelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hotel
     */
    omit?: HotelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HotelInclude<ExtArgs> | null
  }


  /**
   * Model HotelsToLocations
   */

  export type AggregateHotelsToLocations = {
    _count: HotelsToLocationsCountAggregateOutputType | null
    _avg: HotelsToLocationsAvgAggregateOutputType | null
    _sum: HotelsToLocationsSumAggregateOutputType | null
    _min: HotelsToLocationsMinAggregateOutputType | null
    _max: HotelsToLocationsMaxAggregateOutputType | null
  }

  export type HotelsToLocationsAvgAggregateOutputType = {
    distance: number | null
  }

  export type HotelsToLocationsSumAggregateOutputType = {
    distance: number | null
  }

  export type HotelsToLocationsMinAggregateOutputType = {
    id: string | null
    distance: number | null
    hotelId: string | null
    locationId: string | null
  }

  export type HotelsToLocationsMaxAggregateOutputType = {
    id: string | null
    distance: number | null
    hotelId: string | null
    locationId: string | null
  }

  export type HotelsToLocationsCountAggregateOutputType = {
    id: number
    distance: number
    hotelId: number
    locationId: number
    _all: number
  }


  export type HotelsToLocationsAvgAggregateInputType = {
    distance?: true
  }

  export type HotelsToLocationsSumAggregateInputType = {
    distance?: true
  }

  export type HotelsToLocationsMinAggregateInputType = {
    id?: true
    distance?: true
    hotelId?: true
    locationId?: true
  }

  export type HotelsToLocationsMaxAggregateInputType = {
    id?: true
    distance?: true
    hotelId?: true
    locationId?: true
  }

  export type HotelsToLocationsCountAggregateInputType = {
    id?: true
    distance?: true
    hotelId?: true
    locationId?: true
    _all?: true
  }

  export type HotelsToLocationsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which HotelsToLocations to aggregate.
     */
    where?: HotelsToLocationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HotelsToLocations to fetch.
     */
    orderBy?: HotelsToLocationsOrderByWithRelationInput | HotelsToLocationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: HotelsToLocationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HotelsToLocations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HotelsToLocations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned HotelsToLocations
    **/
    _count?: true | HotelsToLocationsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: HotelsToLocationsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: HotelsToLocationsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: HotelsToLocationsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: HotelsToLocationsMaxAggregateInputType
  }

  export type GetHotelsToLocationsAggregateType<T extends HotelsToLocationsAggregateArgs> = {
        [P in keyof T & keyof AggregateHotelsToLocations]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHotelsToLocations[P]>
      : GetScalarType<T[P], AggregateHotelsToLocations[P]>
  }




  export type HotelsToLocationsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HotelsToLocationsWhereInput
    orderBy?: HotelsToLocationsOrderByWithAggregationInput | HotelsToLocationsOrderByWithAggregationInput[]
    by: HotelsToLocationsScalarFieldEnum[] | HotelsToLocationsScalarFieldEnum
    having?: HotelsToLocationsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: HotelsToLocationsCountAggregateInputType | true
    _avg?: HotelsToLocationsAvgAggregateInputType
    _sum?: HotelsToLocationsSumAggregateInputType
    _min?: HotelsToLocationsMinAggregateInputType
    _max?: HotelsToLocationsMaxAggregateInputType
  }

  export type HotelsToLocationsGroupByOutputType = {
    id: string
    distance: number
    hotelId: string
    locationId: string
    _count: HotelsToLocationsCountAggregateOutputType | null
    _avg: HotelsToLocationsAvgAggregateOutputType | null
    _sum: HotelsToLocationsSumAggregateOutputType | null
    _min: HotelsToLocationsMinAggregateOutputType | null
    _max: HotelsToLocationsMaxAggregateOutputType | null
  }

  type GetHotelsToLocationsGroupByPayload<T extends HotelsToLocationsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<HotelsToLocationsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof HotelsToLocationsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], HotelsToLocationsGroupByOutputType[P]>
            : GetScalarType<T[P], HotelsToLocationsGroupByOutputType[P]>
        }
      >
    >


  export type HotelsToLocationsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    distance?: boolean
    commuteTime?: boolean | CommuteTimeDefaultArgs<ExtArgs>
    hotelId?: boolean
    locationId?: boolean
    hotelDetails?: boolean | HotelDefaultArgs<ExtArgs>
    locationDetails?: boolean | LocationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["hotelsToLocations"]>



  export type HotelsToLocationsSelectScalar = {
    id?: boolean
    distance?: boolean
    hotelId?: boolean
    locationId?: boolean
  }

  export type HotelsToLocationsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "distance" | "commuteTime" | "hotelId" | "locationId", ExtArgs["result"]["hotelsToLocations"]>
  export type HotelsToLocationsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    hotelDetails?: boolean | HotelDefaultArgs<ExtArgs>
    locationDetails?: boolean | LocationDefaultArgs<ExtArgs>
  }

  export type $HotelsToLocationsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "HotelsToLocations"
    objects: {
      hotelDetails: Prisma.$HotelPayload<ExtArgs>
      locationDetails: Prisma.$LocationPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      distance: number
      hotelId: string
      locationId: string
    }, ExtArgs["result"]["hotelsToLocations"]>
    composites: {
      commuteTime: Prisma.$CommuteTimePayload[]
    }
  }

  type HotelsToLocationsGetPayload<S extends boolean | null | undefined | HotelsToLocationsDefaultArgs> = $Result.GetResult<Prisma.$HotelsToLocationsPayload, S>

  type HotelsToLocationsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<HotelsToLocationsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: HotelsToLocationsCountAggregateInputType | true
    }

  export interface HotelsToLocationsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['HotelsToLocations'], meta: { name: 'HotelsToLocations' } }
    /**
     * Find zero or one HotelsToLocations that matches the filter.
     * @param {HotelsToLocationsFindUniqueArgs} args - Arguments to find a HotelsToLocations
     * @example
     * // Get one HotelsToLocations
     * const hotelsToLocations = await prisma.hotelsToLocations.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends HotelsToLocationsFindUniqueArgs>(args: SelectSubset<T, HotelsToLocationsFindUniqueArgs<ExtArgs>>): Prisma__HotelsToLocationsClient<$Result.GetResult<Prisma.$HotelsToLocationsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one HotelsToLocations that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {HotelsToLocationsFindUniqueOrThrowArgs} args - Arguments to find a HotelsToLocations
     * @example
     * // Get one HotelsToLocations
     * const hotelsToLocations = await prisma.hotelsToLocations.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends HotelsToLocationsFindUniqueOrThrowArgs>(args: SelectSubset<T, HotelsToLocationsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__HotelsToLocationsClient<$Result.GetResult<Prisma.$HotelsToLocationsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first HotelsToLocations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HotelsToLocationsFindFirstArgs} args - Arguments to find a HotelsToLocations
     * @example
     * // Get one HotelsToLocations
     * const hotelsToLocations = await prisma.hotelsToLocations.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends HotelsToLocationsFindFirstArgs>(args?: SelectSubset<T, HotelsToLocationsFindFirstArgs<ExtArgs>>): Prisma__HotelsToLocationsClient<$Result.GetResult<Prisma.$HotelsToLocationsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first HotelsToLocations that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HotelsToLocationsFindFirstOrThrowArgs} args - Arguments to find a HotelsToLocations
     * @example
     * // Get one HotelsToLocations
     * const hotelsToLocations = await prisma.hotelsToLocations.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends HotelsToLocationsFindFirstOrThrowArgs>(args?: SelectSubset<T, HotelsToLocationsFindFirstOrThrowArgs<ExtArgs>>): Prisma__HotelsToLocationsClient<$Result.GetResult<Prisma.$HotelsToLocationsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more HotelsToLocations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HotelsToLocationsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all HotelsToLocations
     * const hotelsToLocations = await prisma.hotelsToLocations.findMany()
     * 
     * // Get first 10 HotelsToLocations
     * const hotelsToLocations = await prisma.hotelsToLocations.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const hotelsToLocationsWithIdOnly = await prisma.hotelsToLocations.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends HotelsToLocationsFindManyArgs>(args?: SelectSubset<T, HotelsToLocationsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HotelsToLocationsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a HotelsToLocations.
     * @param {HotelsToLocationsCreateArgs} args - Arguments to create a HotelsToLocations.
     * @example
     * // Create one HotelsToLocations
     * const HotelsToLocations = await prisma.hotelsToLocations.create({
     *   data: {
     *     // ... data to create a HotelsToLocations
     *   }
     * })
     * 
     */
    create<T extends HotelsToLocationsCreateArgs>(args: SelectSubset<T, HotelsToLocationsCreateArgs<ExtArgs>>): Prisma__HotelsToLocationsClient<$Result.GetResult<Prisma.$HotelsToLocationsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many HotelsToLocations.
     * @param {HotelsToLocationsCreateManyArgs} args - Arguments to create many HotelsToLocations.
     * @example
     * // Create many HotelsToLocations
     * const hotelsToLocations = await prisma.hotelsToLocations.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends HotelsToLocationsCreateManyArgs>(args?: SelectSubset<T, HotelsToLocationsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a HotelsToLocations.
     * @param {HotelsToLocationsDeleteArgs} args - Arguments to delete one HotelsToLocations.
     * @example
     * // Delete one HotelsToLocations
     * const HotelsToLocations = await prisma.hotelsToLocations.delete({
     *   where: {
     *     // ... filter to delete one HotelsToLocations
     *   }
     * })
     * 
     */
    delete<T extends HotelsToLocationsDeleteArgs>(args: SelectSubset<T, HotelsToLocationsDeleteArgs<ExtArgs>>): Prisma__HotelsToLocationsClient<$Result.GetResult<Prisma.$HotelsToLocationsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one HotelsToLocations.
     * @param {HotelsToLocationsUpdateArgs} args - Arguments to update one HotelsToLocations.
     * @example
     * // Update one HotelsToLocations
     * const hotelsToLocations = await prisma.hotelsToLocations.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends HotelsToLocationsUpdateArgs>(args: SelectSubset<T, HotelsToLocationsUpdateArgs<ExtArgs>>): Prisma__HotelsToLocationsClient<$Result.GetResult<Prisma.$HotelsToLocationsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more HotelsToLocations.
     * @param {HotelsToLocationsDeleteManyArgs} args - Arguments to filter HotelsToLocations to delete.
     * @example
     * // Delete a few HotelsToLocations
     * const { count } = await prisma.hotelsToLocations.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends HotelsToLocationsDeleteManyArgs>(args?: SelectSubset<T, HotelsToLocationsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more HotelsToLocations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HotelsToLocationsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many HotelsToLocations
     * const hotelsToLocations = await prisma.hotelsToLocations.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends HotelsToLocationsUpdateManyArgs>(args: SelectSubset<T, HotelsToLocationsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one HotelsToLocations.
     * @param {HotelsToLocationsUpsertArgs} args - Arguments to update or create a HotelsToLocations.
     * @example
     * // Update or create a HotelsToLocations
     * const hotelsToLocations = await prisma.hotelsToLocations.upsert({
     *   create: {
     *     // ... data to create a HotelsToLocations
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the HotelsToLocations we want to update
     *   }
     * })
     */
    upsert<T extends HotelsToLocationsUpsertArgs>(args: SelectSubset<T, HotelsToLocationsUpsertArgs<ExtArgs>>): Prisma__HotelsToLocationsClient<$Result.GetResult<Prisma.$HotelsToLocationsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more HotelsToLocations that matches the filter.
     * @param {HotelsToLocationsFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const hotelsToLocations = await prisma.hotelsToLocations.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: HotelsToLocationsFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a HotelsToLocations.
     * @param {HotelsToLocationsAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const hotelsToLocations = await prisma.hotelsToLocations.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: HotelsToLocationsAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of HotelsToLocations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HotelsToLocationsCountArgs} args - Arguments to filter HotelsToLocations to count.
     * @example
     * // Count the number of HotelsToLocations
     * const count = await prisma.hotelsToLocations.count({
     *   where: {
     *     // ... the filter for the HotelsToLocations we want to count
     *   }
     * })
    **/
    count<T extends HotelsToLocationsCountArgs>(
      args?: Subset<T, HotelsToLocationsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], HotelsToLocationsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a HotelsToLocations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HotelsToLocationsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends HotelsToLocationsAggregateArgs>(args: Subset<T, HotelsToLocationsAggregateArgs>): Prisma.PrismaPromise<GetHotelsToLocationsAggregateType<T>>

    /**
     * Group by HotelsToLocations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HotelsToLocationsGroupByArgs} args - Group by arguments.
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
      T extends HotelsToLocationsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: HotelsToLocationsGroupByArgs['orderBy'] }
        : { orderBy?: HotelsToLocationsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, HotelsToLocationsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHotelsToLocationsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the HotelsToLocations model
   */
  readonly fields: HotelsToLocationsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for HotelsToLocations.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__HotelsToLocationsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    hotelDetails<T extends HotelDefaultArgs<ExtArgs> = {}>(args?: Subset<T, HotelDefaultArgs<ExtArgs>>): Prisma__HotelClient<$Result.GetResult<Prisma.$HotelPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    locationDetails<T extends LocationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, LocationDefaultArgs<ExtArgs>>): Prisma__LocationClient<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the HotelsToLocations model
   */
  interface HotelsToLocationsFieldRefs {
    readonly id: FieldRef<"HotelsToLocations", 'String'>
    readonly distance: FieldRef<"HotelsToLocations", 'Float'>
    readonly hotelId: FieldRef<"HotelsToLocations", 'String'>
    readonly locationId: FieldRef<"HotelsToLocations", 'String'>
  }
    

  // Custom InputTypes
  /**
   * HotelsToLocations findUnique
   */
  export type HotelsToLocationsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HotelsToLocations
     */
    select?: HotelsToLocationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HotelsToLocations
     */
    omit?: HotelsToLocationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HotelsToLocationsInclude<ExtArgs> | null
    /**
     * Filter, which HotelsToLocations to fetch.
     */
    where: HotelsToLocationsWhereUniqueInput
  }

  /**
   * HotelsToLocations findUniqueOrThrow
   */
  export type HotelsToLocationsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HotelsToLocations
     */
    select?: HotelsToLocationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HotelsToLocations
     */
    omit?: HotelsToLocationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HotelsToLocationsInclude<ExtArgs> | null
    /**
     * Filter, which HotelsToLocations to fetch.
     */
    where: HotelsToLocationsWhereUniqueInput
  }

  /**
   * HotelsToLocations findFirst
   */
  export type HotelsToLocationsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HotelsToLocations
     */
    select?: HotelsToLocationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HotelsToLocations
     */
    omit?: HotelsToLocationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HotelsToLocationsInclude<ExtArgs> | null
    /**
     * Filter, which HotelsToLocations to fetch.
     */
    where?: HotelsToLocationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HotelsToLocations to fetch.
     */
    orderBy?: HotelsToLocationsOrderByWithRelationInput | HotelsToLocationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for HotelsToLocations.
     */
    cursor?: HotelsToLocationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HotelsToLocations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HotelsToLocations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of HotelsToLocations.
     */
    distinct?: HotelsToLocationsScalarFieldEnum | HotelsToLocationsScalarFieldEnum[]
  }

  /**
   * HotelsToLocations findFirstOrThrow
   */
  export type HotelsToLocationsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HotelsToLocations
     */
    select?: HotelsToLocationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HotelsToLocations
     */
    omit?: HotelsToLocationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HotelsToLocationsInclude<ExtArgs> | null
    /**
     * Filter, which HotelsToLocations to fetch.
     */
    where?: HotelsToLocationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HotelsToLocations to fetch.
     */
    orderBy?: HotelsToLocationsOrderByWithRelationInput | HotelsToLocationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for HotelsToLocations.
     */
    cursor?: HotelsToLocationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HotelsToLocations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HotelsToLocations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of HotelsToLocations.
     */
    distinct?: HotelsToLocationsScalarFieldEnum | HotelsToLocationsScalarFieldEnum[]
  }

  /**
   * HotelsToLocations findMany
   */
  export type HotelsToLocationsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HotelsToLocations
     */
    select?: HotelsToLocationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HotelsToLocations
     */
    omit?: HotelsToLocationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HotelsToLocationsInclude<ExtArgs> | null
    /**
     * Filter, which HotelsToLocations to fetch.
     */
    where?: HotelsToLocationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HotelsToLocations to fetch.
     */
    orderBy?: HotelsToLocationsOrderByWithRelationInput | HotelsToLocationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing HotelsToLocations.
     */
    cursor?: HotelsToLocationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HotelsToLocations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HotelsToLocations.
     */
    skip?: number
    distinct?: HotelsToLocationsScalarFieldEnum | HotelsToLocationsScalarFieldEnum[]
  }

  /**
   * HotelsToLocations create
   */
  export type HotelsToLocationsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HotelsToLocations
     */
    select?: HotelsToLocationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HotelsToLocations
     */
    omit?: HotelsToLocationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HotelsToLocationsInclude<ExtArgs> | null
    /**
     * The data needed to create a HotelsToLocations.
     */
    data: XOR<HotelsToLocationsCreateInput, HotelsToLocationsUncheckedCreateInput>
  }

  /**
   * HotelsToLocations createMany
   */
  export type HotelsToLocationsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many HotelsToLocations.
     */
    data: HotelsToLocationsCreateManyInput | HotelsToLocationsCreateManyInput[]
  }

  /**
   * HotelsToLocations update
   */
  export type HotelsToLocationsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HotelsToLocations
     */
    select?: HotelsToLocationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HotelsToLocations
     */
    omit?: HotelsToLocationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HotelsToLocationsInclude<ExtArgs> | null
    /**
     * The data needed to update a HotelsToLocations.
     */
    data: XOR<HotelsToLocationsUpdateInput, HotelsToLocationsUncheckedUpdateInput>
    /**
     * Choose, which HotelsToLocations to update.
     */
    where: HotelsToLocationsWhereUniqueInput
  }

  /**
   * HotelsToLocations updateMany
   */
  export type HotelsToLocationsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update HotelsToLocations.
     */
    data: XOR<HotelsToLocationsUpdateManyMutationInput, HotelsToLocationsUncheckedUpdateManyInput>
    /**
     * Filter which HotelsToLocations to update
     */
    where?: HotelsToLocationsWhereInput
    /**
     * Limit how many HotelsToLocations to update.
     */
    limit?: number
  }

  /**
   * HotelsToLocations upsert
   */
  export type HotelsToLocationsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HotelsToLocations
     */
    select?: HotelsToLocationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HotelsToLocations
     */
    omit?: HotelsToLocationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HotelsToLocationsInclude<ExtArgs> | null
    /**
     * The filter to search for the HotelsToLocations to update in case it exists.
     */
    where: HotelsToLocationsWhereUniqueInput
    /**
     * In case the HotelsToLocations found by the `where` argument doesn't exist, create a new HotelsToLocations with this data.
     */
    create: XOR<HotelsToLocationsCreateInput, HotelsToLocationsUncheckedCreateInput>
    /**
     * In case the HotelsToLocations was found with the provided `where` argument, update it with this data.
     */
    update: XOR<HotelsToLocationsUpdateInput, HotelsToLocationsUncheckedUpdateInput>
  }

  /**
   * HotelsToLocations delete
   */
  export type HotelsToLocationsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HotelsToLocations
     */
    select?: HotelsToLocationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HotelsToLocations
     */
    omit?: HotelsToLocationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HotelsToLocationsInclude<ExtArgs> | null
    /**
     * Filter which HotelsToLocations to delete.
     */
    where: HotelsToLocationsWhereUniqueInput
  }

  /**
   * HotelsToLocations deleteMany
   */
  export type HotelsToLocationsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which HotelsToLocations to delete
     */
    where?: HotelsToLocationsWhereInput
    /**
     * Limit how many HotelsToLocations to delete.
     */
    limit?: number
  }

  /**
   * HotelsToLocations findRaw
   */
  export type HotelsToLocationsFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * HotelsToLocations aggregateRaw
   */
  export type HotelsToLocationsAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * HotelsToLocations without action
   */
  export type HotelsToLocationsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HotelsToLocations
     */
    select?: HotelsToLocationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HotelsToLocations
     */
    omit?: HotelsToLocationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HotelsToLocationsInclude<ExtArgs> | null
  }


  /**
   * Model Location
   */

  export type AggregateLocation = {
    _count: LocationCountAggregateOutputType | null
    _avg: LocationAvgAggregateOutputType | null
    _sum: LocationSumAggregateOutputType | null
    _min: LocationMinAggregateOutputType | null
    _max: LocationMaxAggregateOutputType | null
  }

  export type LocationAvgAggregateOutputType = {
    recommendedVisitDurationInMinutes: number | null
    recommendedVisitMonths: number | null
  }

  export type LocationSumAggregateOutputType = {
    recommendedVisitDurationInMinutes: number | null
    recommendedVisitMonths: number[]
  }

  export type LocationMinAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    activeVisit: boolean | null
    recommendedTime: $Enums.RecommendedTime | null
    recommendedVisitDurationInMinutes: number | null
    cityId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type LocationMaxAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    activeVisit: boolean | null
    recommendedTime: $Enums.RecommendedTime | null
    recommendedVisitDurationInMinutes: number | null
    cityId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type LocationCountAggregateOutputType = {
    id: number
    name: number
    type: number
    tags: number
    description: number
    openDays: number
    activeVisit: number
    recommendedTime: number
    recommendedVisitDurationInMinutes: number
    foodOptions: number
    recommendedVisitMonths: number
    cityId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type LocationAvgAggregateInputType = {
    recommendedVisitDurationInMinutes?: true
    recommendedVisitMonths?: true
  }

  export type LocationSumAggregateInputType = {
    recommendedVisitDurationInMinutes?: true
    recommendedVisitMonths?: true
  }

  export type LocationMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    activeVisit?: true
    recommendedTime?: true
    recommendedVisitDurationInMinutes?: true
    cityId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type LocationMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    activeVisit?: true
    recommendedTime?: true
    recommendedVisitDurationInMinutes?: true
    cityId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type LocationCountAggregateInputType = {
    id?: true
    name?: true
    type?: true
    tags?: true
    description?: true
    openDays?: true
    activeVisit?: true
    recommendedTime?: true
    recommendedVisitDurationInMinutes?: true
    foodOptions?: true
    recommendedVisitMonths?: true
    cityId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type LocationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Location to aggregate.
     */
    where?: LocationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Locations to fetch.
     */
    orderBy?: LocationOrderByWithRelationInput | LocationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LocationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Locations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Locations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Locations
    **/
    _count?: true | LocationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LocationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LocationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LocationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LocationMaxAggregateInputType
  }

  export type GetLocationAggregateType<T extends LocationAggregateArgs> = {
        [P in keyof T & keyof AggregateLocation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLocation[P]>
      : GetScalarType<T[P], AggregateLocation[P]>
  }




  export type LocationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LocationWhereInput
    orderBy?: LocationOrderByWithAggregationInput | LocationOrderByWithAggregationInput[]
    by: LocationScalarFieldEnum[] | LocationScalarFieldEnum
    having?: LocationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LocationCountAggregateInputType | true
    _avg?: LocationAvgAggregateInputType
    _sum?: LocationSumAggregateInputType
    _min?: LocationMinAggregateInputType
    _max?: LocationMaxAggregateInputType
  }

  export type LocationGroupByOutputType = {
    id: string
    name: string
    type: $Enums.TripType[]
    tags: string[]
    description: string
    openDays: $Enums.WeekDays[]
    activeVisit: boolean
    recommendedTime: $Enums.RecommendedTime
    recommendedVisitDurationInMinutes: number
    foodOptions: $Enums.FoodOption[]
    recommendedVisitMonths: number[]
    cityId: string
    createdAt: Date
    updatedAt: Date
    _count: LocationCountAggregateOutputType | null
    _avg: LocationAvgAggregateOutputType | null
    _sum: LocationSumAggregateOutputType | null
    _min: LocationMinAggregateOutputType | null
    _max: LocationMaxAggregateOutputType | null
  }

  type GetLocationGroupByPayload<T extends LocationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LocationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LocationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LocationGroupByOutputType[P]>
            : GetScalarType<T[P], LocationGroupByOutputType[P]>
        }
      >
    >


  export type LocationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    type?: boolean
    tags?: boolean
    description?: boolean
    openDays?: boolean
    openHours?: boolean | OpenHoursDefaultArgs<ExtArgs>
    activeVisit?: boolean
    recommendedTime?: boolean
    recommendedVisitDurationInMinutes?: boolean
    foodOptions?: boolean
    availableActivities?: boolean | ActivityDefaultArgs<ExtArgs>
    caveats?: boolean | CaveatDefaultArgs<ExtArgs>
    recommendedVisitMonths?: boolean
    costPerPerson?: boolean | LocationCostDefaultArgs<ExtArgs>
    cityId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    city?: boolean | CityDefaultArgs<ExtArgs>
    hotels?: boolean | Location$hotelsArgs<ExtArgs>
    _count?: boolean | LocationCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["location"]>



  export type LocationSelectScalar = {
    id?: boolean
    name?: boolean
    type?: boolean
    tags?: boolean
    description?: boolean
    openDays?: boolean
    activeVisit?: boolean
    recommendedTime?: boolean
    recommendedVisitDurationInMinutes?: boolean
    foodOptions?: boolean
    recommendedVisitMonths?: boolean
    cityId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type LocationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "type" | "tags" | "description" | "openDays" | "openHours" | "activeVisit" | "recommendedTime" | "recommendedVisitDurationInMinutes" | "foodOptions" | "availableActivities" | "caveats" | "recommendedVisitMonths" | "costPerPerson" | "cityId" | "createdAt" | "updatedAt", ExtArgs["result"]["location"]>
  export type LocationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    city?: boolean | CityDefaultArgs<ExtArgs>
    hotels?: boolean | Location$hotelsArgs<ExtArgs>
    _count?: boolean | LocationCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $LocationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Location"
    objects: {
      city: Prisma.$CityPayload<ExtArgs>
      hotels: Prisma.$HotelsToLocationsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      type: $Enums.TripType[]
      tags: string[]
      description: string
      openDays: $Enums.WeekDays[]
      activeVisit: boolean
      recommendedTime: $Enums.RecommendedTime
      recommendedVisitDurationInMinutes: number
      foodOptions: $Enums.FoodOption[]
      recommendedVisitMonths: number[]
      cityId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["location"]>
    composites: {
      openHours: Prisma.$OpenHoursPayload
      availableActivities: Prisma.$ActivityPayload[]
      caveats: Prisma.$CaveatPayload[]
      costPerPerson: Prisma.$LocationCostPayload[]
    }
  }

  type LocationGetPayload<S extends boolean | null | undefined | LocationDefaultArgs> = $Result.GetResult<Prisma.$LocationPayload, S>

  type LocationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LocationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LocationCountAggregateInputType | true
    }

  export interface LocationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Location'], meta: { name: 'Location' } }
    /**
     * Find zero or one Location that matches the filter.
     * @param {LocationFindUniqueArgs} args - Arguments to find a Location
     * @example
     * // Get one Location
     * const location = await prisma.location.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LocationFindUniqueArgs>(args: SelectSubset<T, LocationFindUniqueArgs<ExtArgs>>): Prisma__LocationClient<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Location that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LocationFindUniqueOrThrowArgs} args - Arguments to find a Location
     * @example
     * // Get one Location
     * const location = await prisma.location.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LocationFindUniqueOrThrowArgs>(args: SelectSubset<T, LocationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LocationClient<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Location that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationFindFirstArgs} args - Arguments to find a Location
     * @example
     * // Get one Location
     * const location = await prisma.location.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LocationFindFirstArgs>(args?: SelectSubset<T, LocationFindFirstArgs<ExtArgs>>): Prisma__LocationClient<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Location that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationFindFirstOrThrowArgs} args - Arguments to find a Location
     * @example
     * // Get one Location
     * const location = await prisma.location.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LocationFindFirstOrThrowArgs>(args?: SelectSubset<T, LocationFindFirstOrThrowArgs<ExtArgs>>): Prisma__LocationClient<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Locations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Locations
     * const locations = await prisma.location.findMany()
     * 
     * // Get first 10 Locations
     * const locations = await prisma.location.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const locationWithIdOnly = await prisma.location.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LocationFindManyArgs>(args?: SelectSubset<T, LocationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Location.
     * @param {LocationCreateArgs} args - Arguments to create a Location.
     * @example
     * // Create one Location
     * const Location = await prisma.location.create({
     *   data: {
     *     // ... data to create a Location
     *   }
     * })
     * 
     */
    create<T extends LocationCreateArgs>(args: SelectSubset<T, LocationCreateArgs<ExtArgs>>): Prisma__LocationClient<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Locations.
     * @param {LocationCreateManyArgs} args - Arguments to create many Locations.
     * @example
     * // Create many Locations
     * const location = await prisma.location.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LocationCreateManyArgs>(args?: SelectSubset<T, LocationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Location.
     * @param {LocationDeleteArgs} args - Arguments to delete one Location.
     * @example
     * // Delete one Location
     * const Location = await prisma.location.delete({
     *   where: {
     *     // ... filter to delete one Location
     *   }
     * })
     * 
     */
    delete<T extends LocationDeleteArgs>(args: SelectSubset<T, LocationDeleteArgs<ExtArgs>>): Prisma__LocationClient<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Location.
     * @param {LocationUpdateArgs} args - Arguments to update one Location.
     * @example
     * // Update one Location
     * const location = await prisma.location.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LocationUpdateArgs>(args: SelectSubset<T, LocationUpdateArgs<ExtArgs>>): Prisma__LocationClient<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Locations.
     * @param {LocationDeleteManyArgs} args - Arguments to filter Locations to delete.
     * @example
     * // Delete a few Locations
     * const { count } = await prisma.location.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LocationDeleteManyArgs>(args?: SelectSubset<T, LocationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Locations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Locations
     * const location = await prisma.location.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LocationUpdateManyArgs>(args: SelectSubset<T, LocationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Location.
     * @param {LocationUpsertArgs} args - Arguments to update or create a Location.
     * @example
     * // Update or create a Location
     * const location = await prisma.location.upsert({
     *   create: {
     *     // ... data to create a Location
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Location we want to update
     *   }
     * })
     */
    upsert<T extends LocationUpsertArgs>(args: SelectSubset<T, LocationUpsertArgs<ExtArgs>>): Prisma__LocationClient<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Locations that matches the filter.
     * @param {LocationFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const location = await prisma.location.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: LocationFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Location.
     * @param {LocationAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const location = await prisma.location.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: LocationAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Locations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationCountArgs} args - Arguments to filter Locations to count.
     * @example
     * // Count the number of Locations
     * const count = await prisma.location.count({
     *   where: {
     *     // ... the filter for the Locations we want to count
     *   }
     * })
    **/
    count<T extends LocationCountArgs>(
      args?: Subset<T, LocationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LocationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Location.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LocationAggregateArgs>(args: Subset<T, LocationAggregateArgs>): Prisma.PrismaPromise<GetLocationAggregateType<T>>

    /**
     * Group by Location.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationGroupByArgs} args - Group by arguments.
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
      T extends LocationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LocationGroupByArgs['orderBy'] }
        : { orderBy?: LocationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, LocationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLocationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Location model
   */
  readonly fields: LocationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Location.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LocationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    city<T extends CityDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CityDefaultArgs<ExtArgs>>): Prisma__CityClient<$Result.GetResult<Prisma.$CityPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    hotels<T extends Location$hotelsArgs<ExtArgs> = {}>(args?: Subset<T, Location$hotelsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HotelsToLocationsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Location model
   */
  interface LocationFieldRefs {
    readonly id: FieldRef<"Location", 'String'>
    readonly name: FieldRef<"Location", 'String'>
    readonly type: FieldRef<"Location", 'TripType[]'>
    readonly tags: FieldRef<"Location", 'String[]'>
    readonly description: FieldRef<"Location", 'String'>
    readonly openDays: FieldRef<"Location", 'WeekDays[]'>
    readonly activeVisit: FieldRef<"Location", 'Boolean'>
    readonly recommendedTime: FieldRef<"Location", 'RecommendedTime'>
    readonly recommendedVisitDurationInMinutes: FieldRef<"Location", 'Int'>
    readonly foodOptions: FieldRef<"Location", 'FoodOption[]'>
    readonly recommendedVisitMonths: FieldRef<"Location", 'Int[]'>
    readonly cityId: FieldRef<"Location", 'String'>
    readonly createdAt: FieldRef<"Location", 'DateTime'>
    readonly updatedAt: FieldRef<"Location", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Location findUnique
   */
  export type LocationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationInclude<ExtArgs> | null
    /**
     * Filter, which Location to fetch.
     */
    where: LocationWhereUniqueInput
  }

  /**
   * Location findUniqueOrThrow
   */
  export type LocationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationInclude<ExtArgs> | null
    /**
     * Filter, which Location to fetch.
     */
    where: LocationWhereUniqueInput
  }

  /**
   * Location findFirst
   */
  export type LocationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationInclude<ExtArgs> | null
    /**
     * Filter, which Location to fetch.
     */
    where?: LocationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Locations to fetch.
     */
    orderBy?: LocationOrderByWithRelationInput | LocationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Locations.
     */
    cursor?: LocationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Locations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Locations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Locations.
     */
    distinct?: LocationScalarFieldEnum | LocationScalarFieldEnum[]
  }

  /**
   * Location findFirstOrThrow
   */
  export type LocationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationInclude<ExtArgs> | null
    /**
     * Filter, which Location to fetch.
     */
    where?: LocationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Locations to fetch.
     */
    orderBy?: LocationOrderByWithRelationInput | LocationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Locations.
     */
    cursor?: LocationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Locations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Locations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Locations.
     */
    distinct?: LocationScalarFieldEnum | LocationScalarFieldEnum[]
  }

  /**
   * Location findMany
   */
  export type LocationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationInclude<ExtArgs> | null
    /**
     * Filter, which Locations to fetch.
     */
    where?: LocationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Locations to fetch.
     */
    orderBy?: LocationOrderByWithRelationInput | LocationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Locations.
     */
    cursor?: LocationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Locations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Locations.
     */
    skip?: number
    distinct?: LocationScalarFieldEnum | LocationScalarFieldEnum[]
  }

  /**
   * Location create
   */
  export type LocationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationInclude<ExtArgs> | null
    /**
     * The data needed to create a Location.
     */
    data: XOR<LocationCreateInput, LocationUncheckedCreateInput>
  }

  /**
   * Location createMany
   */
  export type LocationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Locations.
     */
    data: LocationCreateManyInput | LocationCreateManyInput[]
  }

  /**
   * Location update
   */
  export type LocationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationInclude<ExtArgs> | null
    /**
     * The data needed to update a Location.
     */
    data: XOR<LocationUpdateInput, LocationUncheckedUpdateInput>
    /**
     * Choose, which Location to update.
     */
    where: LocationWhereUniqueInput
  }

  /**
   * Location updateMany
   */
  export type LocationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Locations.
     */
    data: XOR<LocationUpdateManyMutationInput, LocationUncheckedUpdateManyInput>
    /**
     * Filter which Locations to update
     */
    where?: LocationWhereInput
    /**
     * Limit how many Locations to update.
     */
    limit?: number
  }

  /**
   * Location upsert
   */
  export type LocationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationInclude<ExtArgs> | null
    /**
     * The filter to search for the Location to update in case it exists.
     */
    where: LocationWhereUniqueInput
    /**
     * In case the Location found by the `where` argument doesn't exist, create a new Location with this data.
     */
    create: XOR<LocationCreateInput, LocationUncheckedCreateInput>
    /**
     * In case the Location was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LocationUpdateInput, LocationUncheckedUpdateInput>
  }

  /**
   * Location delete
   */
  export type LocationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationInclude<ExtArgs> | null
    /**
     * Filter which Location to delete.
     */
    where: LocationWhereUniqueInput
  }

  /**
   * Location deleteMany
   */
  export type LocationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Locations to delete
     */
    where?: LocationWhereInput
    /**
     * Limit how many Locations to delete.
     */
    limit?: number
  }

  /**
   * Location findRaw
   */
  export type LocationFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * Location aggregateRaw
   */
  export type LocationAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * Location.hotels
   */
  export type Location$hotelsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HotelsToLocations
     */
    select?: HotelsToLocationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HotelsToLocations
     */
    omit?: HotelsToLocationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HotelsToLocationsInclude<ExtArgs> | null
    where?: HotelsToLocationsWhereInput
    orderBy?: HotelsToLocationsOrderByWithRelationInput | HotelsToLocationsOrderByWithRelationInput[]
    cursor?: HotelsToLocationsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: HotelsToLocationsScalarFieldEnum | HotelsToLocationsScalarFieldEnum[]
  }

  /**
   * Location without action
   */
  export type LocationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const CityScalarFieldEnum: {
    id: 'id',
    name: 'name',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CityScalarFieldEnum = (typeof CityScalarFieldEnum)[keyof typeof CityScalarFieldEnum]


  export const CityTransportScalarFieldEnum: {
    id: 'id',
    medium: 'medium',
    fromId: 'fromId',
    toId: 'toId',
    estimatedTimeInMinutes: 'estimatedTimeInMinutes',
    price: 'price',
    depertureTimes: 'depertureTimes'
  };

  export type CityTransportScalarFieldEnum = (typeof CityTransportScalarFieldEnum)[keyof typeof CityTransportScalarFieldEnum]


  export const HotelScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    tags: 'tags',
    rating: 'rating',
    amenities: 'amenities',
    recommendedFor: 'recommendedFor',
    cityId: 'cityId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type HotelScalarFieldEnum = (typeof HotelScalarFieldEnum)[keyof typeof HotelScalarFieldEnum]


  export const HotelsToLocationsScalarFieldEnum: {
    id: 'id',
    distance: 'distance',
    hotelId: 'hotelId',
    locationId: 'locationId'
  };

  export type HotelsToLocationsScalarFieldEnum = (typeof HotelsToLocationsScalarFieldEnum)[keyof typeof HotelsToLocationsScalarFieldEnum]


  export const LocationScalarFieldEnum: {
    id: 'id',
    name: 'name',
    type: 'type',
    tags: 'tags',
    description: 'description',
    openDays: 'openDays',
    activeVisit: 'activeVisit',
    recommendedTime: 'recommendedTime',
    recommendedVisitDurationInMinutes: 'recommendedVisitDurationInMinutes',
    foodOptions: 'foodOptions',
    recommendedVisitMonths: 'recommendedVisitMonths',
    cityId: 'cityId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type LocationScalarFieldEnum = (typeof LocationScalarFieldEnum)[keyof typeof LocationScalarFieldEnum]


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
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'TransportMedium'
   */
  export type EnumTransportMediumFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TransportMedium'>
    


  /**
   * Reference to a field of type 'TransportMedium[]'
   */
  export type ListEnumTransportMediumFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TransportMedium[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'TripType[]'
   */
  export type ListEnumTripTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TripType[]'>
    


  /**
   * Reference to a field of type 'TripType'
   */
  export type EnumTripTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TripType'>
    


  /**
   * Reference to a field of type 'WeekDays[]'
   */
  export type ListEnumWeekDaysFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'WeekDays[]'>
    


  /**
   * Reference to a field of type 'WeekDays'
   */
  export type EnumWeekDaysFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'WeekDays'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'RecommendedTime'
   */
  export type EnumRecommendedTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RecommendedTime'>
    


  /**
   * Reference to a field of type 'RecommendedTime[]'
   */
  export type ListEnumRecommendedTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RecommendedTime[]'>
    


  /**
   * Reference to a field of type 'FoodOption[]'
   */
  export type ListEnumFoodOptionFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'FoodOption[]'>
    


  /**
   * Reference to a field of type 'FoodOption'
   */
  export type EnumFoodOptionFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'FoodOption'>
    


  /**
   * Reference to a field of type 'RoomCategory'
   */
  export type EnumRoomCategoryFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RoomCategory'>
    


  /**
   * Reference to a field of type 'RoomCategory[]'
   */
  export type ListEnumRoomCategoryFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RoomCategory[]'>
    
  /**
   * Deep Input Types
   */


  export type CityWhereInput = {
    AND?: CityWhereInput | CityWhereInput[]
    OR?: CityWhereInput[]
    NOT?: CityWhereInput | CityWhereInput[]
    id?: StringFilter<"City"> | string
    name?: StringFilter<"City"> | string
    createdAt?: DateTimeFilter<"City"> | Date | string
    updatedAt?: DateTimeFilter<"City"> | Date | string
    hotels?: HotelListRelationFilter
    locations?: LocationListRelationFilter
    down?: CityTransportListRelationFilter
    up?: CityTransportListRelationFilter
  }

  export type CityOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    hotels?: HotelOrderByRelationAggregateInput
    locations?: LocationOrderByRelationAggregateInput
    down?: CityTransportOrderByRelationAggregateInput
    up?: CityTransportOrderByRelationAggregateInput
  }

  export type CityWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CityWhereInput | CityWhereInput[]
    OR?: CityWhereInput[]
    NOT?: CityWhereInput | CityWhereInput[]
    name?: StringFilter<"City"> | string
    createdAt?: DateTimeFilter<"City"> | Date | string
    updatedAt?: DateTimeFilter<"City"> | Date | string
    hotels?: HotelListRelationFilter
    locations?: LocationListRelationFilter
    down?: CityTransportListRelationFilter
    up?: CityTransportListRelationFilter
  }, "id">

  export type CityOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CityCountOrderByAggregateInput
    _max?: CityMaxOrderByAggregateInput
    _min?: CityMinOrderByAggregateInput
  }

  export type CityScalarWhereWithAggregatesInput = {
    AND?: CityScalarWhereWithAggregatesInput | CityScalarWhereWithAggregatesInput[]
    OR?: CityScalarWhereWithAggregatesInput[]
    NOT?: CityScalarWhereWithAggregatesInput | CityScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"City"> | string
    name?: StringWithAggregatesFilter<"City"> | string
    createdAt?: DateTimeWithAggregatesFilter<"City"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"City"> | Date | string
  }

  export type CityTransportWhereInput = {
    AND?: CityTransportWhereInput | CityTransportWhereInput[]
    OR?: CityTransportWhereInput[]
    NOT?: CityTransportWhereInput | CityTransportWhereInput[]
    id?: StringFilter<"CityTransport"> | string
    medium?: EnumTransportMediumFilter<"CityTransport"> | $Enums.TransportMedium
    fromId?: StringFilter<"CityTransport"> | string
    toId?: StringFilter<"CityTransport"> | string
    estimatedTimeInMinutes?: IntFilter<"CityTransport"> | number
    price?: FloatFilter<"CityTransport"> | number
    depertureTimes?: DateTimeNullableListFilter<"CityTransport">
    from?: XOR<CityScalarRelationFilter, CityWhereInput>
    to?: XOR<CityScalarRelationFilter, CityWhereInput>
  }

  export type CityTransportOrderByWithRelationInput = {
    id?: SortOrder
    medium?: SortOrder
    fromId?: SortOrder
    toId?: SortOrder
    estimatedTimeInMinutes?: SortOrder
    price?: SortOrder
    depertureTimes?: SortOrder
    from?: CityOrderByWithRelationInput
    to?: CityOrderByWithRelationInput
  }

  export type CityTransportWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CityTransportWhereInput | CityTransportWhereInput[]
    OR?: CityTransportWhereInput[]
    NOT?: CityTransportWhereInput | CityTransportWhereInput[]
    medium?: EnumTransportMediumFilter<"CityTransport"> | $Enums.TransportMedium
    fromId?: StringFilter<"CityTransport"> | string
    toId?: StringFilter<"CityTransport"> | string
    estimatedTimeInMinutes?: IntFilter<"CityTransport"> | number
    price?: FloatFilter<"CityTransport"> | number
    depertureTimes?: DateTimeNullableListFilter<"CityTransport">
    from?: XOR<CityScalarRelationFilter, CityWhereInput>
    to?: XOR<CityScalarRelationFilter, CityWhereInput>
  }, "id">

  export type CityTransportOrderByWithAggregationInput = {
    id?: SortOrder
    medium?: SortOrder
    fromId?: SortOrder
    toId?: SortOrder
    estimatedTimeInMinutes?: SortOrder
    price?: SortOrder
    depertureTimes?: SortOrder
    _count?: CityTransportCountOrderByAggregateInput
    _avg?: CityTransportAvgOrderByAggregateInput
    _max?: CityTransportMaxOrderByAggregateInput
    _min?: CityTransportMinOrderByAggregateInput
    _sum?: CityTransportSumOrderByAggregateInput
  }

  export type CityTransportScalarWhereWithAggregatesInput = {
    AND?: CityTransportScalarWhereWithAggregatesInput | CityTransportScalarWhereWithAggregatesInput[]
    OR?: CityTransportScalarWhereWithAggregatesInput[]
    NOT?: CityTransportScalarWhereWithAggregatesInput | CityTransportScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"CityTransport"> | string
    medium?: EnumTransportMediumWithAggregatesFilter<"CityTransport"> | $Enums.TransportMedium
    fromId?: StringWithAggregatesFilter<"CityTransport"> | string
    toId?: StringWithAggregatesFilter<"CityTransport"> | string
    estimatedTimeInMinutes?: IntWithAggregatesFilter<"CityTransport"> | number
    price?: FloatWithAggregatesFilter<"CityTransport"> | number
    depertureTimes?: DateTimeNullableListFilter<"CityTransport">
  }

  export type HotelWhereInput = {
    AND?: HotelWhereInput | HotelWhereInput[]
    OR?: HotelWhereInput[]
    NOT?: HotelWhereInput | HotelWhereInput[]
    id?: StringFilter<"Hotel"> | string
    name?: StringFilter<"Hotel"> | string
    description?: StringFilter<"Hotel"> | string
    rooms?: RoomTypesCompositeListFilter | RoomTypesObjectEqualityInput[]
    tags?: StringNullableListFilter<"Hotel">
    rating?: FloatFilter<"Hotel"> | number
    amenities?: StringNullableListFilter<"Hotel">
    recommendedFor?: EnumTripTypeNullableListFilter<"Hotel">
    cityId?: StringFilter<"Hotel"> | string
    createdAt?: DateTimeFilter<"Hotel"> | Date | string
    updatedAt?: DateTimeFilter<"Hotel"> | Date | string
    city?: XOR<CityScalarRelationFilter, CityWhereInput>
    locations?: HotelsToLocationsListRelationFilter
  }

  export type HotelOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    rooms?: RoomTypesOrderByCompositeAggregateInput
    tags?: SortOrder
    rating?: SortOrder
    amenities?: SortOrder
    recommendedFor?: SortOrder
    cityId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    city?: CityOrderByWithRelationInput
    locations?: HotelsToLocationsOrderByRelationAggregateInput
  }

  export type HotelWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: HotelWhereInput | HotelWhereInput[]
    OR?: HotelWhereInput[]
    NOT?: HotelWhereInput | HotelWhereInput[]
    name?: StringFilter<"Hotel"> | string
    description?: StringFilter<"Hotel"> | string
    rooms?: RoomTypesCompositeListFilter | RoomTypesObjectEqualityInput[]
    tags?: StringNullableListFilter<"Hotel">
    rating?: FloatFilter<"Hotel"> | number
    amenities?: StringNullableListFilter<"Hotel">
    recommendedFor?: EnumTripTypeNullableListFilter<"Hotel">
    cityId?: StringFilter<"Hotel"> | string
    createdAt?: DateTimeFilter<"Hotel"> | Date | string
    updatedAt?: DateTimeFilter<"Hotel"> | Date | string
    city?: XOR<CityScalarRelationFilter, CityWhereInput>
    locations?: HotelsToLocationsListRelationFilter
  }, "id">

  export type HotelOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    tags?: SortOrder
    rating?: SortOrder
    amenities?: SortOrder
    recommendedFor?: SortOrder
    cityId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: HotelCountOrderByAggregateInput
    _avg?: HotelAvgOrderByAggregateInput
    _max?: HotelMaxOrderByAggregateInput
    _min?: HotelMinOrderByAggregateInput
    _sum?: HotelSumOrderByAggregateInput
  }

  export type HotelScalarWhereWithAggregatesInput = {
    AND?: HotelScalarWhereWithAggregatesInput | HotelScalarWhereWithAggregatesInput[]
    OR?: HotelScalarWhereWithAggregatesInput[]
    NOT?: HotelScalarWhereWithAggregatesInput | HotelScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Hotel"> | string
    name?: StringWithAggregatesFilter<"Hotel"> | string
    description?: StringWithAggregatesFilter<"Hotel"> | string
    tags?: StringNullableListFilter<"Hotel">
    rating?: FloatWithAggregatesFilter<"Hotel"> | number
    amenities?: StringNullableListFilter<"Hotel">
    recommendedFor?: EnumTripTypeNullableListFilter<"Hotel">
    cityId?: StringWithAggregatesFilter<"Hotel"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Hotel"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Hotel"> | Date | string
  }

  export type HotelsToLocationsWhereInput = {
    AND?: HotelsToLocationsWhereInput | HotelsToLocationsWhereInput[]
    OR?: HotelsToLocationsWhereInput[]
    NOT?: HotelsToLocationsWhereInput | HotelsToLocationsWhereInput[]
    id?: StringFilter<"HotelsToLocations"> | string
    distance?: FloatFilter<"HotelsToLocations"> | number
    commuteTime?: CommuteTimeCompositeListFilter | CommuteTimeObjectEqualityInput[]
    hotelId?: StringFilter<"HotelsToLocations"> | string
    locationId?: StringFilter<"HotelsToLocations"> | string
    hotelDetails?: XOR<HotelScalarRelationFilter, HotelWhereInput>
    locationDetails?: XOR<LocationScalarRelationFilter, LocationWhereInput>
  }

  export type HotelsToLocationsOrderByWithRelationInput = {
    id?: SortOrder
    distance?: SortOrder
    commuteTime?: CommuteTimeOrderByCompositeAggregateInput
    hotelId?: SortOrder
    locationId?: SortOrder
    hotelDetails?: HotelOrderByWithRelationInput
    locationDetails?: LocationOrderByWithRelationInput
  }

  export type HotelsToLocationsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: HotelsToLocationsWhereInput | HotelsToLocationsWhereInput[]
    OR?: HotelsToLocationsWhereInput[]
    NOT?: HotelsToLocationsWhereInput | HotelsToLocationsWhereInput[]
    distance?: FloatFilter<"HotelsToLocations"> | number
    commuteTime?: CommuteTimeCompositeListFilter | CommuteTimeObjectEqualityInput[]
    hotelId?: StringFilter<"HotelsToLocations"> | string
    locationId?: StringFilter<"HotelsToLocations"> | string
    hotelDetails?: XOR<HotelScalarRelationFilter, HotelWhereInput>
    locationDetails?: XOR<LocationScalarRelationFilter, LocationWhereInput>
  }, "id">

  export type HotelsToLocationsOrderByWithAggregationInput = {
    id?: SortOrder
    distance?: SortOrder
    hotelId?: SortOrder
    locationId?: SortOrder
    _count?: HotelsToLocationsCountOrderByAggregateInput
    _avg?: HotelsToLocationsAvgOrderByAggregateInput
    _max?: HotelsToLocationsMaxOrderByAggregateInput
    _min?: HotelsToLocationsMinOrderByAggregateInput
    _sum?: HotelsToLocationsSumOrderByAggregateInput
  }

  export type HotelsToLocationsScalarWhereWithAggregatesInput = {
    AND?: HotelsToLocationsScalarWhereWithAggregatesInput | HotelsToLocationsScalarWhereWithAggregatesInput[]
    OR?: HotelsToLocationsScalarWhereWithAggregatesInput[]
    NOT?: HotelsToLocationsScalarWhereWithAggregatesInput | HotelsToLocationsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"HotelsToLocations"> | string
    distance?: FloatWithAggregatesFilter<"HotelsToLocations"> | number
    hotelId?: StringWithAggregatesFilter<"HotelsToLocations"> | string
    locationId?: StringWithAggregatesFilter<"HotelsToLocations"> | string
  }

  export type LocationWhereInput = {
    AND?: LocationWhereInput | LocationWhereInput[]
    OR?: LocationWhereInput[]
    NOT?: LocationWhereInput | LocationWhereInput[]
    id?: StringFilter<"Location"> | string
    name?: StringFilter<"Location"> | string
    type?: EnumTripTypeNullableListFilter<"Location">
    tags?: StringNullableListFilter<"Location">
    description?: StringFilter<"Location"> | string
    openDays?: EnumWeekDaysNullableListFilter<"Location">
    openHours?: XOR<OpenHoursCompositeFilter, OpenHoursObjectEqualityInput>
    activeVisit?: BoolFilter<"Location"> | boolean
    recommendedTime?: EnumRecommendedTimeFilter<"Location"> | $Enums.RecommendedTime
    recommendedVisitDurationInMinutes?: IntFilter<"Location"> | number
    foodOptions?: EnumFoodOptionNullableListFilter<"Location">
    availableActivities?: ActivityCompositeListFilter | ActivityObjectEqualityInput[]
    caveats?: CaveatCompositeListFilter | CaveatObjectEqualityInput[]
    recommendedVisitMonths?: IntNullableListFilter<"Location">
    costPerPerson?: LocationCostCompositeListFilter | LocationCostObjectEqualityInput[]
    cityId?: StringFilter<"Location"> | string
    createdAt?: DateTimeFilter<"Location"> | Date | string
    updatedAt?: DateTimeFilter<"Location"> | Date | string
    city?: XOR<CityScalarRelationFilter, CityWhereInput>
    hotels?: HotelsToLocationsListRelationFilter
  }

  export type LocationOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    tags?: SortOrder
    description?: SortOrder
    openDays?: SortOrder
    openHours?: OpenHoursOrderByInput
    activeVisit?: SortOrder
    recommendedTime?: SortOrder
    recommendedVisitDurationInMinutes?: SortOrder
    foodOptions?: SortOrder
    availableActivities?: ActivityOrderByCompositeAggregateInput
    caveats?: CaveatOrderByCompositeAggregateInput
    recommendedVisitMonths?: SortOrder
    costPerPerson?: LocationCostOrderByCompositeAggregateInput
    cityId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    city?: CityOrderByWithRelationInput
    hotels?: HotelsToLocationsOrderByRelationAggregateInput
  }

  export type LocationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: LocationWhereInput | LocationWhereInput[]
    OR?: LocationWhereInput[]
    NOT?: LocationWhereInput | LocationWhereInput[]
    name?: StringFilter<"Location"> | string
    type?: EnumTripTypeNullableListFilter<"Location">
    tags?: StringNullableListFilter<"Location">
    description?: StringFilter<"Location"> | string
    openDays?: EnumWeekDaysNullableListFilter<"Location">
    openHours?: XOR<OpenHoursCompositeFilter, OpenHoursObjectEqualityInput>
    activeVisit?: BoolFilter<"Location"> | boolean
    recommendedTime?: EnumRecommendedTimeFilter<"Location"> | $Enums.RecommendedTime
    recommendedVisitDurationInMinutes?: IntFilter<"Location"> | number
    foodOptions?: EnumFoodOptionNullableListFilter<"Location">
    availableActivities?: ActivityCompositeListFilter | ActivityObjectEqualityInput[]
    caveats?: CaveatCompositeListFilter | CaveatObjectEqualityInput[]
    recommendedVisitMonths?: IntNullableListFilter<"Location">
    costPerPerson?: LocationCostCompositeListFilter | LocationCostObjectEqualityInput[]
    cityId?: StringFilter<"Location"> | string
    createdAt?: DateTimeFilter<"Location"> | Date | string
    updatedAt?: DateTimeFilter<"Location"> | Date | string
    city?: XOR<CityScalarRelationFilter, CityWhereInput>
    hotels?: HotelsToLocationsListRelationFilter
  }, "id">

  export type LocationOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    tags?: SortOrder
    description?: SortOrder
    openDays?: SortOrder
    activeVisit?: SortOrder
    recommendedTime?: SortOrder
    recommendedVisitDurationInMinutes?: SortOrder
    foodOptions?: SortOrder
    recommendedVisitMonths?: SortOrder
    cityId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: LocationCountOrderByAggregateInput
    _avg?: LocationAvgOrderByAggregateInput
    _max?: LocationMaxOrderByAggregateInput
    _min?: LocationMinOrderByAggregateInput
    _sum?: LocationSumOrderByAggregateInput
  }

  export type LocationScalarWhereWithAggregatesInput = {
    AND?: LocationScalarWhereWithAggregatesInput | LocationScalarWhereWithAggregatesInput[]
    OR?: LocationScalarWhereWithAggregatesInput[]
    NOT?: LocationScalarWhereWithAggregatesInput | LocationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Location"> | string
    name?: StringWithAggregatesFilter<"Location"> | string
    type?: EnumTripTypeNullableListFilter<"Location">
    tags?: StringNullableListFilter<"Location">
    description?: StringWithAggregatesFilter<"Location"> | string
    openDays?: EnumWeekDaysNullableListFilter<"Location">
    activeVisit?: BoolWithAggregatesFilter<"Location"> | boolean
    recommendedTime?: EnumRecommendedTimeWithAggregatesFilter<"Location"> | $Enums.RecommendedTime
    recommendedVisitDurationInMinutes?: IntWithAggregatesFilter<"Location"> | number
    foodOptions?: EnumFoodOptionNullableListFilter<"Location">
    recommendedVisitMonths?: IntNullableListFilter<"Location">
    cityId?: StringWithAggregatesFilter<"Location"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Location"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Location"> | Date | string
  }

  export type CityCreateInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    hotels?: HotelCreateNestedManyWithoutCityInput
    locations?: LocationCreateNestedManyWithoutCityInput
    down?: CityTransportCreateNestedManyWithoutFromInput
    up?: CityTransportCreateNestedManyWithoutToInput
  }

  export type CityUncheckedCreateInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    hotels?: HotelUncheckedCreateNestedManyWithoutCityInput
    locations?: LocationUncheckedCreateNestedManyWithoutCityInput
    down?: CityTransportUncheckedCreateNestedManyWithoutFromInput
    up?: CityTransportUncheckedCreateNestedManyWithoutToInput
  }

  export type CityUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    hotels?: HotelUpdateManyWithoutCityNestedInput
    locations?: LocationUpdateManyWithoutCityNestedInput
    down?: CityTransportUpdateManyWithoutFromNestedInput
    up?: CityTransportUpdateManyWithoutToNestedInput
  }

  export type CityUncheckedUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    hotels?: HotelUncheckedUpdateManyWithoutCityNestedInput
    locations?: LocationUncheckedUpdateManyWithoutCityNestedInput
    down?: CityTransportUncheckedUpdateManyWithoutFromNestedInput
    up?: CityTransportUncheckedUpdateManyWithoutToNestedInput
  }

  export type CityCreateManyInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CityUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CityUncheckedUpdateManyInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CityTransportCreateInput = {
    id?: string
    medium: $Enums.TransportMedium
    estimatedTimeInMinutes: number
    price: number
    depertureTimes?: CityTransportCreatedepertureTimesInput | Date[] | string[]
    from: CityCreateNestedOneWithoutDownInput
    to: CityCreateNestedOneWithoutUpInput
  }

  export type CityTransportUncheckedCreateInput = {
    id?: string
    medium: $Enums.TransportMedium
    fromId: string
    toId: string
    estimatedTimeInMinutes: number
    price: number
    depertureTimes?: CityTransportCreatedepertureTimesInput | Date[] | string[]
  }

  export type CityTransportUpdateInput = {
    medium?: EnumTransportMediumFieldUpdateOperationsInput | $Enums.TransportMedium
    estimatedTimeInMinutes?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    depertureTimes?: CityTransportUpdatedepertureTimesInput | Date[] | string[]
    from?: CityUpdateOneRequiredWithoutDownNestedInput
    to?: CityUpdateOneRequiredWithoutUpNestedInput
  }

  export type CityTransportUncheckedUpdateInput = {
    medium?: EnumTransportMediumFieldUpdateOperationsInput | $Enums.TransportMedium
    fromId?: StringFieldUpdateOperationsInput | string
    toId?: StringFieldUpdateOperationsInput | string
    estimatedTimeInMinutes?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    depertureTimes?: CityTransportUpdatedepertureTimesInput | Date[] | string[]
  }

  export type CityTransportCreateManyInput = {
    id?: string
    medium: $Enums.TransportMedium
    fromId: string
    toId: string
    estimatedTimeInMinutes: number
    price: number
    depertureTimes?: CityTransportCreatedepertureTimesInput | Date[] | string[]
  }

  export type CityTransportUpdateManyMutationInput = {
    medium?: EnumTransportMediumFieldUpdateOperationsInput | $Enums.TransportMedium
    estimatedTimeInMinutes?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    depertureTimes?: CityTransportUpdatedepertureTimesInput | Date[] | string[]
  }

  export type CityTransportUncheckedUpdateManyInput = {
    medium?: EnumTransportMediumFieldUpdateOperationsInput | $Enums.TransportMedium
    fromId?: StringFieldUpdateOperationsInput | string
    toId?: StringFieldUpdateOperationsInput | string
    estimatedTimeInMinutes?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    depertureTimes?: CityTransportUpdatedepertureTimesInput | Date[] | string[]
  }

  export type HotelCreateInput = {
    id?: string
    name: string
    description: string
    rooms?: XOR<RoomTypesListCreateEnvelopeInput, RoomTypesCreateInput> | RoomTypesCreateInput[]
    tags?: HotelCreatetagsInput | string[]
    rating: number
    amenities?: HotelCreateamenitiesInput | string[]
    recommendedFor?: HotelCreaterecommendedForInput | $Enums.TripType[]
    createdAt?: Date | string
    updatedAt?: Date | string
    city: CityCreateNestedOneWithoutHotelsInput
    locations?: HotelsToLocationsCreateNestedManyWithoutHotelDetailsInput
  }

  export type HotelUncheckedCreateInput = {
    id?: string
    name: string
    description: string
    rooms?: XOR<RoomTypesListCreateEnvelopeInput, RoomTypesCreateInput> | RoomTypesCreateInput[]
    tags?: HotelCreatetagsInput | string[]
    rating: number
    amenities?: HotelCreateamenitiesInput | string[]
    recommendedFor?: HotelCreaterecommendedForInput | $Enums.TripType[]
    cityId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    locations?: HotelsToLocationsUncheckedCreateNestedManyWithoutHotelDetailsInput
  }

  export type HotelUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    rooms?: XOR<RoomTypesListUpdateEnvelopeInput, RoomTypesCreateInput> | RoomTypesCreateInput[]
    tags?: HotelUpdatetagsInput | string[]
    rating?: FloatFieldUpdateOperationsInput | number
    amenities?: HotelUpdateamenitiesInput | string[]
    recommendedFor?: HotelUpdaterecommendedForInput | $Enums.TripType[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    city?: CityUpdateOneRequiredWithoutHotelsNestedInput
    locations?: HotelsToLocationsUpdateManyWithoutHotelDetailsNestedInput
  }

  export type HotelUncheckedUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    rooms?: XOR<RoomTypesListUpdateEnvelopeInput, RoomTypesCreateInput> | RoomTypesCreateInput[]
    tags?: HotelUpdatetagsInput | string[]
    rating?: FloatFieldUpdateOperationsInput | number
    amenities?: HotelUpdateamenitiesInput | string[]
    recommendedFor?: HotelUpdaterecommendedForInput | $Enums.TripType[]
    cityId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    locations?: HotelsToLocationsUncheckedUpdateManyWithoutHotelDetailsNestedInput
  }

  export type HotelCreateManyInput = {
    id?: string
    name: string
    description: string
    rooms?: XOR<RoomTypesListCreateEnvelopeInput, RoomTypesCreateInput> | RoomTypesCreateInput[]
    tags?: HotelCreatetagsInput | string[]
    rating: number
    amenities?: HotelCreateamenitiesInput | string[]
    recommendedFor?: HotelCreaterecommendedForInput | $Enums.TripType[]
    cityId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type HotelUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    rooms?: XOR<RoomTypesListUpdateEnvelopeInput, RoomTypesCreateInput> | RoomTypesCreateInput[]
    tags?: HotelUpdatetagsInput | string[]
    rating?: FloatFieldUpdateOperationsInput | number
    amenities?: HotelUpdateamenitiesInput | string[]
    recommendedFor?: HotelUpdaterecommendedForInput | $Enums.TripType[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HotelUncheckedUpdateManyInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    rooms?: XOR<RoomTypesListUpdateEnvelopeInput, RoomTypesCreateInput> | RoomTypesCreateInput[]
    tags?: HotelUpdatetagsInput | string[]
    rating?: FloatFieldUpdateOperationsInput | number
    amenities?: HotelUpdateamenitiesInput | string[]
    recommendedFor?: HotelUpdaterecommendedForInput | $Enums.TripType[]
    cityId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HotelsToLocationsCreateInput = {
    id?: string
    distance: number
    commuteTime?: XOR<CommuteTimeListCreateEnvelopeInput, CommuteTimeCreateInput> | CommuteTimeCreateInput[]
    hotelDetails: HotelCreateNestedOneWithoutLocationsInput
    locationDetails: LocationCreateNestedOneWithoutHotelsInput
  }

  export type HotelsToLocationsUncheckedCreateInput = {
    id?: string
    distance: number
    commuteTime?: XOR<CommuteTimeListCreateEnvelopeInput, CommuteTimeCreateInput> | CommuteTimeCreateInput[]
    hotelId: string
    locationId: string
  }

  export type HotelsToLocationsUpdateInput = {
    distance?: FloatFieldUpdateOperationsInput | number
    commuteTime?: XOR<CommuteTimeListUpdateEnvelopeInput, CommuteTimeCreateInput> | CommuteTimeCreateInput[]
    hotelDetails?: HotelUpdateOneRequiredWithoutLocationsNestedInput
    locationDetails?: LocationUpdateOneRequiredWithoutHotelsNestedInput
  }

  export type HotelsToLocationsUncheckedUpdateInput = {
    distance?: FloatFieldUpdateOperationsInput | number
    commuteTime?: XOR<CommuteTimeListUpdateEnvelopeInput, CommuteTimeCreateInput> | CommuteTimeCreateInput[]
    hotelId?: StringFieldUpdateOperationsInput | string
    locationId?: StringFieldUpdateOperationsInput | string
  }

  export type HotelsToLocationsCreateManyInput = {
    id?: string
    distance: number
    commuteTime?: XOR<CommuteTimeListCreateEnvelopeInput, CommuteTimeCreateInput> | CommuteTimeCreateInput[]
    hotelId: string
    locationId: string
  }

  export type HotelsToLocationsUpdateManyMutationInput = {
    distance?: FloatFieldUpdateOperationsInput | number
    commuteTime?: XOR<CommuteTimeListUpdateEnvelopeInput, CommuteTimeCreateInput> | CommuteTimeCreateInput[]
  }

  export type HotelsToLocationsUncheckedUpdateManyInput = {
    distance?: FloatFieldUpdateOperationsInput | number
    commuteTime?: XOR<CommuteTimeListUpdateEnvelopeInput, CommuteTimeCreateInput> | CommuteTimeCreateInput[]
    hotelId?: StringFieldUpdateOperationsInput | string
    locationId?: StringFieldUpdateOperationsInput | string
  }

  export type LocationCreateInput = {
    id?: string
    name: string
    type?: LocationCreatetypeInput | $Enums.TripType[]
    tags?: LocationCreatetagsInput | string[]
    description: string
    openDays?: LocationCreateopenDaysInput | $Enums.WeekDays[]
    openHours: XOR<OpenHoursCreateEnvelopeInput, OpenHoursCreateInput>
    activeVisit: boolean
    recommendedTime: $Enums.RecommendedTime
    recommendedVisitDurationInMinutes: number
    foodOptions?: LocationCreatefoodOptionsInput | $Enums.FoodOption[]
    availableActivities?: XOR<ActivityListCreateEnvelopeInput, ActivityCreateInput> | ActivityCreateInput[]
    caveats?: XOR<CaveatListCreateEnvelopeInput, CaveatCreateInput> | CaveatCreateInput[]
    recommendedVisitMonths?: LocationCreaterecommendedVisitMonthsInput | number[]
    costPerPerson?: XOR<LocationCostListCreateEnvelopeInput, LocationCostCreateInput> | LocationCostCreateInput[]
    createdAt?: Date | string
    updatedAt?: Date | string
    city: CityCreateNestedOneWithoutLocationsInput
    hotels?: HotelsToLocationsCreateNestedManyWithoutLocationDetailsInput
  }

  export type LocationUncheckedCreateInput = {
    id?: string
    name: string
    type?: LocationCreatetypeInput | $Enums.TripType[]
    tags?: LocationCreatetagsInput | string[]
    description: string
    openDays?: LocationCreateopenDaysInput | $Enums.WeekDays[]
    openHours: XOR<OpenHoursCreateEnvelopeInput, OpenHoursCreateInput>
    activeVisit: boolean
    recommendedTime: $Enums.RecommendedTime
    recommendedVisitDurationInMinutes: number
    foodOptions?: LocationCreatefoodOptionsInput | $Enums.FoodOption[]
    availableActivities?: XOR<ActivityListCreateEnvelopeInput, ActivityCreateInput> | ActivityCreateInput[]
    caveats?: XOR<CaveatListCreateEnvelopeInput, CaveatCreateInput> | CaveatCreateInput[]
    recommendedVisitMonths?: LocationCreaterecommendedVisitMonthsInput | number[]
    costPerPerson?: XOR<LocationCostListCreateEnvelopeInput, LocationCostCreateInput> | LocationCostCreateInput[]
    cityId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    hotels?: HotelsToLocationsUncheckedCreateNestedManyWithoutLocationDetailsInput
  }

  export type LocationUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    type?: LocationUpdatetypeInput | $Enums.TripType[]
    tags?: LocationUpdatetagsInput | string[]
    description?: StringFieldUpdateOperationsInput | string
    openDays?: LocationUpdateopenDaysInput | $Enums.WeekDays[]
    openHours?: XOR<OpenHoursUpdateEnvelopeInput, OpenHoursCreateInput>
    activeVisit?: BoolFieldUpdateOperationsInput | boolean
    recommendedTime?: EnumRecommendedTimeFieldUpdateOperationsInput | $Enums.RecommendedTime
    recommendedVisitDurationInMinutes?: IntFieldUpdateOperationsInput | number
    foodOptions?: LocationUpdatefoodOptionsInput | $Enums.FoodOption[]
    availableActivities?: XOR<ActivityListUpdateEnvelopeInput, ActivityCreateInput> | ActivityCreateInput[]
    caveats?: XOR<CaveatListUpdateEnvelopeInput, CaveatCreateInput> | CaveatCreateInput[]
    recommendedVisitMonths?: LocationUpdaterecommendedVisitMonthsInput | number[]
    costPerPerson?: XOR<LocationCostListUpdateEnvelopeInput, LocationCostCreateInput> | LocationCostCreateInput[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    city?: CityUpdateOneRequiredWithoutLocationsNestedInput
    hotels?: HotelsToLocationsUpdateManyWithoutLocationDetailsNestedInput
  }

  export type LocationUncheckedUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    type?: LocationUpdatetypeInput | $Enums.TripType[]
    tags?: LocationUpdatetagsInput | string[]
    description?: StringFieldUpdateOperationsInput | string
    openDays?: LocationUpdateopenDaysInput | $Enums.WeekDays[]
    openHours?: XOR<OpenHoursUpdateEnvelopeInput, OpenHoursCreateInput>
    activeVisit?: BoolFieldUpdateOperationsInput | boolean
    recommendedTime?: EnumRecommendedTimeFieldUpdateOperationsInput | $Enums.RecommendedTime
    recommendedVisitDurationInMinutes?: IntFieldUpdateOperationsInput | number
    foodOptions?: LocationUpdatefoodOptionsInput | $Enums.FoodOption[]
    availableActivities?: XOR<ActivityListUpdateEnvelopeInput, ActivityCreateInput> | ActivityCreateInput[]
    caveats?: XOR<CaveatListUpdateEnvelopeInput, CaveatCreateInput> | CaveatCreateInput[]
    recommendedVisitMonths?: LocationUpdaterecommendedVisitMonthsInput | number[]
    costPerPerson?: XOR<LocationCostListUpdateEnvelopeInput, LocationCostCreateInput> | LocationCostCreateInput[]
    cityId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    hotels?: HotelsToLocationsUncheckedUpdateManyWithoutLocationDetailsNestedInput
  }

  export type LocationCreateManyInput = {
    id?: string
    name: string
    type?: LocationCreatetypeInput | $Enums.TripType[]
    tags?: LocationCreatetagsInput | string[]
    description: string
    openDays?: LocationCreateopenDaysInput | $Enums.WeekDays[]
    openHours: XOR<OpenHoursCreateEnvelopeInput, OpenHoursCreateInput>
    activeVisit: boolean
    recommendedTime: $Enums.RecommendedTime
    recommendedVisitDurationInMinutes: number
    foodOptions?: LocationCreatefoodOptionsInput | $Enums.FoodOption[]
    availableActivities?: XOR<ActivityListCreateEnvelopeInput, ActivityCreateInput> | ActivityCreateInput[]
    caveats?: XOR<CaveatListCreateEnvelopeInput, CaveatCreateInput> | CaveatCreateInput[]
    recommendedVisitMonths?: LocationCreaterecommendedVisitMonthsInput | number[]
    costPerPerson?: XOR<LocationCostListCreateEnvelopeInput, LocationCostCreateInput> | LocationCostCreateInput[]
    cityId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LocationUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    type?: LocationUpdatetypeInput | $Enums.TripType[]
    tags?: LocationUpdatetagsInput | string[]
    description?: StringFieldUpdateOperationsInput | string
    openDays?: LocationUpdateopenDaysInput | $Enums.WeekDays[]
    openHours?: XOR<OpenHoursUpdateEnvelopeInput, OpenHoursCreateInput>
    activeVisit?: BoolFieldUpdateOperationsInput | boolean
    recommendedTime?: EnumRecommendedTimeFieldUpdateOperationsInput | $Enums.RecommendedTime
    recommendedVisitDurationInMinutes?: IntFieldUpdateOperationsInput | number
    foodOptions?: LocationUpdatefoodOptionsInput | $Enums.FoodOption[]
    availableActivities?: XOR<ActivityListUpdateEnvelopeInput, ActivityCreateInput> | ActivityCreateInput[]
    caveats?: XOR<CaveatListUpdateEnvelopeInput, CaveatCreateInput> | CaveatCreateInput[]
    recommendedVisitMonths?: LocationUpdaterecommendedVisitMonthsInput | number[]
    costPerPerson?: XOR<LocationCostListUpdateEnvelopeInput, LocationCostCreateInput> | LocationCostCreateInput[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LocationUncheckedUpdateManyInput = {
    name?: StringFieldUpdateOperationsInput | string
    type?: LocationUpdatetypeInput | $Enums.TripType[]
    tags?: LocationUpdatetagsInput | string[]
    description?: StringFieldUpdateOperationsInput | string
    openDays?: LocationUpdateopenDaysInput | $Enums.WeekDays[]
    openHours?: XOR<OpenHoursUpdateEnvelopeInput, OpenHoursCreateInput>
    activeVisit?: BoolFieldUpdateOperationsInput | boolean
    recommendedTime?: EnumRecommendedTimeFieldUpdateOperationsInput | $Enums.RecommendedTime
    recommendedVisitDurationInMinutes?: IntFieldUpdateOperationsInput | number
    foodOptions?: LocationUpdatefoodOptionsInput | $Enums.FoodOption[]
    availableActivities?: XOR<ActivityListUpdateEnvelopeInput, ActivityCreateInput> | ActivityCreateInput[]
    caveats?: XOR<CaveatListUpdateEnvelopeInput, CaveatCreateInput> | CaveatCreateInput[]
    recommendedVisitMonths?: LocationUpdaterecommendedVisitMonthsInput | number[]
    costPerPerson?: XOR<LocationCostListUpdateEnvelopeInput, LocationCostCreateInput> | LocationCostCreateInput[]
    cityId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type HotelListRelationFilter = {
    every?: HotelWhereInput
    some?: HotelWhereInput
    none?: HotelWhereInput
  }

  export type LocationListRelationFilter = {
    every?: LocationWhereInput
    some?: LocationWhereInput
    none?: LocationWhereInput
  }

  export type CityTransportListRelationFilter = {
    every?: CityTransportWhereInput
    some?: CityTransportWhereInput
    none?: CityTransportWhereInput
  }

  export type HotelOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type LocationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CityTransportOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CityCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CityMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CityMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
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

  export type EnumTransportMediumFilter<$PrismaModel = never> = {
    equals?: $Enums.TransportMedium | EnumTransportMediumFieldRefInput<$PrismaModel>
    in?: $Enums.TransportMedium[] | ListEnumTransportMediumFieldRefInput<$PrismaModel>
    notIn?: $Enums.TransportMedium[] | ListEnumTransportMediumFieldRefInput<$PrismaModel>
    not?: NestedEnumTransportMediumFilter<$PrismaModel> | $Enums.TransportMedium
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

  export type DateTimeNullableListFilter<$PrismaModel = never> = {
    equals?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    has?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    hasEvery?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    hasSome?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type CityScalarRelationFilter = {
    is?: CityWhereInput
    isNot?: CityWhereInput
  }

  export type CityTransportCountOrderByAggregateInput = {
    id?: SortOrder
    medium?: SortOrder
    fromId?: SortOrder
    toId?: SortOrder
    estimatedTimeInMinutes?: SortOrder
    price?: SortOrder
    depertureTimes?: SortOrder
  }

  export type CityTransportAvgOrderByAggregateInput = {
    estimatedTimeInMinutes?: SortOrder
    price?: SortOrder
  }

  export type CityTransportMaxOrderByAggregateInput = {
    id?: SortOrder
    medium?: SortOrder
    fromId?: SortOrder
    toId?: SortOrder
    estimatedTimeInMinutes?: SortOrder
    price?: SortOrder
  }

  export type CityTransportMinOrderByAggregateInput = {
    id?: SortOrder
    medium?: SortOrder
    fromId?: SortOrder
    toId?: SortOrder
    estimatedTimeInMinutes?: SortOrder
    price?: SortOrder
  }

  export type CityTransportSumOrderByAggregateInput = {
    estimatedTimeInMinutes?: SortOrder
    price?: SortOrder
  }

  export type EnumTransportMediumWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TransportMedium | EnumTransportMediumFieldRefInput<$PrismaModel>
    in?: $Enums.TransportMedium[] | ListEnumTransportMediumFieldRefInput<$PrismaModel>
    notIn?: $Enums.TransportMedium[] | ListEnumTransportMediumFieldRefInput<$PrismaModel>
    not?: NestedEnumTransportMediumWithAggregatesFilter<$PrismaModel> | $Enums.TransportMedium
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTransportMediumFilter<$PrismaModel>
    _max?: NestedEnumTransportMediumFilter<$PrismaModel>
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

  export type RoomTypesCompositeListFilter = {
    equals?: RoomTypesObjectEqualityInput[]
    every?: RoomTypesWhereInput
    some?: RoomTypesWhereInput
    none?: RoomTypesWhereInput
    isEmpty?: boolean
    isSet?: boolean
  }

  export type RoomTypesObjectEqualityInput = {
    name: $Enums.RoomCategory
    description: string
    capacity: number
    price: number
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type EnumTripTypeNullableListFilter<$PrismaModel = never> = {
    equals?: $Enums.TripType[] | ListEnumTripTypeFieldRefInput<$PrismaModel> | null
    has?: $Enums.TripType | EnumTripTypeFieldRefInput<$PrismaModel> | null
    hasEvery?: $Enums.TripType[] | ListEnumTripTypeFieldRefInput<$PrismaModel>
    hasSome?: $Enums.TripType[] | ListEnumTripTypeFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type HotelsToLocationsListRelationFilter = {
    every?: HotelsToLocationsWhereInput
    some?: HotelsToLocationsWhereInput
    none?: HotelsToLocationsWhereInput
  }

  export type RoomTypesOrderByCompositeAggregateInput = {
    _count?: SortOrder
  }

  export type HotelsToLocationsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type HotelCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    tags?: SortOrder
    rating?: SortOrder
    amenities?: SortOrder
    recommendedFor?: SortOrder
    cityId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type HotelAvgOrderByAggregateInput = {
    rating?: SortOrder
  }

  export type HotelMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    rating?: SortOrder
    cityId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type HotelMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    rating?: SortOrder
    cityId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type HotelSumOrderByAggregateInput = {
    rating?: SortOrder
  }

  export type CommuteTimeCompositeListFilter = {
    equals?: CommuteTimeObjectEqualityInput[]
    every?: CommuteTimeWhereInput
    some?: CommuteTimeWhereInput
    none?: CommuteTimeWhereInput
    isEmpty?: boolean
    isSet?: boolean
  }

  export type CommuteTimeObjectEqualityInput = {
    medium: string
    estimatedTimeInMinutes: number
    description: string
  }

  export type HotelScalarRelationFilter = {
    is?: HotelWhereInput
    isNot?: HotelWhereInput
  }

  export type LocationScalarRelationFilter = {
    is?: LocationWhereInput
    isNot?: LocationWhereInput
  }

  export type CommuteTimeOrderByCompositeAggregateInput = {
    _count?: SortOrder
  }

  export type HotelsToLocationsCountOrderByAggregateInput = {
    id?: SortOrder
    distance?: SortOrder
    hotelId?: SortOrder
    locationId?: SortOrder
  }

  export type HotelsToLocationsAvgOrderByAggregateInput = {
    distance?: SortOrder
  }

  export type HotelsToLocationsMaxOrderByAggregateInput = {
    id?: SortOrder
    distance?: SortOrder
    hotelId?: SortOrder
    locationId?: SortOrder
  }

  export type HotelsToLocationsMinOrderByAggregateInput = {
    id?: SortOrder
    distance?: SortOrder
    hotelId?: SortOrder
    locationId?: SortOrder
  }

  export type HotelsToLocationsSumOrderByAggregateInput = {
    distance?: SortOrder
  }

  export type EnumWeekDaysNullableListFilter<$PrismaModel = never> = {
    equals?: $Enums.WeekDays[] | ListEnumWeekDaysFieldRefInput<$PrismaModel> | null
    has?: $Enums.WeekDays | EnumWeekDaysFieldRefInput<$PrismaModel> | null
    hasEvery?: $Enums.WeekDays[] | ListEnumWeekDaysFieldRefInput<$PrismaModel>
    hasSome?: $Enums.WeekDays[] | ListEnumWeekDaysFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type OpenHoursCompositeFilter = {
    equals?: OpenHoursObjectEqualityInput
    is?: OpenHoursWhereInput
    isNot?: OpenHoursWhereInput
  }

  export type OpenHoursObjectEqualityInput = {
    start: string
    end: string
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type EnumRecommendedTimeFilter<$PrismaModel = never> = {
    equals?: $Enums.RecommendedTime | EnumRecommendedTimeFieldRefInput<$PrismaModel>
    in?: $Enums.RecommendedTime[] | ListEnumRecommendedTimeFieldRefInput<$PrismaModel>
    notIn?: $Enums.RecommendedTime[] | ListEnumRecommendedTimeFieldRefInput<$PrismaModel>
    not?: NestedEnumRecommendedTimeFilter<$PrismaModel> | $Enums.RecommendedTime
  }

  export type EnumFoodOptionNullableListFilter<$PrismaModel = never> = {
    equals?: $Enums.FoodOption[] | ListEnumFoodOptionFieldRefInput<$PrismaModel> | null
    has?: $Enums.FoodOption | EnumFoodOptionFieldRefInput<$PrismaModel> | null
    hasEvery?: $Enums.FoodOption[] | ListEnumFoodOptionFieldRefInput<$PrismaModel>
    hasSome?: $Enums.FoodOption[] | ListEnumFoodOptionFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type ActivityCompositeListFilter = {
    equals?: ActivityObjectEqualityInput[]
    every?: ActivityWhereInput
    some?: ActivityWhereInput
    none?: ActivityWhereInput
    isEmpty?: boolean
    isSet?: boolean
  }

  export type ActivityObjectEqualityInput = {
    name: string
    description: string
  }

  export type CaveatCompositeListFilter = {
    equals?: CaveatObjectEqualityInput[]
    every?: CaveatWhereInput
    some?: CaveatWhereInput
    none?: CaveatWhereInput
    isEmpty?: boolean
    isSet?: boolean
  }

  export type CaveatObjectEqualityInput = {
    name: string
    description: string
  }

  export type IntNullableListFilter<$PrismaModel = never> = {
    equals?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    has?: number | IntFieldRefInput<$PrismaModel> | null
    hasEvery?: number[] | ListIntFieldRefInput<$PrismaModel>
    hasSome?: number[] | ListIntFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type LocationCostCompositeListFilter = {
    equals?: LocationCostObjectEqualityInput[]
    every?: LocationCostWhereInput
    some?: LocationCostWhereInput
    none?: LocationCostWhereInput
    isEmpty?: boolean
    isSet?: boolean
  }

  export type LocationCostObjectEqualityInput = {
    tier: string
    cost: number
  }

  export type OpenHoursOrderByInput = {
    start?: SortOrder
    end?: SortOrder
  }

  export type ActivityOrderByCompositeAggregateInput = {
    _count?: SortOrder
  }

  export type CaveatOrderByCompositeAggregateInput = {
    _count?: SortOrder
  }

  export type LocationCostOrderByCompositeAggregateInput = {
    _count?: SortOrder
  }

  export type LocationCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    tags?: SortOrder
    description?: SortOrder
    openDays?: SortOrder
    activeVisit?: SortOrder
    recommendedTime?: SortOrder
    recommendedVisitDurationInMinutes?: SortOrder
    foodOptions?: SortOrder
    recommendedVisitMonths?: SortOrder
    cityId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LocationAvgOrderByAggregateInput = {
    recommendedVisitDurationInMinutes?: SortOrder
    recommendedVisitMonths?: SortOrder
  }

  export type LocationMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    activeVisit?: SortOrder
    recommendedTime?: SortOrder
    recommendedVisitDurationInMinutes?: SortOrder
    cityId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LocationMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    activeVisit?: SortOrder
    recommendedTime?: SortOrder
    recommendedVisitDurationInMinutes?: SortOrder
    cityId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LocationSumOrderByAggregateInput = {
    recommendedVisitDurationInMinutes?: SortOrder
    recommendedVisitMonths?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type EnumRecommendedTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RecommendedTime | EnumRecommendedTimeFieldRefInput<$PrismaModel>
    in?: $Enums.RecommendedTime[] | ListEnumRecommendedTimeFieldRefInput<$PrismaModel>
    notIn?: $Enums.RecommendedTime[] | ListEnumRecommendedTimeFieldRefInput<$PrismaModel>
    not?: NestedEnumRecommendedTimeWithAggregatesFilter<$PrismaModel> | $Enums.RecommendedTime
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRecommendedTimeFilter<$PrismaModel>
    _max?: NestedEnumRecommendedTimeFilter<$PrismaModel>
  }

  export type HotelCreateNestedManyWithoutCityInput = {
    create?: XOR<HotelCreateWithoutCityInput, HotelUncheckedCreateWithoutCityInput> | HotelCreateWithoutCityInput[] | HotelUncheckedCreateWithoutCityInput[]
    connectOrCreate?: HotelCreateOrConnectWithoutCityInput | HotelCreateOrConnectWithoutCityInput[]
    createMany?: HotelCreateManyCityInputEnvelope
    connect?: HotelWhereUniqueInput | HotelWhereUniqueInput[]
  }

  export type LocationCreateNestedManyWithoutCityInput = {
    create?: XOR<LocationCreateWithoutCityInput, LocationUncheckedCreateWithoutCityInput> | LocationCreateWithoutCityInput[] | LocationUncheckedCreateWithoutCityInput[]
    connectOrCreate?: LocationCreateOrConnectWithoutCityInput | LocationCreateOrConnectWithoutCityInput[]
    createMany?: LocationCreateManyCityInputEnvelope
    connect?: LocationWhereUniqueInput | LocationWhereUniqueInput[]
  }

  export type CityTransportCreateNestedManyWithoutFromInput = {
    create?: XOR<CityTransportCreateWithoutFromInput, CityTransportUncheckedCreateWithoutFromInput> | CityTransportCreateWithoutFromInput[] | CityTransportUncheckedCreateWithoutFromInput[]
    connectOrCreate?: CityTransportCreateOrConnectWithoutFromInput | CityTransportCreateOrConnectWithoutFromInput[]
    createMany?: CityTransportCreateManyFromInputEnvelope
    connect?: CityTransportWhereUniqueInput | CityTransportWhereUniqueInput[]
  }

  export type CityTransportCreateNestedManyWithoutToInput = {
    create?: XOR<CityTransportCreateWithoutToInput, CityTransportUncheckedCreateWithoutToInput> | CityTransportCreateWithoutToInput[] | CityTransportUncheckedCreateWithoutToInput[]
    connectOrCreate?: CityTransportCreateOrConnectWithoutToInput | CityTransportCreateOrConnectWithoutToInput[]
    createMany?: CityTransportCreateManyToInputEnvelope
    connect?: CityTransportWhereUniqueInput | CityTransportWhereUniqueInput[]
  }

  export type HotelUncheckedCreateNestedManyWithoutCityInput = {
    create?: XOR<HotelCreateWithoutCityInput, HotelUncheckedCreateWithoutCityInput> | HotelCreateWithoutCityInput[] | HotelUncheckedCreateWithoutCityInput[]
    connectOrCreate?: HotelCreateOrConnectWithoutCityInput | HotelCreateOrConnectWithoutCityInput[]
    createMany?: HotelCreateManyCityInputEnvelope
    connect?: HotelWhereUniqueInput | HotelWhereUniqueInput[]
  }

  export type LocationUncheckedCreateNestedManyWithoutCityInput = {
    create?: XOR<LocationCreateWithoutCityInput, LocationUncheckedCreateWithoutCityInput> | LocationCreateWithoutCityInput[] | LocationUncheckedCreateWithoutCityInput[]
    connectOrCreate?: LocationCreateOrConnectWithoutCityInput | LocationCreateOrConnectWithoutCityInput[]
    createMany?: LocationCreateManyCityInputEnvelope
    connect?: LocationWhereUniqueInput | LocationWhereUniqueInput[]
  }

  export type CityTransportUncheckedCreateNestedManyWithoutFromInput = {
    create?: XOR<CityTransportCreateWithoutFromInput, CityTransportUncheckedCreateWithoutFromInput> | CityTransportCreateWithoutFromInput[] | CityTransportUncheckedCreateWithoutFromInput[]
    connectOrCreate?: CityTransportCreateOrConnectWithoutFromInput | CityTransportCreateOrConnectWithoutFromInput[]
    createMany?: CityTransportCreateManyFromInputEnvelope
    connect?: CityTransportWhereUniqueInput | CityTransportWhereUniqueInput[]
  }

  export type CityTransportUncheckedCreateNestedManyWithoutToInput = {
    create?: XOR<CityTransportCreateWithoutToInput, CityTransportUncheckedCreateWithoutToInput> | CityTransportCreateWithoutToInput[] | CityTransportUncheckedCreateWithoutToInput[]
    connectOrCreate?: CityTransportCreateOrConnectWithoutToInput | CityTransportCreateOrConnectWithoutToInput[]
    createMany?: CityTransportCreateManyToInputEnvelope
    connect?: CityTransportWhereUniqueInput | CityTransportWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type HotelUpdateManyWithoutCityNestedInput = {
    create?: XOR<HotelCreateWithoutCityInput, HotelUncheckedCreateWithoutCityInput> | HotelCreateWithoutCityInput[] | HotelUncheckedCreateWithoutCityInput[]
    connectOrCreate?: HotelCreateOrConnectWithoutCityInput | HotelCreateOrConnectWithoutCityInput[]
    upsert?: HotelUpsertWithWhereUniqueWithoutCityInput | HotelUpsertWithWhereUniqueWithoutCityInput[]
    createMany?: HotelCreateManyCityInputEnvelope
    set?: HotelWhereUniqueInput | HotelWhereUniqueInput[]
    disconnect?: HotelWhereUniqueInput | HotelWhereUniqueInput[]
    delete?: HotelWhereUniqueInput | HotelWhereUniqueInput[]
    connect?: HotelWhereUniqueInput | HotelWhereUniqueInput[]
    update?: HotelUpdateWithWhereUniqueWithoutCityInput | HotelUpdateWithWhereUniqueWithoutCityInput[]
    updateMany?: HotelUpdateManyWithWhereWithoutCityInput | HotelUpdateManyWithWhereWithoutCityInput[]
    deleteMany?: HotelScalarWhereInput | HotelScalarWhereInput[]
  }

  export type LocationUpdateManyWithoutCityNestedInput = {
    create?: XOR<LocationCreateWithoutCityInput, LocationUncheckedCreateWithoutCityInput> | LocationCreateWithoutCityInput[] | LocationUncheckedCreateWithoutCityInput[]
    connectOrCreate?: LocationCreateOrConnectWithoutCityInput | LocationCreateOrConnectWithoutCityInput[]
    upsert?: LocationUpsertWithWhereUniqueWithoutCityInput | LocationUpsertWithWhereUniqueWithoutCityInput[]
    createMany?: LocationCreateManyCityInputEnvelope
    set?: LocationWhereUniqueInput | LocationWhereUniqueInput[]
    disconnect?: LocationWhereUniqueInput | LocationWhereUniqueInput[]
    delete?: LocationWhereUniqueInput | LocationWhereUniqueInput[]
    connect?: LocationWhereUniqueInput | LocationWhereUniqueInput[]
    update?: LocationUpdateWithWhereUniqueWithoutCityInput | LocationUpdateWithWhereUniqueWithoutCityInput[]
    updateMany?: LocationUpdateManyWithWhereWithoutCityInput | LocationUpdateManyWithWhereWithoutCityInput[]
    deleteMany?: LocationScalarWhereInput | LocationScalarWhereInput[]
  }

  export type CityTransportUpdateManyWithoutFromNestedInput = {
    create?: XOR<CityTransportCreateWithoutFromInput, CityTransportUncheckedCreateWithoutFromInput> | CityTransportCreateWithoutFromInput[] | CityTransportUncheckedCreateWithoutFromInput[]
    connectOrCreate?: CityTransportCreateOrConnectWithoutFromInput | CityTransportCreateOrConnectWithoutFromInput[]
    upsert?: CityTransportUpsertWithWhereUniqueWithoutFromInput | CityTransportUpsertWithWhereUniqueWithoutFromInput[]
    createMany?: CityTransportCreateManyFromInputEnvelope
    set?: CityTransportWhereUniqueInput | CityTransportWhereUniqueInput[]
    disconnect?: CityTransportWhereUniqueInput | CityTransportWhereUniqueInput[]
    delete?: CityTransportWhereUniqueInput | CityTransportWhereUniqueInput[]
    connect?: CityTransportWhereUniqueInput | CityTransportWhereUniqueInput[]
    update?: CityTransportUpdateWithWhereUniqueWithoutFromInput | CityTransportUpdateWithWhereUniqueWithoutFromInput[]
    updateMany?: CityTransportUpdateManyWithWhereWithoutFromInput | CityTransportUpdateManyWithWhereWithoutFromInput[]
    deleteMany?: CityTransportScalarWhereInput | CityTransportScalarWhereInput[]
  }

  export type CityTransportUpdateManyWithoutToNestedInput = {
    create?: XOR<CityTransportCreateWithoutToInput, CityTransportUncheckedCreateWithoutToInput> | CityTransportCreateWithoutToInput[] | CityTransportUncheckedCreateWithoutToInput[]
    connectOrCreate?: CityTransportCreateOrConnectWithoutToInput | CityTransportCreateOrConnectWithoutToInput[]
    upsert?: CityTransportUpsertWithWhereUniqueWithoutToInput | CityTransportUpsertWithWhereUniqueWithoutToInput[]
    createMany?: CityTransportCreateManyToInputEnvelope
    set?: CityTransportWhereUniqueInput | CityTransportWhereUniqueInput[]
    disconnect?: CityTransportWhereUniqueInput | CityTransportWhereUniqueInput[]
    delete?: CityTransportWhereUniqueInput | CityTransportWhereUniqueInput[]
    connect?: CityTransportWhereUniqueInput | CityTransportWhereUniqueInput[]
    update?: CityTransportUpdateWithWhereUniqueWithoutToInput | CityTransportUpdateWithWhereUniqueWithoutToInput[]
    updateMany?: CityTransportUpdateManyWithWhereWithoutToInput | CityTransportUpdateManyWithWhereWithoutToInput[]
    deleteMany?: CityTransportScalarWhereInput | CityTransportScalarWhereInput[]
  }

  export type HotelUncheckedUpdateManyWithoutCityNestedInput = {
    create?: XOR<HotelCreateWithoutCityInput, HotelUncheckedCreateWithoutCityInput> | HotelCreateWithoutCityInput[] | HotelUncheckedCreateWithoutCityInput[]
    connectOrCreate?: HotelCreateOrConnectWithoutCityInput | HotelCreateOrConnectWithoutCityInput[]
    upsert?: HotelUpsertWithWhereUniqueWithoutCityInput | HotelUpsertWithWhereUniqueWithoutCityInput[]
    createMany?: HotelCreateManyCityInputEnvelope
    set?: HotelWhereUniqueInput | HotelWhereUniqueInput[]
    disconnect?: HotelWhereUniqueInput | HotelWhereUniqueInput[]
    delete?: HotelWhereUniqueInput | HotelWhereUniqueInput[]
    connect?: HotelWhereUniqueInput | HotelWhereUniqueInput[]
    update?: HotelUpdateWithWhereUniqueWithoutCityInput | HotelUpdateWithWhereUniqueWithoutCityInput[]
    updateMany?: HotelUpdateManyWithWhereWithoutCityInput | HotelUpdateManyWithWhereWithoutCityInput[]
    deleteMany?: HotelScalarWhereInput | HotelScalarWhereInput[]
  }

  export type LocationUncheckedUpdateManyWithoutCityNestedInput = {
    create?: XOR<LocationCreateWithoutCityInput, LocationUncheckedCreateWithoutCityInput> | LocationCreateWithoutCityInput[] | LocationUncheckedCreateWithoutCityInput[]
    connectOrCreate?: LocationCreateOrConnectWithoutCityInput | LocationCreateOrConnectWithoutCityInput[]
    upsert?: LocationUpsertWithWhereUniqueWithoutCityInput | LocationUpsertWithWhereUniqueWithoutCityInput[]
    createMany?: LocationCreateManyCityInputEnvelope
    set?: LocationWhereUniqueInput | LocationWhereUniqueInput[]
    disconnect?: LocationWhereUniqueInput | LocationWhereUniqueInput[]
    delete?: LocationWhereUniqueInput | LocationWhereUniqueInput[]
    connect?: LocationWhereUniqueInput | LocationWhereUniqueInput[]
    update?: LocationUpdateWithWhereUniqueWithoutCityInput | LocationUpdateWithWhereUniqueWithoutCityInput[]
    updateMany?: LocationUpdateManyWithWhereWithoutCityInput | LocationUpdateManyWithWhereWithoutCityInput[]
    deleteMany?: LocationScalarWhereInput | LocationScalarWhereInput[]
  }

  export type CityTransportUncheckedUpdateManyWithoutFromNestedInput = {
    create?: XOR<CityTransportCreateWithoutFromInput, CityTransportUncheckedCreateWithoutFromInput> | CityTransportCreateWithoutFromInput[] | CityTransportUncheckedCreateWithoutFromInput[]
    connectOrCreate?: CityTransportCreateOrConnectWithoutFromInput | CityTransportCreateOrConnectWithoutFromInput[]
    upsert?: CityTransportUpsertWithWhereUniqueWithoutFromInput | CityTransportUpsertWithWhereUniqueWithoutFromInput[]
    createMany?: CityTransportCreateManyFromInputEnvelope
    set?: CityTransportWhereUniqueInput | CityTransportWhereUniqueInput[]
    disconnect?: CityTransportWhereUniqueInput | CityTransportWhereUniqueInput[]
    delete?: CityTransportWhereUniqueInput | CityTransportWhereUniqueInput[]
    connect?: CityTransportWhereUniqueInput | CityTransportWhereUniqueInput[]
    update?: CityTransportUpdateWithWhereUniqueWithoutFromInput | CityTransportUpdateWithWhereUniqueWithoutFromInput[]
    updateMany?: CityTransportUpdateManyWithWhereWithoutFromInput | CityTransportUpdateManyWithWhereWithoutFromInput[]
    deleteMany?: CityTransportScalarWhereInput | CityTransportScalarWhereInput[]
  }

  export type CityTransportUncheckedUpdateManyWithoutToNestedInput = {
    create?: XOR<CityTransportCreateWithoutToInput, CityTransportUncheckedCreateWithoutToInput> | CityTransportCreateWithoutToInput[] | CityTransportUncheckedCreateWithoutToInput[]
    connectOrCreate?: CityTransportCreateOrConnectWithoutToInput | CityTransportCreateOrConnectWithoutToInput[]
    upsert?: CityTransportUpsertWithWhereUniqueWithoutToInput | CityTransportUpsertWithWhereUniqueWithoutToInput[]
    createMany?: CityTransportCreateManyToInputEnvelope
    set?: CityTransportWhereUniqueInput | CityTransportWhereUniqueInput[]
    disconnect?: CityTransportWhereUniqueInput | CityTransportWhereUniqueInput[]
    delete?: CityTransportWhereUniqueInput | CityTransportWhereUniqueInput[]
    connect?: CityTransportWhereUniqueInput | CityTransportWhereUniqueInput[]
    update?: CityTransportUpdateWithWhereUniqueWithoutToInput | CityTransportUpdateWithWhereUniqueWithoutToInput[]
    updateMany?: CityTransportUpdateManyWithWhereWithoutToInput | CityTransportUpdateManyWithWhereWithoutToInput[]
    deleteMany?: CityTransportScalarWhereInput | CityTransportScalarWhereInput[]
  }

  export type CityTransportCreatedepertureTimesInput = {
    set: Date[] | string[]
  }

  export type CityCreateNestedOneWithoutDownInput = {
    create?: XOR<CityCreateWithoutDownInput, CityUncheckedCreateWithoutDownInput>
    connectOrCreate?: CityCreateOrConnectWithoutDownInput
    connect?: CityWhereUniqueInput
  }

  export type CityCreateNestedOneWithoutUpInput = {
    create?: XOR<CityCreateWithoutUpInput, CityUncheckedCreateWithoutUpInput>
    connectOrCreate?: CityCreateOrConnectWithoutUpInput
    connect?: CityWhereUniqueInput
  }

  export type EnumTransportMediumFieldUpdateOperationsInput = {
    set?: $Enums.TransportMedium
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type CityTransportUpdatedepertureTimesInput = {
    set?: Date[] | string[]
    push?: Date | string | Date[] | string[]
  }

  export type CityUpdateOneRequiredWithoutDownNestedInput = {
    create?: XOR<CityCreateWithoutDownInput, CityUncheckedCreateWithoutDownInput>
    connectOrCreate?: CityCreateOrConnectWithoutDownInput
    upsert?: CityUpsertWithoutDownInput
    connect?: CityWhereUniqueInput
    update?: XOR<XOR<CityUpdateToOneWithWhereWithoutDownInput, CityUpdateWithoutDownInput>, CityUncheckedUpdateWithoutDownInput>
  }

  export type CityUpdateOneRequiredWithoutUpNestedInput = {
    create?: XOR<CityCreateWithoutUpInput, CityUncheckedCreateWithoutUpInput>
    connectOrCreate?: CityCreateOrConnectWithoutUpInput
    upsert?: CityUpsertWithoutUpInput
    connect?: CityWhereUniqueInput
    update?: XOR<XOR<CityUpdateToOneWithWhereWithoutUpInput, CityUpdateWithoutUpInput>, CityUncheckedUpdateWithoutUpInput>
  }

  export type RoomTypesListCreateEnvelopeInput = {
    set?: RoomTypesCreateInput | RoomTypesCreateInput[]
  }

  export type RoomTypesCreateInput = {
    name: $Enums.RoomCategory
    description: string
    capacity: number
    price: number
  }

  export type HotelCreatetagsInput = {
    set: string[]
  }

  export type HotelCreateamenitiesInput = {
    set: string[]
  }

  export type HotelCreaterecommendedForInput = {
    set: $Enums.TripType[]
  }

  export type CityCreateNestedOneWithoutHotelsInput = {
    create?: XOR<CityCreateWithoutHotelsInput, CityUncheckedCreateWithoutHotelsInput>
    connectOrCreate?: CityCreateOrConnectWithoutHotelsInput
    connect?: CityWhereUniqueInput
  }

  export type HotelsToLocationsCreateNestedManyWithoutHotelDetailsInput = {
    create?: XOR<HotelsToLocationsCreateWithoutHotelDetailsInput, HotelsToLocationsUncheckedCreateWithoutHotelDetailsInput> | HotelsToLocationsCreateWithoutHotelDetailsInput[] | HotelsToLocationsUncheckedCreateWithoutHotelDetailsInput[]
    connectOrCreate?: HotelsToLocationsCreateOrConnectWithoutHotelDetailsInput | HotelsToLocationsCreateOrConnectWithoutHotelDetailsInput[]
    createMany?: HotelsToLocationsCreateManyHotelDetailsInputEnvelope
    connect?: HotelsToLocationsWhereUniqueInput | HotelsToLocationsWhereUniqueInput[]
  }

  export type HotelsToLocationsUncheckedCreateNestedManyWithoutHotelDetailsInput = {
    create?: XOR<HotelsToLocationsCreateWithoutHotelDetailsInput, HotelsToLocationsUncheckedCreateWithoutHotelDetailsInput> | HotelsToLocationsCreateWithoutHotelDetailsInput[] | HotelsToLocationsUncheckedCreateWithoutHotelDetailsInput[]
    connectOrCreate?: HotelsToLocationsCreateOrConnectWithoutHotelDetailsInput | HotelsToLocationsCreateOrConnectWithoutHotelDetailsInput[]
    createMany?: HotelsToLocationsCreateManyHotelDetailsInputEnvelope
    connect?: HotelsToLocationsWhereUniqueInput | HotelsToLocationsWhereUniqueInput[]
  }

  export type RoomTypesListUpdateEnvelopeInput = {
    set?: RoomTypesCreateInput | RoomTypesCreateInput[]
    push?: RoomTypesCreateInput | RoomTypesCreateInput[]
    updateMany?: RoomTypesUpdateManyInput
    deleteMany?: RoomTypesDeleteManyInput
  }

  export type HotelUpdatetagsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type HotelUpdateamenitiesInput = {
    set?: string[]
    push?: string | string[]
  }

  export type HotelUpdaterecommendedForInput = {
    set?: $Enums.TripType[]
    push?: $Enums.TripType | $Enums.TripType[]
  }

  export type CityUpdateOneRequiredWithoutHotelsNestedInput = {
    create?: XOR<CityCreateWithoutHotelsInput, CityUncheckedCreateWithoutHotelsInput>
    connectOrCreate?: CityCreateOrConnectWithoutHotelsInput
    upsert?: CityUpsertWithoutHotelsInput
    connect?: CityWhereUniqueInput
    update?: XOR<XOR<CityUpdateToOneWithWhereWithoutHotelsInput, CityUpdateWithoutHotelsInput>, CityUncheckedUpdateWithoutHotelsInput>
  }

  export type HotelsToLocationsUpdateManyWithoutHotelDetailsNestedInput = {
    create?: XOR<HotelsToLocationsCreateWithoutHotelDetailsInput, HotelsToLocationsUncheckedCreateWithoutHotelDetailsInput> | HotelsToLocationsCreateWithoutHotelDetailsInput[] | HotelsToLocationsUncheckedCreateWithoutHotelDetailsInput[]
    connectOrCreate?: HotelsToLocationsCreateOrConnectWithoutHotelDetailsInput | HotelsToLocationsCreateOrConnectWithoutHotelDetailsInput[]
    upsert?: HotelsToLocationsUpsertWithWhereUniqueWithoutHotelDetailsInput | HotelsToLocationsUpsertWithWhereUniqueWithoutHotelDetailsInput[]
    createMany?: HotelsToLocationsCreateManyHotelDetailsInputEnvelope
    set?: HotelsToLocationsWhereUniqueInput | HotelsToLocationsWhereUniqueInput[]
    disconnect?: HotelsToLocationsWhereUniqueInput | HotelsToLocationsWhereUniqueInput[]
    delete?: HotelsToLocationsWhereUniqueInput | HotelsToLocationsWhereUniqueInput[]
    connect?: HotelsToLocationsWhereUniqueInput | HotelsToLocationsWhereUniqueInput[]
    update?: HotelsToLocationsUpdateWithWhereUniqueWithoutHotelDetailsInput | HotelsToLocationsUpdateWithWhereUniqueWithoutHotelDetailsInput[]
    updateMany?: HotelsToLocationsUpdateManyWithWhereWithoutHotelDetailsInput | HotelsToLocationsUpdateManyWithWhereWithoutHotelDetailsInput[]
    deleteMany?: HotelsToLocationsScalarWhereInput | HotelsToLocationsScalarWhereInput[]
  }

  export type HotelsToLocationsUncheckedUpdateManyWithoutHotelDetailsNestedInput = {
    create?: XOR<HotelsToLocationsCreateWithoutHotelDetailsInput, HotelsToLocationsUncheckedCreateWithoutHotelDetailsInput> | HotelsToLocationsCreateWithoutHotelDetailsInput[] | HotelsToLocationsUncheckedCreateWithoutHotelDetailsInput[]
    connectOrCreate?: HotelsToLocationsCreateOrConnectWithoutHotelDetailsInput | HotelsToLocationsCreateOrConnectWithoutHotelDetailsInput[]
    upsert?: HotelsToLocationsUpsertWithWhereUniqueWithoutHotelDetailsInput | HotelsToLocationsUpsertWithWhereUniqueWithoutHotelDetailsInput[]
    createMany?: HotelsToLocationsCreateManyHotelDetailsInputEnvelope
    set?: HotelsToLocationsWhereUniqueInput | HotelsToLocationsWhereUniqueInput[]
    disconnect?: HotelsToLocationsWhereUniqueInput | HotelsToLocationsWhereUniqueInput[]
    delete?: HotelsToLocationsWhereUniqueInput | HotelsToLocationsWhereUniqueInput[]
    connect?: HotelsToLocationsWhereUniqueInput | HotelsToLocationsWhereUniqueInput[]
    update?: HotelsToLocationsUpdateWithWhereUniqueWithoutHotelDetailsInput | HotelsToLocationsUpdateWithWhereUniqueWithoutHotelDetailsInput[]
    updateMany?: HotelsToLocationsUpdateManyWithWhereWithoutHotelDetailsInput | HotelsToLocationsUpdateManyWithWhereWithoutHotelDetailsInput[]
    deleteMany?: HotelsToLocationsScalarWhereInput | HotelsToLocationsScalarWhereInput[]
  }

  export type CommuteTimeListCreateEnvelopeInput = {
    set?: CommuteTimeCreateInput | CommuteTimeCreateInput[]
  }

  export type CommuteTimeCreateInput = {
    medium: string
    estimatedTimeInMinutes: number
    description: string
  }

  export type HotelCreateNestedOneWithoutLocationsInput = {
    create?: XOR<HotelCreateWithoutLocationsInput, HotelUncheckedCreateWithoutLocationsInput>
    connectOrCreate?: HotelCreateOrConnectWithoutLocationsInput
    connect?: HotelWhereUniqueInput
  }

  export type LocationCreateNestedOneWithoutHotelsInput = {
    create?: XOR<LocationCreateWithoutHotelsInput, LocationUncheckedCreateWithoutHotelsInput>
    connectOrCreate?: LocationCreateOrConnectWithoutHotelsInput
    connect?: LocationWhereUniqueInput
  }

  export type CommuteTimeListUpdateEnvelopeInput = {
    set?: CommuteTimeCreateInput | CommuteTimeCreateInput[]
    push?: CommuteTimeCreateInput | CommuteTimeCreateInput[]
    updateMany?: CommuteTimeUpdateManyInput
    deleteMany?: CommuteTimeDeleteManyInput
  }

  export type HotelUpdateOneRequiredWithoutLocationsNestedInput = {
    create?: XOR<HotelCreateWithoutLocationsInput, HotelUncheckedCreateWithoutLocationsInput>
    connectOrCreate?: HotelCreateOrConnectWithoutLocationsInput
    upsert?: HotelUpsertWithoutLocationsInput
    connect?: HotelWhereUniqueInput
    update?: XOR<XOR<HotelUpdateToOneWithWhereWithoutLocationsInput, HotelUpdateWithoutLocationsInput>, HotelUncheckedUpdateWithoutLocationsInput>
  }

  export type LocationUpdateOneRequiredWithoutHotelsNestedInput = {
    create?: XOR<LocationCreateWithoutHotelsInput, LocationUncheckedCreateWithoutHotelsInput>
    connectOrCreate?: LocationCreateOrConnectWithoutHotelsInput
    upsert?: LocationUpsertWithoutHotelsInput
    connect?: LocationWhereUniqueInput
    update?: XOR<XOR<LocationUpdateToOneWithWhereWithoutHotelsInput, LocationUpdateWithoutHotelsInput>, LocationUncheckedUpdateWithoutHotelsInput>
  }

  export type LocationCreatetypeInput = {
    set: $Enums.TripType[]
  }

  export type LocationCreatetagsInput = {
    set: string[]
  }

  export type LocationCreateopenDaysInput = {
    set: $Enums.WeekDays[]
  }

  export type OpenHoursCreateEnvelopeInput = {
    set?: OpenHoursCreateInput
  }

  export type OpenHoursCreateInput = {
    start: string
    end: string
  }

  export type LocationCreatefoodOptionsInput = {
    set: $Enums.FoodOption[]
  }

  export type ActivityListCreateEnvelopeInput = {
    set?: ActivityCreateInput | ActivityCreateInput[]
  }

  export type ActivityCreateInput = {
    name: string
    description: string
  }

  export type CaveatListCreateEnvelopeInput = {
    set?: CaveatCreateInput | CaveatCreateInput[]
  }

  export type CaveatCreateInput = {
    name: string
    description: string
  }

  export type LocationCreaterecommendedVisitMonthsInput = {
    set: number[]
  }

  export type LocationCostListCreateEnvelopeInput = {
    set?: LocationCostCreateInput | LocationCostCreateInput[]
  }

  export type LocationCostCreateInput = {
    tier: string
    cost: number
  }

  export type CityCreateNestedOneWithoutLocationsInput = {
    create?: XOR<CityCreateWithoutLocationsInput, CityUncheckedCreateWithoutLocationsInput>
    connectOrCreate?: CityCreateOrConnectWithoutLocationsInput
    connect?: CityWhereUniqueInput
  }

  export type HotelsToLocationsCreateNestedManyWithoutLocationDetailsInput = {
    create?: XOR<HotelsToLocationsCreateWithoutLocationDetailsInput, HotelsToLocationsUncheckedCreateWithoutLocationDetailsInput> | HotelsToLocationsCreateWithoutLocationDetailsInput[] | HotelsToLocationsUncheckedCreateWithoutLocationDetailsInput[]
    connectOrCreate?: HotelsToLocationsCreateOrConnectWithoutLocationDetailsInput | HotelsToLocationsCreateOrConnectWithoutLocationDetailsInput[]
    createMany?: HotelsToLocationsCreateManyLocationDetailsInputEnvelope
    connect?: HotelsToLocationsWhereUniqueInput | HotelsToLocationsWhereUniqueInput[]
  }

  export type HotelsToLocationsUncheckedCreateNestedManyWithoutLocationDetailsInput = {
    create?: XOR<HotelsToLocationsCreateWithoutLocationDetailsInput, HotelsToLocationsUncheckedCreateWithoutLocationDetailsInput> | HotelsToLocationsCreateWithoutLocationDetailsInput[] | HotelsToLocationsUncheckedCreateWithoutLocationDetailsInput[]
    connectOrCreate?: HotelsToLocationsCreateOrConnectWithoutLocationDetailsInput | HotelsToLocationsCreateOrConnectWithoutLocationDetailsInput[]
    createMany?: HotelsToLocationsCreateManyLocationDetailsInputEnvelope
    connect?: HotelsToLocationsWhereUniqueInput | HotelsToLocationsWhereUniqueInput[]
  }

  export type LocationUpdatetypeInput = {
    set?: $Enums.TripType[]
    push?: $Enums.TripType | $Enums.TripType[]
  }

  export type LocationUpdatetagsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type LocationUpdateopenDaysInput = {
    set?: $Enums.WeekDays[]
    push?: $Enums.WeekDays | $Enums.WeekDays[]
  }

  export type OpenHoursUpdateEnvelopeInput = {
    set?: OpenHoursCreateInput
    update?: OpenHoursUpdateInput
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type EnumRecommendedTimeFieldUpdateOperationsInput = {
    set?: $Enums.RecommendedTime
  }

  export type LocationUpdatefoodOptionsInput = {
    set?: $Enums.FoodOption[]
    push?: $Enums.FoodOption | $Enums.FoodOption[]
  }

  export type ActivityListUpdateEnvelopeInput = {
    set?: ActivityCreateInput | ActivityCreateInput[]
    push?: ActivityCreateInput | ActivityCreateInput[]
    updateMany?: ActivityUpdateManyInput
    deleteMany?: ActivityDeleteManyInput
  }

  export type CaveatListUpdateEnvelopeInput = {
    set?: CaveatCreateInput | CaveatCreateInput[]
    push?: CaveatCreateInput | CaveatCreateInput[]
    updateMany?: CaveatUpdateManyInput
    deleteMany?: CaveatDeleteManyInput
  }

  export type LocationUpdaterecommendedVisitMonthsInput = {
    set?: number[]
    push?: number | number[]
  }

  export type LocationCostListUpdateEnvelopeInput = {
    set?: LocationCostCreateInput | LocationCostCreateInput[]
    push?: LocationCostCreateInput | LocationCostCreateInput[]
    updateMany?: LocationCostUpdateManyInput
    deleteMany?: LocationCostDeleteManyInput
  }

  export type CityUpdateOneRequiredWithoutLocationsNestedInput = {
    create?: XOR<CityCreateWithoutLocationsInput, CityUncheckedCreateWithoutLocationsInput>
    connectOrCreate?: CityCreateOrConnectWithoutLocationsInput
    upsert?: CityUpsertWithoutLocationsInput
    connect?: CityWhereUniqueInput
    update?: XOR<XOR<CityUpdateToOneWithWhereWithoutLocationsInput, CityUpdateWithoutLocationsInput>, CityUncheckedUpdateWithoutLocationsInput>
  }

  export type HotelsToLocationsUpdateManyWithoutLocationDetailsNestedInput = {
    create?: XOR<HotelsToLocationsCreateWithoutLocationDetailsInput, HotelsToLocationsUncheckedCreateWithoutLocationDetailsInput> | HotelsToLocationsCreateWithoutLocationDetailsInput[] | HotelsToLocationsUncheckedCreateWithoutLocationDetailsInput[]
    connectOrCreate?: HotelsToLocationsCreateOrConnectWithoutLocationDetailsInput | HotelsToLocationsCreateOrConnectWithoutLocationDetailsInput[]
    upsert?: HotelsToLocationsUpsertWithWhereUniqueWithoutLocationDetailsInput | HotelsToLocationsUpsertWithWhereUniqueWithoutLocationDetailsInput[]
    createMany?: HotelsToLocationsCreateManyLocationDetailsInputEnvelope
    set?: HotelsToLocationsWhereUniqueInput | HotelsToLocationsWhereUniqueInput[]
    disconnect?: HotelsToLocationsWhereUniqueInput | HotelsToLocationsWhereUniqueInput[]
    delete?: HotelsToLocationsWhereUniqueInput | HotelsToLocationsWhereUniqueInput[]
    connect?: HotelsToLocationsWhereUniqueInput | HotelsToLocationsWhereUniqueInput[]
    update?: HotelsToLocationsUpdateWithWhereUniqueWithoutLocationDetailsInput | HotelsToLocationsUpdateWithWhereUniqueWithoutLocationDetailsInput[]
    updateMany?: HotelsToLocationsUpdateManyWithWhereWithoutLocationDetailsInput | HotelsToLocationsUpdateManyWithWhereWithoutLocationDetailsInput[]
    deleteMany?: HotelsToLocationsScalarWhereInput | HotelsToLocationsScalarWhereInput[]
  }

  export type HotelsToLocationsUncheckedUpdateManyWithoutLocationDetailsNestedInput = {
    create?: XOR<HotelsToLocationsCreateWithoutLocationDetailsInput, HotelsToLocationsUncheckedCreateWithoutLocationDetailsInput> | HotelsToLocationsCreateWithoutLocationDetailsInput[] | HotelsToLocationsUncheckedCreateWithoutLocationDetailsInput[]
    connectOrCreate?: HotelsToLocationsCreateOrConnectWithoutLocationDetailsInput | HotelsToLocationsCreateOrConnectWithoutLocationDetailsInput[]
    upsert?: HotelsToLocationsUpsertWithWhereUniqueWithoutLocationDetailsInput | HotelsToLocationsUpsertWithWhereUniqueWithoutLocationDetailsInput[]
    createMany?: HotelsToLocationsCreateManyLocationDetailsInputEnvelope
    set?: HotelsToLocationsWhereUniqueInput | HotelsToLocationsWhereUniqueInput[]
    disconnect?: HotelsToLocationsWhereUniqueInput | HotelsToLocationsWhereUniqueInput[]
    delete?: HotelsToLocationsWhereUniqueInput | HotelsToLocationsWhereUniqueInput[]
    connect?: HotelsToLocationsWhereUniqueInput | HotelsToLocationsWhereUniqueInput[]
    update?: HotelsToLocationsUpdateWithWhereUniqueWithoutLocationDetailsInput | HotelsToLocationsUpdateWithWhereUniqueWithoutLocationDetailsInput[]
    updateMany?: HotelsToLocationsUpdateManyWithWhereWithoutLocationDetailsInput | HotelsToLocationsUpdateManyWithWhereWithoutLocationDetailsInput[]
    deleteMany?: HotelsToLocationsScalarWhereInput | HotelsToLocationsScalarWhereInput[]
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

  export type NestedEnumTransportMediumFilter<$PrismaModel = never> = {
    equals?: $Enums.TransportMedium | EnumTransportMediumFieldRefInput<$PrismaModel>
    in?: $Enums.TransportMedium[] | ListEnumTransportMediumFieldRefInput<$PrismaModel>
    notIn?: $Enums.TransportMedium[] | ListEnumTransportMediumFieldRefInput<$PrismaModel>
    not?: NestedEnumTransportMediumFilter<$PrismaModel> | $Enums.TransportMedium
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

  export type NestedEnumTransportMediumWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TransportMedium | EnumTransportMediumFieldRefInput<$PrismaModel>
    in?: $Enums.TransportMedium[] | ListEnumTransportMediumFieldRefInput<$PrismaModel>
    notIn?: $Enums.TransportMedium[] | ListEnumTransportMediumFieldRefInput<$PrismaModel>
    not?: NestedEnumTransportMediumWithAggregatesFilter<$PrismaModel> | $Enums.TransportMedium
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTransportMediumFilter<$PrismaModel>
    _max?: NestedEnumTransportMediumFilter<$PrismaModel>
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

  export type RoomTypesWhereInput = {
    AND?: RoomTypesWhereInput | RoomTypesWhereInput[]
    OR?: RoomTypesWhereInput[]
    NOT?: RoomTypesWhereInput | RoomTypesWhereInput[]
    name?: EnumRoomCategoryFilter<"RoomTypes"> | $Enums.RoomCategory
    description?: StringFilter<"RoomTypes"> | string
    capacity?: IntFilter<"RoomTypes"> | number
    price?: FloatFilter<"RoomTypes"> | number
  }

  export type CommuteTimeWhereInput = {
    AND?: CommuteTimeWhereInput | CommuteTimeWhereInput[]
    OR?: CommuteTimeWhereInput[]
    NOT?: CommuteTimeWhereInput | CommuteTimeWhereInput[]
    medium?: StringFilter<"CommuteTime"> | string
    estimatedTimeInMinutes?: IntFilter<"CommuteTime"> | number
    description?: StringFilter<"CommuteTime"> | string
  }

  export type OpenHoursWhereInput = {
    AND?: OpenHoursWhereInput | OpenHoursWhereInput[]
    OR?: OpenHoursWhereInput[]
    NOT?: OpenHoursWhereInput | OpenHoursWhereInput[]
    start?: StringFilter<"OpenHours"> | string
    end?: StringFilter<"OpenHours"> | string
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedEnumRecommendedTimeFilter<$PrismaModel = never> = {
    equals?: $Enums.RecommendedTime | EnumRecommendedTimeFieldRefInput<$PrismaModel>
    in?: $Enums.RecommendedTime[] | ListEnumRecommendedTimeFieldRefInput<$PrismaModel>
    notIn?: $Enums.RecommendedTime[] | ListEnumRecommendedTimeFieldRefInput<$PrismaModel>
    not?: NestedEnumRecommendedTimeFilter<$PrismaModel> | $Enums.RecommendedTime
  }

  export type ActivityWhereInput = {
    AND?: ActivityWhereInput | ActivityWhereInput[]
    OR?: ActivityWhereInput[]
    NOT?: ActivityWhereInput | ActivityWhereInput[]
    name?: StringFilter<"Activity"> | string
    description?: StringFilter<"Activity"> | string
  }

  export type CaveatWhereInput = {
    AND?: CaveatWhereInput | CaveatWhereInput[]
    OR?: CaveatWhereInput[]
    NOT?: CaveatWhereInput | CaveatWhereInput[]
    name?: StringFilter<"Caveat"> | string
    description?: StringFilter<"Caveat"> | string
  }

  export type LocationCostWhereInput = {
    AND?: LocationCostWhereInput | LocationCostWhereInput[]
    OR?: LocationCostWhereInput[]
    NOT?: LocationCostWhereInput | LocationCostWhereInput[]
    tier?: StringFilter<"LocationCost"> | string
    cost?: FloatFilter<"LocationCost"> | number
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedEnumRecommendedTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RecommendedTime | EnumRecommendedTimeFieldRefInput<$PrismaModel>
    in?: $Enums.RecommendedTime[] | ListEnumRecommendedTimeFieldRefInput<$PrismaModel>
    notIn?: $Enums.RecommendedTime[] | ListEnumRecommendedTimeFieldRefInput<$PrismaModel>
    not?: NestedEnumRecommendedTimeWithAggregatesFilter<$PrismaModel> | $Enums.RecommendedTime
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRecommendedTimeFilter<$PrismaModel>
    _max?: NestedEnumRecommendedTimeFilter<$PrismaModel>
  }

  export type HotelCreateWithoutCityInput = {
    id?: string
    name: string
    description: string
    rooms?: XOR<RoomTypesListCreateEnvelopeInput, RoomTypesCreateInput> | RoomTypesCreateInput[]
    tags?: HotelCreatetagsInput | string[]
    rating: number
    amenities?: HotelCreateamenitiesInput | string[]
    recommendedFor?: HotelCreaterecommendedForInput | $Enums.TripType[]
    createdAt?: Date | string
    updatedAt?: Date | string
    locations?: HotelsToLocationsCreateNestedManyWithoutHotelDetailsInput
  }

  export type HotelUncheckedCreateWithoutCityInput = {
    id?: string
    name: string
    description: string
    rooms?: XOR<RoomTypesListCreateEnvelopeInput, RoomTypesCreateInput> | RoomTypesCreateInput[]
    tags?: HotelCreatetagsInput | string[]
    rating: number
    amenities?: HotelCreateamenitiesInput | string[]
    recommendedFor?: HotelCreaterecommendedForInput | $Enums.TripType[]
    createdAt?: Date | string
    updatedAt?: Date | string
    locations?: HotelsToLocationsUncheckedCreateNestedManyWithoutHotelDetailsInput
  }

  export type HotelCreateOrConnectWithoutCityInput = {
    where: HotelWhereUniqueInput
    create: XOR<HotelCreateWithoutCityInput, HotelUncheckedCreateWithoutCityInput>
  }

  export type HotelCreateManyCityInputEnvelope = {
    data: HotelCreateManyCityInput | HotelCreateManyCityInput[]
  }

  export type LocationCreateWithoutCityInput = {
    id?: string
    name: string
    type?: LocationCreatetypeInput | $Enums.TripType[]
    tags?: LocationCreatetagsInput | string[]
    description: string
    openDays?: LocationCreateopenDaysInput | $Enums.WeekDays[]
    openHours: XOR<OpenHoursCreateEnvelopeInput, OpenHoursCreateInput>
    activeVisit: boolean
    recommendedTime: $Enums.RecommendedTime
    recommendedVisitDurationInMinutes: number
    foodOptions?: LocationCreatefoodOptionsInput | $Enums.FoodOption[]
    availableActivities?: XOR<ActivityListCreateEnvelopeInput, ActivityCreateInput> | ActivityCreateInput[]
    caveats?: XOR<CaveatListCreateEnvelopeInput, CaveatCreateInput> | CaveatCreateInput[]
    recommendedVisitMonths?: LocationCreaterecommendedVisitMonthsInput | number[]
    costPerPerson?: XOR<LocationCostListCreateEnvelopeInput, LocationCostCreateInput> | LocationCostCreateInput[]
    createdAt?: Date | string
    updatedAt?: Date | string
    hotels?: HotelsToLocationsCreateNestedManyWithoutLocationDetailsInput
  }

  export type LocationUncheckedCreateWithoutCityInput = {
    id?: string
    name: string
    type?: LocationCreatetypeInput | $Enums.TripType[]
    tags?: LocationCreatetagsInput | string[]
    description: string
    openDays?: LocationCreateopenDaysInput | $Enums.WeekDays[]
    openHours: XOR<OpenHoursCreateEnvelopeInput, OpenHoursCreateInput>
    activeVisit: boolean
    recommendedTime: $Enums.RecommendedTime
    recommendedVisitDurationInMinutes: number
    foodOptions?: LocationCreatefoodOptionsInput | $Enums.FoodOption[]
    availableActivities?: XOR<ActivityListCreateEnvelopeInput, ActivityCreateInput> | ActivityCreateInput[]
    caveats?: XOR<CaveatListCreateEnvelopeInput, CaveatCreateInput> | CaveatCreateInput[]
    recommendedVisitMonths?: LocationCreaterecommendedVisitMonthsInput | number[]
    costPerPerson?: XOR<LocationCostListCreateEnvelopeInput, LocationCostCreateInput> | LocationCostCreateInput[]
    createdAt?: Date | string
    updatedAt?: Date | string
    hotels?: HotelsToLocationsUncheckedCreateNestedManyWithoutLocationDetailsInput
  }

  export type LocationCreateOrConnectWithoutCityInput = {
    where: LocationWhereUniqueInput
    create: XOR<LocationCreateWithoutCityInput, LocationUncheckedCreateWithoutCityInput>
  }

  export type LocationCreateManyCityInputEnvelope = {
    data: LocationCreateManyCityInput | LocationCreateManyCityInput[]
  }

  export type CityTransportCreateWithoutFromInput = {
    id?: string
    medium: $Enums.TransportMedium
    estimatedTimeInMinutes: number
    price: number
    depertureTimes?: CityTransportCreatedepertureTimesInput | Date[] | string[]
    to: CityCreateNestedOneWithoutUpInput
  }

  export type CityTransportUncheckedCreateWithoutFromInput = {
    id?: string
    medium: $Enums.TransportMedium
    toId: string
    estimatedTimeInMinutes: number
    price: number
    depertureTimes?: CityTransportCreatedepertureTimesInput | Date[] | string[]
  }

  export type CityTransportCreateOrConnectWithoutFromInput = {
    where: CityTransportWhereUniqueInput
    create: XOR<CityTransportCreateWithoutFromInput, CityTransportUncheckedCreateWithoutFromInput>
  }

  export type CityTransportCreateManyFromInputEnvelope = {
    data: CityTransportCreateManyFromInput | CityTransportCreateManyFromInput[]
  }

  export type CityTransportCreateWithoutToInput = {
    id?: string
    medium: $Enums.TransportMedium
    estimatedTimeInMinutes: number
    price: number
    depertureTimes?: CityTransportCreatedepertureTimesInput | Date[] | string[]
    from: CityCreateNestedOneWithoutDownInput
  }

  export type CityTransportUncheckedCreateWithoutToInput = {
    id?: string
    medium: $Enums.TransportMedium
    fromId: string
    estimatedTimeInMinutes: number
    price: number
    depertureTimes?: CityTransportCreatedepertureTimesInput | Date[] | string[]
  }

  export type CityTransportCreateOrConnectWithoutToInput = {
    where: CityTransportWhereUniqueInput
    create: XOR<CityTransportCreateWithoutToInput, CityTransportUncheckedCreateWithoutToInput>
  }

  export type CityTransportCreateManyToInputEnvelope = {
    data: CityTransportCreateManyToInput | CityTransportCreateManyToInput[]
  }

  export type HotelUpsertWithWhereUniqueWithoutCityInput = {
    where: HotelWhereUniqueInput
    update: XOR<HotelUpdateWithoutCityInput, HotelUncheckedUpdateWithoutCityInput>
    create: XOR<HotelCreateWithoutCityInput, HotelUncheckedCreateWithoutCityInput>
  }

  export type HotelUpdateWithWhereUniqueWithoutCityInput = {
    where: HotelWhereUniqueInput
    data: XOR<HotelUpdateWithoutCityInput, HotelUncheckedUpdateWithoutCityInput>
  }

  export type HotelUpdateManyWithWhereWithoutCityInput = {
    where: HotelScalarWhereInput
    data: XOR<HotelUpdateManyMutationInput, HotelUncheckedUpdateManyWithoutCityInput>
  }

  export type HotelScalarWhereInput = {
    AND?: HotelScalarWhereInput | HotelScalarWhereInput[]
    OR?: HotelScalarWhereInput[]
    NOT?: HotelScalarWhereInput | HotelScalarWhereInput[]
    id?: StringFilter<"Hotel"> | string
    name?: StringFilter<"Hotel"> | string
    description?: StringFilter<"Hotel"> | string
    tags?: StringNullableListFilter<"Hotel">
    rating?: FloatFilter<"Hotel"> | number
    amenities?: StringNullableListFilter<"Hotel">
    recommendedFor?: EnumTripTypeNullableListFilter<"Hotel">
    cityId?: StringFilter<"Hotel"> | string
    createdAt?: DateTimeFilter<"Hotel"> | Date | string
    updatedAt?: DateTimeFilter<"Hotel"> | Date | string
  }

  export type LocationUpsertWithWhereUniqueWithoutCityInput = {
    where: LocationWhereUniqueInput
    update: XOR<LocationUpdateWithoutCityInput, LocationUncheckedUpdateWithoutCityInput>
    create: XOR<LocationCreateWithoutCityInput, LocationUncheckedCreateWithoutCityInput>
  }

  export type LocationUpdateWithWhereUniqueWithoutCityInput = {
    where: LocationWhereUniqueInput
    data: XOR<LocationUpdateWithoutCityInput, LocationUncheckedUpdateWithoutCityInput>
  }

  export type LocationUpdateManyWithWhereWithoutCityInput = {
    where: LocationScalarWhereInput
    data: XOR<LocationUpdateManyMutationInput, LocationUncheckedUpdateManyWithoutCityInput>
  }

  export type LocationScalarWhereInput = {
    AND?: LocationScalarWhereInput | LocationScalarWhereInput[]
    OR?: LocationScalarWhereInput[]
    NOT?: LocationScalarWhereInput | LocationScalarWhereInput[]
    id?: StringFilter<"Location"> | string
    name?: StringFilter<"Location"> | string
    type?: EnumTripTypeNullableListFilter<"Location">
    tags?: StringNullableListFilter<"Location">
    description?: StringFilter<"Location"> | string
    openDays?: EnumWeekDaysNullableListFilter<"Location">
    activeVisit?: BoolFilter<"Location"> | boolean
    recommendedTime?: EnumRecommendedTimeFilter<"Location"> | $Enums.RecommendedTime
    recommendedVisitDurationInMinutes?: IntFilter<"Location"> | number
    foodOptions?: EnumFoodOptionNullableListFilter<"Location">
    recommendedVisitMonths?: IntNullableListFilter<"Location">
    cityId?: StringFilter<"Location"> | string
    createdAt?: DateTimeFilter<"Location"> | Date | string
    updatedAt?: DateTimeFilter<"Location"> | Date | string
  }

  export type CityTransportUpsertWithWhereUniqueWithoutFromInput = {
    where: CityTransportWhereUniqueInput
    update: XOR<CityTransportUpdateWithoutFromInput, CityTransportUncheckedUpdateWithoutFromInput>
    create: XOR<CityTransportCreateWithoutFromInput, CityTransportUncheckedCreateWithoutFromInput>
  }

  export type CityTransportUpdateWithWhereUniqueWithoutFromInput = {
    where: CityTransportWhereUniqueInput
    data: XOR<CityTransportUpdateWithoutFromInput, CityTransportUncheckedUpdateWithoutFromInput>
  }

  export type CityTransportUpdateManyWithWhereWithoutFromInput = {
    where: CityTransportScalarWhereInput
    data: XOR<CityTransportUpdateManyMutationInput, CityTransportUncheckedUpdateManyWithoutFromInput>
  }

  export type CityTransportScalarWhereInput = {
    AND?: CityTransportScalarWhereInput | CityTransportScalarWhereInput[]
    OR?: CityTransportScalarWhereInput[]
    NOT?: CityTransportScalarWhereInput | CityTransportScalarWhereInput[]
    id?: StringFilter<"CityTransport"> | string
    medium?: EnumTransportMediumFilter<"CityTransport"> | $Enums.TransportMedium
    fromId?: StringFilter<"CityTransport"> | string
    toId?: StringFilter<"CityTransport"> | string
    estimatedTimeInMinutes?: IntFilter<"CityTransport"> | number
    price?: FloatFilter<"CityTransport"> | number
    depertureTimes?: DateTimeNullableListFilter<"CityTransport">
  }

  export type CityTransportUpsertWithWhereUniqueWithoutToInput = {
    where: CityTransportWhereUniqueInput
    update: XOR<CityTransportUpdateWithoutToInput, CityTransportUncheckedUpdateWithoutToInput>
    create: XOR<CityTransportCreateWithoutToInput, CityTransportUncheckedCreateWithoutToInput>
  }

  export type CityTransportUpdateWithWhereUniqueWithoutToInput = {
    where: CityTransportWhereUniqueInput
    data: XOR<CityTransportUpdateWithoutToInput, CityTransportUncheckedUpdateWithoutToInput>
  }

  export type CityTransportUpdateManyWithWhereWithoutToInput = {
    where: CityTransportScalarWhereInput
    data: XOR<CityTransportUpdateManyMutationInput, CityTransportUncheckedUpdateManyWithoutToInput>
  }

  export type CityCreateWithoutDownInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    hotels?: HotelCreateNestedManyWithoutCityInput
    locations?: LocationCreateNestedManyWithoutCityInput
    up?: CityTransportCreateNestedManyWithoutToInput
  }

  export type CityUncheckedCreateWithoutDownInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    hotels?: HotelUncheckedCreateNestedManyWithoutCityInput
    locations?: LocationUncheckedCreateNestedManyWithoutCityInput
    up?: CityTransportUncheckedCreateNestedManyWithoutToInput
  }

  export type CityCreateOrConnectWithoutDownInput = {
    where: CityWhereUniqueInput
    create: XOR<CityCreateWithoutDownInput, CityUncheckedCreateWithoutDownInput>
  }

  export type CityCreateWithoutUpInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    hotels?: HotelCreateNestedManyWithoutCityInput
    locations?: LocationCreateNestedManyWithoutCityInput
    down?: CityTransportCreateNestedManyWithoutFromInput
  }

  export type CityUncheckedCreateWithoutUpInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    hotels?: HotelUncheckedCreateNestedManyWithoutCityInput
    locations?: LocationUncheckedCreateNestedManyWithoutCityInput
    down?: CityTransportUncheckedCreateNestedManyWithoutFromInput
  }

  export type CityCreateOrConnectWithoutUpInput = {
    where: CityWhereUniqueInput
    create: XOR<CityCreateWithoutUpInput, CityUncheckedCreateWithoutUpInput>
  }

  export type CityUpsertWithoutDownInput = {
    update: XOR<CityUpdateWithoutDownInput, CityUncheckedUpdateWithoutDownInput>
    create: XOR<CityCreateWithoutDownInput, CityUncheckedCreateWithoutDownInput>
    where?: CityWhereInput
  }

  export type CityUpdateToOneWithWhereWithoutDownInput = {
    where?: CityWhereInput
    data: XOR<CityUpdateWithoutDownInput, CityUncheckedUpdateWithoutDownInput>
  }

  export type CityUpdateWithoutDownInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    hotels?: HotelUpdateManyWithoutCityNestedInput
    locations?: LocationUpdateManyWithoutCityNestedInput
    up?: CityTransportUpdateManyWithoutToNestedInput
  }

  export type CityUncheckedUpdateWithoutDownInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    hotels?: HotelUncheckedUpdateManyWithoutCityNestedInput
    locations?: LocationUncheckedUpdateManyWithoutCityNestedInput
    up?: CityTransportUncheckedUpdateManyWithoutToNestedInput
  }

  export type CityUpsertWithoutUpInput = {
    update: XOR<CityUpdateWithoutUpInput, CityUncheckedUpdateWithoutUpInput>
    create: XOR<CityCreateWithoutUpInput, CityUncheckedCreateWithoutUpInput>
    where?: CityWhereInput
  }

  export type CityUpdateToOneWithWhereWithoutUpInput = {
    where?: CityWhereInput
    data: XOR<CityUpdateWithoutUpInput, CityUncheckedUpdateWithoutUpInput>
  }

  export type CityUpdateWithoutUpInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    hotels?: HotelUpdateManyWithoutCityNestedInput
    locations?: LocationUpdateManyWithoutCityNestedInput
    down?: CityTransportUpdateManyWithoutFromNestedInput
  }

  export type CityUncheckedUpdateWithoutUpInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    hotels?: HotelUncheckedUpdateManyWithoutCityNestedInput
    locations?: LocationUncheckedUpdateManyWithoutCityNestedInput
    down?: CityTransportUncheckedUpdateManyWithoutFromNestedInput
  }

  export type CityCreateWithoutHotelsInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    locations?: LocationCreateNestedManyWithoutCityInput
    down?: CityTransportCreateNestedManyWithoutFromInput
    up?: CityTransportCreateNestedManyWithoutToInput
  }

  export type CityUncheckedCreateWithoutHotelsInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    locations?: LocationUncheckedCreateNestedManyWithoutCityInput
    down?: CityTransportUncheckedCreateNestedManyWithoutFromInput
    up?: CityTransportUncheckedCreateNestedManyWithoutToInput
  }

  export type CityCreateOrConnectWithoutHotelsInput = {
    where: CityWhereUniqueInput
    create: XOR<CityCreateWithoutHotelsInput, CityUncheckedCreateWithoutHotelsInput>
  }

  export type HotelsToLocationsCreateWithoutHotelDetailsInput = {
    id?: string
    distance: number
    commuteTime?: XOR<CommuteTimeListCreateEnvelopeInput, CommuteTimeCreateInput> | CommuteTimeCreateInput[]
    locationDetails: LocationCreateNestedOneWithoutHotelsInput
  }

  export type HotelsToLocationsUncheckedCreateWithoutHotelDetailsInput = {
    id?: string
    distance: number
    commuteTime?: XOR<CommuteTimeListCreateEnvelopeInput, CommuteTimeCreateInput> | CommuteTimeCreateInput[]
    locationId: string
  }

  export type HotelsToLocationsCreateOrConnectWithoutHotelDetailsInput = {
    where: HotelsToLocationsWhereUniqueInput
    create: XOR<HotelsToLocationsCreateWithoutHotelDetailsInput, HotelsToLocationsUncheckedCreateWithoutHotelDetailsInput>
  }

  export type HotelsToLocationsCreateManyHotelDetailsInputEnvelope = {
    data: HotelsToLocationsCreateManyHotelDetailsInput | HotelsToLocationsCreateManyHotelDetailsInput[]
  }

  export type RoomTypesUpdateManyInput = {
    where: RoomTypesWhereInput
    data: RoomTypesUpdateInput
  }

  export type RoomTypesDeleteManyInput = {
    where: RoomTypesWhereInput
  }

  export type CityUpsertWithoutHotelsInput = {
    update: XOR<CityUpdateWithoutHotelsInput, CityUncheckedUpdateWithoutHotelsInput>
    create: XOR<CityCreateWithoutHotelsInput, CityUncheckedCreateWithoutHotelsInput>
    where?: CityWhereInput
  }

  export type CityUpdateToOneWithWhereWithoutHotelsInput = {
    where?: CityWhereInput
    data: XOR<CityUpdateWithoutHotelsInput, CityUncheckedUpdateWithoutHotelsInput>
  }

  export type CityUpdateWithoutHotelsInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    locations?: LocationUpdateManyWithoutCityNestedInput
    down?: CityTransportUpdateManyWithoutFromNestedInput
    up?: CityTransportUpdateManyWithoutToNestedInput
  }

  export type CityUncheckedUpdateWithoutHotelsInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    locations?: LocationUncheckedUpdateManyWithoutCityNestedInput
    down?: CityTransportUncheckedUpdateManyWithoutFromNestedInput
    up?: CityTransportUncheckedUpdateManyWithoutToNestedInput
  }

  export type HotelsToLocationsUpsertWithWhereUniqueWithoutHotelDetailsInput = {
    where: HotelsToLocationsWhereUniqueInput
    update: XOR<HotelsToLocationsUpdateWithoutHotelDetailsInput, HotelsToLocationsUncheckedUpdateWithoutHotelDetailsInput>
    create: XOR<HotelsToLocationsCreateWithoutHotelDetailsInput, HotelsToLocationsUncheckedCreateWithoutHotelDetailsInput>
  }

  export type HotelsToLocationsUpdateWithWhereUniqueWithoutHotelDetailsInput = {
    where: HotelsToLocationsWhereUniqueInput
    data: XOR<HotelsToLocationsUpdateWithoutHotelDetailsInput, HotelsToLocationsUncheckedUpdateWithoutHotelDetailsInput>
  }

  export type HotelsToLocationsUpdateManyWithWhereWithoutHotelDetailsInput = {
    where: HotelsToLocationsScalarWhereInput
    data: XOR<HotelsToLocationsUpdateManyMutationInput, HotelsToLocationsUncheckedUpdateManyWithoutHotelDetailsInput>
  }

  export type HotelsToLocationsScalarWhereInput = {
    AND?: HotelsToLocationsScalarWhereInput | HotelsToLocationsScalarWhereInput[]
    OR?: HotelsToLocationsScalarWhereInput[]
    NOT?: HotelsToLocationsScalarWhereInput | HotelsToLocationsScalarWhereInput[]
    id?: StringFilter<"HotelsToLocations"> | string
    distance?: FloatFilter<"HotelsToLocations"> | number
    hotelId?: StringFilter<"HotelsToLocations"> | string
    locationId?: StringFilter<"HotelsToLocations"> | string
  }

  export type HotelCreateWithoutLocationsInput = {
    id?: string
    name: string
    description: string
    rooms?: XOR<RoomTypesListCreateEnvelopeInput, RoomTypesCreateInput> | RoomTypesCreateInput[]
    tags?: HotelCreatetagsInput | string[]
    rating: number
    amenities?: HotelCreateamenitiesInput | string[]
    recommendedFor?: HotelCreaterecommendedForInput | $Enums.TripType[]
    createdAt?: Date | string
    updatedAt?: Date | string
    city: CityCreateNestedOneWithoutHotelsInput
  }

  export type HotelUncheckedCreateWithoutLocationsInput = {
    id?: string
    name: string
    description: string
    rooms?: XOR<RoomTypesListCreateEnvelopeInput, RoomTypesCreateInput> | RoomTypesCreateInput[]
    tags?: HotelCreatetagsInput | string[]
    rating: number
    amenities?: HotelCreateamenitiesInput | string[]
    recommendedFor?: HotelCreaterecommendedForInput | $Enums.TripType[]
    cityId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type HotelCreateOrConnectWithoutLocationsInput = {
    where: HotelWhereUniqueInput
    create: XOR<HotelCreateWithoutLocationsInput, HotelUncheckedCreateWithoutLocationsInput>
  }

  export type LocationCreateWithoutHotelsInput = {
    id?: string
    name: string
    type?: LocationCreatetypeInput | $Enums.TripType[]
    tags?: LocationCreatetagsInput | string[]
    description: string
    openDays?: LocationCreateopenDaysInput | $Enums.WeekDays[]
    openHours: XOR<OpenHoursCreateEnvelopeInput, OpenHoursCreateInput>
    activeVisit: boolean
    recommendedTime: $Enums.RecommendedTime
    recommendedVisitDurationInMinutes: number
    foodOptions?: LocationCreatefoodOptionsInput | $Enums.FoodOption[]
    availableActivities?: XOR<ActivityListCreateEnvelopeInput, ActivityCreateInput> | ActivityCreateInput[]
    caveats?: XOR<CaveatListCreateEnvelopeInput, CaveatCreateInput> | CaveatCreateInput[]
    recommendedVisitMonths?: LocationCreaterecommendedVisitMonthsInput | number[]
    costPerPerson?: XOR<LocationCostListCreateEnvelopeInput, LocationCostCreateInput> | LocationCostCreateInput[]
    createdAt?: Date | string
    updatedAt?: Date | string
    city: CityCreateNestedOneWithoutLocationsInput
  }

  export type LocationUncheckedCreateWithoutHotelsInput = {
    id?: string
    name: string
    type?: LocationCreatetypeInput | $Enums.TripType[]
    tags?: LocationCreatetagsInput | string[]
    description: string
    openDays?: LocationCreateopenDaysInput | $Enums.WeekDays[]
    openHours: XOR<OpenHoursCreateEnvelopeInput, OpenHoursCreateInput>
    activeVisit: boolean
    recommendedTime: $Enums.RecommendedTime
    recommendedVisitDurationInMinutes: number
    foodOptions?: LocationCreatefoodOptionsInput | $Enums.FoodOption[]
    availableActivities?: XOR<ActivityListCreateEnvelopeInput, ActivityCreateInput> | ActivityCreateInput[]
    caveats?: XOR<CaveatListCreateEnvelopeInput, CaveatCreateInput> | CaveatCreateInput[]
    recommendedVisitMonths?: LocationCreaterecommendedVisitMonthsInput | number[]
    costPerPerson?: XOR<LocationCostListCreateEnvelopeInput, LocationCostCreateInput> | LocationCostCreateInput[]
    cityId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LocationCreateOrConnectWithoutHotelsInput = {
    where: LocationWhereUniqueInput
    create: XOR<LocationCreateWithoutHotelsInput, LocationUncheckedCreateWithoutHotelsInput>
  }

  export type CommuteTimeUpdateManyInput = {
    where: CommuteTimeWhereInput
    data: CommuteTimeUpdateInput
  }

  export type CommuteTimeDeleteManyInput = {
    where: CommuteTimeWhereInput
  }

  export type HotelUpsertWithoutLocationsInput = {
    update: XOR<HotelUpdateWithoutLocationsInput, HotelUncheckedUpdateWithoutLocationsInput>
    create: XOR<HotelCreateWithoutLocationsInput, HotelUncheckedCreateWithoutLocationsInput>
    where?: HotelWhereInput
  }

  export type HotelUpdateToOneWithWhereWithoutLocationsInput = {
    where?: HotelWhereInput
    data: XOR<HotelUpdateWithoutLocationsInput, HotelUncheckedUpdateWithoutLocationsInput>
  }

  export type HotelUpdateWithoutLocationsInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    rooms?: XOR<RoomTypesListUpdateEnvelopeInput, RoomTypesCreateInput> | RoomTypesCreateInput[]
    tags?: HotelUpdatetagsInput | string[]
    rating?: FloatFieldUpdateOperationsInput | number
    amenities?: HotelUpdateamenitiesInput | string[]
    recommendedFor?: HotelUpdaterecommendedForInput | $Enums.TripType[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    city?: CityUpdateOneRequiredWithoutHotelsNestedInput
  }

  export type HotelUncheckedUpdateWithoutLocationsInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    rooms?: XOR<RoomTypesListUpdateEnvelopeInput, RoomTypesCreateInput> | RoomTypesCreateInput[]
    tags?: HotelUpdatetagsInput | string[]
    rating?: FloatFieldUpdateOperationsInput | number
    amenities?: HotelUpdateamenitiesInput | string[]
    recommendedFor?: HotelUpdaterecommendedForInput | $Enums.TripType[]
    cityId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LocationUpsertWithoutHotelsInput = {
    update: XOR<LocationUpdateWithoutHotelsInput, LocationUncheckedUpdateWithoutHotelsInput>
    create: XOR<LocationCreateWithoutHotelsInput, LocationUncheckedCreateWithoutHotelsInput>
    where?: LocationWhereInput
  }

  export type LocationUpdateToOneWithWhereWithoutHotelsInput = {
    where?: LocationWhereInput
    data: XOR<LocationUpdateWithoutHotelsInput, LocationUncheckedUpdateWithoutHotelsInput>
  }

  export type LocationUpdateWithoutHotelsInput = {
    name?: StringFieldUpdateOperationsInput | string
    type?: LocationUpdatetypeInput | $Enums.TripType[]
    tags?: LocationUpdatetagsInput | string[]
    description?: StringFieldUpdateOperationsInput | string
    openDays?: LocationUpdateopenDaysInput | $Enums.WeekDays[]
    openHours?: XOR<OpenHoursUpdateEnvelopeInput, OpenHoursCreateInput>
    activeVisit?: BoolFieldUpdateOperationsInput | boolean
    recommendedTime?: EnumRecommendedTimeFieldUpdateOperationsInput | $Enums.RecommendedTime
    recommendedVisitDurationInMinutes?: IntFieldUpdateOperationsInput | number
    foodOptions?: LocationUpdatefoodOptionsInput | $Enums.FoodOption[]
    availableActivities?: XOR<ActivityListUpdateEnvelopeInput, ActivityCreateInput> | ActivityCreateInput[]
    caveats?: XOR<CaveatListUpdateEnvelopeInput, CaveatCreateInput> | CaveatCreateInput[]
    recommendedVisitMonths?: LocationUpdaterecommendedVisitMonthsInput | number[]
    costPerPerson?: XOR<LocationCostListUpdateEnvelopeInput, LocationCostCreateInput> | LocationCostCreateInput[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    city?: CityUpdateOneRequiredWithoutLocationsNestedInput
  }

  export type LocationUncheckedUpdateWithoutHotelsInput = {
    name?: StringFieldUpdateOperationsInput | string
    type?: LocationUpdatetypeInput | $Enums.TripType[]
    tags?: LocationUpdatetagsInput | string[]
    description?: StringFieldUpdateOperationsInput | string
    openDays?: LocationUpdateopenDaysInput | $Enums.WeekDays[]
    openHours?: XOR<OpenHoursUpdateEnvelopeInput, OpenHoursCreateInput>
    activeVisit?: BoolFieldUpdateOperationsInput | boolean
    recommendedTime?: EnumRecommendedTimeFieldUpdateOperationsInput | $Enums.RecommendedTime
    recommendedVisitDurationInMinutes?: IntFieldUpdateOperationsInput | number
    foodOptions?: LocationUpdatefoodOptionsInput | $Enums.FoodOption[]
    availableActivities?: XOR<ActivityListUpdateEnvelopeInput, ActivityCreateInput> | ActivityCreateInput[]
    caveats?: XOR<CaveatListUpdateEnvelopeInput, CaveatCreateInput> | CaveatCreateInput[]
    recommendedVisitMonths?: LocationUpdaterecommendedVisitMonthsInput | number[]
    costPerPerson?: XOR<LocationCostListUpdateEnvelopeInput, LocationCostCreateInput> | LocationCostCreateInput[]
    cityId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CityCreateWithoutLocationsInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    hotels?: HotelCreateNestedManyWithoutCityInput
    down?: CityTransportCreateNestedManyWithoutFromInput
    up?: CityTransportCreateNestedManyWithoutToInput
  }

  export type CityUncheckedCreateWithoutLocationsInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    hotels?: HotelUncheckedCreateNestedManyWithoutCityInput
    down?: CityTransportUncheckedCreateNestedManyWithoutFromInput
    up?: CityTransportUncheckedCreateNestedManyWithoutToInput
  }

  export type CityCreateOrConnectWithoutLocationsInput = {
    where: CityWhereUniqueInput
    create: XOR<CityCreateWithoutLocationsInput, CityUncheckedCreateWithoutLocationsInput>
  }

  export type HotelsToLocationsCreateWithoutLocationDetailsInput = {
    id?: string
    distance: number
    commuteTime?: XOR<CommuteTimeListCreateEnvelopeInput, CommuteTimeCreateInput> | CommuteTimeCreateInput[]
    hotelDetails: HotelCreateNestedOneWithoutLocationsInput
  }

  export type HotelsToLocationsUncheckedCreateWithoutLocationDetailsInput = {
    id?: string
    distance: number
    commuteTime?: XOR<CommuteTimeListCreateEnvelopeInput, CommuteTimeCreateInput> | CommuteTimeCreateInput[]
    hotelId: string
  }

  export type HotelsToLocationsCreateOrConnectWithoutLocationDetailsInput = {
    where: HotelsToLocationsWhereUniqueInput
    create: XOR<HotelsToLocationsCreateWithoutLocationDetailsInput, HotelsToLocationsUncheckedCreateWithoutLocationDetailsInput>
  }

  export type HotelsToLocationsCreateManyLocationDetailsInputEnvelope = {
    data: HotelsToLocationsCreateManyLocationDetailsInput | HotelsToLocationsCreateManyLocationDetailsInput[]
  }

  export type OpenHoursUpdateInput = {
    start?: StringFieldUpdateOperationsInput | string
    end?: StringFieldUpdateOperationsInput | string
  }

  export type ActivityUpdateManyInput = {
    where: ActivityWhereInput
    data: ActivityUpdateInput
  }

  export type ActivityDeleteManyInput = {
    where: ActivityWhereInput
  }

  export type CaveatUpdateManyInput = {
    where: CaveatWhereInput
    data: CaveatUpdateInput
  }

  export type CaveatDeleteManyInput = {
    where: CaveatWhereInput
  }

  export type LocationCostUpdateManyInput = {
    where: LocationCostWhereInput
    data: LocationCostUpdateInput
  }

  export type LocationCostDeleteManyInput = {
    where: LocationCostWhereInput
  }

  export type CityUpsertWithoutLocationsInput = {
    update: XOR<CityUpdateWithoutLocationsInput, CityUncheckedUpdateWithoutLocationsInput>
    create: XOR<CityCreateWithoutLocationsInput, CityUncheckedCreateWithoutLocationsInput>
    where?: CityWhereInput
  }

  export type CityUpdateToOneWithWhereWithoutLocationsInput = {
    where?: CityWhereInput
    data: XOR<CityUpdateWithoutLocationsInput, CityUncheckedUpdateWithoutLocationsInput>
  }

  export type CityUpdateWithoutLocationsInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    hotels?: HotelUpdateManyWithoutCityNestedInput
    down?: CityTransportUpdateManyWithoutFromNestedInput
    up?: CityTransportUpdateManyWithoutToNestedInput
  }

  export type CityUncheckedUpdateWithoutLocationsInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    hotels?: HotelUncheckedUpdateManyWithoutCityNestedInput
    down?: CityTransportUncheckedUpdateManyWithoutFromNestedInput
    up?: CityTransportUncheckedUpdateManyWithoutToNestedInput
  }

  export type HotelsToLocationsUpsertWithWhereUniqueWithoutLocationDetailsInput = {
    where: HotelsToLocationsWhereUniqueInput
    update: XOR<HotelsToLocationsUpdateWithoutLocationDetailsInput, HotelsToLocationsUncheckedUpdateWithoutLocationDetailsInput>
    create: XOR<HotelsToLocationsCreateWithoutLocationDetailsInput, HotelsToLocationsUncheckedCreateWithoutLocationDetailsInput>
  }

  export type HotelsToLocationsUpdateWithWhereUniqueWithoutLocationDetailsInput = {
    where: HotelsToLocationsWhereUniqueInput
    data: XOR<HotelsToLocationsUpdateWithoutLocationDetailsInput, HotelsToLocationsUncheckedUpdateWithoutLocationDetailsInput>
  }

  export type HotelsToLocationsUpdateManyWithWhereWithoutLocationDetailsInput = {
    where: HotelsToLocationsScalarWhereInput
    data: XOR<HotelsToLocationsUpdateManyMutationInput, HotelsToLocationsUncheckedUpdateManyWithoutLocationDetailsInput>
  }

  export type EnumRoomCategoryFilter<$PrismaModel = never> = {
    equals?: $Enums.RoomCategory | EnumRoomCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.RoomCategory[] | ListEnumRoomCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.RoomCategory[] | ListEnumRoomCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumRoomCategoryFilter<$PrismaModel> | $Enums.RoomCategory
  }

  export type HotelCreateManyCityInput = {
    id?: string
    name: string
    description: string
    rooms?: XOR<RoomTypesListCreateEnvelopeInput, RoomTypesCreateInput> | RoomTypesCreateInput[]
    tags?: HotelCreatetagsInput | string[]
    rating: number
    amenities?: HotelCreateamenitiesInput | string[]
    recommendedFor?: HotelCreaterecommendedForInput | $Enums.TripType[]
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LocationCreateManyCityInput = {
    id?: string
    name: string
    type?: LocationCreatetypeInput | $Enums.TripType[]
    tags?: LocationCreatetagsInput | string[]
    description: string
    openDays?: LocationCreateopenDaysInput | $Enums.WeekDays[]
    openHours: XOR<OpenHoursCreateEnvelopeInput, OpenHoursCreateInput>
    activeVisit: boolean
    recommendedTime: $Enums.RecommendedTime
    recommendedVisitDurationInMinutes: number
    foodOptions?: LocationCreatefoodOptionsInput | $Enums.FoodOption[]
    availableActivities?: XOR<ActivityListCreateEnvelopeInput, ActivityCreateInput> | ActivityCreateInput[]
    caveats?: XOR<CaveatListCreateEnvelopeInput, CaveatCreateInput> | CaveatCreateInput[]
    recommendedVisitMonths?: LocationCreaterecommendedVisitMonthsInput | number[]
    costPerPerson?: XOR<LocationCostListCreateEnvelopeInput, LocationCostCreateInput> | LocationCostCreateInput[]
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CityTransportCreateManyFromInput = {
    id?: string
    medium: $Enums.TransportMedium
    toId: string
    estimatedTimeInMinutes: number
    price: number
    depertureTimes?: CityTransportCreatedepertureTimesInput | Date[] | string[]
  }

  export type CityTransportCreateManyToInput = {
    id?: string
    medium: $Enums.TransportMedium
    fromId: string
    estimatedTimeInMinutes: number
    price: number
    depertureTimes?: CityTransportCreatedepertureTimesInput | Date[] | string[]
  }

  export type HotelUpdateWithoutCityInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    rooms?: XOR<RoomTypesListUpdateEnvelopeInput, RoomTypesCreateInput> | RoomTypesCreateInput[]
    tags?: HotelUpdatetagsInput | string[]
    rating?: FloatFieldUpdateOperationsInput | number
    amenities?: HotelUpdateamenitiesInput | string[]
    recommendedFor?: HotelUpdaterecommendedForInput | $Enums.TripType[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    locations?: HotelsToLocationsUpdateManyWithoutHotelDetailsNestedInput
  }

  export type HotelUncheckedUpdateWithoutCityInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    rooms?: XOR<RoomTypesListUpdateEnvelopeInput, RoomTypesCreateInput> | RoomTypesCreateInput[]
    tags?: HotelUpdatetagsInput | string[]
    rating?: FloatFieldUpdateOperationsInput | number
    amenities?: HotelUpdateamenitiesInput | string[]
    recommendedFor?: HotelUpdaterecommendedForInput | $Enums.TripType[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    locations?: HotelsToLocationsUncheckedUpdateManyWithoutHotelDetailsNestedInput
  }

  export type HotelUncheckedUpdateManyWithoutCityInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    rooms?: XOR<RoomTypesListUpdateEnvelopeInput, RoomTypesCreateInput> | RoomTypesCreateInput[]
    tags?: HotelUpdatetagsInput | string[]
    rating?: FloatFieldUpdateOperationsInput | number
    amenities?: HotelUpdateamenitiesInput | string[]
    recommendedFor?: HotelUpdaterecommendedForInput | $Enums.TripType[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LocationUpdateWithoutCityInput = {
    name?: StringFieldUpdateOperationsInput | string
    type?: LocationUpdatetypeInput | $Enums.TripType[]
    tags?: LocationUpdatetagsInput | string[]
    description?: StringFieldUpdateOperationsInput | string
    openDays?: LocationUpdateopenDaysInput | $Enums.WeekDays[]
    openHours?: XOR<OpenHoursUpdateEnvelopeInput, OpenHoursCreateInput>
    activeVisit?: BoolFieldUpdateOperationsInput | boolean
    recommendedTime?: EnumRecommendedTimeFieldUpdateOperationsInput | $Enums.RecommendedTime
    recommendedVisitDurationInMinutes?: IntFieldUpdateOperationsInput | number
    foodOptions?: LocationUpdatefoodOptionsInput | $Enums.FoodOption[]
    availableActivities?: XOR<ActivityListUpdateEnvelopeInput, ActivityCreateInput> | ActivityCreateInput[]
    caveats?: XOR<CaveatListUpdateEnvelopeInput, CaveatCreateInput> | CaveatCreateInput[]
    recommendedVisitMonths?: LocationUpdaterecommendedVisitMonthsInput | number[]
    costPerPerson?: XOR<LocationCostListUpdateEnvelopeInput, LocationCostCreateInput> | LocationCostCreateInput[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    hotels?: HotelsToLocationsUpdateManyWithoutLocationDetailsNestedInput
  }

  export type LocationUncheckedUpdateWithoutCityInput = {
    name?: StringFieldUpdateOperationsInput | string
    type?: LocationUpdatetypeInput | $Enums.TripType[]
    tags?: LocationUpdatetagsInput | string[]
    description?: StringFieldUpdateOperationsInput | string
    openDays?: LocationUpdateopenDaysInput | $Enums.WeekDays[]
    openHours?: XOR<OpenHoursUpdateEnvelopeInput, OpenHoursCreateInput>
    activeVisit?: BoolFieldUpdateOperationsInput | boolean
    recommendedTime?: EnumRecommendedTimeFieldUpdateOperationsInput | $Enums.RecommendedTime
    recommendedVisitDurationInMinutes?: IntFieldUpdateOperationsInput | number
    foodOptions?: LocationUpdatefoodOptionsInput | $Enums.FoodOption[]
    availableActivities?: XOR<ActivityListUpdateEnvelopeInput, ActivityCreateInput> | ActivityCreateInput[]
    caveats?: XOR<CaveatListUpdateEnvelopeInput, CaveatCreateInput> | CaveatCreateInput[]
    recommendedVisitMonths?: LocationUpdaterecommendedVisitMonthsInput | number[]
    costPerPerson?: XOR<LocationCostListUpdateEnvelopeInput, LocationCostCreateInput> | LocationCostCreateInput[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    hotels?: HotelsToLocationsUncheckedUpdateManyWithoutLocationDetailsNestedInput
  }

  export type LocationUncheckedUpdateManyWithoutCityInput = {
    name?: StringFieldUpdateOperationsInput | string
    type?: LocationUpdatetypeInput | $Enums.TripType[]
    tags?: LocationUpdatetagsInput | string[]
    description?: StringFieldUpdateOperationsInput | string
    openDays?: LocationUpdateopenDaysInput | $Enums.WeekDays[]
    openHours?: XOR<OpenHoursUpdateEnvelopeInput, OpenHoursCreateInput>
    activeVisit?: BoolFieldUpdateOperationsInput | boolean
    recommendedTime?: EnumRecommendedTimeFieldUpdateOperationsInput | $Enums.RecommendedTime
    recommendedVisitDurationInMinutes?: IntFieldUpdateOperationsInput | number
    foodOptions?: LocationUpdatefoodOptionsInput | $Enums.FoodOption[]
    availableActivities?: XOR<ActivityListUpdateEnvelopeInput, ActivityCreateInput> | ActivityCreateInput[]
    caveats?: XOR<CaveatListUpdateEnvelopeInput, CaveatCreateInput> | CaveatCreateInput[]
    recommendedVisitMonths?: LocationUpdaterecommendedVisitMonthsInput | number[]
    costPerPerson?: XOR<LocationCostListUpdateEnvelopeInput, LocationCostCreateInput> | LocationCostCreateInput[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CityTransportUpdateWithoutFromInput = {
    medium?: EnumTransportMediumFieldUpdateOperationsInput | $Enums.TransportMedium
    estimatedTimeInMinutes?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    depertureTimes?: CityTransportUpdatedepertureTimesInput | Date[] | string[]
    to?: CityUpdateOneRequiredWithoutUpNestedInput
  }

  export type CityTransportUncheckedUpdateWithoutFromInput = {
    medium?: EnumTransportMediumFieldUpdateOperationsInput | $Enums.TransportMedium
    toId?: StringFieldUpdateOperationsInput | string
    estimatedTimeInMinutes?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    depertureTimes?: CityTransportUpdatedepertureTimesInput | Date[] | string[]
  }

  export type CityTransportUncheckedUpdateManyWithoutFromInput = {
    medium?: EnumTransportMediumFieldUpdateOperationsInput | $Enums.TransportMedium
    toId?: StringFieldUpdateOperationsInput | string
    estimatedTimeInMinutes?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    depertureTimes?: CityTransportUpdatedepertureTimesInput | Date[] | string[]
  }

  export type CityTransportUpdateWithoutToInput = {
    medium?: EnumTransportMediumFieldUpdateOperationsInput | $Enums.TransportMedium
    estimatedTimeInMinutes?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    depertureTimes?: CityTransportUpdatedepertureTimesInput | Date[] | string[]
    from?: CityUpdateOneRequiredWithoutDownNestedInput
  }

  export type CityTransportUncheckedUpdateWithoutToInput = {
    medium?: EnumTransportMediumFieldUpdateOperationsInput | $Enums.TransportMedium
    fromId?: StringFieldUpdateOperationsInput | string
    estimatedTimeInMinutes?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    depertureTimes?: CityTransportUpdatedepertureTimesInput | Date[] | string[]
  }

  export type CityTransportUncheckedUpdateManyWithoutToInput = {
    medium?: EnumTransportMediumFieldUpdateOperationsInput | $Enums.TransportMedium
    fromId?: StringFieldUpdateOperationsInput | string
    estimatedTimeInMinutes?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    depertureTimes?: CityTransportUpdatedepertureTimesInput | Date[] | string[]
  }

  export type HotelsToLocationsCreateManyHotelDetailsInput = {
    id?: string
    distance: number
    commuteTime?: XOR<CommuteTimeListCreateEnvelopeInput, CommuteTimeCreateInput> | CommuteTimeCreateInput[]
    locationId: string
  }

  export type RoomTypesUpdateInput = {
    name?: EnumRoomCategoryFieldUpdateOperationsInput | $Enums.RoomCategory
    description?: StringFieldUpdateOperationsInput | string
    capacity?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
  }

  export type HotelsToLocationsUpdateWithoutHotelDetailsInput = {
    distance?: FloatFieldUpdateOperationsInput | number
    commuteTime?: XOR<CommuteTimeListUpdateEnvelopeInput, CommuteTimeCreateInput> | CommuteTimeCreateInput[]
    locationDetails?: LocationUpdateOneRequiredWithoutHotelsNestedInput
  }

  export type HotelsToLocationsUncheckedUpdateWithoutHotelDetailsInput = {
    distance?: FloatFieldUpdateOperationsInput | number
    commuteTime?: XOR<CommuteTimeListUpdateEnvelopeInput, CommuteTimeCreateInput> | CommuteTimeCreateInput[]
    locationId?: StringFieldUpdateOperationsInput | string
  }

  export type HotelsToLocationsUncheckedUpdateManyWithoutHotelDetailsInput = {
    distance?: FloatFieldUpdateOperationsInput | number
    commuteTime?: XOR<CommuteTimeListUpdateEnvelopeInput, CommuteTimeCreateInput> | CommuteTimeCreateInput[]
    locationId?: StringFieldUpdateOperationsInput | string
  }

  export type CommuteTimeUpdateInput = {
    medium?: StringFieldUpdateOperationsInput | string
    estimatedTimeInMinutes?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
  }

  export type HotelsToLocationsCreateManyLocationDetailsInput = {
    id?: string
    distance: number
    commuteTime?: XOR<CommuteTimeListCreateEnvelopeInput, CommuteTimeCreateInput> | CommuteTimeCreateInput[]
    hotelId: string
  }

  export type ActivityUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
  }

  export type CaveatUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
  }

  export type LocationCostUpdateInput = {
    tier?: StringFieldUpdateOperationsInput | string
    cost?: FloatFieldUpdateOperationsInput | number
  }

  export type HotelsToLocationsUpdateWithoutLocationDetailsInput = {
    distance?: FloatFieldUpdateOperationsInput | number
    commuteTime?: XOR<CommuteTimeListUpdateEnvelopeInput, CommuteTimeCreateInput> | CommuteTimeCreateInput[]
    hotelDetails?: HotelUpdateOneRequiredWithoutLocationsNestedInput
  }

  export type HotelsToLocationsUncheckedUpdateWithoutLocationDetailsInput = {
    distance?: FloatFieldUpdateOperationsInput | number
    commuteTime?: XOR<CommuteTimeListUpdateEnvelopeInput, CommuteTimeCreateInput> | CommuteTimeCreateInput[]
    hotelId?: StringFieldUpdateOperationsInput | string
  }

  export type HotelsToLocationsUncheckedUpdateManyWithoutLocationDetailsInput = {
    distance?: FloatFieldUpdateOperationsInput | number
    commuteTime?: XOR<CommuteTimeListUpdateEnvelopeInput, CommuteTimeCreateInput> | CommuteTimeCreateInput[]
    hotelId?: StringFieldUpdateOperationsInput | string
  }

  export type NestedEnumRoomCategoryFilter<$PrismaModel = never> = {
    equals?: $Enums.RoomCategory | EnumRoomCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.RoomCategory[] | ListEnumRoomCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.RoomCategory[] | ListEnumRoomCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumRoomCategoryFilter<$PrismaModel> | $Enums.RoomCategory
  }

  export type EnumRoomCategoryFieldUpdateOperationsInput = {
    set?: $Enums.RoomCategory
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