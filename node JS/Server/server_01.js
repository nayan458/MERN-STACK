const http = require('http');
const fs = require('fs');

const server = http.createServer((req,res)=>{
    // console.log(req.url);
    // res.end("hi how are you");
    if(req.url=='/'){
        res.end(fs.readFileSync('./index.html',"utf-8"))
    }
});

server.listen(3000,"127.0.0.1",()=>{
    console.log("server is listening");
})