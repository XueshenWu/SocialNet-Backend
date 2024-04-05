import { Body, Controller, NotFoundException, Post } from '@nestjs/common';
import { Logger } from '@nestjs/common';
import { FollowService } from './follow.service';
import { DbUserService } from '../../xueshen/db/user/db_user.service';
import { Profile } from 'src/byan/profile/entities/profile.entity';

@Controller()
export class FollowController {
    logger = new Logger('FollowController');
    constructor(private readonly followService: FollowService, private readonly dbUserService: DbUserService) { }

    // Follow Friend
    @Post('follow')
    async followUser(@Body() { userId, followerId }: { userId: string, followerId: string }) {
        try {
            const success = await this.followService.followUser(followerId,userId);
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
    async unfollowUser(@Body() { userId, followerId }: { userId: string, followerId: string }) {
        try {

            console.log(`${followerId} wants to unfollow ${userId}`)

            const success = await this.followService.unfollowUser(followerId,userId);
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
    async getFollowers(@Body() { userId, viewerId }: { userId: string, viewerId?: string }) {
        try {
         
            const followers = await this.followService.getFollowers(userId) ?? [];

            this.logger.log('Followers list sent')

            this.logger.log("Followers list sent successfully")

            const data = new Array<{ profile: Profile, isFollowing: boolean }>();
            for(let follower of followers){
                const profile = await this.dbUserService.query_profile_by_user_id(follower);
                const isFollowing= viewerId ? await this.dbUserService.isFollowing(viewerId, follower) : false;
                data.push({profile, isFollowing})
            }

          
         
            return {
                status: "SUCCESS",
                // data: followers.map(async follower => ({
                //     profile: await this.dbUserService.query_profile_by_user_id(follower),
                //     isFollowing: viewerId ? await this.dbUserService.isFollowing(viewerId, follower) : false
                // })),
                data:data,
                error: { message: 'User not found' }
            }
        }
        catch (error) {
            this.logger.verbose('Error while getting followers:', error);
            return { status: 401, }
        }
    }

    // Get Following List
    @Post('getFollowing')
    async getFollowing(@Body() { userId, viewerId }: { userId: string, viewerId?: string }) {
        try {
            const followings = await this.followService.getFollowing(userId) ?? [];
            this.logger.log('Following list sent')

            this.logger.log("Following list sent successfully")

            const data = new Array<{ profile: Profile, isFollowing: boolean }>();
            for(let following of followings){
                const profile = await this.dbUserService.query_profile_by_user_id(following);
                const isFollowing= viewerId ? await this.dbUserService.isFollowing(following,viewerId) : false;
                console.log(`is ${viewerId} following ${following}: ${isFollowing}`)
                data.push({profile, isFollowing})
            }


            return {
                status: "SUCCESS",
                data: data,
                error: { message: 'User not found' }
            }
        } catch (error) {
            this.logger.verbose('Error while getting following:', error);
            return { status: 401, }
        }
    }

    // Get followers and following count
    @Post('getFollowStats')
    async getFollowStats(@Body() { userId, viewerId }: { userId: string, viewerId?: string }) {
        try {
            const followers = await this.followService.getFollowers(userId) ?? [];
            const following = await this.followService.getFollowing(userId) ?? [];
            this.logger.log('Follow stats sent')
            console.log(`is ${viewerId} following ${userId}?`)
            return {
                status: "SUCCESS",
                data: {
                    followerCount: followers.length,
                    followingCount: following.length,
                    isFollowing: viewerId ? await this.dbUserService.isFollowing( userId, viewerId) : false
                },
                error: { message: 'User not found' }
            }
        } catch (error) {
            this.logger.verbose('Error while getting follow stats:', error);
            return { status: 401, }
        }
    }

}