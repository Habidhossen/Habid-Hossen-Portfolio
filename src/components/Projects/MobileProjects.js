import { useEffect, useState } from "react";
import Loader from "./Loader";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";

const MobileProjects = () => {
  // state declare for storing fetching data
  const [mobileProjectsData, setMobileProjectData] = useState([]);
  // state declare for storing project detail data (Modal)
  const [showProjectDetail, setShowProjectDetail] = useState({});
  // state declare for loader
  const [loading, setLoading] = useState(false);

  // fetch web project data from JSON file
  useEffect(() => {
    setLoading(true);
    fetch("mobileProjectsData.json")
      .then((res) => res.json())
      .then((data) => {
        setMobileProjectData(data);
        setLoading(false);
      });
  }, []);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-5">
          {mobileProjectsData?.map((mobileProject) => (
            <ProjectCard
              key={mobileProject.id}
              Project={mobileProject}
              setShowProjectDetail={setShowProjectDetail}
            />
          ))}

          {/* show project detail Modal */}
          {setShowProjectDetail && (
            <ProjectModal showProjectDetail={showProjectDetail} />
          )}
        </div>
      )}
    </>
  );
};

export default MobileProjects;
