import { Injectable } from "@nestjs/common";
import { ConnectionService } from "../connection/connection.service";
import { Post } from "@prisma/mongo";
import { Logger } from "@nestjs/common";
import CreatePostDto from "../../dto/createPostDto";
import CreateReplyDto from "../../dto/createReplyDto";
import CreateRepostDto from "../../dto/createRepostDto";
import { Profile } from "@prisma/pg"
import type { Post_Author } from "src/xueshen/types/post-t";



@Injectable()
export class DbPostService {

    private readonly logger = new Logger();


    constructor(private readonly connectionService: ConnectionService) {

    }


    async query_likes(postId: string) {
        const likes: string[] = (await this.connectionService.mongoClient.likeTable.findMany({
            where: {
                postId: postId
            },
            select: {
                userId: true
            }
        })).map(record => record.userId)
        return likes;
    }

    async getRepliesByPostId(postId: string): Promise<Post[]> {
        try {
            const post = await this.connectionService.mongoClient.post.findUnique({
                where: {
                    id: postId
                }
            })

            if (post === null || post.status !== "PUBLISHED") {
                return [];
            }

            const repliy_ids = post.replies;

            const replies = await this.connectionService.mongoClient.post.findMany({
                where: {
                    id: {
                        in: repliy_ids
                    }
                }
            })

            return replies.filter((reply) => reply.status === "PUBLISHED");
        } catch (e) {
            this.logger.verbose(e);
            return [];
        }
    }


    async query_replies_by_post_id(postid: string) {
        const post = (await this.connectionService.mongoClient.post.findFirst({
            where: {
                id: postid
            }
        }));
        const replies_id = post.replies

        const posts = new Array<Post_Author>()
        for(const replie_id of replies_id){
            const reply = await this.query_post_by_post_id(replie_id);
            const profile = await this.connectionService.pgClient.profile.findUnique({
                where:{
                    userId:reply.authorId
                }
            })
            posts.push({
                ...reply, author: profile
            })
        }
        // const posts = replies_id.map(async reply_id => await this.query_post_by_post_id(reply_id))
        return posts
    }

    async query_posts_by_user_id(id: string): Promise<Post_Author[]> {
        const posts = await this.connectionService.mongoClient.post.findMany({
            where: {
                authorId: id
            }
        })
        const profile = await this.connectionService.pgClient.profile.findUnique({
            where: {
                userId: id
            }
        })
        return posts.map(post => ({ ...post, author: profile }))
    }


    async query_replies_by_user_id(userId: string): Promise<Post_Author[]> {
        const replies = await this.connectionService.mongoClient.post.findMany({
            where: {
                authorId: userId,
                replyParentId: {
                    not: null,

                }
            }
        })

        console.log(replies)

        const profile = await this.connectionService.pgClient.profile.findUnique({
            where: {
                userId: userId
            }
        })

        return replies.map((reply) => ({ ...reply, author: profile }))

    }


    async query_origin_posts_by_user_id(id: string): Promise<Post[]> {
        try {
            const posts = await this.connectionService.mongoClient.post.findMany({
                where: {
                    authorId: id,
                    repostParentId: null
                }
            })
            return posts;
        } catch (e) {
            this.logger.verbose(e);
            return [];
        }
    }

    async query_reposted_posts_by_user_id(id: string): Promise<Post_Author[]> {
        try {
            const posts = await this.connectionService.mongoClient.post.findMany({
                where: {
                    authorId: id,
                    repostParentId: {
                        not: null
                    }
                }
            })
            const profile = await this.connectionService.pgClient.profile.findUnique({
                where: {
                    userId: id
                }
            })
            return posts.map(post => ({ ...post, author: profile }))
        } catch (e) {
            this.logger.verbose(e);
            return [];
        }
    }


    //tested
    async addPost(post: CreatePostDto, replyParentId?: string, repostParentId?: string): Promise<string | undefined> {
        try {


            const user = await this.connectionService.mongoClient.user.findUnique({
                where: {
                    id: post.authorId
                }
            })

            if (user === null) {
                return undefined;
            }
            const data = {
                ...post.getNoneEmptyData(),
                replyParentId: replyParentId,
                repostParentId: repostParentId
            }

            const postRecord = await this.connectionService.mongoClient.post.create({
                data
            })

            await this.connectionService.mongoClient.user.update({
                data: {
                    posts: {
                        push: postRecord.id
                    }
                },
                where: {
                    id: post.authorId
                }
            })
            return postRecord.id;
        } catch (e) {
            console.log(e)
            this.logger.warn(e);
            return undefined
        }
    }

    async query_liked_posts_by_user_id(id: string): Promise<String[]> {
        try {
            const id_posts = await this.connectionService.mongoClient.likeTable.findMany({
                where: {
                    userId: id
                }
            })
            return id_posts.map((x) => x.postId);
        } catch (e) {
            this.logger.verbose(e);
            return [];
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

            const post = await this.connectionService.mongoClient.post.findUnique({
                where: {
                    id: postId
                }
            })
            if (post === null || post.status !== "PUBLISHED") {
                return undefined;
            }


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

            const post = await this.connectionService.mongoClient.post.findUnique({
                where: {
                    id: postId
                }
            })
            if (post === null || post.status !== "PUBLISHED") {
                return false;
            }


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


    //tested
    async addReply(reply: CreateReplyDto): Promise<string | undefined> {
        try {
            const id = await this.connectionService.mongoClient.$transaction(async (tx) => {

                const originPost = await tx.post.findUnique({
                    where: {
                        id: reply.replyParentId
                    }
                })
                if (originPost === null || originPost.status !== "PUBLISHED") {
                    return undefined;
                }

                const id = await this.addPost(new CreatePostDto(reply.content, reply.authorId, reply.media, reply.content, "PUBLISHED"), reply.replyParentId, undefined)
                if (id === undefined) {
                    return undefined;
                }
                await tx.post.update({
                    where: {
                        id: reply.replyParentId
                    },
                    data: {
                        replies: {
                            push: id
                        }
                    }
                })
                return id;
            })


            return id;
        } catch (e) {
            console.log(e)
            this.logger.verbose(e);
            return undefined;
        }
    }


    //hide a post/reply
    async hidePost(postId: string): Promise<boolean> {
        try {
            await this.connectionService.mongoClient.post.update({
                where: {
                    id: postId
                },
                data: {
                    status: "HIDDEN"
                }
            })
            return true;
        } catch (e) {
            this.logger.verbose(e);
            return false;
        }
    }


    async search_post_by_title(title: string): Promise<Post[]> {
        return this.connectionService.mongoClient.post.findMany({
            where: {
                title: {
                    contains: title
                }
            }
        })
    }

    async repost(createRepostDto: CreateRepostDto): Promise<string | undefined> {
        try {
            const id = await this.connectionService.mongoClient.$transaction(async (tx) => {
                const record = await tx.post.create({
                    data: {
                        ...createRepostDto.getNoneEmptyData()
                    }
                })
                await tx.post.update({
                    where: {
                        id: createRepostDto.repostParentId
                    },
                    data: {
                        reposts: {
                            push: createRepostDto.repostParentId
                        }
                    }
                })
                return record.id;
            })
            return id;
        } catch (e) {
            this.logger.verbose(e);
            return undefined;
        }
    }



    // return undefined if not found
    async findPostByPostId(postId: string): Promise<Post | undefined> {
        try {
            const post = await this.connectionService.mongoClient.post.findUnique({
                where: {
                    id: postId
                }
            })
            return post ?? undefined;
        } catch (e) {
            this.logger.verbose(e);
            return undefined;
        }


    }


    async findPostsByUserId(userId: string): Promise<Post[]> {
        const res = await this.connectionService.mongoClient.post.findMany({
            where: {
                authorId: userId
            }
        })
        return res;
    }



    async query_post_by_post_id(postId: string): Promise<Post_Author | null> {

        const post = await this.connectionService.mongoClient.post.findUnique({
            where: {
                id: postId
            }
        })

        if (post === null) {
            return null;
        }
        const user = await this.connectionService.pgClient.profile.findUnique({
            where: {
                userId: post.authorId,

            }
        })

        let res: Post_Author = { ...post, author: user }
        return res;
    }

    async getPostIds(): Promise<string[]> {
        return (await this.connectionService.mongoClient.post.findMany({
            select: {
                id: true
            }

        })).map(record => record.id)
    }





}