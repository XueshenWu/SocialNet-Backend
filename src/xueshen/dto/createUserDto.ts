import { IsString, IsEmail, IsEnum, IsNotEmpty, isString } from 'class-validator';
import { User } from "@prisma/pg"
import NullableDto from './nullableDto';

export class CreateUserDto extends NullableDto{

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

    constructor(name: string, password: string, email: string, role="COMMON" as User["role"]) {
        super();
        this.name = name;
        this.password = password;
        this.email = email;
        this.role = role;
    }

}

//FIXME