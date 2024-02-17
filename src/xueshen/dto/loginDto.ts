import { IsString, IsNotEmpty } from 'class-validator';


export default class LoginDto {

    @IsString()
    @IsNotEmpty()
    identity: string;


 

    @IsString()
    @IsNotEmpty()
    password: string;


    identityType: "email"|"username"
}