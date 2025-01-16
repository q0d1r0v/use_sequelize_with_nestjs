import { Module } from '@nestjs/common';
import {PostsModule} from "./modules/posts.module"
import { ConfigModule } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';
import * as dotenv from 'dotenv';

dotenv.config();
@Module({
  imports: [
    ConfigModule.forRoot(),
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: process.env.DB_HOST || 'localhost',
      port: Number(process.env.DB_PORT) || 5432,
      username: process.env.DB_USER || 'postgres',
      password: process.env.DB_PASSWORD || 'db_pasword',
      database: process.env.DB_NAME || 'db_name',
      autoLoadModels: true,
      synchronize: true,
    }),
    PostsModule,
  ],
})
export class AppModule {}
