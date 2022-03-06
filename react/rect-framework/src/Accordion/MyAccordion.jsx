import React from "react";
import Accordion from "./Accordion";
import Dataq from "./Dataq";


const MyAccordion=()=>{
    return(<>
    <div className="accordion" id="accordionPanelsStayOpenExample">
        {Dataq.map((currelem)=>{
            return(<>
                <Accordion
                    key={currelem.id}
                    question={currelem.question}
                    answer={currelem.answer}
                />
            </>)
        })}
    </div>
    </>)
}

export default MyAccordion