import { useEffect, useState } from "react";
import ProjectCard from "./ProjectCard";

const MobileProjects = () => {
  /* const mobileProjectsData = [
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
    {
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
    },
  ]; */

  const [mobileProjectsData, setMobileProjectData] = useState([]);

  useEffect(() => {
    fetch("mobileProjectsData.json")
      .then((res) => res.json())
      .then((data) => setMobileProjectData(data));
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-5">
      {mobileProjectsData?.map((mobileProject) => (
        <ProjectCard key={mobileProject.id} Project={mobileProject} />
      ))}
    </div>
  );
};

export default MobileProjects;
