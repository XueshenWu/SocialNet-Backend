import { Injectable } from '@nestjs/common';
import { PrismaClient as PgClient }  from '../generated/pg/index'
import { PrismaClient as MongoClient} from '../generated/mongo';

@Injectable()
export class DbService {
    private readonly pgClient = new PgClient();
    private readonly mongoClient = new MongoClient();

}
