import { Module } from '@nestjs/common';
import { RedisService } from './redis.service';
import { DbPostService } from '../db/post/db_post.service';
import { ConnectionService } from '../db/connection/connection.service';

@Module({
  
  providers: [RedisService, DbPostService, ConnectionService],
  exports:[RedisService]
})
export class RedisModule {
    
}
