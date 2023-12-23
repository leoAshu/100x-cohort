const mongoose = require('mongoose')

// Connect to MongoDB
mongoose
    .connect('mongodb+srv://ashutoshojha2009:123412312@cluster0.tqadczh.mongodb.net/100xCohort')
    .then(() => console.log('DB connected'))
    .catch((err) => console.log(err))

// Define schemas
const AdminSchema = new mongoose.Schema({
    id: { type: String, required: true, unique: true },
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true }
})

const UserSchema = new mongoose.Schema({
    id: { type: String, required: true, unique: true },
    username: { type: String, required: true },
    password: { type: String, required: true },
    purchasedCourses: { type: [String], required: true }
})

const CourseSchema = new mongoose.Schema({
    id: { type: String, required: true, unique: true },
    title: { type: String, required: true },
    description: { type: String },
    price: { type: Number, required: true },
    image: { type: String },
    createdBy: { type: String }
})

const Admin = mongoose.model('Admin', AdminSchema)
const User = mongoose.model('User', UserSchema)
const Course = mongoose.model('Course', CourseSchema)

module.exports = {
    Admin,
    User,
    Course
}
