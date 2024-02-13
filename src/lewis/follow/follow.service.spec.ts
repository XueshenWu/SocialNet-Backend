import { FollowService } from './follow.service';
import { NotFoundException } from '@nestjs/common';
import { DbService } from '../../xueshen/db/db.service';
import { Test } from '@nestjs/testing';
import { DbPostService } from '../../xueshen/db/db_post.service';
import { DbUserService } from '../../xueshen/db/db_user.service';
import { ConnectionService } from '../../xueshen/db/connection.service';
import { date } from 'joi';

describe('FollowService', () => {
  let followService: FollowService;
  let dbService: DbService;

  beforeAll(async () => {
    const module = await Test.createTestingModule({
      providers: [FollowService, DbService, DbPostService, DbUserService, ConnectionService],
    }).compile();

    followService = module.get<FollowService>(FollowService);
    dbService = module.get<DbService>(DbService);

  });

  it('should be defined', () => {
    expect(followService).toBeDefined();
  });

  // 1. Follow Testing
  describe('follow', () => {
    it('should follow user successfully', async () => {
      const id_from = 'user1';
      const id_to = 'user2';
      jest.spyOn(dbService, 'followUser').mockResolvedValueOnce(true);
      jest.spyOn(dbService, 'isFollowing').mockResolvedValueOnce(false);
      jest.spyOn(dbService, 'query_user_by_id').mockResolvedValueOnce(
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
      jest.spyOn(dbService, 'isFollowing').mockResolvedValueOnce(true);

      const result = await followService.followUser(id_from, id_to);

      expect(result).toBe(false);
    });

    it('should handle NotFoundException when following user with invalid id', async () => {
      const id_from = '';
      const id_to = 'user2';
      jest.spyOn(dbService, 'followUser').mockRejectedValueOnce(new NotFoundException());

      await expect(followService.followUser(id_from, id_to)).rejects.toThrowError(NotFoundException);
    });
  });

  // 2. Unfollow Testing
  describe('unfollow', () => {
    it('should unfollow user successfully', async () => {
      const id_from = 'user1';
      const id_to = 'user2';
      jest.spyOn(dbService, 'unfollowUser').mockResolvedValueOnce(true);
      jest.spyOn(dbService, 'isFollowing').mockResolvedValueOnce(true);
      jest.spyOn(dbService, 'query_user_by_id').mockResolvedValueOnce(
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
      jest.spyOn(dbService, 'isFollowing').mockResolvedValueOnce(false);

      const result = await followService.unfollowUser(id_from, id_to);

      expect(result).toBe(false);
    });

    it('should handle NotFoundException when unfollowing user with invalid id', async () => {
      const id_from = '';
      const id_to = 'user2';
      jest.spyOn(dbService, 'unfollowUser').mockRejectedValueOnce(new NotFoundException());

      await expect(followService.unfollowUser(id_from, id_to)).rejects.toThrowError(NotFoundException);
    });
  });
});
