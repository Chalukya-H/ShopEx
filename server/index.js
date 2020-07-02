const express = require('express')
const app = express()
const configDB = require('./config/database')
const router = require('./config/router')
const path = require('path')
const port =3030

app.use(express.json())
configDB()

app.use('/',router)
 
// app.use(function(req,res,next){
//     console.log(`${req.method} - ${req.url} - ${new Date()} - ${JSON.stringify(req.body)}`)
//     next()
// })

//File Upload
app.use("/upload", express.static("upload"));
app.use(express.static(path.join(__dirname, "client/build")))
app.get("*", (req, res) => { 
	res.sendFile(path.join(__dirname + "/client/build/index.html"));
})
 
  


app.listen(port,() =>{
    console.log('Listing to Port -',port)
})