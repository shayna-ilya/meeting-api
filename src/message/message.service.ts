import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Message } from './interfaces/message.interface';
import { AddMessageDTO } from './dto/add-message.dto';
import { LikeDTO } from './dto/like.dto';

@Injectable()
export class MessageService {
  constructor(
    @InjectModel('Message') private readonly messageModel: Model<Message>,
  ) {}

  async getAllMessages(): Promise<Message[]> {
    return await this.messageModel.find().exec();
  }

  async getMyMessages(email?: string): Promise<Message[]> {
    if (!email) {
      return [];
    }
    return await this.messageModel.find({ email: email }).exec();
  }

  async getMessage(id): Promise<Message> {
    return await this.messageModel.findById(id).exec();
  }

  async addLike({ id }: LikeDTO): Promise<Message> {
    const updatedMessage = await this.getMessage(id);
    if (updatedMessage.likes) {
      updatedMessage.likes = updatedMessage.likes + 1;
    } else {
      updatedMessage.likes = 1;
    }
    await this.messageModel.findByIdAndUpdate(id, updatedMessage, {
      new: true,
    });
    return updatedMessage;
  }

  async addMessage(addMessageDTO: AddMessageDTO): Promise<Message> {
    const newMessage = await this.messageModel(addMessageDTO);
    return newMessage.save();
  }

  async deleteMessage(id): Promise<any> {
    return await this.messageModel.findBy;
  }
}
