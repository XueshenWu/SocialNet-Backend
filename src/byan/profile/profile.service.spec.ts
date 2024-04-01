import { Test, TestingModule } from '@nestjs/testing';
import { ProfileService } from './profile.service';
import { DbUserService } from '../../xueshen/db/user/db_user.service';
import { User, Profile } from "@prisma/pg";
import UpdateProfileDto from 'src/xueshen/dto/updateProfileDto';

describe('ProfileService', () => {
  let service: ProfileService;
  let fakeDbUserService: Partial<DbUserService>;

  beforeEach(async () => {
    // Create a fake copy of the DbUserService
    const userProfiles: Profile[] = [];
    const users: User[] = [];

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

    const user1 = {
      id : "u1",
      email: "u1@gmail.com",
      password: "u1u1"
    } as User;

    const user2 = {
      id : "u2",
      email: "u2@gmail.com",
      password: "u2u2"
    } as User;

    const user3 = {
      id : "u3",
      email: "u3@gmail.com",
      password: "u3u3"
    } as User;

    users.push(user1);
    users.push(user2);
    users.push(user3);

    fakeDbUserService = {
      query_profile_by_user_id: (userId: string): Promise<Profile | null> =>  {
        const filteredUserProfile = userProfiles.filter((profile) => profile.userId === userId);
        if (!filteredUserProfile) {
          return Promise.resolve(null);
        } else {
          return Promise.resolve(filteredUserProfile[0]);
        }
      },
      updateProfile: (updateProfileDto: UpdateProfileDto): Promise<false> => {
        return Promise.resolve(false);
      },
      query_user_by_email: (email: string): Promise<User | null> => {
        const filteredUser = users.filter((user) => user.email === email);
        if (!filteredUser) {
          return Promise.resolve(null);
        } else {
          return Promise.resolve(filteredUser[0]);
        }
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

  it('return corresponding user if an existing email given', async () => {
    const returnedUser = await service.getUserByEmail('u1@gmail.com');
    expect(service).toBeDefined();
    expect(returnedUser.id).toEqual('u1');
  });

  it('return undefined if an non-existing email given', async () => {
    const returnedUser = await service.getUserByEmail('upp@gmail.com');
    expect(service).toBeDefined();
    expect(returnedUser).toEqual(undefined);
  });
});
