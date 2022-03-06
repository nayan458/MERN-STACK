const express = require("express");
const path = require("path");
const port = 3000;
const hbs = require("hbs");

app = express()

const PathOfPublic = path.join(__dirname,"../public")
console.log(PathOfPublic);
// const TemplatePath = path.join(__dirname,"./template")

const partialPath = path.join(__dirname,"./partial")
console.log(partialPath);

app.use(express.static(PathOfPublic))

app.set("view engine","hbs");
// app.use(express.static('views/img')); 
// app.set('views',TemplatePath);
hbs.registerPartials(partialPath);

// app.use(express.static(PathOfPublic));

app.get("",(req,res)=>{
    res.render('index');
})

app.get("/about",(req,res)=>{
    res.render('about');
})

app.get("/cart",(req,res)=>{
    res.render('cart');
})

app.get('*',(req,res)=>{
    res.render("404",{
        errorPage : "this page doesnot exist"
    });
})

app.get('/about/*',(req,res)=>{
    res.render("404",{
        errorPage : "this page under about doesnot exist"
    });
})

app.listen(port,()=>{
    console.log(`listening to port: ${port}`);
})
