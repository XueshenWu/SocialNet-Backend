import { Body, Controller, NotFoundException, Post } from '@nestjs/common';
import { Logger } from '@nestjs/common';
import { FollowService } from './follow.service';

@Controller('friends')
export class FollowController {
  logger = new Logger('FollowController');
  constructor(private readonly followService : FollowService) {}

  // Follow Friend
  @Post('follow')
  async followUser(@Body() data: { id_from: string, id_to: string }) {
    try {
      const success = await this.followService.followUser(data.id_from, data.id_to);
      this.logger.log('Follow response sent')

      if (success) {
        this.logger.log("User followed successfully")
        return { status: "SUCCESS", }
      } else {
        this.logger.log("Failed to follow user")
        return {
          status: "FAILED",
        }
      }
    } catch (error) {
      this.logger.verbose('Error while following user:', error);
      return { status: "FAILED", }
    }
  }

  // Unfollow Friend
  @Post('unfollow')
  async unfollowUser(@Body() data: { id_from: string, id_to: string }) {
    try {
      const success = await this.followService.unfollowUser(data.id_from, data.id_to);
      this.logger.log('Unfollow response sent')

      if (success) {
        this.logger.log("User unfollowed successfully")
        return { status: "SUCCESS", }
      } else {
        this.logger.log("Failed to unfollow user")
        return {
          status: "FAILED",
        }
      }
    } catch (error) {
      this.logger.verbose('Error while unfollowing user:', error);
    }
  }

  // Get Followers List
    @Post('get-followers')
    async getFollowers(@Body() data: { id: string }) {
        try {
            const followers = await this.followService.getFollowers(data.id);
            this.logger.log('Followers list sent')

            if (followers) {
                this.logger.log("Followers list sent successfully")
                return {
                    status: "SUCCESS",
                    followers: followers
                }
            } else {
                this.logger.log("Follower List is empty")
                return {
                    status: "FAILED",
                }
            }
        }
        catch (error) {
            this.logger.verbose('Error while getting followers:', error);
            return { status: "FAILED", }
        }
    }

  // Get Following List
  @Post('get-following')
  async getFollowing(@Body() data: { id: string }) {
      try {
          const following = await this.followService.getFollowing(data.id);
          this.logger.log('Following list sent')

          if (following) {
              this.logger.log("Following list sent successfully")
              return {
                  status: "SUCCESS",
                  following: following
              }
          } else {
              this.logger.log("Following List is empty")
              return {
                  status: "FAILED",
              }
          }
      } catch (error) {
          this.logger.verbose('Error while getting following:', error);
          return { status: "FAILED", }
      }
  }

}