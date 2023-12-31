const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://ashutoshojha2009:123412312@cluster0.tqadczh.mongodb.net/100xCohort')

const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: {
        type: Boolean,
        default: false
    }
})

const Todo = mongoose.model('Todo', todoSchema)

module.exports = {
    Todo
}
