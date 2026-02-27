export default function AccordionItem({isSelected,title,content,handleSelectAccordion}){
    return(
        <div className="accordion-item" >
            <div className={"accordion-item-title d-flex justify-content-between" + (isSelected?' selected':'')} onClick={handleSelectAccordion}>
                <h2 style={{margin:"0"}} className="">{title} </h2>
                {(isSelected)?
                <span><i className="fa-solid fa-minus"></i></span>:
                <span><i className="fa-solid fa-plus"></i></span>
                }
            </div>
            <div className={"accordion-item-content " + (isSelected?"show":"") } dangerouslySetInnerHTML={{__html: content}}></div>
        </div>
    )
}