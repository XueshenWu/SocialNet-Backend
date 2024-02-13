import { PrismaClient as PgClient } from '@prisma/pg'
import { PrismaClient as MongoClient } from '@prisma/mongo';


const pgClient = new PgClient();
const mongoClient = new MongoClient();


const main = async () => {
    const user = await pgClient.user.findUnique({
        where:{
            id:"user2"
        }
    })


    console.log(JSON.stringify(user));





        





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