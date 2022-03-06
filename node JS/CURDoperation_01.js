// challenge Time

const fs = require("fs");

// 1: create a folder name it Nayan
// 2: Create a file in it named bio.txt and data into it.
// 3: Add more data into the file at the end dof the existing data.
// 4: Reade the data without getting the buffer Data at first.
// 5: Rename the file name to mybio.txt
// now delete both the file and the folder

// create 
// update
// read
// delet


// fs.mkdirSync("CURD");
// fs.writeFileSync("./CURD/nayan.txt","this is nayan");
// fs.appendFileSync("./CURD/nayan.txt","he is the hero");
// fs.renameSync("./CURD/nayan.txt","./CURD/mybio.txt");
// const redDta = fs.readFileSync("./CURD/mybio.txt","utf-8");
// console.log(redDta);

// fs.unlinkSync("./CURD/mybio.txt");

fs.rmdirSync("./CURD");