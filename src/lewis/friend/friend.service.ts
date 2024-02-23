import { Injectable, Logger, NotFoundException } from '@nestjs/common';
import { DbUserService } from '../../xueshen/db/user/db_user.service';

@Injectable()
export class FriendService {
    logger: Logger = new Logger('FriendService')
    constructor(private readonly dbUserService: DbUserService) { }

    // 1. Send friend request
    async sendFriendRequest(id_from: string, id_to: string): Promise<boolean> {
        // Check if ids are valid
        if (!id_from || !id_to) {
            this.logger.log('Invalid id when sending friend request')
            throw new NotFoundException('Invalid id');
        }

        try {
            // Check if user exists
            const userExists = !!(await this.dbUserService.query_user_by_id(id_to));
            if (!userExists) {
                this.logger.log('User does not exist')
                return false;
            }

            // Check if user is already friend
            // const isFriend = await this.dbUserService.isFriend(id_from, id_to);
            // if (isFriend) {
            //     this.logger.log('User is already your friend')
            //     return false;
            // }

            // Send the Friend Request
            // await this.dbUserService.send_request(id_from, id_to);
            this.logger.log('Friend Request Sent Successfully')
            return true;
        } catch (error) {
            this.logger.log('Friend Request Sent Failed')
            console.error('Error while following user:', error);
            return false;
        }
    }

    // 2. Accept friend request
    async acceptFriendRequest(id_from: string, id_to: string): Promise<boolean> {
        // Check if ids are valid
        if (!id_from || !id_to) {
            this.logger.log('Invalid id when accepting friend request')
            throw new NotFoundException('Invalid id');
        }

        // Accept the Friend Request
        try {
            // await this.dbUserService.accept_request(id_from, id_to);
            this.logger.log('Friend Request Accepted Successfully')
            return true;
        } catch (error) {
            this.logger.log('Friend Request Acceptance Failed')
            console.error('Error while accepting friend request:', error);
            return false;
        }
    }

    // 3. Reject friend request
    async rejectFriendRequest(id_from: string, id_to: string): Promise<boolean> {
        // Check if ids are valid
        if (!id_from || !id_to) {
            this.logger.log('Invalid id when rejecting friend request')
            throw new NotFoundException('Invalid id');
        }

        // Reject the Friend Request
        try {
            // await this.dbUserService.reject_request(id_from, id_to);
            this.logger.log('Friend Request Rejected Successfully')
            return true;
        } catch (error) {
            this.logger.log('Friend Request Rejection Failed')
            console.error('Error while rejecting friend request:', error);
            return false;
        }
    }

    // 4. Remove friend
    async removeFriend(id_from: string, id_to: string): Promise<boolean> {
        // Check if ids are valid
        if (!id_from || !id_to) {
            this.logger.log('Invalid id when removing friend')
            throw new NotFoundException('Invalid id');
        }

        // Remove the Friend
        try {
            // await this.dbUserService.remove_friend(id_from, id_to);
            this.logger.log('Friend Removed Successfully')
            return true;
        } catch (error) {
            this.logger.log('Friend Removal Failed')
            console.error('Error while removing friend:', error);
            return false;
        }
    }

    // 5. Block friend
    async blockFriend(id_from: string, id_to: string): Promise<boolean> {
        // Check if ids are valid
        if (!id_from || !id_to) {
            this.logger.log('Invalid id when blocking friend')
            throw new NotFoundException('Invalid id');
        }

        // Block the Friend
        try {
            // await this.dbUserService.block_friend(id_from, id_to);
            this.logger.log('Friend Blocked Successfully')
            return true;
        } catch (error) {
            this.logger.log('Friend Blocking Failed')
            console.error('Error while blocking friend:', error);
            return false;
        }
    }

    // 6. Unblock friend
    async unblockFriend(id_from: string, id_to: string): Promise<boolean> {
        // Check if ids are valid
        if (!id_from || !id_to) {
            this.logger.log('Invalid id when unblocking friend')
            throw new NotFoundException('Invalid id');
        }

        // Unblock the Friend
        try {
            // await this.dbUserService.unblock_friend(id_from, id_to);
            this.logger.log('Friend Unblocked Successfully')
            return true;
        } catch (error) {
            this.logger.log('Friend Unblocking Failed')
            console.error('Error while unblocking friend:', error);
            return false;
        }
    }

    // 7. Get friends list
    async getFriends(id: string): Promise<string[]> {
        // Check if id is valid
        if (!id) {
            this.logger.log('Invalid id when getting friends')
            return [];
        }

        // Get the Friends
        try {
            // const friends = await this.dbUserService.get_friends(id);
            this.logger.log('Friends List Fetched Successfully')
            // return friends;
        } catch (error) {
            this.logger.log('Failed to fetch friends list')
            console.error('Error while fetching friends list:', error);
            return [];
        }
    }

    // 8. Get Friend Requests List
    async getFriendRequests(id: string): Promise<string[]> {
        // Check if id is valid
        if (!id) {
            this.logger.log('Invalid id when getting friend requests')
            return [];
        }

        // Get the Friend Requests List
        try {
            // const friendRequests = await this.dbUserService.get_friend_requests(id);
            this.logger.log('Friend Requests Fetched Successfully')
            // return friendRequests;
        } catch (error) {
            this.logger.log('Failed to fetch friend requests list')
            console.error('Error while fetching friend requests list:', error);
            return [];
        }
    }

    // 9. Get Blocked Friends List
    async getBlockedFriends(id: string): Promise<string[]> {
        // Check if id is valid
        if (!id) {
            this.logger.log('Invalid id when getting blocked friends')
            return [];
        }

        // Get the Blocked Friends List
        try {
            // const blockedFriends = await this.dbUserService.get_blocked_friends(id);
            this.logger.log('Blocked Friends Fetched Successfully')
            // return blockedFriends;
        } catch (error) {
            this.logger.log('Failed to fetch blocked friends list')
            console.error('Error while fetching blocked friends list:', error);
            return [];
        }
    }
}
