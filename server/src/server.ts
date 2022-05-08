import express from 'express'
import { type } from 'os'
import { prisma } from './prisma'

const app = express()

app.use(express.json())

app.post("/feedbacks", async (req, res) => {
    const {type, comment, screenshot} = req.body


    // wating to save on db
   const feedback = await prisma.feedback.create({
        data: {
            type,
            comment,
            screenshot
        }
    })

    // returning the req.body inside a data object
    return res.status(201).json({data: feedback})
})

app.listen(3333, () => console.log("Server is running on 3333"))