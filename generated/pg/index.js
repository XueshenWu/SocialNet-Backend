
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
} = require('./runtime/library')


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


  const path = require('path')

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
      "value": "/Users/lewisning/Documents/GitHub/Back_End_Nest/src/generated/pg",
      "fromEnvVar": null
    },
    "config": {
      "engineType": "library"
    },
    "binaryTargets": [
      {
        "fromEnvVar": null,
        "value": "darwin-arm64",
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
  "postinstall": false,
  "inlineDatasources": {
    "db": {
      "url": {
        "fromEnvVar": "PG_URL",
        "value": null
      }
    }
  },
  "inlineSchema": "Z2VuZXJhdG9yIGNsaWVudCB7CiAgICBwcm92aWRlciA9ICJwcmlzbWEtY2xpZW50LWpzIgogICAgb3V0cHV0ICAgPSAiLi4vc3JjL2dlbmVyYXRlZC9wZyIKfQoKZGF0YXNvdXJjZSBkYiB7CiAgICBwcm92aWRlciA9ICJwb3N0Z3Jlc3FsIgogICAgdXJsICAgICAgPSBlbnYoIlBHX1VSTCIpCn0KCm1vZGVsIFVzZXIgewogICAgaWQgU3RyaW5nIEBpZCBAZGVmYXVsdCh1dWlkKCkpCgogICAgZW1haWwgICAgICBTdHJpbmcgICBAdW5pcXVlCiAgICBwYXNzd29yZCAgIFN0cmluZwogICAgcm9sZSAgICAgICBSb2xlCiAgICBjcmVhdGVUaW1lIERhdGVUaW1lIEBkZWZhdWx0KG5vdygpKQoKICAgIHByb2ZpbGUgUHJvZmlsZT8KCiAgICBmcmllbmRzT2YgRnJpZW5kW10gQHJlbGF0aW9uKCJGcmllbmRPZlVzZXIiKQogICAgZnJpZW5kcyAgIEZyaWVuZFtdIEByZWxhdGlvbigiVXNlckZyaWVuZHMiKQoKICAgIGZvbGxvd3MgIEZvbGxvd1tdIEByZWxhdGlvbigiVXNlckZvbGxvd3MiKQogICAgZm9sbG93ZWQgRm9sbG93W10gQHJlbGF0aW9uKCJVc2VyRm9sbG93ZWQiKQoKICAgCn0KCm1vZGVsIFByb2ZpbGUgewogICAgdXNlciAgICAgICBVc2VyICAgICAgIEByZWxhdGlvbihmaWVsZHM6IFt1c2VySWRdLCByZWZlcmVuY2VzOiBbaWRdLCBvblVwZGF0ZTogQ2FzY2FkZSkKICAgIHVzZXJJZCAgICAgU3RyaW5nICAgICBAaWQKICAgIG5hbWUgICAgICAgU3RyaW5nPwogICAgY3VzdG9tSWQgICBTdHJpbmcgICAgIEB1bmlxdWUKICAgIGF2YXRhciAgICAgU3RyaW5nPwogICAgYmlvICAgICAgICBTdHJpbmc/CiAgICBpbnRlcmVzdHMgIEludGVyZXN0W10KICAgIGdlbmRlciAgICAgU3RyaW5nPwogICAgY3JlYXRlVGltZSBEYXRlVGltZSAgIEBkZWZhdWx0KG5vdygpKQogICAgdXBkYXRlVGltZSBEYXRlVGltZSAgIEB1cGRhdGVkQXQKfQoKbW9kZWwgRnJpZW5kIHsKICAgIGlkX2Zyb20gU3RyaW5nCiAgICBpZF90byAgIFN0cmluZwogICAgdXNlcjEgICBVc2VyICAgQHJlbGF0aW9uKG5hbWU6ICJGcmllbmRPZlVzZXIiLCBmaWVsZHM6IFtpZF9mcm9tXSwgcmVmZXJlbmNlczogW2lkXSwgb25VcGRhdGU6IENhc2NhZGUpCiAgICB1c2VyMiAgIFVzZXIgICBAcmVsYXRpb24obmFtZTogIlVzZXJGcmllbmRzIiwgZmllbGRzOiBbaWRfdG9dLCByZWZlcmVuY2VzOiBbaWRdLCBvblVwZGF0ZTogQ2FzY2FkZSkKCiAgICBAQGlkKFtpZF9mcm9tLCBpZF90b10pCiAgICBAQHVuaXF1ZShbaWRfZnJvbSwgaWRfdG9dKQp9Cgptb2RlbCBGb2xsb3cgewogICAgaWRfZnJvbSBTdHJpbmcKICAgIGlkX3RvICAgU3RyaW5nCiAgICB1c2VyMSAgIFVzZXIgICBAcmVsYXRpb24obmFtZTogIlVzZXJGb2xsb3dzIiwgZmllbGRzOiBbaWRfZnJvbV0sIHJlZmVyZW5jZXM6IFtpZF0sIG9uVXBkYXRlOiBDYXNjYWRlKQogICAgdXNlcjIgICBVc2VyICAgQHJlbGF0aW9uKG5hbWU6ICJVc2VyRm9sbG93ZWQiLCBmaWVsZHM6IFtpZF90b10sIHJlZmVyZW5jZXM6IFtpZF0sIG9uVXBkYXRlOiBDYXNjYWRlKQoKICAgIEBAaWQoW2lkX2Zyb20sIGlkX3RvXSkKICAgIEBAdW5pcXVlKFtpZF9mcm9tLCBpZF90b10pCn0KCi8vIG1vZGVsIFBvc3QgewovLyAgICAgaWQgICAgICAgU3RyaW5nIEBpZCBAZGVmYXVsdCh1dWlkKCkpCi8vICAgICB0aXRsZSAgICBTdHJpbmcKLy8gICAgIGF1dGhvciAgIFVzZXIgICBAcmVsYXRpb24obmFtZTogIm9yaWdpblBvc3RzIiwgZmllbGRzOiBbYXV0aG9ySWRdLCByZWZlcmVuY2VzOiBbaWRdKQovLyAgICAgYXV0aG9ySWQgU3RyaW5nCgovLyAgICAgcG9zdGVyICAgVXNlciAgIEByZWxhdGlvbihuYW1lOiAiZm9yd2FyZGVkUG9zdHMiLCBmaWVsZHM6IFtwb3N0ZXJJZF0sIHJlZmVyZW5jZXM6IFtpZF0pCi8vICAgICBwb3N0ZXJJZCBTdHJpbmcKLy8gfQoKZW51bSBSb2xlIHsKICAgIENPTU1PTgogICAgQURNSU4KICAgIERJU0FCTEVECn0KCmVudW0gSW50ZXJlc3QgewogICAgU1BPUlQKICAgIE1VU0lDCiAgICBNT1ZJRQogICAgVFJBVkVMCiAgICBGT09ECiAgICBHQU1FCiAgICBURUNICiAgICBBUlQKICAgIFNDSUVOQ0UKICAgIExJVEVSQVRVUkUKICAgIE9USEVSCn0KCgo=",
  "inlineSchemaHash": "175abb547e1bc37daab2a41dfa8bc1de10ba31cd2fa654036c078c3e2adce26f",
  "noEngine": false
}

const fs = require('fs')

config.dirname = __dirname
if (!fs.existsSync(path.join(__dirname, 'schema.prisma'))) {
  const alternativePaths = [
    "src/generated/pg",
    "generated/pg",
  ]
  
  const alternativePath = alternativePaths.find((altPath) => {
    return fs.existsSync(path.join(process.cwd(), altPath, 'schema.prisma'))
  }) ?? alternativePaths[0]

  config.dirname = path.join(process.cwd(), alternativePath)
  config.isBundled = true
}

config.runtimeDataModel = JSON.parse("{\"models\":{\"User\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"uuid\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"email\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"password\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"role\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Role\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createTime\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"profile\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Profile\",\"relationName\":\"ProfileToUser\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"friendsOf\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Friend\",\"relationName\":\"FriendOfUser\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"friends\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Friend\",\"relationName\":\"UserFriends\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"follows\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Follow\",\"relationName\":\"UserFollows\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"followed\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Follow\",\"relationName\":\"UserFollowed\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Profile\":{\"dbName\":null,\"fields\":[{\"name\":\"user\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"User\",\"relationName\":\"ProfileToUser\",\"relationFromFields\":[\"userId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"userId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"customId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"avatar\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"bio\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"interests\",\"kind\":\"enum\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Interest\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"gender\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createTime\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updateTime\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":true}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Friend\":{\"dbName\":null,\"fields\":[{\"name\":\"id_from\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"id_to\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"user1\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"User\",\"relationName\":\"FriendOfUser\",\"relationFromFields\":[\"id_from\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"user2\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"User\",\"relationName\":\"UserFriends\",\"relationFromFields\":[\"id_to\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":{\"name\":null,\"fields\":[\"id_from\",\"id_to\"]},\"uniqueFields\":[[\"id_from\",\"id_to\"]],\"uniqueIndexes\":[{\"name\":null,\"fields\":[\"id_from\",\"id_to\"]}],\"isGenerated\":false},\"Follow\":{\"dbName\":null,\"fields\":[{\"name\":\"id_from\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"id_to\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"user1\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"User\",\"relationName\":\"UserFollows\",\"relationFromFields\":[\"id_from\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"user2\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"User\",\"relationName\":\"UserFollowed\",\"relationFromFields\":[\"id_to\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":{\"name\":null,\"fields\":[\"id_from\",\"id_to\"]},\"uniqueFields\":[[\"id_from\",\"id_to\"]],\"uniqueIndexes\":[{\"name\":null,\"fields\":[\"id_from\",\"id_to\"]}],\"isGenerated\":false}},\"enums\":{\"Role\":{\"values\":[{\"name\":\"COMMON\",\"dbName\":null},{\"name\":\"ADMIN\",\"dbName\":null},{\"name\":\"DISABLED\",\"dbName\":null}],\"dbName\":null},\"Interest\":{\"values\":[{\"name\":\"SPORT\",\"dbName\":null},{\"name\":\"MUSIC\",\"dbName\":null},{\"name\":\"MOVIE\",\"dbName\":null},{\"name\":\"TRAVEL\",\"dbName\":null},{\"name\":\"FOOD\",\"dbName\":null},{\"name\":\"GAME\",\"dbName\":null},{\"name\":\"TECH\",\"dbName\":null},{\"name\":\"ART\",\"dbName\":null},{\"name\":\"SCIENCE\",\"dbName\":null},{\"name\":\"LITERATURE\",\"dbName\":null},{\"name\":\"OTHER\",\"dbName\":null}],\"dbName\":null}},\"types\":{}}")
defineDmmfProperty(exports.Prisma, config.runtimeDataModel)
config.getQueryEngineWasmModule = undefined


const { warnEnvConflicts } = require('./runtime/library')

warnEnvConflicts({
    rootEnvPath: config.relativeEnvPaths.rootEnvPath && path.resolve(config.dirname, config.relativeEnvPaths.rootEnvPath),
    schemaEnvPath: config.relativeEnvPaths.schemaEnvPath && path.resolve(config.dirname, config.relativeEnvPaths.schemaEnvPath)
})

const PrismaClient = getPrismaClient(config)
exports.PrismaClient = PrismaClient
Object.assign(exports, Prisma)

// file annotations for bundling tools to include these files
path.join(__dirname, "libquery_engine-darwin-arm64.dylib.node");
path.join(process.cwd(), "src/generated/pg/libquery_engine-darwin-arm64.dylib.node")
// file annotations for bundling tools to include these files
path.join(__dirname, "schema.prisma");
path.join(process.cwd(), "src/generated/pg/schema.prisma")
