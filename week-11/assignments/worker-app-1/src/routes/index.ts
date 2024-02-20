import zod from 'zod'
import userRoute from './user'
import postRoute from './post'

const userSignupSchema = zod.object({
    username: zod.string().min(3).max(30),
    email: zod.string().email(),
    password: zod.string().min(6)
})

const userSigninSchema = zod.object({
    email: zod.string().email(),
    password: zod.string()
})

const createPostSchema = zod.object({
    title: zod.string(),
    body: zod.string()
})

const updatePostSchema = zod.object({
    title: zod.string(),
    body: zod.string()
})

export { userSignupSchema, userSigninSchema, userRoute, createPostSchema, updatePostSchema, postRoute }
