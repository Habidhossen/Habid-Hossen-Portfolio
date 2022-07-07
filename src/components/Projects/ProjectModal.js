const ProjectModal = () => {
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
          <h3 class="font-bold text-lg">Apparatus Store</h3>
          <p class="py-4">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus
            doloremque, officia non, doloribus facilis eos, architecto nulla
            voluptate libero quibusdam laboriosam a dolorem itaque. Quos aliquam
            repudiandae eveniet aspernatur molestiae?
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
