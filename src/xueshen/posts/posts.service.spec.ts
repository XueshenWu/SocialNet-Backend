import { Test, TestingModule } from '@nestjs/testing';
import { PostsService } from './posts.service';
import { DbPostService } from '../db/post/db_post.service';
import { ConnectionService } from '../db/connection/connection.service';
import CreatePostDto from '../dto/createPostDto';
import { AuthService } from '../auth/auth.service';
import { CreateUserDto } from '../dto/createUserDto';
import { v4 } from 'uuid';
import { DbUserService } from '../db/user/db_user.service';
import { RedisService } from '../redis/redis.service';
import CreateRepostDto from '../dto/createRepostDto';

describe('PostsService', () => {
  let service: PostsService;
  let dbPostService:DbPostService;
  let authService:AuthService;
  let dbUserService:DbUserService;
  let rn:string;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PostsService, DbPostService, ConnectionService, AuthService, DbUserService, ConnectionService, RedisService],
    }).compile();

    service = module.get<PostsService>(PostsService);
    dbPostService = module.get<DbPostService>(DbPostService)
    authService = module.get<AuthService>(AuthService)

    dbUserService = module.get<DbUserService>(DbUserService);

    rn = v4().substring(0,8)
    await authService.register(new CreateUserDto('test', '123123', `${rn}@qwe.com`))
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should add a post into database', async ()=>{
    
    const user = await dbUserService.query_user_by_email(`${rn}@qwe.com`)
   
    expect(user).toBeTruthy()

    const res = await service.addPost(new CreatePostDto('test', user.id))
    expect(res).toBeTruthy()
    const post = await dbPostService.query_post_by_post_id(res)
    expect(post).toBeTruthy()
   
  })

 
});
