
Object.defineProperty(exports, "__esModule", { value: true });

const {
  PrismaClientKnownRequestError,
  PrismaClientUnknownRequestError,
  PrismaClientRustPanicError,
  PrismaClientInitializationError,
  PrismaClientValidationError,
  NotFoundError,
  getPrismaClient,
  sqltag,
  empty,
  join,
  raw,
  Decimal,
  Debug,
  objectEnumValues,
  makeStrictEnum,
  Extensions,
  warnOnce,
  defineDmmfProperty,
  Public,
  detectRuntime,
} = require('./runtime/edge')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 5.8.1
 * Query Engine version: 78caf6feeaed953168c64e15a249c3e9a033ebe2
 */
Prisma.prismaVersion = {
  client: "5.8.1",
  engine: "78caf6feeaed953168c64e15a249c3e9a033ebe2"
}

Prisma.PrismaClientKnownRequestError = PrismaClientKnownRequestError;
Prisma.PrismaClientUnknownRequestError = PrismaClientUnknownRequestError
Prisma.PrismaClientRustPanicError = PrismaClientRustPanicError
Prisma.PrismaClientInitializationError = PrismaClientInitializationError
Prisma.PrismaClientValidationError = PrismaClientValidationError
Prisma.NotFoundError = NotFoundError
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = sqltag
Prisma.empty = empty
Prisma.join = join
Prisma.raw = raw
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = Extensions.getExtensionContext
Prisma.defineExtension = Extensions.defineExtension

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}



/**
 * Enums
 */
exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.UserScalarFieldEnum = {
  id: 'id',
  email: 'email',
  password: 'password',
  role: 'role',
  createTime: 'createTime'
};

exports.Prisma.ProfileScalarFieldEnum = {
  userId: 'userId',
  name: 'name',
  customId: 'customId',
  avatar: 'avatar',
  bio: 'bio',
  interests: 'interests',
  gender: 'gender',
  createTime: 'createTime',
  updateTime: 'updateTime'
};

exports.Prisma.FriendScalarFieldEnum = {
  id_from: 'id_from',
  id_to: 'id_to'
};

exports.Prisma.FollowScalarFieldEnum = {
  id_from: 'id_from',
  id_to: 'id_to'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.QueryMode = {
  default: 'default',
  insensitive: 'insensitive'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};
exports.Role = exports.$Enums.Role = {
  COMMON: 'COMMON',
  ADMIN: 'ADMIN',
  DISABLED: 'DISABLED'
};

exports.Interest = exports.$Enums.Interest = {
  SPORT: 'SPORT',
  MUSIC: 'MUSIC',
  MOVIE: 'MOVIE',
  TRAVEL: 'TRAVEL',
  FOOD: 'FOOD',
  GAME: 'GAME',
  TECH: 'TECH',
  ART: 'ART',
  SCIENCE: 'SCIENCE',
  LITERATURE: 'LITERATURE',
  OTHER: 'OTHER'
};

exports.Prisma.ModelName = {
  User: 'User',
  Profile: 'Profile',
  Friend: 'Friend',
  Follow: 'Follow'
};
/**
 * Create the Client
 */
const config = {
  "generator": {
    "name": "client",
    "provider": {
      "fromEnvVar": null,
      "value": "prisma-client-js"
    },
    "output": {
      "value": "/Users/wu/t26back/src/generated/pg",
      "fromEnvVar": null
    },
    "config": {
      "engineType": "library"
    },
    "binaryTargets": [
      {
        "fromEnvVar": null,
        "value": "darwin",
        "native": true
      }
    ],
    "previewFeatures": [],
    "isCustomOutput": true
  },
  "relativeEnvPaths": {
    "rootEnvPath": "../../../.env",
    "schemaEnvPath": "../../../.env"
  },
  "relativePath": "../../../prisma",
  "clientVersion": "5.8.1",
  "engineVersion": "78caf6feeaed953168c64e15a249c3e9a033ebe2",
  "datasourceNames": [
    "db"
  ],
  "activeProvider": "postgresql",
  "inlineDatasources": {
    "db": {
      "url": {
        "fromEnvVar": "PG_URL",
        "value": null
      }
    }
  },
  "inlineSchema": "Z2VuZXJhdG9yIGNsaWVudCB7CiAgICBwcm92aWRlciA9ICJwcmlzbWEtY2xpZW50LWpzIgogICAgb3V0cHV0ICAgPSAiLi4vc3JjL2dlbmVyYXRlZC9wZyIKfQoKZGF0YXNvdXJjZSBkYiB7CiAgICBwcm92aWRlciA9ICJwb3N0Z3Jlc3FsIgogICAgdXJsICAgICAgPSBlbnYoIlBHX1VSTCIpCn0KCm1vZGVsIFVzZXIgewogICAgaWQgU3RyaW5nIEBpZCBAZGVmYXVsdCh1dWlkKCkpCgogICAgZW1haWwgICAgICBTdHJpbmcgICBAdW5pcXVlCiAgICBwYXNzd29yZCAgIFN0cmluZwogICAgcm9sZSAgICAgICBSb2xlCiAgICBjcmVhdGVUaW1lIERhdGVUaW1lIEBkZWZhdWx0KG5vdygpKQoKICAgIHByb2ZpbGUgUHJvZmlsZT8KCiAgICBmcmllbmRzT2YgRnJpZW5kW10gQHJlbGF0aW9uKCJGcmllbmRPZlVzZXIiKQogICAgZnJpZW5kcyAgIEZyaWVuZFtdIEByZWxhdGlvbigiVXNlckZyaWVuZHMiKQoKICAgIGZvbGxvd3MgIEZvbGxvd1tdIEByZWxhdGlvbigiVXNlckZvbGxvd3MiKQogICAgZm9sbG93ZWQgRm9sbG93W10gQHJlbGF0aW9uKCJVc2VyRm9sbG93ZWQiKQoKICAgCn0KCm1vZGVsIFByb2ZpbGUgewogICAgdXNlciAgICAgICBVc2VyICAgICAgIEByZWxhdGlvbihmaWVsZHM6IFt1c2VySWRdLCByZWZlcmVuY2VzOiBbaWRdLCBvblVwZGF0ZTogQ2FzY2FkZSkKICAgIHVzZXJJZCAgICAgU3RyaW5nICAgICBAaWQKICAgIG5hbWUgICAgICAgU3RyaW5nCiAgICBjdXN0b21JZCAgIFN0cmluZyAgICAgQHVuaXF1ZQogICAgYXZhdGFyICAgICBTdHJpbmc/CiAgICBiaW8gICAgICAgIFN0cmluZz8KICAgIGludGVyZXN0cyAgSW50ZXJlc3RbXQogICAgZ2VuZGVyICAgICBTdHJpbmcKICAgIGNyZWF0ZVRpbWUgRGF0ZVRpbWUgICBAZGVmYXVsdChub3coKSkKICAgIHVwZGF0ZVRpbWUgRGF0ZVRpbWUgICBAdXBkYXRlZEF0Cn0KCm1vZGVsIEZyaWVuZCB7CiAgICBpZF9mcm9tIFN0cmluZwogICAgaWRfdG8gICBTdHJpbmcKICAgIHVzZXIxICAgVXNlciAgIEByZWxhdGlvbihuYW1lOiAiRnJpZW5kT2ZVc2VyIiwgZmllbGRzOiBbaWRfZnJvbV0sIHJlZmVyZW5jZXM6IFtpZF0sIG9uVXBkYXRlOiBDYXNjYWRlKQogICAgdXNlcjIgICBVc2VyICAgQHJlbGF0aW9uKG5hbWU6ICJVc2VyRnJpZW5kcyIsIGZpZWxkczogW2lkX3RvXSwgcmVmZXJlbmNlczogW2lkXSwgb25VcGRhdGU6IENhc2NhZGUpCgogICAgQEBpZChbaWRfZnJvbSwgaWRfdG9dKQogICAgQEB1bmlxdWUoW2lkX2Zyb20sIGlkX3RvXSkKfQoKbW9kZWwgRm9sbG93IHsKICAgIGlkX2Zyb20gU3RyaW5nCiAgICBpZF90byAgIFN0cmluZwogICAgdXNlcjEgICBVc2VyICAgQHJlbGF0aW9uKG5hbWU6ICJVc2VyRm9sbG93cyIsIGZpZWxkczogW2lkX2Zyb21dLCByZWZlcmVuY2VzOiBbaWRdLCBvblVwZGF0ZTogQ2FzY2FkZSkKICAgIHVzZXIyICAgVXNlciAgIEByZWxhdGlvbihuYW1lOiAiVXNlckZvbGxvd2VkIiwgZmllbGRzOiBbaWRfdG9dLCByZWZlcmVuY2VzOiBbaWRdLCBvblVwZGF0ZTogQ2FzY2FkZSkKCiAgICBAQGlkKFtpZF9mcm9tLCBpZF90b10pCiAgICBAQHVuaXF1ZShbaWRfZnJvbSwgaWRfdG9dKQp9CgovLyBtb2RlbCBQb3N0IHsKLy8gICAgIGlkICAgICAgIFN0cmluZyBAaWQgQGRlZmF1bHQodXVpZCgpKQovLyAgICAgdGl0bGUgICAgU3RyaW5nCi8vICAgICBhdXRob3IgICBVc2VyICAgQHJlbGF0aW9uKG5hbWU6ICJvcmlnaW5Qb3N0cyIsIGZpZWxkczogW2F1dGhvcklkXSwgcmVmZXJlbmNlczogW2lkXSkKLy8gICAgIGF1dGhvcklkIFN0cmluZwoKLy8gICAgIHBvc3RlciAgIFVzZXIgICBAcmVsYXRpb24obmFtZTogImZvcndhcmRlZFBvc3RzIiwgZmllbGRzOiBbcG9zdGVySWRdLCByZWZlcmVuY2VzOiBbaWRdKQovLyAgICAgcG9zdGVySWQgU3RyaW5nCi8vIH0KCmVudW0gUm9sZSB7CiAgICBDT01NT04KICAgIEFETUlOCiAgICBESVNBQkxFRAp9CgplbnVtIEludGVyZXN0IHsKICAgIFNQT1JUCiAgICBNVVNJQwogICAgTU9WSUUKICAgIFRSQVZFTAogICAgRk9PRAogICAgR0FNRQogICAgVEVDSAogICAgQVJUCiAgICBTQ0lFTkNFCiAgICBMSVRFUkFUVVJFCiAgICBPVEhFUgp9CgoK",
  "inlineSchemaHash": "b2cc7c83ed10ba5745e55d245f31253eee3dafc04917442e4bc28acf3c3f025d"
}
config.dirname = '/'

config.runtimeDataModel = JSON.parse("{\"models\":{\"User\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"uuid\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"email\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"password\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"role\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Role\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createTime\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"profile\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Profile\",\"relationName\":\"ProfileToUser\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"friendsOf\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Friend\",\"relationName\":\"FriendOfUser\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"friends\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Friend\",\"relationName\":\"UserFriends\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"follows\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Follow\",\"relationName\":\"UserFollows\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"followed\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Follow\",\"relationName\":\"UserFollowed\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Profile\":{\"dbName\":null,\"fields\":[{\"name\":\"user\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"User\",\"relationName\":\"ProfileToUser\",\"relationFromFields\":[\"userId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"userId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"customId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"avatar\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"bio\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"interests\",\"kind\":\"enum\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Interest\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"gender\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createTime\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updateTime\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":true}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Friend\":{\"dbName\":null,\"fields\":[{\"name\":\"id_from\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"id_to\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"user1\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"User\",\"relationName\":\"FriendOfUser\",\"relationFromFields\":[\"id_from\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"user2\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"User\",\"relationName\":\"UserFriends\",\"relationFromFields\":[\"id_to\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":{\"name\":null,\"fields\":[\"id_from\",\"id_to\"]},\"uniqueFields\":[[\"id_from\",\"id_to\"]],\"uniqueIndexes\":[{\"name\":null,\"fields\":[\"id_from\",\"id_to\"]}],\"isGenerated\":false},\"Follow\":{\"dbName\":null,\"fields\":[{\"name\":\"id_from\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"id_to\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"user1\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"User\",\"relationName\":\"UserFollows\",\"relationFromFields\":[\"id_from\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"user2\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"User\",\"relationName\":\"UserFollowed\",\"relationFromFields\":[\"id_to\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":{\"name\":null,\"fields\":[\"id_from\",\"id_to\"]},\"uniqueFields\":[[\"id_from\",\"id_to\"]],\"uniqueIndexes\":[{\"name\":null,\"fields\":[\"id_from\",\"id_to\"]}],\"isGenerated\":false}},\"enums\":{\"Role\":{\"values\":[{\"name\":\"COMMON\",\"dbName\":null},{\"name\":\"ADMIN\",\"dbName\":null},{\"name\":\"DISABLED\",\"dbName\":null}],\"dbName\":null},\"Interest\":{\"values\":[{\"name\":\"SPORT\",\"dbName\":null},{\"name\":\"MUSIC\",\"dbName\":null},{\"name\":\"MOVIE\",\"dbName\":null},{\"name\":\"TRAVEL\",\"dbName\":null},{\"name\":\"FOOD\",\"dbName\":null},{\"name\":\"GAME\",\"dbName\":null},{\"name\":\"TECH\",\"dbName\":null},{\"name\":\"ART\",\"dbName\":null},{\"name\":\"SCIENCE\",\"dbName\":null},{\"name\":\"LITERATURE\",\"dbName\":null},{\"name\":\"OTHER\",\"dbName\":null}],\"dbName\":null}},\"types\":{}}")
defineDmmfProperty(exports.Prisma, config.runtimeDataModel)
config.getQueryEngineWasmModule = undefined

config.injectableEdgeEnv = () => ({
  parsed: {
    PG_URL: typeof globalThis !== 'undefined' && globalThis['PG_URL'] || typeof process !== 'undefined' && process.env && process.env.PG_URL || undefined
  }
})

if (typeof globalThis !== 'undefined' && globalThis['DEBUG'] || typeof process !== 'undefined' && process.env && process.env.DEBUG || undefined) {
  Debug.enable(typeof globalThis !== 'undefined' && globalThis['DEBUG'] || typeof process !== 'undefined' && process.env && process.env.DEBUG || undefined)
}

const PrismaClient = getPrismaClient(config)
exports.PrismaClient = PrismaClient
Object.assign(exports, Prisma)

