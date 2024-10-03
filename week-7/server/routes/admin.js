const { Router } = require ('express')
const router = Router()
const bcrypt = require('bcryptjs');
const mongoose = require ('mongoose')
const { Course, Admin, Purchase,Expire} = require('../db/Db');
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
    const { title , description , price , imageUrl } = req.body

    const adminId = req.user.userId

   try {
     const course = await Course.create({
         title:title,
         description:description,
         price:price,
         imageUrl:imageUrl,
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


router.put("/course", adminMiddleware, async function(req, res) {
    const adminId = req.user.userId;

    const { title, description, imageUrl, price, courseId } = req.body;

    // creating a web3 saas in 6 hours
    const course = await Course.updateOne({
        _id: courseId, 
        creatorId: adminId 
    }, {
        title: title, 
        description: description, 
        imageUrl: imageUrl, 
        price: price
    } ,{new : true})

    res.json({
        message: "Course updated",
        courseId: course._id
    })
})


// delete one fun 


router.delete("/delete", adminMiddleware, async function(req, res) {
    const adminId = req.user.userId;

    const {  courseId } = req.body;

    // creating a web3 saas in 6 hours
    const course = await Course.deleteOne({
        _id: courseId, 
        creatorId: adminId 
    })

    res.json({
        message: "Course deleted",
        courseId: course._id
    })
})




// getting admin created courses 



router.get('/mycourses',adminMiddleware,async(req,res)=>{
        
    const userId = req.user.userId

   try {
     const found = await Course.find({
        creatorId: userId
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

//logout route admiini

router.post('/logout/ok',adminMiddleware,async(req,res)=>{
    console.log('Incoming request body:', req.body)

    const token = req.headers['authorization'].split(" ")[1]
    console.log(token,"backend tok")

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

     console.log(logout)

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