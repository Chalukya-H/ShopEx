const mongoose = require('mongoose')

mongoose.Promise = global.Promise
// const configDB = () =>{
//     mongoose.connect('mongodb://localhost:27017/shopex-db' ,{
//             useNewUrlParser: true, useUnifiedTopology: true , useCreateIndex:true })
//     .then( ()=>{
//         console.log('Database connection sucess')
//     })
    
//     .catch (err =>{
//         console.log('Database connection error - ',err )
//     })
// }


// Updated for Heroku

const CONNECTION_URI =  process.env.MONGODB_URI || "mongodb://localhost:27017/shopex-db"
    mongoose.connect(CONNECTION_URI ,{
            useNewUrlParser: true, useUnifiedTopology: true , useCreateIndex:true })
    .then( ()=>{
        console.log('Database connection sucess')
    })
    
    .catch (err =>{
        console.log('Database connection error - ',err )
    })



module.exports = mongoose