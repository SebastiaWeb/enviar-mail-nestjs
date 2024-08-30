import { MailerService } from "@nestjs-modules/mailer";
import { Injectable } from "@nestjs/common";

@Injectable()
export class EMailService {
    constructor(private readonly mailerService: MailerService) { }

    async sendWelcomeEmail(to: string, name: string, description: string) {
        await this.mailerService.sendMail({
            to,
            subject: `${name} esta intentando contactar se contigo`,
            text: description,
            // html: `<p>Hola <b>${name}</b>, estamos encantados de que te hayas unido a nosotros.</p>`, // opción para enviar HTML
        });
    }
}