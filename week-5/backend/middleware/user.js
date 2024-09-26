//  start writing from here
const jwt = require ('jsonwebtoken')
require('dotenv').config()


const  userMiddleware = function(req,res,next){
     const token = req.headers['authorization'].split(' ')[1]

     if(!token){
         return res.json("token isnt provided")
     }

     const vf = jwt.verify(token,process.env.API_SECRET,(err,decode)=>{
        if(err){
          return  res.json("verification failed token do not match")
        }
        req.user = decode
        next()
     })

}

module.exports = userMiddleware;