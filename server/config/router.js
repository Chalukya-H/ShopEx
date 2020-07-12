const express = require('express')
const router = express.Router()
const upload = require('../app/middleware/multer')
const {authUser} = require('../app/middleware/authentication')

const userController = require('../app/controller/userController')
const categoryController = require('../app/controller/categoryController')
const orderController = require('../app/controller/orderController')
const productController = require('../app/controller/productController')
const cartController = require('../app/controller/cartController')
//User Router
router.post('/users/login',userController.login)
router.post('/users/register', userController.register)
router.get('/users/account',authUser, userController.account)
router.get('/users/list', userController.list)

//Category Router
router.get('/categories', categoryController.list)
router.post('/categories', categoryController.create)
router.put('/categories/update',categoryController.update)

//Order Router
router.get('/orders',authUser, orderController.list)
router.post('/orders',authUser, orderController.create)
router.get('/orders/list',authUser, orderController.listforCustomer)

//Product Router
router.get('/products',authUser,productController.list)
router.post('/products/topnew',productController.topList)
router.post('/products',upload.any('filename'),productController.create)
router.put('/products/quantity/update',productController.updateQuantity)
router.get('/products/query/:id',productController.findByCategory)
router.put('/products/update/:id',productController.update)
router.get('/products/:id',productController.findProductByID)

router.get('/products/search/:text',productController.filterByName)

//Cart router
router.get('/cart',authUser,cartController.list)
router.post('/cart',authUser,cartController.create)
router.put('/cart/qunatity/update',authUser,cartController.updateQuantity)
router.delete('/cart/delete/all',authUser,cartController.deleteAll)

//Get Data based on ID
router.put('/users/:id', authUser,userController.update)
router.delete('/category/:id', categoryController.delete)
router.delete('/cart/:id',authUser,cartController.delete)




module.exports = router

