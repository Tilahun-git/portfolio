import "./Service.css";
import project_theme from '../../assets/theme.jpg';
import ProjectData from '../../assets/project_data'
import Card from "../common/Card";
const Services = () => {
  return (
    <div className="projects-container">
      <div className="projects-title">
        <h1>My projects</h1>
        <img
          src={project_theme}
          alt="Image Not found"
          className=""
        />
      </div>
      <div className="projects-list">
        {ProjectData.map((project, index) => {
          return (
            <Card
              key={index}
              className="card--project"
              onClick={() => window.open(project.repo, '_blank', 'noopener,noreferrer')}
              style={{
                cursor: 'pointer',
                ["--bg"]: `url(${project.image})`
              }}
            >
              <h2 className="card-title">{project.name}</h2>
              <p className="card-text">{project.description}</p>
            </Card>
          )
        })}
      </div>
    </div>
  );
};

export default Services;
