const express = require('express')
const cors = require('cors')
const { createTodo, updateTodo } = require('./types')
const { Todo } = require('./db')

const PORT = 3000
const app = express()

app.use(cors())
app.use(express.json())

app.post('/todo', async (req, res) => {
    const createPayload = req.body
    const parsedPayload = createTodo.safeParse(createPayload)
    if (!parsedPayload.success) {
        res.status(411).json({
            msg: 'You sent the wrong inputs'
        })
        return
    }

    await Todo.create({
        title: createPayload.title,
        description: createPayload.description
    })

    res.json({
        msg: 'Todo created'
    })
})

app.get('/todos', async (req, res) => {
    const todos = await Todo.find({})

    res.json({ todos })
})

app.put('/completed', async (req, res) => {
    const updatePayload = req.body
    const parsedPayload = updateTodo.safeParse(updatePayload)
    if (!parsedPayload.success) {
        res.status(411).json({
            msg: 'You sent the wrong inputs'
        })
        return
    }

    await Todo.update(
        {
            _id: req.body.id
        },
        {
            completed: true
        }
    )

    res.json({
        msg: 'Todo marked as completed'
    })
})

app.listen(PORT, () => {
    console.log(`Server started at port ${PORT}`)
})

// What is <React.StrictMode> and why is it required?
