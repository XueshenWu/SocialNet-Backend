import { Module } from '@nestjs/common';
import { FserverService } from './fserver.service';

@Module({
  providers: [FserverService]
})
export class FserverModule {}
