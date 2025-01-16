import { Module } from '@nestjs/common';
import { PostsService } from '../services/posts.service';
import { PostsController } from '../controllers/posts.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Posts } from '../models/posts.model';
import { Comments } from '../models/comments.model';

@Module({
  imports: [SequelizeModule.forFeature([Posts, Comments])],
  controllers: [PostsController],
  providers: [PostsService],
})
export class PostsModule {}
