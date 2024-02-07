import { Module } from '@nestjs/common';
import { FollowController } from './follow.controller';
import { FollowService } from './follow.service';
import { DbService } from '../../xueshen/db/db.service';

@Module({
  controllers: [FollowController],
  providers: [FollowService, DbService],
})
export class FollowModule {}
