import { useEffect, useState } from "react";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";

const WebProjects = () => {
  const [webProjectsData, setWebProjectsData] = useState([]);

  const [showProjectDetail, setShowProjectDetail] = useState({});

  useEffect(() => {
    fetch("webProjectsData.json")
      .then((res) => res.json())
      .then((data) => setWebProjectsData(data));
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-5">
      {webProjectsData?.map((webProject) => (
        <ProjectCard
          key={webProject.id}
          Project={webProject}
          setShowProjectDetail={setShowProjectDetail}
        />
      ))}
      {setShowProjectDetail && (
        <ProjectModal showProjectDetail={showProjectDetail} />
      )}
    </div>
  );
};

export default WebProjects;
