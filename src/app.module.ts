import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';


import { XueshenModule } from './xueshen/xueshen.module';
import { DemoModule } from './demo/demo.module';


@Module({
  imports: [XueshenModule, DemoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
