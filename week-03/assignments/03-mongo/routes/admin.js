const { Router } = require('express')
const adminMiddleware = require('../middleware/admin')
const { Admin, Course } = require('../db')
const generateUniqueId = require('../utils')
const router = Router()

// Admin Routes
router.route('/signup').post(async (req, res) => {
    const { username, password } = req.body

    const adminExists = await Admin.findOne({ username })
    if (adminExists) {
        res.status(400).json({ err: 'Username already exists' })
        return
    }

    const admin = new Admin({
        id: generateUniqueId(),
        username: username,
        password: password,
    })
    await admin.save()
    res.status(200).json({ msg: 'Admin signup successful' })
})

router.route('/courses').post(adminMiddleware, async (req, res) => {
    const username = req.headers.username
    const { title, description, price, image } = req.body

    const course = new Course({
        id: generateUniqueId(),
        title,
        description,
        price,
        image,
        createdBy: username,
    })

    await course.save()
    res.status(200).json({ msg: 'Course creation successful' })
})

router.route('/courses').get(adminMiddleware, async (req, res) => {
    const username = req.headers.username

    const courses = await Course.find({ createdBy: username })

    res.status(202).json({ courses })
})

module.exports = router
