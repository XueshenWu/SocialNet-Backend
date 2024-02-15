import { Injectable } from "@nestjs/common";
import { ConnectionService } from "./connection.service";
import UpdateProfileDto from "../dto/updateProfileDto";

@Injectable()
export class DbUserService {
    constructor(private readonly connectionService: ConnectionService) { }

    async updateProfile(updateProfileDto: UpdateProfileDto) {
        const res = await this.connectionService.pgClient.profile.update({
            where: {
                userId: updateProfileDto.userId
            },
            data: {
                ...updateProfileDto.getNoneEmptyData()
            }
        })

        return !res === null

    }

    async userExists(userId: string) {
        const res = await this.connectionService.pgClient.user.findUnique({
            where: {
                id: userId
            }
        })
        return res !== null
    }

    async isFollowing(userId: string, followingId: string) {
        const res = await this.connectionService.pgClient.follow.findUnique({
            where:{
                id_from_id_to:{
                    id_from: userId,
                    id_to: followingId
                }
            }
        })
        return res !== null
    }



}