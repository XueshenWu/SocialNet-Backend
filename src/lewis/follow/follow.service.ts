import { Injectable, Logger, NotFoundException } from '@nestjs/common';
import { DbService } from '../../xueshen/db/db.service';

@Injectable()
export class FollowService {
    logger: Logger = new Logger('FollowService')
    constructor(private readonly dbService: DbService) { }

    // Send follow request
    async followUser(id_from: string, id_to: string): Promise<boolean> {
        try {
            // Check ids exist or not
            // const fromUserExists = await this.dbService.findUserById(id_from);
            // const toUserExists = await this.dbService.findUserById(id_to);
            // if (!id_from || !id_to) {
            //     throw new NotFoundException('Invalid id');
            // }

            await this.dbService.followUser(id_from, id_to);
            this.logger.log('Follow Message Sent Successfully')
            return true;
        } catch (error) {
            this.logger.log('Follow Message Sent Failed')
            console.error('Error while following user:', error);
            return false;
        }
    }

    // Send unfollow request
    async unfollowUser(id_from: string, id_to: string): Promise<boolean> {
        try {
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
