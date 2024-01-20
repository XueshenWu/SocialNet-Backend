import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from './config/config.module';

import { XueshenModule } from './xueshen/xueshen.module';


@Module({
  imports: [ConfigModule.configure('a.ts'), XueshenModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
