import { Test, TestingModule } from '@nestjs/testing';
import { DemoController } from './demo.controller';
import { ConnectionService } from 'src/xueshen/db/connection/connection.service';
import { DbUserService } from 'src/xueshen/db/user/db_user.service';
import { DbPostService } from 'src/xueshen/db/post/db_post.service';
import { PostsService } from 'src/xueshen/posts/posts.service';
import { AuthService } from 'src/xueshen/auth/auth.service';
import { RedisService } from 'src/xueshen/redis/redis.service';

describe('DemoController', () => {
    let controller: DemoController;
    let connectionService: ConnectionService
    let dbUserService: DbUserService;
    let dbPostService: DbPostService
    let postsService:PostsService
    let authService: AuthService
    let redisService: RedisService

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            controllers: [DemoController],
            providers: [ConnectionService, DbUserService, DbPostService, PostsService, AuthService, RedisService]
        }).compile();

        controller = module.get<DemoController>(DemoController);
    });

    it('should be defined', () => {
        expect(controller).toBeDefined();
    });

    it("should create users", () => {
     
    })
});
