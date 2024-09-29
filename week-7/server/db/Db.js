const  mongoose  = require ('mongoose')
const { ObjectId } = mongoose;



if (!process.env.DB_URL) {
    console.error("DB_URL environment variable is not defined.");
    process.exit(1); // Exit the application if the variable is not defined
}
mongoose.connect(`${process.env.DB_URL}/Courses-Web`).then(()=>{
    console.log("connected to mongodb")
}).catch((error)=>{
   console.log(error)
})



const userSchema = new mongoose.Schema({
    username:{
        type:String,
        unique:true
    },
    password:{
        type: String,
        required: true
    }
    
})

const adminSchema = new mongoose.Schema({
    username:{
        type:String,
        unique:true
    },
    password:{
        type: String,
        required: true
    }
})

const courseSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    price:{type:Number,
        required:true
    },
    imageUrl:{
        type:String
    },
    creatorId: ObjectId
})

const purchaseSchema = new mongoose.Schema({
    userId: ObjectId,
    courseId: ObjectId
})

const tokenExp = new mongoose.Schema({
    token:{
        type:String,
        required:true,
        unique:true
    },
    createdAt:{
        type:Date,
        default:Date.now,
        expires:"5m"
    }
})

const User = mongoose.model('User',userSchema)
const Admin = mongoose.model('Admin',adminSchema)
const Course = mongoose.model('Course',courseSchema)
const Expire = mongoose.model('Expire',tokenExp)
const Purchase = mongoose.model('Purchase',purchaseSchema)

module.exports={
    User,
    Admin,
    Course,
    Expire,
    Purchase

}