import { PrismaClient as PgClient } from './src/generated/pg'
import { PrismaClient as MongoClient } from './src/generated/mongo';


const pgClient = new PgClient();
const mongoClient = new MongoClient();


const main = async () => {
    const id = await pgClient.$transaction(async (tx) => {
        const user = await tx.user.create({
            data: {
                name: "Xueshen",
                email: "wuxueshen01@gmai.com",
                password: "123456",
                role: "ADMIN",
                profile: {
                    create: {
                        bio: "I am a software engineer",
                        avatar: "None",
                        interests: ["coding", "reading", "music"],

                    }
                }
            }
        })

        await mongoClient.user.create({
            data: {
                id: user.id
            }
        })

        return user.id;
    })

    const post = await mongoClient.post.create({
        data:{
            title:"Hello",
            content:"World",
            owner:{
                connect:{
                    id:id
                }
            },
            author:{
                connect:{
                    id:id
                }
            }
        }
    })

    const id2 = await pgClient.$transaction(async (tx)=>{
        const user = await tx.user.create({
            data:{
                name:"Shenshen",
                email:"shenshen01@gmail.com",
                password:"123456",
                role:"COMMON"
            }
        });

        await mongoClient.user.create({
            data:{
                id:user.id
            }
        });
        return user.id;
    })

    

    await mongoClient.likeTable.create({
        data:{
            post:{
                connect:{
                    id:post.id
                }
            },
            user:{
                connect:{
                    id:id2
                }
            }
        }
    
    })

    await mongoClient.post.create({
        data:{
            title:post.title,
            content:post.content,
            media:post?.media,
            owner:{
                connect:{
                    id:id2
                }
            },
            author:{
                connect:{
                    id:post.authorId
                }
            }
        }
    })





}


main().then(async () => {
    await pgClient.$disconnect();
    await mongoClient.$disconnect();
    process.exit(0);
}).catch(async (e) => {

    await pgClient.$disconnect();
    await mongoClient.$disconnect();
    console.log(e);
    process.exit(1);
}
);