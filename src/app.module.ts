import { Module,ValidationPipe } from '@nestjs/common';
import { APP_PIPE } from '@nestjs/core'
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { XueshenModule } from './xueshen/xueshen.module';
import { DemoModule } from './demo/demo.module';
import { ByanModule } from './byan/byan.module';
import { LewisModule } from './lewis/lewis.module';


@Module({
<<<<<<< HEAD
  imports: [XueshenModule, ByanModule,DemoModule],
=======
  imports: [XueshenModule, ByanModule, LewisModule ],
>>>>>>> origin/lewis_Dev
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
