import React from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import Hero from './Hero'
import Submenu from './Submenu'
import './stripe.css'


function Home() {
    return (
        <div>
            <Navbar/>
            <Sidebar/>
            <Hero/>
            <Submenu/>

        </div>
    )
}

export default Home
