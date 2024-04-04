import { IsString, IsEmail, IsEnum, IsNotEmpty, isString } from 'class-validator';
import { User } from "@prisma/pg"
import NullableDto from './nullableDto';

export class CreateUserDto extends NullableDto{

 
    name?: undefined

    @IsString()
    @IsNotEmpty()
    password: string;

    @IsEmail()
    @IsNotEmpty()
    email: string;


    @IsNotEmpty()
    role: User["role"];


  
    gender?:string

    constructor(name: string, password: string, email: string, role="COMMON" as User["role"]) {
        super();
       
        this.password = password;
        this.email = email;
        this.role = role;
    }

}

