import { Module } from '@nestjs/common';
import { ProfileService } from './profile.service';
import { ProfileController } from './profile.controller';
import { XueshenModule } from 'src/xueshen/xueshen.module';
import { DbUserService } from '../../xueshen/db/user/db_user.service';
import { DbModule } from 'src/xueshen/db/db.module';

@Module({
  imports: [DbModule],
  providers: [DbUserService, ProfileService],
  controllers: [ProfileController],
})
export class ProfileModule {}
