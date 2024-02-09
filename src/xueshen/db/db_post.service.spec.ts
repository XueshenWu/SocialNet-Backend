import { DbPostService } from "./db_post.service";
import { DbService } from "./db.service";
import { ConnectionService } from "./connection.service";
import { Test, TestingModule } from "@nestjs/testing";
import { DbUserService } from "./db_user.service";
import CreatePostDto from "../dto/createPostDto";
import CreateUserDto from "../dto/createUserDto";
import CreateReplyDto from "../dto/createReplyDto";


describe("db_post.service", () => {

    let service: DbService;

    let user1: string;

    let user2: string;

    beforeAll(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [DbService,
                DbPostService,
                ConnectionService,
                DbUserService
            ],
        }).compile();

        service = module.get<DbService>(DbService);
        await service.resetDatabse_DANGEROUS()

        user1 = await service.createUser(new CreateUserDto("username1", "password1", "email1"))



        user2 = await service.createUser(new CreateUserDto("username2", "password2", "email2"))

    })


    it("should be defined", () => {
        expect(service).toBeDefined();
    });

    it("should not add a post", async () => {
        const post: CreatePostDto = new CreatePostDto("title", "65c66258a9776b5f115f0c02");
        const postId = await service.addPost(post);
        expect(postId).toBeUndefined();
    });

    it("should add a post", async () => {
        const post: CreatePostDto = new CreatePostDto("title", user1);
        const postId = await service.addPost(post);
        expect(postId).toBeDefined();
        const postids: string[] = (await service.getMongoClient_DANGEROUS().user.findUnique({
            where: {
                id: user1
            }
        })).posts;
        expect(postids).toContain(postId);
    });


    it("should not add a reply", async () => {
        const reply = await service.addReply(new CreateReplyDto("content", "postId", "65c66258a9776b5f115f0c02"));
        expect(reply).toBeUndefined();
    })

    it("should add a reply", async () => {
        const post = await service.addPost(new CreatePostDto("title", user1));
        const createReplyDto = new CreateReplyDto("content", user2, post)

        // console.log("reply", JSON.stringify(createReplyDto))

        const reply = await service.addReply(createReplyDto);
        expect(reply).toBeDefined();
        expect(await service.getMongoClient_DANGEROUS().post.findUnique({
            where: {
                id: post
            }
        })).toBeDefined();
        expect((await service.getMongoClient_DANGEROUS().user.findUnique({
            where: {
                id: user2
            }
        })).posts).toContain(reply);
    })

    it("should hide a post", async ()=>{
        const post = await service.addPost(new CreatePostDto("tobehidden", user1));
        expect(await service.hidePost(post)).toBeTruthy();
        expect((await service.getMongoClient_DANGEROUS().post.findUnique({
            where: {
                id: post
            }
        })).status).toBe("HIDDEN");
    })


});