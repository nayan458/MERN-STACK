const mongoose = require("mongoose");


// step --> create database1

mongoose.connect("mongodb://localhost:27017/nayandata_01",{ useNewUrlParser: true,useUnifiedTopology: true })
.then( ()=> console.log("sucessfully connected"))
.catch( (err)=> console.log(err));

/********************************************************************************** */

// step --> 2 create documents (structure)

// schema
// A Mongoose shema defines the structure of the document,
// default values, validatiors, etc.,

const myScema = new mongoose.Schema({
    name : String,
    ctype : String,
    videos: Number,
    author : String,
    active : Boolean,
    date : {
        type:Date,
        default: Date.now
    }
})

// /********************************************************************************** */
// // step --> 3 create collections

// // A Mongooes model is a wrapper on the Mongoose schema.
// // A Mongoose schema defines the structure of the document,
// // default values, validators, etc., whereas a Mongoose model
// // provides an interface to the database for creating, 
// // querying, updating, deleting records, etc.

// // Creating collection
const Playlist = new mongoose.model("Playlist",myScema);

// //  create document or insert
const createDocument = async() =>{

    try {
        const mongoPlaylist = new Playlist({
            name : "MongoDB",
            ctype : "Backend",
            videos: 89,
            author: "nayan",
            active: true,
        })
        const expressPlaylist = new Playlist({
            name : "Express JS",
            ctype : "Backend",
            videos: 89,
            author: "nayan",
            active: true,
        })
        const reactPlaylist = new Playlist({
            name : "React JS",
            ctype : "Front End",
            videos: 89,
            author: "nayan",
            active: true,
        })
        const nodePlaylist = new Playlist({
            name : "node JS",
            ctype : "Backend",
            videos: 89,
            author: "nayan",
            active: true,
        })
    
    const result = await Playlist.insertMany([mongoPlaylist,expressPlaylist,reactPlaylist,nodePlaylist]);
    console.log(result);
        
    } catch (error) {
        console.log(error);
    }
    
}

// createDocument();

const readData = async()=>{
    try {
        const result = await Playlist.find({ctype:"Backend"})
        .select({name: 1})
        .limit(9);
        console.log(result);
    } catch (err) {
        console.log(err)
    }
}

// readData();

/////////Comporision opperator//////////
//  $eq     $gt     $gte    $in     $lt     $lte    $ne     $nin

const ComoparisionOpp = async()=>{
    try {
        // const result = await Playlist.find({ctype:{$eq : "Backend"}})
        const result = await Playlist.find({ctype:{$in : ["Backend","Front End"]}})
        .select({name: 1})
        // .limit(9);
        console.log(result);
    } catch (err) {
        console.log(err)
    }
}

// ComoparisionOpp();

////////////Logiacl Query///////////////////
// $and    $not    $nor    $or 

const logicOpp = async()=>{
    try{
    const result = await Playlist.find({$and : [{ctype:"Backend"},{videos : {$gt : 50}}]})
    .select({name:1})
    console.log(result);
    }catch(err){
        console.log(err);
    }
}

// logicOpp()

///////////Shorting and Count Query method ////////////////////

const sortDoc = async() =>{
    try {
        const result = await Playlist.find()
        .select({name:1})
        // .sort()                 // default sort that is in assending order
        // .sort({name : -1}); // to sort in decending order
        // .countDocuments()
        console.log(result);
        
    } catch (error) {
        console.log(error);
    }
}

// sortDoc();

const countDoc = async()=>{
    try {
        const result = await Playlist
        .find({ctype: "Backend"})
        .select({name : 1})
        .countDocuments();
        console.log(result);

    } catch (error) {
        console.log(error);
    }
}

// countDoc()

const sortDoc_01 = async() =>{
    try {
        const result = await Playlist
        .find()
        .select({name : 1})
        .sort({name : -1});
        console.log(result);
        
    } catch (error) {
        console.log(error);
    }
}

// sortDoc_01()

//////////////////************************************************* */
// update Documet

// update using updateOne();

const update_one = async(_id) =>{
    try {
        const result = await Playlist.updateOne({_id},{
            $set : {
                name : "Node JS",
            }
        })
        console.log(result);
    } catch (err) {
        console.log(err);
    }
}

// // update_one("6104badcd1c7232b10b18209")

const updateDocument = async(_id) =>{
    try {
        const result = await Playlist.findByIdAndUpdate({_id},{
            $set : {
                name : "Node JS"
            }
        },{
            new : true,                 //to get updated data;
            useFindAndModify : false
        })
        console.log(result);
    } catch (err) {
        console.log(err);
    }
}

// updateDocument("6104badcd1c7232b10b18209")
/************ */
// const func1 = async() =>{
//     try {
//         const result = await Playlist
//         .find()
//         .select({name : 1})
//         console.log(result);
//     } catch (err) {
//         console.log(err);
//     }
// }

// func1()
/********************************* */

//////deleting a document///////////////

// const delDoc = async(_id)=>{
//     try {
//         const result = await Playlist.deleteOne({_id})
//         console.log(result)
//     } catch (err) {
//         console.log(err);
//     }
// }

// delDoc("6108025c1825df4db8bc7fcd");

const delDocGet = async(_id)=>{
    try {
        const result = await Playlist.findByIdAndDelete({_id})
        console.log(result);
    } catch (err) {
        console.log(err)
    }
}

// delDocGet("6108025c1825df4db8bc7fcc")


/*********************************************************************************************************** */
                            // VALIDATION //
/*********************************************************************************************************** */



// const fs = require("fs");

// const dta = fs.readFileSync("./readData.js","utf-8");
// fs.appendFileSync("Validation.js",dta);


