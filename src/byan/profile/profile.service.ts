import { Injectable } from '@nestjs/common';
// import { CreateProfileDto } from './dto/create-profile.dto';
// import { UpdateProfileDto } from './dto/update-profile.dto';
import { DbService } from '../../xueshen/db/db.service';
import { Prisma as PgPrisma } from '@prisma/pg';
import UpdateProfileDto from 'src/xueshen/dto/updateProfileDto';

@Injectable()
export class ProfileService {
  constructor(private readonly dbService: DbService) {}

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
  create(createProfileDto: PgPrisma.ProfileCreateInput) {
    return this.dbService.createProfile(createProfileDto);
  }

  // update(userId: string, updateProfileDto: PgPrisma.ProfileUpdateInput) {
  //   return this.dbService.updateProfileNew(userId, updateProfileDto);
  // }

  getProfile(updateProfileDto: UpdateProfileDto) {
    return this.dbService.updateProfile(updateProfileDto);
  }

  updateProfile(updateProfileDto: UpdateProfileDto) {
    return this.dbService.updateProfile(updateProfileDto);
  }

  remove(id: number) {
    return `This action removes a #${id} profile`;
  }
}
