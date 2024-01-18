
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
  "inlineSchema": "Z2VuZXJhdG9yIGNsaWVudCB7CiAgICBwcm92aWRlciA9ICJwcmlzbWEtY2xpZW50LWpzIgogICAgb3V0cHV0ICAgPSAiLi4vc3JjL2dlbmVyYXRlZC9wZyIKfQoKZGF0YXNvdXJjZSBkYiB7CiAgICBwcm92aWRlciA9ICJwb3N0Z3Jlc3FsIgogICAgdXJsICAgICAgPSBlbnYoIlBHX1VSTCIpCn0KCm1vZGVsIFVzZXIgewogICAgaWQgICAgICAgICBTdHJpbmcgICBAaWQgQGRlZmF1bHQodXVpZCgpKQogICAgbmFtZSAgICAgICBTdHJpbmcKICAgIGVtYWlsICAgICAgU3RyaW5nICAgQHVuaXF1ZQogICAgcGFzc3dvcmQgICBTdHJpbmcKICAgIHJvbGUgICAgICAgUm9sZQogICAgY3JlYXRlVGltZSBEYXRlVGltZSBAZGVmYXVsdChub3coKSkKCiAgICBwcm9maWxlICAgUHJvZmlsZT8KICAgIGZyaWVuZHNPZiBGcmllbmRbXSBAcmVsYXRpb24oIkZyaWVuZE9mVXNlciIpCiAgICBmcmllbmRzICAgRnJpZW5kW10gQHJlbGF0aW9uKCJVc2VyRnJpZW5kcyIpCgogICAgZm9sbG93cyAgRm9sbG93W10gQHJlbGF0aW9uKCJVc2VyRm9sbG93cyIpCiAgICBmb2xsb3dlZCBGb2xsb3dbXSBAcmVsYXRpb24oIlVzZXJGb2xsb3dlZCIpCgogICAgLy8gb3JpZ2luUG9zdHMgICAgUG9zdFtdIEByZWxhdGlvbigib3JpZ2luUG9zdHMiKQogICAgLy8gZm9yd2FyZGVkUG9zdHMgUG9zdFtdIEByZWxhdGlvbigiZm9yd2FyZGVkUG9zdHMiKQp9Cgptb2RlbCBQcm9maWxlIHsKICAgIHVzZXIgICAgICAgVXNlciAgICAgQHJlbGF0aW9uKGZpZWxkczogW3VzZXJJZF0sIHJlZmVyZW5jZXM6IFtpZF0pCiAgICB1c2VySWQgICAgIFN0cmluZyAgIEBpZAogICAgYXZhdGFyICAgICBTdHJpbmcKICAgIGJpbyAgICAgICAgU3RyaW5nCiAgICBpbnRlcmVzdHMgICBTdHJpbmdbXQogICAgY3JlYXRlVGltZSBEYXRlVGltZSBAZGVmYXVsdChub3coKSkKICAgIHVwZGF0ZVRpbWUgRGF0ZVRpbWUgQHVwZGF0ZWRBdAp9Cgptb2RlbCBGcmllbmQgewogICAgaWRfZnJvbSBTdHJpbmcKICAgIGlkX3RvICAgU3RyaW5nCiAgICB1c2VyMSAgIFVzZXIgICBAcmVsYXRpb24obmFtZTogIkZyaWVuZE9mVXNlciIsIGZpZWxkczogW2lkX2Zyb21dLCByZWZlcmVuY2VzOiBbaWRdKQogICAgdXNlcjIgICBVc2VyICAgQHJlbGF0aW9uKG5hbWU6ICJVc2VyRnJpZW5kcyIsIGZpZWxkczogW2lkX3RvXSwgcmVmZXJlbmNlczogW2lkXSkKCiAgICBAQGlkKFtpZF9mcm9tLCBpZF90b10pCiAgICBAQHVuaXF1ZShbaWRfZnJvbSwgaWRfdG9dKQp9Cgptb2RlbCBGb2xsb3cgewogICAgCiAgICBpZF9mcm9tIFN0cmluZwogICAgaWRfdG8gICBTdHJpbmcKICAgIHVzZXIxICAgVXNlciAgIEByZWxhdGlvbihuYW1lOiAiVXNlckZvbGxvd3MiLCBmaWVsZHM6IFtpZF9mcm9tXSwgcmVmZXJlbmNlczogW2lkXSkKICAgIHVzZXIyICAgVXNlciAgIEByZWxhdGlvbihuYW1lOiAiVXNlckZvbGxvd2VkIiwgZmllbGRzOiBbaWRfdG9dLCByZWZlcmVuY2VzOiBbaWRdKQoKICAgIEBAaWQoW2lkX2Zyb20sIGlkX3RvXSkKICAgIEBAdW5pcXVlKFtpZF9mcm9tLCBpZF90b10pCn0KCi8vIG1vZGVsIFBvc3QgewovLyAgICAgaWQgICAgICAgU3RyaW5nIEBpZCBAZGVmYXVsdCh1dWlkKCkpCi8vICAgICB0aXRsZSAgICBTdHJpbmcKLy8gICAgIGF1dGhvciAgIFVzZXIgICBAcmVsYXRpb24obmFtZTogIm9yaWdpblBvc3RzIiwgZmllbGRzOiBbYXV0aG9ySWRdLCByZWZlcmVuY2VzOiBbaWRdKQovLyAgICAgYXV0aG9ySWQgU3RyaW5nCgovLyAgICAgcG9zdGVyICAgVXNlciAgIEByZWxhdGlvbihuYW1lOiAiZm9yd2FyZGVkUG9zdHMiLCBmaWVsZHM6IFtwb3N0ZXJJZF0sIHJlZmVyZW5jZXM6IFtpZF0pCi8vICAgICBwb3N0ZXJJZCBTdHJpbmcKLy8gfQoKZW51bSBSb2xlIHsKICAgIENPTU1PTgogICAgQURNSU4KfQoKLy8gbW9kZWwgQ291cnNlIHsKLy8gICAgIGlkICAgU3RyaW5nIEBpZCBAZGVmYXVsdCh1dWlkKCkpCi8vICAgICBuYW1lIFN0cmluZwoKLy8gICAgIGluc3RydWN0b3IgSW5zdHJ1Y3RvciBAcmVsYXRpb24oZmllbGRzOiBbaW5zdElkXSwgcmVmZXJlbmNlczogW2lkXSkKLy8gICAgIGluc3RJZCAgICAgU3RyaW5nCgovLyAgICAgYXNzaWdubWVudHMgQXNzaWdubWVudFtdCgovLyAgICAgY291cnNlSG91cnMgIEludAovLyAgICAgY291cnNlSW50cm8gU3RyaW5nPwoKLy8gICAgIHN0dWRlbnRzIFN0dWRlbnRbXQoKLy8gICAgIHRpbWVsaW5lIFRpbWVsaW5lPwovLyB9CgovLyBtb2RlbCBJbnN0cnVjdG9yIHsKLy8gICAgIGlkICAgU3RyaW5nIEBpZCBAZGVmYXVsdCh1dWlkKCkpCi8vICAgICBuYW1lIFN0cmluZwoKLy8gICAgIGNvdXJzZXMgQ291cnNlW10KLy8gfQoKLy8gbW9kZWwgQXNzaWdubWVudCB7Ci8vICAgICBudW1iZXIgICBJbnQKLy8gICAgIHRpdGxlICAgIFN0cmluZwovLyAgICAgZGVhZGxpbmUgRGF0ZVRpbWUKCi8vICAgICBjb3Vyc2VJZCBTdHJpbmcKLy8gICAgIGNvdXJzZSAgIENvdXJzZSBAcmVsYXRpb24oZmllbGRzOiBbY291cnNlSWRdLCByZWZlcmVuY2VzOiBbaWRdKQovLyAgICAgbWFyayAgICAgTWFya1tdCgovLyAgICAgQEBpZChbbnVtYmVyLCBjb3Vyc2VJZF0pCi8vIH0KCi8vIG1vZGVsIFN0dWRlbnQgewovLyAgICAgaWQgICAgICAgU3RyaW5nICAgQGlkIEBkZWZhdWx0KHV1aWQoKSkKLy8gICAgIG5hbWUgICAgIFN0cmluZwovLyAgICAgcGFzc3dvcmQgU3RyaW5nCi8vICAgICBlbWFpbCAgICBTdHJpbmc/Ci8vICAgICBjb3Vyc2VzICBDb3Vyc2VbXQovLyAgICAgbWFya3MgICAgTWFya1tdCi8vIH0KCi8vIG1vZGVsIE1hcmsgewovLyAgICAgYXNzaWdubWVudCAgICAgICBBc3NpZ25tZW50IEByZWxhdGlvbihmaWVsZHM6IFthc3NpZ25tZW50TnVtYmVyLCBjb3Vyc2VJZF0sIHJlZmVyZW5jZXM6IFtudW1iZXIsIGNvdXJzZUlkXSkKLy8gICAgIGFzc2lnbm1lbnROdW1iZXIgSW50Ci8vICAgICBjb3Vyc2VJZCAgICAgICAgIFN0cmluZwoKLy8gICAgIHN0dWRlbnQgICBTdHVkZW50IEByZWxhdGlvbihmaWVsZHM6IFtzdHVkZW50SWRdLCByZWZlcmVuY2VzOiBbaWRdKQovLyAgICAgc3R1ZGVudElkIFN0cmluZwoKLy8gICAgIGNvbnRlbnQgU3RyaW5nCi8vICAgICBzY29yZSAgIEludD8KCi8vICAgICBAQGlkKFtjb3Vyc2VJZCwgYXNzaWdubWVudE51bWJlciwgc3R1ZGVudElkXSkKLy8gfQoKLy8gbW9kZWwgVGltZWxpbmUgewovLyAgICAgY291cnNlICAgQ291cnNlIEByZWxhdGlvbihmaWVsZHM6IFtjb3Vyc2VJZF0sIHJlZmVyZW5jZXM6IFtpZF0pCi8vICAgICBjb3Vyc2VJZCBTdHJpbmcgQGlkCgovLyAgICAgY3JlYXRlVGltZSBEYXRlVGltZSAgQGRlZmF1bHQobm93KCkpCi8vICAgICBlbmRUaW1lICAgIERhdGVUaW1lCi8vICAgICBleGFtVGltZSAgIERhdGVUaW1lPwovLyB9Cg==",
  "inlineSchemaHash": "26d10e5b6036c08ac93c2e3c45be701e886781937562deb835a769319d68c4a6"
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

config.runtimeDataModel = JSON.parse("{\"models\":{\"User\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"uuid\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"email\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"password\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"role\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Role\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createTime\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"profile\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Profile\",\"relationName\":\"ProfileToUser\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"friendsOf\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Friend\",\"relationName\":\"FriendOfUser\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"friends\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Friend\",\"relationName\":\"UserFriends\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"follows\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Follow\",\"relationName\":\"UserFollows\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"followed\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Follow\",\"relationName\":\"UserFollowed\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Profile\":{\"dbName\":null,\"fields\":[{\"name\":\"user\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"User\",\"relationName\":\"ProfileToUser\",\"relationFromFields\":[\"userId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"userId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"avatar\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"bio\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"interests\",\"kind\":\"scalar\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createTime\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updateTime\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":true}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Friend\":{\"dbName\":null,\"fields\":[{\"name\":\"id_from\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"id_to\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"user1\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"User\",\"relationName\":\"FriendOfUser\",\"relationFromFields\":[\"id_from\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"user2\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"User\",\"relationName\":\"UserFriends\",\"relationFromFields\":[\"id_to\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":{\"name\":null,\"fields\":[\"id_from\",\"id_to\"]},\"uniqueFields\":[[\"id_from\",\"id_to\"]],\"uniqueIndexes\":[{\"name\":null,\"fields\":[\"id_from\",\"id_to\"]}],\"isGenerated\":false},\"Follow\":{\"dbName\":null,\"fields\":[{\"name\":\"id_from\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"id_to\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"user1\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"User\",\"relationName\":\"UserFollows\",\"relationFromFields\":[\"id_from\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"user2\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"User\",\"relationName\":\"UserFollowed\",\"relationFromFields\":[\"id_to\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":{\"name\":null,\"fields\":[\"id_from\",\"id_to\"]},\"uniqueFields\":[[\"id_from\",\"id_to\"]],\"uniqueIndexes\":[{\"name\":null,\"fields\":[\"id_from\",\"id_to\"]}],\"isGenerated\":false}},\"enums\":{\"Role\":{\"values\":[{\"name\":\"COMMON\",\"dbName\":null},{\"name\":\"ADMIN\",\"dbName\":null}],\"dbName\":null}},\"types\":{}}")
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
path.join(__dirname, "libquery_engine-darwin.dylib.node");
path.join(process.cwd(), "src/generated/pg/libquery_engine-darwin.dylib.node")
// file annotations for bundling tools to include these files
path.join(__dirname, "schema.prisma");
path.join(process.cwd(), "src/generated/pg/schema.prisma")
