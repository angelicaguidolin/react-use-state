import accordion from "../data/accordion"
import Accordion from "./Accordion"

export default function AccordionList(){
    return(
        <div className="list-acc">
            {accordion.map((accord, id)=>{
                return(
                  <Accordion key={id} title={accord.title} description={accord.description} />
                )
            })}
       
        </div>
    )
}