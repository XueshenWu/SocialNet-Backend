import { Body, Controller, HttpException, HttpStatus, Post } from '@nestjs/common';
import LoginDto from '../dto/loginDto';
import createUserDto from '../dto/createUserDto';
import { AuthService } from './auth.service';
import { Logger } from '@nestjs/common';
import type { UniResponse, ResponseStatus } from '../types/response';
import { HttpErrorByCode } from '@nestjs/common/utils/http-error-by-code.util';


@Controller('auth')
export class AuthController {

    logger = new Logger('AuthController');

    constructor(private readonly authService: AuthService) { }

    @Post('login')
    async login(@Body() longinDto: LoginDto): Promise<UniResponse<string | undefined>> {
        this.logger.verbose("Enter login")
        const retval = await this.authService.login(longinDto);
        this.logger.log(`login: ${longinDto.email}, status: ${retval ? "SUCCESS" : "FAIL"}`);

        if (retval) {
            this.logger.verbose("Exit login: SUCCESS")
            return {
                status: "SUCCESS",
             
            }
        } else {
            this.logger.verbose("Exit login: FAIL")
            // return {
            //     status: "FAIL",
            //     data: retval
            // }
            throw new HttpException(
                "Unauthorized",
                HttpStatus.UNAUTHORIZED
            )
        }

    }


    @Post('register')
    async register(@Body() createUserDto: createUserDto): Promise<UniResponse<boolean>> {
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
