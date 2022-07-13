import React from "react";
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
          <h1>More info about me</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt
            quo voluptas officiis magnam, excepturi cum eaque. Dolore quo
            distinctio voluptatibus quos molestiae, atque praesentium eos.
            Commodi tenetur vitae voluptates necessitatibus!
          </p>
          <h5>City: Chittagong, Bangladesh</h5>
          <h5>Education: B.Sc in Computer Science and Engineering</h5>
          <h5>WhatsApp: +88 01854-092871</h5>
          <h5>Email: habidhossen2@gmail.com</h5>
        </div>
      </div>
    </section>
  );
};

export default About;
