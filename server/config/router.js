const express = require('express')
const router = express.Router()
const userController = require('../app/controller/userController')
const {authUser} = require('../app/middleware/authentication')
  
router.post('/users/login',userController.login)
router.post('/users/register', userController.register)
router.get('/users/account',authUser, userController.account)
router.put('/users/:id', authUser,userController.update)

module.exports = router

