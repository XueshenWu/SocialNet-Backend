import { Injectable, Logger } from '@nestjs/common';
import { PrismaClient as PgClient, Prisma as PgPrisma, User } from '@prisma/pg'
import { PrismaClient as MongoClient, Prisma as MongoPrisma, Post } from '@prisma/mongo';
import { PTX } from '../types/prisma_tx';
import * as assert from 'assert';
import createUserDto from '../dto/createUserDto';




@Injectable()
export class DbService {
    private readonly pgClient = new PgClient();
    private readonly mongoClient = new MongoClient();
    private readonly logger = new Logger();

    async query_user_by_email(email: string): Promise<User | undefined> {
        return this.pgClient.user.findUnique({
            where: {
                email: email
            }
        })

    }

    async query_user_by_id(id: string): Promise<User | undefined> {
        return this.pgClient.user.findUnique({
            where: {
                id: id
            }
        })
    }


    async query_post_by_id(id: string): Promise<Post | undefined> {
        const res =  await this.mongoClient.post.findUnique({
            where: {
                id: id
            }
        })
        return res??undefined;
    }

    // Tested
    async sendNotification(userId: string, notification: MongoPrisma.NotificationCreateInput): Promise<string | undefined> {
        try {
            await this.mongoClient.notificationCenter.update({
                where: {
                    userId: userId
                },
                data: {
                    notifications: {
                        push: notification
                    }
                }
            })
        } catch (e) {
            this.logger.verbose(e);
            return undefined;
        }
    }

    // DO NOT USE THIS METHOD EXCEPT FOR TESTING
    getPgClient_DANGEROUS(): PgClient {
        assert(process.env.ALLOW_DANGEROUS === "TRUE")
        return this.pgClient;
    }

    // DO NOT USE THIS METHOD EXCEPT FOR TESTING
    getMongoClient_DANGEROUS(): MongoClient {

        assert(process.env.ALLOW_DANGEROUS === "TRUE")
        return this.mongoClient;
    }


    // NEVER USE THIS METHOD IN PRODUCTION
    async resetDatabse_DANGEROUS(log = false) {

        assert(process.env.ALLOW_DANGEROUS === "TRUE")
        const pgClient = this.getPgClient_DANGEROUS()



        await pgClient.$transaction(async (tx) => {
            await tx.follow.deleteMany()
            await tx.friend.deleteMany()
            await tx.profile.deleteMany()
            await tx.user.deleteMany()
        })

        const mongoClient = this.getMongoClient_DANGEROUS()



        await mongoClient.$transaction(async (tx) => {
            await tx.likeTable.deleteMany()
            await tx.likeTable.deleteMany()

            await tx.reply.deleteMany()
            await tx.reply.deleteMany()

            await tx.post.deleteMany()
            await tx.post.deleteMany()
            
            await tx.notificationCenter.deleteMany()
            await tx.notificationCenter.deleteMany()

            await tx.user.deleteMany()
            await tx.user.deleteMany()
        })



    }

    // Tested
    // return true if success, false if failed(e.g. already friend)
    async addFriend(id_from: string, id_to: string): Promise<boolean> {
        try {
            await this.pgClient.$transaction(async (tx) => {
                await tx.friend.create({
                    data: {
                        id_from: id_from,
                        id_to: id_to
                    }
                })
                await tx.friend.create({
                    data: {
                        id_from: id_to,
                        id_to: id_from
                    }
                })
            })
            return true;
        } catch (e) {
            this.logger.verbose(e);
            return false;
        }

    }

    // Tested
    // return true if success, false if failed(e.g. not friend yet)
    async deleteFriend(id_from: string, id_to: string): Promise<boolean> {

        const res = await this.pgClient.$transaction(async (tx) => {
            try {
                await tx.friend.delete({
                    where: {
                        id_from_id_to: {
                            id_from: id_from,
                            id_to: id_to
                        }
                    }
                })
                await tx.friend.delete({
                    where: {
                        id_from_id_to: {
                            id_from: id_to,
                            id_to: id_from
                        }
                    }
                })
                return true


            }

            catch (e) {

                this.logger.warn(e);
                return false;
            }
        })
        return res;

    }

    // Tested
    // return true if success, false if failed(e.g. already followed)
    async followUser(id_from: string, id_to: string): Promise<boolean> {
        try {
            await this.pgClient.follow.create({
                data: {
                    id_from: id_from,
                    id_to: id_to
                }
            })


            return true;
        } catch (e) {
            this.logger.verbose(e);
            return false;
        }
    }

    // Tested
    // return true if success, false if failed(e.g. already unfollowed)
    async unfollowUser(id_from: string, id_to: string): Promise<boolean> {
        try {
            await this.pgClient.follow.delete({
                where: {
                    id_from_id_to: {
                        id_from: id_from,
                        id_to: id_to
                    }
                }
            })
            return true;
        } catch (e) {
            this.logger.verbose(e);
            return false;
        }
    }

    // Tested
    // return userId if success, undefined if failed(e.g. violation of unique constraint)
    async createUser(createUserInput: createUserDto): Promise<string | undefined> {
        const res = await this.pgClient.$transaction(async (tx_pg) => {

           


            try {
                const user = await tx_pg.user.create({
                    data: {
                        email: createUserInput.email,
                        password: createUserInput.password,
                        role: createUserInput.role,    
                    }
                    
                })
                await tx_pg.profile.create({
                    data:{
                        name: createUserInput.name??user.id,
                        user:{
                            connect:{
                                id: user.id
                            }
                        },
                        customId: user.id,
                        gender: createUserInput.gender??"Prefer not to say",
                       
                    }
                
                })

                await this.mongoClient.user.create({
                    data: {
                        id: user.id,
                        notificationCenter: {
                            create: {
                                notifications: []
                            }
                        },
                        
                    }
                })
                return user.id;

            } catch (e) {
                this.logger.warn(e);
               

                return undefined
            }

        })
        return res;
    }


    //Tested
    // return postId if success, undefined if failed
    async addPost(post: MongoPrisma.PostCreateInput): Promise<string | undefined> {
        try {
            const postRecord = await this.mongoClient.post.create({
                data: post
            })
            return postRecord.id;
        } catch (e) {
            this.logger.warn(e);
            return undefined
        }
    }


    //Tested
    // return true if success, false if failed
    async updatePostStatus(postId: string, status: "DRAFT" | "UNDER_REVIEW" | "PUBLISHED" | "HIDDEN"): Promise<boolean> {
        try {
            await this.mongoClient.post.update({
                where: {
                    id: postId
                },
                data: {
                    status: status
                }
            })
            return true;
        } catch (e) {
            this.logger.verbose(e);
            return false;
        }
    }



    // Tested
    // return like-Table Id if success, undefined if failed
    async likePost(userId: string, postId: string): Promise<string | undefined> {
        try {
            const likeRecord = await this.mongoClient.likeTable.create({
                data: {
                    userId: userId,
                    postId: postId
                }
            })


            return likeRecord.id;
        } catch (e) {
            this.logger.verbose(e);
            return undefined;
        }
    }


    // Tested
    // return true if success, false if failed
    async unlikePost(userId: string, postId: string): Promise<boolean> {
        try {
            await this.mongoClient.likeTable.delete({
                where: {
                    postId_userId: {
                        postId: postId,
                        userId: userId
                    }
                }
            })
            return true;
        } catch (e) {
            this.logger.verbose(e);
            return false;
        }
    }

    // Tested
    // return replyId if success, undefined if failed
    async addReply(reply: MongoPrisma.ReplyCreateInput): Promise<string | undefined> {
        try {
            const replyRecord = await this.mongoClient.reply.create({
                data: reply
            })
            return replyRecord.id;
        } catch (e) {
            this.logger.verbose(e);
            return undefined;
        }
    }

    // Tested
    async removeReply(replyId: string): Promise<boolean> {
        try {
            await this.mongoClient.reply.delete({
                where: {
                    id: replyId
                }
            })
            return true;
        } catch (e) {
            this.logger.verbose(e);
            return false;
        }
    }


    // return userId if success, undefined if failed
    async updateProfile(profile: PgPrisma.ProfileCreateInput): Promise<string | undefined> {
        try {
            const profileRecord = await this.pgClient.profile.create({
                data: profile
            })
            return profileRecord.userId;
        } catch (e) {
            this.logger.verbose(e);
            return undefined;
        }
    }

    private async aux_hide_all_posts(tx: PTX<"mongo">, id: string): Promise<boolean> {
        try {
            await tx.post.updateMany({
                data: {
                    status: "HIDDEN"
                },
                where: {
                    authorId: id
                }
            })
            return true;
        } catch (e) {
            this.logger.verbose(e);
            return false;
        }

    }



    private async aux_dump_follow_relation(tx: PTX<"pg">, id: string): Promise<boolean> {
        try {
            await tx.follow.deleteMany({
                where: {
                    OR: [
                        {
                            id_from: id
                        },
                        {
                            id_to: id
                        }
                    ]
                }
            })
            return true;
        } catch (e) {
            this.logger.verbose(e);
            return false;
        }
    }

    private async aux_dump_friend_relation(tx: PTX<"pg">, id: string): Promise<boolean> {
        try {
            await tx.friend.deleteMany({
                where: {
                    OR: [
                        {
                            id_from: id
                        },
                        {
                            id_to: id
                        }
                    ]
                }
            })
            return true;
        } catch (e) {
            this.logger.verbose(e);
            return false;
        }
    }

    private async aux_dump_profile(tx: PTX<"pg">, id: string): Promise<boolean> {
        try {
            await tx.profile.delete({
                where: {
                    userId: id
                }
            })
            return true;
        } catch (e) {
            this.logger.verbose(e);
            return false;
        }
    }

    private async aux_dump_post(tx: PTX<"mongo">, id: string): Promise<boolean> {
        try {
            await tx.post.deleteMany({
                where: {
                    authorId: id
                }
            })
            return true;
        } catch (e) {
            this.logger.verbose(e);
            return false;
        }
    }


    private async aux_dump_like(tx: PTX<"mongo">, id: string): Promise<boolean> {
        try {
            await tx.likeTable.deleteMany({
                where: {
                    userId: id
                }
            })
            return true;
        } catch (e) {
            this.logger.verbose(e);
            return false;
        }
    }

    private async aux_dump_reply(tx: PTX<"mongo">, id: string): Promise<boolean> {
        try {
            await tx.reply.deleteMany({
                where: {
                    fromId: id
                }
            })
            return true;
        } catch (e) {
            this.logger.verbose(e);
            return false;
        }
    }

    private async aux_dump_ncenter(tx: PTX<"mongo">, id: string): Promise<boolean> {
        try {
            await tx.notificationCenter.delete({
                where: {
                    userId: id
                }
            })
            return true;
        } catch (e) {
            this.logger.verbose(e);
            return false;
        }
    }

    private async aux_dump_user_pg(tx: PTX<"pg">, id: string): Promise<boolean> {
        try {
            await tx.user.delete({
                where: {
                    id: id
                }
            })
            return true;
        } catch (e) {
            this.logger.verbose(e);
            return false;
        }
    }

    private async aux_dump_user_mongo(tx: PTX<"mongo">, id: string): Promise<boolean> {
        try {
            await tx.user.delete({
                where: {
                    id: id
                }
            })
            return true;
        } catch (e) {
            this.logger.verbose(e);
            return false;
        }
    }



    // Eradicate a user from the database, including all related data
    async deleteUser_notsafe_cascade(email: string): Promise<boolean> {

        const res = await this.pgClient.$transaction(async (tx_pg: PTX<"pg">) => {
            try {

                const user = await tx_pg.user.findUnique({
                    where: {
                        email: email
                    }
                })
                if (!user) {
                    return false;
                } else {
                    const id = user.id;
                    await this.aux_dump_follow_relation(tx_pg, id);
                    await this.aux_dump_friend_relation(tx_pg, id);
                    await this.aux_dump_profile(tx_pg, id);
                    await this.mongoClient.$transaction(async (tx_mongo: PTX<"mongo">) => {
                        await this.aux_dump_post(tx_mongo, id);
                        await this.aux_dump_like(tx_mongo, id);
                        await this.aux_dump_reply(tx_mongo, id);
                        await this.aux_dump_ncenter(tx_mongo, id);
                        await this.aux_dump_user_mongo(tx_mongo, id);
                    });
                    await this.aux_dump_user_pg(tx_pg, id);

                    return true;
                }

            } catch (e) {
                this.logger.verbose(e);

                return true;
            }
        })
        return res;
    }



    private async aux_nullify_follow_relation(tx: PTX<"pg">, id: string): Promise<boolean> {
        const void_uid = process.env.VOID_USER_ID;
        try {
            await tx.follow.updateMany({
                data: {
                    id_from: void_uid
                },
                where: {
                    id_from: id
                }
            }
            );
            await tx.follow.updateMany({
                data: {
                    id_to: void_uid
                },
                where: {
                    id_to: id
                }
            }
            );
            return true;


        }
        catch (e) {
            this.logger.verbose(e);
            return false;
        }
    }

    private async aux_nullify_friend_relation(tx: PTX<"pg">, id: string): Promise<boolean> {
        const void_uid = process.env.VOID_USER_ID;
        try {
            await tx.friend.updateMany({
                data: {
                    id_from: void_uid
                },
                where: {
                    id_from: id
                }
            }
            );
            await tx.friend.updateMany({
                data: {
                    id_to: void_uid
                },
                where: {
                    id_to: id
                }
            }
            );
            return true;
        } catch (e) {
            this.logger.verbose(e);
            return false;
        }
    }

    private async aux_nullify_profile(tx: PTX<"pg">, id: string): Promise<boolean> {
        try {
            await tx.profile.update({
                data: {
                    userId: process.env.VOID_USER_ID
                },
                where: {
                    userId: id
                }
            });
            return true;
        } catch (e) {
            this.logger.verbose(e);
            return false;
        }
    }

    private async aux_nullify_post(tx: PTX<"mongo">, id: string): Promise<boolean> {
        try {
            await tx.post.updateMany({
                data: {
                    authorId: process.env.VOID_USER_ID
                },
                where: {
                    authorId: id
                }
            });
            return true;
        } catch (e) {
            this.logger.verbose(e);
            return false;
        }
    }

    private async aux_nullify_like(tx: PTX<"mongo">, id: string): Promise<boolean> {
        try {
            await tx.likeTable.updateMany({
                data: {
                    userId: process.env.VOID_USER_ID
                },
                where: {
                    userId: id
                }
            });
            return true;
        } catch (e) {
            this.logger.verbose(e);
            return false;
        }
    }

    private async aux_nullify_reply(tx: PTX<"mongo">, id: string): Promise<boolean> {
        try {
            await tx.reply.updateMany({
                data: {
                    fromId: process.env.VOID_USER_ID
                },
                where: {
                    fromId: id
                }
            });
            return true;
        } catch (e) {
            this.logger.verbose(e);
            return false;
        }
    }



    // delete the user record and redirect all related records to void user
    async deleteUser_notsafe_nullify(email: string): Promise<boolean> {
        const res = await this.pgClient.$transaction(async (tx_pg: PTX<"pg">) => {
            try {

                const user = await tx_pg.user.findUnique({
                    where: {
                        email: email
                    }
                })
                if (!user) {
                    return false;
                } else {
                    const id = user.id;
                    await this.aux_nullify_follow_relation(tx_pg, id);
                    await this.aux_nullify_friend_relation(tx_pg, id);
                    await this.aux_nullify_profile(tx_pg, id);
                    await this.aux_dump_user_pg(tx_pg, id);

                    await this.mongoClient.$transaction(async (tx_mongo: PTX<"mongo">) => {
                        await this.aux_hide_all_posts(tx_mongo, id);
                        await this.aux_nullify_post(tx_mongo, id);
                        await this.aux_nullify_like(tx_mongo, id);
                        await this.aux_nullify_reply(tx_mongo, id);
                        await this.aux_dump_user_mongo(tx_mongo, id);
                    });
                    return true;
                }

            }
            catch (e) {
                this.logger.verbose(e);
                return false;
            }

        })

        return res;
    }


    // restrict the user from login and hide all posts
    async deleteUser_setdisabled(email: string): Promise<boolean> {
        const res = await this.pgClient.$transaction(async (tx_pg) => {
            const user = await tx_pg.user.findUnique({
                where: {
                    email: email
                }
            })

            if (!user) {
                return false;
            } else {
                await tx_pg.user.update({
                    data: {
                        role: "DISABLED"
                    },
                    where: {
                        id: user.id
                    }
                })
                await this.mongoClient.$transaction(async (tx_mongo: PTX<"mongo">) => { this.aux_hide_all_posts(tx_mongo, user.id) });
                return true;
            }

        })
        return res;
    }

}
