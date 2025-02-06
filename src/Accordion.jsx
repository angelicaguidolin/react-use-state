import accpordion from "../data/accpordion"

export default function Accordion(){
    return(
        <div className="box-acc">
            <div className="title">
                <h3>TITLE</h3>
                <button className="accordion-btn"></button>
            </div>
            <div>contenuto</div>
        </div>
    )
}