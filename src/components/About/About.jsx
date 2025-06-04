import "./About.css";
import theme from "../../assets/theme.jpg";
import profile from "../../assets/profile.jpg";


const About = () => {
  return (
    <div className="about">
      <div className="about-title">
        <h1>About Me</h1>
        <img src={theme} alt="" />
      </div>
      <div className="about-sections">
        <div className="about-left">
          <img src={profile} alt="" />
        </div>
        <div className="about-right">
          <div className="about-paragraph">
            <p>
              I am experienced frontend web developer with an experience of over
              two years.As a passionate frontend developer, I specialize in creating
            visually stunning and user-friendly web applications with cgreat creativity and mindsets.
            </p> 
          </div>
          <div className="about-skills">
            <div className="about-skill">
              <p>HTML and CSS </p>
              <hr style={{ width: "50%" }} />
            </div>
            <div className="about-skill">
              <p>REACT JS </p>
              <hr style={{ width: "75%" }} />
            </div>
            <div className="about-skill">
              <p>NEXT JS </p>
              <hr style={{ width: "60%" }} />
            </div>
            <div className="about-skill">
              <p>JS&TS </p> 
              <hr style={{ width: "65%" }} />
            </div>
            <div className="about-skill">
              <p>REACT NATIVE </p>
              <hr style={{ width: "50%" }} />
            </div>
          </div>
        </div>
      </div>
      <div className="about-achievements">
        <div className="about-achievement">
          <h1>2+</h1>
          <p>Years of Experience</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>10+</h1>
          <p>Projects Completed</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>10+</h1>
          <p>Happy Clients </p>
        </div>
      </div>
    </div>
  );
};

export default About;
