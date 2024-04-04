import { IsNotEmpty, IsString } from "class-validator";
import CreatePostDto from "./createPostDto";
import { Post } from '@prisma/mongo'


export default class CreateReplyDto extends CreatePostDto {

    @IsNotEmpty()
    @IsString()
    replyParentId: Exclude<Post['id'], undefined>


    constructor(title: string, authorId: string, replyParentId: string, media?: string[], content?: string) {

        super(title, authorId, media, content);

        this.replyParentId = replyParentId;
    }

}