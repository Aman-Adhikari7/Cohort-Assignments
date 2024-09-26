const express = require("express");
const dotenv = require("dotenv");
dotenv.config();



const app = express();
const port = process.env.PORT;

app.use(express.json());

const userRoutes = require('./routes/user');
const todoRoutes = require('./routes/todo')

app.use('/api/users', userRoutes);
app.use('/api/users', todoRoutes);

app.get("/healthy", (req, res)=> res.send("I am Healthy"));

//  start writing your routes here

app.listen(port, ()=> console.log(`server is running at http://localhost:${port}`));