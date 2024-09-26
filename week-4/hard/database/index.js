const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect('mongodb+srv://aman:aman74@aman.5zvubti.mongodb.net/todos-users')
  .then(() => console.log("Connected to MongoDB"))
  .catch(err => console.error("Failed to connect to MongoDB", err));

// Define schemas

const UserSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true

    },
    email:{
        type:String,
        required:true

    }

},{timestamps : true});

const TodoSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    userId :{
        type: mongoose.Schema.Types.ObjectId,
        ref:"User"
    }
},{timestamps : true});

const expireSchema = new mongoose.Schema({
    token:{
        type:String,
        required:true,
        unique: true
    },
    createdAt:{
       type:Date,
       default:Date.now,
       expires:'5m'
    }
})

const Expire= mongoose.model('Expire', expireSchema);
const User = mongoose.model('User', UserSchema);
const Todo = mongoose.model('Todo', TodoSchema);

module.exports = {
    User,
    Todo,
    Expire
}