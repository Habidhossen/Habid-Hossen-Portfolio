import { useState } from "react";
import { BsArrowRight } from "react-icons/bs";
import projectBanner1 from "../../assets/images/projectBanner1.png";
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

  const webProjectsData = [
    {
      id: 1,
      banner: projectBanner1,
      projectTitle: "Apparatus Store",
      projectDesc:
        "A manufacturer's website where customers can order tools and manages tools.",
      technologies: ["React", "Firebase", "Node", "MongoDB"],
      liveLink: "https://apparatus-store-f3edc.web.app/",
      clientCodeLink: "https://github.com/Habidhossen/Apparatus-Store-Client",
      serverCodeLink: "https://github.com/Habidhossen/Apparatus-Store-Server",
    },
    /* {
      id: 2,
      banner: projectBanner2,
      projectTitle: "CarSpot - Wheels and Deals",
      projectDesc:
        "A warehouse/dealership-based website that stores products and manages products.",
      technologies: ["React", "Firebase", "Node", "MongoDB"],
      liveLink: "https://carspot-wheels-and-deals.web.app/",
      clientCodeLink:
        "https://github.com/Habidhossen/CarSpot-Wheels-and-Deals-Client",
      serverCodeLink:
        "https://github.com/Habidhossen/CarSpot-Wheels-and-Deals-Server",
    },
    {
      id: 3,
      banner: projectBanner3,
      projectTitle: "Travel To Go",
      projectDesc:
        "This website is especially for tourists who want a tour guide for their trip.",
      technologies: ["React", "React Router", "Firebase"],
      liveLink: "https://travel-to-go-6c371.web.app/",
      clientCodeLink: "https://github.com/Habidhossen/Travel-To-Go",
      serverCodeLink: "https://github.com/Habidhossen/Travel-To-Go",
    }, */
  ];
  const mobileProjectsData = [
    {
      id: 10,
      banner: projectBanner1,
      projectTitle: "CGPA Calculator",
      projectDesc:
        "A manufacturer's website where customers can order tools and manages tools.",
      technologies: ["React", "Firebase", "Node", "MongoDB"],
      liveLink: "https://apparatus-store-f3edc.web.app/",
      clientCodeLink: "https://github.com/Habidhossen/Apparatus-Store-Client",
      serverCodeLink: "https://github.com/Habidhossen/Apparatus-Store-Server",
    },
    /*  {
      id: 11,
      banner: projectBanner2,
      projectTitle: "BMI Calculator",
      projectDesc:
        "A warehouse/dealership-based website that stores products and manages products.",
      technologies: ["React", "Firebase", "Node", "MongoDB"],
      liveLink: "https://carspot-wheels-and-deals.web.app/",
      clientCodeLink:
        "https://github.com/Habidhossen/CarSpot-Wheels-and-Deals-Client",
      serverCodeLink:
        "https://github.com/Habidhossen/CarSpot-Wheels-and-Deals-Server",
    }, */
  ];

  return (
    <section className="min-h-screen px-6 md:px-20 lg:px-28" id="project">
      <h1 className="section-title">
        My <span>Projects</span>
      </h1>

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

      {/* mapping data */}
      {/* <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-5">
        {webProjectsData?.map((webProject) => (
          <WebProjectCard key={webProject.id} webProject={webProject} />
        ))}
        {mobileProjectsData?.map((mobileProject) => (
          <MobileProjectCard
            key={mobileProject.id}
            mobileProject={mobileProject}
          />
        ))}
      </div> */}

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
