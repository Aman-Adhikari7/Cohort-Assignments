const {Router} = require ('express')
const adminMiddleware = require ('../middleware/user')
const { Todo } = require ('../database/index')


const router = Router()

//Create Todo 
router.post('/createtodo',adminMiddleware,async(req,res)=>{
    const {title , description} = req.body


    try{

    if(!title || !description ){
        res.status(400).json({
            error: "please fill both sections"
        })
    }

    const todo = new Todo({
        title,
        description,
        userId: req.user.userID
    })
    if(!todo){
        res.status(404).json({
            error:"todo creation failed"
        })
    }

    todo.save()

    res.json({
        Todos: todo
    })
}catch(error){
    res.status(403).json({
        err: " cannot create todo ",
        error:error
    })
}

})

// find and update single todo

router.put('/update/:id',adminMiddleware, async(req,res)=>{
   const{id} = req.params
   const { title , description} = req.body
try {
    
       const update =  await Todo.findByIdAndUpdate(id,{title,description},{ new :true  })
    
       if(!update){
        return res.status(404).json({ error: 'Todo not found' });
       }
       res.status(200).json({
        update:update
       })
} catch (error) {
    res.status(400).json({
        error:"cannot update"+ error
    })
}
   
})

//Delete all Todo

router.delete('/deleteall',adminMiddleware,async(req,res)=>{

    try {
        // Delete all todos
        await Todo.deleteMany({ userId: req.user.userID});
        
        res.json({ message: 'All todos deleted' });
    } catch (error) {
        res.status(500).json({ error: 'Failed to delete todos' });
    }
})

//Delete bby finding by id

router.delete('/deleteone/:id',adminMiddleware,async(req,res)=>{
    const { id } = req.params

    try{
        const todo = await Todo.findByIdAndDelete(id)

        if(!todo){
            res.status(400).json("todo do not exist")
        }
       
        res.status(200).json({
            deletedtodo:todo
        })

    }catch(error){
        res.status(500).json({
            error:"failed to delete reason " + error
        })
    }
})

// get all todo 

router.get('/alltodo',adminMiddleware,async(req,res)=>{

    try{

    const todo = await Todo.find({ userId : req.user.userID})
    console.log(req.user.ID)

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

// fetch by id

router.get("/todo/:id",adminMiddleware,async(req,res)=>{
    const { id } = req.params

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


module.exports = router;
