import { Global, Module } from '@nestjs/common';
import { DbService } from './db.service';
import { UserService } from './user/user.service';

@Global()
@Module({
  providers: [DbService, UserService]
})
export class DbModule {
}
