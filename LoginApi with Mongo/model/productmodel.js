var mongoose = require('mongoose');

var product_schema = new mongoose.Schema({
    price:{
        type: String
    },
    offer:{
        type:String
    },
    discountprice:{
        type:String
    },
    rating:{
        type:String
    },
    image:{
        type:String
    },
    category:{
        type:String
    }
})

module.exports = mongoose.model('Product',product_schema)