// www.nayan.com
// /about
// /contact
// /temp


const express = require("express");
const nayan = express();
const port = 8000

nayan.get('/',(req,res)=>{
    res.send("This is home page");
});
nayan.get('/about',(req,res)=>{
    res.status(200).send("This is home about");
});
nayan.get('/contact',(req,res)=>{
    res.send("This is home contact");
});
nayan.get('/temp',(req,res)=>{
    res.send("This is home temp");
});

nayan.listen(port,()=>{
    console.log(`listening to port ${port}`);
});