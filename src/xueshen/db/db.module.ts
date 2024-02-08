import { Module } from '@nestjs/common';
import { DbService } from './db.service';
import { UserService } from './user/user.service';

@Module({
  providers: [DbService, UserService]
})
export class DbModule {
}
