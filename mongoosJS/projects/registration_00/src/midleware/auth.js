const jwt = require("jsonwebtoken");
const register = require("../module/user");

const auth = async(req,res,next)=>{
    try {
        const token = req.cookies.jwt;
        // console.log(token);
        const vrfy = jwt.verify(token, process.env.SECRET_Key)

        const user = await register.findOne({_id: vrfy._id});
        console.log(user.name);

        req.token = token;
        req.user = user;

        next();
        
    } catch (error) {
        res.status(401).send(error);
    }
}

module.exports = auth;
