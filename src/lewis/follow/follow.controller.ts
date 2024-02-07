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
}