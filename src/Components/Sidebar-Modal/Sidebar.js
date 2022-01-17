import React from "react";
import { FaTimes } from "react-icons/fa";
import { links,social } from "./data";
import "./sidebar.css";
import logo from "./logo.svg";


function Sidebar() {
  return (
    <aside className="sidebar">
    <div className="sidebar-header">
      <img src={logo} alt="logo" className="logo" />
      <button className="close-btn">
        <FaTimes/>
      </button>
    </div>
    <ul className="links">
      {
        links.map((link)=>{
          return(
            <li key={link.id}><a href={link.url}>{link.text}
            {link.icon}</a></li>
          )
        })
      }
    </ul>
    <ul className="social-icons">
    {
      social.map((socio)=>{
        return(
          <li key={socio.id}><a href={socio.url}>{socio.icon}</a></li>
        )
      })
    }

    </ul>
    
    </aside>
  );
}

export default Sidebar;
