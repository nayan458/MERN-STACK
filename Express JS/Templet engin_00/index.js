const fs = require("fs");
const express = require("express");
const path = require("path");

app = express();

const myPath = path.join(__dirname,"/public3");
console.log(myPath);

app.use(express.static(myPath));

app.listen(3000,()=>{
    console.log('app successfullly started at port 3000');
})

// fs.mkdirSync("")
// fs.appendFileSync("")
