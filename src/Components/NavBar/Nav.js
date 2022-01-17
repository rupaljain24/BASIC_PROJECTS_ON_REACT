import React, { useState, useRef, useEffect } from "react";
import { FaBars, FaLaptopHouse, FaTwitter } from "react-icons/fa";
import { links, social } from "./data";
import logo from "./logo.svg";
import "./nav.css";

function Nav() {
  const [showLinks, setShowLinks] = useState(false)
  const refForDivContainer=useRef(null);
  const refForULlist=useRef(null);
  useEffect(() => {
    const height=refForULlist.current.getBoundingClientRect().height;
    console.log(height);
    if(showLinks){
      refForDivContainer.current.style.height=`${height}px`;
    }
    else{
      refForDivContainer.current.style.height='0px'
    }
    
  }, [showLinks])
  return (
    <nav>
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} alt="logo" />
          <button className="nav-toggle" onClick={()=>setShowLinks(!showLinks)}>
            <FaBars />
          </button>
        </div>
   <div className='link-container show-container' ref={refForDivContainer}>
          <ul className="links" ref={refForULlist}>
            {links.map((link) => {
              return (
                <li key={link.id}>
                  <a href={link.url}>{link.text}</a>
                </li>
              );
            })}
          </ul>
        </div>
        <ul className="social-icons">
          {social.map((icons) => {
            return (
              <li key={icons.id}>
                <a href={icons.url}>{icons.icon}</a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
