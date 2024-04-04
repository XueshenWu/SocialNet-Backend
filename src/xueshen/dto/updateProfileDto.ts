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

    userId: Profile['userId'];


    readonly fullname: Profile['fullname'];


    
    readonly avatar: Profile['avatar'];


    readonly external_link: Profile['external_link']

    readonly location:Profile['location']
 
    readonly bio: Profile['bio'];

    @IsEnum(Interest, {each: true})
    readonly interests: Profile['interests'];


    
    tags: string[]|null;


    readonly gender: Profile["gender"]

    constructor(userId: string, fullname?: string, avatar?: string, bio?: string, interests?:Interest[], externalLink?:string, location?:string){
        super();
        this.userId = userId;
        this.fullname = fullname;
        this.avatar = avatar;
        this.bio = bio;
        this.interests = interests;
        this.external_link = externalLink;
        this.location = location;
    }




}