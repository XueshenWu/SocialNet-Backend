
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
  name: 'name',
  email: 'email',
  password: 'password',
  role: 'role',
  createTime: 'createTime'
};

exports.Prisma.ProfileScalarFieldEnum = {
  userId: 'userId',
  avatar: 'avatar',
  bio: 'bio',
  interests: 'interests',
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
exports.Role = exports.$Enums.Role = {
  COMMON: 'COMMON',
  ADMIN: 'ADMIN'
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
  "inlineSchema": "Z2VuZXJhdG9yIGNsaWVudCB7CiAgICBwcm92aWRlciA9ICJwcmlzbWEtY2xpZW50LWpzIgogICAgb3V0cHV0ICAgPSAiLi4vc3JjL2dlbmVyYXRlZC9wZyIKfQoKZGF0YXNvdXJjZSBkYiB7CiAgICBwcm92aWRlciA9ICJwb3N0Z3Jlc3FsIgogICAgdXJsICAgICAgPSBlbnYoIlBHX1VSTCIpCn0KCm1vZGVsIFVzZXIgewogICAgaWQgICAgICAgICBTdHJpbmcgICBAaWQgQGRlZmF1bHQodXVpZCgpKQogICAgbmFtZSAgICAgICBTdHJpbmcKICAgIGVtYWlsICAgICAgU3RyaW5nICAgQHVuaXF1ZQogICAgcGFzc3dvcmQgICBTdHJpbmcKICAgIHJvbGUgICAgICAgUm9sZQogICAgY3JlYXRlVGltZSBEYXRlVGltZSBAZGVmYXVsdChub3coKSkKCiAgICBwcm9maWxlIFByb2ZpbGU/CgogICAgZnJpZW5kc09mIEZyaWVuZFtdIEByZWxhdGlvbigiRnJpZW5kT2ZVc2VyIikKICAgIGZyaWVuZHMgICBGcmllbmRbXSBAcmVsYXRpb24oIlVzZXJGcmllbmRzIikKCiAgICBmb2xsb3dzICBGb2xsb3dbXSBAcmVsYXRpb24oIlVzZXJGb2xsb3dzIikKICAgIGZvbGxvd2VkIEZvbGxvd1tdIEByZWxhdGlvbigiVXNlckZvbGxvd2VkIikKCiAgICAvLyBvcmlnaW5Qb3N0cyAgICBQb3N0W10gQHJlbGF0aW9uKCJvcmlnaW5Qb3N0cyIpCiAgICAvLyBmb3J3YXJkZWRQb3N0cyBQb3N0W10gQHJlbGF0aW9uKCJmb3J3YXJkZWRQb3N0cyIpCn0KCm1vZGVsIFByb2ZpbGUgewogICAgdXNlciAgICAgICBVc2VyICAgICAgIEByZWxhdGlvbihmaWVsZHM6IFt1c2VySWRdLCByZWZlcmVuY2VzOiBbaWRdKQogICAgdXNlcklkICAgICBTdHJpbmcgICAgIEBpZAogICAgYXZhdGFyICAgICBTdHJpbmcKICAgIGJpbyAgICAgICAgU3RyaW5nCiAgICBpbnRlcmVzdHMgIEludGVyZXN0W10KICAgIGNyZWF0ZVRpbWUgRGF0ZVRpbWUgICBAZGVmYXVsdChub3coKSkKICAgIHVwZGF0ZVRpbWUgRGF0ZVRpbWUgICBAdXBkYXRlZEF0Cn0KCm1vZGVsIEZyaWVuZCB7CiAgICBpZF9mcm9tIFN0cmluZwogICAgaWRfdG8gICBTdHJpbmcKICAgIHVzZXIxICAgVXNlciAgIEByZWxhdGlvbihuYW1lOiAiRnJpZW5kT2ZVc2VyIiwgZmllbGRzOiBbaWRfZnJvbV0sIHJlZmVyZW5jZXM6IFtpZF0pCiAgICB1c2VyMiAgIFVzZXIgICBAcmVsYXRpb24obmFtZTogIlVzZXJGcmllbmRzIiwgZmllbGRzOiBbaWRfdG9dLCByZWZlcmVuY2VzOiBbaWRdKQoKICAgIEBAaWQoW2lkX2Zyb20sIGlkX3RvXSkKICAgIEBAdW5pcXVlKFtpZF9mcm9tLCBpZF90b10pCn0KCm1vZGVsIEZvbGxvdyB7CiAgICBpZF9mcm9tIFN0cmluZwogICAgaWRfdG8gICBTdHJpbmcKICAgIHVzZXIxICAgVXNlciAgIEByZWxhdGlvbihuYW1lOiAiVXNlckZvbGxvd3MiLCBmaWVsZHM6IFtpZF9mcm9tXSwgcmVmZXJlbmNlczogW2lkXSkKICAgIHVzZXIyICAgVXNlciAgIEByZWxhdGlvbihuYW1lOiAiVXNlckZvbGxvd2VkIiwgZmllbGRzOiBbaWRfdG9dLCByZWZlcmVuY2VzOiBbaWRdKQoKICAgIEBAaWQoW2lkX2Zyb20sIGlkX3RvXSkKICAgIEBAdW5pcXVlKFtpZF9mcm9tLCBpZF90b10pCn0KCi8vIG1vZGVsIFBvc3QgewovLyAgICAgaWQgICAgICAgU3RyaW5nIEBpZCBAZGVmYXVsdCh1dWlkKCkpCi8vICAgICB0aXRsZSAgICBTdHJpbmcKLy8gICAgIGF1dGhvciAgIFVzZXIgICBAcmVsYXRpb24obmFtZTogIm9yaWdpblBvc3RzIiwgZmllbGRzOiBbYXV0aG9ySWRdLCByZWZlcmVuY2VzOiBbaWRdKQovLyAgICAgYXV0aG9ySWQgU3RyaW5nCgovLyAgICAgcG9zdGVyICAgVXNlciAgIEByZWxhdGlvbihuYW1lOiAiZm9yd2FyZGVkUG9zdHMiLCBmaWVsZHM6IFtwb3N0ZXJJZF0sIHJlZmVyZW5jZXM6IFtpZF0pCi8vICAgICBwb3N0ZXJJZCBTdHJpbmcKLy8gfQoKZW51bSBSb2xlIHsKICAgIENPTU1PTgogICAgQURNSU4KfQoKZW51bSBJbnRlcmVzdCB7CiAgICBTUE9SVAogICAgTVVTSUMKICAgIE1PVklFCiAgICBUUkFWRUwKICAgIEZPT0QKICAgIEdBTUUKICAgIFRFQ0gKICAgIEFSVAogICAgU0NJRU5DRQogICAgTElURVJBVFVSRQogICAgT1RIRVIKfQo=",
  "inlineSchemaHash": "dbd9fe9abbc8583fdeed035ef6575e8a4788d46ef6d0f30df983e95844b18400"
}
config.dirname = '/'

config.runtimeDataModel = JSON.parse("{\"models\":{\"User\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"uuid\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"email\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"password\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"role\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Role\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createTime\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"profile\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Profile\",\"relationName\":\"ProfileToUser\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"friendsOf\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Friend\",\"relationName\":\"FriendOfUser\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"friends\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Friend\",\"relationName\":\"UserFriends\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"follows\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Follow\",\"relationName\":\"UserFollows\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"followed\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Follow\",\"relationName\":\"UserFollowed\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Profile\":{\"dbName\":null,\"fields\":[{\"name\":\"user\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"User\",\"relationName\":\"ProfileToUser\",\"relationFromFields\":[\"userId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"userId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"avatar\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"bio\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"interests\",\"kind\":\"enum\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Interest\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createTime\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updateTime\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":true}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Friend\":{\"dbName\":null,\"fields\":[{\"name\":\"id_from\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"id_to\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"user1\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"User\",\"relationName\":\"FriendOfUser\",\"relationFromFields\":[\"id_from\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"user2\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"User\",\"relationName\":\"UserFriends\",\"relationFromFields\":[\"id_to\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":{\"name\":null,\"fields\":[\"id_from\",\"id_to\"]},\"uniqueFields\":[[\"id_from\",\"id_to\"]],\"uniqueIndexes\":[{\"name\":null,\"fields\":[\"id_from\",\"id_to\"]}],\"isGenerated\":false},\"Follow\":{\"dbName\":null,\"fields\":[{\"name\":\"id_from\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"id_to\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"user1\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"User\",\"relationName\":\"UserFollows\",\"relationFromFields\":[\"id_from\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"user2\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"User\",\"relationName\":\"UserFollowed\",\"relationFromFields\":[\"id_to\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":{\"name\":null,\"fields\":[\"id_from\",\"id_to\"]},\"uniqueFields\":[[\"id_from\",\"id_to\"]],\"uniqueIndexes\":[{\"name\":null,\"fields\":[\"id_from\",\"id_to\"]}],\"isGenerated\":false}},\"enums\":{\"Role\":{\"values\":[{\"name\":\"COMMON\",\"dbName\":null},{\"name\":\"ADMIN\",\"dbName\":null}],\"dbName\":null},\"Interest\":{\"values\":[{\"name\":\"SPORT\",\"dbName\":null},{\"name\":\"MUSIC\",\"dbName\":null},{\"name\":\"MOVIE\",\"dbName\":null},{\"name\":\"TRAVEL\",\"dbName\":null},{\"name\":\"FOOD\",\"dbName\":null},{\"name\":\"GAME\",\"dbName\":null},{\"name\":\"TECH\",\"dbName\":null},{\"name\":\"ART\",\"dbName\":null},{\"name\":\"SCIENCE\",\"dbName\":null},{\"name\":\"LITERATURE\",\"dbName\":null},{\"name\":\"OTHER\",\"dbName\":null}],\"dbName\":null}},\"types\":{}}")
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

