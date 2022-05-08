import express from 'express'
import { prisma } from './prisma'
import nodemailer from 'nodemailer'
import { SubmitFeedbackUseCase } from './repositories/use-cases/submit-feedback-use-case';
import { PrismaFeedbackRepository } from './repositories/prisma/prisma-feedbacks-repository';


export const routes = express.Router()


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


routes.post("/feedbacks", async (req, res) => {
    const { type, comment, screenshot } = req.body


    const prismaFeedbackRepository = new PrismaFeedbackRepository()
    const submitFeedbackUseCase = new SubmitFeedbackUseCase(
        prismaFeedbackRepository
    )
    // no feedback return
     await submitFeedbackUseCase.execute({
        type,
        comment,
        screenshot
    })

    // const emailResult = await transport.sendMail({
    //     from: "Equipe Feedget <oi@feedget.com>",
    //     to: "Guilherme dos Santos Martins <gui1998santos@gmail.com>",
    //     subject: "Novo feedback",

    //     // hack to use template string with lines within
    //     html: [
    //         `<div style="font-family: sans-serif; font-size:16px color: #111">`,
    //         `<p>Tipo do feedback: ${type}</p>`,
    //         `<p>Comentário: ${comment}</p>`,
    //         `</div>`,

    //     ].join('\n')

    // })
    // const { messageId } = emailResult
    // returning the req.body inside a data object
    return res.status(201).send()
})