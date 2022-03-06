const express = require("express");
const requests = require("requests");
const path = require("path");
const hbs = require("hbs");

const port = process.env.PORT || 3000;

const PublicPath = path.join(__dirname,"../public");
const PartialPath = path.join(__dirname,"./partial");

app = express();


app.use(express.static(PublicPath)); //Public Folder is now included
app.set('view engine',"hbs");       // sets the view engin and view Folder
hbs.registerPartials(PartialPath);   //Partials are registered

app.get('/',(req,res)=>{
    res.render('index');
})

app.get('/about',(req,res)=>{
    res.render('about');
})

app.get('/cart',(req,res)=>{
    res.render('cart');
})

app.get('/temp',(req,res)=>{
/*********************************** */
    
    requests(`http://api.openweathermap.org/data/2.5/weather?q=${req.query.name}&appid=76a7fc8a52a722b527586357b1e320d8`)
    .on('data',(chunk) => {
    const chunkDta = JSON.parse(chunk);

    const chunkArr = [chunkDta];
    
    console.log(`City name is ${chunkArr[0].name} and its temp is ${chunkArr[0].main.temp}`);
    
    const temp_data = `City name is ${chunkArr[0].name} and its temp is ${chunkArr[0].main.temp}`;
    
    res.write(chunkArr[0].name);
    
    })
    .on('end',(err) => {
    if (err) return console.log('connection closed due to errors', err);
    res.end()
    });

/*********************************** */
})

app.get('*',(req,res)=>{
    res.render('404');
})

app.listen(port,()=>{
    console.log(`listening t port ${port}`);
})