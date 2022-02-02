import { ApiProperty } from '@nestjs/swagger';
import { IsString, Length, IsEmail } from 'class-validator';

export class CreateFeedbackDto {
  @ApiProperty({ example: 'Elon Mask', description: 'User name' })
  @IsString({ message: 'Should be a string' })
  @Length(1, 20, { message: 'No less than 1 and no more than 20' })
  readonly name: string;

  @ApiProperty({ example: 'example@gmail.com', description: 'User email' })
  @IsString({ message: 'Should be a string' })
  @IsEmail({}, { message: 'Email is not valid' })
  readonly email: string;

  @ApiProperty({ example: 'I love this product!', description: 'Message' })
  @IsString({ message: 'Should be a string' })
  @Length(1, 200, { message: 'No less than 1 and no more than 200' })
  readonly message: string;
}
