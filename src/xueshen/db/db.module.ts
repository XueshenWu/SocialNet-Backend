import { Module } from '@nestjs/common';

import { ConnectionService } from './connection/connection.service';
import { DbPostService } from './post/db_post.service';
import { DbUserService } from './user/db_user.service';

@Module({
  providers: [ConnectionService, DbPostService, DbUserService],
  exports: [ConnectionService, DbPostService, DbUserService],
})
export class DbModule {
}

