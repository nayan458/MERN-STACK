const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017",{
    
}).then(()=>console.log("successfully connected to database"))
.catch((err)=>console.log(`Error from database : ${err}`));