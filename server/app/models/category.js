const mongoose = require('mongoose')
const Schema = mongoose.Schema

const categorySchema = new Schema ({
    cType :{
        type: String,
        required:true
    },
    subType :[{
        type: String,
        required:true
    }],
    createdAt: {
        type: Date,
        default: Date.now
    }
})

const Category = mongoose.model('Category',categorySchema)

module.exports = Category