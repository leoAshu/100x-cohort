const { Router } = require('express')
const router = Router()
const userMiddleware = require('../middleware/user')
const { User, Course } = require('../db')
const generateUniqueId = require('../utils')

// User Routes
router.post('/signup', async (req, res) => {
    // Implement user signup logic
    const { username, password } = req.body

    const userExists = await User.findOne({ username })
    if (userExists) {
        res.status(400).json({ err: 'Username already exists' })
        return
    }

    const user = new User({
        id: generateUniqueId(),
        username: username,
        password: password,
        purchasedCourses: [],
    })
    await user.save()
    res.status(200).json({ msg: 'User signup successful' })
})

router.get('/courses', async (req, res) => {
    // Implement listing all courses logic
    const courses = await Course.find({})
    res.status(200).json({ courses })
})

router.post('/courses/:courseId', userMiddleware, async (req, res) => {
    // Implement course purchase logic
    const username = req.headers.username
    const courseId = req.params.courseId

    const user = await User.findOne({ username })
    if (user.purchasedCourses.indexOf(courseId) !== -1) {
        res.status(400).json({ err: 'Course already purchased' })
        return
    }
    user.purchasedCourses.push(courseId)
    await user.save()

    res.status(200).json({ msg: 'Course purchase successful' })
})

router.get('/purchasedCourses', userMiddleware, async (req, res) => {
    // Implement fetching purchased courses logic
    const username = req.headers.username

    const user = await User.findOne({ username })
    const purchasedCourseIds = user.purchasedCourses

    const purchasedCourses = await Promise.all(
        purchasedCourseIds.map(async (id) => {
            return await Course.findOne({ id })
        })
    )

    res.status(200).json({ courses: purchasedCourses })
})

module.exports = router
