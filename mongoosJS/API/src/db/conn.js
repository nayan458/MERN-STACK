const mongoose = require("mongoose");
const validateor = require("validator");

mongoose.connect("mongodb://localhost:27017/student-api",
{
     useNewUrlParser: true ,
     useUnifiedTopology: true,
     useCreateIndex: true,
     useFindAndModify : false
    })
.then(()=>console.log("sucessfully connected to database"))
.catch((err)=>console.log("bad connection"));
