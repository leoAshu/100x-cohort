const { User } = require('../db')

async function userMiddleware(req, res, next) {
    // Implement user auth logic
    // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected
    const username = req.headers.username
    const password = req.headers.password

    const userExists = await User.findOne({ username, password })
    if (!userExists) {
        res.status(403).json({ error: "User doesn't exist" })
        return
    }
    next()
}

module.exports = userMiddleware
