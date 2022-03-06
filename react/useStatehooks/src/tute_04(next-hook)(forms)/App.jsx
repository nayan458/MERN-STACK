import React, { useState } from "react";

const App=()=>{
    let [user,setUser]=useState("");
    let [nam,setNam]=useState();

    const func_01=(event)=>{
        setNam(event.target.value)
    }
    const func_02=()=>{
        setUser(nam);
    }
    return(<>
    <div className="cont_00">
        <h1>Hello {user}</h1>
        <input
            className="inp"
            placeholder="Enter the name"
            defaultValue=""
            onChange={func_01}
        />
        <button 
            className="btnn"
            onClick={func_02}
        >Click me</button>
    </div>
    </>);
};

export default App;