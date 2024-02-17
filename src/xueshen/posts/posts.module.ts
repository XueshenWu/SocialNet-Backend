import { Module } from '@nestjs/common';
import { PostsService } from './posts.service';
import { PostsController } from './posts.controller';

import { DbPostService } from '../db/post/db_post.service';
import { DbUserService } from '../db/user/db_user.service';
import { ConnectionService } from '../db/connection/connection.service';

@Module({
  providers: [PostsService,  DbPostService, DbUserService, ConnectionService],
  controllers: [PostsController],
 
})
export class PostsModule {}
