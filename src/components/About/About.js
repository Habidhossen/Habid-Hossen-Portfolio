import React from "react";
import {
  FaCheckCircle,
  FaCloudDownloadAlt,
  FaFacebook,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";
import codingSVG from "../../assets/icons/coding.svg";

const About = () => {
  return (
    <section className="py-8 px-6 md:px-20 lg:px-28" id="about">
      <div className="my-12">
        <h1 className="section-title">
          <span>About</span> Me
        </h1>
        <hr className="heading-underline-a" />
        <hr className="heading-underline-b" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
        <div>
          <img src={codingSVG} alt="" />
        </div>
        <div>
          <div>
            <h1 className="about-title">
              Hey! I'm <span>Habid Hossen</span>
            </h1>
            <p className="about-desc">
              A professional Full Stack Web Developer, Open Source enthusiast,
              and a Computer Science and Engineering student from Chittagong,
              Bangladesh.
            </p>
            <p className="about-desc">
              I have experience in Front-end (HTML, CSS, JavaScript, React.Js),
              Back-end (Node.Js, Express.Js, PHP), Android App (Java), Databases
              (MongoDB, MySQL) and UI/UX designs (Figma). I like to Code,
              Design, Innovate and Experiment. I am an enthusiastic and social
              person who loves taking on new challenges and learning new skills.
            </p>
            <p className="about-bullet">
              <FaCheckCircle className="text-primary" />
              <span>City:</span> Chittagong, Bangladesh
            </p>
            <p className="about-bullet">
              <FaCheckCircle className="text-primary" />
              <span>Education:</span> B.Sc. in CSE
            </p>
            <a href="tel:+8801854092871" className="about-bullet">
              <FaCheckCircle className="text-primary" />
              <span>WhatsApp:</span> +88 01854-092871
            </a>
            <a href="mailto:habidhossen2@gmail.com" className="about-bullet">
              <FaCheckCircle className="text-primary" />
              <span>Email:</span> habidhossen2@gmail.com
            </a>
          </div>

          {/* Buttons Collection Div*/}
          <div className="flex items-center gap-6 mt-6 mb-14">
            {/* Resume-Download Button */}
            <div>
              <a
                href="https://drive.google.com/u/0/uc?id=1xrWjLAE-fspgWPeHByiF3LeOsHCbqxbo&export=download"
                className="resume-outline-btn"
                rel="noreferrer"
              >
                <FaCloudDownloadAlt />
                Resume
              </a>
            </div>
            {/* Social Buttons */}
            <div className="flex items-center gap-3">
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
