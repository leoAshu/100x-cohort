import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { env } from 'hono/adapter'

let prisma: PrismaClient

const getPrismaClient = (c: any) => {
    if (prisma) {
        return prisma
    }

    let { DATABASE_URL } = env<{ DATABASE_URL: string }>(c)

    if (!DATABASE_URL) {
        DATABASE_URL =
            'prisma://accelerate.prisma-data.net/?api_key=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcGlfa2V5IjoiYTA3YThjMTgtOTYxMi00MDg5LWEzYWMtODljZDQxZDE1MWZmIiwidGVuYW50X2lkIjoiZGI4YjNiOTAzYzJkZWFlYzU2NGQ1OTYwOTI3OGNhZWQxN2EyMjFjNGViNDM1OTg1YTIyNGM3OGE3NDRkNWQ4OSIsImludGVybmFsX3NlY3JldCI6IjkzN2FmMGQ5LTRiNTYtNDlmNy1hYzIzLTFlZmI4M2MyODJmMyJ9.ak05nELXsOVHylzJnOd2A5LMwEiaYlmuOr8TL2vnYjY'
    }

    return new PrismaClient({ datasourceUrl: DATABASE_URL }).$extends(withAccelerate())
}

export { getPrismaClient }
