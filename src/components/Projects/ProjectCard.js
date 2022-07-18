import { BiLink, BiSearchAlt2 } from "react-icons/bi";
import "../../assets/styles/style.css";

const ProjectCard = ({ Project, setShowProjectDetail }) => {
  const {
    id,
    banner,
    projectTitle,
    projectDesc,
    technologies,
    liveLink,
    clientCodeLink,
    serverCodeLink,
  } = Project;

  return (
    <div>
      {/* project card */}
      <div className="project-card">
        <img src={banner} alt="" />
        <div className="p-2 mt-3">
          <div className="flex gap-2 justify-center">
            {technologies.map((tech, index) => (
              <span key={index} className="project-badge">
                {tech}
              </span>
            ))}
          </div>
          <h1 className="project-title">{projectTitle}</h1>
          <p className="project-text">{projectDesc}</p>
          <div className="flex justify-between mt-4 mb-2">
            <a
              className="project-btn"
              href={liveLink}
              target="_blank"
              rel="noreferrer"
            >
              <BiSearchAlt2 />
              Live Site
            </a>
            <a
              className="project-btn"
              href={clientCodeLink}
              target="_blank"
              rel="noreferrer"
            >
              <BiLink />
              Github Client
            </a>
            <a
              className="project-btn"
              href={serverCodeLink}
              target="_blank"
              rel="noreferrer"
            >
              <BiLink />
              Github Server
            </a>
          </div>
          <label
            onClick={() => setShowProjectDetail(Project)}
            for="project-modal"
            className="explore-btn mt-3"
          >
            Explore More
          </label>
        </div>
      </div>
      {/* <ProjectModal /> */}
    </div>
  );
};

export default ProjectCard;
