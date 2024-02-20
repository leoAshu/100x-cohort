import { Hono } from 'hono'
import { userRoute } from './routes'

const app = new Hono()

app.get('/', (c) => {
    return c.json({
        message: 'Live!'
    })
})

app.route('/users', userRoute)

export default app
