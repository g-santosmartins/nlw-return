import express from 'express'
import { type } from 'os'
import { prisma } from './prisma'
import nodemailer from 'nodemailer'
import { routes } from './routes'

const app = express()

app.use(express.json())
app.use(routes)



app.listen(3333, () => console.log("Server is running on 3333"))