import './Experience.css';

const Experience = () => {
  return (
    <section id="experience" className="experience-section">
      <h1 className="section-title">Experience</h1>
      <div className="experience-container">

        <div className="experience-item">
          <h2>Frontend Developer Intern</h2>
          <h4>Ministry of Innovation and Technology</h4>
          <p className="experience-date">March 2025 - June 2025 (Incoming)</p>
          <ul>
            <li>Developed responsive web pages using React.js and Tailwind CSS.</li>
            <li>Collaborated with the backend team to integrate REST APIs.</li>
            <li>Participated in daily Agile standups and sprint reviews.</li>
          </ul>
        </div>

        <div className="experience-item">
          <h2>Freelance Web Developer</h2>
          <h4>Self-Employed</h4>
          <p className="experience-date">January 2023 - Present</p>
          <ul>
            <li>Built personal and client websites using modern web technologies.</li>
            <li>Worked closely with clients to meet design and functional requirements.</li>
            <li>Deployed projects using GitHub Pages and Netlify.</li>
          </ul>
        </div>

      </div>
    </section>
  );
};

export default Experience;
