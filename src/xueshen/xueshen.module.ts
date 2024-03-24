import { Module } from '@nestjs/common';
import { DbModule } from './db/db.module';
import { AuthModule } from './auth/auth.module';
import { PostsModule } from './posts/posts.module';
import { RedisModule } from './redis/redis.module';



@Module({
    imports: [DbModule, AuthModule, PostsModule, RedisModule],
    exports: [DbModule, AuthModule],
})
export class XueshenModule {}
