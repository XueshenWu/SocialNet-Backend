import { Controller, Post } from '@nestjs/common';
import { PostsService } from './posts.service';
import CreatePostDto from '../dto/createPostDto';
import { Post as Post_t} from '@prisma/mongo';

import BasicQueryDto from '../dto/basicQueryDto';
import CreateReplyDto from '../dto/createReplyDto';
import { RedisService } from '../redis/redis.service';


@Controller('posts')
export class PostsController {
    constructor(private readonly postService:PostsService, private redisService:RedisService) {}

    @Post('getFeed')
    async getFeed(userid:string, feedtype:"FORYOU"|"FOLLOWING"){
        return {data:this.redisService.getFromTimeline()}
    }

    @Post('searchPost')
    async searchPost(title:string){
        return this.postService.searchPost(title)
    }

    @Post('createPost')
    async create(createPostDto:CreatePostDto):Promise<String|undefined>{
        return await this.postService.addPost(createPostDto);
    }

    @Post('getOriginPostsByUserId')
    async getOriginPostsByUserId(basicQueryDto:BasicQueryDto):Promise<Post_t[]>{
        return await this.postService.getOriginPostsByUserId(basicQueryDto.identity);
    }

    @Post('getRepostedPostsByUserId')
    async getRepostedPostsByUserId(basicQueryDto:BasicQueryDto):Promise<Post_t[]>{
        return await this.postService.getRepostedPostsByUserId(basicQueryDto.identity);
    }

    @Post('getLikedPostsByUserId')
    async getLikedPostsByUserId(basicQueryDto:BasicQueryDto):Promise<String[]>{
        return await this.postService.getLikedPostsByUserId(basicQueryDto.identity);
    }

    @Post('getPostByPostId')
    async getPostByPostId(basicQueryDto:BasicQueryDto):Promise<Post_t>{
        return await this.postService.getPostByPostId(basicQueryDto.identity);
    }

    @Post('getPostsByUserId')
    async getPostsByUserId(basicQueryDto:BasicQueryDto){
        return {data:await this.postService.getPostsByUserId(basicQueryDto.identity)}
    }

    // @Post('getRepliesByPostId')
    // async getRepliesByPostId(basicQueryDto:BasicQueryDto):Promise<Post_t[]>{
    //     return await this.postService.getRepliesByPostId(basicQueryDto.identity);
    // }

    @Post('addReply')
    async addReply(createReplyDto:CreateReplyDto):Promise<String|undefined>{
        return await this.postService.addReply(createReplyDto);
    }


    @Post('likePost')
    async likePost(likePostDto:{userid:string, postId:string}){
        return await this.postService.likePost(likePostDto.userid, likePostDto.postId)
    }

    




    @Post('hidePost')
    async hidePost(basicQueryDto:BasicQueryDto):Promise<boolean>{
        return await this.postService.hidePost(basicQueryDto.identity);
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

 

    async unlikePost(user_id:string, post_id):Promise<boolean>{
        return await this.dbService.unlikePost(user_id, post_id);
    }

    async repost(createRepostDto:CreateRepostDto):Promise<string|undefined>{
        return await this.dbService.repost(createRepostDto);
    }
}

 */