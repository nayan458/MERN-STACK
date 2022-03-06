import React from "react";

const Todo=(props)=>{

    // const delitem=()=>{
    //     console.log("Deleted")
        // setItem((olditem)=>{
        //     return olditem.filter((arrEle, index)=>{
        //         return index !== id
        //     })
        // })
    // }

    return (<>
            <li 
                key={props.index}
                onClick = {props.delitem}
            >   {props.itemVal}
                 <span>
                <button onClick={()=>{
                    props.onSelect(props.id)
                }}>X</button></span></li>
    </>)
}

export default Todo