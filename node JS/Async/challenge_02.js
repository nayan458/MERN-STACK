// // // 1: create a folder name it Nayan
// // // 2: Create a file in it named bio.txt and data into it.
// // // 3: Add more data into the file at the end dof the existing data.
// // // 4: Reade the data without getting the buffer Data at first.
// // // 5: Rename the file name to mybio.txt
// // // now delete both the file and the folder

// const fs = require("fs");

// // // fs.mkdirSync("./nayan",(err)=>{
// // //     console.log("folder created you can proceed");
// // //     console.log(err);
// // // })

// // const dta = "my name is Nayan" ;

// // fs.writeFile("./nayan/bio.txt",dta,(err)=>{
// //     console.log("writeFile used");
// //     console.log(err)
// // })

// // fs.appendFile("./nayan/bio.txt","\nI am learning node",(err)=>{
// //     console.log("data is appended in the file bio,txt");
// //     console.log(err);
// // })

// // fs.readFile("./nayan/bio.txt","utf-8",(err,data)=>{
// //     console.log("readFile is called");
// //     console.log(data);
// //     console.log(err);
// // })

// // fs.rename("./nayan/bio.txt","./nayan/renamed.txt",(err)=>{
// //     console.log("file is renamed successfully");
// //     console.log(err);
// // })

// fs.unlink("./nayan/renamed.txt",(err)=>{
//     console.log(err);
// })

// fs.rmdir("./nayan",(err)=>{
//     console.log("folder deleted successfully");
//     console.log(err)
//         });