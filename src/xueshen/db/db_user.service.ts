import { Injectable } from "@nestjs/common";
import { ConnectionService } from "./connection.service";
import UpdateProfileDto from "../dto/updateProfileDto";

@Injectable()
export class DbUserService {
    constructor(private readonly connectionService: ConnectionService) { }

    async updateProfile(updateProfileDto: UpdateProfileDto) {
        await this.connectionService.pgClient.profile.update({
            where: {
                userId: updateProfileDto.userId
            },
            data: {
                ...updateProfileDto.getNoneEmptyData()
            }
        })

    }



}