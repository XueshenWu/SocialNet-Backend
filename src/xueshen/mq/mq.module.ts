import { Module, OnModuleInit } from '@nestjs/common';
import { MqService } from './mq.service';

@Module({
  providers: [MqService]
})
export class MqModule implements OnModuleInit{
    constructor(private readonly mqService:MqService){}

    async onModuleInit() {
        await this.mqService.init();
    }
}
