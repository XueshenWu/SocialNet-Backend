import { Test, TestingModule } from '@nestjs/testing';
import { FserverService } from './fserver.service';

describe('FserverService', () => {
  let service: FserverService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FserverService],
    }).compile();

    service = module.get<FserverService>(FserverService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
