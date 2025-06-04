import { useEffect } from 'react';
import './NavBar.css';
import logo from '../../assets/logo.jpg';

const NavBar = () => {
  
  return (
    <div className='navbar'>
      <a href="#home"><img src={logo} alt="Logo" /></a>
      
      <ul className="nav-menu">
        <li><a href="#home" className="link">Home</a></li>
        <li><a href="#about" className="link">About Me</a></li>
        <li><a href="#services" className="link">Skills</a></li>
        <li><a href="#services" className="link">My works</a></li>
        <li><a href="#contact" className="link">Contact Me</a></li>

      </ul>
      
      <div className="connect-me">Connect With Me</div>
    </div>
  );
};

export default NavBar;
