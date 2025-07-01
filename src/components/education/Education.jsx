import './Education.css';

const Education = () => {
  return (
    <section id="education" className="education-section">
      <h1 className="section-title">Education</h1>
      <div className="education-container">

        <div className="education-item">
          <h2>Bachelor of Science in Software Engineering</h2>
          <h4>Woldia University</h4>
          <p className="education-date">2022 - present</p>
          <p>Focused on web development, software design, and system architecture.</p>
        </div>

        <div className="education-item">
          <h2>Frontend Development Certification</h2>
          <h4>Coursera</h4>
          <p className="education-date">2025</p>
          <p>Completed coursework in HTML, CSS, JavaScript,React and Node.js.</p>
        </div>

        <div className="education-item">
          <h2>Backend Development Certification</h2>
          <h4>Coursera</h4>
          <p className="education-date">2025</p>
          <p>Completed coursework in Node.js, express.js and MongoDB.</p>
        </div>

      </div>
    </section>
  );
};

export default Education;
