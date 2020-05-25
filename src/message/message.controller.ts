import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  NotFoundException,
  Param,
  Post,
  Put,
  Query,
  Res,
} from '@nestjs/common';
import { MessageService } from './message.service';
import { AddMessageDTO } from './dto/add-message.dto';
import { LikeDTO } from './dto/like.dto';

@Controller('message')
export class MessageController {
  constructor(private messageService: MessageService) {}

  @Post('/add')
  async addMessage(@Res() res, @Body() addMessageDTO: AddMessageDTO) {
    const message = await this.messageService.addMessage(addMessageDTO);
    return res.status(HttpStatus.OK).json(message);
  }

  @Put('/like')
  async addLike(@Res() res, @Body() likeDTO: LikeDTO) {
    const message = await this.messageService.addLike(likeDTO);
    return res.status(HttpStatus.OK).json(message);
  }

  @Get('messages')
  async getAllMessages(@Res() res) {
    const messages = await this.messageService.getAllMessages();
    return res.status(HttpStatus.OK).json(messages);
  }

  @Get('message/:messageID')
  async getMessage(@Res() res, @Param('messageID') messageID) {
    const message = await this.messageService.getMessage(messageID);
    if (!message) {
      throw new NotFoundException('Message does not exist!');
    }
    return res.status(HttpStatus.OK).json(message);
  }

  @Delete('/delete')
  async deleteMessage(@Res() res, @Query('messageId') messageID) {
    const message = await this.messageService.deleteMessage(messageID);
    if (!message) {
      throw new NotFoundException('Message does not exist');
    }
    return res.status(HttpStatus.OK).json(message);
  }
}
