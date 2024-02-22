import { Module } from '@nestjs/common';
import { FollowController } from './follow.controller';
import { FollowService } from './follow.service';
import { DbUserService } from '../../xueshen/db/user/db_user.service';
import { ConnectionService } from '../../xueshen/db/connection/connection.service';

@Module({
  controllers: [FollowController],
  providers: [FollowService, DbUserService, ConnectionService],
})
export class FollowModule {}
