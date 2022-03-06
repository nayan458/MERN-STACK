const express = require("express");
const { mongo } = require("mongoose");
const app = express();
const port = process.env.PORT || 3000;
const path = require("path");
require("../db/conn")

const path_public = path.join(__dirname,"../public");
const path_partials = path.join(__dirname,"../partials");
const templates_path = path.join(__dirname,"../templates");



app.use(express.static(path_public));
app.set("view engine","hbs");

app.set("views",templets_path);

app.get('/',(req,res)=>{
    res.render('index');
})


app.listen(port,()=>console.log(`successfully running at ${port}` ));

// mongo.find({Nayan:90})

// qjzwglbSF8KNerkt
// nayanbd

