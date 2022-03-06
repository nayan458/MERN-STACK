const http = require('http');

const port = process.env.PORT || 3000;

const server = http.createServer((req, res) =>{
    console.log(req.url);
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html')
    res.end('<h1> this is nayancoding</h1> <p> hey this is the way you rock the world</p>')
})

server.listen(port, () =>{
    console.log(`Server is listioning on port: ${port}`);
})