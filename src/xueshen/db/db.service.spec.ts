// import { Test, TestingModule } from '@nestjs/testing';
// import { DbService } from './db.service';
// import { resolve } from 'path';
// import createUserDto from '../dto/createUserDto';
// import { DbPostService } from './db_post.service';
// import { ConnectionService } from './connection.service';








// describe('DbService', () => {
//     let service: DbService;

//     beforeAll(async () => {
//         const module: TestingModule = await Test.createTestingModule({
//             providers: [DbService, 
//                     DbPostService,
//                     ConnectionService
//             ],
//         }).compile();

//         service = module.get<DbService>(DbService);
//         await service.resetDatabse_DANGEROUS()
//     });


//     it('should be defined', () => {
//         expect(service).toBeDefined();
//     });


//     describe('createUser', () => {


//         beforeAll(async () => {
//             await service.deleteUser_notsafe_cascade("123123@gmail.com")
//             await service.deleteUser_notsafe_cascade("abc@gmail.com")

//             await service.createUser({
//                 "email": "abcdefg@ms.com",
//                 "password": "123",
//                 "role": "COMMON"
//             })
//         })

//         afterAll(async () => {
//             await service.resetDatabse_DANGEROUS()
//         })

//         it("should create a user and return id", async () => {


//             const createUserDto:createUserDto = {
//                 "email": "123123@gmail.com",
//                 "password": "123",
//                 "role": "COMMON",

//             }

//             const res = await service.createUser(createUserDto)

//             const user = await service.getPgClient_DANGEROUS().user.findUnique({
//                 where: {
//                     email: "123123@gmail.com"
//                 }
//             })
//             expect(res).toBe(user.id);

//         })

//         it("should not create a user and return undefined", async () => {

//             const res = await service.createUser({
//                 "email": "abcdefg@ms.com",
//                 "password": "123",
//                 "role": "COMMON",
//                 "name": "123"
//             })
//             expect(res).toBeUndefined();
//         })


//     })

//     describe("addFriend", () => {

//         let user1Id: string;
//         let user2Id: string;
//         let user3Id: string;
//         beforeAll(async () => {
//             user1Id = await service.createUser({
//                 email: "user1@u1.com",
//                 password: "123",
//                 role: "COMMON"
//             })

//             user2Id = await service.createUser({
//                 email: "user2@u2.com",
//                 password: "123",
//                 role: "COMMON"
//             })

//             user3Id = await service.createUser({
//                 email: "user3@u3.com",
//                 password: "123",
//                 role: "COMMON"
//             })

//             await service.getPgClient_DANGEROUS().friend.create({
//                 data: {
//                     id_from: user1Id,
//                     id_to: user2Id
//                 }
//             })
//         })

//         afterAll(async () => {
//             await service.resetDatabse_DANGEROUS()

//         })

//         it("should add friend and return true", async () => {
//             const res = await service.addFriend(user1Id, user3Id)
//             expect(res).toBe(true)
//         })

//         it("should not add friend and return false", async () => {
//             const res = await service.addFriend(user1Id, user2Id)
//             expect(res).toBe(false)
//         })
//     })


//     describe("deleteFriend", () => {
//         let user1Id: string;
//         let user2Id: string;
//         let user3Id: string;
//         beforeAll(async () => {
//             user1Id = await service.createUser({
//                 email: "abc@abc.com",
//                 password: "123",
//                 role: "COMMON"
//             })

//             user2Id = await service.createUser({
//                 email: "qwe@qwe.com",
//                 password: "123",
//                 role: "COMMON"
//             })

//             user3Id = await service.createUser({
//                 email: "poi@poi.com",
//                 password: "123",
//                 role: "COMMON"
//             })

//             await service.getPgClient_DANGEROUS().friend.create({
//                 data: {
//                     id_from: user1Id,
//                     id_to: user2Id
//                 }
//             })

//             await service.getPgClient_DANGEROUS().friend.create({
//                 data: {
//                     id_from: user2Id,
//                     id_to: user1Id
//                 }
//             })
//         })

//         afterAll(async () => {
//             await service.resetDatabse_DANGEROUS()
//         })


//         it("should delete friend and return true", async () => {
//             const res = await service.deleteFriend(user1Id, user2Id)
//             expect(res).toBe(true)
//         })

//         it("should not delete friend and return false if not yet", async () => {
//             const res = await service.deleteFriend(user1Id, user3Id)
//             expect(res).toBe(false)
//         })
//     })


//     describe("sendNotification", () => {
//         it("should send notification and return true and can be queryed", async () => {

//             const user1Id = await service.createUser({
//                 email: "1213@123123.com",
//                 password: "123",
//                 role: "COMMON"
//             })

//             const user2Id = await service.createUser({
//                 email: "121212@12.com",
//                 password: "123",
//                 role: "COMMON"
//             })

//             await service.sendNotification(user1Id, {
//                 type: "FOLLOW",
//                 content: `You are followed by ${user2Id}`,
//                 sender: user2Id
//             })

//             await service.sendNotification(user1Id, {
//                 type: "REPLY",
//                 content: `You are replied by ${user2Id}`,
//                 sender: user2Id
//             })

//             await service.sendNotification(user2Id, {
//                 type: "REPLY",
//                 content: `You are replied by ${user1Id}`,
//                 sender: user1Id
//             })

//             const notificationCenter = await service.getMongoClient_DANGEROUS().notificationCenter.findUnique({
//                 where: {
//                     userId: user1Id
//                 }
//             })

//             expect(notificationCenter.notifications.length).toBe(2)

//             const m0 = notificationCenter.notifications[0]
//             const m1 = notificationCenter.notifications[1]

//             expect(m0.type).toBe("FOLLOW")
//             expect(m0.content).toBe(`You are followed by ${user2Id}`)
//             expect(m0.sender).toBe(user2Id)

//             expect(m1.type).toBe("REPLY")
//             expect(m1.content).toBe(`You are replied by ${user2Id}`)
//             expect(m1.sender).toBe(user2Id)


//             await service.resetDatabse_DANGEROUS(true)


//         })
//     })



//     describe("follow&unfollow User", () => {
//         it("should follow user and return true", async () => {
//             const user1Id = await service.createUser({
//                 email: "1",
//                 password: "123",
//                 role: "COMMON"
//             })


//             const user2Id = await service.createUser({
//                 email: "2",
//                 password: "123",
//                 role: "COMMON"
//             })

//             const res = await service.followUser(user1Id, user2Id)
//             expect(res).toBe(true)

//             const res1_2 = await service.getPgClient_DANGEROUS().follow.findUnique({
//                 where: {
//                     id_from_id_to: {
//                         id_from: user1Id,
//                         id_to: user2Id
//                     }
//                 }
//             })

//             const res2_1 = await service.getPgClient_DANGEROUS().follow.findUnique({
//                 where: {
//                     id_from_id_to: {
//                         id_from: user2Id,
//                         id_to: user1Id
//                     }
//                 }
//             })

//             expect(res1_2).toBeDefined()
//             expect(res2_1).toBeNull()

//             await service.resetDatabse_DANGEROUS(true)


//         })

//         it("should unfollow user and return true", async () => {
//             const user1Id = await service.createUser({
//                 email: "1",
//                 password: "123",
//                 role: "COMMON"
//             })
//             const user2Id = await service.createUser({
//                 email: "2",
//                 password: "123",
//                 role: "COMMON"
//             })

//             await service.getPgClient_DANGEROUS().follow.create({
//                 data: {
//                     id_from: user1Id,
//                     id_to: user2Id
//                 }
//             })

//             const res = await service.unfollowUser(user1Id, user2Id)

//             expect(res).toBe(true)

//             const res1_2 = await service.getPgClient_DANGEROUS().follow.findUnique({
//                 where: {
//                     id_from_id_to: {
//                         id_from: user1Id,
//                         id_to: user2Id
//                     }
//                 }
//             })
//             expect(res1_2).toBeNull()
//             await service.resetDatabse_DANGEROUS(true)
//         })




//         describe("add post", () => {
//             it("should add post and return id", async () => {
//                 const user1Id = await service.createUser({
//                     email: "1",
//                     password: "123",
//                     role: "COMMON"
//                 })

//                 const res = await service.addPost({
//                     title: "123",
//                     content: "12223",
//                     author: {
//                         connect: {
//                             id: user1Id
//                         }
//                     }
//                 })

               

//                 const post = await service.getMongoClient_DANGEROUS().post.findUnique({
//                     where: {
//                         id: res
//                     }
//                 })

//                 expect(post).toBeDefined()
//                 expect(post.content).toBe("12223")


//                 await service.resetDatabse_DANGEROUS(true)
//             })


//             it("should update post status and return true", async () => {
//                 const user1Id = await service.createUser({
//                     email: "1",
//                     password: "123",
//                     role: "COMMON"
//                 })

//                 const postId = await service.addPost({
//                     title: "123",
//                     content: "12223",
//                     author: {
//                         connect: {
//                             id: user1Id
//                         }
//                     }
//                 })


//                 expect(postId).toBeDefined()

//                 const res = await service.updatePostStatus(postId, "UNDER_REVIEW")


//                 const post = await service.getMongoClient_DANGEROUS().post.findUnique({
//                     where: {
//                         id: postId
//                     }
//                 })

//                 expect(post).toBeDefined()
//                 expect(post.status).toBe("UNDER_REVIEW")

//                 await service.resetDatabse_DANGEROUS()
//             })
//         })
//     })


//     describe("like&unlike post", () => {
//         it("should like post and return true", async () => {
//             const user1Id = await service.createUser({
//                 email: "1",
//                 password: "123",
//                 role: "COMMON"
//             })

//             const postId = await service.addPost({
//                 title: "123",
//                 content: "12223",
//                 author: {
//                     connect: {
//                         id: user1Id
//                     }
//                 }
//             })

//             const res = await service.likePost(user1Id, postId)

//             expect(res).toBeDefined()


//             const res1 = await service.getMongoClient_DANGEROUS().likeTable.findUnique({
//                 where: {
//                     id: res
//                 }
//             })

//             expect(res1).toBeDefined()

//             await service.resetDatabse_DANGEROUS(true)
//         })

//         it("should unlike post and return true", async () => {
//             const user1Id = await service.createUser({
//                 email: "1",
//                 password: "123",
//                 role: "COMMON"
//             })

//             const postId = await service.addPost({
//                 title: "123",
//                 content: "12223",
//                 author: {
//                     connect: {
//                         id: user1Id
//                     }
//                 }
//             })

//             const likeId = await service.likePost(user1Id, postId)

//             expect(likeId).toBeDefined()

//             const res = await service.unlikePost(user1Id, postId)

//             expect(res).toBe(true)

//             const res1 = await service.getMongoClient_DANGEROUS().likeTable.findUnique({
//                 where: {
//                     id: likeId
//                 }
//             })

//             expect(res1).toBeNull()

//             await service.resetDatabse_DANGEROUS(true)



//         })

//     })


//     describe("add reply", () => {


//         let user1Id: string;
//         let user2Id: string;
//         let postId: string;


//         beforeAll(async () => {
//             user1Id = await service.createUser({
//                 email: "1",
//                 password: "123",
//                 role: "COMMON"
//             })

//             user2Id = await service.createUser({
//                 email: "2",
//                 password: "123",
//                 role: "COMMON"
//             })

//             postId = await service.addPost({
//                 title: "123",
//                 content: "12223",
//                 author: {
//                     connect: {
//                         id: user1Id
//                     }
//                 }
//             })

//         })


//         afterAll(async () => {
//             await service.resetDatabse_DANGEROUS(true)
//         })

//         it("should add reply and return id", async () => {
//             const replyId = await service.addReply({
//                 text: "good post",
//                 post: {
//                     connect: {
//                         id: postId
//                     }
//                 },
//                 from: {
//                     connect: {
//                         id: user2Id
//                     }

//                 },
//                 to: {
//                     connect: {
//                         id: user1Id
//                     }
//                 }
//             })

//             expect(replyId).toBeDefined()
//             const reply = await service.getMongoClient_DANGEROUS().reply.findUnique({
//                 where: {
//                     id: replyId
//                 }
        
//             })

//             expect(reply).toBeDefined()
//             expect(reply.text).toBe("good post")
//         })

//         it("should delete reply and return true", async () => {
//             const replyId = await service.addReply({
//                 text: "very post",
//                 post: {
//                     connect: {
//                         id: postId
//                     }
//                 },
//                 from: {
//                     connect: {
//                         id: user2Id
//                     }

//                 },
//                 to: {
//                     connect: {
//                         id: user1Id
//                     }
//                 }
//             })

//             expect(replyId).toBeDefined()

            

//             const res = await service.removeReply(replyId)

//             expect(res).toBe(true)

//             const reply = await service.getMongoClient_DANGEROUS().reply.findUnique({
//                 where: {
//                     id: replyId
//                 }
//             })

          

            





//             expect(reply).toBeNull()

            
//         })

//     })

// });
