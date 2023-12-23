const jwt = require('jsonwebtoken')
const { User, Admin } = require('../db')

// Middleware for handling auth
async function adminMiddleware(req, res, next) {
    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
    try {
        const token = req.headers.authorization.split(' ')[1]
        const { username, password } = jwt.verify(token, 'secret')

        const adminExists = await Admin.findOne({ username, password })
        if (!adminExists) {
            res.status(400).json({ error: 'Invalid credentials' })
            return
        }
        req.headers.username = username
        next()
    } catch (err) {
        res.status(400).json({ error: 'Invalid token' })
    }
}

module.exports = adminMiddleware
