import { Test, TestingModule } from '@nestjs/testing';
import { MqService } from './mq.service';
import  CreateReviewPostDto  from "../dto/createReviewPostDto";

describe('MqService', () => {
  let service: MqService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MqService],
    }).compile();

    service = module.get<MqService>(MqService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });


  it("should send a review", async ()=>{
    const createReviewPostDto = new CreateReviewPostDto(2);
    await service.init();
    const res = service.send_review(createReviewPostDto);
    expect(res).toBe(true);
  })

  afterAll(async ()=>await service.close())

});
