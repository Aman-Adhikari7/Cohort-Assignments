const { Router } = require ('express')
const router = Router()
const bcrypt = require('bcryptjs');
const { Course, Admin, Purchase} = require('../db/Db');
const jwt = require ('jsonwebtoken')
const adminMiddleware = require ('../midleware/AdminMiddleware.js')
const dotenv = require ('dotenv')
dotenv.config()


const JWT_SECRET = process.env.JWT_SECRET_ADMIN


router.post('/signup',async (req,res)=>{
    const {username , password  } = req.body

    const existUser = await Admin.findOne({ username: username})

    if(existUser){
      return  res.json('username already exist')
    }
    
    try {
        
      const hash= await bcrypt.hash(password,10,)
          
        
       const newAdmin = await  Admin.create({
                username:username,
                password:hash
            })

            await newAdmin.save()


            if(!newAdmin){
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
    
    
        const checkUser = await Admin.findOne({ username: username})
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

router.post('/createcourse',adminMiddleware,async(req,res)=>{
    const { title , description , price , imageurl , published } = req.body

    const adminId = req.user.userId

   try {
     const course = await Course.create({
         title:title,
         description:description,
         price:price,
         imageurl:imageurl,
         creatorId: adminId
     })
 
     if(!course){
         res.json({
             error:"course creation failed"
         })
     }else{
         res.status(200).json({
             course:course
         })
     }

   } catch (error) {
    res.status(501).json({ message: 'Server error, course creation failed', error });
   }



})

//update course functionality



// getting admin created courses 

router.get('/mycourses',adminMiddleware,async(req,res)=>{
    
    const adminId= req.user.userId

    const course = await Purchase.find({
        adminId:adminId
    })

    res.json({
        message:"couse created by admin",
        course:course
    })

})
module.exports = router;