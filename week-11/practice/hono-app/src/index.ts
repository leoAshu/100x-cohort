import { Hono, MiddlewareHandler } from 'hono'
import { Env } from 'hono/netlify'

const app = new Hono()

const authMiddleware: MiddlewareHandler<Env, never, {}> = async (c, next) => {
    if (c.req.header('Authorization')) {
        // Do validation
        await next()
    } else {
        return c.json({
            message: 'You do not have access!'
        })
    }
}

app.get('/', (c) => {
    return c.json({
        message: 'Live'
    })
})

app.post('/', authMiddleware, async (c) => {
    const body = await c.req.json()
    console.log(body)
    console.log(c.req.header('Authorization'))
    console.log(c.req.query('param'))

    return c.json({
        message: 'Hello there'
    })
})

export default app
