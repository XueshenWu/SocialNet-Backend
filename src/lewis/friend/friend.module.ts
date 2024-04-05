import { Module } from '@nestjs/common';
import { FriendService } from './friend.service';
import { FriendController } from './friend.controller';
import { DbUserService } from '../../xueshen/db/user/db_user.service';
import { ConnectionService } from '../../xueshen/db/connection/connection.service';

@Module({
  providers: [FriendService, DbUserService, ConnectionService],
  controllers: [FriendController]
})
export class FriendModule {}
