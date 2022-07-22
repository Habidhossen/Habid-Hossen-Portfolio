import { BiLink, BiSearchAlt2 } from "react-icons/bi";
import "../../assets/styles/style.css";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import { Autoplay, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";

const ProjectModal = ({ showProjectDetail }) => {
  const {
    id,
    banner,
    images,
    projectTitle,
    projectDesc,
    technologies,
    features,
    liveLink,
    clientCodeLink,
    serverCodeLink,
  } = showProjectDetail;

  return (
    <div>
      <input type="checkbox" id="project-modal" class="modal-toggle" />
      <div class="modal">
        <div class="modal-box w-11/12 max-w-full">
          <label
            for="project-modal"
            class="btn btn-sm btn-circle bg-[#f52225] border-0 absolute right-2 top-2"
          >
            ✕
          </label>
          {/* modal title */}
          <h3 class="font-bold text-lg mb-6">{projectTitle}</h3>

          {/* modal container */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
            {/* right div */}
            <div>
              <Swiper
                spaceBetween={30}
                effect={"fade"}
                loop={true}
                centeredSlides={true}
                autoplay={{
                  delay: 2000,
                  disableOnInteraction: false,
                }}
                pagination={{
                  clickable: true,
                }}
                modules={[Autoplay, Pagination]}
                className="mySwiper"
              >
                {images?.map((img, index) => (
                  <SwiperSlide key={index}>
                    <img src={img} alt="" />
                  </SwiperSlide>
                ))}
              </Swiper>

              <div className="flex justify-between mt-2 mb-4 gap-2">
                <a
                  className="modal-project-btn"
                  href={liveLink}
                  target="_blank"
                  rel="noreferrer"
                >
                  <BiSearchAlt2 />
                  Live Site
                </a>
                <a
                  className="modal-project-btn"
                  href={clientCodeLink}
                  target="_blank"
                  rel="noreferrer"
                >
                  <BiLink />
                  Github Client
                </a>
                <a
                  className="modal-project-btn"
                  href={serverCodeLink}
                  target="_blank"
                  rel="noreferrer"
                >
                  <BiLink />
                  Github Server
                </a>
              </div>
              <div>
                <h3 className="features-title">Technologies Used:</h3>
                <div className="flex flex-wrap gap-1">
                  {technologies?.map((tech, index) => (
                    <span key={index} className="modal-project-badge">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* left div */}
            <div>
              <div className="mb-4">
                <h3 className="features-title">Description:</h3>
                <p className="project-desc">{projectDesc}</p>
              </div>
              <div>
                <h3 className="features-title">Features:</h3>
                {features?.map((feature, index) => (
                  <ul>
                    <li key={index} className="features-bullet">
                      {feature}
                    </li>
                  </ul>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
