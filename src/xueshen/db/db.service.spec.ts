import { Test, TestingModule } from '@nestjs/testing';
import { DbService } from './db.service';

describe('DbService', () => {
    let service: DbService;

    beforeAll(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [DbService],
        }).compile();

        service = module.get<DbService>(DbService);
        service.resetDatabse_DANGEROUS()
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
            await service.resetDatabse_DANGEROUS()
        })

        it("should create a user and return id", async () => {

            const res = await service.createUser({
                "email": "123123@gmail.com",
                "password": "123",
                "role": "COMMON"
            })

            const user = await service.getPgClient_DANGEROUS().user.findUnique({
                where: {
                    email: "123123@gmail.com"
                }
            })
            expect(res).toBe(user.id);

        })

        it("should not create a user and return undefined", async () => {

            const res = await service.createUser({
                "email": "abcdefg@ms.com",
                "password": "123",
                "role": "COMMON"
            })
            expect(res).toBeUndefined();
        })


    })

    describe("addFriend", () => {

        let user1Id: string;
        let user2Id: string;
        let user3Id: string;
        beforeAll(async () => {
            user1Id = await service.createUser({
                email: "user1@u1.com",
                password: "123",
                role: "COMMON"
            })

            user2Id = await service.createUser({
                email: "user2@u2.com",
                password: "123",
                role: "COMMON"
            })

            user3Id = await service.createUser({
                email: "user3@u3.com",
                password: "123",
                role: "COMMON"
            })

            await service.getPgClient_DANGEROUS().friend.create({
                data: {
                    id_from: user1Id,
                    id_to: user2Id
                }
            })
        })

        afterAll(async () => {
            await service.resetDatabse_DANGEROUS()

        })

        it("should add friend and return true", async () => {
            const res = await service.addFriend(user1Id, user3Id)
            expect(res).toBe(true)
        })

        it("should not add friend and return false", async () => {
            const res = await service.addFriend(user1Id, user2Id)
            expect(res).toBe(false)
        })
    })


    describe("deleteFriend", () => {
        let user1Id: string;
        let user2Id: string;
        let user3Id: string;
        beforeAll(async () => {
            user1Id = await service.createUser({
                email: "abc@abc.com",
                password: "123",
                role: "COMMON"
            })

            user2Id = await service.createUser({
                email: "qwe@qwe.com",
                password: "123",
                role: "COMMON"
            })

            user3Id = await service.createUser({
                email: "poi@poi.com",
                password: "123",
                role: "COMMON"
            })

            await service.getPgClient_DANGEROUS().friend.create({
                data: {
                    id_from: user1Id,
                    id_to: user2Id
                }
            })

            await service.getPgClient_DANGEROUS().friend.create({
                data: {
                    id_from: user2Id,
                    id_to: user1Id
                }
            })
        })

        afterAll(async () => {
            await service.resetDatabse_DANGEROUS()
        })


        it("should delete friend and return true", async () => {
            const res = await service.deleteFriend(user1Id, user2Id)
            expect(res).toBe(true)
        })

        it("should not delete friend and return false if not yet", async () => {
            const res = await service.deleteFriend(user1Id, user3Id)
            expect(res).toBe(false)
        })
    })

    




});
