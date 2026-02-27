import { useState } from 'react';
import DATA from '../../data.json';
export default function SectionsTabs(){
    const [tabSelectedIndex,setTabSelectedIndex] = useState(0)
    function handleSelectTab(index){
        setTabSelectedIndex(index)
    }

    return(
        <div className='tab-box' key={tabSelectedIndex}>
            <ul className="nav nav-underline tabs-header" style={{maxWidth: '960px'}}>
                {[...DATA].map((item,index)=>(
                    <li className="nav-item" key={index}>
                        <a className={"nav-link " + (tabSelectedIndex==index?'active':'') } aria-current="page" onClick={()=>handleSelectTab(index)} href='#'>{item.title}</a>
                    </li>
                ))}
            </ul>
            <div className='line'></div>
            <div className='tab-body slide-left'>
                <h2 className='tab-title'>{DATA[tabSelectedIndex].title}</h2>
                <div className='tab-content ' dangerouslySetInnerHTML={ {__html: DATA[tabSelectedIndex].content}} ></div>
            </div>
        </div>
    )
}