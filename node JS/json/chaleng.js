const fs = require("fs");

const bio = {
    name : "nayan",
    age : 21,
    pason : "hagura"
};

//chalange

// 1: consvert to JSON
// 2: ADD to another file 
// 3: readFile 
// 4: again convert back to js obj ori
// 5:console.log the data

const JSONobj1 = JSON.stringify(bio);

// console.log(JSONobj1);

// fs.writeFile("challenge_01.json",JSONobj1,(err)=>{
//     console.log("successflly : 1");
        // console.log(err);
// })

readFlData = fs.readFile("challenge_01.json","utf-8",(err,data)=>{
    console.log("file successfully read");
    if(err != null)
        console.log(err);
    else{
        console.log(data);                  //3: read data
        originalData = JSON.parse(data);    
        console.log(originalData);          //4: challenge
    }
    
})

// console.log(JSON.parse(readFlData));
