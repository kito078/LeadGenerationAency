import React from "react";
import { AiOutlineCheckCircle } from "react-icons/ai";
import Fb from "../../Images/ma.jpg";

function Facebook() {
  return (
    <div className="seperator grid grid-cols-1 md:grid-cols-2e lg:grid-cols-2 gap-12 p-4">
      <div className="max-w-xl mx-auto  rounded-lg shadow-md p-5">
        <p className="text-lg mb-4">
          We do it using Facebook's (Meta's) ad platform
        </p>
        <h2 className="text-4xl font-bold mb-4 text-centere">
          Facebook's Ad Platform is King
        </h2>
        <p className="text-lg mb-4">Three reasons why:</p>
        <ul className="list-disc pl-5 space-y-2">
          <li className="flex items-center">
            <AiOutlineCheckCircle className="text-green-500 mr-2" size={24} />{" "}
            To reach People who want what you offer
          </li>
          <li className="flex items-center">
            <AiOutlineCheckCircle className="text-green-500 mr-2" size={24} />{" "}
            To achieve better results and obtain quality leads.
          </li>
          <li className="flex items-center">
            <AiOutlineCheckCircle className="text-green-500 mr-2" size={24} />{" "}
            To grow your brand and build customer trust.
          </li>
        </ul>
        <div className="flex items-centerE my-6 justify-centerS md:items-start md:justify-start">
          <button class="bg-red-500 hover:bg-red-700 mb-8  mx-autoS text-xl text-white font-bold py-2 px-4 rounded w-64">
            LEARN MORE
          </button>
        </div>
      </div>
      <div className="flex justify-center">
        <img
          src={Fb}
          alt="Facebook Logo"
          className="w-full  object-contain    "
        />
      </div>
    </div>
  );
}

export default Facebook;
