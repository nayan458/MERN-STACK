import React from 'react';

const cssCol = {}

const tim = new Date().toLocaleTimeString;
const grt = () =>{if(tim>12){
    cssCol.color = "Blue";
    return "Good Night";
}
else {
    cssCol.color = 'Red';
    return "Good Morning"
}
}
const greet = grt();

const Greet = () =>{
    return <span style = {cssCol}>{greet}</span>;
}

export default Greet;