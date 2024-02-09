import { Module } from '@nestjs/common';
import { DbService } from './db.service';
import { ConnectionService } from './connection.service';
import { DbPostService } from './db_post.service';
import { DbUserService } from './db_user.service';
@Module({
  providers: [DbService, ConnectionService, DbPostService, DbUserService],
  exports: [DbService, ConnectionService, DbPostService, DbUserService]
})
export class DbModule {
}

