import { IsString, IsNotEmpty } from 'class-validator';
import { Post } from '@prisma/mongo'


export default class CreatePostDto extends NullableDto {

    @IsString()
    @IsNotEmpty()
    title: Post['title']


    media: Post['media']

    @IsString()
    content: Post['content']


    @IsNotEmpty()
    @IsString()
    authorId: Post['authorId']

    


}