import React from "react";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer>
      <p className="mb-2 text-sm">
        Copyright &#169; {year} <span>Habid Hossen.</span> All Rights Reserved
      </p>
      <div className="flex gap-3">
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
    </footer>
  );
};

export default Footer;
