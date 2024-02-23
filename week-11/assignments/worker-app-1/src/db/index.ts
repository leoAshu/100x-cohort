import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { env } from 'hono/adapter'

let prisma: PrismaClient

const getPrismaClient = (c: any) => {
    if (prisma) {
        return prisma
    }

    const { DATABASE_URL } = env<{ DATABASE_URL: string }>(c)
    return new PrismaClient({ datasourceUrl: DATABASE_URL }).$extends(withAccelerate())
}

export { getPrismaClient }
