// // the http.createServer() method includes request and response parameters which is suppplied by Node.js.

// // The request object  can be used to get information about the current HTTP request.
// // eg., url, request header and data.

// // The response from the Http server is supposedto be displayed as HTML,
// // you should include an HTTP header with the correct content type:

// const http = require('http');
// // const port = process.env.PORT || 8000;

// const server = http.createServer((req,res) =>{
//     res.end('Hello from the other side');
// });

// server.listen(8000, "127.0.0.1",()=>{
//     console.log("listenning to the port no 8000")
// })
// // server.listen(port,()=>{
// //     console.log("listenning to the port no 8000")
// // })