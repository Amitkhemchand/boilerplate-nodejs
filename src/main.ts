import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  console.log("Database connected Successfully!!!!")
}

main()
  .catch((e) => console.error(e))