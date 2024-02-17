import { Module } from '@nestjs/common';
import { DbModule } from './db/db.module';
import { AuthModule } from './auth/auth.module';
import { PostsModule } from './posts/posts.module';



@Module({
    imports: [DbModule, AuthModule, PostsModule],
    exports: [DbModule, AuthModule],
})
export class XueshenModule {}
