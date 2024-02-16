import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ProfileService } from './profile.service';
// import { CreateProfileDto } from './dto/create-profile.dto';
// import { UpdateProfileDto } from './dto/update-profile.dto';
// import { Prisma as PgPrisma } from '@prisma/pg';
import UpdateProfileDto from 'src/xueshen/dto/updateProfileDto';
import { DbService } from '../../xueshen/db/db.service';

@Controller('api')
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

  @Post('/profile/:id')
  getProfileByUserId(@Body() updateProfileDto: UpdateProfileDto) {
    console.log(updateProfileDto.userId);
    return this.profileService.getProfileByUserId(updateProfileDto);
  }

  @Post('/profile/:id')
  updateProfile(@Body() updateProfileDto: UpdateProfileDto) {
    console.log(updateProfileDto.userId);
    // return this.dbService.updateProfile(updateProfileDto);
    return this.profileService.updateProfile(updateProfileDto);
  }
  
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
