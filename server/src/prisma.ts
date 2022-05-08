import { PrismaClient } from "@prisma/client";

export const prisma = new PrismaClient({
    // always log the query in db
    log: ['query'],
})



