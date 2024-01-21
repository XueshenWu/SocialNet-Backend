import { Test, TestingModule } from '@nestjs/testing';
import { AuthService } from './auth.service';
import createUserDto from '../dto/createUserDto';
import * as jwt from 'jsonwebtoken'
import { DbService } from '../db/db.service';

describe('AuthService', () => {
    let service: AuthService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [AuthService, DbService],

        }).compile();

        service = module.get<AuthService>(AuthService);
    });

    it('should be defined', () => {
        expect(service).toBeDefined();
    });

    // it("should return a valid token", async () => {


    //     const createUserDto: createUserDto = {
    //         name: "testauth",
    //         password: "test",
    //         email: "testauth@campass.com",
    //         role: "COMMON"
    //     }

    //     const token: string = await service.login(createUserDto);

    //     expect(token).toBeDefined();
    //     try {
    //         jwt.verify(token, process.env.JWT_SECRET)
    //     } catch (e) {
    //         fail("token is not valid")
    //     }
    // })

    // it("should return undefined", async () => {
    //     const createUserDto: createUserDto = {
    //         name: "testauth_notexist",
    //         password: "test",
    //         email: "abc",
    //         role: "COMMON"
    //     }

    //     const token: string = await service.login(createUserDto);

    //     expect(token).toBeUndefined();
    // })
});
