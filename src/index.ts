import { PrismaClient } from '@prisma/client'
import express from 'express'


const prisma = new PrismaClient()

// add new comment
const app = express()

app.use(express.json())

app.get('/api', async (req, res) => {
    res.send('Hello World!');
})

app.listen(3002, () =>
  console.log('REST API server ready at: http://localhost:3002'),
)