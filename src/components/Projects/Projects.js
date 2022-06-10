import projectBanner from "../../assets/images/project_banner.png";
import "./Projects.css";

const Projects = () => {
  return (
    <section className="h-screen px-6 md:px-20 lg:px-28">
      <h1 className="section-title">
        My <span>Projects</span>
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-5">
        <div className="project-card">
          <img src={projectBanner} alt="" />
          <div className="p-3">
            <div className="flex gap-2 justify-center">
              <span className="project-badge">React</span>
              <span className="project-badge">Firebase</span>
              <span className="project-badge">Node</span>
              <span className="project-badge">MongoDB</span>
            </div>
            <h1 className="project-title">CarSpot - Wheels and Deals</h1>
            <p className="project-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
              numquam voluptas eveniet beatae doloremque unde nam quasi maiores
              quisquam sapiente.
            </p>
            <div className="flex justify-between mt-3">
              <button className="project-btn">Live site</button>
              <button className="project-btn">Github Client</button>
              <button className="project-btn">Github Server</button>
            </div>
            <button className="explore-btn mt-3">Explore more</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
