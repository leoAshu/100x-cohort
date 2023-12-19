const mongoose = require('mongoose')

// Connect to MongoDB
mongoose.connect('mongodb+srv://ashutoshojha2009:123412312@cluster0.tqadczh.mongodb.net/100xCohort')

// Define schemas
const AdminSchema = new mongoose.Schema({
    username: { type: String, required: true },
    password: { type: String, required: true },
})

const UserSchema = new mongoose.Schema({
    username: { type: String, required: true },
    password: { type: String, required: true },
})

const CourseSchema = new mongoose.Schema({
    id: { type: Number, required: true },
    title: { type: String, required: true },
    description: { type: String },
    price: { type: Number, required: true },
    imageLink: { type: String },
    published: { type: Boolean },
})

const Admin = mongoose.model('Admin', AdminSchema)
const User = mongoose.model('User', UserSchema)
const Course = mongoose.model('Course', CourseSchema)

module.exports = {
    Admin,
    User,
    Course,
}
