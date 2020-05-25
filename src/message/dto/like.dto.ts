import { IsString } from 'class-validator';

export class LikeDTO {
  @IsString() readonly id: string;
}
