import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Message } from './interfaces/message.interface';
import { AddMessageDTO } from './dto/add-message.dto';

@Injectable()
export class MessageService {
  constructor(
    @InjectModel('Message') private readonly messageModel: Model<Message>,
  ) {}

  async getAllMessages(): Promise<Message[]> {
    return await this.messageModel.find().exec();
  }

  async getMessage(id): Promise<Message> {
    return await this.messageModel.findById(id).exec();
  }

  async addLike(id): Promise<Message> {
    const updatedMessage = await this.getMessage(id);
    if (updatedMessage.likes) {
      updatedMessage.likes = updatedMessage.likes + 1;
    } else {
      updatedMessage.likes = 1;
    }
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
