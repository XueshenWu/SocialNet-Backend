import { Test, TestingModule } from '@nestjs/testing';
import { FollowController } from './follow.controller';
import { FollowService } from './follow.service';
import { DbService } from '../../xueshen/db/db.service';
import { DbUserService } from '../../xueshen/db/db_user.service';
import { DbPostService } from '../../xueshen/db/db_post.service';
import { ConnectionService } from '../../xueshen/db/connection.service';

describe('FollowController', () => {
  let controller: FollowController;
  let followService: FollowService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FollowController],
      providers: [FollowService, DbService, DbUserService, DbPostService, ConnectionService],
    }).compile();

    controller = module.get<FollowController>(FollowController);
    followService = module.get<FollowService>(FollowService);

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
});
