import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { FeedbackController } from './feedback.controller';
import { FeedbackService } from './feedback.service';
import { Feedback } from './feedback.model';

@Module({
  providers: [FeedbackService],
  controllers: [FeedbackController],
  imports: [SequelizeModule.forFeature([Feedback])],
})
export class FeedbackModule {}
