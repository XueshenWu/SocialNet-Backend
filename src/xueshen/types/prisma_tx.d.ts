import type { PrismaClient as PgClient } from "@prisma/pg";
import type { PrismaClient as MongoClient } from "@prisma/mongo";


type PrismaTransactionClient_pg = Omit<PgClient, "$connect" | "$disconnect" | "$on" | "$transaction" | "$use">
type PrismaTransactionClient_mongo = Omit<MongoClient, "$connect" | "$disconnect" | "$on" | "$transaction" | "$use">

type PTX<T extends "pg" | "mongo"> = T extends "pg" ? PrismaTransactionClient_pg : PrismaTransactionClient_mongo;

export type {
    PTX
}