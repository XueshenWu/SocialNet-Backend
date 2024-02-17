import { Injectable } from '@nestjs/common';
// import { CreateProfileDto } from './dto/create-profile.dto';
// import { UpdateProfileDto } from './dto/update-profile.dto';
import { DbUserService } from '../../xueshen/db/user/db_user.service';
import UpdateProfileDto from 'src/xueshen/dto/updateProfileDto';

@Injectable()
export class ProfileService {
  constructor(private readonly dbUserService: DbUserService) {}

  // Only for testing
  // create(createProfileDto: CreateProfileDto) {
  //   console.log("This action adds a new profile");
  //   return 'This action adds a new profile';
  // }
  // create(email: string, password: string) {
  //   return `This action returns all profile`;
  // }

  findAll() {
    return `This action returns all profile`;
  }

  findOne(id: number) {
    return `This action returns a #${id} profile`;
  }

  // update(id: number, updateProfileDto: UpdateProfileDto) {
  //   return `This action updates a #${id} profile`;
  // }

  // update(id: number, updateProfileDto: UpdateProfileDto) {
  //   return `This action updates a #${id} profile`;
  // }

  // only for testing
  // create(createProfileDto: PgPrisma.ProfileCreateInput) {
  //   return this.dbUserService.createProfile(createProfileDto);
  // }

  // update(userId: string, updateProfileDto: PgPrisma.ProfileUpdateInput) {
  //   return this.dbService.updateProfileNew(userId, updateProfileDto);
  // }

  async getProfileByUserId(userId: string) {
    return await this.dbUserService.query_profile_by_user_id(userId);
  }

  async updateProfile(updateProfileDto: UpdateProfileDto) {
    return await this.dbUserService.updateProfile(updateProfileDto);
  }

  remove(id: number) {
    return `This action removes a #${id} profile`;
  }
}
