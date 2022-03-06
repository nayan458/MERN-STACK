import React, { useState } from "react";

const App=()=>{
    let [user,setUser]=useState("");
    let [pass,setPass]=useState("");
    let [nam,setNam]=useState("");

    const func_01=(event)=>{
        setNam(event.target.value)
    }
    const func_02=()=>{
        setUser(nam);
    }
    const func_03=(event)=>{
        event.preventDefault()
    }
    const func_10=(event)=>{
        setPass(event.target.value)
    }
    return(<>
    <div className="cont_00">
      <form className="cont_00" onSubmit={func_03}>  
        <h1>Hello {user} {pass}</h1>
        <input
            className="inp"
            placeholder="Enter the name"
            defaultValue=""
            onChange={func_01}
        />
        <input
            className="inp"
            placeholder="Enter the name"
            defaultValue=""
            onChange={func_10}
        />
        <button 
            className="btnn"
            onClick={func_02}
        >Click me</button>
       </form>
    </div>
    </>);
};

export default App;