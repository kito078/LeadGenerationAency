import React, { useState } from "react";
import { FaTwitter, FaLinkedin } from "react-icons/fa";
import { FaStar } from "react-icons/fa6";
import { FaCheckCircle } from "react-icons/fa";

import { BsGithub, BsInstagram } from "react-icons/bs";
// import Follow from "../follow/Follow";
// import Man from "../../images/man.jpg";
//import Typical from "react-typical";
import { Link } from "react-scroll";

function Shocase() {
  const [click, setClick] = useState(false);

  const closeMenu = () => setClick(false);

  //const steps = ["Ngqabutho", 1000, "Ngqabutho Kito Ndlovu!", 500];
  return (
    <div
      className="  lg:mb-40 mx-4 md:mx-7 flex flex-col lg:flex-col  items-center justify-center md:items-start xl:justify-start text-center md:text-start"
      id="home"
    >
      <div className="flex items-center justify-center md:items-center md:justify-start">
        <div className="flex mx-auto ">
          <FaStar className="text-yellow-500" />
          <FaStar className="text-yellow-500" />
          <FaStar className="text-yellow-500" />
          <FaStar className="text-yellow-500" />
          <FaStar className="text-yellow-500" />
        </div>
      </div>

      <h2 className="text-2xl md:text-xl font-bold text-gray-300 mb-3 md:my-6">
        4.9/5 out of 100+ reviews
      </h2>
      <h3 className="text-3xl md:text-4xl lg:text-6xl font-bold text-gray-300 mb-3 md:my-6">
        We help Construction Businesses get more customers and double their
        sales without wasting time or money on ads that don’t deliver results.
      </h3>
      <p className="text-gray-300 text-lg lg:text-2xl font-normal mb-8 mr-3">
        Getting started with us is free, so you have nothing to lose. You only
        pay once you start gaining customers or when your sales have doubled
      </p>
      {/* <p className="text-gray-400 text-lg lg:text-2xl font-normal mb-8 mr-3">
        We build those same systems inside your business, and if it doesn't work
        to get you customers , you get a refund
      </p> */}
      <div className="flex items-center justify-center md:items-start md:justify-start">
        <button class="bg-red-500 hover:bg-red-700 mb-8  mx-auto text-xl text-white font-bold py-2 px-4 rounded w-64">
          APPLY NOW
        </button>
      </div>

      <div className="flex flex-col md:flex-row text-center gap-2 md:gap-12">
        <div className="flex items-center mx-auto mb-3 md:my-6">
          <FaCheckCircle className="text-green-500 mr-2 h-6 w-6" />{" "}
          {/* Adjust size and color here */}
          <h2 className="text-xl md:text-xl font-bold text-gray-300">
            Over 100 Happy Clients
          </h2>
        </div>
        <div className="flex items-center mx-auto mb-3 md:my-6 ">
          <FaCheckCircle className="text-green-500 mr-2 h-6 w-6" />{" "}
          {/* Adjust size and color here */}
          <h2 className="text-xl md:text-xl font-bold text-gray-300">
            30 Days Risk-Free
          </h2>
        </div>
      </div>
    </div>
  );
}

export default Shocase;