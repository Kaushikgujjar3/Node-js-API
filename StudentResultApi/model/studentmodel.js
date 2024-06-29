var mongoose = require("mongoose")

var userschema = new mongoose.Schema({

    name:{
        type:String,
        require:true
    },
    roll_no:{
        type:Number,
        require:true
    },
    standard:{
        type:Number,
        require:true
    },
    division:{
        type:String,
        require:true
    },
    admin_id:{
        type:String
    }
        
})

module.exports = mongoose.model("student", userschema)