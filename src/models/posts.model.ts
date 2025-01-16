import { Table, Column, Model, DataType, HasMany } from 'sequelize-typescript';
import { Comments } from './comments.model';

@Table({
  tableName: 'posts',
  timestamps: true,
  underscored: true
})
export class Posts extends Model {
  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  })
  id: number;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  title: string;

  @Column({
    type: DataType.TEXT,
    allowNull: false,
  })
  description: string;

  @HasMany(() => Comments)
  comments: Comments[];
}
