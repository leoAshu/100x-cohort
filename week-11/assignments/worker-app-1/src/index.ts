import { Hono } from 'hono'
import { postRoute, userRoute } from './routes'

const app = new Hono()

app.get('/', (c) => {
    return c.json({
        message: 'Live!'
    })
})

app.route('/users', userRoute)
app.route('/posts', postRoute)

export default app
