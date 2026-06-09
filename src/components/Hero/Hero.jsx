import profile from "../../assets/profile2.jpg";
import "./Hero.css";

const Hero = () => (
  <div className="hero">
    <div className="hero-inner">
      <div className="hero-copy">
        <span className="greeting">Hello, I'm</span>
        <h1>
          <span className="name">Tilahun</span> Tareke
        </h1>
        <p className="tagline">Full-Stack Web Developer and Freelancer</p>
        <a
          href="/Tilahun_Tareke_resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="resume-btn"
        >
          View Resume
        </a>
      </div>
      <img src={profile} alt="Tilahun Tareke" className="hero-img" />
    </div>
  </div>
);

export default Hero;
