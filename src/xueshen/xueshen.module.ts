import { Module } from '@nestjs/common';
import { DbModule } from './db/db.module';
import { AuthModule } from './auth/auth.module';
import { FserverModule } from './fserver/fserver.module';

@Module({
    imports: [DbModule, AuthModule, FserverModule],
    exports: [DbModule, AuthModule],
})
export class XueshenModule {}
