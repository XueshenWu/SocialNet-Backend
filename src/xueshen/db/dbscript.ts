import { PrismaClient as PgClient } from '@prisma/pg'
import { PrismaClient as MongoClient } from '@prisma/mongo';


const pgClient = new PgClient();
const mongoClient = new MongoClient();


const main = async () => {
    const id1 = await pgClient.$transaction(async (tx) => {





        const user = await tx.user.create({
            data: {
                password: "void",
                email: "",
                role: "COMMON"
            }
        })

        await mongoClient.user.create({
            data: {
                id: user.id
            }
        })

        return user.id;
    })

    const id2 = await pgClient.$transaction(async (tx) => {
        const user = await tx.user.create({
            data: {
                password: "void",
                email: "",
                role: "COMMON"
            }
        })

        await mongoClient.user.create({
            data: {
                id: user.id
            }
        })

        return user.id;
        }
    )

    console.log(id1);
        console.log('----------------')
    console.log(id2);









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