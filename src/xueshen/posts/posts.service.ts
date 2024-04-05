import { Injectable } from '@nestjs/common';
import CreatePostDto from '../dto/createPostDto';
import { Post } from '@prisma/mongo';
import CreateRepostDto from '../dto/createRepostDto';
import { DbPostService } from '../db/post/db_post.service';
import CreateReplyDto from '../dto/createReplyDto';
import { Post_Author } from '../types/post-t';

@Injectable()
export class PostsService {

    constructor( private readonly dbPostService:DbPostService){}

    async addPost(createPostDto:CreatePostDto):Promise<string|undefined>{
        return await this.dbPostService.addPost(createPostDto);
    }

    async getRepliesByUserId(userId:string){
        return this.dbPostService.query_replies_by_user_id(userId);
    }

    async getLikes(postId:string){
        return await this.dbPostService.query_likes(postId);
    }

   

    async getOriginPostsByUserId(id:string):Promise<Post[]>{
        return await this.dbPostService.query_origin_posts_by_user_id(id);
    }
    async getRepostedPostsByUserId(id:string):Promise<Post[]>{
        return await this.dbPostService.query_reposted_posts_by_user_id(id);
    }

    async getLikedPostsByUserId(id:string):Promise<String[]>{
        return await this.dbPostService.query_liked_posts_by_user_id(id);
    }
    
    async getPostByPostId(id:string){
        return await this.dbPostService.query_post_by_post_id(id);
    }

    async getPostsByUserId(id:string):Promise<Post_Author[]>{
        return await this.dbPostService.query_posts_by_user_id(id);
    }

    async getRepliesByPostId(id:string){
        return await this.dbPostService.query_replies_by_post_id(id);
    }

    async addReply(createReplyDto:CreateReplyDto):Promise<String|undefined>{
        return await this.dbPostService.addReply(createReplyDto);
    }


    async searchPost(title:string){
        return await this.dbPostService.search_post_by_title(title)
    }

    async hidePost(id:string):Promise<boolean>{
        return await this.dbPostService.hidePost(id);
    }

    async publishPost(id:string):Promise<boolean>{
        return await this.dbPostService.updatePostStatus(id,"PUBLISHED");
    }

    async likePost(user_id:string, post_id){
        return {data:await this.dbPostService.likePost(user_id, post_id)}
    }

    async unlikePost(user_id:string, post_id){
        return {data:await this.dbPostService.unlikePost(user_id, post_id)}
    }

    async repost(createRepostDto:CreateRepostDto){
        return {data: await this.dbPostService.repost(createRepostDto)}
    }

  
}
