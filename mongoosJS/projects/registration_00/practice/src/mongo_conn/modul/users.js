const mongoose = require("mongoose");

const flip_user_schema = {
    name : {
        type : String,
        trim : true,
        minlength : 3
    },
    email : {
        type : String,
        trim : true
    },
    phone : {
        type : Number,
        trim : true
    },
    password : {
        type : String,
        minlength : 3
    },
    tokens : [
        {
            token : {
                type : String,
                require : true
            }
        }
    ]
}

const flip_schema = new mongoose.Schema(flip_user_schema);

const flip_user = new mongoose.model("flip_user",flip_schema) 

module.exports = flip_user