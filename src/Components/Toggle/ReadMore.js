import React from 'react'
import { useState } from 'react';

function ReadMore() {
    const [readMore, setreadMore] = useState(false)
    const [info,setInfo]= useState('Lorem, ipsum dolor sit amet consectetur adipisicing elit. czd fdsf hfuhuh iiuhdkjn ueijfk')
    return (
        <div>
        {readMore?info:`${info.substring(0,20)}...`}
        <button onClick={()=>{setreadMore(!readMore)}}>{readMore?'show less':'Read More'}</button>
            
        </div>
    )
}
//read more true means ki already data hai toh show less
//on click pr toggle ho rha hai true false 

export default ReadMore
