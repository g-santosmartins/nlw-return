import express from 'express'
import { type } from 'os'
import { prisma } from './prisma'
import nodemailer from 'nodemailer'

const app = express()

app.use(express.json())


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

app.post("/feedbacks", async (req, res) => {
    const { type, comment, screenshot } = req.body


    // wating to save on db
    const feedback = await prisma.feedback.create({
        data: {
            type,
            comment,
            screenshot
        }
    })


    const emailResult = await transport.sendMail({
        from: "Equipe Feedget <oi@feedget.com>",
        to: "Guilherme dos Santos Martins <gui1998santos@gmail.com>",
        subject: "Novo feedback",

        // hack to use template string with lines within
        html: [
            `<div style="font-family: sans-serif; font-size:16px color: #111">`,
            `<p>Tipo do feedback: ${type}</p>`,
            `<p>Comentário: ${comment}</p>`,
            `</div>`,

        ].join('\n')

    })
    const { messageId } = emailResult
    // returning the req.body inside a data object
    return res.status(201).json({
        data: feedback,
        email: { id: messageId }
    })
})

app.listen(3333, () => console.log("Server is running on 3333"))