const User = require('../models/users')
const bycryptjs = require('bcryptjs')
const jwt = require('jsonwebtoken')
const userController = {} 

userController.register = (req,res) =>{
    const body = req.body 
    User.findOne ({email:body.email})
    .then( user =>{
        if( user ) {
            res.json({error:'Email already registered'}) 
        }
    })

    const user = new  User(body)
    bycryptjs.genSalt()
    .then (salt =>{
        bycryptjs.hash(user.password,salt)        
        .then(encryptPwd =>{
            user.password = encryptPwd
            user.save()
            .then( user =>{
                res.json(user)
            })

            .catch(err =>{
                console.log(err)
                res.json(err)
            })
        })
    })

    .catch(err =>{
        console.log(err)
        res.json(err)
    })
}


userController.login = (req,res) => {
    const body = req.body
   
    User.findOne ({email:body.email})
    .then( user =>{        
        if( !user ) {
            res.json({error:'invalid Email or password'}) 
        } 
        bycryptjs.compare(body.password,user.password)
        .then( found => {
            if(found){
                const tokenData =  {
                    _id : user._id,                   
                    email:user.email,
                    role:user.role
                }
                
                const token = jwt.sign(tokenData,'chalu123')
                res.json({token : `Barer ${token}`})
            }

            else {
                res.json({error:'invalid Email or password'}) 
            }
        })
    })

    .catch(err =>{
        console.log(err,'Login')
        res.json(err)
    })
}


userController.account = (req,res) =>{
    res.json(req.user)
}


userController.update = (req,res) =>{
    const id = req.params.id    
    const body = req.body
    User.findOneAndUpdate({ _id:id }  , body ,{ new: true, runValidators: true }   )
    .then((user) => {        
        res.json(user)
    })
    .catch((err) => {
        res.json(err)
    })

}

userController.list = (req,res) =>{
    User.find()
    .then(users =>{
        res.json(users)
    })
    .catch(err =>{
        res.json(err)
    })
}

module.exports = userController