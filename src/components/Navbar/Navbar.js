import React, { useState } from "react";
import "./Navbar.css";
// import { Link } from "react-router-dom";
import { Link } from "react-scroll";
import { FaHornbill } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import logo from "../../Images/log.jpg";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [click, setClick] = useState(false);

  const toggleHandler = () => {
    setIsOpen(!isOpen);
  };

  // const handleNavbar = () => {
  //   setIsOpen(false);
  // };

  const closeMenu = () => (setClick(false), setIsOpen(false));
  return (
    <nav className="navbar-container mb-12 z-10  bg-neutral relative mx-auto px-2 px-6 sticky top-0 bg-dark">
      <div className="container-onet">
        {/* flex container for Nav Items */}
        <div className="flex items-center justify-between space-x-20 my-2f">
          {/* logo */}

          <div className="logo flex mt-2 px-2 mx-2">
            <img
              src={logo}
              alt="Facebook Logo"
              className="w-1/2w  object-contain    "
            />
            {/* <FaHornbill className="inline pr-2 mt-2 md:mt-3 text-4xl" /> */}
            {/* <h4 className="text-xl mt-3 md:mt-4  font-bold align-middle text-white">
              LG Agency
            </h4> */}
          </div>

          {/* Menu Items */}
          <div className="hidden items-center mt-4 space-x-10 uppercase text-grayisBlue md:flex">
            <Link
              to="/"
              onClick={closeMenu}
              spy={true}
              smooth={true}
              offset={50}
              duration={1300}
              className="tracking-widest hover:text-blue-500  text-sm font-semibold cursor-pointer"
            >
              Home |
            </Link>
            <Link
              to="contact"
              onClick={closeMenu}
              spy={true}
              smooth={true}
              offset={50}
              duration={1300}
              className="tracking-widest hover:text-blue-500  text-sm font-semibold cursor-pointer"
            >
              Contact |
            </Link>

            <Link
              to="about"
              spy={true}
              smooth={true}
              offset={50}
              duration={1300}
              onClick={closeMenu}
              className="tracking-widest hover:text-blue-500 text-sm cursor-pointer font-semibold"
            >
              About |
            </Link>
            {/* <button class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full">
              APPLY NOW
            </button> */}
            <button
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full"
              onClick={() =>
                window.open(
                  "https://calendly.com/kitokessian07/consultation?month=2024-11",
                  "_blank"
                )
              }
            >
              APPLY NOW
            </button>
          </div>
          {/* hamburger Button */}
          <button
            id="menu-btn"
            className={`${
              isOpen ? "open" : "block"
            } z-30  md:hidden  focus:outline-none hamburger mt-3 md:mt-6`}
            onClick={toggleHandler}
          >
            {/* humburger lines */}
            <span className="hamburger-top"></span>
            <span className="hamburger-middle"></span>
            <span className="hamburger-bottom"></span>
          </button>
        </div>
        {/* Mobile Menu */}
        <div
          id="menu"
          className={`${
            isOpen ? "flex" : "hidden"
          } fixed inset-0 z-20 md:hidden flex-col items-center self-end w-full h-full m-h-screen px-6 py-1q pt-24 pb-4 tracking-widest text-white uppercase divide-y divide-gray-500 opacity-90 bg-black`}
        >
          <div className="w-full py-3w text-center">
            <a
              href="#home"
              onClick={closeMenu}
              className="block font-semibold cursor-pointer"
            >
              Home
            </a>
          </div>
          <div className="w-full py-3s text-center">
            <a
              href="#contact"
              onClick={closeMenu}
              className="block font-semibold cursor-pointer"
            >
              Contact
            </a>
          </div>

          <div className="w-full py-3w  text-center">
            <a
              href="#about"
              onClick={closeMenu}
              className="block font-semibold cursor-pointer"
            >
              About
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
