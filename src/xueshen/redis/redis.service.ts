import { Injectable, OnModuleDestroy, OnModuleInit } from '@nestjs/common';
import * as redis from 'redis'
import { PostsService } from '../posts/posts.service';
import { DbPostService } from '../db/post/db_post.service';





@Injectable()
export class RedisService {

    private postStorage = new Array<string>();

   

   
    
    constructor(private readonly dbPostSerive:DbPostService) {
        
    }



    async getFromTimeline(idx?:number){

        if(this.postStorage.length === 0){
            this.postStorage = await this.dbPostSerive.getPostIds()
        }

        if(!idx){
            idx = Math.floor(this.postStorage.length*Math.random())
        }
        
            return this.postStorage[idx]
    }

   


}
