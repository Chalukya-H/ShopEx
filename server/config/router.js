const express = require('express')
const router = express.Router()
const userController = require('../app/controller/userController')
const categoryController = require('../app/controller/categoryController')
const orderController = require('../app/controller/orderController')
const {authUser} = require('../app/middleware/authentication')
  
//User Router
router.post('/users/login',userController.login)
router.post('/users/register', userController.register)
router.get('/users/account',authUser, userController.account)
router.get('/users/list', userController.list)

//Category Router
router.get('/category', categoryController.list)
router.post('/category', categoryController.create)

//Order Router
router.get('/order',authUser, orderController.list)
router.post('/order',authUser, orderController.create)

//Get Data based on ID
router.put('/users/:id', authUser,userController.update)
router.delete('/category/:id', categoryController.delete)


module.exports = router

