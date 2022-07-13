import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import codingSVG from "../../assets/icons/coding.svg";

const About = () => {
  return (
    <section className="min-h-screen px-6 md:px-20 lg:px-28" id="about">
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
          <h1 className="about-title">More info about me</h1>
          <p className="about-desc">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt
            quo voluptas officiis magnam, excepturi cum eaque. Dolore quo
            distinctio voluptatibus quos molestiae, atque praesentium eos.
            Commodi tenetur vitae voluptates necessitatibus!
          </p>
          <p className="about-bullet">
            <FaCheckCircle className="text-primary" />
            <span>City:</span> Chattogram, Bangladesh
          </p>
          <p className="about-bullet">
            <FaCheckCircle className="text-primary" />
            <span>Education:</span> B.Sc. in Computer Science and Engineering
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
      </div>
    </section>
  );
};

export default About;
