import React, { useState } from "react";

const Editor=()=>{
  const [note,setnote] = useState({
    title:"",
    content:" "
  })

  
    return(<>
        <div class="container">
  <div class="row">
    <div class="col">
      
    </div>
    <div class="col">
    <div class="card" style={{width : "18rem"}}>
  <div class="card-body">
  <textarea 
            name="title" 
            id="" 
            cols="30" 
            rows="1" 
            placeholder="TITLE"
            value=""
            onChange={getData}
  ></textarea>
  <textarea 
            name="title" 
            id="" 
            cols="30" 
            rows="5" 
            placeholder="NOTE"
            value=""
            onChange={getData}
  ></textarea>
    <a href="#" class="btn btn-success" onClick={getData}>Add</a>
  </div>
</div>
    </div>
    <div class="col">
      
    </div>
  </div>
</div>
    </>)
}

export default Editor