const fs = require('fs')
const express = require('express')
const bodyParser = require('body-parser')

const app = express()
const PORT = 3000

app.use(bodyParser.json())

const file = './todos.json'

app.get('/todos', (req, res) => {
    fs.readFile(file, (err, data) => {
        const todos = JSON.parse(data)
        res.status(200).json({ todos })
    })
})

app.get('/todos/:id', (req, res) => {
    fs.readFile(file, (err, data) => {
        let todos = JSON.parse(data)
        const todoId = parseInt(req.params.id)
        const todo = todos.find((todo) => todo.id === todoId)

        if (todo) {
            res.status(200).json({ todo })
        } else {
            res.status(404).json({ error: 'Not found.' })
        }
    })
})

app.post('/todos', (req, res) => {
    fs.readFile(file, (err, data) => {
        const todos = JSON.parse(data)
        const newTodo = req.body
        const newTodoId = todos.length > 0 ? todos[todos.length - 1].id + 1 : 1
        newTodo.id = newTodoId
        todos.push(newTodo)

        fs.writeFileSync(file, JSON.stringify(todos))

        res.status(201).json({ id: newTodoId })
    })
})

app.put('/todos/:id', (req, res) => {
    fs.readFile(file, (err, data) => {
        const todos = JSON.parse(data)

        const todoId = parseInt(req.params.id)
        const todoIndex = todos.findIndex((todo) => todo.id === todoId)

        if (todoIndex !== -1) {
            todos[todoIndex] = { ...todos[todoIndex], ...req.body }

            fs.writeFile(file, JSON.stringify(todos), () => {})

            res.status(200).json({ data: 'Todo successfully updated.' })
        } else {
            res.status(404).json({ error: 'Todo not found.' })
        }
    })
})

app.delete('/todos/:id', (req, res) => {
    fs.readFile(file, (err, data) => {
        const todos = JSON.parse(data)

        const todoId = parseInt(req.params.id)
        const todoIndex = todos.findIndex((todo) => todo.id === todoId)

        if (todoIndex !== -1) {
            todos.splice(todoIndex, 1)

            fs.writeFile(file, JSON.stringify(todos), () => {})

            res.status(200).json({ message: 'Todo successfully deleted.' })
        } else {
            res.status(404).json({ error: 'Todo not found.' })
        }
    })
})

app.listen(PORT, () => {
    console.log(`Server started on port: ${PORT}`)
})
