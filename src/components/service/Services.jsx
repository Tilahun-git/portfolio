import "./Service.css";
import project_theme from '../../assets/theme.jpg';
import ProjectData from '../../assets/project_data'
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
            <div key={index} className="project-display">
              <h2>{project.name}</h2>
              <p>{project.description}</p>
            </div>
          )
        })}
      </div>
    </div>
  );
};

export default Services;
