const Category = require('../models/category')
const categoryController ={}

categoryController.create = (req,res) =>{
    const body = req.body
    Category.findOne({cType:body.cType})
    .then( category => {
        if(category){
            res.json({error:`Category ${category.cType} alredy exists`})
        }
        else {
            const category =  new Category(body)
            category.save()
            .then(category =>{
                res.json(category)
            })
            .catch(err =>{
                res.json(err)
            })
        }
    })
   
    .catch(err =>{
        res.json(err)
    })
}

categoryController.list =(req,res) =>{

    Category.find()
    .then( category =>{
        res.json(category)
    })

    .catch(err =>{
        res.json(err)
    })
}

categoryController.delete = (req,res) =>{
    const id = req.params.id
    Category.findByIdAndDelete({_id:id})
    .then( category =>{
        res.json(category)
    })

    .catch(err =>{
        res.json(err)
    })
}

module.exports = categoryController