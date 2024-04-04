import { Module } from '@nestjs/common';
import { PostsService } from './posts.service';
import { PostsController } from './posts.controller';

import { DbPostService } from '../db/post/db_post.service';
import { DbUserService } from '../db/user/db_user.service';
import { ConnectionService } from '../db/connection/connection.service';
import { RedisService } from '../redis/redis.service';

@Module({
  providers: [PostsService,  DbPostService, DbUserService, ConnectionService, RedisService],
  controllers: [PostsController],
 
})
export class PostsModule {}
