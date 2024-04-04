import { Test, TestingModule } from '@nestjs/testing';
import { PostsController } from './posts.controller';
import { DbPostService } from '../db/post/db_post.service';
import { PostsService } from './posts.service';
import { ConnectionService } from '../db/connection/connection.service';
import { AuthService } from '../auth/auth.service';
import { DbUserService } from '../db/user/db_user.service';
import { RedisService } from '../redis/redis.service';

describe('PostsController', () => {
    let controller: PostsController;
    let authService: AuthService;
    let redisService:RedisService;


    beforeAll(async () => {
        const module: TestingModule = await Test.createTestingModule({
            controllers: [PostsController],
            providers: [PostsService, DbPostService, ConnectionService, AuthService, DbUserService, ConnectionService, RedisService],
        }).compile();

        controller = module.get<PostsController>(PostsController);
       redisService = module.get<RedisService>(RedisService)
       await redisService.onModuleInit()
        
    });
    afterAll(async ()=>{
        await redisService.onModuleDestroy()
    })

    it('should be defined', () => {
        expect(controller).toBeDefined();
        
    });

    it('should return a recommended post id', async ()=>{
        const postid = await controller.getFeed('123', 'FORYOU')
        expect(postid).toBeTruthy()
    })
});
