import { IsString, IsEmail, IsEnum, IsNotEmpty, isString } from 'class-validator';
import { User } from "@prisma/pg"

export default class createUserDto {

    @IsString()
    name?: string;

    @IsString()
    @IsNotEmpty()
    password: string;

    @IsEmail()
    @IsNotEmpty()
    email: string;


    @IsNotEmpty()
    role: User["role"];


    @IsString()
    gender?:string

}