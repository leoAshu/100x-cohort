const { Router } = require('express')
const adminMiddleware = require('../middleware/admin')
const { Admin } = require('../db')
const router = Router()

// Admin Routes
router.route('/signup').post(async (req, res) => {
    // Implement admin signup logic
    const { username, password } = req.body

    const adminExists = await Admin.findOne({ username })
    if (adminExists) {
        res.status(400).json({ err: 'Username already exists' })
        return
    }

    const admin = new Admin({
        username: username,
        password: password,
    })
    await admin.save()
    res.status(200).json({ msg: 'Admin signup successful' })
})

router.route('/courses').post(adminMiddleware, (req, res) => {
    // Implement course creation logic
})

router.route('/courses').get(adminMiddleware, (req, res) => {
    // Implement fetching all courses logic
})

module.exports = router
