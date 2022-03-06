import React, { useState } from "react";

const App=()=>{
    let red = "red"
    let green = "green"
    const [bg,setBg] = useState(red);

    let name = "Click Me"
    let name1 = "Click"


    const [nam,setNam] = useState(name);

    const bgChanged=()=>{
        setBg(green);
        setNam(name)
        console.log("click");
    }

    const bkNor=()=>{
        setNam(name1)
        setBg(red);
    }


    return(<>
        <div className="cont_00" style={{background : bg}}>
            <button className="btnn" onClick={bgChanged} onDoubleClick={bkNor}>{nam}</button>
        </div>
    </>)
}

export default App;