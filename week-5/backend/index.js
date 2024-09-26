// start writing from here
const express = require ("express")
const dotenv = require ("dotenv")
const cors = require ('cors')
dotenv.config()



const app = express()
app.use(cors());
const Port = process.env.PORT


app.use(express.json())

const userRoute = require("./routes/user")
const todoRouter = require("./routes/todo")
app.use('/api/user',userRoute)
app.use('/api/user',todoRouter)




app.get("/check",(req,res)=>{
    res.json("created you first endpoint sucess")
})



app.listen(Port,()=>{
    console.log("connected to port http://localhost:" + Port)
})