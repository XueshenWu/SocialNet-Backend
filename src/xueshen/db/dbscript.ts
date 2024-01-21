import { PrismaClient as PgClient } from '../../generated/pg'
import { PrismaClient as MongoClient } from '../../generated/mongo';


const pgClient = new PgClient();
const mongoClient = new MongoClient();


const main = async () => {
    const id = await pgClient.$transaction(async (tx) => {


   


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