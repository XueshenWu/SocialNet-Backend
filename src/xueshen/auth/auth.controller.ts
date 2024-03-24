import { Body, Controller, HttpException, HttpStatus, Post } from '@nestjs/common';
import LoginDto from '../dto/loginDto';
import {CreateUserDto} from '../dto/createUserDto';
import { AuthService } from './auth.service';
import { Logger } from '@nestjs/common';
import type { UniResponse, ResponseStatus } from '../types/response';



@Controller('auth')
export class AuthController {

    logger = new Logger('AuthController');

    constructor(private readonly authService: AuthService) { }
         
    @Post('login')
    async login(@Body() loginDto: LoginDto): Promise<UniResponse<string | undefined>> {
        this.logger.verbose("Enter login")
        this.logger.warn("loginDto: ", JSON.stringify(loginDto))
        const retval = await this.authService.login(loginDto);
        this.logger.log(`login: ${loginDto.identity}, status: ${retval ? "SUCCESS" : "FAIL"}`);

        if (retval) {
            this.logger.verbose("Exit login: SUCCESS")
            return {
                status: "SUCCESS",
             
            }
        } else {
            this.logger.verbose("Exit login: FAIL")
            
            throw new HttpException(
                "Unauthorized",
                HttpStatus.UNAUTHORIZED
            )
        }

    }


    @Post('register')
    async register(@Body() createUserDto: CreateUserDto): Promise<UniResponse<boolean>> {
        this.logger.verbose("Enter register")
        const retval = await this.authService.register(createUserDto);
        this.logger.log(`register: ${createUserDto.email}, status: ${retval ? "SUCCESS" : "FAIL"}`);
        if (retval) {
            this.logger.verbose("Exit register")
            return {
                status: "SUCCESS",
                data: retval
            }
        } else {
            this.logger.verbose("Exit register")
            // return {
            //     status: "FAIL",
            //     data: retval
            // }
            throw new HttpException(
                "Duplicate email",
                HttpStatus.BAD_REQUEST
            )
        }

    }
}
