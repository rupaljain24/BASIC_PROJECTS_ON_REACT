import React ,{ useState} from "react";
// import {AiOutlinesPlus, AiOutlinesMinus} from 'react-icons/ai'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
function QueList(props) {   
    const [showAns, setShowAns] = useState(false)
  return (
    <div>
      <article className="question">
        <header>
          <h4>{props.title} </h4>
          <button className="btn" onClick={()=>setShowAns(!showAns)}>

          { showAns ?  <AiOutlineMinus/> : <AiOutlinePlus/> }
          
         
          
          </button>
        </header>
        {
            showAns?props.info:null
        }
     
      </article>
    </div>
  );
}

export default QueList;
