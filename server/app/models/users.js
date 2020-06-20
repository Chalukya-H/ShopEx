const mongoose = require('mongoose')
const validator =  require('validator')
const Schema = mongoose.Schema

const userSchema  = new Schema ({
    firstName  :{
        type : String,
        required :true,
        minlength: [6,'Provide the firstname between 6-15 chars'],
        maxlength :[15,'Provide the firstname between 6-15 chars']
    },
    lastName  :{
        type : String,
        required :true,
        minlength: [1,'Provide the lastname between 1-10 chars'],
        maxlength :[10,'Provide the lastname between 1-10 chars']
    } ,
    email :{
        type : String,
        required:true,
        unique:true,
        validate  :{
            validator : function(value) {
                return validator.isEmail(value)
            },
            message : function() {
                return 'Invalid Email format'
            }

        }
    },
    password : {
        type : String,
        required:true,
        minlength :[6,'Password must contain mininum 6 char'],
        maxlength:280
    },
    mobile : {
        type:String,
        minlength :10,
        maxlength:10
    },

    address :{
        type:String
    },

    gender :{
        type:String
    },

    role : {
        type:String,
        default : 'customer'
    },
    updatedAt : {
        type :Date,
        default : Date.now()
    },
    createdAt : {
        type :Date,
        default : Date.now()
    }

})


const User =  mongoose.model('User',userSchema)

module.exports = User