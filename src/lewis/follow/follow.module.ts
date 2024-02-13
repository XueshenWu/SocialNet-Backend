import { Module } from '@nestjs/common';
import { FollowController } from './follow.controller';
import { FollowService } from './follow.service';
import { DbService } from '../../xueshen/db/db.service';
import { DbPostService } from '../../xueshen/db/db_post.service';
import { DbUserService } from '../../xueshen/db/db_user.service';
import { ConnectionService } from '../../xueshen/db/connection.service';

@Module({
  controllers: [FollowController],
  providers: [FollowService, DbService, DbPostService, DbUserService, ConnectionService],
})
export class FollowModule {}
