import React from 'react'
import Card from './Card'
import Sdata from './Sdata'

// const ncard=(val)=>{
//     return (
//         <Card 
//             key = {val.id}
//             crd_img = {val.crd_img}
//             crd_title = {val.crd_title}
//             crd_nam = {val.crd_nam}
//             crd_link = {val.crd_link}
//             />
//     )
// }

// function App(){
//     return (<>
//         {Sdata.map(ncard)}
//     </>)
// }

const App = () =>{
    return(<>
        {Sdata.map((val)=>{
           return ( <Card 
            key = {val.id}
            crd_img = {val.crd_img}
            crd_title = {val.crd_title}
            crd_nam = {val.crd_nam}
            crd_link = {val.crd_link}
            />)
        })}
    </>)
}

export default App;