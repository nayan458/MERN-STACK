// const mongooese = require("mongoose");

// // step --1
// mongooese.connect("mongodb://localhost:27017/prc",{ useNewUrlParser: true , useUnifiedTopology: true})
// .then(()=> console.log("connected successfully"))
// .catch((err)=>console.log(err));

// // step--2
// const myScema = new mongooese.Schema({
//     name : String,
//     subject : {
//         subject_1 : String,
//         marks_1 : Number,
//         subject_2 : String,
//         marks_2 : Number,
//         subject_3 : String,
//         marks_3 : Number,
//     },
//     result : Boolean,
//     date : {
//         type : Date,
//         default : Date.now,
//     }
// })

// // step -->3
// const markSheet = new mongooese.model("markSheet",myScema);

// const createData = async()=>{
// try {
//     const getData = new markSheet({
//     name : "nayan",
//     subject : {
//         subject_1 : "Maths",
//         marks_1 : 87,
//         subject_2 : "CFICT",
//         marks_2 : 96,
//         subject_3 : "ICP",
//         marks_3 : 99,
//     },
//     result : true,
// })
// const result = await getData.save();
// console.log(result);
    
// } catch (err) {
//     console.log(err)
// }
// }

// createData();







// const mongoose = require("mongoose");

// mongoose.connect("mongodb://localhost:27017/nayandata_01",{ useNewUrlParser: true , useUnifiedTopology: true})
// .then(()=>console.log("successfully connected"))
// .catch((err)=>console.log(err))

// const mySchaema = new mongoose.Schema({
//     name:String,
//     age:Number,
// })

// const myModule = new mongoose.model("myModel",mySchaema);

// const createData = async()=>{
// try
//     {const getData = new myModule({
//         name: "Nayan",
//         age: 32,
//     })
//     const result = await getData.save();
//     console.log(result);
//     }
//     catch(err){
//         console.log(err);
//     }

// }

// createData();