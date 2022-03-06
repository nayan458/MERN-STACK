const mysql = require("mysql");

const conn = mysql.createConnection({
    host : "localhost",
    user : "root",
    password : "",
}).connect((err)=>{
    if(err) throw err;
    else console.log('successfully connected');
})
