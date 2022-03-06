// const fs = require("fs");
// const http = require("http");

// // fs.appendFile("index.html","",()=>{
// //     console.log('succesfuly created');
// // })

// // const api = "https://type.fit/api/quotes";

// // const data = await fetch(api);
// // // console.log(data);

// // const getData = await data.json();
// // // console.log(getData)

// const api = "https://type.fit/api/quotes";

// const myFunc = async() =>{
//     data = await fetch(api);
//     getData = await data.json();
//     console.log(data);
//     console.log(getData);
// }
// myFunc();

// // const myServer = http.createServer((req,res)=>{
// //     if(req.url == '/'){
// //         myFunc();
// //         res.write("look console");
// //         res.end();
// //     }
// //     else if(res.url == '/getData'){
// //         myFunc();
// //         res.write("look console 2");
// //         res.end();
// //     }
// // })

// // myServer.listen(8000,"127.0.0.1",()=>{
// //     console.log("hagura");
// // });




// // 

// // const joke = document.querySelector('#joke');
// //         const btn = document.querySelector('#btn');

// //         // async function crackJoke(){}

// //         const crackJoke = async() =>{
// //             try{
// //                 const setHadr = {
// //                     headers: {
// //                         Accept : "application/json"
// //                     }
// //                 }
// //                 const res = await fetch('https://icanhazdadjoke.com',setHadr)
// //                 const data = await res.json();
// //                 joke.innerHTML = data.joke;
// //             }catch(err){
// //                 console.log(`the erro is ${err}`);
// //                 joke.innerHTML = `${err}`;
// //             }
// //         }

// //         btn.addEventListener('click',crackJoke);
// //         crackJoke();