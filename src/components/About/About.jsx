import "./About.css";
import profile from "../../assets/profile.png";

const HIGHLIGHTS = [
  { label: "Specialization", value: "Full-Stack Web Development with experience of React, Next.js, Spring Boot, Node.js" },
  { label: "Experience",     value: "2+ years building production web applications" },
  { label: "Industries",     value: "Education, Healthcare, Government, Startups" },
  { label: "Philosophy",     value: "Continous Learning, gratitude, hard working,clean code, intuitive UX, and then solve real business problems" },
];

const About = () => (
  <div className="about sec">
    <div className="sec-header">
      <h2>About Me</h2>
      <span className="underline" />
    </div>

    <div className="about-body">
      <div className="about-left">
        <img src={profile} alt="Tilahun Tareke" loading="lazy" />
      </div>

      <div className="about-right">
        <p className="about-para">
          I'm a Full-Stack Web Developer specialising in modern JavaScript and Java technologies 
          including React, Next.js, Node.js, Spring Boot, and PostgreSQL.
        </p>
        <p className="about-para">
          I help startups, businesses, and entrepreneurs build fast, scalable, and user-friendly
          web applications. My focus is writing clean, maintainable code and creating intuitive
          user experiences that deliver real business value.
        </p>

        <div className="about-highlights">
          {HIGHLIGHTS.map(({ label, value }) => (
            <div className="about-highlight-row" key={label}>
              <span className="about-highlight-label">{label}</span>
              <span className="about-highlight-value">{value}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

export default About;
