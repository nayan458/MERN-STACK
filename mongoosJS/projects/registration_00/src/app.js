require("dotenv").config();                                    // process.env (environment variables)
const express = require("express");                 
const path = require("path");
const hbs = require("hbs");
const bcrypt = require("bcryptjs");                            // hashing and compare pasword
const jwt = require("jsonwebtoken");                           // to deal with tokens
const cookieParser = require("cookie-parser");                 // to deal with cookies

require("./db/conn")
const member = require("./module/user");
const auth = require("../src/midleware/auth")                   // middleware function (this was designed to check user authantication to visit "secret page")           

const path_public = path.join(__dirname,"../public")
const path_partials = path.join(__dirname,"../partials")

const port = process.env.PORT || 3000;
const app = express();                                      // CREATING OUR APP

// console.log(process.env.SECRET_Key)

app.set("view engine","hbs");                               // Seting up view engine
hbs.registerPartials(path_partials);                        // hbs to require partials (parts of repeted hbs files)

app.use(express.json());                                    // Look for JSON 
app.use(cookieParser());                                    
app.use(express.urlencoded({extended : false}));            // looks body of hbs file(inputs)
app.use(express.static(path_public));                       // To make require public files such as(css, js, img etc..)

// ///////////THIS IS RENDERING OF PAGES//////////////////
app.get('/',(req,res)=>{
    res.render('index')
})

app.get('/reg',(req,res)=>{
    res.render('reg.hbs')
})

app.get('/login',(req,res)=>{
    res.render('login')
})

app.get('/sec', auth ,(req,res)=>{
    // console.log(req.cookies.jwt)
    res.send('I am a secret')
})

app.get('/logout',auth,async(req,res)=>{
    try {
        res.clearCookie("jwt");

        console.log("logout successfully");

        await req.user.save();      // save change(that is to remove cookies)
        res.render('login');
    } catch (err) {
        res.status(500).send(err);
    }
})

app.get('/logouta',auth,async(req,res)=>{
    try {
        console.log(req.user);

        req.user.tokens = req.user.tokens.filter((currentElem) => {
            return currentElem.token != req.token;
        })

        res.clearCookie("jwt");

        console.log("logout successfully");

        await req.user.save();      // save change(that is to remove cookies)
        res.render('login');
    } catch (err) {
        res.status(500).send(err);
    }
})

app.get('/logoutal',auth,async(req,res)=>{
    try {
        console.log(req.user);

        req.user.tokens = [];

        res.clearCookie("jwt");

        console.log("logout successfully");

        await req.user.save();      // save change(that is to remove cookies)
        res.render('login');
    } catch (err) {
        res.status(500).send(err);
    }
})
//////////////////////// DATABASE PART ///////////////

app.post("/reg",async(req,res)=>{
    try {
        // console.log(req.body.fName);
        // res.send(req.body.fName)
        const mem1 = new member({
            name : req.body.fName,                          //fNmae is the name atribute from hbs file /// req.body is the input by user (get input by user by name attribute)
            email : req.body.email,                         //email is the name atribute from hbs file /// req.body is the input by user (get input by user by name attribute)    
            phone : req.body.phone,                         //phone is the name atribute from hbs file /// req.body is the input by user (get input by user by name attribute)
            password : req.body.pass                        //phone is the name atribute from hbs file /// req.body is the input by user (get input by user by name attribute)
        })
        // console.log(`${req.body.fName}\n${req.body.email}\n${req.body.phone}\n${req.body.pass}`)

        const token = await mem1.gtToken();                 // middleware to generate token
        // console.log(`the token is \n ${token}`);

        res.cookie("jwt",token,{                    
            expires: new Date(Date.now()+3000),
            httpOnly:true
        });

        const result = await mem1.save();                   // To send data and save to data base

        // console.log(result);        
        // res.send(result);       

        res.status(201).render('index');                 ///WHERE TO GO AFTER SUBMIT
    } catch (err) {

        res.status(400).send(err);
    }
})

app.post("/login",async(req,res)=>{
    try{
        const eml = req.body.email;
        const pass = req.body.pass
        // console.log(eml);
        // console.log(pass);
        const userEmail = await member.findOne({email : eml})
        const rslt = await bcrypt.compare(pass,userEmail.password);

        // const ckToken = await userEmail.genToken(userEmail._id);
        // console.log(ckToken);
        const token = await userEmail.gtToken();
        // console.log(`the log in token is ${token}`);

        res.cookie("jwt",token);
        const ok = req.cookies.jwt;
        // console.log(ok)

        // console.log(rslt)
        if(rslt){
            res.render('index')
        }
        else{
            res.end('<script>alert("Invalid Entry") </script>')
        }
    } catch (err) {
        console.log(err);
    }

})

// const createTken = async()=>{
//     const token = await jwt.sign({_id:"6125b3d0832d124468125725"},"usernayanmonibaruahisagoodboyandlovefungfupanda")
//     console.log(token);

//     const userveryfy = jwt.verify(token, "usernayanmonibaruahisagoodboyandlovefungfupanda")
//     console.log(userveryfy);
// }
// createTken();

app.listen(port,()=>console.log(`listening at port ${port}`))


// member.findone() req.body.name bcrypt