import Card from "../common/Card";
import "./Experience.css";

const Experience = () => {
  return (
    <section id="experience" className="experience-section">
      <h1 className="section-title">Experience</h1>
      <div className="experience-container">

        <Card className="card--experience">
          <div className="card-body">
            <h2 className="card-title">Frontend Developer Intern</h2>
            <h4 className="card-subtitle">Ministry of Innovation and Technology</h4>
            <p className="card-meta">March 2025 - June 2025 (Incoming)</p>
            <ul className="card-text experience-list">
              <li>Developed responsive web pages using React.js and Tailwind CSS.</li>
              <li>Collaborated with the backend team to integrate REST APIs.</li>
              <li>Participated in daily Agile standups and sprint reviews.</li>
            </ul>
          </div>
        </Card>

        <Card className="card--experience">
          <div className="card-body">
            <h2 className="card-title">Freelance Web Developer</h2>
            <h4 className="card-subtitle">Self-Employed</h4>
            <p className="card-meta">January 2023 - Present</p>
            <ul className="card-text experience-list">
              <li>Built personal and client websites using modern web technologies.</li>
              <li>Worked closely with clients to meet design and functional requirements.</li>
              <li>Deployed projects using GitHub Pages and Netlify.</li>
            </ul>
          </div>
        </Card>

      </div>
    </section>
  );
};

export default Experience;
