import profile from "../../assets/profile.jpg";
import "./Hero.css";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-title">
        <div className="hero-about">
          <p>Hi! I'm</p>
          <h1><span>Tilahun</span></h1>
          <p>Web developer and freelancer</p>
        </div>
        <img src={profile} alt="Profile" />
      </div>
      <div className="hero-action">
        <div className="hero-connect">Connect with Me</div>
        <div className="hero-resume">My resume</div>
      </div>
    </div>
  );
};

export default Hero;
