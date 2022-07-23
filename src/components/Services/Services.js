import React from "react";
import androidstudio from "../../assets/icons/android-studio.svg";
import bootstrap from "../../assets/icons/bootstrap.svg";
import cpp from "../../assets/icons/c++.svg";
import css from "../../assets/icons/css.svg";
import firebase from "../../assets/icons/firebase.svg";
import git from "../../assets/icons/git.svg";
import html from "../../assets/icons/html.svg";
import java from "../../assets/icons/java.svg";
import javascript from "../../assets/icons/javascript.svg";
import materialui from "../../assets/icons/materialui.svg";
import mongodb from "../../assets/icons/mongodb.svg";
import mysql from "../../assets/icons/mysql.svg";
import node from "../../assets/icons/nodejs.svg";
import npm from "../../assets/icons/npm.svg";
import php from "../../assets/icons/php.svg";
import postman from "../../assets/icons/postman.svg";
import react from "../../assets/icons/reactjs.svg";
import tailwindcss from "../../assets/icons/tailwindcss.svg";
import vscode from "../../assets/icons/vscode.svg";

import "../../assets/styles/style.css";

const Services = () => {
  return (
    <section
      className="min-h-screen bg-white py-8 px-6 md:px-20 lg:px-28"
      id="services"
    >
      <div className="my-12">
        <h1 className="section-title">
          My <span>Skills</span>
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
              className="h-10 w-10"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="1"
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
            I am a Full Stack Web Developer (MERN) and have quite some
            experience in it as well.
          </p>
        </div>
        {/* service */}
        <div className="flex flex-col items-center text-center">
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="1"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 18h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"
              />
            </svg>
          </span>
          <h1 className="service-title">App Development</h1>
          <p className="service-desc">
            I develop android applications using Java and learned React Native
            to create cross-platform mobile applications.
          </p>
        </div>
        {/* service */}
        <div className="flex flex-col items-center text-center">
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="1"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
              />
            </svg>
          </span>
          <h1 className="service-title">Problem Solving</h1>
          <p className="service-desc">
            I love solving problems whether programming problems or real life
            problems.
          </p>
        </div>
      </div>
      <div className="mt-10 mb-8">
        <h1 className="skill-title">Tech I'm Familiar With</h1>
        <hr className="skill-title-underline" />
      </div>
      <div className="grid grid-cols-2 md:grid-cols-5 lg:grid-cols-5 gap-x-4 md:gap-x-10 lg:gap-x-10 gap-y-5">
        {/* skill item */}
        <div className="skill-item-container">
          <img className="skill-item-icon" src={html} alt="" />
          <p className="skill-item-title">HTML</p>
        </div>

        {/* skill item */}
        <div className="skill-item-container">
          <img className="skill-item-icon" src={css} alt="" />
          <p className="skill-item-title">CSS</p>
        </div>

        {/* skill item */}
        <div className="skill-item-container">
          <img className="skill-item-icon" src={bootstrap} alt="" />
          <p className="skill-item-title">Bootstrap</p>
        </div>

        {/* skill item */}
        <div className="skill-item-container">
          <img className="skill-item-icon" src={tailwindcss} alt="" />
          <p className="skill-item-title">Tailwind CSS</p>
        </div>

        {/* skill item */}
        <div className="skill-item-container">
          <img className="skill-item-icon" src={materialui} alt="" />
          <p className="skill-item-title">Material UI</p>
        </div>

        {/* skill item */}
        <div className="skill-item-container">
          <img className="skill-item-icon" src={javascript} alt="" />
          <p className="skill-item-title">JavaScript</p>
        </div>

        {/* skill item */}
        <div className="skill-item-container">
          <img className="skill-item-icon" src={react} alt="" />
          <p className="skill-item-title">React.js</p>
        </div>

        {/* skill item */}
        <div className="skill-item-container">
          <img className="skill-item-icon" src={node} alt="" />
          <p className="skill-item-title">Node.js</p>
        </div>

        {/* skill item */}
        <div className="skill-item-container">
          <img className="skill-item-icon" src={css} alt="" />
          <p className="skill-item-title">Express.js</p>
        </div>

        {/* skill item */}
        <div className="skill-item-container">
          <img className="skill-item-icon" src={mongodb} alt="" />
          <p className="skill-item-title">MongoDB</p>
        </div>

        {/* skill item */}
        <div className="skill-item-container">
          <img className="skill-item-icon" src={mysql} alt="" />
          <p className="skill-item-title">MySQL</p>
        </div>

        {/* skill item */}
        <div className="skill-item-container">
          <img className="skill-item-icon" src={firebase} alt="" />
          <p className="skill-item-title">Firebase</p>
        </div>

        {/* skill item */}
        <div className="skill-item-container">
          <img className="skill-item-icon" src={cpp} alt="" />
          <p className="skill-item-title">C++</p>
        </div>

        {/* skill item */}
        <div className="skill-item-container">
          <img className="skill-item-icon" src={java} alt="" />
          <p className="skill-item-title">Java</p>
        </div>

        {/* skill item */}
        <div className="skill-item-container">
          <img className="skill-item-icon" src={php} alt="" />
          <p className="skill-item-title">PHP</p>
        </div>

        {/* skill item */}
        <div className="skill-item-container">
          <img className="skill-item-icon" src={git} alt="" />
          <p className="skill-item-title">Git</p>
        </div>

        {/* skill item */}
        <div className="skill-item-container">
          <img className="skill-item-icon" src={npm} alt="" />
          <p className="skill-item-title">NPM</p>
        </div>

        {/* skill item */}
        <div className="skill-item-container">
          <img className="skill-item-icon" src={postman} alt="" />
          <p className="skill-item-title">Postman</p>
        </div>

        {/* skill item */}
        <div className="skill-item-container">
          <img className="skill-item-icon" src={androidstudio} alt="" />
          <p className="skill-item-title">Android Studio</p>
        </div>

        {/* skill item */}
        <div className="skill-item-container">
          <img className="skill-item-icon" src={vscode} alt="" />
          <p className="skill-item-title">VS Code</p>
        </div>
      </div>
    </section>
  );
};

export default Services;
