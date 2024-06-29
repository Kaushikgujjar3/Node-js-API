var mongoose = require('mongoose')

var userschema = new mongoose.Schema({
    user_name:{
        type:String
    },
    product_name:{
        type:String
    },
    price:{
        type:Number
    },
    qty:{
        type:Number
    },
    product_id:{
        type:String
    },
    user_id:{
        type:String
    }
})

module.exports = mongoose.model("cart",userschema)