import { Injectable, OnModuleDestroy, OnModuleInit } from '@nestjs/common';
import * as redis from 'redis'
import { PostsService } from '../posts/posts.service';
import { DbPostService } from '../db/post/db_post.service';





@Injectable()
export class RedisService implements OnModuleInit, OnModuleDestroy{

    private postStorage = new Array<string>();

   

    async onModuleInit() {
        // await this.redisClient.connect()
        // await this.redisClient.configSet("maxmemory", process.env.REDIS_MAX_MEMORY ?? "100mb");
        // (await this.dbPostSerive.getPostIds()).sort(()=>Math.random()-0.5).forEach(id=>{
        //     this.redisClient.rPush('timeline', id)
        // })
    
    }

    async onModuleDestroy() {
        // await this.redisClient.quit();
    }
    
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
