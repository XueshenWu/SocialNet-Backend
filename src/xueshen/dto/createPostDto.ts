import { IsString, IsNotEmpty } from 'class-validator';
import { Post } from '@prisma/mongo'
import NullableDto from './nullableDto';


export default class CreatePostDto extends NullableDto {

    @IsString()
    @IsNotEmpty()
    title: Post['title']

    @IsString()
    media?: Post['media']

    @IsString()
    content?: Post['content']


    @IsNotEmpty()
    @IsString()
    authorId: Post['authorId']

    @IsString()
    status?: Post['status']

 
    constructor(title: string, authorId: string, media?: string[], content?: string, status?: Post['status']) {

        super();

        this.title = title;
        this.authorId = authorId;
        this.media = media;
        this.content = content;
        this.status = status?? "DRAFT";
        
    }

    


}