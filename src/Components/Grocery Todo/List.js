import React from "react";
import "./grocery.css";
import {FaEdit,FaTrash} from 'react-icons/fa'

function List({ list,removeItem,UpdateItem }) {
  return (
    <div className="grocery-list">
      {list.map((item) => {
        return (
          <article className="grocery-item" key={item.id}>
          <p className="title"> {item.name}</p>
          <div className="btn-container">
          <button className='edit-btn'  onClick={()=>UpdateItem(item.id)} ><FaEdit/></button>
          <button className='delete-btn' onClick={()=>removeItem(item.id)} ><FaTrash/></button>
          </div>
           
          </article>
        );
      })}
    </div>
  );
}

export default List;
