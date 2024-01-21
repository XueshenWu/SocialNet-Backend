import { Test, TestingModule } from '@nestjs/testing';
import { DbService } from './db.service';

describe('DbService', () => {
    let service: DbService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [DbService],
        }).compile();

        service = module.get<DbService>(DbService);
    });


    it('should be defined', () => {
        expect(service).toBeDefined();
    });


    describe('createUser', () => {


        beforeAll(async () => {
            await service.deleteUser_notsafe_cascade("123123@gmail.com")
            await service.deleteUser_notsafe_cascade("abc@gmail.com")

            await service.createUser({
                "email": "abcdefg@ms.com",
                "password": "123",
                "role": "COMMON"
            })
        })

        afterAll(async () => {
            await service.deleteUser_notsafe_cascade("123123@gmail.com")
            await service.deleteUser_notsafe_cascade("abc@gmail.com")
        })

        it("should create a user and return true", async () => {
            
            const res = await service.createUser({
                "email": "123123@gmail.com",
                "password": "123",
                "role": "COMMON"
            })
            expect(res).toBe(true);

        })

        it("should not create a user and return false", async () => {

            const res = await service.createUser({
                "email": "abcdefg@ms.com",
                "password": "123",
                "role": "COMMON"
            })
            expect(res).toBe(false);
        })


    })


    describe("deleteUser",()=>{
        beforeEach(async ()=>{


            const pgClient = service.getPgClient_DANGEROUS();
            const mongoClient = service.getMongoClient_DANGEROUS();

            const user1 = await service.createUser({
                "email": "123123@gmail.com",
                "password": "123",
                "role": "COMMON"
            })

            const user2 = await service.createUser({
                "email": "abcabc@gmail.com",
                "password": "123",
                "role": "COMMON"
            })

            
          
            
        })
        afterEach(async ()=>{
            await service.deleteUser_notsafe_cascade("123123@gmail.com")
        })

        it("should delete a user and return true", async () => {
            const res = await service.deleteUser_notsafe_cascade("123123@gmail.com")
            expect(res).toBe(true);
            const user = await service.query_user_by_email("123123@gmail.com")
            expect(user).toBeUndefined();
        })

        it("should nullify a user and return true", async () => {
            
        })

       
    })
});
