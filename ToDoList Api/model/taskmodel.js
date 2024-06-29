var mongoose = require('mongoose')

var userschema = new mongoose.Schema({
    task_name:{
        type:String
    },
    admin_access:{
        type:String
    }
})

module.exports = mongoose.model("task",userschema)