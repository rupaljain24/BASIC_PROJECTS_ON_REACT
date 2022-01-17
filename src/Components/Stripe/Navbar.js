import React from 'react'
import './stripe.css'
import logo from './images/logo.svg'
import { FaBars } from 'react-icons/fa'
import { useGlobalContext } from './Context'

const Navbar = () => {
  const name=useGlobalContext()
  console.log(name)
  return <h2>navbar component</h2>
}

export default Navbar
