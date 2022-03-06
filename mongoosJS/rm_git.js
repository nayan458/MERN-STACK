const fs = require("fs");
const path = require("path");

fs.rm(path.join(__dirname,".git"),{recursive:true},(err)=>{
    if(err)
        console.log(`error message :${err}`);
    else    
        console.log("successfully deleted the file");
})