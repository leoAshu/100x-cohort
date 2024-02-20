import { Jwt } from 'hono/utils/jwt'

interface JWTArgs {
    username: string
    email: string
}

const JWT_SECRET = 'my-jwt-secret'

const generateToken = async (data: JWTArgs) => {
    return await Jwt.sign(data, JWT_SECRET)
}

export { generateToken }
