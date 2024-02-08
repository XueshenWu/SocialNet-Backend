import { Injectable } from "@nestjs/common";
import { PrismaClient as PgClient, Prisma as PgPrisma, User } from '@prisma/pg'
import { PrismaClient as MongoClient, Prisma as MongoPrisma, Post } from '@prisma/mongo';

@Injectable()
export class ConnectionService {
    readonly pgClient = new PgClient();
    readonly mongoClient = new MongoClient();
}