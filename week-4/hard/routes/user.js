const { Router } = require("express");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { User, Todo , Expire} = require("../database/index"); // Import the models

const router = Router();

// Middleware to check for authentication
const userMiddleware = require("../middleware/user");

// Signup Route

router.post('/signup', async (req, res) => {
    const{ username , password ,email} = req.body

    try{
    const userexist = await User.findOne({username})
    if(userexist){
        throw new Error("user already exists")
    }

    const hash = await bcrypt.hash(password,10)
    console.log(hash)

    const signschem = new User({
        username,
        password : hash,
        email

    })

    signschem.save()

    res.json("user created sucessfully")

    }catch(error){
        res.status(400).json("invalid")
    }
})


router.post('/login', async (req,res)=>{
   const {username , password } = req.body

try{
   const user = await User.findOne({username})
   if(!user){
    throw new Error("no username exists")
   }

   const passwordmatch = await bcrypt.compare(password,user.password)
   if(!passwordmatch){
    throw new Error("password matched failed")
   }

   const token = jwt.sign({userID : user._id}, 'secrettokemn',{ expiresIn : "1h"})

   res.json({
    token:token
   })}
   catch(error){
    console.error('Login error:', error);
        res.status(500).json({ error: 'log in first bro' });
   }
})

router.get('/todos',userMiddleware, async(req,res)=>{
   
   try{

   const todos = await Todo.find({ userId: req.user.userID})
  
   res.json({
    todo : todos
   })
    

   }catch(error){
    res.status(403).json({
        error: 'something went wrong'
    })
   }
})

  router.post('/logout',userMiddleware, async(req,res)=>{
    try{
    const token = req.headers['authorization'].split(' ')[1]
    const exhausttoken = new Expire({
        token :token,
        createdAt: Date.now()
    })

    await exhausttoken.save()
         
    res.json({ message: 'Logged out successfully' });

} catch (error) {
    res.status(500).json({ error: 'Server error' });
}

  })


module.exports = router;

