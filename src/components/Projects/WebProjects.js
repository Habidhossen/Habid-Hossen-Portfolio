import { useEffect, useState } from "react";
import ProjectCard from "./ProjectCard";

const WebProjects = () => {
  /* const webProjectsData = [
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
    {
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
    },
  ]; */

  const [webProjectsData, setWebProjectsData] = useState([]);

  useEffect(() => {
    fetch("webProjectsData.json")
      .then((res) => res.json())
      .then((data) => setWebProjectsData(data));
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-5">
      {webProjectsData?.map((webProject) => (
        <ProjectCard key={webProject.id} Project={webProject} />
      ))}
    </div>
  );
};

export default WebProjects;
