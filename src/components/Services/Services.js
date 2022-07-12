import React from "react";
import "../../assets/styles/style.css";

const Services = () => {
  return (
    <section className="min-h-screen px-6 md:px-20 lg:px-28" id="services">
      <h1 className="section-title">
        My <span>Services</span>
      </h1>
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
    </section>
  );
};

export default Services;
