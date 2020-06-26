const express = require('express')
const app = express()
const configDB = require('./config/database')
const router = require('./config/router')
const path = require('path')
const port =3030

app.use(express.json())
configDB()
app.use(express.static(path.join(__dirname, "client/build")))
app.use('/',router)

app.use("/upload", express.static("upload"));
//Sample example of app middleware
app.use(function(req,res,next){
    console.log(`${req.ip} -  ${req.method} - ${req.url} - ${new Date()} - ${JSON.stringify(req.body)}`)
    next()
})

app.get("*", (req, res) => {
    console.log(__dirname)
	res.sendFile(path.join(__dirname + "/client/build/index.html"));
})

app.listen(port,() =>{
    console.log('Listing to Port -',port)
})