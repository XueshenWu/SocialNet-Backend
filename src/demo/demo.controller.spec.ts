import { Test, TestingModule } from '@nestjs/testing';
import { DemoController } from './demo.controller';
import { ConnectionService } from '../xueshen/db/connection/connection.service';
import { DbUserService } from '../xueshen/db/user/db_user.service';
import { DbPostService } from '../xueshen/db/post/db_post.service';
import { PostsService } from '../xueshen/posts/posts.service';
import { AuthService } from '../xueshen/auth/auth.service';
import { RedisService } from '../xueshen/redis/redis.service';
import { CreateUserDto } from '../xueshen/dto/createUserDto';

import CreatePostDto from '../xueshen/dto/createPostDto';
import CreateReplyDto from '../xueshen/dto/createReplyDto';

describe('DemoController', () => {
    let controller: DemoController;
    let connectionService: ConnectionService
    let dbUserService: DbUserService;
    let dbPostService: DbPostService
    let postsService: PostsService
    let authService: AuthService
    let redisService: RedisService

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            controllers: [DemoController],
            providers: [DbUserService, DbPostService, PostsService, AuthService, RedisService, ConnectionService]
        }).compile();

        controller = module.get<DemoController>(DemoController);
        connectionService = module.get<ConnectionService>(ConnectionService);
        dbPostService = module.get<DbPostService>(DbPostService)
        dbUserService = module.get<DbUserService>(DbUserService);
        postsService = module.get<PostsService>(PostsService)
        authService = module.get<AuthService>(AuthService);
        redisService = module.get<RedisService>(RedisService);

    });

    it('should be defined', () => {
        expect(controller).toBeDefined();
    });

    it("should create users",   async() => {

        const users = ["JedCheng", 'XueshenWu', 'BYan', "TongCheng", "LewisNing"]

        // users.forEach(async user => {
        //     await authService.register(new CreateUserDto(user, "password", `${user}@example.com`))
        // })

      

        // const userIds: Promise<string>[] = users.map(async (user) => (await dbUserService.query_user_by_email(`${user}@example.com`)).id)
        
        
        //    userIds.forEach(async userid=>{
        //     for(let i=0;i<3;i++){
        //         await postsService.addPost(new CreatePostDto('', await userid, [`https://miro.medium.com/v2/resize:fit:1400/format:webp/1*0KFB17_NGTPB0XWyc4BSgQ.jpeg`], `Hello World`, "PUBLISHED"))
        //     }
        // })
        
        const posts = (await connectionService.mongoClient.post.findMany({
            
        })).filter(post=>post.replyParentId===null&&post.repostParentId===null)
        console.log(posts.length)

        posts.forEach(async (post)=>{
            console.log(post.id)
            await postsService.addReply(new CreateReplyDto('', '1922b528-ad8d-41f7-babf-eed26642bc2f', post.id,[], "nice to see you here!"))
        })
        
        

     

        


    })



});
