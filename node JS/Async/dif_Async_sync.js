const fs = require("fs");

// ///////Syncronus
// const data_00 = fs.readFileSync("demo.txt","utf-8");

// console.log(data_00);


/////////Async Method
fs.readFile("demo.txt","utf-8",(err,data_01)=>{
    console.log(data_01);
    console.log(err);
})

// fs.writeFileSync("challenge_02.js","");