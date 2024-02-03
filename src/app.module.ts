import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { XueshenModule } from './xueshen/xueshen.module';
import { ByanModule } from './byan/byan.module';

@Module({
  imports: [XueshenModule, ByanModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
