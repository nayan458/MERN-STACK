const express = require("express");
const path = require("path");

const port = 8000;

newapp = express();

// console.log(__dirname);
// console.log(path.join(__dirname,'public'));

const staticPath = path.join(__dirname,'public1');
newapp.use(express.static(staticPath));

newapp.listen(port,()=>{
    console.log(`listening to port ${port}`);
})