import { MiddlewareHandler } from 'hono'
import { Jwt } from 'hono/utils/jwt'
import { getPrismaClient } from '../db'

interface JWTArgs {
    username: string
    email: string
}

const JWT_SECRET = 'my-jwt-secret'

const generateToken = async (data: JWTArgs) => {
    return await Jwt.sign(data, JWT_SECRET)
}

const authMiddleware: MiddlewareHandler = async (c, next) => {
    try {
        const token = c.req.header('Authorization')?.split(' ')[1]
        const { email } = await (Jwt.verify(token ?? '', JWT_SECRET) as Promise<JWTArgs>)

        const userExists = await getPrismaClient(c).user.findFirst({ where: { email } })
        if (!userExists) {
            return c.json({ error: 'You are not authenticated' })
        }

        c.set('userId', userExists.id)
        await next()
    } catch (err) {
        return c.json({
            error: 'You are not authenticated'
        })
    }
}

export { generateToken, authMiddleware }
