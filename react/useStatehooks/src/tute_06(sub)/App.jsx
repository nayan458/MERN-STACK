import React, { useState } from "react";

const App=()=>{
    
    let [fullName,setFullName]=useState({
        fname:'',
        lname:''
    });

    const onSub=(event)=>{
        event.preventDefault()
        alert('sucessfully Submited')
    }

    const inputEvent=(event)=>{

        const value = event.target.value
        const name = event.target.name
        console.log(value)
        console.log(name)

        setFullName((perValue)=>{
            if(name === 'fname'){
                return {
                    fname : value,
                    lname: perValue.lname
                }
            }
            else if(name === 'lname'){
                return{
                    fname: perValue.fname,
                    lname: value
                };
        }
        }
        )
    }
    

    return(<>
        <div className="cont_00">
        <form className="cont_00" onSubmit={onSub}>  
            <h1>Hello {fullName.fname} {fullName.lname}</h1>
            <input
                className="inp"
                placeholder="Enter the fname"
                defaultValue=""
                name='fname'
                value={fullName.fname}
                onChange={inputEvent}
            />
            <input
                className="inp"
                placeholder="Enter the lname"
                defaultValue=""
                name='lname'
                value={fullName.lname}
                onChange={inputEvent}
            />
            <button type="submit" className="btnn">Click</button>
        </form>
        </div>
        </>);
};

export default App;
