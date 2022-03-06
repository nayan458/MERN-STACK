import React, { useState } from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

const Accordion=(props)=>{

    const [show,setShow]=useState(false);

    return(<>
        
  <div className="accordion-item">
    <h2 className="accordion-header" id="panelsStayOpen-headingOne">
      <button onClick={()=> setShow(!show)} className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
        {props.question}
      </button>
    </h2>
    <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
      <div className="accordion-body">
        {show && <strong>{props.answer}</strong>}
      </div>
    </div>
  </div>

    </>)
}

export default Accordion