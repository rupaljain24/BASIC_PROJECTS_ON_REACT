import React, { useState } from "react";
import data from './data.js'

function Lorem() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState([]);
    const handleFormSubmit=(e)=>{
        e.preventDefault();
        let countno=parseInt(count)// count was string converting the same to the no.
        if(count<=0){
            countno=1
           
        }
        setText(data.slice(0,countno));

    }

  return (
    <section className="section-center">
      <h3>Enter no. of Para</h3>
      <form onSubmit={handleFormSubmit} className="lorem-form">
        <label htmlFor="count">Paragraphs:</label>
        <input type="number" name="count" id="count" value={count}
        onChange={(e)=>{setCount(e.target.value)}} />
        <button type="submit" className="btn">
          Show
        </button>
      </form>
      <article className='lorem-text'>
      {
          text.map((para,index)=>{
              return <p key ={index}>{para}</p>
          })
      }
      </article>
    </section>
  );
}

export default Lorem;
