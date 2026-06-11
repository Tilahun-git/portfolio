import profile from "../../assets/interactProfile.png";
import "./Hero.css";
import { FaMapMarkerAlt, FaBriefcase, FaRocket } from "react-icons/fa";

const Hero = () => (
  <div className="hero">
    <div className="hero-inner">
      <div className="hero-copy">
        <span className="greeting">Hello, I'm</span>
        <h1>
          <span className="name">Tilahun</span> Tareke
        </h1>
        <p className="hero-title-label">Full-Stack Web Developer and Freelancer</p>
        <p className="hero-value">
          I build modern, scalable web applications that help businesses grow,
          automate workflows, and deliver exceptional user experiences.
        </p>

        <div className="hero-meta">
          <span><FaMapMarkerAlt className="hero-meta-icon" /> Addis Ababa, Ethiopia</span>
          <span><FaBriefcase className="hero-meta-icon" /> Available for Freelance</span>
          <span><FaRocket className="hero-meta-icon" /> 3+ Years Experience</span>
        </div>

        <div className="hero-cta">
          <a href="#contact" className="hero-btn hero-btn--primary">Hire Me</a>
          <a href="#projects" className="hero-btn hero-btn--outline">View Projects</a>
          <a
            href="/Tilahun_Tareke_resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="hero-btn hero-btn--ghost"
          >
            Resume
          </a>
        </div>
      </div>

      <img
        src={profile}
        alt="Tilahun Tareke"
        className="hero-img"
        fetchpriority="high"
      />
    </div>
  </div>
);

export default Hero;
