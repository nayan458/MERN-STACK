const mysql = require("mysql");

const conn = mysql.createConnection({
  host : "localhost",
  user : "root",
  password : "",
  database : "mydb"
})

// const sql = "CREATE DATABASE test_02";
// const sql = "CREATE TABLE customers(id INT AUTO_INCREMENT PRIMARY KEY,name VARCHAR(20),address VARCHAR(20))";
// const sql = "INSERT INTO customers (name, address) VALUES ('Company Inc', 'Highway 37')";

// conn.connect(function(err) {
//   if (err) throw err;
//   console.log("Connected!");
//   conn.query(sql, function (err, result) {
//     if (err) throw err;
//     console.log("1 record inserted")
//   });
// });


// multiple insertion

// const sql = "INSERT into customers (name,address) VALUES?";

const value = [
  ['John', 'Highway 71'],
  ['Peter', 'Lowstreet 4'],
  ['Amy', 'Apple st 652'],
  ['Hannah', 'Mountain 21'],
  ['Michael', 'Valley 345'],
  ['Sandy', 'Ocean blvd 2'],
  ['Betty', 'Green Grass 1'],
  ['Richard', 'Sky st 331'],
  ['Susan', 'One way 98'],
  ['Vicky', 'Yellow Garden 2'],
  ['Ben', 'Park Lane 38'],
  ['William', 'Central st 954'],
  ['Chuck', 'Main Road 989'],
  ['Viola', 'Sideway 1633']
]

// conn.connect((err)=>{
//   if(err) throw err;
//   conn.query(sql,[value],(err,result)=>{
//     if(err) throw err;
//     console.log("result" + result.affectedRows);
//   })
// })

// EXperiment by me   : FAIL
// conn.connect((err)=>{
//   if(err) throw err;
//   // value.map((curelem,index)=>{
//     // const sql = `INSERT into customers (name,address) VALUES(${curelem[0]},${curelem[1]})`
//     const sql = `INSERT into customers (name,address) VALUES('${curelem[0]}','${curelem[1]}')`
//     conn.query(sql,(err,result)=>{
//       if(err) throw err;
//       console.log("RESULT: " + result.insertID);
//       // console.log(index);
//     // })
//   })
// })
// value.map((curelem)=>{
//   console.log(curelem[0]);
//   console.log(curelem[1]);
// })

const sql = "INSERT into customers (name,address) VALUES?"

conn.connect((err)=>{
  if(err) throw err;
  conn.query(sql,[value],(err,result)=>{
    if(err) throw err;
    console.log("result: " + result.id);
    console.log(result.toString)
  })
})