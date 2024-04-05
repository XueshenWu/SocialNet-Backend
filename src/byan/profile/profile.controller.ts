import { Controller, Get, Post, Body, Patch, Param, Delete, NotFoundException } from '@nestjs/common';
import { ProfileService } from './profile.service';
// import { CreateProfileDto } from './dto/create-profile.dto';
// import { UpdateProfileDto } from './dto/update-profile.dto';
// import { Prisma as PgPrisma } from '@prisma/pg';
import UpdateProfileDto from '../../xueshen/dto/updateProfileDto';
// import { NotFoundError } from 'rxjs';

@Controller()
export class ProfileController {
  constructor(private readonly profileService: ProfileService) {}
  // constructor(private readonly dbService: DbService) {}

  // @Post()
  // create(@Body() createProfileDto: CreateProfileDto) {
  //   return this.profileService.create(createProfileDto);
  // }

  // @Post()
  // create(@Body() createProfileDto: CreateProfileDto) {
  //   return this.profileService.create(createProfileDto.email, createProfileDto.password);
  // }

  // @Get()
  // findAll() {
  //   return this.profileService.findAll();
  // }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.profileService.findOne(+id);
  // }

  // only for testing
  // @Post()
  // create(@Body() createProfileDto: PgPrisma.ProfileCreateInput) {
  //   console.log(createProfileDto.customId, createProfileDto.name);
  //   return this.profileService.create(createProfileDto);
  // }

  // besed on the service provided by DbService
  // @Patch(':id')
  // @Post(':id')
  // update(@Param('id') userId: string, @Body() updateProfileDto: PgPrisma.ProfileUpdateInput) {
  //   console.log(updateProfileDto.customId, updateProfileDto.user);
  //   return this.profileService.update(userId, updateProfileDto);
  // }

  @Post('/getProfile')
  async getProfileByUserId(@Body() {userId}: {userId: string}): Promise<Record<string, any>> {
    try {
      const userProfile = await this.profileService.getProfileByUserId(userId);

      if (!userProfile) {
        return {
          data:{},
          error: {
            message: "user not found"
          }
        }
      }

      return {
        data:{
          profile: userProfile
        },
        error: {}
      }
    } catch (err) {
      // const userProfile = await this.profileService.getProfileByUserId(userId);
      // if (!userProfile) {
      //   throw new NotFoundException('User profile not found');
      // }
      return {
        data:{},
        error: {
          message: err.message
        }
      }
    }
  }

  @Post('/updateProfile')
  async updateProfile(@Body() updateProfileDto: UpdateProfileDto): Promise<Record<string, any>> {
    // console.log(updateProfileDto.userId);
    // return this.dbService.updateProfile(updateProfileDto);

    try {
      const updatedUserProfile = await this.profileService.updateProfile(updateProfileDto);

      return {
        error: {}
      }
    } catch (err) {
      return {
        error: {
          message: err.message
        }
      }
    }
  }

  @Post('/getProfileByEmail')
  async getProfileByEmail(@Body() {email}: {email: string}): Promise<Record<string, any>> {
    try {
      const user = await this.profileService.getUserByEmail(email);
      console.log(user);
      if (!user) {
        return {
          data:{},
          error: {
            message: "user not found"
          }
        }
      }

      const userProfile = await this.profileService.getProfileByUserId(user.id);
      return {
        data:{
          profile: userProfile
        },
        error: {}
      }
    } catch (err) {
      // const userProfile = await this.profileService.getProfileByUserId(userId);
      // if (!userProfile) {
      //   throw new NotFoundException('User profile not found');
      // }
      return {
        data:{},
        error: {
          message: err.message
        }
      }
    }
  }
    
  // getProfileByEmail
  // +queryuserbyemail
  // +queryprofilebyuserid
  
  //visitProfle(uid, vid)
  // @Post('/profile/:id')
  // visitProfle(@Body() updateProfileDto: UpdateProfileDto) {
  //   console.log(updateProfileDto.userId);
  //   // return this.dbService.updateProfile(updateProfileDto);
  //   return this.profileService.updateProfile(updateProfileDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.profileService.remove(+id);
  // }
}
