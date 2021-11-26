import { PrismaClient } from '@prisma/client'
import express from 'express'


const prisma = new PrismaClient()


const app = express()

app.use(express.json())

app.get('/api', async (req, res) => {
    res.send('Hello World!');
})

app.listen(3000, () =>
  console.log('REST API server ready at: http://localhost:3000'),
)