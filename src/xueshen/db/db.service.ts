import { Injectable } from '@nestjs/common';
import { PrismaClient as PgClient, Prisma as PgPrisma, User } from '../../generated/pg/index'
import { PrismaClient as MongoClient } from '../../generated/mongo';

@Injectable()
export class DbService {
    private readonly pgClient = new PgClient();
    private readonly mongoClient = new MongoClient();


    async query_user_by_email(email: string): Promise<User | undefined> {
        return this.pgClient.user.findUnique({
            where: {
                email: email
            }
        })

    }


    async createUser(createUserInput:PgPrisma.UserCreateInput): Promise<boolean>{
        const res = await this.pgClient.$transaction(async (tx_pg)=>{
           
            try{
                await tx_pg.user.create({
                    data: createUserInput
                })
                await this.mongoClient.user.create({
                    data: {
                        id: createUserInput.id,
                    }
                })
                return true;
                
            }catch(e){
                console.error(e);
                return false;
            }
            
        })
        return res;
    }

}
