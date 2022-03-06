const express = require("express");
const mysql = require("mysql");

const conn = mysql.createPool({
    user : "root",
    password : "",
    host : "localhost",
    port : 3306
})

