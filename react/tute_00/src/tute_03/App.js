import React from 'react'
import Card from './Card'
import Sdata from './Sdata'

function App(){
    return (<>
        <Card 
            crd_img = {Sdata[0].crd_img}
            crd_title = {Sdata[0].crd_title}
            crd_nam = {Sdata[0].crd_nam}
            crd_link = {Sdata[0].crd_link}
            />
        <Card 
            crd_img = {Sdata[1].crd_img}
            crd_title = {Sdata[1].crd_title}
            crd_nam = {Sdata[1].crd_nam}
            crd_link = {Sdata[1].crd_link}
            />
        <Card 
            crd_img = {Sdata[2].crd_img}
            crd_title = {Sdata[2].crd_title}
            crd_nam = {Sdata[2].crd_nam}
            crd_link = {Sdata[2].crd_link}
            />
        <Card 
            crd_img = {Sdata[3].crd_img}
            crd_title = {Sdata[3].crd_title}
            crd_nam = {Sdata[3].crd_nam}
            crd_link = {Sdata[3].crd_link}
            />
        <Card 
            crd_img = {Sdata[4].crd_img}
            crd_title = {Sdata[4].crd_title}
            crd_nam = {Sdata[4].crd_nam}
            crd_link = {Sdata[4].crd_link}
            />
            
    </>)
}

export default App;