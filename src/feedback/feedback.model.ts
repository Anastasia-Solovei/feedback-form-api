import { ApiProperty } from '@nestjs/swagger';
import { Column, DataType, Model, Table } from 'sequelize-typescript';

interface FeedbackCreationAttrs {
  name: string;
  email: string;
  message: string;
}

@Table({ tableName: 'feedback' })
export class Feedback extends Model<Feedback, FeedbackCreationAttrs> {
  @ApiProperty({ example: '1', description: 'Unique id number' })
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({ example: 'Elon Mask', description: 'User name' })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  name: string;

  @ApiProperty({ example: 'example@gmail.com', description: 'User email' })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  email: string;

  @ApiProperty({ example: 'I love this product!', description: 'Message' })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  message: string;
}
