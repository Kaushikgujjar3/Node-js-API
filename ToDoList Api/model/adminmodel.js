var mongoose = require('mongoose')
const { admin_login } = require('../controller/admincontroller')

var userschema = new mongoose.Schema({
    name:{
        type:String
    },
    email:{
        type:String
    },
    password:{
        type:String
    },
    admin_access:{
        type:String
    }
})

module.exports = mongoose.model("admin",userschema)