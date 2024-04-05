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
  async followUser(@Body() userId: string, followerId: string ) {
    try {
      const success = await this.followService.followUser(userId, followerId);
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
  async unfollowUser(@Body() userId: string, followerId: string ) {
    try {
      const success = await this.followService.unfollowUser(userId, followerId);
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
    async getFollowers(@Body() userId: string, viewerId?: string ) {
        try {
            const followers = await this.followService.getFollowers(userId)?? [];
            this.logger.log('Followers list sent')

            this.logger.log("Followers list sent successfully")

            return {
                status: "SUCCESS",
                data: followers.map(follower => ({
                    profile: this.dbUserService.query_profile_by_user_id(follower),
                    isFollowing: viewerId?this.dbUserService.isFollowing(viewerId, follower):false
                })),
                error: {message: 'User not found'}
            }
        }
        catch (error) {
            this.logger.verbose('Error while getting followers:', error);
            return { status: 401, }
        }
    }

  // Get Following List
  @Post('getFollowing')
  async getFollowing(@Body() userId: string, viewerId?: string ) {
      try {
          const following = await this.followService.getFollowing(userId)?? [];
          this.logger.log('Following list sent')

          this.logger.log("Following list sent successfully")

          return {
              status: "SUCCESS",
              data: following.map(following => ({
                  profile: this.dbUserService.query_profile_by_user_id(following),
                  isFollowing: viewerId?this.dbUserService.isFollowing(viewerId, following):false
              })),
              error: {message: 'User not found'}
          }
      } catch (error) {
          this.logger.verbose('Error while getting following:', error);
          return { status: 401, }
      }
  }

  // Get followers and following count
    @Post('getFollowStats')
    async getFollowStats(@Body() userId: string, viewerId?: string ) {
        try {
            const followers = await this.followService.getFollowers(userId)?? [];
            const following = await this.followService.getFollowing(userId)?? [];
            this.logger.log('Follow stats sent')

            return {
                status: "SUCCESS",
                data: {
                    followerCount: followers.length,
                    followingCount: following.length,
                    isFollowing: viewerId?await this.dbUserService.isFollowing(viewerId, userId):false
                },
                error: {message: 'User not found'}
            }
        } catch (error) {
            this.logger.verbose('Error while getting follow stats:', error);
            return { status: 401, }
        }
    }

}