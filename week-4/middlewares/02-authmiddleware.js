
//  Implement an authentication middleware that checks for a valid API key in the request headers.

const express = require('express');
const app = express();
const VALID_API_KEY = '100xdevs_cohort3_super_secret_valid_api_key'; // key is 100xdevs-api-key use that API key for authenticate user


// Middleware to check for a valid API key
function authenticateAPIKey(req, res, next) {
    const validapi= req.headers.valid_api_key
    if(validapi === VALID_API_KEY){
        next()
    }else{
        res.status(400).json({
            error: "invalid api key"
        })
    }
}

app.use(authenticateAPIKey);

app.get('/', (req, res) => {
    res.status(200).json({ message: 'Access granted' });
});

app.listen(3000,()=>{
    console.log("port is running")
  })


