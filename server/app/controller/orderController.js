const Order = require('../models/order')
const orderController ={}

orderController.create = (req,res) =>{
    const body = req.body
    Order.findOne({name:body.name})

    .then( order => {
        if(order){
            res.json({error:`Order ${order.name} alredy exists`})
        }
        else {
            const order =  new Order(body)
            order.customerID = req.user._id
            order.save()
            .then(order =>{
                res.json(order)
            })
            .catch(err =>{
                res.json(err)
            })
        }
    })
   
    .catch(err =>{
        res.json(err)
    })
}

orderController.list =(req,res) =>{

    Order.find()
    .then( order =>{
        res.json(order)
    })

    .catch(err =>{
        res.json(err)
    })
}

module.exports = orderController