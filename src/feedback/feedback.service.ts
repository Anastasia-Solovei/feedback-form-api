import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateFeedbackDto } from './dto/create-feedback.dto';
import { Feedback, FeedbackDocument } from './schemas/feedback.schema';

@Injectable()
export class FeedbackService {
  constructor(
    @InjectModel(Feedback.name) private feedbackModel: Model<FeedbackDocument>,
  ) {}

  async getAll(): Promise<Feedback[]> {
    return this.feedbackModel.find().exec();
  }

  async getById(id: string): Promise<Feedback> {
    return this.feedbackModel.findById(id);
  }

  async create(feedbackDto: CreateFeedbackDto): Promise<Feedback> {
    const newFeedback = new this.feedbackModel(feedbackDto);
    return newFeedback.save();
  }
}
