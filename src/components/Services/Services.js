import React from "react";
import css from "../../assets/icons/css.svg";
import html from "../../assets/icons/html.svg";

import "../../assets/styles/style.css";

const Services = () => {
  return (
    <section className="min-h-screen px-6 md:px-20 lg:px-28" id="services">
      <div className="my-12">
        <h1 className="section-title">
          My <span>Services</span>
        </h1>
        <hr className="heading-underline-a" />
        <hr className="heading-underline-b" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-x-5 gap-y-12">
        {/* service */}
        <div className="flex flex-col items-center text-center">
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-10 w-10"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="1"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
          </span>
          <h1 className="service-title">Web Development</h1>
          <p className="service-desc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
            exercitationem consequuntur est excepturi a obcaecati.
          </p>
        </div>
        {/* service */}
        <div className="flex flex-col items-center text-center">
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-10 w-10"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="1"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
          </span>
          <h1 className="service-title">Web Design</h1>
          <p className="service-desc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
            exercitationem consequuntur est excepturi a obcaecati.
          </p>
        </div>
        {/* service */}
        <div className="flex flex-col items-center text-center">
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-10 w-10"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="1"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
          </span>
          <h1 className="service-title">App Development</h1>
          <p className="service-desc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
            exercitationem consequuntur est excepturi a obcaecati.
          </p>
        </div>
        {/* service */}
        <div className="flex flex-col items-center text-center">
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-10 w-10"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="1"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
          </span>
          <h1 className="service-title">Clean Code</h1>
          <p className="service-desc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
            exercitationem consequuntur est excepturi a obcaecati.
          </p>
        </div>
        {/* service */}
        <div className="flex flex-col items-center text-center">
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-10 w-10"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="1"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
          </span>
          <h1 className="service-title">Fully Responsive</h1>
          <p className="service-desc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
            exercitationem consequuntur est excepturi a obcaecati.
          </p>
        </div>
        {/* service */}
        <div className="flex flex-col items-center text-center">
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-10 w-10"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="1"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
          </span>
          <h1 className="service-title">Problem Solving</h1>
          <p className="service-desc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
            exercitationem consequuntur est excepturi a obcaecati.
          </p>
        </div>
      </div>
      <div>
        <h1 className="skill-title">Tech I'm Familiar With</h1>
        <hr className="skill-title-underline" />
      </div>
      <div className="grid grid-cols-2 md:grid-cols-5 lg:grid-cols-5 gap-x-10 gap-y-5">
        {/* skill item */}
        <div className="skill-item-container">
          <img src={html} alt="" />
          <p className="skill-item-title">HTML</p>
        </div>

        {/* skill item */}
        <div className="skill-item-container">
          <img src={css} alt="" />
          <p className="skill-item-title">CSS</p>
        </div>

        {/* skill item */}
        <div className="skill-item-container">
          <img src={css} alt="" />
          <p className="skill-item-title">Bootstrap</p>
        </div>

        {/* skill item */}
        <div className="skill-item-container">
          <img src={css} alt="" />
          <p className="skill-item-title">Tailwind CSS</p>
        </div>

        {/* skill item */}
        <div className="skill-item-container">
          <img src={html} alt="" />
          <p className="skill-item-title">Material UI</p>
        </div>

        {/* skill item */}
        <div className="skill-item-container">
          <img src={css} alt="" />
          <p className="skill-item-title">JavaScript</p>
        </div>

        {/* skill item */}
        <div className="skill-item-container">
          <img src={css} alt="" />
          <p className="skill-item-title">ES6</p>
        </div>

        {/* skill item */}
        <div className="skill-item-container">
          <img src={css} alt="" />
          <p className="skill-item-title">React.js</p>
        </div>

        {/* skill item */}
        <div className="skill-item-container">
          <img src={html} alt="" />
          <p className="skill-item-title">Node.js</p>
        </div>

        {/* skill item */}
        <div className="skill-item-container">
          <img src={css} alt="" />
          <p className="skill-item-title">Express.js</p>
        </div>

        {/* skill item */}
        <div className="skill-item-container">
          <img src={css} alt="" />
          <p className="skill-item-title">MongoDB</p>
        </div>

        {/* skill item */}
        <div className="skill-item-container">
          <img src={css} alt="" />
          <p className="skill-item-title">Firebase</p>
        </div>

        {/* skill item */}
        <div className="skill-item-container">
          <img src={html} alt="" />
          <p className="skill-item-title">MySQL</p>
        </div>

        {/* skill item */}
        <div className="skill-item-container">
          <img src={css} alt="" />
          <p className="skill-item-title">Git</p>
        </div>

        {/* skill item */}
        <div className="skill-item-container">
          <img src={css} alt="" />
          <p className="skill-item-title">Github</p>
        </div>
      </div>
    </section>
  );
};

export default Services;
