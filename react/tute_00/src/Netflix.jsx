import React from "react";
import Sdata from "./Sdata";
import Card from "./Card";

const Netflix=()=>{
    return(
        <Card
            key = {Sdata[0]}
            crd_title = {Sdata[0].crd_title}
            crd_nam = {Sdata[0].crd_nam}
            crd_img = {Sdata[0].crd_img}
            crd_link = {Sdata[0].crd_link}
         />
    )
}

export default Netflix