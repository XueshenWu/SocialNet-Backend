import { Module } from '@nestjs/common';
import { ProfileModule } from './profile/profile.module';
import { SearchModule } from './search/search.module';

@Module({
  imports: [ProfileModule, SearchModule],
  exports: [ProfileModule],
})
export class ByanModule {}

