import { Injectable, Logger } from '@nestjs/common';
import LoginDto from '../dto/loginDto';
import { DbService } from '../db/db.service';
import { User } from '@prisma/pg';
import * as jwt from 'jsonwebtoken';
import * as bcrypt from 'bcrypt';
import createUserDto from '../dto/createUserDto';

@Injectable()
export class AuthService {
    logger: Logger = new Logger('AuthService');
    constructor(private dbService: DbService) { }



    async login(longinDto: LoginDto): Promise<string | undefined> {

        this.logger.verbose("Enter login")
        this.logger.log(`login: ${longinDto.email}`);

        const user: User | undefined = await this.dbService.query_user_by_email(longinDto.email);

        if (user && user.password === longinDto.password) {
            this.logger.verbose(`user exists: ${user.email}`);
            const token = jwt.sign(
                user.id,
                process.env.JWT_SECRET,
                {
                    expiresIn: '7d'
                }
            )
            this.logger.verbose(`token: ${token}`);
            this.logger.verbose("Exit login")
            return token;
        } else {
            this.logger.log(`user not found: ${longinDto.email}`);
            this.logger.verbose("Exit login")
            return undefined;

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
            createUserDto.password = await bcrypt.hash(createUserDto.password, process.env.PSWD_SALT);

            const res = await this.dbService.createUser(createUserDto);
            this.logger.log(`user created: ${createUserDto.email}`);
            this.logger.verbose("Exit register")

            return res? true: false;

        }
    }
}
