import { Module } from '@nestjs/common';
import { GirlController } from './girl/girl.controller';
import { GirlModule } from './girl/girl.module';
import { GirlService } from './girl/girl.service';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    GirlModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '123456',
      database: 'test_nestjs',
      retryDelay: 500,
      retryAttempts: 10,
      synchronize: true,
      autoLoadEntities: true,
    }),
  ],
  controllers: [GirlController],
  providers: [GirlService],
})
export class AppModule {}
