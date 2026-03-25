import Card from "../common/Card";
import "./Education.css";

const Education = () => {
  return (
    <section id="education" className="education-section">
      <h1 className="section-title">Education</h1>
      <div className="education-container">

        <Card className="card--education">
          <h2 className="card-title">Bachelor of Science in Software Engineering</h2>
          <h4 className="card-subtitle">Woldia University</h4>
          <p className="card-meta">2022 - present</p>
          <p className="card-text">Focused on web development, software design, and system architecture.</p>
        </Card>

        <Card className="card--education">
          <h2 className="card-title">Frontend Development Certification</h2>
          <h4 className="card-subtitle">Coursera</h4>
          <p className="card-meta">2025</p>
          <p className="card-text">Completed coursework in HTML, CSS, JavaScript, React, and Next.js.</p>
        </Card>

        <Card className="card--education">
          <h2 className="card-title">Backend Development Certification</h2>
          <h4 className="card-subtitle">Coursera</h4>
          <p className="card-meta">2025</p>
          <p className="card-text">Completed coursework in Node.js, Express.js, and MongoDB.</p>
        </Card>

      </div>
    </section>
  );
};

export default Education;
