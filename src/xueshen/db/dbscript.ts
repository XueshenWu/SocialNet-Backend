import { PrismaClient as PgClient, Prisma as PgPrisma, User } from '@prisma/pg'
import { PrismaClient as MongoClient, Prisma as MongoPrisma, Post } from '@prisma/mongo';
import mockdata from '../../../mockdata';



const addRandomPost = async (userId: string, content: string, title: string, pg: PgClient, mongo: MongoClient) => {

    const postId = await pg.$transaction(async (tx) => {
        const user = await tx.user.findUnique({ where: { id: userId } })
        if (!user) {
            tx.user.create({
                data: {
                    id: userId,
                    email: `${userId}@a.com`,
                    role: "COMMON",
                    password: "password"
                }
            })
            mongo.user.create({
                data: {
                    id: userId,
                }
            })
        }

        const post = await mongo.post.create({
            data: {
                title: title,
                content: content,
                status: "UNDER_REVIEW",
                authorId: userId,
                
            }
        })

        return post.id;


    })

    return postId;
}


const addRandomParent = async (postIds:string[], mongoClient:MongoClient)=>{



    for(let i = 0; i<postIds.length; i++){

        const parentId = Math.floor(Math.random() * postIds.length);
        const op = Math.random() > 0.5;
        mongoClient.post.update({
            where:{
                id:postIds[i]
            },
            data:{
                replyParentId:op?postIds[parentId]:undefined,
                repostParentId:!op?postIds[parentId]:undefined
            }
        })
        console.log(`add post parent: ${i+1}/${postIds.length}`)
    }
}




const main = async () => {
    const pgClient = new PgClient();
    const mongoClient = new MongoClient();

    const postIds:string[] = []

    for (let i = 0; i < mockdata.length; i++) {
        const post = mockdata[i];
        const postId = await addRandomPost(""+i, post.content, post.title, pgClient, mongoClient)
        postIds.push(postId);
        console.log(`generate post: ${i+1}/${mockdata.length}`)
    }
    
    await addRandomParent(postIds, mongoClient);


}


main()