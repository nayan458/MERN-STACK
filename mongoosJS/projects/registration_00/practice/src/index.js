const express = require("express");
const hbs = require("hbs");
const path = require("path");
const port = process.env.PORT || 3000;

require('./mongo_conn/db/conn')

const app = express();

const publ = path.join(__dirname,"./public");
const prtl = path.join(__dirname,"./partials");

app.set(express.static(publ));
app.set("view engine","hbs");
hbs.registerPartials(prtl);

app.get('/',(req,res)=>{
    res.render('index');
})

app.get('/login',(req,res)=>{
    res.render('login');
})

app.get('/reg',(req,res)=>{
    res.render('reg');
})

app.get('/sec',(req,res)=>{
    res.render('sec');
})

app.listen(port,()=>console.log(`successfully started at port ${port}`));