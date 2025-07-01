import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNodeJs, FaGithub, FaFigma } from 'react-icons/fa';
import { SiTailwindcss, SiMongodb, SiPostman, SiExpress } from 'react-icons/si';
import theme from "../../assets/theme.jpg";
import './Skills.css';

const Skills = () => {
  return (
    <section id="skills" className="skills-section">
      <div className="skills-title">
              <h1>My Skills</h1>
              <img src={theme} alt="" />
       </div>
      <div className="skills-container">

        <div className="skill-category">
          <h2>Frontend</h2>
          <div className="skills-list">
            <div className="skill-item"><FaHtml5 className="skill-icon html" /> HTML5</div>
            <div className="skill-item"><FaCss3Alt className="skill-icon css" /> CSS3</div>
            <div className="skill-item"><SiTailwindcss className="skill-icon tailwind" /> Tailwind CSS</div>
            <div className="skill-item"><FaJsSquare className="skill-icon js" /> JavaScript</div>
            <div className="skill-item"><FaReact className="skill-icon react" /> React.js</div>
          </div>
        </div>

        <div className="skill-category">
          <h2>Backend</h2>
          <div className="skills-list">
            <div className="skill-item"><FaNodeJs className="skill-icon node" /> Node.js</div>
            <div className="skill-item"><SiExpress className="skill-icon express" /> Express.js</div>
            <div className="skill-item"><SiMongodb className="skill-icon mongo" /> MongoDB</div>
          </div>
        </div>

        <div className="skill-category">
          <h2>Tools and Technologies</h2>
          <div className="skills-list">
            <div className="skill-item"><FaGithub className="skill-icon github" /> Git & GitHub</div>
            <div className="skill-item"><FaFigma className="skill-icon figma" /> Figma</div>
            <div className="skill-item"><SiPostman className="skill-icon postman" /> Postman</div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Skills;
