const express = require("express");
const app = express();

// app.get(route, callback)
app.get('/',(req,res)=>{
    res.send("hello world from the express");
});
app.get('/about',(req,res)=>{
    res.send("hello world from about");
})

app.listen(8000,()=>{
    console.log("server is starting");
});

// API
// get - create
// post - create
// put - update
// delete - delete

// The callback function has 2 parameters, request(req) and response(res).
// The require





