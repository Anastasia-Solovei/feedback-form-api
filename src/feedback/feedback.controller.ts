import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { ApiOperation, ApiTags, ApiResponse } from '@nestjs/swagger';
import { CreateFeedbackDto } from './dto/create-feedback.dto';
import { Feedback } from './feedback.model';
import { FeedbackService } from './feedback.service';

@ApiTags('Feedback')
@Controller('feedback')
export class FeedbackController {
  constructor(private readonly feedbackService: FeedbackService) {}

  @ApiOperation({ summary: 'Get a list of feedback' })
  @ApiResponse({ status: 200, type: [Feedback] })
  @Get()
  @HttpCode(HttpStatus.OK)
  getAll() {
    return this.feedbackService.getAll();
  }

  @ApiOperation({ summary: 'Create new feedback' })
  @ApiResponse({ status: 200, type: Feedback })
  @UsePipes(ValidationPipe)
  @Post()
  @HttpCode(HttpStatus.CREATED)
  create(@Body() feedbackDto: CreateFeedbackDto) {
    return this.feedbackService.create(feedbackDto);
  }
}
