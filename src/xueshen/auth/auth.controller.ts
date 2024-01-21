import { Body, Controller, Post } from '@nestjs/common';
import LoginDto from '../dto/loginDto';
import createUserDto from '../dto/createUserDto';
import { AuthService } from './auth.service';
import { Logger } from '@nestjs/common';
import type { UniResponse, ResponseStatus } from '../types/response';


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
            this.logger.verbose("Exit login")
            return {
                status: "SUCCESS",
                data: retval
            }
        } else {
            this.logger.verbose("Exit login")
            return {
                status: "FAIL",
                data: retval
            }
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
            return {
                status: "FAIL",
                data: retval
            }
        }

    }
}
