const { Router } = require('express')
const router = Router()
const userMiddleware = require('../middleware/user')
const { User } = require('../db')

// User Routes
router.route('/signup').post(async (req, res) => {
    // Implement user signup logic
    const { username, password } = req.body

    const userExists = await User.findOne({ username })
    if (userExists) {
        res.status(400).json({ err: 'Username already exists' })
        return
    }

    const user = new User({
        username: username,
        password: password,
    })
    await user.save()
    res.status(200).json({ msg: 'User signup successful' })
})

router.route('/courses').get((req, res) => {
    // Implement listing all courses logic
})

router.route('/courses/:courseId').post(userMiddleware, (req, res) => {
    // Implement course purchase logic
})

router.route('/purchasedCourses').get(userMiddleware, (req, res) => {
    // Implement fetching purchased courses logic
})

module.exports = router
