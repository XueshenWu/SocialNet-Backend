import { Global, Module } from '@nestjs/common';
import { DbService } from './db.service';
import { UserService } from './user/user.service';

@Global()
@Module({
<<<<<<< HEAD
  providers: [DbService],
  exports:[DbService]
=======
  providers: [DbService, UserService]
>>>>>>> origin/xueshen
})
export class DbModule {
}
