import React from "react";
import Sdata from "./Sdata";
import Card from './Card'

const Amazon=()=>
    {
        return (
            <Card 
                key = {Sdata[4].key}
                crd_link = {Sdata[4].crd_link}
                crd_img = {Sdata[4].crd_img}
                crd_nam = {Sdata[4].crd_nam}
                crd_title = {Sdata[4].crd_title}

            />
        )
    }
export default Amazon