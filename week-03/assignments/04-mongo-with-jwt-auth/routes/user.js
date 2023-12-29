const { Router } = require('express')
const jwt = require('jsonwebtoken')
const { User, Course } = require('../db')
const userMiddleware = require('../middleware/user')

const router = Router()

// User Routes
router.post('/signup', async (req, res) => {
    const { username, password } = req.body

    const userExists = await User.findOne({ username })
    if (userExists) {
        res.status(400).json({ err: 'Username already exists' })
        return
    }

    await User.create({
        username,
        password
    })

    res.status(200).json({ msg: 'User created successfully' })
})

router.post('/signin', async (req, res) => {
    const { username, password } = req.body

    const userExists = await User.findOne({ username, password })
    if (!userExists) {
        res.status(403).json({ err: "User doesn't exist" })
        return
    }

    const token = jwt.sign({ username, password }, 'secret')

    res.status(200).json({ token })
})

router.get('/courses', async (req, res) => {
    const courses = await Course.find({})
    res.status(200).json({ courses })
})

router.post('/courses/:courseId', userMiddleware, async (req, res) => {
    const username = req.headers.username
    const courseId = req.params.courseId

    await User.updateOne({ username }, { $push: { purchasedCourses: courseId } })

    res.status(200).json({ msg: 'Course purchased successfully' })
})

router.get('/purchasedCourses', userMiddleware, async (req, res) => {
    const username = req.headers.username

    const user = await User.findOne({ username })

    const courses = await Course.find({
        _id: {
            $in: user.purchasedCourses
        }
    })

    res.status(200).json({ courses })
})

module.exports = router
