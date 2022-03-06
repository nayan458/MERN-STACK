import React from 'react'
import Crd from './Crd'
import Shoedb from './Shoedb'

const value = Shoedb.map((val)=>{return(
    <>
        <Crd 
            key={val.id}
            srcset={val.srcset}
            src={val.src}
            title={val.title}
            price={val.price}
        />
    </>
)})

const Shoe=()=>{
return(value)
    
}

export default Shoe