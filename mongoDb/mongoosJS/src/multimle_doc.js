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

createDocument();

// //  create document or insert
// const createDocument = async () => {
//     try {
//         const reactPlaylist = new Playlist(
//             {
//                 name : "Node JS",
//                 ctype : "Backend",
//                 videos: 89,
//                 autor: "thapa",
//                 active: true,
//             }
//             )

//             const result = await reactPlaylist.save();
//             console.log(result);

//     } catch (err) {
//         console.log(err)
//     }
// }

// createDocument();

// /********************************************************************************** */


