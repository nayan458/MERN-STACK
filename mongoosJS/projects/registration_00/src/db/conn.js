const mongoose = require("mongoose");

mongoose.connect(process.env.MONGO_Key,{
    useNewUrlParser : true,
    useCreateIndex : true,
    useUnifiedTopology : true
})
.then(()=>console.log("connected to database"))
.catch((err)=>console.log(err))