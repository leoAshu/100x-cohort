const { Router } = require('express')
const adminMiddleware = require('../middleware/admin')
const { Admin, Course } = require('../db')
const router = Router()

// Admin Routes
router.post('/signup', async (req, res) => {
    const { username, password } = req.body

    const adminExists = await Admin.findOne({ username })
    if (adminExists) {
        res.status(400).json({ err: 'Username already exists' })
        return
    }

    await Admin.create({
        username: username,
        password: password
    })

    res.status(200).json({ msg: 'Admin created successfully' })
})

router.post('/courses', adminMiddleware, async (req, res) => {
    const { title, description, price, imageLink } = req.body

    const courseExists = await Course.findOne({ title, description })
    if (courseExists) {
        res.status(403).json({ err: 'Course already exists' })
        return
    }

    const newCourse = await Course.create({
        title,
        description,
        imageLink,
        price
    })

    res.status(200).json({ msg: 'Course created successfully', courseId: newCourse._id })
})

router.get('/courses', adminMiddleware, async (req, res) => {
    const courses = await Course.find({})

    res.status(200).json({ courses })
})

module.exports = router
