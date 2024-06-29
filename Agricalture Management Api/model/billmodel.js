var mongoose = require('mongoose')

var userschema = new mongoose.Schema({
    user_name:{
        type:String
    },
    user_id:{
        type:String
    },
    total_qty:{
        type:Number
    },
    total_price:{
        type:Number
    },
    created_at:{
        type:String
    }
})

module.exports = mongoose.model("bill",userschema)