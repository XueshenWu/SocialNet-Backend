import { Module } from '@nestjs/common';
import { FollowModule } from './follow/follow.module';
import { FriendModule } from './friend/friend.module';

@Module({
  imports: [FollowModule, FriendModule],
})
export class LewisModule {}
