import express from 'express'
import { prisma } from './prisma'
import nodemailer from 'nodemailer'
import { SubmitFeedbackUseCase } from './repositories/use-cases/submit-feedback-use-case';
import { PrismaFeedbackRepository } from './repositories/prisma/prisma-feedbacks-repository';
import { NodemailerMailAdpater } from './adapters/nodemailer-mail-adpater';


export const routes = express.Router()




routes.post("/feedbacks", async (req, res) => {
    const { type, comment, screenshot } = req.body

    const prismaFeedbackRepository = new PrismaFeedbackRepository()
    const nodemailerMailAdpater = new NodemailerMailAdpater()
    const submitFeedbackUseCase = new SubmitFeedbackUseCase(
        prismaFeedbackRepository, 
        nodemailerMailAdpater

    )
    // no feedback return
     await submitFeedbackUseCase.execute({
        type,
        comment,
        screenshot
    })

 
    // const { messageId } = emailResult
    // returning the req.body inside a data object
    return res.status(201).send()
})