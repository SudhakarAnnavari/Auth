const express = require('express')
const { register, login } = require('../controller/UserController')

const Route = express.Router()

Route.post('/signup',register)
Route.post('/login',login)


module.exports = Route;