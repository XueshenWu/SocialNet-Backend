import { Injectable, OnModuleDestroy, OnModuleInit } from '@nestjs/common';
import * as redis from 'redis'
import { PostsService } from '../posts/posts.service';
import { DbPostService } from '../db/post/db_post.service';





@Injectable()
export class RedisService implements OnModuleInit, OnModuleDestroy{

    private readonly redisClient = redis.createClient({
        url: process.env.REDIS_URL ?? "redis://localhost:6379",
        database: Number.isNaN(Number(process.env.REDIS_DB)) ? 1 : Number(process.env.REDIS_DB),
       

    });

    async onModuleInit() {
        await this.redisClient.connect()
        await this.redisClient.configSet("maxmemory", process.env.REDIS_MAX_MEMORY ?? "100mb");
        (await this.dbPostSerive.getPostIds()).sort(()=>Math.random()-0.5).forEach(id=>{
            this.redisClient.rPush('timeline', id)
        })
    
    }

    async onModuleDestroy() {
        await this.redisClient.quit();
    }
    
    constructor(private readonly dbPostSerive:DbPostService) {

    }


    async getFromTimeline(idx?:number){
        if(!idx){
            idx = Math.floor(await this.redisClient.lLen('timeline')*Math.random())
        }

            return this.redisClient.lIndex('timeline', idx)
    }

    async updateTimeline(){
        this.redisClient.del('timeline')
        ;(await this.dbPostSerive.getPostIds()).sort(()=>Math.random()-0.5).forEach(id=>{
            this.redisClient.rPush('timeline', id)
        })
    }


}
