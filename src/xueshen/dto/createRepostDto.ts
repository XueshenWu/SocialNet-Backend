import { IsNotEmpty, IsString } from 'class-validator';
import CreatePostDto from './createPostDto';
import { Post } from '@prisma/mongo';


export default class CreateRepostDto extends CreatePostDto {
    @IsNotEmpty()
    @IsString()
    repostParentId: Exclude<Post['id'], undefined>;

    constructor(title: string, authorId: string, repostParentId: string, media?: string[], content?: string) {
        super(title, authorId, media, content);
        this.repostParentId = repostParentId;
    }
}