//  Create a middleware that logs all incoming requests to the console.

const express = require('express');
const app = express();
let count =0
function logRequests(req, res, next) {
    if(req.method === "GET"){
        count+= 1
    console.log("get method called " +count +"times")
    
    next()
    }else{
        console.log("req failed")
    }
}

app.use(logRequests);

app.get('/', (req, res) => {
    res.status(200).json({ message: 'Hello, world!' });
});

app.listen(3000,()=>{
    console.log("port is running")
  })


