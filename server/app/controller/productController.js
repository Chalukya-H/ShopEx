const Product = require('../models/products')
const productController ={}

productController.create = (req,res) =>{
    const body = req.body 
    const product = new Product(body) 
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
    if(req.user.role === 'Admin'){
        Product.find().sort()
        .then(product =>{
            res.json(product)
        })
        .catch(err =>{
            res.json(err)
        })
    
    } else {
        Product.find({quantity : { $gt: 1 }})
        .then(product =>{
            res.json(product)
        })
        .catch(err =>{
            res.json(err)
        })
    }     
    
}

 
productController.findByCategory = (req,res) =>{
     const id =  req.params.id
     
    Product.find({subCategoryID:id , quantity : { $gt: 1 }})
    .then(product =>{
        res.json(product)
    })
    .catch(err =>{
        res.json(err)
    })

}

productController.findProductByID = (req,res) =>{
    const id =  req.params.id    
   Product.findById({_id:id,quantity : { $gt: 1 }})
   .then(product =>{
       res.json(product)
   })
   .catch(err =>{
       res.json(err)
   })

}

productController.topList = (req,res) =>{
    const body =  req.body    
   Product.find({quantity : { $gt: 1 }}).sort({"_id": -1}).limit(8)
   .then(product =>{
       res.json(product)
   })
   .catch(err =>{
       res.json(err)
   })

}

productController.updateQuantity =(req,res) =>{
     
    const body = req.body
    let formData
    if( body.productQuantity === 1){
        formData = {   $inc: { quantity: 1} }
    } else {
          formData = {   $inc: { quantity: -1} }
    }
       
    Product.findById({_id:body.id})
    .then(product =>{  
          
         if( (body.cartQuantity === -1 && body.currentQuantity > 1)  || (product.quantity >= body.productQuantity  &&   product.quantity > 0  ) ) {
             
            Product.findOneAndUpdate ({_id:body.id},formData,{ new: true, runValidators: true })
                .then( product =>{                    
                    res.json(product)
                })

                .catch(err =>{                  
                    res.json(err)
                })
            
         } else {
             res.json ({message : 'Product quantity reached to end'})
         }
    })

}

productController.filterByName =(req,res) =>{
    const textChar  =  req.params.text
      
    Product.find( {name : { $regex: textChar, $options: 'i'}} )
        .then(product =>{
            console.log(product)
            res.json(product)
        })
        .catch(err =>{
            console.log(err)
            res.json(err)
        })
}


productController.update = (req,res) =>{
    const body  = req.body 
    const id =  req.params.id   
    console.log(body,id) 
    Product.findByIdAndUpdate({_id: id},body,{ new: true, runValidators: true })
    .then(product =>{
        console.log(product)
        res.json(product)
    })
    .catch(err =>{
        console.log(err)
        res.json(err)
    })
}

module.exports = productController