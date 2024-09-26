//  start writing from here
const mongoose = require ('mongoose')
require('dotenv').config()



mongoose.connect(`${process.env.DB_URL}/todos-createdbyme`)
        .then(()=>{  console.log("connected to db ")})
        .catch((error)=>{   console.log("failed to connect to db " + error)})

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique: true
    },
    password:{
        type:String,
        required:true,
    }
},{timestamps : true})

const todoSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true,

    },
    description:{
        type:String,
        required:true,
    },
    userId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }
} ,{ timestamps : true})


 const logoutTokenSchema = new mongoose.Schema({
    token:{
        type:String,
        required:true,
        unique: true
    },
    createdAt:{
        type:Date,
        default: Date.now,
        expires: "5m"
    }
 })



const User = mongoose.model('User',userSchema)
const Todo = mongoose.model('Todo',todoSchema)
const ExpiredToken = mongoose.model('ExpiredToken',logoutTokenSchema)

module.exports = {
    User,
    Todo,
    ExpiredToken

}


