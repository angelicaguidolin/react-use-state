import accordion from "../data/accordion"

export default function Accordion(){
    return(
        <div className="list-acc">
            {accordion.map((accord, id)=>{
                return(
                    <div key={id} className="box-acc">
                    <div className="title">
                        <h3>{accord.title}</h3>
                        <button className="accordion-btn">+</button>
                    </div>
                    <div>{accord.description}</div>
                </div>
                )
            })}
       
        </div>
    )
}