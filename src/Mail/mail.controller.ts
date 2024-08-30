import { Controller, Post, Body } from '@nestjs/common';
import { ApiBody, ApiTags } from '@nestjs/swagger';
import { MailDto } from './dto/mail.dto';
import { EMailService } from './email.service';

@ApiTags('Mail')
@Controller('mail')
export class MailController {
  constructor(private readonly emailService: EMailService) {}

  @Post('/enviarMail')
  @ApiBody({ type: MailDto })
  async enviarMail(@Body() mailDto: MailDto) {
    await this.emailService.sendWelcomeEmail(
      mailDto.to,
      mailDto.name,
      mailDto.description,
    );
    return { message: 'Correo enviado exitosamente' };
  }
}
