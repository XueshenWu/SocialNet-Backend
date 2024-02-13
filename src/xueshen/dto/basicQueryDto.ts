import{IsString} from 'class-validator';

export default class BasicQueryDto {
    
    
    @IsString()
    id: string;
    
    constructor() {
        this.id = '';
    }
    
    setValue(value:string) {
        this.id = value;
    }

}