import { BiLink, BiSearchAlt2 } from "react-icons/bi";

const ProjectModal = ({ showProjectDetail }) => {
  const {
    id,
    banner,
    projectTitle,
    projectDesc,
    technologies,
    features,
    liveLink,
    clientCodeLink,
    serverCodeLink,
  } = showProjectDetail;

  return (
    <div>
      <input type="checkbox" id="project-modal" class="modal-toggle" />
      <div class="modal">
        <div class="modal-box w-11/12 max-w-5xl">
          <label
            for="project-modal"
            class="btn btn-sm btn-circle bg-[#f52225] border-0 absolute right-2 top-2"
          >
            ✕
          </label>

          <div></div>

          <h3 class="font-bold text-lg">{projectTitle}</h3>
          <p class="py-4">{projectDesc}</p>
          <div className="">
            {technologies?.map((tech, index) => (
              <span key={index} className="project-badge">
                {tech}
              </span>
            ))}
          </div>
          <div className="">
            {features?.map((tech, index) => (
              <li key={index} className="">
                {tech}
              </li>
            ))}
          </div>

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
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
