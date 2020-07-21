const mongoose = require('mongoose')
const Schema = mongoose.Schema

const productSchema = new Schema ({
    name :{
        type:String,
        required:true
    } ,
    description :{
        type:String,
        required:true
    } ,
    price :{
        type:Number,
        required:true
    } ,
    mainImage :{
        type : String       
    },
    cartImage :{
        type:String
    },
    quantity :{
        type:Number,
        required:true
    },
    categoryID :{
        type : Schema.Types.ObjectID,
        ref : 'Category',
        required :true
    } ,
    subCategoryID :{
        type:Schema.Types.ObjectID
    },
    createdAt: {
        type: Date,
        default: Date.now
    }

})


const Product = mongoose.model('Product',productSchema)

module.exports = Product    