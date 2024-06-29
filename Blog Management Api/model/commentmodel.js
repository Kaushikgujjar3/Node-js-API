var mongoose = require("mongoose")

var userschema = new mongoose.Schema({

    comment:{
        type:String
    },
    blog_id:{
        type:String
    }
})

module.exports = mongoose.model("comment", userschema)