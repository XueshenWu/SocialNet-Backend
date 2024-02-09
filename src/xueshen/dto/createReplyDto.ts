import { IsNotEmpty, IsString } from "class-validator";
import CreatePostDto from "./createPostDto";
import { Post } from '@prisma/mongo'


export default class CreateReplyDto extends CreatePostDto {

    @IsNotEmpty()
    @IsString()
    replyParentId: Exclude<Post['id'], undefined>

}