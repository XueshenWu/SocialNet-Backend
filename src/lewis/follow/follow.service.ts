import { Injectable, Logger, NotFoundException } from '@nestjs/common';
import { DbService } from '../../xueshen/db/db.service';

@Injectable()
export class FollowService {
    logger: Logger = new Logger('FollowService')
    constructor(private readonly dbService: DbService) { }

    // 1. Send follow request
    async followUser(id_from: string, id_to: string): Promise<boolean> {
        // Check if ids are valid
        if (!id_from || !id_to) {
            this.logger.log('Invalid id when following user')
            throw new NotFoundException('Invalid id');
        }

        try {
            // Check if user is already following
            // const isFollowing = await this.dbService.isFollowing(id_from, id_to);
            // if (isFollowing) {
            //     this.logger.log('User is already following')
            //     return false;
            // }

            // Check if user exists
            // const userExists = await this.dbService.userExists(id_to);
            // if (!userExists) {
            //     this.logger.log('User does not exist')
            //     return false;
            // }

            // Send the Follow Request
            await this.dbService.followUser(id_from, id_to);
            this.logger.log('Follow Message Sent Successfully')
            return true;
        } catch (error) {
            this.logger.log('Follow Message Sent Failed')
            console.error('Error while following user:', error);
            return false;
        }
    }

    // 2. Send unfollow request
    async unfollowUser(id_from: string, id_to: string): Promise<boolean> {
        // Check if ids are valid
        if (!id_from || !id_to) {
            this.logger.log('Invalid id when unfollowing user')
            throw new NotFoundException('Invalid id');
        }

        try {
            // Check if user is already following
            // const isFollowing = await this.dbService.isFollowing(id_from, id_to);
            // if (!isFollowing) {
            //     this.logger.log('User is not following')
            //     return false;
            // }

            // Check if user exists
            // const userExists = await this.dbService.userExists(id_to);
            // if (!userExists) {
            //     this.logger.log('User does not exist')
            //     return false;
            // }

            // Send the Unfollow Request
            await this.dbService.unfollowUser(id_from, id_to);
            this.logger.log('Unfollow Message Sent Successfully')
            return true;
        } catch (error) {
            this.logger.log('Unfollow Message Sent Failed')
            console.error('Error while unfollowing user:', error);
            return false;
        }
    }
}
