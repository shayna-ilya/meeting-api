import { IsString, IsNumber, IsOptional, IsDate } from 'class-validator';

export class AddMessageDTO {
  @IsString() @IsOptional() readonly email: string;
  @IsString() @IsOptional() readonly userName: string;
  @IsNumber() @IsOptional() readonly likes: number;
  @IsString() readonly message: string;
  @IsNumber() readonly latitude: number;
  @IsNumber() readonly longitude: number;
  @IsDate() @IsOptional() readonly createdAt: Date;
}
