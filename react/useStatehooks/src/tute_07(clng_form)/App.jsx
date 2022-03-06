import React, { useState } from "react";

const App=()=>{

    const [val,setVal] = useState({
        fname:"",
        lname:"",
        email:""
    })

    const onSub=(event)=>{
        event.preventDefault();
    }
    const in_func=(event)=>{
        // let value = event.target.value
        // let name = event.target.name
        let {value,name} = event.target
      setVal((preVal)=>{
            if(name === "fname"){
            return{fname :value,
            lname :preVal.lname,
            email :preVal.email}
        }
        else if(name === "lname"){
            return{fname :preVal.fname,
            lname :value,
            email :preVal.email}
        }
        else{
            return{fname :preVal.fname,
            lname :preVal.lname,
            email :value}
        }}
    )
        
    }

    return(<>
        <div className="cont_00">
            <form className="cont_00" onSubmit={onSub}>
            <h1>Hello {val.fname} {val.lname}</h1>
            <br />
            <p>{val.email}</p>
                <input  placeholder="First Name" className="inp" type="text" onChange={in_func}
                        defaultValue=""
                        value={val.fname}
                        name='fname'
                ></input>
                <input  placeholder="Last name" className="inp" type="text" onChange={in_func}
                        defaultValue=""
                        value={val.lname}
                        name="lname"
                ></input>
                <input  placeholder="Email" className="inp" type="email" onChange={in_func}
                        defaultValue=""
                        value={val.email}
                        name="email"
                ></input>
                <button className="btnn" type="submit">Click</button>
            </form>
        </div>
    </>)
}

export default App