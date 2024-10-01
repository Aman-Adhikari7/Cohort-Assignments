const express = require ('express')
const dotenv= require ('dotenv')
dotenv.config()
const cors = require('cors')
const app = express()


app.get('/healthy',(req,res)=>{
    res.send("i am healthy")
})
app.use(express.json())
app.use(cors())

//user 

const userApi = require('./routes/user')
app.use('/api/users',userApi)

//admin

const adminApi = require('./routes/admin')
app.use('/api/admins',adminApi)

//Purchase

const PurchaseApiS = require ('./routes/purchase')
app.use('/api',PurchaseApiS)




app.listen(process.env.PORT, ()=>{
 console.log(`Connected to port ${process.env.PORT}`)
})