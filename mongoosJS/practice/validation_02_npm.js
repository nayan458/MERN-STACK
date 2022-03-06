const mongoose = require("mongoose");
const validator = require("validator");

mongoose.connect("mongodb://localhost:27017/practice",{ useNewUrlParser: true , useUnifiedTopology: true})
.then(()=>console.log("Successfully conected"))
.catch((err)=>console.log(err));

const myScema = mongoose.Schema({
    name :{ 
        type : String,
        lowercase : true,
        trim : true,
        minlength : 6
    },
    subject : 
    {
        type : String,
        uppercase : true,
        enum : ["OA","CFICT","ICP","ENG"]
    },
    marks : {
        type : Number, 
        //ERROR IS THROWN TO CATCH STATEMENT BELOW
        validate(value){
            if(value < 0){
                throw new Error("Marks Cannot be negative");
            }
        }
        // validate:{
        //     validator:function(value){
        //         return value.length < 0
        //     },
        //     message: "Wrong input"
        //     }
    },
    email : {
        type : String,
        require : true,
        // unique : true,
        // validate(val){
        //     if(!validator.isEmail(val)){
        //         throw new Error("Invalid Email Id");
        //     }
        // }
        validate(val){
            if(!validator.isEmail(val)){
                throw new Error("Enter Valid email");
            }

        }
    },
    status :{
        type : String,
        default : null
    },
    date : {
        type : Date,
        default : Date.now
    }
})

const marksheet = new mongoose.model("marksheet",myScema);

const multipleEntry = async() => {
try{    const student2 = new marksheet({
        name : "                    pssccc",
        subject : "cfict",
        marks : 22,
        email : "oko@gmail.com",
        status : "pass"
    })

const result = await marksheet.insertMany([student2]);
console.log(result);
}catch(err) {
    // VERRY VERY IMPORTANT ERROR THROWN ABOVE IS BEEN CATCHED HERE
     console.log(`Hello world ${err}`)
    };   
}

multipleEntry()




