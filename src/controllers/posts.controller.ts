import { Body, Controller, Get, Post } from '@nestjs/common';
import { PostsService } from '../services/posts.service';
import { Posts } from 'src/models/posts.model';
import { CreatePostDto } from 'src/validations/posts.dto';

@Controller('/api/v1')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @Get('/load/posts')
  loadPosts() {
    return this.postsService.loadPosts();
  }

  @Post('/create/post')
  async createPost(@Body() postData: CreatePostDto) {
    return this.postsService.createPost(postData);
  }
}
