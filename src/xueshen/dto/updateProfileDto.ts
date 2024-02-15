import { IsString, IsNotEmpty, IsBoolean } from 'class-validator';
import { Profile, Interest } from "@prisma/pg"
import NullableDto from './nullableDto';

/*
 
  model Profile {
    user       User       @relation(fields: [userId], references: [id], onUpdate: Cascade)
    userId     String     @id
    name       String?
    customId   String     @unique
    avatar     String?
    bio        String?
    interests  Interest[]
    gender     String?
    createTime DateTime   @default(now())
    updateTime DateTime   @updatedAt
}
 */



export default class UpdateProfileDto extends NullableDto{

    @IsString()
    @IsNotEmpty()
    userId: Profile['userId'];

    @IsString()
    readonly fullname: Profile['fullname'];


    @IsString()
    readonly username: Profile['username'];
    
    @IsString()
    readonly avatar: Profile['avatar'];

    @IsString()
    readonly bio: Profile['bio'];

    @IsString()
    readonly interests: Profile['interests'];

    @IsString()
    readonly gender: Profile["gender"]

    constructor(userId: string, fullname: string, username: string, avatar: string, bio: string, interests:Interest[]){
        super();
        this.userId = userId;
        this.fullname = fullname;
        this.username = username;
        this.avatar = avatar;
        this.bio = bio;
        this.interests = interests;
    }




}