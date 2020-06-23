const Product = require('../models/products')
const productController ={}

productController.create = (req,res) =>{
    const body = req.body
    const product = new Product(body)
    product.save()
    .then(product =>{
        res.json(product)
    })
    .catch(err =>{
        res.json(err)
    })

}


module.exports = productController