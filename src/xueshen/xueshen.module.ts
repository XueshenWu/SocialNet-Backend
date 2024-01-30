import { Module } from '@nestjs/common';
import { DbModule } from './db/db.module';
import { AuthModule } from './auth/auth.module';


@Module({
    imports: [DbModule, AuthModule],
    exports: [DbModule, AuthModule],
})
export class XueshenModule {}
