import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { BiX } from "react-icons/bi";
import { CgMenuRight } from "react-icons/cg";
import { Link } from "react-scroll";
import "../../assets/styles/style.css";

const Header = () => {
  const [bg, setBg] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  // random color generate for mobile navbar
  /*   const colors = ["bg-[#f75023]", "bg-[#8067f0]", "bg-[#1cbe59]"];
  const randColor = colors[Math.floor(Math.random() * colors.length)]; */

  // navigation
  const navigation = [
    {
      name: "Home",
      href: "home",
    },
    {
      name: "About",
      href: "about",
    },
    {
      name: "Skills",
      href: "skills",
    },
    {
      name: "Projects",
      href: "projects",
    },
    {
      name: "Contact",
      href: "contact",
    },
  ];

  const circleVariants = {
    hidden: {
      scale: 0,
    },
    visible: {
      scale: 180,
      transition: {
        type: "spring",
        stiffness: 160,
        damping: 60,
      },
    },
  };

  const ulVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.1,
      },
    },
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      return window.scrollY > 70 ? setBg(true) : setBg(false);
    });
  });

  return (
    <header
      className={`${
        bg ? "bg-white h-[70px] shadow-sm" : "bg-bgColor h-[70px]"
      } flex items-center fixed top-0 w-full text-black z-20 transition-all duration-300`}
    >
      <div className="w-full mx-auto px-6 md:px-28 lg:px-28 flex items-center justify-between">
        {/* logo */}
        <div>
          <span>
            <Link
              to="home"
              activeClass="active"
              spy="true"
              smooth="true"
              duration={1000}
              className="nav-brand"
            >
              Habid's Portfolio
            </Link>
          </span>
        </div>
        {/* nav */}
        <div className="hidden md:block">
          <nav>
            <ul className="flex space-x-8 nav-items">
              {navigation.map((item, index) => {
                return (
                  <li className="text-black cursor-pointer" key={index}>
                    <Link
                      to={item.href}
                      activeClass="nav-items-active"
                      spy="true"
                      smooth="true"
                      duration={800}
                      offset={-20}
                      className="nav-items"
                    >
                      {item.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
        {/* nav mobile*/}
        <div className="md:hidden">
          {/* <NavMobile /> */}
          <nav className="nav-items">
            <div onClick={() => setIsOpen(true)} className="cursor-pointer">
              {/* <MenuAlt3Icon className="w-8 h-8" /> */}
              <CgMenuRight className="h-6 w-6 text-headingBlack" />
            </div>

            {/* circle */}
            <motion.div
              variants={circleVariants}
              initial="hidden"
              animate={isOpen ? "visible" : "hidden"}
              className={`w-4 h-4 rounded-full bg-green fixed top-0 right-0`}
            ></motion.div>

            <motion.ul
              variants={ulVariants}
              initial="hidden"
              animate={isOpen ? "visible" : ""}
              className={`${
                isOpen ? "right-0" : "-right-full"
              } fixed top-0 bottom-0 w-full flex flex-col justify-center items-center transition-all duration-300 overflow-hidden`}
            >
              <div
                onClick={() => setIsOpen(false)}
                className="cursor-pointer absolute top-8 right-8"
              >
                <BiX className="h-6 w-6 text-headingBlack" />
              </div>
              {navigation.map((item, index) => {
                return (
                  <li key={index} className="mb-8">
                    <Link
                      to={item.href}
                      spy="true"
                      smooth="true"
                      duration={1000}
                      offset={-20}
                      className="nav-items"
                    >
                      {item.name}
                    </Link>
                  </li>
                );
              })}
            </motion.ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
