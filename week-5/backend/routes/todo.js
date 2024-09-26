//  start writing your code from here
const { Router } = require ('express')
const Authmiddleware =require('../middleware/user')
const { Todo } = require ('../db/index')


const router = Router()
// create todo
router.post('/createtodo',Authmiddleware,async(req,res)=>{
    const { title , description } = req.body
try {
    
        if(!title || !description){
            return res.json(" provide both field")
        }
    
       const todo= new Todo({
        title,
        description,
        userId : req.user.userID
       })
    
        await todo.save()
    
        res.status(200).json(todo)
} catch (error) {
    return res.status(500).json({
        error: " failed to create todo " + error
    })
}
})

//update todd

router.put('/update/:id',Authmiddleware,async(req,res)=>{
    const {id} = req.params
    const { title, description } = req.body

    try{

    const todo = await Todo.findByIdAndUpdate(id,{title,description},{new : true})

    if(!todo){
        return res.json("no todo found")
    }
    res.status(200).json({
        updatetodo: todo
    })
     
} catch (error) {
    return res.status(500).json({
        error: " failed to update todo " + error
    })
}
})

// delete all

router.delete('/deleteall',Authmiddleware,async(req,res)=>{

    try{
      const deleteall=  await Todo.deleteMany({userId : req.user.userID})
      if(!deleteall){
        return res.json("delete all do not work")
      }
       
      res.status(200).json("deleted all todo ")
    } catch (error) {
        return res.status(500).json({
            error: " failed to delete all todo " + error
        })
    }
    })

    //delete single 

   
router.delete('/deletea/:id',Authmiddleware,async(req,res)=>{
    const{id}= req.params

    try{
      const delet=  await Todo.findByIdAndDelete(id)
      if(!delet){
        return res.json("delete do not work")
      }
       
      res.status(200).json("deleted todo " + delet)
    } catch (error) {
        return res.status(500).json({
            error: " failed to delete todo " + error
        })
    }
    })

 router.get('/alltodos',Authmiddleware,async(req,res)=>{

    try{

    const todo = await Todo.find({userId : req.user.userID})
    if(!todo){
        res.status(400).json("user have no tofo")
    }
   
    res.status(200).json({
        alltodos : todo
    })

}catch(error){
    res.status(500).json({
        error:"failed to fetch all todos  " + error
    })
}
})


router.get("/todo/:id",Authmiddleware,async(req,res)=>{
    const{id}= req.params

    try{
        const todo = await Todo.findById(id)

    if(!todo){
        res.status(400).json("user have not specific todo in this id")
    }

    res.status(200).json({
        todo : todo
    })


    }catch(error){
        res.status(500).json({
            error:"failed to fetch todo " + error
        })

    }

})




module.exports = router
