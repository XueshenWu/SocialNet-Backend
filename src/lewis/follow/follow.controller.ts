import { Controller } from '@nestjs/common';
import { Logger } from '@nestjs/common';

@Controller('follow')
export class FollowController {
  logger = new Logger('FollowController');
}
