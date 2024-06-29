var mongoose = require("mongoose")

var userschema = new mongoose.Schema({

    like:{
        type:Number
    },
    blog_id:{
        type:String
    }
})

module.exports = mongoose.model("like", userschema)