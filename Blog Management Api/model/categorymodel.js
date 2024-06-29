var mongoose = require("mongoose")

var userschema = new mongoose.Schema({
    
    category:{
        type:String
    },

})

module.exports = mongoose.model("category", userschema)