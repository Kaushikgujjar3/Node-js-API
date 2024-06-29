var mongoose = require('mongoose')

var userschema = new mongoose.Schema({
    name:{
        type:String
    },
    price:{
        type:Number
    },
    category:{
        type:String
    },
    discription:{
        type:String
    },
    stock:{
        type:Number
    },
    
})

module.exports = mongoose.model("product",userschema)