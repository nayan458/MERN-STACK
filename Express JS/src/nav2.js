const fs = require("fs");
// fs.readFile("./nav.js","utf-8",(err,data)=>{
//     fs.appendFileSync("./nav2.js",data);
//     if(err)
//     console.log(err);
// })
// fs.appendFileSync("./index.html","");
// fs.mkdirSync("src");


const express = require("express");
const nayan = express();
const port = 8000

nayan.get('/',(req,res)=>{
    res.write("<h1>This is home page</h1>");
    res.write("<h1>this is nayan here</h1>");
    res.send();
});
nayan.get('/about',(req,res)=>{
    res.status(200).send("This is home about");
});
nayan.get('/contact',(req,res)=>{
    res.send("This is home contact");
});
// nayan.get('/temp',(req,res)=>{
//     res.send({
//         id : 1,
//         name : "nayan",
//     })
// });
nayan.get('/temp',(req,res)=>{
    res.json([{
        id : 1,
        name : "nayan",
    },
    {
        id : 1,
        name : "nayan",
    },
    {
        id : 1,
        name : "nayan",
    }
])
});

nayan.listen(port,()=>{
    console.log(`listening to port ${port}`);
});