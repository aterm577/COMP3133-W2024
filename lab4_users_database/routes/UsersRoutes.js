const express = require('express')
const usersModel = require('../models/Users')

const app = express()

app.post('/users', async (req, res) => {
    try {
        const user = new usersModel(req.body)
        await user.save()
        res.json({ message: 'User created successfully' })
    } catch (err) {
        res.status(400).json({ error: err.message })
     }
})

module.exports = app