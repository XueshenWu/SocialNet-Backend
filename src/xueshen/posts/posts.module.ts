import { Module } from '@nestjs/common';
import { PostsService } from './posts.service';
import { PostsController } from './posts.controller';
import { DbService } from '../db/db.service';
import { DbPostService } from '../db/db_post.service';
import { DbUserService } from '../db/db_user.service';
import { ConnectionService } from '../db/connection.service';

@Module({
  providers: [PostsService, DbService, DbPostService, DbUserService, ConnectionService],
  controllers: [PostsController],
 
})
export class PostsModule {}
