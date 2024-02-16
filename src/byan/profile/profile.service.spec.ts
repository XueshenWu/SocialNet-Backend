import { Test, TestingModule } from '@nestjs/testing';
import { ProfileService } from './profile.service';
import { DbService } from 'src/xueshen/db/db.service';
import UpdateProfileDto from 'src/xueshen/dto/updateProfileDto';

describe('ProfileService', () => {
  let service: ProfileService;

  beforeEach(async () => {
    // Create a fake copy of the DbService
    const fakeDbService: Partial<DbService> = {
      updateProfile: (updateProfileDto: UpdateProfileDto) => 
        Promise.resolve(true),
    };

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ProfileService,
        {
          provide: DbService,
          useValue: fakeDbService,
        },
      ],
    }).compile();

    service = module.get<ProfileService>(ProfileService);
  });

  it('should be defined', async () => {
    expect(service).toBeDefined();
  });

  it('update the profile for the given user', async () => {
    const userProfileUpdated = await service.updateProfile({userId: "123", username: "John"} as UpdateProfileDto);
    expect(userProfileUpdated).toEqual(true);
  });
});
