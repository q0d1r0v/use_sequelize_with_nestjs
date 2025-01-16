// comments.model.ts
import { Column, Model, Table, ForeignKey, BelongsTo } from 'sequelize-typescript';
import { Posts } from './posts.model';

@Table
export class Comments extends Model {
  @Column
  content: string;

  @ForeignKey(() => Posts)
  @Column
  post_id: number;

  @BelongsTo(() => Posts)
  post: Posts;
}
