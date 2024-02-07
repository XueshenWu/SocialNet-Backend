import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { ProfileModule } from './profile/profile.module';

@Module({
  imports: [UsersModule, ProfileModule],
  exports: [UsersModule, ProfileModule],
})
export class ByanModule {}

