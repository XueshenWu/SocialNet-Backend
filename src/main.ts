import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule,{ logger: ['error','warn','log'],
    cors:{
        origin: '*',
      methods: 'GET,POST',
      allowedHeaders: '*',
      credentials: true,
    }
  });
  app.useGlobalPipes(new ValidationPipe({
    transform: true,
    whitelist: true,
    forbidNonWhitelisted: true,
  }))
  await app.listen(8000,'172.20.10.4');

}
bootstrap();
