import React from "react";
import { FaCloudDownloadAlt } from "react-icons/fa";
import profileImg from "../../assets/images/profile-img.jpg";
import "./Banner.css";

const Banner = () => {
  return (
    <section className="h-screen flex">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
        <div className="flex flex-col justify-center">
          <h1 className="banner-subtitle">Hello, I am</h1>
          <h1 className="banner-title">Habid Hossen</h1>
          <p className="banner-designation">Full Stack Web Developer</p>
          <div className="flex">
            <button className="about-btn">Know more</button>
            <button className="resume-btn">
              <FaCloudDownloadAlt /> Resume
            </button>
          </div>
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
