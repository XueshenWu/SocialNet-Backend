import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { XueshenModule } from './xueshen/xueshen.module';
import { LewisModule } from './lewis/lewis.module';

@Module({
  imports: [XueshenModule, LewisModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
