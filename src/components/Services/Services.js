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
  // service items
  const serviceItems = [
    {
      title: "Web Development",
      description:
        "I am a Full Stack Web Developer (MERN) and have quite some experience in it as well.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-10 w-10"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="1"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
      ),
    },
    {
      title: "App Development",
      description:
        "I develop Android applications using Java and learned React Native to create cross-platform mobile applications.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-10 w-10"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="1"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 18h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"
          />
        </svg>
      ),
    },
    {
      title: "Problem Solving",
      description:
        "I love solving problems whether programming problems or real-life problems.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-10 w-10"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="1"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
          />
        </svg>
      ),
    },
  ];

  // skill items
  const skillItems = [
    { icon: html, title: "HTML" },
    { icon: css, title: "CSS" },
    { icon: bootstrap, title: "Bootstrap" },
    { icon: tailwindcss, title: "Tailwind CSS" },
    { icon: materialui, title: "Material UI" },
    { icon: materialui, title: "Ant Design" },
    { icon: javascript, title: "JavaScript" },
    { icon: javascript, title: "TypeScript" },
    { icon: react, title: "React.js" },
    { icon: react, title: "Next.js" },
    { icon: node, title: "Node.js" },
    { icon: css, title: "Express.js" },
    { icon: mongodb, title: "MongoDB" },
    { icon: mysql, title: "MySQL" },
    { icon: mysql, title: "PostgreSQL" },
    { icon: mysql, title: "Prisma" },
    { icon: firebase, title: "Firebase" },
    { icon: cpp, title: "C++" },
    { icon: java, title: "Python" },
    { icon: php, title: "PHP" },
    { icon: git, title: "Git" },
    { icon: npm, title: "NPM" },
    { icon: postman, title: "Postman" },
    { icon: androidstudio, title: "Android Studio" },
    { icon: vscode, title: "VS Code" },
  ];

  return (
    <section className="bg-white py-8 px-6 md:px-20 lg:px-28" id="skills">
      <div className="my-12">
        <h1 className="section-title">
          My <span>Skills</span>
        </h1>
        <hr className="heading-underline-a" />
        <hr className="heading-underline-b" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-x-5 gap-y-12">
        {/* service */}
        {serviceItems.map((service, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <span>{service?.icon}</span>
            <h1 className="service-title">{service?.title}</h1>
            <p className="service-desc">{service?.description}</p>
          </div>
        ))}
      </div>
      <div
        className="mt-10 mb-8"
        data-aos="zoom-in-up"
        data-aos-duration="1000"
      >
        <h1 className="skill-title">Tech I'm Familiar With</h1>
        <hr className="skill-title-underline" />
      </div>
      <div
        className="grid grid-cols-2 md:grid-cols-5 lg:grid-cols-5 gap-x-4 md:gap-x-10 lg:gap-x-10 gap-y-5 mb-14"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        {/* skill items */}
        {skillItems.map((skill, index) => (
          <div key={index} className="skill-item-container">
            <img
              className="skill-item-icon"
              src={skill?.icon}
              alt={skill?.title}
            />
            <p className="skill-item-title">{skill?.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
