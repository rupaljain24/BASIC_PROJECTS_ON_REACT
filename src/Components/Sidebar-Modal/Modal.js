import React from "react";
import { FaTimes } from "react-icons/fa";
import "./sidebar.css";
import { useGlobalContext } from "./Context";

//jp modal ka dabba hai vo overlay & show modal m z-index change krte hai bas
function Modal() {
  const {modalOpen,closeModal} = useGlobalContext();
  return (
    <div className={`${modalOpen?'modal-overlay show-modal':'modal-overlay'}`}> 
    
      <div className="modal-container">
       <h3>Modal !</h3>
       <button className='close-modal-btn' onClick={closeModal}>
         <FaTimes/>
       </button>
         
      </div>
    </div>
  )
}

export default Modal;
