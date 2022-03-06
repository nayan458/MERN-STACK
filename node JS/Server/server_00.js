const http = require('http');
const fs = require('fs');

const server = http.createServer((req,res)=>{
    // console.log(req.url);
    // res.end("hi how are you");
    if(req.url=='/'){
        res.end("index page");
    }else 
    if(req.url=='/about'){
        res.end("about page");
    }
    else{
        res.writeHead(404, {"Content-type": "text/html"})
        res.end("<h1>404 error page not found</h1>");
    }
});

server.listen(8000,"127.0.0.1",()=>{
    console.log("server is listening");
})