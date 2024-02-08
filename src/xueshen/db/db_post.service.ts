import { Injectable } from "@nestjs/common";
import { ConnectionService } from "./connection.service";
import { Post } from "@prisma/mongo";
import { Prisma as MongoPrisma } from "@prisma/mongo";
import { Logger } from "@nestjs/common";



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


    async addPost(post: MongoPrisma.PostCreateInput): Promise<string | undefined> {
        try {
            const postRecord = await this.connectionService.mongoClient.post.create({
                data: post
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
    async addReply(reply: MongoPrisma.ReplyCreateInput): Promise<string | undefined> {
        try {
            const replyRecord = await this.connectionService.mongoClient.reply.create({
                data: reply
            })
            return replyRecord.id;
        } catch (e) {
            this.logger.verbose(e);
            return undefined;
        }
    }

    async removeReply(replyId: string): Promise<boolean> {
        try {
            await this.connectionService.mongoClient.reply.delete({
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




}