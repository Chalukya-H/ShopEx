const express = require('express')
const router = express.Router()
const userController = require('../app/controller/userController')
const {authUser} = require('../app/middleware/authentication')



router.get('/users', usersController.list)
router.post('/users/login',usersController.login)
router.post('/users/register', usersController.register)
router.get('/users/account',authUser, usersController.account)


module.exports = router

