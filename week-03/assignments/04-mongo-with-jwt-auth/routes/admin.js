const { Router } = require('express')
const adminMiddleware = require('../middleware/admin')
const { Admin, Course } = require('../db')
const generateUniqueId = require('../utils')
const jwt = require('jsonwebtoken')

const router = Router()
const secret = 'secret'

// Admin Routes
router.post('/signup', async (req, res) => {
    // Implement admin signup logic
    const { username, password } = req.body

    const adminExists = await Admin.findOne({ username })
    if (adminExists) {
        res.status(400).json({ err: 'Username already exists' })
        return
    }

    const admin = new Admin({
        id: generateUniqueId(),
        username: username,
        password: password
    })
    await admin.save()
    res.status(200).json({ msg: 'Admin signup successful' })
})

router.post('/signin', async (req, res) => {
    // Implement admin signup logic
    const { username, password } = req.body

    const adminExists = await Admin.findOne({ username, password })
    if (!adminExists) {
        res.status(404).json({ err: 'Invalid credentials' })
        return
    }

    const token = jwt.sign({ username, password }, secret)

    res.status(200).json({ token })
})

router.post('/courses', adminMiddleware, async (req, res) => {
    // Implement course creation logic
    const username = req.headers.username
    const { title, description, price, image } = req.body

    const courseExists = await Course.findOne({ title, description, price })
    if (courseExists) {
        res.status(400).json({ err: 'Course already exists' })
        return
    }

    const course = new Course({
        id: generateUniqueId(),
        title,
        description,
        price,
        image,
        createdBy: username
    })

    await course.save()
    res.status(200).json({ msg: 'Course creation successful' })
})

router.get('/courses', adminMiddleware, async (req, res) => {
    // Implement fetching all courses logic
    const username = req.headers.username

    const courses = await Course.find({ createdBy: username })

    res.status(202).json({ courses })
})

module.exports = router
