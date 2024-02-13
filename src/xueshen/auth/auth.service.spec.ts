import { Test, TestingModule } from '@nestjs/testing';
import { AuthService } from './auth.service';
import createUserDto from '../dto/createUserDto';
import * as jwt from 'jsonwebtoken'
import { DbService } from '../db/db.service';
const PSWD_SALT = "$2b$24$h/zcUE26srKAcEPqa4pFd."
describe('AuthService', () => {
    let service: AuthService;
    let dbService: DbService;

    beforeAll(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [AuthService, DbService],

        }).compile();

        service = module.get<AuthService>(AuthService);
        dbService = module.get<DbService>(DbService);
        dbService.resetDatabse_DANGEROUS();


    });

    afterAll(async () => {
        await dbService.resetDatabse_DANGEROUS();
    })

    it('should be defined', () => {
        expect(service).toBeDefined();
    });

    it("should return a valid token", async () => {


        const createUserDto: createUserDto = {
            name: "testauth",
            password: "test",
            email: "testauth@campass.com",
            role: "COMMON"
        }
        const res = await service.register(createUserDto);
   
        expect(res).toBe(true);
        const login_res: boolean = await service.login(createUserDto);

        expect(login_res).toBe(true);

    })

    it("should return undefined", async () => {
        const createUserDto: createUserDto = {
            name: "testauth_notexist",
            password: "test",
            email: "abc",
            role: "COMMON"
        }


    })
});
