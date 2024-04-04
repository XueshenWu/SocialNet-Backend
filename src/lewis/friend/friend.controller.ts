import { Controller, Logger, Post } from '@nestjs/common';

@Controller('friend-request')
export class FriendController {
    logger: Logger = new Logger('FriendController')
    constructor() {}

    // Send friend request
    @Post('send-request')
    async sendFriendRequest() {
        this.logger.log('Friend Request Sent Successfully')
        return { status: "SUCCESS" }
    }

    // Accept friend request
    @Post('accept-request')
    async acceptFriendRequest() {
        this.logger.log('Friend Request Accepted Successfully')
        return { status: "SUCCESS" }
    }

    // Reject friend request
    @Post('reject-request')
    async rejectFriendRequest() {
        this.logger.log('Friend Request Rejected Successfully')
        return { status: "SUCCESS" }
    }

    // Remove friend
    @Post('remove-friend')
    async removeFriend() {
        this.logger.log('Friend Removed Successfully')
        return { status: "SUCCESS" }
    }

    // Block friend
    @Post('block-friend')
    async blockFriend() {
        this.logger.log('Friend Blocked Successfully')
        return { status: "SUCCESS" }
    }

    // Unblock friend
    @Post('unblock-friend')
    async unblockFriend() {
        this.logger.log('Friend Unblocked Successfully')
        return { status: "SUCCESS" }
    }

    // Get friends list
    @Post('get-friends')
    async getFriends() {
        this.logger.log('Friends List Fetched Successfully')
        return { status: "SUCCESS" }
    }

    // Get friend requests
    @Post('get-requests')
    async getFriendRequests() {
        this.logger.log('Friend Requests Fetched Successfully')
        return { status: "SUCCESS" }
    }

    // Get blocked friends
    @Post('get-blocked-friends')
    async getBlockedFriends() {
        this.logger.log('Blocked Friends Fetched Successfully')
        return { status: "SUCCESS" }
    }
}
