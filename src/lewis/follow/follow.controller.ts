import { Body, Controller, NotFoundException, Post } from '@nestjs/common';
import { Logger } from '@nestjs/common';
import { FollowService } from './follow.service';
import { DbUserService } from '../../xueshen/db/user/db_user.service';

@Controller()
export class FollowController {
  logger = new Logger('FollowController');
  constructor(private readonly followService : FollowService, private readonly dbUserService: DbUserService) {}

  // Follow Friend
  @Post('follow')
  async followUser(@Body() data: { userId: string, followerId: string }) {
    try {
      const success = await this.followService.followUser(data.userId, data.followerId);
      this.logger.log('Follow response sent')

      if (success) {
        this.logger.log("User followed successfully")
        return { status: "SUCCESS", }
      } else {
        this.logger.log("Failed to follow user")
        return {
          status: 401,
        }
      }
    } catch (error) {
      this.logger.verbose('Error while following user:', error);
      return { status: 401, }
    }
  }

  // Unfollow Friend
  @Post('unfollow')
  async unfollowUser(@Body() data: { userId: string, followerId: string }) {
    try {
      const success = await this.followService.unfollowUser(data.userId, data.followerId);
      this.logger.log('Unfollow response sent')

      if (success) {
        this.logger.log("User unfollowed successfully")
        return { status: "SUCCESS", }
      } else {
        this.logger.log("Failed to unfollow user")
        return {
          status: 401,
        }
      }
    } catch (error) {
      this.logger.verbose('Error while unfollowing user:', error);
    }
  }

  // Get Followers List
    @Post('getFollowers')
    async getFollowers(@Body() data: { userId: string, viewerId?: string }) {
        try {
            const followers = await this.followService.getFollowers(data.userId);
            this.logger.log('Followers list sent')

            if (followers) {
                this.logger.log("Followers list sent successfully")

                return {
                    status: "SUCCESS",
                    data: followers.map(follower => ({
                        profile: this.dbUserService.query_profile_by_user_id(follower),
                        isFollowing: data.viewerId?this.dbUserService.isFollowing(data.viewerId, follower):false
                    })),
                    error: {message: 'User not found'}
                }
            } else {
                this.logger.log("Follower List is empty")
                return {
                    status: 401,
                }
            }
        }
        catch (error) {
            this.logger.verbose('Error while getting followers:', error);
            return { status: 401, }
        }
    }

  // Get Following List
  @Post('getFollowings')
  async getFollowing(@Body() data: { userId: string, viewerId?: string }) {
      try {
          const following = await this.followService.getFollowing(data.userId);
          this.logger.log('Following list sent')

          if (following) {
              this.logger.log("Following list sent successfully")

              return {
                  status: "SUCCESS",
                  data: following.map(following => ({
                      profile: this.dbUserService.query_profile_by_user_id(following),
                      isFollowing: data.viewerId?this.dbUserService.isFollowing(data.viewerId, following):false
                  })),
                  error: {message: 'User not found'}
              }
          } else {
              this.logger.log("Following List is empty")
              return {
                  status: 401,
              }
          }
      } catch (error) {
          this.logger.verbose('Error while getting following:', error);
          return { status: 401, }
      }
  }

  // Get followers and following count
    @Post('getFollowStats')
    async getFollowStats(@Body() data: { userId: string, viewerId?: string }) {
        try {
            const followers = await this.followService.getFollowers(data.userId);
            const following = await this.followService.getFollowing(data.userId);
            this.logger.log('Follow stats sent')

            if (followers && following) {
                this.logger.log("Follow stats sent successfully")

                return {
                    status: "SUCCESS",
                    data: {
                        followerCount: followers.length,
                        followingCount: following.length,
                        isFollowing: data.viewerId?await this.dbUserService.isFollowing(data.viewerId, data.userId):false
                    },
                    error: {message: 'User not found'}
                }
            } else {
                this.logger.log("Follow stats not found")
                return {
                    status: 401,
                }
            }
        } catch (error) {
            this.logger.verbose('Error while getting follow stats:', error);
            return { status: 401, }
        }
    }

}