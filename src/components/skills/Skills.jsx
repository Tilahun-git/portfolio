import {
  FaHtml5, FaCss3Alt, FaJsSquare, FaReact,
  FaNodeJs, FaGithub, FaFigma,
} from 'react-icons/fa';
import {
  SiTailwindcss, SiMongodb, SiPostman, SiExpress,
  SiNextdotjs, SiPostgresql, SiSpringboot,
} from 'react-icons/si';
import Card from "../common/Card";
import './Skills.css';

const CARDS = [
  {
    title: "Frontend",
    skills: [
      { icon: <FaHtml5 className="si html" />,           label: "HTML5"        },
      { icon: <FaCss3Alt className="si css" />,          label: "CSS3"         },
      { icon: <SiTailwindcss className="si tailwind" />, label: "Tailwind CSS" },
      { icon: <FaJsSquare className="si js" />,          label: "JavaScript"   },
      { icon: <FaReact className="si react" />,          label: "React.js"     },
      { icon: <SiNextdotjs className="si nextjs" />,     label: "Next.js"      },
    ],
  },
  {
    title: "Backend",
    skills: [
      { icon: <FaNodeJs className="si node" />,           label: "Node.js"     },
      { icon: <SiExpress className="si express" />,       label: "Express.js"  },
      { icon: <SiSpringboot className="si springboot" />, label: "Spring Boot" },
    ],
  },
  {
    title: "Databases",
    skills: [
      { icon: <SiMongodb className="si mongo" />,       label: "MongoDB"    },
      { icon: <SiPostgresql className="si postgres" />, label: "PostgreSQL" },
    ],
  },
  {
    title: "Tools",
    skills: [
      { icon: <FaGithub className="si github" />,   label: "Git & GitHub" },
      { icon: <FaFigma className="si figma" />,     label: "Figma"        },
      { icon: <SiPostman className="si postman" />, label: "Postman"      },
    ],
  },
];

const Skills = () => (
  <div className="skills-sec sec">
    <div className="sec-header">
      <h2>My Skills</h2>
      <span className="underline" />
    </div>
    <div className="skills-grid">
      {CARDS.map(({ title, skills }) => (
        <Card key={title}>
          <h3 className="skill-card-title">{title}</h3>
          <div className="skill-list">
            {skills.map(({ icon, label }) => (
              <div className="skill-item" key={label}>
                {icon}
                <span>{label}</span>
              </div>
            ))}
          </div>
        </Card>
      ))}
    </div>
  </div>
);

export default Skills;
