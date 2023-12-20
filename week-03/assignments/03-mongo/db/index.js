const mongoose = require('mongoose')

// Connect to MongoDB
mongoose
    .connect('mongodb+srv://ashutoshojha2009:123412312@cluster0.tqadczh.mongodb.net/100xCohort')
    .then(() => console.log('DB connected'))
    .catch((err) => console.log(err))

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
    title: { type: String, required: true },
    description: { type: String },
    price: { type: Number, required: true },
    imageLink: { type: String },
})

const Admin = mongoose.model('Admin', AdminSchema)
const User = mongoose.model('User', UserSchema)
const Course = mongoose.model('Course', CourseSchema)

module.exports = {
    Admin,
    User,
    Course,
}
