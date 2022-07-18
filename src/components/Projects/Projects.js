import { useState } from "react";
import { BsArrowRight } from "react-icons/bs";
import MobileProjects from "./MobileProjects";
import WebProjects from "./WebProjects";

const Projects = () => {
  // state declare
  const [webProjectToggle, setWebProjectToggle] = useState(true);
  const [mobileProjectToggle, setMobileProjectToggle] = useState(false);

  // handle web toggle button
  const webToggle = () => {
    setWebProjectToggle(true);
    setMobileProjectToggle(false);
  };
  // handle mobile toggle button
  const mobileToggle = () => {
    setMobileProjectToggle(true);
    setWebProjectToggle(false);
  };

  return (
    <section className="min-h-screen py-8 px-6 md:px-20 lg:px-28" id="project">
      <div className="my-12">
        <h1 className="section-title">
          Recent <span>Projects</span>
        </h1>
        <hr className="heading-underline-a" />
        <hr className="heading-underline-b" />
      </div>

      {/* toggle button */}
      <div className="flex justify-center gap-4 mb-8">
        <button
          className={`project-toggle-btn ${
            webProjectToggle && "project-toggle-btn-active"
          }`}
          onClick={() => webToggle()}
        >
          Web Application
        </button>
        <button
          className={`project-toggle-btn ${
            mobileProjectToggle && "project-toggle-btn-active"
          }`}
          onClick={() => mobileToggle()}
        >
          Mobile Application
        </button>
      </div>

      {/* show web and mobile project via toggle */}
      {webProjectToggle && <WebProjects />}
      {mobileProjectToggle && <MobileProjects />}

      <div className="flex justify-end mt-6">
        <button className="project-footer-btn">
          More Projects <BsArrowRight />
        </button>
      </div>
    </section>
  );
};

export default Projects;
