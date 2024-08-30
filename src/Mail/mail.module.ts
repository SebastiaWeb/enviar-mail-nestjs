import { Module } from "@nestjs/common";

// Librerias
import { MailerModule } from '@nestjs-modules/mailer';
import { PugAdapter } from '@nestjs-modules/mailer/dist/adapters/pug.adapter';
import { ConfigModule } from "@nestjs/config";
import { MailController } from "./mail.controller";
import { EMailService } from "./email.service";


@Module({
    imports: [ConfigModule.forRoot(), MailerModule.forRoot({
        transport: {
            host: 'smtp-mail.outlook.com',
            port: 587,
            secure: false, // true para 465, false para otros puertos
            auth: {
                user: process.env.EMAIL, // tu correo de Outlook
                pass: process.env.PASWORD, // tu contraseña de Outlook
            },
        },
        defaults: {
            from: '"Sebastian Carmona" <sebastia172003@hotmail.com>',
        }
    }),

    ],
    exports: [],
    controllers: [MailController],
    providers: [EMailService],
})
export class MailModule {

}