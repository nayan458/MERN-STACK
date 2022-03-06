const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const memSchema = new mongoose.Schema({
    name : {
        type : String,
        trim : true,
        minlength : 3
    },
    email: {
        type : String,
        trim: true
    },
    phone : {
        type : Number,
        minlength : 10
    },
    password : {
        type : String,
        minlength: 3
    },
    tokens:[{
        token:{
            type:String,
            require:true
        }
    }]
})

memSchema.methods.gtToken = async function(){
    try {
        const token = await jwt.sign({_id : this._id.toString()}, process.env.SECRET_Key)
        
        // console.log(token)
        this.tokens = this.tokens.concat({token:token})
        await this.save();
        return token;
    } catch (error) {
        console.log(`token error: ${error}`)
    }
}

memSchema.pre("save",async function(next){
    // console.log(`The current password is ${this.password}`);
    if(this.isModified("password")){
            const has_pass = await bcrypt.hash(this.password,12);
            this.password = has_pass;
            // console.log(`updated password is ${this.password}`);
}
    next();
})


const member = new mongoose.model("member",memSchema);

module.exports = member;