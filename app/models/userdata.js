const mongoose = require('mongoose')
const Schema = mongoose.Schema
const userSchema = new Schema({
    name: { 
        type: String
    },
    email: { 
        type: String 
    },
    password: {
         type: String
     }
},
     {timestamps:true })
const users=mongoose.model('Userdata', userSchema)
module.exports = users 