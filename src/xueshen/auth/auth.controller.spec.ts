import { Test, TestingModule } from '@nestjs/testing';
import { AuthController } from './auth.controller';

import { AuthService } from './auth.service';
import { DbUserService } from '../db/user/db_user.service';
import { ConnectionService } from '../db/connection/connection.service';
import { CreateUserDto } from '../dto/createUserDto';
import { mock, Mock } from 'node:test';
import {v4} from "uuid"

describe('AuthController', () => {
  let controller: AuthController;
  let service:AuthService;
  let dbUserService:DbUserService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AuthController],
        providers: [AuthService, DbUserService, ConnectionService]
    }).compile();

    controller = module.get<AuthController>(AuthController);
    service = module.get<AuthService>(AuthService)
    dbUserService = module.get<DbUserService>(DbUserService)
    
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should register user', async ()=>{
        const rn = v4().substring(0,8); 

        const res = await controller.register(new CreateUserDto('test3','123123',`${rn}@testauth.com`))
        expect(res.data).toBeTruthy()

  })
  it('should login user', async ()=>{
        const rn = v4().substring(0,8); 
        const res0 = await controller.register(new CreateUserDto('test4','123123',`${rn}@testauth.com`))
        expect(res0.data).toBe(true)
        
        const user = await dbUserService.query_user_by_email(`${rn}@testauth.com`)
        expect(user).toBeDefined()
        
       
        
        const res = await controller.login({
            identityType:'username',
            identity:`${rn}`,
            password:'123123'
        })
        expect(res).toBeDefined()
        let exception = false;
        try{
            const res2 = await controller.login({
                identityType:'username',
                identity:'abcawdd',
                password:'123123'
            })
        }catch(e){
            exception = true;
        }
        expect(exception).toBeTruthy()
      
        
  })

});
