import { Test, TestingModule } from '@nestjs/testing';
import { AuthService } from './auth.service';

import * as jwt from 'jsonwebtoken'
import { DbUserService } from '../db/user/db_user.service';
import { CreateUserDto } from '../dto/createUserDto';
import LoginDto from '../dto/loginDto';
import { ConnectionService } from '../db/connection/connection.service';
import { v4 } from 'uuid';

const PSWD_SALT = "$2b$24$h/zcUE26srKAcEPqa4pFd."
describe('AuthService', () => {
    let service: AuthService;
    let dbUserService:DbUserService;


    beforeAll(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [AuthService, DbUserService, ConnectionService],

        }).compile();

        service = module.get<AuthService>(AuthService);
        dbUserService = module.get<DbUserService>(DbUserService)
    });


    it('should create a user', async ()=>{
        const rn = v4().substring(0,8)
      
        await service.register(new CreateUserDto('test1','123123',`${rn}@test.com`))
        const user = await dbUserService.query_user_by_email(`${rn}@test.com`)
        expect(user).toBeTruthy()
        

    })

    it("should return true if given correct password and userid", async ()=>{
        const rn = v4().substring(0,8)
       
        await service.register(new CreateUserDto('test1','123123',`${rn}@test.com`))
        const user = await dbUserService.query_user_by_email(`${rn}@test.com`)
        expect(user).toBeTruthy()
        

        const retval = await service.login({
            identity:`${rn}@test.com`,
            password:'123123',
            identityType:"email"
        })
       expect(retval.id).toBeDefined()
       

        const retval2 = await service.login({
            identity:"awdwa@ad.com",
            password:"123123123",
            identityType:"email"
        })
        expect(retval2).toBeNull()
    })

  
    
});
