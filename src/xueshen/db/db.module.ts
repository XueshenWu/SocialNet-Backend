import { Module } from '@nestjs/common';
import { DbService } from './db.service';
import { ConnectionService } from './connection.service';
import { DbPostService } from './db_post.service';
@Module({
  providers: [DbService, ConnectionService, DbPostService],
  exports: [DbService]
})
export class DbModule {
}

