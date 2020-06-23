const mongoose = require('mongoose')
const Schema = mongoose.Schema

const categorySchema = new Schema ({
    mainType :{
        type: String,
        required:true
    },
    subType :[{
        name:{
            type: String        
        }
    }],
    createdAt: {
        type: Date,
        default: Date.now
    }
})

const Category = mongoose.model('Category',categorySchema)

module.exports = Category