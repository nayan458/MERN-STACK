const fs = require("fs");

// fs.writeFileSync("read.text","welcoe to my channel");

// fs.writeFileSync("read.text","it does overwriting");

// fs.appendFileSync("read.text","\nhow are you I am fine");

//////////buffer data 

// Node.js include an additional data type called Buffer
// (note available in browser's JavaScript).
// Buffer is mainly used to store binary data,
// while reading from a file or reciving packets over the network.

// const getDta = fs.readFileSync("read.text");
// console.log(getDta);


{/* <Buffer 69 74 20 64 6f 65 73 20 6f 76 65 72 77 72 69 74 69 6e 67 68 6f 77 20 61 72 65 20 79 6f 75  */}
// 20 49 20 61 6d 20 66 69 6e 65 0a 20 68 6f 77 20 61 72 65 20 ... 36 more bytes>

////// geting original data
// const origiDta = getDta.toString();
// console.log(origiDta)

////// how to rename

// fs.renameSync("read.text","rename.text");