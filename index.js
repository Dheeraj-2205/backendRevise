const express = require('express');
require('dotenv').config()
const app = express();


app.get("/dheeraj", (req,res) =>{
    res.send("<h1>hii dheeraj your server is working perfectly<h1/>")
});

app.listen(process.env.PORT, ()=>{
    console.log(`server is listening`);
})