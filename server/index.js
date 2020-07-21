const express = require('express')
const app = express()
const configDB = require('./config/database')
const router = require('./config/router')
const path = require('path')
const cors = require('cors')
const port =3030

app.use(express.json())
app.use(cors())

configDB()

app.use('/',router)
 
//File Upload
app.use("/upload", express.static("upload"));
app.use(express.static(path.join(__dirname, "client/build")))
app.get("*", (req, res) => { 
	res.sendFile(path.join(__dirname + "/client/build/index.html"));
})
 
  


app.listen(port,() =>{
    console.log('Listing to Port -',port)
})