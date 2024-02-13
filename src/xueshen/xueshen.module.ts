import { Module } from '@nestjs/common';
import { DbModule } from './db/db.module';
import { AuthModule } from './auth/auth.module';
import { PostsModule } from './posts/posts.module';
import { MqModule } from './mq/mq.module';


@Module({
    imports: [DbModule, AuthModule, PostsModule, MqModule],
    exports: [DbModule, AuthModule],
})
export class XueshenModule {}
