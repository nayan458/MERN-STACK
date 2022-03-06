const mongoose = require("mongoose");
const validator = require("validator");

const playSchema = new mongoose.Schema({
    name : {
        type : String,
        minlength : 3,
        trim : true,
        lowercase : true
    },
    age : {
        type : Number,
        validate(v){
            if(v<18 || v>70){
                throw new Error ("Invalid age group")
            }
        }},
    country : {
        type : String,
        minlengt : 3,
        lowercase : true,
        trim : true
    },
    rank : {
        type : Number,
        unique : true,
        validate(v){
            if(v<0){
                throw Error("INVALID RANK\nRANK DONT EXIST");
            }
        }
    }
})

const player = new mongoose.model("Player",playSchema);

module.exports = player;