import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const insertUser = async (email: string, password: string, firstName: string, lastName: string) => {
    const user = await prisma.user.create({
        data: {
            email,
            password,
            firstName,
            lastName
        }
    })

    console.log(user)
}

insertUser('a@b.com', 'password', 'First', 'Last')
