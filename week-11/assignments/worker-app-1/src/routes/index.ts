import zod from 'zod'
import userRoute from './user'

const userSignupSchema = zod.object({
    username: zod.string().min(3).max(30),
    email: zod.string().email(),
    password: zod.string().min(6)
})

const userSigninSchema = zod.object({
    email: zod.string().email(),
    password: zod.string()
})

export { userSignupSchema, userSigninSchema, userRoute }
