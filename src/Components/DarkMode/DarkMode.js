import React,{useState} from "react";
import './dark.css'

function DarkMode() {
    const [dark, setDarkMode] = useState(true)
    
  return (
    <div className={dark?"dark-mode":"toggle-head"} >
      <label className="switch">
        <input type="checkbox"
        onChange={()=>{setDarkMode(!dark)}} />
        <span className="slider round"></span>
      </label>
      <div className="content" >
      <h1>{dark?"Dark":"Light"}</h1>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus, deleniti.
      </div>
    </div>
  );
}

export default DarkMode;
