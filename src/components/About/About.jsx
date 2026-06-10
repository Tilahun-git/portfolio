import "./About.css";
import profile from "../../assets/profile.png";

const About = () => (
  <div className="about sec">
    <div className="sec-header">
      <h2>About Me</h2>
      <span className="underline" />
    </div>

    <div className="about-body">
      <div className="about-left">
        <img src={profile} alt="Tilahun Tareke" />
      </div>
      <div className="about-right">
        <p className="about-para">
          I am an experienced full-stack web developer with over two years of hands-on
          experience. I specialise in building visually polished, performant, and
          user-friendly web applications with combining creativity with solid technical depth.
        </p>
        <div className="about-bars">
          {[
            { label: "HTML",       pct: 95 },
            { label: "CSS",        pct: 80 },
            { label: "JavaScript", pct: 94 },
            { label: "Java",       pct: 90 },
            { label: "TypeScript", pct: 91 },
          ].map(({ label, pct }) => (
            <div className="bar-row" key={label}>
              <span className="bar-label">{label}</span>
              <div className="bar-track">
                <div className="bar-fill" style={{ width: `${pct}%` }} />
              </div>
              <span className="bar-pct">{pct}%</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

export default About;
