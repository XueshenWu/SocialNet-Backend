import { Injectable } from "@nestjs/common";
import { ConnectionService } from "./connection.service";
import { Post } from "@prisma/mongo";
import { Prisma as MongoPrisma } from "@prisma/mongo";
import { Logger } from "@nestjs/common";
import CreatePostDto from "../dto/createPostDto";
import CreateReplyDto from "../dto/createReplyDto";



@Injectable()
export class DbPostService {

    private readonly logger = new Logger();


    constructor(private readonly connectionService: ConnectionService){

    }

    async query_post_by_id(id: string): Promise<Post | undefined> {
        const res =  await this.connectionService.mongoClient.post.findUnique({
            where: {
                id: id
            }
        })
        return res??undefined;
    }


    async addPost(post: CreatePostDto): Promise<string | undefined> {
        try {
            const postRecord = await this.connectionService.mongoClient.post.create({
                data: {
                    ...post.getNoneEmptyData()
                }
            })
            return postRecord.id;
        } catch (e) {
            this.logger.warn(e);
            return undefined
        }
    }

    async updatePostStatus(postId: string, status: "DRAFT" | "UNDER_REVIEW" | "PUBLISHED" | "HIDDEN"): Promise<boolean> {
        try {
            await this.connectionService.mongoClient.post.update({
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

    async likePost(userId: string, postId: string): Promise<string | undefined> {
        try {
            const likeRecord = await this.connectionService.mongoClient.likeTable.create({
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

    async unlikePost(userId: string, postId: string): Promise<boolean> {
        try {
            await this.connectionService.mongoClient.likeTable.delete({
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
    async addReply(reply: CreateReplyDto): Promise<string | undefined> {
        try {
            // const res = await this.connectionService.mongoClient.$transaction(async (tx)=>{
            //     await tx.post.create({
            //         data: {
            //             ...reply.getNoneEmptyData()
            //         }
            //     })
            //     await tx.post.update({
            //         where: {
            //             id: reply.replyParentId
            //         },
            //         data: {
                      
            //         }
            //     })
            // })

            const replyRecord = await this.connectionService.mongoClient.post.create({
                data: {
                    ...reply.getNoneEmptyData()
                }
            })
            return replyRecord.id;
        } catch (e) {
            this.logger.verbose(e);
            return undefined;
        }
    }

    async removeReply(replyId: string): Promise<boolean> {
        try {
            await this.connectionService.mongoClient.post.update({
                where: {
                    id: replyId
                },
                data: {
                    status:"HIDDEN"
                }
            })
            return true;
        } catch (e) {
            this.logger.verbose(e);
            return false;
        }
    }

    //TODO: add repost apis



}