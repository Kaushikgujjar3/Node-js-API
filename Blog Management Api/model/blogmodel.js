var mongoose = require("mongoose")

var userschema = new mongoose.Schema({

    name:{
        type:String
    },
    title:{
        type:String
    },
    discription:{
        type:String
    },
    image:{
        type:String
    },
    user_id:{
        type:String
    }
})  

module.exports = mongoose.model("blog", userschema)