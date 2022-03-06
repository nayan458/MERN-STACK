const express = require("express");
const path = require("path");
const port = 3000;

app = express();

// const mypath = path.join(__dirname,"../views");
// console.log(mypath);

// to set view engin path
app.set('view engine','hbs');


// app.use(express.static(mypath));

// template enin route
app.get("",(req,res)=>{
    res.render('index',
    {yourname: "Nayan",})
});

app.get("/",(req,res)=>{
    res.send("Hello world from express");
})

app.listen(port,()=>{
    console.log(`Server started at port: ${port}`);
})
