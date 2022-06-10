import projectBanner1 from "../../assets/images/projectBanner1.png";
import projectBanner2 from "../../assets/images/projectBanner2.png";
import projectBanner3 from "../../assets/images/projectBanner3.png";
import ProjectCard from "./ProjectCard";

//a warehouse/dealership-based website that stores products and manages products.

const Projects = () => {
  const projectsData = [
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
  ];

  return (
    <section className="min-h-screen px-6 md:px-20 lg:px-28" id="project">
      <h1 className="section-title">
        My <span>Projects</span>
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-5">
        {projectsData.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
