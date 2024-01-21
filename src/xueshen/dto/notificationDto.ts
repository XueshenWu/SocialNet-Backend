import { IsString, IsNotEmpty, IsBoolean } from 'class-validator';


export default class NotificationDto{
    @IsString()
    @IsNotEmpty()
    receipient: string;

    @IsString()
    @IsNotEmpty()
    content: string;

    @IsBoolean()
    read: boolean=false;


}