import {
  FaCloudDownloadAlt,
  FaFacebook,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";
import profileImg from "../../assets/images/profile-img.jpg";
import "../../assets/styles/responsive.css";
import "../../assets/styles/style.css";

const Banner = () => {
  return (
    <section className="min-h-screen flex justify-center px-6 md:px-28 lg:px-28 mt-20 md:mt-0 lg:mt-0">
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
        <div className="flex flex-col justify-center">
          <h5 className="banner-subtitle">Hello, I'm</h5>
          <h1 className="banner-title">Habid Hossen</h1>
          <h5 className="banner-designation">
            A <span className="greenText">Full Stack Developer</span> From{" "}
            <span className="purpleText">Bangladesh</span>
          </h5>
          <p className="banner-text">
            I am a full-stack developer with a vast array of knowledge in many
            different front-end and back-end languages, frameworks, databases,
            and best code practices.
          </p>
          <div className="flex gap-3">
            <a
              href="https://github.com/habidhossen"
              target="_blank"
              rel="noreferrer"
            >
              <p className="icon-bg">
                <FaGithub />
              </p>
            </a>
            <a
              href="https://www.linkedin.com/in/habidhossen"
              target="_blank"
              rel="noreferrer"
            >
              <p className="icon-bg">
                <FaLinkedin />
              </p>
            </a>
            <a
              href="https://facebook.com/habidhossen"
              target="_blank"
              rel="noreferrer"
            >
              <p className="icon-bg">
                <FaFacebook />
              </p>
            </a>
          </div>
          <a
            href="https://drive.google.com/u/0/uc?id=1xrWjLAE-fspgWPeHByiF3LeOsHCbqxbo&export=download"
            className="resume-btn"
            rel="noreferrer"
          >
            <FaCloudDownloadAlt />
            Resume
          </a>
        </div>
        <div className="flex justify-center items-center p-20 md:p-0 lg:p-0">
          <div className="banner-img-div">
            <img className="banner-img" src={profileImg} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
