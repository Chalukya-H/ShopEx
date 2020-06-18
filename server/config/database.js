const mongoose = require('mongoose')

const configDB = () =>{
    mongoose.connect('mongodb://localhost:27017/shopex-db' ,{useNewUrlParser: true, useUnifiedTopology: true , useCreateIndex:true })
    .then( ()=>{
        console.log('Database connection sucess')
    })
    
    .catch (err =>{
        console.log('Database connection error - ',err )
    })
}


module.exports = configDB