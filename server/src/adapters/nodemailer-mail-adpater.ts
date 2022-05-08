import { MailAdapter, SendMailData } from "./mail-adapter";
import nodemailer from 'nodemailer'

// sending with mailtrap free api
var transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
        // credentials
        user: "c653a49ed0ef02",
        pass: "807542a29e23f0"
    }
});

export class NodemailerMailAdpater implements MailAdapter {
    async sendMail({subject, body}: SendMailData) {

        const emailResult = await transport.sendMail({
            from: "Equipe Feedget <oi@feedget.com>",
            to: "Guilherme dos Santos Martins <gui1998santos@gmail.com>",
            subject: subject,
            // hack to use template string with lines within
            html: body

        })
    };

}