const { Router } = require ('express')
const purchaseRoute = Router()
const usermiddleware = require ('../midleware/UserMiddleware')
const { Purchase, Course } = require('../db/Db')



purchaseRoute.post('/purchase',usermiddleware,async (req, res)=>{
    const userId= req.user.userId
    const { courseId } = req.body;

  try {
      const purchase = Purchase.create({
          userId:userId,
          courseId:courseId
      })
  
      if(!purchase){
          res.status(400).json({
              error:"purchased failed "
          })
      }
      await Purchase.create()
      res.json({
          message: "You have successfully bought the course"
      })
  } catch (error) {
     res.json({
        error:"error brooo"
     })
  }
})

  purchaseRoute.get('/preview',async (req,res)=>{

    const find = await Course.find({})

    if(!find){
        res.json("error finding course")
    }
    res.json({
        find:find
    })
  })



module.exports=  purchaseRoute
   
