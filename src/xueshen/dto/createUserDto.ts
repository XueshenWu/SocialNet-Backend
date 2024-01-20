import { IsString, IsEmail, IsEnum, IsNotEmpty } from 'class-validator';


export default class createUserDto {

    @IsString()
    @IsNotEmpty()
    name: string;

    @IsString()
    @IsNotEmpty()
    password: string;

    @IsEmail()
    @IsNotEmpty()
    email: string;

    @IsEnum(["ADMIN", "COMMON"])
    @IsNotEmpty()
    role: "ADMIN" | "COMMON";


}