import { Controller, Post } from '@nestjs/common';
import { PostsService } from './posts.service';
import CreatePostDto from '../dto/createPostDto';
import { Post as Post_t} from '@prisma/mongo';

import BasicQueryDto from '../dto/basicQueryDto';
import CreateReplyDto from '../dto/createReplyDto';


@Controller('posts')
export class PostsController {
    constructor(private readonly postService:PostsService) {}



    @Post('addPost')
    async addPost(createPostDto:CreatePostDto):Promise<String|undefined>{
        return await this.postService.addPost(createPostDto);
    }

    @Post('getOriginPostsByUserId')
    async getOriginPostsByUserId(basicQueryDto:BasicQueryDto):Promise<Post_t[]>{
        return await this.postService.getOriginPostsByUserId(basicQueryDto.id);
    }

    @Post('getRepostedPostsByUserId')
    async getRepostedPostsByUserId(basicQueryDto:BasicQueryDto):Promise<Post_t[]>{
        return await this.postService.getRepostedPostsByUserId(basicQueryDto.id);
    }

    @Post('getLikedPostsByUserId')
    async getLikedPostsByUserId(basicQueryDto:BasicQueryDto):Promise<String[]>{
        return await this.postService.getLikedPostsByUserId(basicQueryDto.id);
    }

    @Post('getPostByPostId')
    async getPostByPostId(basicQueryDto:BasicQueryDto):Promise<Post_t>{
        return await this.postService.getPostByPostId(basicQueryDto.id);
    }

    @Post('getPostsByUserId')
    async getPostsByUserId(basicQueryDto:BasicQueryDto):Promise<Post_t[]>{
        return await this.postService.getPostsByUserId(basicQueryDto.id);
    }

    @Post('getRepliesByPostId')
    async getRepliesByPostId(basicQueryDto:BasicQueryDto):Promise<Post_t[]>{
        return await this.postService.getRepliesByPostId(basicQueryDto.id);
    }

    @Post('addReply')
    async addReply(createReplyDto:CreateReplyDto):Promise<String|undefined>{
        return await this.postService.addReply(createReplyDto);
    }

    @Post('hidePost')
    async hidePost(basicQueryDto:BasicQueryDto):Promise<boolean>{
        return await this.postService.hidePost(basicQueryDto.id);
    }

}




/**
 * 
 * 
 * import { Injectable } from '@nestjs/common';
import { DbService } from '../db/db.service';
import CreatePostDto from '../dto/createPostDto';
import { Post } from '@prisma/mongo';
import CreateRepostDto from '../dto/createRepostDto';

@Injectable()
export class PostsService {

    constructor(private readonly dbService:DbService){}

    async addPost(createPostDto:CreatePostDto):Promise<String|undefined>{
        return await this.dbService.addPost(createPostDto);
    }



    async getOriginPostsByUserId(id:string):Promise<Post[]>{
        return await this.dbService.query_origin_posts_by_user_id(id);
    }
    async getRepostedPostsByUserId(id:string):Promise<Post[]>{
        return await this.dbService.query_reposted_posts_by_user_id(id);
    }

    async getLikedPostsByUserId(id:string):Promise<String[]>{
        return await this.dbService.query_liked_posts_by_user_id(id);
    }

    async getPostByPostId(id:string):Promise<Post>{
        return await this.dbService.query_post_by_id(id);
    }

    async getPostsByUserId(id:string):Promise<Post[]>{
        return await this.dbService.query_posts_by_user_id(id);
    }

    async getRepliesByPostId(id:string):Promise<Post[]>{
        return await this.dbService.query_replies_by_post_id(id);
    }

    async addReply(createReplyDto):Promise<String|undefined>{
        return await this.dbService.addReply(createReplyDto);
    }

    async hidePost(id:string):Promise<boolean>{
        return await this.dbService.hidePost(id);
    }

    async publishPost(id:string):Promise<boolean>{
        return await this.dbService.updatePostStatus(id,"PUBLISHED");
    }

    async likePost(user_id:string, post_id):Promise<string|undefined>{
        return await this.dbService.likePost(user_id, post_id);
    }

    async unlikePost(user_id:string, post_id):Promise<boolean>{
        return await this.dbService.unlikePost(user_id, post_id);
    }

    async repost(createRepostDto:CreateRepostDto):Promise<string|undefined>{
        return await this.dbService.repost(createRepostDto);
    }
}

 */