import React from "react";
import "./Trusted.css";
import Gof from "../../Images/gof.png";
import Lanline from "../../Images/lanline.png";
import Bg from "../../Images/bg.png";
import Dc from "../../Images/dc.png";

function Trusted() {
  return (
    <div className="seperator mb-6">
      <h3 className="text-3xl mx-4 md:mx-7 my-16 md:text-4xl  text-center font-extrabold text-gray-300 mb-3 lg:my-6">
        Businesses that have{" "}
        <span className="text-red-700">trusted Our strategies. </span>
      </h3>
      <div>
        {/* <div className="flex justify-center mt-20">
          <img
            src="./images/ts.png"
            alt="Description"
            className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 object-contain"
          />
          <img
            src="./images/ts.png"
            alt="Description"
            className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 object-contain"
          />
          <img
            src="./images/ts.png"
            alt="Description"
            className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 object-contain"
          />
          <img
            src="./images/ts.png"
            alt="Description"
            className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 object-contain"
          />
        </div> */}
        {/* <div className="trusted flex flex-wrap justify-center mt-20 gap-4">
          <img
            src={Gof}
            alt="Description"
            className="w-fullr fw-1/2 fmd:w-1/3 flg:w-1/5 fxl:w-1/6 object-contain"
          />
          <img
            src={Lanline}
            alt="Description"
            className="w-fulls w-1/2 md:w-1/5 lg:w-1/5 xl:w-1/6 object-contain"
          />
          <img
            src={Bg}
            alt="Description"
            className="w-fulls w-1/2 md:w-1/5 lg:w-1/5 xl:w-1/8 object-contain"
          />
          <img
            src={Dc}
            alt="Description"
            className="w-fulls w-1/2 md:w-1/5 lg:w-1/5 xl:w-1/8 object-contain"
          />
        </div> */}
        <div class="trusted">
          <img src={Gof} alt="Description" />
          <img src={Lanline} alt="Description" />
          <img src={Bg} alt="Description" />
          <img src={Dc} alt="Description" />
        </div>
      </div>
    </div>
  );
}

export default Trusted;
