const mongoose = require('mongoose')
const Schema = mongoose.Schema

const orderSchema = new Schema ({
    name :{
        type : String,
        required:true
    } ,
    price : {
        type :Number,
        required : true
    },
    quantity :{
        type : Number,
        default : 1
    } ,
    customerID : {
        type : Schema.Types.ObjectId,
        ref : 'User',
        required:true
    },
    image : {
        type : String
    },
    status :{
        type : String,
        default : 'Ordered'
    },
    orderAt: {
        type: Date,
        default: Date.now
    },
    deliveredAt :{
        type: Date,
        default: Date.now 
    }

})


const Order = mongoose.model('Order' , orderSchema)

module.exports = Order