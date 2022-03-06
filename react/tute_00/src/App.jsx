import React from 'react'
import Amazon from './Amazon'
import Netflix from './Netflix'
// import Card from './Card'
// import Sdata from './Sdata'

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

// const App = () =>{
//     return(<>
//         {Sdata.map((val)=>{
//            return ( <Card 
//             key = {val.id}
//             crd_img = {val.crd_img}
//             crd_title = {val.crd_title}
//             crd_nam = {val.crd_nam}
//             crd_link = {val.crd_link}
//             />)
//         })}
//     </>)
// }

// const favName = "Netflx"
// const Func=()=>
//     {
//         if(favName === "Netflix"){
//             return(
//                 <Card
//                     key = {Sdata[0].id}
//                     crd_img = {Sdata[0].crd_img}
//                     crd_title = {Sdata[0].crd_title}
//                     crd_nam = {Sdata[0].crd_nam}
//                     crd_link = {Sdata[0].crd_link}
//                 />
//             )
//         }else{
//             return(
//                 <Card
//                 key = {Sdata[4].id}
//                 crd_img = {Sdata[4].crd_img}
//                 crd_title = {Sdata[4].crd_title}
//                 crd_nam = {Sdata[4].crd_nam}
//                 crd_link = {Sdata[4].crd_link}
//             />)
//         }
//     }

//     const App =()=>{
//         return (
//             <>
//                 <Func />
//             </>
//             )
//     } 

// export default App;

// *********************************************************** ////

const favName = "Netflix"
const Func=()=>
    {
        if(favName === "Netflix"){
            return(<Netflix />)
        }else{
            return(<Amazon/>)
        }
    }

    const App =()=>{
        return (
            <>
                <Func />
                {/* <input id="sarc" value="Netflix" />
                {sarc === "Netflix" ? <Netflix /> : <Amazon />} */}
                {favName==="Netflix" ? <Netflix /> : <Amazon />}
            </>
            )
    } 

    // const sarc = document.getElementById('sarc').value;
    

export default App;