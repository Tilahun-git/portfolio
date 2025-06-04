import React from 'react';
import './Footer.css'; // Import the CSS styles
import { FaLinkedin, FaGithub, FaTwitter, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Contact Info */}
        <div className="footer-section contact">
          <h3>Contact</h3>
          <p>Email: <a href="mailto:tilahuntareke8@gmail.com">tilahuntareke8@gmail.com</a></p>
          <p>Location: Addis Ababa, Ethiopia</p>
        </div>
        {/* <div className="footer-section links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#blog">Blog</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div> */}
        <div className="footer-section social">
          <h3>Connect</h3>
          <div className="social-icons">
            <a href="https://linkedin.com/in/tilahun" target="_blank" rel="noreferrer"><FaLinkedin /></a>
            <a href="https://github.com/Tilahun-git" target="_blank" rel="noreferrer"><FaGithub /></a>
            <a href="https://twitter.com/yourhandle" target="_blank" rel="noreferrer"><FaTwitter /></a>
            <a href="mailto:tilahuntareke8@gmail.com"><FaEnvelope /></a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Tilahun Tareke. All rights reserved.</p>
        <a href="/privacy">Privacy Policy</a>
      </div>
    </footer>
  );
};

export default Footer;
