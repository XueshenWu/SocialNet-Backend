import { Controller, Get, Inject } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {


  private readonly configContent: string = "123"


  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.configContent;
    // return this.appService.getHello();
  }
}

