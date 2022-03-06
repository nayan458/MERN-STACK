const mongoose = require("mongoose");
const validator = require("validator");

// mongoose.connect("mongodb://localhost:27017/student",{
//     useCreateIndex : true,
//     useUnifiedTopology: true,
//     useNewUrlParser: true
// })
// .then(()=>console.log("sucessfuli connected to model"))
// .catch((err)=>console.log(`bad model  ${err}`));

const stdSchema = new mongoose.Schema({
    name : {
        type : String,
        minlength : 3,
        require : true
    },
    email : {
        type : String,
        require : true,
        unique : [true,"email id already present"],
        trim : true,
        validate(v){
            if(!validator.isEmail(v)){
                throw new Error ("INVALID EMAIL PLEASE TRY AGAIN");
            }
        }
    },
    phone : {
        type : Number,
        require : true,
        minlength : 10,
        maxlength : 10,
        trim : true
    },
    addr : {
        type : String,
        require : true,
        minlength : true,
        trim : true
    }
})

const student = new mongoose.model("stdDoc",stdSchema);

module.exports = student;

// stdudent1 = new stdDoc({
//     name
// })