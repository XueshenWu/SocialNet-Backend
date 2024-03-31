import { Injectable } from '@nestjs/common';
import { PrismaClient as MongoClient, Prisma as MongoPrisma, Post } from '@prisma/mongo';
import { ConnectionService } from 'src/xueshen/db/connection/connection.service';
import { Logger } from 'winston';

@Injectable()
export class SearchService {
  private readonly logger = new Logger();

  constructor(private readonly connectionService: ConnectionService) { }

  //const db = this.connectionService.mongoClient.post

  async searchPosts(query: string):Promise<any> {
    try {
      const response: any = await this.connectionService.mongoClient.$runCommandRaw({
        aggregate: 'post',
        pipeline: [
          {
            $search: {
              text: {
                query: query,
                path: ['title', 'content']
              },
            },
          },
        ],
        cursor: {},
      });

      const posts = response?.cursor?.firstBatch || [];

      return posts;
    
      //console.log(JSON.stringify(response, null, 2));
    } catch (e) {
      console.error(e);
      throw e; // Optionally re-throw the error
    }
  }

}
