const express = require('express')
const mongoose = require('mongoose')
const usersRouter = require('./routes/UsersRoutes')

const app = express()
app.use(express.json())

const SERVER_PORT = 3000

mongoose.connect('mongodb+srv://adina:dgK07jtkSM2hDSFX@cluster0.rxtsloq.mongodb.net/Users?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(success => {
  console.log(`MongoDB connected ${success}`)
}).catch(err => {
  console.log(`Error while MongoDB connection ${err}`)
})

app.use(usersRouter)

app.listen(SERVER_PORT, () =>{
    console.log(`Server is running at http://localhost:${SERVER_PORT}/`)
})