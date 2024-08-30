import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class MailDto {
  @ApiProperty({ example: 'example@x.com', description: 'email of user' })
  @IsString()
  to: string;

  @ApiProperty({ example: 'Juan', description: 'Name of the user' })
  @IsString()
  name: string;

  @ApiProperty({ example: 'Hey...', description: 'Description of the user' })
  @IsString()
  description: string;
}
