const express = require("express");
const mongoose = require("mongoose");
const StdRouter = require("../src/routers/stud")

const mycon = require('./db/conn');
const student = require("./models/student")

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json())

// create a new router
const router = new express.Router();

// we need to define
router.get("/thapa",(req,res)=>{
    res,send("Hellow ");
});

// we need to registeer our 
app.use(router);

// app.get('/',(req,res)=>{
//     res.send("hello world");
// })


// entry using .then
{// app.post("/student",(req,res)=>{

//     console.log(req.body)
//     const user = new student(req.body);
    
//     user.save()
//     .then(()=>{
//         res.status(201).send(user);
//     }).catch((e)=>{
//         res.status(400).send(`ERROR : ${e}`)}
//         );
    
//     // /// using async-await

//     // MY TRY BAD
//     // const func = async() =>{
//     //     try{
//     //         const result = await user.save()
//     //         console.log(result);
//     //     }catch(err){
//     //         console.log(`Error status : ${err}`);
//     //     }
//     // }

//     // func();


//     // res.send("Hello world student");
// })
}


// enter data
app.post('/student',async(req,res)=>{
    
    try{
        console.log(req.body)       // show request by POSTMAN
        const user = new student(req.body);
        const result = await user.save();
        res.status(201).send(result);
    }catch(err){
        res.status(400).send(`Error status : ${err}`);
    }
})
 
// find data
app.get('/students',async(req,res)=>{
    try {
        const result = await student.find()
        res.send(result);
    } catch (error) {
        res.status(404).send(error);
    }
})

// find by id
app.get('/student/:id', async(req,res)=>{
    try {
        const _id = req.params.id;
        const studentData = await student.findById(_id);
        console.log(studentData);

        // res.send(studentData);  //encoded in if else

        if(!studentData){
            return res.status(404).send();
        }else{
            res.status(200).send(studentData);
        }

    } catch (error) {
        res.status(500).send(error)
    }
})

{/***************************************************** */
// CHALLENGE SEARCH WITH NAME
// app.get('/student/name',async(req,res)=>{
    
//     const dataName = await student.find({name : `${req.params.name}`});
//     console.log(dataName);
//     res.send(dataName);

// })
/******************************************************************** */}

// Update by id
app.patch("/student/:id",async(req,res)=>{
    try {
        const _id = req.params.id;
        const updateDoc = await student.findByIdAndUpdate(_id, req.body, {
            new : true
        });
        res.send(updateDoc);
        console.log(updateDoc);
    } catch (error) {
        console.log(error);
        res.status(400).send(error);
    }
})

// delete by id 
app.delete("/student/:id",async(req,res)=>{
    try {
        const id = req.params.id;
        if(!id){
                return res.status(404).send();
        }else{
            const delDoc = await student.findByIdAndDelete(id);
            console.log(delDoc);
            res.send(delDoc);
        }
    } catch (error) {
        console.log(error);
        res.status(500).send(error)
    }
})

/*************************************** */
//                      router           //
/*************************************** */








app.listen(port,()=>console.log("sucessfully conected"));


// src>db>connection.js
// models>students.js
// 

// you DO NOT NEED express.json() and express.urlencoded()
// for GET Requests or DELETE Requesets. We only need it for 
// post and put req.

// express.json() is a method inbuilt in express to recognize the incoming
// Request Object as a JSON object. This method is called as a middleware
// in your application using the code : app.use(express.jso())