import { IsString, IsNotEmpty, IsBoolean } from 'class-validator';
import { Profile } from "@prisma/pg"

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
    readonly name: Profile['name'];


    @IsString()
    readonly customId: Profile['customId'];
    
    @IsString()
    readonly avatar: Profile['avatar'];

    @IsString()
    readonly bio: Profile['bio'];

    @IsString()
    readonly interests: Profile['interests'];

    @IsString()
    readonly gender: Profile["gender"]




}