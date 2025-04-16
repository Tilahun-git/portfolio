import React from 'react'
import './NavBar.css'
import logo from '../../assets/logo.jpg'

const NavBar = () => {
  return (
    <div className='navbar'>
      <img src={logo} alt="" />
      <ul className="nav-menu">
        <li>Home</li>
        <li>About Me</li>
        <li>Services</li>
        {/* <li>Portfolio</li> */}
        <li>Contact Me</li>
       </ul>
       <div className="connect-me">Connect With Me</div>
    </div>
  )
}

export default NavBar
