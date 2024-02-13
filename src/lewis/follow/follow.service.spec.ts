import { FollowService } from './follow.service';
import { NotFoundException } from '@nestjs/common';
import { DbService } from '../../xueshen/db/db.service';

describe('FollowService', () => {
  let followService: FollowService;
  let dbService: DbService;

  beforeEach(() => {
    dbService = new DbService();
    followService = new FollowService(dbService);
  });

  it('should follow user successfully', async () => {
    const id_from = 'user1';
    const id_to = 'user2';
    jest.spyOn(dbService, 'followUser').mockResolvedValueOnce(true);

    const result = await followService.followUser(id_from, id_to);

    expect(result).toBe(true);
  });

  it('should unfollow user successfully', async () => {
    const id_from = 'user1';
    const id_to = 'user2';
    jest.spyOn(dbService, 'unfollowUser').mockResolvedValueOnce(true);

    const result = await followService.unfollowUser(id_from, id_to);

    expect(result).toBe(true);
  });

  it('should handle NotFoundException when following user with invalid id', async () => {
    const id_from = '';
    const id_to = 'user2';
    jest.spyOn(dbService, 'followUser').mockRejectedValueOnce(new NotFoundException());

    await expect(followService.followUser(id_from, id_to)).rejects.toThrowError(NotFoundException);
  });
});
