// Stream are objects that lets you read data from a source 
// or write data to a destination in constinuous fashion. 
// In Node.js there are four types of streams-

/////READABLE- Stream which is used for read operation.

/////Writable- stream which is used for  write operation.

/////Duplex- stream which is used for both read and write operation

/////Transform- Atype of duplex stream where the output is computed on input.

//Each type of Stream is an EventEmitter instance and throws several event at 
// different instance of time. For example, some of the commonly used events are -

/////data- This event is fired when there is data is available to read.
/////end- This event is fired when there is no more data to read
/////error-this event is fired when there is any error reciving or writing data.
/////finish-this event is fired when all the data has been flushed to underlying sysytem

const fs = require("fs")
const http = require("http")

const server = http.createServer();

server.on('request', (req,res)=>{
//     // fs.readFile("index.txt","",(err,data)=>{
//     //     if(err) return console.error(err);
//     //     res.end(data.toString());
//     // });

// //     const rstream = fs.createReadStream("index.txt");

//     // rstream.on("data",(chandata) =>{
//     //     res.write(chandata);
//     // });
//     // rstream.on("end",()=>{
//     //     res.end();
//     // })
//     // rstream.on("error",(err)=>{
//     //     console.log(err);
//     //     res.end("page not found");
//     // })

// /********************************************************** */ 
// //////pipe///////////////3edWay and it reads and writes at the same time.
// the method used to take readable stream and connect it to a writable stream.
//     const rstream = fs.createReadStream("index.txt");
//     rstream.pipe(res)
// //////////////////////////
// /******************************************** */
});

server.listen(8000,"127.0.0.1",()=>{
    console.log("server is listening to port 8000");
});