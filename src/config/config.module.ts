import { Module, DynamicModule } from '@nestjs/common';
import { readFile } from 'fs/promises';



@Module({
})
export class ConfigModule {
    static async configure(path: string): Promise<DynamicModule> {


        const content = await readFile(path, 'utf8');

        return {
            module: ConfigModule,
            providers: [
                {
                    provide: 'CONFIG_OPTIONS',
                    useValue: content,
                },
            ],
            exports: ["CONFIG_OPTIONS"],
        }

    }

    static configureSync(content: string): DynamicModule {
        return {
            module: ConfigModule,
            providers: [
                {
                    provide: 'CONFIG_OPTIONS',
                    useValue: content,
                },
            ],
            exports: ["CONFIG_OPTIONS"],
        }
    }
}
