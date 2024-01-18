
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
exports.Prisma.UserScalarFieldEnum = {
  id: 'id'
};

exports.Prisma.PostScalarFieldEnum = {
  id: 'id',
  title: 'title',
  content: 'content',
  media: 'media',
  ownerId: 'ownerId',
  authorId: 'authorId'
};

exports.Prisma.LikeTableScalarFieldEnum = {
  id: 'id',
  postId: 'postId',
  userId: 'userId'
};

exports.Prisma.ReplyScalarFieldEnum = {
  id: 'id',
  text: 'text',
  fromId: 'fromId',
  toId: 'toId',
  postId: 'postId'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.QueryMode = {
  default: 'default',
  insensitive: 'insensitive'
};


exports.Prisma.ModelName = {
  User: 'User',
  Post: 'Post',
  LikeTable: 'LikeTable',
  Reply: 'Reply'
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
      "value": "/Users/wu/t26back/src/generated/mongo",
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
  "activeProvider": "mongodb",
  "inlineDatasources": {
    "db": {
      "url": {
        "fromEnvVar": "Mongo_URL",
        "value": null
      }
    }
  },
  "inlineSchema": "Ly8gVGhpcyBpcyB5b3VyIFByaXNtYSBzY2hlbWEgZmlsZSwKLy8gbGVhcm4gbW9yZSBhYm91dCBpdCBpbiB0aGUgZG9jczogaHR0cHM6Ly9wcmlzLmx5L2QvcHJpc21hLXNjaGVtYQoKZGF0YXNvdXJjZSBkYiB7CiAgICBwcm92aWRlciA9ICJtb25nb2RiIgogICAgdXJsICAgICAgPSBlbnYoIk1vbmdvX1VSTCIpCn0KCmdlbmVyYXRvciBjbGllbnQgewogICAgcHJvdmlkZXIgPSAicHJpc21hLWNsaWVudC1qcyIKICAgIG91dHB1dCAgID0gIi4uL3NyYy9nZW5lcmF0ZWQvbW9uZ28iCn0KCm1vZGVsIFVzZXIgewogICAgaWQgU3RyaW5nIEBpZCBAbWFwKCJfaWQiKSBAZGIuU3RyaW5nCgogICAgcG9zdHMgICAgICAgICBQb3N0W10gQHJlbGF0aW9uKCJwb3N0cyIpCiAgICBvcmlnaW5hbFBvc3RzIFBvc3RbXSBAcmVsYXRpb24oIm9yaWdpbmFsUG9zdHMiKQoKICAgIHJlcGxpZXNGcm9tIFJlcGx5W10gQHJlbGF0aW9uKCJyZXBsaWVzRnJvbSIpCiAgICByZXBsaWVzVG8gICBSZXBseVtdIEByZWxhdGlvbigicmVwbGllc1RvIikKCiAgIAogICAgTGlrZVRhYmxlIExpa2VUYWJsZVtdCn0KCm1vZGVsIFBvc3QgewogICAgaWQgICAgU3RyaW5nIEBpZCBAZGVmYXVsdChhdXRvKCkpIEBtYXAoIl9pZCIpIEBkYi5PYmplY3RJZAogICAgdGl0bGUgU3RyaW5nCiAgICBjb250ZW50ICBTdHJpbmcKICAgIG1lZGlhIFN0cmluZz8KCiAgICBvd25lciAgIFVzZXIgICBAcmVsYXRpb24obmFtZTogIm9yaWdpbmFsUG9zdHMiLCBmaWVsZHM6IFtvd25lcklkXSwgcmVmZXJlbmNlczogW2lkXSkKICAgIG93bmVySWQgU3RyaW5nIEBkYi5TdHJpbmcKCiAgICBhdXRob3IgICBVc2VyICAgQHJlbGF0aW9uKG5hbWU6ICJwb3N0cyIsIGZpZWxkczogW2F1dGhvcklkXSwgcmVmZXJlbmNlczogW2lkXSkKICAgIGF1dGhvcklkIFN0cmluZyBAZGIuU3RyaW5nCgoKICAgIHJlcGxpZXMgICBSZXBseVtdCiAgICBMaWtlVGFibGUgTGlrZVRhYmxlW10KfQoKbW9kZWwgTGlrZVRhYmxlIHsKICAgIGlkIFN0cmluZyBAaWQgQGRlZmF1bHQoYXV0bygpKSBAbWFwKCJfaWQiKSBAZGIuT2JqZWN0SWQKCiAgICBwb3N0ICAgUG9zdCAgIEByZWxhdGlvbihmaWVsZHM6IFtwb3N0SWRdLCByZWZlcmVuY2VzOiBbaWRdKQogICAgcG9zdElkIFN0cmluZyBAZGIuT2JqZWN0SWQKCiAgICB1c2VyICAgVXNlciAgIEByZWxhdGlvbihmaWVsZHM6IFt1c2VySWRdLCByZWZlcmVuY2VzOiBbaWRdKQogICAgdXNlcklkIFN0cmluZyBAZGIuU3RyaW5nCgogICAgQEB1bmlxdWUoW3Bvc3RJZCwgdXNlcklkXSkKICAgIAp9Cgptb2RlbCBSZXBseSB7CiAgICAKICAgIGlkIFN0cmluZyBAaWQgQGRlZmF1bHQoYXV0bygpKSBAbWFwKCJfaWQiKSBAZGIuT2JqZWN0SWQKCiAgICB0ZXh0IFN0cmluZwoKCiAgICBmcm9tICAgVXNlciAgIEByZWxhdGlvbihuYW1lOiAicmVwbGllc0Zyb20iLCBmaWVsZHM6IFtmcm9tSWRdLCByZWZlcmVuY2VzOiBbaWRdKQogICAgZnJvbUlkIFN0cmluZyBAZGIuU3RyaW5nCgogICAgdG8gICBVc2VyICAgQHJlbGF0aW9uKG5hbWU6ICJyZXBsaWVzVG8iLCBmaWVsZHM6IFt0b0lkXSwgcmVmZXJlbmNlczogW2lkXSkKICAgIHRvSWQgU3RyaW5nIEBkYi5TdHJpbmcKCiAgICBwb3N0ICAgUG9zdCAgIEByZWxhdGlvbihmaWVsZHM6IFtwb3N0SWRdLCByZWZlcmVuY2VzOiBbaWRdKQogICAgcG9zdElkIFN0cmluZyBAZGIuT2JqZWN0SWQKfQoKLy8gbW9kZWwgUG9zdCB7Ci8vICAgaWQgICAgICAgU3RyaW5nICAgIEBpZCBAZGVmYXVsdChhdXRvKCkpIEBtYXAoIl9pZCIpIEBkYi5PYmplY3RJZAovLyAgIHNsdWcgICAgIFN0cmluZyAgICBAdW5pcXVlCi8vICAgdGl0bGUgICAgU3RyaW5nCi8vICAgYm9keSAgICAgU3RyaW5nCi8vICAgYXV0aG9yICAgVXNlciAgICAgIEByZWxhdGlvbihmaWVsZHM6IFthdXRob3JJZF0sIHJlZmVyZW5jZXM6IFtpZF0pCi8vICAgYXV0aG9ySWQgU3RyaW5nICAgIEBkYi5PYmplY3RJZAovLyAgIGNvbW1lbnRzIENvbW1lbnRbXQovLyB9CgovLyBtb2RlbCBVc2VyIHsKLy8gICBpZCAgICAgIFN0cmluZyAgIEBpZCBAZGVmYXVsdChhdXRvKCkpIEBtYXAoIl9pZCIpIEBkYi5PYmplY3RJZAovLyAgIGVtYWlsICAgU3RyaW5nICAgQHVuaXF1ZQovLyAgIG5hbWUgICAgU3RyaW5nPwovLyAgIGFkZHJlc3MgQWRkcmVzcz8KLy8gICBwb3N0cyAgIFBvc3RbXQovLyB9CgovLyBtb2RlbCBDb21tZW50IHsKLy8gICBpZCAgICAgIFN0cmluZyBAaWQgQGRlZmF1bHQoYXV0bygpKSBAbWFwKCJfaWQiKSBAZGIuT2JqZWN0SWQKLy8gICBjb21tZW50IFN0cmluZwovLyAgIHBvc3QgICAgUG9zdCAgIEByZWxhdGlvbihmaWVsZHM6IFtwb3N0SWRdLCByZWZlcmVuY2VzOiBbaWRdKQovLyAgIHBvc3RJZCAgU3RyaW5nIEBkYi5PYmplY3RJZAovLyB9CgovLyAvLyBBZGRyZXNzIGlzIGFuIGVtYmVkZGVkIGRvY3VtZW50Ci8vIHR5cGUgQWRkcmVzcyB7Ci8vICAgc3RyZWV0IFN0cmluZwovLyAgIGNpdHkgICBTdHJpbmcKLy8gICBzdGF0ZSAgU3RyaW5nCi8vICAgemlwICAgIFN0cmluZwovLyB9Cg==",
  "inlineSchemaHash": "fda0b3cbbf44282289c9b2ee2fb4fc8d6ea98137748b8bc5e1e6dc5ad996a725"
}

const fs = require('fs')

config.dirname = __dirname
if (!fs.existsSync(path.join(__dirname, 'schema.prisma'))) {
  const alternativePaths = [
    "src/generated/mongo",
    "generated/mongo",
  ]
  
  const alternativePath = alternativePaths.find((altPath) => {
    return fs.existsSync(path.join(process.cwd(), altPath, 'schema.prisma'))
  }) ?? alternativePaths[0]

  config.dirname = path.join(process.cwd(), alternativePath)
  config.isBundled = true
}

config.runtimeDataModel = JSON.parse("{\"models\":{\"User\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"dbName\":\"_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"posts\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Post\",\"relationName\":\"posts\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"originalPosts\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Post\",\"relationName\":\"originalPosts\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"repliesFrom\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Reply\",\"relationName\":\"repliesFrom\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"repliesTo\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Reply\",\"relationName\":\"repliesTo\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"LikeTable\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"LikeTable\",\"relationName\":\"LikeTableToUser\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Post\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"dbName\":\"_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"auto\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"title\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"content\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"media\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"owner\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"User\",\"relationName\":\"originalPosts\",\"relationFromFields\":[\"ownerId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ownerId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"author\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"User\",\"relationName\":\"posts\",\"relationFromFields\":[\"authorId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"authorId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"replies\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Reply\",\"relationName\":\"PostToReply\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"LikeTable\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"LikeTable\",\"relationName\":\"LikeTableToPost\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"LikeTable\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"dbName\":\"_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"auto\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"post\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Post\",\"relationName\":\"LikeTableToPost\",\"relationFromFields\":[\"postId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"postId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"user\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"User\",\"relationName\":\"LikeTableToUser\",\"relationFromFields\":[\"userId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"userId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[[\"postId\",\"userId\"]],\"uniqueIndexes\":[{\"name\":null,\"fields\":[\"postId\",\"userId\"]}],\"isGenerated\":false},\"Reply\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"dbName\":\"_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"auto\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"text\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"from\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"User\",\"relationName\":\"repliesFrom\",\"relationFromFields\":[\"fromId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"fromId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"to\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"User\",\"relationName\":\"repliesTo\",\"relationFromFields\":[\"toId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"toId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"post\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Post\",\"relationName\":\"PostToReply\",\"relationFromFields\":[\"postId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"postId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false}},\"enums\":{},\"types\":{}}")
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
path.join(process.cwd(), "src/generated/mongo/libquery_engine-darwin.dylib.node")
// file annotations for bundling tools to include these files
path.join(__dirname, "schema.prisma");
path.join(process.cwd(), "src/generated/mongo/schema.prisma")
