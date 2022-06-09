import React from "react";
import { FaCloudDownloadAlt } from "react-icons/fa";
import profileImg from "../../assets/images/profile-img.jpg";
import "./Banner.css";

const Banner = () => {
  return (
    <section className="h-screen flex">
      <div className="p-28 mx-auto grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
        <div className="flex flex-col justify-center">
          <h5 className="banner-subtitle">Hello, I'm</h5>
          <h1 className="banner-title">Habid Hossen</h1>
          <h5 className="banner-designation">
            A <span className="greenText">Full Stack Developer</span> From{" "}
            <span className="purpleText">Bangladesh</span>
          </h5>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam,
            obcaecati voluptatum eveniet qui ipsa cumque.
          </p>
          <button className="resume-btn">
            <FaCloudDownloadAlt /> Resume
          </button>
        </div>
        <div className="flex justify-center items-center">
          <div className="banner-img-div">
            <img className="banner-img" src={profileImg} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
