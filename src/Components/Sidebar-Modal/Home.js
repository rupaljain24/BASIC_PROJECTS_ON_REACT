import React, { useContext } from 'react'
import './sidebar.css'
import { FaBars } from 'react-icons/fa'
import { AppContext, useGlobalContext } from './Context'

function Home() {
    // const data=useContext(AppContext) // useContext to acces the data
    const {openSidebar,openModal} =useGlobalContext();
    //console.log(data);

    return (
     <main>
         <button className="sidebar-toggle" onClick={openSidebar}>
        <FaBars/>
         </button>
         <button className="btn" onClick={openModal}>Click to display Modal</button>
     </main>
    )
}

export default Home
