import { Module } from '@nestjs/common';
import { DbModule } from './db/db.module';
import { DbService } from './db/db.service';
import { AuthModule } from './auth/auth.module';

@Module({
    imports: [DbModule, AuthModule],
    exports: [DbService],
})
export class XueshenModule {}
