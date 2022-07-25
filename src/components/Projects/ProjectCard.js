import { BiLink, BiSearchAlt2 } from "react-icons/bi";
import { BsArrowRight } from "react-icons/bs";
import { Autoplay, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import "../../assets/styles/style.css";

const ProjectCard = ({ Project, setShowProjectDetail }) => {
  const {
    id,
    banner,
    images,
    projectTitle,
    projectDesc,
    shortDesc,
    technologies,
    liveLink,
    clientCodeLink,
    serverCodeLink,
  } = Project;

  return (
    <div>
      {/* project card */}
      <div className="project-card" data-aos="fade-up" data-aos-duration="2000">
        {/* <img className="project-thumbnail" src={banner} alt="" /> */}

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
            dynamicBullets: true,
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

        <div className="px-3">
          <div className="flex gap-2 justify-center">
            {technologies?.slice(0, 4).map((tech, index) => (
              <span key={index} className="project-badge">
                {tech}
              </span>
            ))}
          </div>
          <h1 className="project-title">{projectTitle}</h1>
          <p className="project-text">{shortDesc}</p>
          <div className="flex justify-between mt-7 gap-2">
            <a
              className="project-btn"
              href={liveLink}
              target="_blank"
              rel="noreferrer"
            >
              <BiSearchAlt2 />
              Live Site
            </a>
            <a
              className="project-btn"
              href={clientCodeLink}
              target="_blank"
              rel="noreferrer"
            >
              <BiLink />
              Github Client
            </a>
            <a
              className="project-btn"
              href={serverCodeLink}
              target="_blank"
              rel="noreferrer"
            >
              <BiLink />
              Github Server
            </a>
          </div>
        </div>
        {/* Project detail Modal Label */}
        <label
          onClick={() => setShowProjectDetail(Project)}
          htmlFor="project-modal"
          className="explore-btn mt-4"
        >
          Explore More <BsArrowRight />
        </label>
      </div>
    </div>
  );
};

export default ProjectCard;
