const jwt = required("jsonwebtoken");

const createTken = async()=>{
    const token = await jwt.sign({_id:"6125b3d0832d124468125725"},"usernayanmonibaruahisagoodboyandlovefungfupanda")
    console.log(token);

    const 
}
createTken();