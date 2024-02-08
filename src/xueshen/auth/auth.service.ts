import { Injectable, Logger } from '@nestjs/common';
import LoginDto from '../dto/loginDto';
import { DbService } from '../db/db.service';
import { User } from '@prisma/pg';
import * as bcrypt from 'bcrypt';
import createUserDto from '../dto/createUserDto';

@Injectable()
export class AuthService {
    logger: Logger = new Logger('AuthService');
    constructor(private dbService: DbService) { }



    async login(longinDto: LoginDto): Promise<boolean> {

        this.logger.verbose("Enter login")
        this.logger.log(`login: ${longinDto.email}`);

        const user: User | undefined = await this.dbService.query_user_by_email(longinDto.email);

        if (user && user.password === longinDto.password) {
            this.logger.verbose(`user exists: ${user.email}`);
           
            
            this.logger.verbose("Exit login")
            return true;
        } else {
            this.logger.log(`user not found: ${longinDto.email}`);
            this.logger.verbose("Exit login")
            return false;

        }
    }

    async register(createUserDto: createUserDto): Promise<boolean> {
        this.logger.verbose("Enter register")
        const user: User | undefined = await this.dbService.query_user_by_email(createUserDto.email);
        if (user) {
            this.logger.log(`user exists: ${user.email}`);
            this.logger.verbose("Exit register")
            return false;
        } else {
            this.logger.verbose(`creating user: ${createUserDto.email}`);

            // TODO: hash password
            // createUserDto.password = await new Promise((resolve)=>bcrypt.hash(createUserDto.password, "$2b$24$h/zcUE26srKAcEPqa4pFd.", (err, hash)=>resolve(hash)))
           
            const res = await this.dbService.createUser(createUserDto);
            this.logger.log(`user created: ${createUserDto.email}`);
            this.logger.verbose("Exit register")
           
            return res? true: false;

        }
    }
}
