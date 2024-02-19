import { Test, TestingModule } from '@nestjs/testing';
import { ProfileService } from './profile.service';
import { DbUserService } from '../../xueshen/db/user/db_user.service';
import { Profile } from "@prisma/pg";
import UpdateProfileDto from 'src/xueshen/dto/updateProfileDto';

describe('ProfileService', () => {
  let service: ProfileService;
  let fakeDbUserService: Partial<DbUserService>;

  beforeEach(async () => {
    // Create a fake copy of the DbUserService
    const userProfiles: Profile[] = [];

    const profile1 = {
      userId : "1a",
      username: "Amy",
      fullname: 'Amy Green',
      avatar: '1.jpg',
      bio: 'power girl'
    } as Profile;

    const profile2 = {
      userId : "2b",
      username: "Bobby",
      fullname: 'Bobby White',
      avatar: '2.jpg',
      bio: 'super man'
    } as Profile;

    const profile3 = {
      userId : "3c",
      username: "Cindy",
      fullname: 'Cindy Black',
      avatar: '3.jpg',
      bio: 'shero'
    } as Profile;

    userProfiles.push(profile1);
    userProfiles.push(profile2);
    userProfiles.push(profile3);

    fakeDbUserService = {
      query_profile_by_user_id: (userId: string) =>  {
        const filteredUserProfile = userProfiles.filter((profile) => profile.userId === userId);
        if (!filteredUserProfile) {
          return Promise.resolve(null);
        } else {
          return Promise.resolve(filteredUserProfile[0]);
        }
      },
      updateProfile: (updateProfileDto: UpdateProfileDto) =>  {
        return Promise.resolve(false)
      }
    };

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ProfileService,
        {
          provide: DbUserService,
          useValue: fakeDbUserService,
        },
        
      ],
    }).compile();

    service = module.get<ProfileService>(ProfileService);
  });

  it('should be defined', async () => {
    expect(service).toBeDefined();
  });

  it('return corresponding profile if an existing userId given', async () => {
    const profile = await service.getProfileByUserId('1a');
    expect(service).toBeDefined();
    expect(profile.userId).toEqual('1a');
  });

  it('return undefined if an non-existing userId given', async () => {
    const profile = await service.getProfileByUserId('ww');
    expect(service).toBeDefined();
    expect(profile).toEqual(undefined);
  });

  it('update the profile for the given user', async () => {
    const userProfilesNew: Profile[] = [];

    const profile1New = {
      userId : "1a",
      username: "Amy",
      fullname: 'Amy Green',
      avatar: '1.jpg',
      bio: 'power girl'
    } as Profile;

    const profile2New = {
      userId : "2b",
      username: "Bobby",
      fullname: 'Bobby White',
      avatar: '2.jpg',
      bio: 'super man'
    } as Profile;

    const profile3New = {
      userId : "3c",
      username: "Cindy",
      fullname: 'Cindy Black',
      avatar: '3.jpg',
      bio: 'shero'
    } as Profile;

    userProfilesNew.push(profile1New);
    userProfilesNew.push(profile2New);
    userProfilesNew.push(profile3New);

    fakeDbUserService.updateProfile = (updateProfileDto: UpdateProfileDto) =>  {
        // const profile3Updated = {
        //   userId : "3c",
        //   username: "Cindy",
        //   fullname: 'Cindy Black',
        //   avatar: '3updated.jpg',
        //   bio: 'shero Updated'
        // } as Profile;
        userProfilesNew[2].avatar = '3updated.jpg';
        userProfilesNew[2].bio = 'shero Updated';
        return Promise.resolve(false)
      };

    const userProfileUpdated = await service.updateProfile({
      userId: '3c',
      fullname: 'Cindy Black',
      avatar: '3updated.jpg',
      bio: 'shero Updated',
      interests: [],
      tags: [],
      gender: '',
      getNoneEmptyData: () => {
        throw new Error('Function not implemented.');
      }} as UpdateProfileDto);
    expect(userProfilesNew[2].avatar).toEqual('3updated.jpg');
    expect(userProfilesNew[2].bio).toEqual('shero Updated');
    expect(userProfileUpdated).toEqual(false);
  });
});
