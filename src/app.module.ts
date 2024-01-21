import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';


import { XueshenModule } from './xueshen/xueshen.module';


@Module({
  imports: [XueshenModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
