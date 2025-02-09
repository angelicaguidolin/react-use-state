import { useState } from "react"
export default function Accordion({title,description}){
    const [isOpen, setIsOpen] =useState(false)
    const openAccordion=()=>{
        setIsOpen((current)=> !current);
    }
    return(
        <div className="box-acc">
        <div className="title">
            <h3>{title}</h3>
            <button className="accordion-btn" onClick={openAccordion}>+</button>
        </div>
        {isOpen && <div>{description}</div>}
    </div>
    )
}