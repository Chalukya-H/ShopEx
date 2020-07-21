const User = require('../models/users')
const jwt = require('jsonwebtoken')
const key ='chalu123'

const authUser = (req,res,next) =>{
    if(req.header('auth')) {
        const token = req.header('auth').split(' ')[1]
        let tokenData

        try {
            tokenData = jwt.verify(token,key)
            
            User.findById(tokenData._id)
            .then(user => {
                req.user = user                  
                next()
            })
            .catch(err =>{
                console.log('auth',err)
                res.json(err)
            })
        }
        catch(e) {
             res.json(e.message)   
        }
    }
    else {
        res.json({error:'Authentication Required !'})
        next()
    }
}

module.exports = {authUser}