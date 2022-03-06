const express = require("express");
const router = new express.Router();

const student = require("../models/student")

router.get("/nayan",(req,res)=>{
    res.send("Hello from hagura");
})

// enter data
router.post('/student',async(req,res)=>{
    
    try{
        console.log(req.body)       // show request by POSTMAN
        const user = new student(req.body);
        const result = await user.save();
        res.status(201).send(result);
    }catch(err){
        res.status(400).send(`Error status : ${err}`);
    }
})
 
// // find data
router.get('/students',async(req,res)=>{
    try {
        const result = await student.find()
        res.send(result);
    } catch (error) {
        res.status(404).send(error);
    }
})

// find by id
router.get('/student/:id', async(req,res)=>{
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

// {/***************************************************** */
// // CHALLENGE SEARCH WITH NAME
// // app.get('/student/name',async(req,res)=>{
    
// //     const dataName = await student.find({name : `${req.params.name}`});
// //     console.log(dataName);
// //     res.send(dataName);

// // })
// /******************************************************************** */}

// // Update by id
router.patch("/student/:id",async(req,res)=>{
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

// // delete by id 
router.delete("/student/:id",async(req,res)=>{
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


module.exports = router;