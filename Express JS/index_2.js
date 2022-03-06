const fs = require("fs");
const path = require("path");
const express = require("express");

const port = 3000;

firstLight = express();

// console.log(path.join(__dirname,'./public2'));
fLPath = path.join(__dirname,'./public2');

firstLight.use(express.static(fLPath));

firstLight.get("/",(req,res)=>{
    res.send("Hello world from express");
})

firstLight.listen(port,()=>{
    console.log(`server ${port} has successfully started`);
})