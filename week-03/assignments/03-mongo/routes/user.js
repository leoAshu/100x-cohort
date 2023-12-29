const { Router } = require('express')
const router = Router()
const userMiddleware = require('../middleware/user')
const { User, Course } = require('../db')

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
