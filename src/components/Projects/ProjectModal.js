const ProjectModal = ({ showProjectDetail }) => {
  console.log("inside modal", showProjectDetail);

  const {
    id,
    banner,
    projectTitle,
    projectDesc,
    technologies,
    liveLink,
    clientCodeLink,
    serverCodeLink,
  } = showProjectDetail;
  console.log(id);
  // const { id } = deletingProduct;

  // console.log(id);

  // console.log(projectTitle);

  return (
    <div>
      <input type="checkbox" id="project-modal" class="modal-toggle" />
      <div class="modal">
        <div class="modal-box">
          <label
            for="project-modal"
            class="btn btn-sm btn-circle bg-[#f52225] border-0 absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 class="font-bold text-lg">{projectTitle}</h3>
          <p class="py-4">{projectDesc}</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
