const sum =(num1,num2)=>{
    return num1+num2;
}
const diff =(num1,num2)=>{
    return num1-num2;
}
const product =(num1,num2)=>{
    return num1*num2;
}
const division =(num1,num2)=>{
    let rslt = num1/num2
    rslt = rslt.toFixed(2)
    return rslt;
}

export default sum;

export {diff,product,division};
