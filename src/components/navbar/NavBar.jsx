import { useEffect, useState } from 'react';
import './NavBar.css';
import { FaBars, FaTimes } from 'react-icons/fa';
import logo from '../../assets/logo.jpg';

const NavBar = () => {
const [activeSection, setActiveSection] = useState('#home');
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const sections = document.querySelectorAll('section'); 

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActiveSection(`#${entry.target.id}`); 
          }
        });
      },
      { threshold: 0.6 } 
    );

    sections.forEach(section => observer.observe(section));

    return () => {
      sections.forEach(section => observer.unobserve(section));
    };
  }, []);

  return (
    <div className='navbar'>
      <a href="#home"><img src={logo} alt="Logo" /></a>

      <ul className={`nav-menu ${menuOpen ? 'show' : ''}`}>
        <li><a href="#home" className={`link ${activeSection === '#home' ? 'active' : ''}`}>Home</a></li>
        <li><a href="#about" className={`link ${activeSection === '#about' ? 'active' : ''}`}>About</a></li>
        <li><a href="#skills" className={`link ${activeSection === '#skills' ? 'active' : ''}`}>Skills</a></li>
        <li><a href="#education" className={`link ${activeSection === '#education' ? 'active' : ''}`}>Education</a></li>
        <li><a href="#experience" className={`link ${activeSection === '#experience' ? 'active' : ''}`}>Experiences</a></li>
        <li><a href="#projects" className={`link ${activeSection === '#projects' ? 'active' : ''}`}>Projects</a></li>
        <li><a href="#contact" className={`link ${activeSection === '#contact' ? 'active' : ''}`}>Contact</a></li>
      </ul>
       <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
      </div>
    </div>
  );
};

export default NavBar;
