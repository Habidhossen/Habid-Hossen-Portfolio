import { useEffect, useState } from "react";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";

const WebProjects = () => {
  // state declare for storing fetching data
  const [webProjectsData, setWebProjectsData] = useState([]);
  // state declare for storing project detail data (Modal)
  const [showProjectDetail, setShowProjectDetail] = useState({});

  // fetch web project data from JSON file
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

      {/* show project detail Modal */}
      {setShowProjectDetail && (
        <ProjectModal showProjectDetail={showProjectDetail} />
      )}
    </div>
  );
};

export default WebProjects;
