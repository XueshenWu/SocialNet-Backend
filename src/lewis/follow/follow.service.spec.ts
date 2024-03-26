import { FollowService } from './follow.service';
import { NotFoundException } from '@nestjs/common';
import { Test } from '@nestjs/testing';
import { DbUserService } from '../../xueshen/db/user/db_user.service';
import { ConnectionService } from '../../xueshen/db/connection/connection.service';
import { date } from 'joi';

describe('FollowService', () => {
  let followService: FollowService;
  let dbUserService: DbUserService;

  beforeAll(async () => {
    const module = await Test.createTestingModule({
      providers: [FollowService, DbUserService, ConnectionService],
    }).compile();

    followService = module.get<FollowService>(FollowService);
    dbUserService = module.get<DbUserService>(DbUserService);

  });

  it('should be defined', () => {
    expect(followService).toBeDefined();
  });

  // 1. Follow Testing
  describe('follow', () => {
    it('should follow user successfully', async () => {
      const id_from = 'user1';
      const id_to = 'user2';
      jest.spyOn(dbUserService, 'follow').mockResolvedValueOnce(true);
      jest.spyOn(dbUserService, 'isFollowing').mockResolvedValueOnce(false);
      jest.spyOn(dbUserService, 'query_user_by_id').mockResolvedValueOnce(
        {
          id: 'user2',
          email: 'user2@gmail.com',
          password: 'user2',
          role: 'COMMON',
          createTime: new Date(),
        }
      );

      const result = await followService.followUser(id_from, id_to);

      expect(result).toBe(true);
    });

    it('should not proceed follow when the user has been followed', async () => {
      const id_from = 'user1';
      const id_to = 'user2';
      jest.spyOn(dbUserService, 'isFollowing').mockResolvedValueOnce(true);

      const result = await followService.followUser(id_from, id_to);

      expect(result).toBe(false);
    });

    it('should handle NotFoundException when following user with invalid id', async () => {
      const id_from = '';
      const id_to = 'user2';
      jest.spyOn(dbUserService, 'follow').mockRejectedValueOnce(new NotFoundException());

      await expect(followService.followUser(id_from, id_to)).rejects.toThrowError(NotFoundException);
    });
  });

  // 2. Unfollow Testing
  describe('unfollow', () => {
    it('should unfollow user successfully', async () => {
      const id_from = 'user1';
      const id_to = 'user2';
      jest.spyOn(dbUserService, 'unfollow').mockResolvedValueOnce(true);
      jest.spyOn(dbUserService, 'isFollowing').mockResolvedValueOnce(true);
      jest.spyOn(dbUserService, 'query_user_by_id').mockResolvedValueOnce(
          {
            id: 'user2',
            email: 'user2@gmail.com',
            password: 'user2',
            role: 'COMMON',
            createTime: new Date(),
          }
      );

      const result = await followService.unfollowUser(id_from, id_to);

      expect(result).toBe(true);
    });

    it('should not proceed unfollow when the user has not been followed', async () => {
      const id_from = 'user1';
      const id_to = 'user2';
      jest.spyOn(dbUserService, 'isFollowing').mockResolvedValueOnce(false);

      const result = await followService.unfollowUser(id_from, id_to);

      expect(result).toBe(false);
    });

    it('should handle NotFoundException when unfollowing user with invalid id', async () => {
      const id_from = '';
      const id_to = 'user2';
      jest.spyOn(dbUserService, 'unfollow').mockRejectedValueOnce(new NotFoundException());

      await expect(followService.unfollowUser(id_from, id_to)).rejects.toThrowError(NotFoundException);
    });
  });

  // 3. Get Followers Testing
  describe('getFollowers', () => {
      it('should get followers list successfully', async () => {
        const id = 'user1';
        const mockFollowers = ['user2', 'user3'];
        jest.spyOn(dbUserService, 'query_follower_by_id').mockResolvedValueOnce(mockFollowers);

        const result = await followService.getFollowers(id);
        expect(result).toEqual(mockFollowers);
      });

      it('should handle NotFoundException when fetching followers with invalid id', async () => {
        const id = '';
        jest.spyOn(dbUserService, 'query_follower_by_id').mockRejectedValueOnce(new NotFoundException());
        await expect(followService.getFollowers(id)).rejects.toThrowError(NotFoundException);
      });

      it('should handle empty followers list', async () => {
        const id = 'user1';
        jest.spyOn(dbUserService, 'query_follower_by_id').mockResolvedValueOnce([]);
        const result = await followService.getFollowers(id);
        expect(result).toEqual([]);
      });
  });

  // 4. Get Following Testing
    describe('getFollowing', () => {
        it('should get following list successfully', async () => {
        const id = 'user1';
        const mockFollowing = ['user2', 'user3'];
        jest.spyOn(dbUserService, 'query_following_by_id').mockResolvedValueOnce(mockFollowing);

        const result = await followService.getFollowing(id);
        expect(result).toEqual(mockFollowing);
        });

        it('should handle NotFoundException when fetching following with invalid id', async () => {
          const id = '';
          jest.spyOn(dbUserService, 'query_following_by_id').mockRejectedValueOnce(new NotFoundException());
          await expect(followService.getFollowing(id)).rejects.toThrowError(NotFoundException);
        });

        it('should handle empty following list', async () => {
          const id = 'user1';
          jest.spyOn(dbUserService, 'query_following_by_id').mockResolvedValueOnce([]);
          const result = await followService.getFollowing(id);
          expect(result).toEqual([]);
        });
    });
});
