import { IsString, IsNotEmpty, IsEnum } from 'class-validator';


export default class LoginDto {

    @IsString()
    @IsNotEmpty()
    identity: string;


 

    @IsString()
    @IsNotEmpty()
    password: string;

    @IsString()
    identityType: "email"|"username"
}