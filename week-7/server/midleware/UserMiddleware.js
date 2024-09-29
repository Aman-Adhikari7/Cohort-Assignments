const jwt= require('jsonwebtoken')
const dotenv = require('dotenv')
dotenv.config()
 const JWT_SECRET_USER = process.env.JWT_SECRET_USER 

const middleware =(req,res,next)=>{
    const token = req.headers['authorization'].split(" ")[1]

    if(!token){
        res.json({
            error:"please log in"
        })
    }

    const verify = jwt.verify(token,JWT_SECRET_USER,(err,decode)=>{
        if(err){
            res.json({
                error:"verification failed "
            })
        }else{
            req.user=decode
            console.log( decode)
            next()

        }
    })
}


module.exports= middleware;

