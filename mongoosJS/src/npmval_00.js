const mongoose = require("mongoose");
const validator = require("validator");



mongoose.connect("mongodb://localhost:27017/nayandata_01",{ useNewUrlParser: true,useUnifiedTopology: true })
.then( ()=> console.log("sucessfully connected"))
.catch( (err)=> console.log(err));

const myScema = new mongoose.Schema({
    name : {
        type : String,
        require : true,
        // unique : true,
        uppercase : true,
        trim : true,
        minlength : [2,"hagura 2 length"],
    },
    ctype : {
        type : String,
        require : true,
        lowercase : true, //this is to make it good
        enum : ["backend","frontend","database"]
    },
    videos: {
        type : Number,
        ///////validate
        // validate(value){
        //     if(value < 0){
        //         throw new Error("you can not use negative value");
        //     }
        // }
    //     validate:{
    //         validator : function(v){
    //         return v.length < 0
    //     },
    //     message: "u can't use a negative value"
    // }
},
    author : String,
    email_id : {
        type : String,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error("Enter Valid email");
            }

        }
    },
    active : Boolean,
    date : {
        type:Date,
        default: Date.now
    }
})

// // Creating collection
const Playlist = new mongoose.model("validation",myScema);

// //  create document or insert
const createDocument = async() =>{

    try {
        const mongoPlaylist = new Playlist({
            name : "        Nayan_0        ",
            ctype : "database",
            videos: 90,
            author: "nayan",
            email_id : "nayan@out",
            active: true,
        })
        // const expressPlaylist = new Playlist({
        //     name : "Express JS",
        //     ctype : "Backend",
        //     videos: 89,
        //     author: "nayan",
        //     active: true,
        // })
        // const reactPlaylist = new Playlist({
        //     name : "React JS",
        //     ctype : "Front End",
        //     videos: 89,
        //     author: "nayan",
        //     active: true,
        // })
        // const nodePlaylist = new Playlist({
        //     name : "node JS",
        //     ctype : "Backend",
        //     videos: 89,
        //     author: "nayan",
        //     active: true,
        // })
    
    const result = await Playlist.insertMany([mongoPlaylist]);
    console.log(result);
        
    } catch (error) {
        console.log(error);
    }
    
}

createDocument();

/*********************************************************************************************************** */
                            // VALIDATION //
/*********************************************************************************************************** */

{/*
///////////String**************
// lowercase    uppercase   trim    match   enum    minlength   maxlength
///////////Number**************
// min          max         enum
///////////Number**************
// min          max

*/}

// Strings//";


// const fs = require("fs");

// const dta = fs.readFileSync("./readData.js","utf-8");
// fs.appendFileSync("Validation.js",dta);


