import React from 'react'
import Card from './Card'
import Sdata from './Sdata'

const ncard=(val)=>{
    return (
        <Card 
            crd_img = {val.crd_img}
            crd_title = {val.crd_title}
            crd_nam = {val.crd_nam}
            crd_link = {val.crd_link}
            />
    )
}

function App(){
    return (<>
        {Sdata.map(ncard)}
    </>)
}

export default App;