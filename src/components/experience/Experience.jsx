import Card from "../common/Card";
import "./Experience.css";

const items = [
  {
    title: "Frontend Developer Intern",
    subtitle: "Ministry of Innovation and Technology",
    meta: "March 2025 – June 2025",
    points: [
      "Developed responsive web pages using React.js and Tailwind CSS.",
      "Collaborated with the backend team to integrate REST APIs.",
      "Participated in daily Agile standups and sprint reviews.",
    ],
  },
  {
    title: "Freelance Web Developer",
    subtitle: "Self-Employed",
    meta: "January 2023 – Present",
    points: [
      "Built personal and client websites using modern web technologies.",
      "Worked closely with clients to meet design and functional requirements.",
      "Deployed projects using GitHub Pages and Netlify.",
    ],
  },
];

const Experience = () => (
  <div className="sec exp-sec">
    <div className="sec-header">
      <h2>Experience</h2>
      <span className="underline" />
    </div>
    <div className="exp-grid">
      {items.map(({ title, subtitle, meta, points }) => (
        <Card key={title}>
          <h3 className="card-title">{title}</h3>
          <p className="card-subtitle">{subtitle}</p>
          <p className="card-meta">{meta}</p>
          <ul className="exp-list">
            {points.map((pt) => (
              <li key={pt}>{pt}</li>
            ))}
          </ul>
        </Card>
      ))}
    </div>
  </div>
);

export default Experience;
