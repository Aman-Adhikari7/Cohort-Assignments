const { Router } = require ('express')
const router = Router()
const bcrypt = require('bcryptjs');
const { User, Expire, Purchase, Course } = require('../db/Db');
const jwt = require ('jsonwebtoken')
const dotenv = require ('dotenv')
const usermiddleware = require ('../midleware/UserMiddleware')
dotenv.config()


const JWT_SECRET = process.env.JWT_SECRET_USER


router.post('/signup',async (req,res)=>{
    const {username , password  } = req.body

    const existUser = await User.findOne({ username: username})

    if(existUser){
       return res.json('username already exist')
    }
    
    try {
        
      const hash= await bcrypt.hash(password,10,)
          
        
       const newUser= await  User.create({
                username:username,
                password:hash
            })

            await newUser.save()


            if(!newUser){
                res.json("user creation failed")
            }else{
            res.status(200).json(
                "user created sucessfully"
            )
        }
            
    } catch (error) {
        res.status(501).json({ message: 'Server error, signup failed', error });
    }

})

/// sign in

router.post('/signin',async (req,res)=>{
   const { username, password } = req.body

   if (!username || !password) {
    return res.status(400).json({ message: 'Username and password are required.' });
   }
   

  try {
        const checkUser = await User.findOne({ username: username})
        if(!checkUser){
            res.json("signup first ")
        }
    
    
        const check= bcrypt.compare(password,checkUser.password)
         if(!check){
            res.json({
                error:"password is wrong"
            })
        }
    
        const token = jwt.sign({userId: checkUser._id},JWT_SECRET,{ expiresIn : "1h" })
    
        if(!token){
            res.json({
                error:"jwt sign failed"
            })
        }else{
            res.status(200).json({
                 token:token
             })
        }
    
    } catch (error) {
        res.status(501).json({ message: 'Server error, signin failed', error });
    }
    
})

//purchased course

router.get('/purchasedcourse',usermiddleware,async(req,res)=>{
        
    const userId = req.user.userId

   try {
     const found = await Purchase.find({
         userId: userId
     })
      
     let purchasedcourse =[]
 
     for(let i=0; i<found.length;i++){
         purchasedcourse.push(found[i].courseId)
     }
 
     const coursedata = await Course.find({
         _id: {$in : purchasedcourse}
     })
     console.log(found)
 
     res.json({
         found:found,
         coursedata:coursedata
     })
   } catch (error) {
      console.log(error)
   }
})




//logout route 

router.post('/logout',usermiddleware,async(req,res)=>{

    const token = req.headers['authorization'].split(" ")[1]

   try {

     if(!token){
         res.json({
             error:"invalid token"
         })
     }
     const logout = await Expire.create({
         token:token,
         createdAt:Date.now()
     })

     if(!logout){
        res.status(400).json({
            error: " cannot logout"
        })
     }
     await logout.save()

     res.status(200).json(logout)
   } catch (error) {
    res.status(501).json({ message: 'Server error, logout failed', error });
   }
    
})




module.exports = router;