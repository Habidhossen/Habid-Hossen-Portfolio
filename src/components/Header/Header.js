import React, { useState } from "react";
import { HiOutlineMenuAlt3, HiX } from "react-icons/hi";
import "./Header.css";

const Header = () => {
  const [open, setOpen] = useState(false);

  const Links = [
    { name: "HOME", link: "/" },
    { name: "SERVICE", link: "/" },
    { name: "ABOUT", link: "/" },
    { name: "BLOG'S", link: "/" },
    { name: "CONTACT", link: "/" },
  ];
  return (
    <nav>
      <div className="md:flex items-center justify-between bg-slate-100 py-5 md:px-16 px-6">
        {/* nav-logo */}
        <div>
          <h1
            className="font-bold text-2xl cursor-pointer flex items-center
      text-gray-800"
          >
            Portfolio
          </h1>
        </div>

        <div
          onClick={() => setOpen(!open)}
          className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden"
        >
          {open ? <HiX /> : <HiOutlineMenuAlt3 />}
        </div>
        <div>
          <ul
            className={`md:flex md:items-center md:pb-0 pb-0 absolute md:static md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-16 transition-all duration-500 ease-in ${
              open ? "top-16 bg-slate-100" : "top-[-490px]"
            }`}
          >
            {Links.map((link) => (
              <li key={link.name} className="md:ml-8 text-md md:my-0 my-7">
                <a
                  href={link.link}
                  className="text-gray-800 hover:text-gray-400 duration-500"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <button className="header-btn">Let's Talk</button>
        </div>
      </div>
      <div></div>
    </nav>
  );
};

export default Header;
