var mongoose = require("mongoose")

var userschema = new mongoose.Schema({

    name:{
        type:String,
    },
    roll_no:{
        type:Number,
    },
    standard:{
        type:Number,
    },
    division:{
        type:String
    },
    sub1:{
        type:Number
    },
    sub2:{
        type:Number
    },
    sub3:{
        type:Number
    },
    sub4:{
        type:Number
    },
    sub5:{
        type:Number
    },
    total:{
        type:Number
    },
    per:{
        type:Number
    },
    status:{
        type:String
    },
    admin_id:{
        type:String
    }
        
})

module.exports = mongoose.model("result", userschema)