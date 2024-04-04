import { Module,ValidationPipe } from '@nestjs/common';
import { APP_PIPE } from '@nestjs/core'
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { XueshenModule } from './xueshen/xueshen.module';
import { ByanModule } from './byan/byan.module';

@Module({
  imports: [XueshenModule, ByanModule],
  controllers: [AppController],
  providers: [AppService,
  // {
  //   provide: APP_PIPE,
  //   useValue: new ValidationPipe({
  //     transform: true,
  //     whitelist: true,
  //     forbidNonWhitelisted: true,
  //   })
  // }
  ],
})
export class AppModule {}
