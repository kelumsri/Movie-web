import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  // ... you will write your Prisma Client queries here
  const Film = await prisma.film.create({
    data: {
        film_name: 'test name',   
        director_name: 'test director', 
        category: 'c1',
        cast_members: 'test member',
        summery: 'test sumery',
        image: 'http//',
    },
  })
  console.log(Film)
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })