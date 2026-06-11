import "./Education.css";
import { HiAcademicCap, HiBadgeCheck } from "react-icons/hi";

const items = [
  {
    icon: <HiAcademicCap className="edu-icon degree" />,
    title: "BSc in Software Engineering",
    institution: "Woldia University",
    period: "2022 – Present",
    detail: "Focused on web development, software design, algorithms, and system architecture.",
    type: "degree",
  },
  {
    icon: <HiBadgeCheck className="edu-icon cert" />,
    title: "Frontend Development Certification",
    institution: "Coursera",
    period: "2025",
    detail: "HTML, CSS, JavaScript, React, and Next.js.",
    type: "cert",
  },
  {
    icon: <HiBadgeCheck className="edu-icon cert" />,
    title: "Backend Development Certification",
    institution: "Coursera",
    period: "2025",
    detail: "Node.js, Express.js, and MongoDB.",
    type: "cert",
  },
];

const Education = () => (
  <div className="sec education-sec">
    <div className="sec-header">
      <h2>Education</h2>
      <span className="underline" />
    </div>
    <div className="edu-grid">
      {items.map(({ icon, title, institution, period, detail, type }) => (
        <article className={`edu-card edu-card--${type}`} key={title}>
          <div className="edu-card-icon">{icon}</div>
          <div className="edu-card-body">
            <h3 className="edu-title">{title}</h3>
            <p className="edu-institution">{institution}</p>
            <p className="edu-period">{period}</p>
            <p className="edu-detail">{detail}</p>
          </div>
        </article>
      ))}
    </div>
  </div>
);

export default Education;
