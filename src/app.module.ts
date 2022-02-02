import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FeedbackModule } from './feedback/feedback.module';
require('dotenv').config();

const uri = process.env.DB_HOST;

@Module({
  imports: [FeedbackModule, MongooseModule.forRoot(`${uri}`)],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
