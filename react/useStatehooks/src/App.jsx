import React, { useState } from "react";
import Todo from './Todo'
const App=()=>{
    
    const [comp, setComp] = useState();
    const [item, setItem] = useState([])

    // const Btnn=()=>{
    //     return(<><span><button>X</button></span></>)
    // }

    const showTodo=(event)=>{
        let value = event.target.value
        
        setComp(`${value}`)
    }

    const addTodo=()=>{
        setItem((olditem)=>{
            return [...olditem,comp];
        })
    }

    const delitem=(id)=>{
        console.log("Deleted")
        setItem((olditem)=>{
            return olditem.filter((arrEle, index)=>{
                return index !== id
            })
        })
    }

    return(<>
        <div className="cont_00">
            <h1>ToDo List</h1>
            <br />
            <h1><input className="inp" defaultValue="" name="inpt" onChange={showTodo}  />
                    <button onClick={addTodo}>+</button></h1>
            <div>
                <ol>
                    {item.map((itemVal,index)=>{
                        return<Todo 
                            key = {index}
                            id = {index}
                            itemVal = {itemVal}
                            onSelect={delitem}
                        />
                    })}
                </ol>
            </div>
        </div>
    </>)
}

export default App 

// export {delitem}