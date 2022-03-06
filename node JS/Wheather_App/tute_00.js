const fs = require("fs");
const http = require("http");
const requests = require('requests');

// const readIndex = fs.readFile("index.html","utf-8",(err,data)=>{
//     if(err)
//         console.log(`there is a problem ${err}`);
//     else
//         return data
// })
// const mainDiv = document.getElementsByClassName('tute');
// const mainDiv = document.getElementsByClassName('tute')


const readIndex = fs.readFileSync("index.html","utf-8")
// console.log(readIndex);



const server = http.createServer((req,res)=>{
    if(req.url == '/'){
        requests('http://api.openweathermap.org/data/2.5/weather?q=Assam&appid=76a7fc8a52a722b527586357b1e320d8')
        .on("data",(chunk)=>{
            // console.log(chunk);
            // mainDiv.innerText = chunk;
            res.write(readIndex);
        })   
        .on("end",()=>{
            res.end();
        })
    }
})

server.listen(8000,"127.0.0.1",(err)=>{
    if(err){
        console.log(`there is an error ${err}`);
    }else console.log("server is listening");
});