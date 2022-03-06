import React, { useState } from "react";

const App=()=>{
    // const tim = new Date().toLocaleTimeString()

    useState()

    const [tim,currTim] = useState(new Date().toLocaleTimeString())

    const UpDate=()=>{
        currTim(new Date().toLocaleTimeString());

    }


    return(<>
        <p className="num">{tim}</p>
        <p className="num">{new Date().toLocaleTimeString()}</p>
        <button className="btnn" onClick={UpDate}>Click Me</button>
    </>)
}

export default App;
