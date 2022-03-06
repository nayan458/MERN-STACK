import React, { useState } from "react";

const App=()=>{
    let tim = new Date().toLocaleTimeString()

    useState()

    const [currTim,setTim] = useState(tim)

    const updateTime=()=>{
        let time = new Date().toLocaleTimeString();
        setTim(time);
    }

    setInterval(() => {
        updateTime();
    }, 1000);



    return(<>
        <p className="num">{currTim}</p>       
    </>)
}

export default App;
