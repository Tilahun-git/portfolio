import "./Projects.css"
import ProjectData from "../../assets/project_data";
import Card from "../common/Card";

const Services = () => (
  <div className="sec projects-sec">
    <div className="sec-header">
      <h2>My Projects</h2>
      <span className="underline" />
    </div>
    <div className="projects-grid">
      {ProjectData.map((project) => (
        <Card
          key={project.id}
          className="card--project"
          onClick={() => window.open(project.repo, "_blank", "noopener,noreferrer")}
          role="link"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ")
              window.open(project.repo, "_blank", "noopener,noreferrer");
          }}
          aria-label={`Open ${project.name} on GitHub`}
        >
          <h3 className="card-title">{project.name}</h3>
          <p className="card-text">{project.description}</p>
        </Card>
      ))}
    </div>
  </div>
);

export default Services;
