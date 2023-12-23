const jwt = require('jsonwebtoken')
const { User } = require('../db')

async function userMiddleware(req, res, next) {
    // Implement user auth logic
    // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected
    try {
        const token = req.headers.authorization.split(' ')[1]
        const { username, password } = jwt.verify(token, 'secret')

        const userExists = await User.findOne({ username, password })
        if (!userExists) {
            res.status(400).json({ error: 'Invalid credentials' })
            return
        }
        req.headers.username = username
        next()
    } catch (err) {
        res.status(400).json({ error: 'Invalid token' })
    }
}

module.exports = userMiddleware
