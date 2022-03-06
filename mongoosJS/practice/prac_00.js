const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/practice",{ useNewUrlParser: true , useUnifiedTopology: true})
.then(()=>console.log("Successfully conected"))
.catch((err)=>console.log(err));

const myScema = mongoose.Schema({
    name : String,
    subject : String,
    marks : Number,
    status :{
        type : String,
        default : null
    },
    date : {
        type : Date,
        default : Date.now
    }
})

///////////Creating a module(table)///////////////

const marksheet = new mongoose.model("marksheet",myScema);

///////////Entering one single document///////////////////

const entry = async() =>{
    const student1 = new marksheet({
        name : "nayan",
        subject : "OA",
        marks : 87,
        status : "pass"
    })

result = await student1.save();
console.log(result);
}

// entry();

const multipleEntry = async() => {
try{    const student2 = new marksheet({
        name : "pragyan",
        subject : "OA",
        marks : 88,
        status : "pass"
    })
    const student3 = new marksheet({
        name : "furkan",
        subject : "OA",
        marks : 88,
        status : "pass"
    })

const result = await marksheet.insertMany([student2,student3]);
console.log(result);
}catch(err) { console.log(err)};
}

// multipleEntry()




