const dta = `// we pass them a function as an arguement - a callback -
// that gets called when that task completes.
// The callback has an arguement that tells you wheather
// the operation completed successfully.
// Now we need to say what to do when fs.writeFile 
// has completed (even if it's nothing), and start 
//  checking for errors.`

const fs = require("fs");

// fs.writeFile("my_note.txt",`${dta}`,(err)=>{
//     console.log("work is done");
//     console.log(err);
// });

// fs.writeFile("demo.txt","Evrey new day is awesom",(err)=>{
//     console.log("work is done");
//     console.log(err);
// });

// fs.appendFile("demo.txt","\nNew text is added using Async append",(err)=>{
//     console.log("Appended");
//     console.log(err);
// })

fs.readFile("demo.txt","UTF-8",(err,data_2)=>{
    console.log(data_2);
    console.log(err);
})

// fs.writeFileSync("dif_Async_sync.js","");