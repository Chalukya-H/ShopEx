const Cart = require('../models/cart')
const cartController ={}

cartController.create =(req,res) =>{
    const body = req.body
     
    const cart = new Cart(body)
    cart.customerID = req.user._id
    cart.save()
    .then(cart =>{
        res.json(cart)
    })
    .catch(err=>{
        res.json(err)
    })
}


cartController.list =(req,res) =>{      
    Cart.find({customerID : req.user._id , status : 'Cart'})
    .then(cart =>{
        res.json(cart)
    })
    .catch(err=>{
        res.json(err)
    })
}


cartController.delete = (req,res) =>{
    const id = req.params.id   
    Cart.findByIdAndUpdate({_id:id ,customerID : req.user._id,status : 'Cart'}, req.body)
    .then( cart =>{
        res.json(cart)
    })

    .catch(err =>{
        res.json(err)
    })
}


cartController.delete = (req,res) =>{
    const id = req.params.id   
    Cart.findByIdAndDelete({_id:id ,customerID : req.user._id,status : 'Cart'})
    .then( cart =>{
        res.json(cart)
    })

    .catch(err =>{
        res.json(err)
    })
}

module.exports = cartController