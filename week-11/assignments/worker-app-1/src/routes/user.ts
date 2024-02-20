import { Hono } from 'hono'
import { generateToken } from '../jwt'
import { getPrismaClient } from '../db'
import { userSignupSchema, userSigninSchema } from '.'

const userRoute = new Hono()

userRoute.post('/signup', async (c) => {
    const result = userSignupSchema.safeParse(await c.req.json())

    if (!result.success) {
        return c.json({
            errorField: result.error.issues[0].path[0],
            errorMessage: result.error.issues[0].message
        })
    }

    const prisma = getPrismaClient(c)

    const existingUser = await prisma.user.findFirst({
        where: {
            email: result.data.email
        }
    })

    if (existingUser) {
        return c.json({
            message: 'Email already exists!'
        })
    }

    const user = await prisma.user.create({
        data: {
            email: result.data.email,
            password: result.data.password,
            username: result.data.username
        }
    })

    const token = await generateToken({ username: user.username, email: user.email })

    return c.json({
        message: 'Signup successful!',
        token
    })
})

userRoute.post('/signin', async (c) => {
    const result = userSigninSchema.safeParse(await c.req.json())

    if (!result.success) {
        return c.json({
            errorField: result.error.issues[0].path[0],
            errorMessage: result.error.issues[0].message
        })
    }

    const prisma = getPrismaClient(c)

    const existingUser = await prisma.user.findFirst({
        where: {
            email: result.data.email
        }
    })

    if (!existingUser) {
        return c.json({
            message: 'User does not exist!'
        })
    }

    const token = await generateToken({ username: existingUser.username, email: existingUser.email })

    return c.json({
        message: 'Signin successful!',
        token
    })
})

export default userRoute
