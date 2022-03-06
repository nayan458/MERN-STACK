const fs = require("fs");
const http = require("http");
const requests = require("requests");
// const 

// fs.appendFileSync("index.html","");
// fs.appendFileSync("index.css","");

// fs.appendFileSync("Api.txt","");

const indexFile = fs.readFileSync("./index.html","utf-8");

const replaceVal = (tempVal,orgVal) =>{
    let temperature = tempVal.replace("{%temper%}", orgVal.main.temp)
    temperature = temperature.replace("{%temp_min%}", orgVal.main.temp_min)
    temperature = temperature.replace("{%temp_max%}", orgVal.main.temp_max)
    temperature = temperature.replace("{%temp_state%}", orgVal.name)
    temperature = temperature.replace("{%temp_country%}", orgVal.sys.country)
    // console.log(temperature);
    return temperature;
};

const myServer = http.createServer((req,res)=>{
    if (req.url == '/'){
        requests('http://api.openweathermap.org/data/2.5/weather?q=Assam&appid=76a7fc8a52a722b527586357b1e320d8')
        .on('data',(chunk) => {
        // console.log(chunk)
        // since the data that is chunk is in JSON form so we need to convert it to object to get data from it
        const chunkDta = JSON.parse(chunk);

        // console.log(chunkDta);
        // again we convert it to array;
        const chunkArr = [chunkDta];
        // console.log(chunkArr);

        const realTimeData = chunkArr.map((val) => replaceVal(indexFile, val)).join();
            res.write(realTimeData);
            // console.log(realTimeData);
        })
        .on('end',(err) => {
        if (err) return console.log('connection closed due to errors', err);
        res.end()
        });
    }
})

myServer.listen(8000,"127.0.0.1");