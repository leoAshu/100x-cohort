const express = require('express')
const jwt = require('jsonwebtoken')
const mongoose = require('mongoose')
const jwtPassword = '123456'

mongoose.connect('your_mongo_url')

const User = mongoose.model('User', {
    name: String,
    username: String,
    pasword: String,
})

const app = express()
app.use(express.json())

function userExists(username, password) {
    const user = User.findOne({ username, password })
    return user ? true : false
}

app.post('/signup', async (req, res) => {
    const username = req.body.username
    const password = req.body.password
    const name = req.body.name

    const existingUser = await User.findOne({ email: username })

    if (existingUser) {
        return res.status(400).json({ msg: 'Username already exists' })
    }

    const user = new User({
        name: name,
        email: email,
        password: password,
    })

    await user.save()
    res.json({
        msg: 'User created successfully',
    })
})

app.post('/signin', async function (req, res) {
    const username = req.body.username
    const password = req.body.password

    if (!userExists(username, password)) {
        return res.status(403).json({
            msg: 'User doesnt exist in our in memory db',
        })
    }

    var token = jwt.sign({ username: username }, jwtPassword)
    return res.json({
        token,
    })
})

app.get('/users', function (req, res) {
    const token = req.headers.authorization
    try {
        const decoded = jwt.verify(token, jwtPassword)
        const username = decoded.username
        // return a list of users other than this username from the database
    } catch (err) {
        return res.status(403).json({
            msg: 'Invalid token',
        })
    }
})

app.listen(3000)
