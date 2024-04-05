import { Injectable } from "@nestjs/common";
import { ConnectionService } from "../connection/connection.service";
import UpdateProfileDto from "../../dto/updateProfileDto";
import { User, Profile } from "@prisma/pg";
import { CreateUserDto } from "src/xueshen/dto/createUserDto";

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



    async follow(id_from: string, id_to: string): Promise<boolean> {
        
        if (await this.userExists(id_from) && await this.userExists(id_to)) {
            await this.connectionService.pgClient.follow.create({
                data: {
                    id_from: id_from,
                    id_to: id_to
                }
            })
            return true
        }
        return false
    }

    async unfollow(id_from:string, id_to:string):Promise<boolean>{
        console.log("at data base", `${id_from} wants to unollow ${id_to}`)
        await this.connectionService.pgClient.follow.delete({
            where:{
                id_from_id_to:{
                    id_from:id_from,
                    id_to:id_to
                }
            }
        })
        return true;
    }

    async userExists(userId: string) {
        const res = await this.connectionService.pgClient.user.findUnique({
            where: {
                id: userId
            }
        })
        return res !== null
    }

    async isFollowing(userId: string, viewerId: string) {

        console.log(`check if ${viewerId} is following ${userId} at dbuser`)
        const res = await this.connectionService.pgClient.follow.findUnique({
            where: {
                id_from_id_to: {
                    id_from: viewerId,
                    id_to: userId
                }
            }
        })
        return res !== null
    }


    async query_user_by_id(id: string): Promise<User | null> {
        return await this.connectionService.pgClient.user.findUnique({
            where: {
                id: id
            }
        })
    }

    async search_user_by_name(name:string):Promise<Profile[]>{
        const profiles = (await this.connectionService.pgClient.profile.findMany({
            where:{
                username: {
                    contains:name
                }
            }
           
        }))

        if(profiles.length<1){
            return []
        }else{
            return profiles
        }
    }

    async query_user_by_email(email: string): Promise<User | null> {
        return await this.connectionService.pgClient.user.findFirst({
            where: {
               email:email
            }
        })
    }

    async query_user_by_username(username: string): Promise<User | null> {
        const profile: Profile | null = await this.query_profile_by_username(username);
        if (profile === null) {
            return null;
        }
        return await this.query_user_by_id(profile.userId);
    }



    async query_follower_by_id(id:string):Promise<string[]>{
        const res = await this.connectionService.pgClient.follow.findMany({
            where:{
                id_to:id
            }
        })
  
        if(!res){
            return []
        }else{
            return res.map(record=>record.id_from)
        }
        
    }

    async query_follower_by_username(username:string){
        const profile:Profile|null = await this.query_profile_by_username(username);
        if(!profile){
            return null
        }
        const id = profile.userId;
        
    }

    async query_following_by_id(id:string):Promise<string[]>{
        const res = await this.connectionService.pgClient.follow.findMany({
            where:{
               id_from:id
            }
        })
        if(!res){
            return []
        }else{
            return res.map(record=>record.id_to)
        }
    }

    async query_following_by_name(name:string):Promise<string[]>{
        const id = (await this.query_user_by_username(name))?.id??null;
        if(!id){
            return []
        }else{
            return await this.query_following_by_id(id)
        }
    }


    async query_profile_by_user_id(id: string): Promise<Profile | null> {
        return await this.connectionService.pgClient.profile.findUnique({
            where: {
                userId: id
            }
        })
    }

    async query_profile_by_username(username: string): Promise<Profile | null> {
        return await this.connectionService.pgClient.profile.findUnique({
            where: {
                username: username
            }
        })
    }

    async createUser(createUserDto: CreateUserDto): Promise<Profile | null> {
        const res = await this.connectionService.pgClient.$transaction(async (tx) => {
            try {


                const user = await tx.user.create({
                    data: {
                        email: createUserDto.email,
                        password: createUserDto.password,
                        role: "COMMON"
                    }
                })


                const email = createUserDto.email
                const profile = await tx.profile.create({
                    data: {
                        userId: user.id,
                        username: email.substring(0,email.indexOf('@'))
                    }
                })
                await this.connectionService.mongoClient.user.create({
                    data:{
                        id:user.id
                    }
                })
                
                return profile;
            } catch (e) {
                console.log(e)
                return null
            }
        })

        return res;
    }






}