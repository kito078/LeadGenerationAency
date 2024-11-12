import React from "react";
import { FaTwitter, FaLinkedin } from "react-icons/fa";
import { BsGithub, BsInstagram } from "react-icons/bs";

function Footer() {
  return (
    <footer className="mt-28">
      <div className="w-full group-hover:w-20 transition-all duration-300">
        <hr className="border-t-2 border-gray-700 my-6" />
      </div>
      <div className="mx-auto w-full max-w-screen-xl">
        <div className="px-4 py-6 md:flex md:items-center md:justify-between">
          <span className="text-sm text-gray-300 sm:text-center md:text-xl font-semibold">
            © 2024{" "}
            <a href="#" className="text-gray-300">
              Lead Generation Agency
            </a>
            . All Rights Reserved.
          </span>
          <div className="flex mt-4 space-x-5 sm:justify-center md:mt-0">
            <a
              href="https://github.com/kito078"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsGithub className="text-xl mr-5 text-gray-400 cursor-pointer hover:text-gray-200" />
            </a>
            <a
              href="https://www.instagram.com/kit.7287/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsInstagram className="text-xl mr-5 text-gray-400 cursor-pointer hover:text-gray-200" />
            </a>
            <a
              href="https://twitter.com/KKessian"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter className="text-xl mr-5 text-gray-400 cursor-pointer hover:text-gray-200" />
            </a>
            <a
              href="https://www.linkedin.com/in/ngqabutho-kito-kessian-269675209/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="text-xl mr-5 text-gray-400 cursor-pointer hover:text-gray-200" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
