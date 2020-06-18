const express = require('express')
const app = express()
const configDB = require('../server/config/database')
const router = require('../server/config/routes')
const port =3030

app.use(express.json())
configDB()

app.use('/',router)


//Sample example of app middleware
app.use(function(req,res,next){
    console.log(`${req.ip} -  ${req.method} - ${req.url} - ${new Date()} - ${JSON.stringify(req.body)}`)
    next()
})

app.listen(port,() =>{
    console.log('Listing to Port -',port)
})