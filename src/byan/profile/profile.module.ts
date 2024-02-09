import { Module } from '@nestjs/common';
import { ProfileService } from './profile.service';
import { ProfileController } from './profile.controller';
import { XueshenModule } from 'src/xueshen/xueshen.module';
import { DbService } from 'src/xueshen/db/db.service';
import { DbModule } from 'src/xueshen/db/db.module';

@Module({
  imports: [DbModule],
  providers: [DbService, ProfileService],
  controllers: [ProfileController],
})
export class ProfileModule {}
