import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { BiX } from "react-icons/bi";
import { CgMenuRight } from "react-icons/cg";
import "../../assets/styles/style.css";

const Header = () => {
  const [bg, setBg] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  // random color generate for mobile navbar
  const colors = ["bg-[#f75023]", "bg-[#8067f0]", "bg-[#1cbe59]"];
  const randColor = colors[Math.floor(Math.random() * colors.length)];

  // navigation
  const navigation = [
    {
      name: "home",
      href: "#",
    },
    {
      name: "about",
      href: "#about",
    },
    {
      name: "project",
      href: "#project",
    },
    {
      name: "contact",
      href: "#contact",
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
      return window.scrollY > 90 ? setBg(true) : setBg(false);
    });
  });

  return (
    <header
      className={`${
        bg ? "bg-white h-[70px] shadow-sm" : "h-[70px]"
      } flex items-center fixed top-0 w-full text-black z-10 transition-all duration-300`}
    >
      <div className="w-full mx-auto px-6 md:px-28 lg:px-28 flex items-center justify-between">
        {/* logo */}
        <div>
          <a href="#" className="nav-brand">
            Habid's Portfolio
          </a>
        </div>
        {/* nav */}
        <div className="hidden md:block">
          {/* <Nav /> */}
          <nav>
            <ul className="flex space-x-8 capitalize text-[15px]">
              {navigation.map((item, index) => {
                return (
                  <li className="text-black cursor-pointer" key={index}>
                    <a
                      href={item.href}
                      activeClass="active"
                      spy="true"
                      smooth="true"
                      duration={500}
                      offset={-70}
                      className="transition-all duration-300 nav-link"
                    >
                      {item.name}
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
        {/* nav mobile*/}
        <div className="md:hidden">
          {/* <NavMobile /> */}
          <nav className="relative">
            <div onClick={() => setIsOpen(true)} className="cursor-pointer ">
              {/* <MenuAlt3Icon className="w-8 h-8" /> */}
              <CgMenuRight className="h-8 w-8" />
            </div>

            {/* circle */}
            <motion.div
              variants={circleVariants}
              initial="hidden"
              animate={isOpen ? "visible" : "hidden"}
              className={`w-4 h-4 rounded-full ${randColor} fixed top-0 right-0`}
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
                {/* <XIcon className="w-8 h-8" /> */}
                <BiX className="h-8 w-8" />
              </div>
              {navigation.map((item, index) => {
                return (
                  <li key={index} className="mb-8">
                    <a
                      href={item.href}
                      smooth="true"
                      duration={500}
                      offset={-70}
                      className="text-xl cursor-pointer capitalize"
                    >
                      {item.name}
                    </a>
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
