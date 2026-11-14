import "./Experience.css";

const items = [
  {
    role: "Full-Stack Web Developer",
    type: "Freelance",
    company: "Self-Employed",
    period: "January 2023 – Present",
    desc: "Developed custom web applications for startups, small businesses, and individual clients.",
    achievements: [
      "Built full-stack apps with React, Node.js, and Spring Boot",
      "Delivered 5+ production projects on time and within budget",
      "Worked directly with clients to translate ideas into working products",
      "Deployed applications on Render, Netlify, and GitHub Pages",
    ],
  },
  {
    role: "Backend Developer Intern",
    type: "Paid Internship",
    company: "Dengene Software Solution",
    period: "July 2026 – Nov 2026",
    desc: "Designed and built the Governance Policy Management System — an enterprise backend using microservice and event-driven architecture.",
    achievements: [
      "Architected and implemented microservices with Spring Boot and PostgreSQL",
      "Integrated Apache Kafka as a message broker for inter-service event publishing",
      "Containerised all services using Docker and Docker Compose",
      "Implemented role-based access control and policy approval workflows",
      "Collaborated with the team on API design, code reviews, and sprint planning",
    ],
  },
  {
    role: "FullStack Web Developer Intern",
    type: "Internship",
    company: "Ministry of Innovation and Technology",
    period: "March 2025 – June 2025",
    desc: "Contributed to enterprise-level web application development within an Agile team.",
    achievements: [
      "Built responsive UI components with React.js and Tailwind CSS",
      "Integrated REST APIs developed by the backend team",
      "Participated in daily standups, sprint planning, and code reviews",
      "Improved page load performance by optimising component rendering",
    ],
  },
];

const Experience = () => (
  <div className="sec exp-sec">
    <div className="sec-header">
      <h2>Experience</h2>
      <span className="underline" />
    </div>
    <div className="exp-timeline">
      {items.map(({ role, type, company, period, desc, achievements }) => (
        <article className="exp-item" key={role + company}>
          <div className="exp-item-dot" />
          <div className="exp-item-body">
            <div className="exp-item-header">
              <div>
                <h3 className="exp-role">{role}</h3>
                <p className="exp-company">
                  {company}
                  <span className="exp-type-badge">{type}</span>
                </p>
              </div>
              <span className="exp-period">{period}</span>
            </div>
            <p className="exp-desc">{desc}</p>
            <ul className="exp-achievements">
              {achievements.map((a) => (
                <li key={a}>{a}</li>
              ))}
            </ul>
          </div>
        </article>
      ))}
    </div>
  </div>
);

export default Experience;
