import{IsNotEmpty, IsString} from 'class-validator';

export default class BasicQueryDto {
    
    
    @IsString()
    @IsNotEmpty()
    identity: string;

    identityType: "email"|"username"|"id" = "id";
    
   
    
    
}