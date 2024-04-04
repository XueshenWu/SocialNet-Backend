import { Test, TestingModule } from '@nestjs/testing';
import { PostsController } from './posts.controller';
import { DbPostService } from '../db/post/db_post.service';
import { PostsService } from './posts.service';
import { ConnectionService } from '../db/connection/connection.service';
import { AuthService } from '../auth/auth.service';
import { DbUserService } from '../db/user/db_user.service';
import { RedisService } from '../redis/redis.service';
import { v4 } from 'uuid';
import { CreateUserDto } from '../dto/createUserDto';
import CreatePostDto from '../dto/createPostDto';

describe('PostsController', () => {
    let controller: PostsController;
    let authService: AuthService;
    let redisService: RedisService;
    let service: PostsService;
    let rn: string;
    let dbPostService: DbPostService;
    let dbUserService:DbUserService;


    beforeAll(async () => {
        const module: TestingModule = await Test.createTestingModule({
            controllers: [PostsController],
            providers: [PostsService, DbPostService, ConnectionService, AuthService, DbUserService, ConnectionService, RedisService],
        }).compile();

        controller = module.get<PostsController>(PostsController);
        redisService = module.get<RedisService>(RedisService)
        service = module.get<PostsService>(PostsService)
        authService = module.get<AuthService>(AuthService)
        dbPostService = module.get<DbPostService>(DbPostService)
        dbUserService = module.get<DbUserService>(DbUserService)
        await redisService.onModuleInit()
        rn = v4().substring(0, 8)
        await authService.register(new CreateUserDto('test', '123123', `${rn}@qwe.com`))

    });
    afterAll(async () => {
        await redisService.onModuleDestroy()
    })

    it('should be defined', () => {
        expect(controller).toBeDefined();

    });

    it('should return a recommended post id', async () => {
        const postid = await controller.getFeed('123', 'FORYOU')
        expect(postid).toBeTruthy()
    })

    it('should return several posts', async () => {
        const user = await dbUserService.query_user_by_email(`${rn}@qwe.com`)
        for (let i = 0; i < 3; i++) {
            const res = await service.addPost(new CreatePostDto(`${i}testpost${i}`, user.id))
            expect(res).toBeTruthy()
            const post = await dbPostService.query_post_by_post_id(res)
            expect(post).toBeTruthy()

        }
        const res = await controller.searchPost('testpost')
        expect(res.length).toBeGreaterThan(0)
    })
});
