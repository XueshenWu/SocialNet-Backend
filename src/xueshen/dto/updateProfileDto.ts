import { IsString, IsNotEmpty, IsBoolean, IsEnum } from 'class-validator';
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
    readonly avatar: Profile['avatar'];

    @IsString()
    readonly bio: Profile['bio'];

    @IsEnum(Interest, {each: true})
    // @IsString()
    readonly interests: Profile['interests'];

    @IsString()
    readonly gender: Profile["gender"]

    constructor(userId: string, fullname: string, avatar: string, bio: string, interests:Interest[]){
        super();
        this.userId = userId;
        this.fullname = fullname;
        this.avatar = avatar;
        this.bio = bio;
        this.interests = interests;
    }




}