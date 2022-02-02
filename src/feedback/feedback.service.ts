import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateFeedbackDto } from './dto/create-feedback.dto';
import { Feedback } from './feedback.model';

@Injectable()
export class FeedbackService {
  constructor(
    @InjectModel(Feedback) private feedbackRepository: typeof Feedback,
  ) {}

  async getAll() {
    const allFeedback = await this.feedbackRepository.findAll();
    return allFeedback;
  }

  async create(dto: CreateFeedbackDto) {
    const newFeedback = await this.feedbackRepository.create(dto);
    return newFeedback;
  }
}
