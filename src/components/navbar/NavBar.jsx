import { useEffect, useState } from 'react';
import './NavBar.css';
import { FaBars, FaTimes, FaSun, FaMoon } from 'react-icons/fa';
import logo from '../../assets/logo.jpg';
import { useTheme } from '../../context/ThemeContext';

const NavBar = () => {
  const [activeSection, setActiveSection] = useState('#home');
  const [menuOpen, setMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const sections = document.querySelectorAll('section');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(`#${entry.target.id}`);
          }
        });
      },
      { threshold: 0.4 }
    );

    sections.forEach((s) => observer.observe(s));
    return () => sections.forEach((s) => observer.unobserve(s));
  }, []);

  return (
    <div className="navbar">
      <a href="#home">
        <img src={logo} alt="Logo" className="navbar-logo" />
      </a>

      <ul className={`nav-menu ${menuOpen ? 'show' : ''}`}>
        {[
          ['#home',       'Home'],
          ['#about',      'About'],
          ['#skills',     'Skills'],
          ['#education',  'Education'],
          ['#experience', 'Experience'],
          ['#projects',   'Projects'],
          ['#contact',    'Contact'],
        ].map(([href, label]) => (
          <li key={href}>
            <a
              href={href}
              className={`link ${activeSection === href ? 'active' : ''}`}
              onClick={() => setMenuOpen(false)}
            >
              {label}
            </a>
          </li>
        ))}
      </ul>

      <div className="navbar-right">
        <button
          className="theme-toggle"
          onClick={toggleTheme}
          aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
        >
          {theme === 'dark' ? <FaSun size={17} /> : <FaMoon size={17} />}
        </button>

        <div className="hamburger" onClick={() => setMenuOpen((o) => !o)}>
          {menuOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
