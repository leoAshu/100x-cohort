const mongoose = require('mongoose')

// Connect to MongoDB
mongoose
    .connect('mongodb+srv://ashutoshojha2009:123412312@cluster0.tqadczh.mongodb.net/100xCohort')
    .then(() => console.log('DB connected'))
    .catch((err) => console.log(err))

// Define schemas
const AdminSchema = new mongoose.Schema({
    username: String,
    password: String
})

const UserSchema = new mongoose.Schema({
    username: String,
    password: String,
    purchasedCourses: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Course'
        }
    ]
})

const CourseSchema = new mongoose.Schema({
    title: String,
    description: String,
    imageLink: String,
    price: Number
})

const Admin = mongoose.model('Admin', AdminSchema)
const User = mongoose.model('User', UserSchema)
const Course = mongoose.model('Course', CourseSchema)

module.exports = {
    Admin,
    User,
    Course
}
