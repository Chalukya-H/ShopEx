const mongoose = require('mongoose')
const Schema = mongoose.Schema

const cartSchema = new Schema ({
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
        ref : 'User'
    },
    productID : {
        type : Schema.Types.ObjectId,
        ref : 'Product'
    },
    image : {
        type : String
    },
    status :{
        type : String,
        default :'Cart'
    } ,
    createdAt: {
        type: Date,
        default: Date.now
    }

})


const Cart = mongoose.model('Cart' , cartSchema)

module.exports = Cart