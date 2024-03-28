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
      const mockData = { id_from: 'user1', id_to: 'user2' };
      jest.spyOn(followService, 'followUser').mockResolvedValue(true);
      const result = await controller.followUser(mockData);
      expect(result).toEqual({ status: 'SUCCESS' });
    });

    it('should handle failure to follow a user', async () => {
      const mockData = { id_from: 'user1', id_to: 'user2' };
      jest.spyOn(followService, 'followUser').mockResolvedValue(false);
      const result = await controller.followUser(mockData);
      expect(result).toEqual({ status: 'FAILED' });
    });

    it('should handle invalid id when following a user', async () => {
      const mockData = { id_from: '', id_to: 'user2' };
      const result = await controller.followUser(mockData);
      expect(result).toEqual({ status: 'FAILED' });
    });
  });

  // 2. Unfollow Testing
  describe('unfollowUser', () => {
    it('should unfollow a user successfully', async () => {
      const mockData = { id_from: 'user1', id_to: 'user2' };
      jest.spyOn(followService, 'unfollowUser').mockResolvedValue(true);
      const result = await controller.unfollowUser(mockData);
      expect(result).toEqual({ status: 'SUCCESS' });
    });

    it('should handle failure to unfollow a user', async () => {
      const mockData = { id_from: 'user1', id_to: 'user2' };
      jest.spyOn(followService, 'unfollowUser').mockResolvedValue(false);
      const result = await controller.unfollowUser(mockData);
      expect(result).toEqual({ status: 'FAILED' });
    });
  });

    // 3. Get Followers Testing
    describe('getFollowers', () => {
        it('should get followers list successfully and return followers with viewer', async () => {
            const mockData = { id: 'user1', viewer: 'user2' };
            const mockFollowers = ['user2', 'user3'];
            jest.spyOn(followService, 'getFollowers').mockResolvedValue(mockFollowers);
            jest.spyOn(dbUserService, 'isFollowing').mockResolvedValue(true);
            const result = await controller.getFollowers(mockData);
            expect(result).toEqual({ status: 'SUCCESS', followers: mockFollowers.map(follower => ({
                    follower: follower,
                    isFollowing: dbUserService.isFollowing(mockData.viewer, follower)
            })) });
        });

        it('should get followers list successfully and return followers without viewer', async () => {
            const mockData = { id: 'user1' };
            const mockFollowers = ['user2', 'user3'];
            jest.spyOn(followService, 'getFollowers').mockResolvedValue(mockFollowers);
            const result = await controller.getFollowers(mockData);
            expect(result).toEqual({ status: 'SUCCESS', followers: mockFollowers.map(follower => ({
                    follower: follower,
                    isFollowing: false
            })) });
        });

        it('should handle failure to get followers list', async () => {
            const mockData = { id: 'user1' };
            jest.spyOn(followService, 'getFollowers').mockResolvedValue([]);
            const result = await controller.getFollowers(mockData);
            expect(result).toEqual({ status: 'SUCCESS' , followers: []});
        });

        it('should handle invalid id when fetching followers', async () => {
            const mockData = { id: '' };
            const result = await controller.getFollowers(mockData);
            expect(result).toEqual({ status: 'FAILED' });
        });
    });

    // 4. Get Following Testing
    describe('getFollowing', () => {
        it('should get following list successfully and return following with viewer', async () => {
            const mockData = { id: 'user1', viewer: 'user2' };
            const mockFollowing = ['user2', 'user3'];
            jest.spyOn(followService, 'getFollowing').mockResolvedValue(mockFollowing);
            jest.spyOn(dbUserService, 'isFollowing').mockResolvedValue(true);
            const result = await controller.getFollowing(mockData);
            expect(result).toEqual({ status: 'SUCCESS', following: mockFollowing.map(following => ({
                    following: following,
                    isFollowing: dbUserService.isFollowing(mockData.viewer, following)
                })) });
        });

        it('should get following list successfully and return following without viewer', async () => {
            const mockData = { id: 'user1' };
            const mockFollowing = ['user2', 'user3'];
            jest.spyOn(followService, 'getFollowing').mockResolvedValue(mockFollowing);
            const result = await controller.getFollowing(mockData);
            expect(result).toEqual({ status: 'SUCCESS', following: mockFollowing.map(following => ({
                    following: following,
                    isFollowing: false
                })) });
        });

        it('should handle failure to get following list', async () => {
            const mockData = { id: 'user1' };
            jest.spyOn(followService, 'getFollowing').mockResolvedValue([]);
            const result = await controller.getFollowing(mockData);
            expect(result).toEqual({ status: 'SUCCESS' , following: []});
        });

        it('should handle invalid id when fetching following', async () => {
            const mockData = { id: '' };
            const result = await controller.getFollowing(mockData);
            expect(result).toEqual({ status: 'FAILED' });
        });
    });
});
