const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/olympic",{
    useNewUrlParser: true ,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify : false
})
.then(()=>{
    console.log("succesfully connected to database");
})
.catch((err)=>{
    console.log(err);
});

// module.exports = conn;

