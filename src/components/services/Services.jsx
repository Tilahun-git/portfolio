import "./Services.css";
import { FaCode, FaServer, FaMobileAlt, FaSearch } from "react-icons/fa";
import { MdDashboard } from "react-icons/md";

const SERVICES = [
  {
    icon: <FaCode className="svc-icon" />,
    title: "Full-Stack Development",
    description:
      "End-to-end web application development from database design and REST APIs to responsive user interfaces.",
    items: ["Custom Web Apps", "SaaS Products", "Admin Dashboards", "REST APIs"],
  },
  {
    icon: <FaMobileAlt className="svc-icon" />,
    title: "Frontend Development",
    description:
      "Responsive, interactive, and accessible user interfaces using React and Next.js.",
    items: ["React / Next.js Apps", "Responsive Design", "UI/UX Implementation", "Performance Optimisation"],
  },
  {
    icon: <FaServer className="svc-icon" />,
    title: "Backend Development",
    description:
      "Robust server-side solutions with Node.js, Spring Boot, and PostgreSQL.",
    items: ["REST API Design", "Database Architecture", "Authentication and Authorization", "Spring Boot Services"],
  },
  {
    icon: <MdDashboard className="svc-icon" />,
    title: "Dashboard and Admin Panels",
    description:
      "Data-rich dashboards and management systems tailored to business workflows.",
    items: ["Analytics Dashboards", "CRUD Interfaces", "Role-Based Access", "Real-Time Data"],
  },
];

const Services = () => (
  <div className="sec services-sec">
    <div className="sec-header">
      <h2>Services</h2>
      <span className="underline" />
      <p className="sec-subhead">What I can build for you</p>
    </div>
    <div className="services-grid">
      {SERVICES.map(({ icon, title, description, items }) => (
        <article className="svc-card" key={title}>
          <div className="svc-card-icon">{icon}</div>
          <h3 className="svc-card-title">{title}</h3>
          <p className="svc-card-desc">{description}</p>
          <ul className="svc-card-list">
            {items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>
      ))}
    </div>
  </div>
);

export default Services;
