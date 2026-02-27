import { useState } from 'react';
import DATA from '../../data.json';
import AccordionItem from './AccordionItem';

export default function SectionsAccordion(){
    const [accordionSelectedIndex,setAccordionSelectedIndex] = useState(0)

    function handleSelectAccordion(index){
        console.log
        if (index==accordionSelectedIndex){
            setAccordionSelectedIndex(null)
        }else{
            setAccordionSelectedIndex(index)
        }
    }
    return(
        <>
            <div className='accordion w-100'>
                {[...DATA].map((item,index)=>(
                    <AccordionItem key={index} isSelected={index ==accordionSelectedIndex} title={item.title} content={item.content} handleSelectAccordion={()=>handleSelectAccordion(index)} />
                ))}
            </div>
        </>
    )
}