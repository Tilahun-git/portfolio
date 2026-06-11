import "./Projects.css";
import ProjectData from "../../assets/project_data";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { HiCheckCircle } from "react-icons/hi";

const ProjectCard = ({ project }) => (
  <article className="project-card">
    <div className="project-card-header">
      <h3 className="project-card-title">{project.name}</h3>
    </div>

    <p className="project-card-desc">{project.description}</p>

    <div className="project-tech-list">
      {project.tech.map((t) => (
        <span key={t} className="project-tech-badge">{t}</span>
      ))}
    </div>

    <ul className="project-features">
      {project.features.map((f) => (
        <li key={f}>
          <HiCheckCircle className="feature-icon" />
          {f}
        </li>
      ))}
    </ul>

    <div className="project-actions">
      {project.live && (
        <a
          href={project.live}
          target="_blank"
          rel="noopener noreferrer"
          className="project-btn project-btn--primary"
        >
          <FaExternalLinkAlt size={12} /> Live 
        </a>
      )}
      <a
        href={project.github}
        target="_blank"
        rel="noopener noreferrer"
        className="project-btn project-btn--outline"
      >
        <FaGithub size={14} /> GitHub
      </a>
    </div>
  </article>
);

const Projects = () => (
  <div className="sec projects-sec">
    <div className="sec-header">
      <h2>My Projects</h2>
      <span className="underline" />
    </div>
    <div className="projects-grid">
      {ProjectData.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  </div>
);

export default Projects;
