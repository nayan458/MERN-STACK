import React, { useState } from "react"

// let count = 0;

const App=()=>{

    const state = useState();
    console.log(state)

    let [count,setCount] = useState(0);

    const IncNum = () =>{
        setCount(count - 1);
    }


    return(<>
        <p className="num">{count}</p>
        <button className="btnn" onClick={IncNum}> Click Me </button>
    </>)
}

export default App