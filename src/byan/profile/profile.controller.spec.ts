import { Test, TestingModule } from '@nestjs/testing';
import { ProfileController } from './profile.controller';
import { ProfileService } from './profile.service';
import { DbUserService } from '../../xueshen/db/user/db_user.service';
import { Profile, User } from "@prisma/pg";
import UpdateProfileDto from 'src/xueshen/dto/updateProfileDto';
import { NotFoundException } from '@nestjs/common';

describe('ProfileController', () => {
  let controller: ProfileController;
  let fakeProfileService: Partial<ProfileService>;
  let fakeDbUserService: Partial<DbUserService>;

  beforeEach(async () => {
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
      id : "1a",
      email: "u1@gmail.com",
      password: "u1u1"
    } as User;

    const user2 = {
      id : "2b",
      email: "u2@gmail.com",
      password: "u2u2"
    } as User;

    const user3 = {
      id : "3c",
      email: "u3@gmail.com",
      password: "u3u3"
    } as User;

    users.push(user1);
    users.push(user2);
    users.push(user3);


    // Create a fake copy of the fakeProfileService
    fakeProfileService = {
      getProfileByUserId: (userId: string) => {
        const filteredUserProfile = userProfiles.filter((profile) => profile.userId === userId);
        if (!filteredUserProfile) {
          return Promise.resolve(null);
        } else {
          return Promise.resolve(filteredUserProfile[0]);
        }
      },

      updateProfile: (updateProfileDto: UpdateProfileDto) =>  {
        return Promise.resolve(false);
      },

      getUserByEmail: (email: string) => {
        const filteredUser = users.filter((user) => user.email === email);
        if (!filteredUser) {
          return Promise.resolve(null);
        } else {
          return Promise.resolve(filteredUser[0]);
        }
      },

    }

    // Create a fake copy of the DbUserService
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
      controllers: [ProfileController],
      providers: [
        {
          provide: ProfileService,
          useValue: fakeProfileService,
        },
        {
          provide: DbUserService,
          useValue: fakeDbUserService,
        }
      ],
    }).compile();

    controller = module.get<ProfileController>(ProfileController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('return corresponding profile if an existing userId given', async () => {
    // const result = await controller.getProfileByUserId({
    //   userId: '1a',
    //   fullname: 'Amy Green',
    //   avatar: '1.jpg',
    //   bio: 'power girl',
    //   interests: [],
    //   tags: [],
    //   gender: '',
    //   getNoneEmptyData: () => {
    //     throw new Error('Function not implemented.');
    //   }} as UpdateProfileDto);

    const result = await controller.getProfileByUserId('1a');

    expect(result.data.profile.userId).toEqual('1a');
  });
  

  it('return corresponding err message if an non-existing userId given', async () => {
    // await expect(
    //   controller.getProfileByUserId({
    //     userId: 'ww',
    //     fullname: 'ww Orange',
    //     avatar: '8.jpg',
    //     bio: 'nonsense',
    //     interests: [],
    //     tags: [],
    //     gender: '',
    //     getNoneEmptyData: () => {
    //       throw new Error('Function not implemented.');
    //     }} as UpdateProfileDto),
    // ).rejects.toThrow(NotFoundException);

    // const result = await controller.getProfileByUserId({
    //   userId: 'ww',
    //   fullname: 'ww Orange',
    //   avatar: '8.jpg',
    //   bio: 'nonsense',
    //   interests: [],
    //   tags: [],
    //   gender: '',
    //   getNoneEmptyData: () => {
    //     throw new Error('Function not implemented.');
    //   }} as UpdateProfileDto);

    const result = await controller.getProfileByUserId('ww');
    
    expect(result).toEqual({
      data:{},
      error: {
        message: "user not found"
      }
    });
  });

  it('return err message when getProfileByUserId but catching err', async () => {
    const err = new Error('Database error');

    jest.spyOn(fakeProfileService, 'getProfileByUserId').mockRejectedValue(new Error("Database error"));

    // const err1Result = await controller.getProfileByUserId({
    //   userId: 'err1',
    //   fullname: 'err1',
    //   avatar: 'err1.jpg',
    //   bio: 'err1',
    //   interests: [],
    //   tags: [],
    //   gender: '',
    //   getNoneEmptyData: () => {
    //     throw new Error('Function not implemented.');
    //   }} as UpdateProfileDto);

    const err1Result = await controller.getProfileByUserId("err1");

    expect(err1Result.error.message).toEqual("Database error");
  });

  // it('throw NotFoundException if an non-existing userId given_case 2', async () => {
  //   await expect(
  //     controller.getProfileByUserId({
  //       userId: 'm2m',
  //       fullname: 'm2m Black',
  //       avatar: '8updated.jpg',
  //       bio: 'nonsense',
  //       interests: [],
  //       tags: [],
  //       gender: '',
  //       getNoneEmptyData: () => {
  //         throw new Error('Function not implemented.');
  //       }} as UpdateProfileDto),
  //   ).rejects.toThrow(NotFoundException);
  // });

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

    fakeProfileService.updateProfile = (updateProfileDto: UpdateProfileDto) =>  {
        userProfilesNew[2].avatar = '3updated.jpg';
        userProfilesNew[2].bio = 'shero Updated';
        return Promise.resolve(false)
      };

    const userProfileUpdated = await controller.updateProfile({
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
    expect(userProfileUpdated.error).toEqual({});
  });

  it('update the profile but catching error', async () => {
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

    fakeProfileService.updateProfile = (updateProfileDto: UpdateProfileDto) =>  {
        userProfilesNew[2].avatar = '3updated.jpg';
        userProfilesNew[2].bio = 'shero Updated';
        return Promise.resolve(false)
      };

    jest.spyOn(fakeProfileService, 'updateProfile').mockRejectedValue(new Error("Database error"));

    const userProfileUpdated = await controller.updateProfile({
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
    expect(userProfilesNew[2].avatar).toEqual('3.jpg');
    expect(userProfilesNew[2].bio).toEqual('shero');
    expect(userProfileUpdated.error.message).toEqual("Database error");
  });

  it('return corresponding profile if an existing email given', async () => {

    const result = await controller.getProfileByEmail('u1@gmail.com');

    expect(result.data.profile.userId).toEqual('1a');
  });

  it('return corresponding err message if an non-existing email given', async () => {
    const result = await controller.getProfileByEmail('ww@gmail.com');
    
    expect(result).toEqual({
      data:{},
      error: {
        message: "user not found"
      }
    });
  });

  it('return err message when getProfileByEmail but catching err', async () => {
    const err = new Error('Database error');

    jest.spyOn(fakeProfileService, 'getUserByEmail').mockRejectedValue(new Error("Database error"));

    const err1Result = await controller.getProfileByEmail("err1");

    expect(err1Result.error.message).toEqual("Database error");
  });
});
