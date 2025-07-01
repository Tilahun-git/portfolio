import React from 'react';
import './Footer.css';
import { FaLinkedin, FaGithub, FaTwitter, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3 className="footer-title">Contact</h3>
          <p>Email: <a href="mailto:tilahuntareke8@gmail.com" className="footer-email">tilahuntareke8@gmail.com</a></p>
          <p>Location: Addis Ababa, Ethiopia</p>
        </div>

        <div className="footer-section">
          <h3 className="footer-title">Connect with me</h3>
          <div className="footer-icons">
            <a href="https://linkedin.com/in/tilahun" target="_blank" rel="noreferrer" aria-label="LinkedIn"><FaLinkedin /></a>
            <a href="https://github.com/Tilahun-git" target="_blank" rel="noreferrer" aria-label="GitHub"><FaGithub /></a>
            <a href="mailto:tilahuntareke8@gmail.com" target="_blank" rel="noreferrer" aria-label="Email"><FaEnvelope /></a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Tilahun Tareke. All rights reserved.</p>
        <a href="/privacy" className="footer-link">Privacy Policy</a>
      </div>
    </footer>
  );
};

export default Footer;
