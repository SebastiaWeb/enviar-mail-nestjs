import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { JwtStrategy } from './generarToken/jwt.strategy';
import { MailModule } from './Mail/mail.module';
import { GenerarTokenModule } from './generarToken/generartoken.module';

@Module({
  imports: [ MailModule, GenerarTokenModule, ConfigModule.forRoot()],
  controllers: [AppController],
  providers: [AppService,JwtStrategy],
})
export class AppModule {}
