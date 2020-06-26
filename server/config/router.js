const express = require('express')
const router = express.Router()
const upload = require('../app/middleware/multer')
const {authUser} = require('../app/middleware/authentication')

const userController = require('../app/controller/userController')
const categoryController = require('../app/controller/categoryController')
const orderController = require('../app/controller/orderController')
const productController = require('../app/controller/productController')
  
//User Router
router.post('/users/login',userController.login)
router.post('/users/register', userController.register)
router.get('/users/account',authUser, userController.account)
router.get('/users/list', userController.list)

//Category Router
router.get('/categories', categoryController.list)
router.post('/categories', categoryController.create)

//Order Router
router.get('/orders',authUser, orderController.list)
router.post('/orders',authUser, orderController.create)

//Product Router
router.get('/products',productController.list)
router.post('/products/topfew',productController.topList)
router.post('/products',upload.any('filename'),productController.create)
router.get('/products_query/:id',productController.findByCategory)


//Get Data based on ID
router.put('/users/:id', authUser,userController.update)
router.delete('/category/:id', categoryController.delete)



module.exports = router

