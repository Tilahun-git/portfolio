import profile from "../../assets/bbb.AVIF";
import "./Hero.css";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-title">
        <div className="hero-about">
          <p>Hello, I'm</p>
          <h1>
            <span>Tilahun</span>
          </h1>
          <p>Web developer and freelancer</p>
          <a
            href="/Tilahun_Tareke_resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="resume"
          >
            My Resume
          </a>
        </div>
        <img src={profile} alt="Profile" />
      </div>
    </div>
  );
};

export default Hero;
