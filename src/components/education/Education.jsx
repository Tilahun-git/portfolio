import Card from "../common/Card";
import "./Education.css";

const items = [
  {
    title: "BSc in Software Engineering",
    subtitle: "Woldia University",
    meta: "2022 – Present",
    text: "Focused on web development, software design, and system architecture.",
  },
  {
    title: "Frontend Development Certification",
    subtitle: "Coursera",
    meta: "2025",
    text: "Completed coursework in HTML, CSS, JavaScript, React, and Next.js.",
  },
  {
    title: "Backend Development Certification",
    subtitle: "Coursera",
    meta: "2025",
    text: "Completed coursework in Node.js, Express.js, and MongoDB.",
  },
];

const Education = () => (
  <div className="sec education-sec">
    <div className="sec-header">
      <h2>Education</h2>
      <span className="underline" />
    </div>
    <div className="edu-grid">
      {items.map(({ title, subtitle, meta, text }) => (
        <Card key={title}>
          <h3 className="card-title">{title}</h3>
          <p className="card-subtitle">{subtitle}</p>
          <p className="card-meta">{meta}</p>
          <p className="card-text">{text}</p>
        </Card>
      ))}
    </div>
  </div>
);

export default Education;
