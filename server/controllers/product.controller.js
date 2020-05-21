const Product = require('../models/product.model');



module.exports = {
    index: (req, res) => {
        Product.find()
            .then(allProducts => res.json(allProducts))
            .catch(err => res.json(err))
    },
    create: (req, res) => {     
        console.log(req.body)  
        Product.create(req.body)
            .then(product => res.json(product))
            .catch(err => res.json(err))
    },
    getProduct: (req, res) => {
        Product.findById(req.params.id)
            .then(product => res.json(product))
            .catch(err => res.json(err))
    },
    updateProduct: (req, res) => {
        console.log(2, req.body)
        Product.findOneAndUpdate({ _id: req.params.id }, req.body, {runValidators:true})
            .then(product => {
                console.log(3, product)
                res.json(product)})
            .catch(err => res.json(err))
    },
    deleteProduct: (req, res) => {
        Product.deleteOne({ _id: req.params.id })
            .then(product => res.json(product))
            .catch(err => res.json(err))
    }
    
}