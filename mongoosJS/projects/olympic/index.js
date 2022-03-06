const express = require("express");

const router = require("./src/router/play")

const app = express()
const port = process.env.PORT || 3000;

app.use(express.json())
app.use(router)

require("./src/db/conn")
const player = require("./src/module/players")

{// app.post('/mens',async(req,res)=>{
//     try {
//         const data = req.body;
//         const pdata = new player(data);
//         const result = await pdata.save();
//         res.status(201).send(result);
//         console.log(result);
//     } catch (error) {
//         res.status(400).send(error)
//     }
// })
// app.get('/mens',async(req,res)=>{
//     try {
//         const getData = await player.find().sort({"rank":1})
//         res.send(getData);
//         console.log(getData);
//     } catch (error) {
//         res.status(400).send(error)
//     }
// })
// app.get('/mens/:id',async(req,res)=>{
//     try {
//         const id = req.params.id;
//         const getData = await player.findById({_id:id})
//         res.send(getData);
//         console.log(getData);
//     } catch (error) {
//         res.status(400).send(error)
//     }
// })
// app.patch('/mens/:id',async(req,res)=>{
//     try {
//         const id = req.params.id;
//         const getData = await player.findByIdAndUpdate({_id:id},req.body,{
//             new : true
//         })
//         res.send(getData);
//         console.log(getData);
//     } catch (error) {
//         res.status(500).send(error)
//     }
// })
// app.delete('/mens/:id',async(req,res)=>{
//     try {
//         const _id = req.params.id;
//         const getData = await player.findByIdAndDelete(_id);
//         res.send(getData);
//         console.log(getData);
//     } catch (error) {
//         res.status(500).send(error)
//     }
// })
}



app.listen(port,()=>console.log(`sucessfully hosted on port ${port}`))













