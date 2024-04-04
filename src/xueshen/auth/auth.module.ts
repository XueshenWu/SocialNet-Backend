import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { DbModule } from '../db/db.module';
import { DbUserService } from '../db/user/db_user.service';


@Module({
    imports: [DbModule],
    providers: [AuthService, DbUserService],
    controllers: [AuthController]
})
export class AuthModule { }
