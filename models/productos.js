const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const products = new Schema ({
    brand: {
        type: String,
        require: true,
        
    },
    price: {
        type: Number,
        require: true
    },
    stock: {
        type: Boolean,
        require: true
    },
    model: {
        type: String,
        require: true
    },
    category: {
        type: String,
        require: true
    },
    year: {
        type: Number,
        require: true
    }
})

const Product = mongoose.model('Product', products)
module.exports = {Product}