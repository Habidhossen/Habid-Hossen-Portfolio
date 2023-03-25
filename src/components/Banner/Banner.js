import "aos/dist/aos.css"; // You can also use <link> for styles
import ParticlesBg from "particles-bg";
import { TiArrowSortedDown } from "react-icons/ti";
import { Link } from "react-scroll";
import profileImg from "../../assets/images/profile-img.jpg";
import "../../assets/styles/style.css";

const Banner = () => {
  return (
    <>
      <ParticlesBg
        type="color"
        num={1}
        bg={{
          position: "absolute",
          zIndex: 10,
        }}
      />
      <section
        className="min-h-screen flex justify-center px-6 md:px-20 lg:px-28 py-28 md:py-0 lg:py-0"
        id="home"
      >
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 z-10">
          {/* order-2 md:order-1 lg:order-1 */}
          <div
            className="flex flex-col justify-center banner-left"
            data-aos="fade-right"
            data-aos-duration="1500"
          >
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
              <Link
                to="about"
                spy="true"
                smooth="true"
                duration={1000}
                offset={-20}
                className="resume-outline-btn"
              >
                More Info
                <TiArrowSortedDown />
              </Link>
            </div>
          </div>
          {/*  order-1 md:order-2 lg:order-2 */}
          <div className="flex justify-center items-center p-10 md:p-0 lg:p-0 banner-right">
            <div
              className="banner-img-div"
              data-aos="fade-left"
              data-aos-duration="1000"
            >
              <img className="banner-img" src={profileImg} alt="" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;
