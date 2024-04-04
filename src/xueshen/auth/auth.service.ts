import { Injectable, Logger } from '@nestjs/common';
import LoginDto from '../dto/loginDto';

import { User } from '@prisma/pg';
import * as bcrypt from 'bcrypt';
import {CreateUserDto} from '../dto/createUserDto';
import { DbUserService } from '../db/user/db_user.service';


@Injectable()
export class AuthService {
    logger: Logger = new Logger('AuthService');
    constructor(private dbUserService: DbUserService) { }



    async login(loginDto: LoginDto): Promise<User|null> {

        this.logger.verbose("Enter login")
        this.logger.log(`login with identity ${loginDto} ${loginDto.identity}`);



        let user: User |null= null;
        switch (loginDto.identityType) {
            case "email":
             
                user = await this.dbUserService.query_user_by_email(loginDto.identity);
                
                break;
            case "username":
                user = await this.dbUserService.query_user_by_username(loginDto.identity);
                break;
            default:
                throw "Not Possible"
        }
  
        if(!user){
            return null;
        }
      

        if (user.password === loginDto.password) {
            this.logger.verbose(`user exists: ${user.email}`);


            this.logger.verbose("Exit login")
            return user;
        } else {
            this.logger.log(`user not found: ${loginDto.identity}`);
            this.logger.verbose("Exit login")
            return null;

        }
    }

    async register(createUserDto: CreateUserDto): Promise<boolean> {
        this.logger.verbose("Enter register")
        const user: User | undefined = await this.dbUserService.query_user_by_email(createUserDto.email);
        if (user) {
            this.logger.log(`user exists: ${user.email}`);
            this.logger.verbose("Exit register")
            return false;
        } else {
            this.logger.verbose(`creating user: ${createUserDto.email}`);

           

            const res = await this.dbUserService.createUser(createUserDto);
            this.logger.log(`user created: ${createUserDto.email}`);
            this.logger.verbose("Exit register")

            return res ? true : false;

        }
    }


   
}
