import { Test, TestingModule } from '@nestjs/testing';
import { FollowController } from './follow.controller';
import { FollowService } from './follow.service';
import { DbUserService } from '../../xueshen/db/user/db_user.service';
import { ConnectionService } from '../../xueshen/db/connection/connection.service';
import { NotFoundException } from '@nestjs/common';

describe('FollowController', () => {
  let controller: FollowController;
  let followService: FollowService;
  let dbUserService: DbUserService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FollowController],
      providers: [FollowService, DbUserService, ConnectionService],
    }).compile();

    controller = module.get<FollowController>(FollowController);
    followService = module.get<FollowService>(FollowService);
    dbUserService = module.get<DbUserService>(DbUserService);

  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  // 1. Follow Testing
  describe('followUser', () => {
    it('should follow a user successfully', async () => {
      const mockData = { userId: 'user1', followerId: 'user2' };
      jest.spyOn(followService, 'followUser').mockResolvedValue(true);
      const result = await controller.followUser(mockData);
      expect(result).toEqual({ status: 'SUCCESS' });
    });

    it('should handle failure to follow a user', async () => {
      const mockData = { userId: 'user1', followerId: 'user2' };
      jest.spyOn(followService, 'followUser').mockResolvedValue(false);
      const result = await controller.followUser(mockData);
      expect(result).toEqual({ status: 401 });
    });

    it('should handle invalid id when following a user', async () => {
      const mockData = { userId: '', followerId: 'user2' };
      const result = await controller.followUser(mockData);
      expect(result).toEqual({ status: 401 });
    });
  });

  // 2. Unfollow Testing
  describe('unfollowUser', () => {
    it('should unfollow a user successfully', async () => {
      const mockData = { userId: 'user1', followerId: 'user2' };
      jest.spyOn(followService, 'unfollowUser').mockResolvedValue(true);
      const result = await controller.unfollowUser(mockData);
      expect(result).toEqual({ status: 'SUCCESS' });
    });

    it('should handle failure to unfollow a user', async () => {
      const mockData = { userId: 'user1', followerId: 'user2' };
      jest.spyOn(followService, 'unfollowUser').mockResolvedValue(false);
      const result = await controller.unfollowUser(mockData);
      expect(result).toEqual({ status: 401 });
    });
  });

    // 3. Get Followers Testing
    describe('getFollowers', () => {
        it('should get followers list successfully and return followers with viewer', async () => {
            const mockData = { userId: 'user1', viewerId: 'user2' };
            const mockFollowers = ['user2', 'user3'];
            jest.spyOn(followService, 'getFollowers').mockResolvedValue(mockFollowers);
            jest.spyOn(dbUserService, 'isFollowing').mockResolvedValue(true);
            const result = await controller.getFollowers(mockData);
            expect(result).toEqual({ status: 'SUCCESS', data: mockFollowers.map(follower => ({
                    profile: dbUserService.query_profile_by_user_id(follower),
                    isFollowing: dbUserService.isFollowing(mockData.viewerId, follower)
            })),
                error: {message: 'User not found'}
            });
        });

        it('should get followers list successfully and return followers without viewer', async () => {
            const mockData = { userId: 'user1' };
            const mockFollowers = ['user2', 'user3'];
            jest.spyOn(followService, 'getFollowers').mockResolvedValue(mockFollowers);
            const result = await controller.getFollowers(mockData);
            expect(result).toEqual({ status: 'SUCCESS', data: mockFollowers.map(follower => ({
                    profile: dbUserService.query_profile_by_user_id(follower),
                    isFollowing: false
            })),
                error: {message: 'User not found'}
            });
        });

        it('should handle failure to get followers list', async () => {
            const mockData = { userId: 'user1' };
            jest.spyOn(followService, 'getFollowers').mockResolvedValue([]);
            const result = await controller.getFollowers(mockData);
            expect(result).toEqual({ status: 'SUCCESS', data: [], error: {message: 'User not found'} });
        });

        it('should handle invalid id when fetching followers', async () => {
            const mockData = { userId: '' };
            const result = await controller.getFollowers(mockData);
            expect(result).toEqual({ status: 401 });
        });
    });

    // 4. Get Following Testing
    describe('getFollowing', () => {
        it('should get following list successfully and return following with viewer', async () => {
            const mockData = { userId: 'user1', viewerId: 'user2' };
            const mockFollowing = ['user2', 'user3'];
            jest.spyOn(followService, 'getFollowing').mockResolvedValue(mockFollowing);
            jest.spyOn(dbUserService, 'isFollowing').mockResolvedValue(true);
            const result = await controller.getFollowing(mockData);
            expect(result).toEqual({ status: 'SUCCESS', data: mockFollowing.map(following => ({
                    profile: dbUserService.query_profile_by_user_id(following),
                    isFollowing: dbUserService.isFollowing(mockData.viewerId, following)
                })),
                error: {message: 'User not found'} });
        });

        it('should get following list successfully and return following without viewer', async () => {
            const mockData = { userId: 'user1' };
            const mockFollowing = ['user2', 'user3'];
            jest.spyOn(followService, 'getFollowing').mockResolvedValue(mockFollowing);
            const result = await controller.getFollowing(mockData);
            expect(result).toEqual({ status: 'SUCCESS', data: mockFollowing.map(following => ({
                    profile: dbUserService.query_profile_by_user_id(following),
                    isFollowing: false
                })),
                error: {message: 'User not found'} });
        });

        it('should handle failure to get following list', async () => {
            const mockData = { userId: 'user1' };
            jest.spyOn(followService, 'getFollowing').mockResolvedValue([]);
            const result = await controller.getFollowing(mockData);
            expect(result).toEqual({ status: 'SUCCESS', data: [], error: {message: 'User not found'} });
        });

        it('should handle invalid id when fetching following', async () => {
            const mockData = { userId: '' };
            const result = await controller.getFollowing(mockData);
            expect(result).toEqual({ status: 401 });
        });
    });
});
