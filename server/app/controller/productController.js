const Product = require('../models/products')
const productController ={}

productController.create = (req,res) =>{
    const body = req.body 
    const product = new Product(body)
    console.log(body.description.split('\n').length,'action')
    product.mainImage = req.files[0].destination + req.files[0].filename
    product.cartImage = req.files[1].destination + req.files[1].filename

    const des = body.description.split('\n').join('--')
    product.description = des
    product.save()
    .then(product =>{
      
        res.json(product)
    })
    .catch(err =>{
        res.json(err)
    })

}


productController.list = (req,res) =>{ 
    Product.find()
    .then(product =>{
        res.json(product)
    })
    .catch(err =>{
        res.json(err)
    })

}

 
productController.findByCategory = (req,res) =>{
     const id =  req.params.id
     
    Product.find({subCategoryID:id})
    .then(product =>{
        res.json(product)
    })
    .catch(err =>{
        res.json(err)
    })

}

productController.topList = (req,res) =>{
    const body =  req.body
    
   Product.find(body).limit(4)
   .then(product =>{
       res.json(product)
   })
   .catch(err =>{
       res.json(err)
   })

}


module.exports = productController