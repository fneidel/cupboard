import { PrismaClient } from '@prisma/client'

const additionalBrands = [] as const
const additionalSources = [] as const

const prisma = new PrismaClient()

async function seedLookups() {
  const [unknownBrand, unknownSource] = await Promise.all([
    prisma.brand.findUnique({ where: { id: 1 } }),
    prisma.source.findUnique({ where: { id: 1 } }),
  ])

  if (unknownBrand?.name !== 'UNKNOWN' || unknownSource?.name !== 'UNKNOWN') {
    throw new Error('Run the initial migration before seeding lookup values')
  }

  for (const name of additionalBrands) {
    await prisma.brand.upsert({
      where: { name },
      update: {},
      create: { name },
    })
  }

  for (const name of additionalSources) {
    await prisma.source.upsert({
      where: { name },
      update: {},
      create: { name },
    })
  }
}

seedLookups()
  .then(() => prisma.$disconnect())
  .catch(async error => {
    await prisma.$disconnect()
    throw error
  })
