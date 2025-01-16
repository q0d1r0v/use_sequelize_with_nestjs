import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Sequelize } from 'sequelize';
import { Comments } from 'src/models/comments.model';
import { Posts } from 'src/models/posts.model';

@Injectable()
export class PostsService {
  constructor(
    @InjectModel(Posts)
    private readonly postModel: typeof Posts,
  ) {}
  loadPosts() {
    return this.postModel.findAll({
      include: [
        {
          model: Comments,
          required: false,
        },
      ],
      order: [
        ['created_at', 'DESC'],
      ],
    });
  }

  async createPost(
    data: Partial<Posts>,
  ): Promise<{ statusCode: number; message: string; data?: Posts }> {
    try {
      const post = await this.postModel.create(data);

      return {
        statusCode: HttpStatus.CREATED,
        message: 'Post successfully created',
        data: post,
      };
    } catch (error) {
      throw new HttpException(
        {
          statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
          message: 'Failed to create post',
        },
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
