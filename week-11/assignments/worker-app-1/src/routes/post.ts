import { Hono } from 'hono'
import { getPrismaClient } from '../db'
import { createPostSchema, updatePostSchema } from '.'
import { authMiddleware } from '../auth'

const postRoute = new Hono()

postRoute.get('/', async (c) => {
    const posts = await getPrismaClient(c).blogPost.findMany({})

    return c.json({ posts })
})

postRoute.post('/', authMiddleware, async (c) => {
    const result = createPostSchema.safeParse(await c.req.json())

    if (!result.success) {
        return c.json({
            errorField: result.error.issues[0].path[0],
            errorMessage: result.error.issues[0].message
        })
    }

    const post = await getPrismaClient(c).blogPost.create({
        data: {
            title: result.data.title,
            body: result.data.body,
            authorId: c.get('userId')
        }
    })

    return c.json({
        message: 'Post created!',
        post
    })
})

postRoute.get('/:id', async (c) => {
    const id = Number(c.req.param('id'))
    const post = await getPrismaClient(c).blogPost.findFirst({ where: { id } })

    return c.json({ post })
})

postRoute.put('/:id', async (c) => {
    const id = Number(c.req.param('id'))
    const result = updatePostSchema.safeParse(await c.req.json())

    if (!result.success) {
        return c.json({
            errorField: result.error.issues[0].path[0],
            errorMessage: result.error.issues[0].message
        })
    }

    const post = await getPrismaClient(c).blogPost.update({
        data: {
            title: result.data.title,
            body: result.data.body
        },
        where: {
            id
        }
    })

    return c.json({
        message: 'Post updated!',
        post
    })
})

postRoute.delete('/:id', async (c) => {
    try {
        const id = Number(c.req.param('id'))
        const post = await getPrismaClient(c).blogPost.delete({ where: { id } })

        return c.json({ message: 'Post deleted!' })
    } catch (err) {
        return c.json({
            error: 'Post does not exist!'
        })
    }
})

export default postRoute
