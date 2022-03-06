const fs = require("fs");
const http = require("http");

// fs.readFile(`${__dirname}/userAPI.json`,"utf-8",(err,data)=>{
//     console.log(err);
//     console.log(data);

//     const orgData = JSON.parse(data);
//     console.log(orgData);
//     // res.end(orgdata);

//     // res.end(data);
//     // return data;
//     // res.end(apiDta);
// })

const data = fs.readFileSync(`${__dirname}/userAPI.json`,"utf-8")
const orgData = JSON.parse(data);


const server = http.createServer((req,res)=>{
    if(req.url  == '/'){
        res.end("this is home page");
    }else if(req.url == '/about'){
        res.end("this about page");
    }else if(req.url == '/userapi'){
        // const apiDta = 

        {/*fs.readFile(`${__dirname}/userAPI.json`,"utf-8",(err,data)=>{
            console.log(err);
            console.log(data);

            const orgData = JSON.parse(data);
            console.log(orgData);
            // res.end(JSON.parse(data));
            
            // console.log(orgData[1].fName);
            res.end(orgData[1].fName);
            // return data;
            // res.end(apiDta);
        })
    // res.end("Hello from the Api");*/}
        res.write(`${orgData[0].fName} and ${orgData[1].fName} are best friends`)
        res.end();
    }else{
        res.writeHead(404,{"Content-type" : "text/html"})
        res.end("error code 404");
    }
})

console.log(__dirname);

server.listen(8000,"127.0.0.1",()=>{
    console.log("server listening to port 8000")
})