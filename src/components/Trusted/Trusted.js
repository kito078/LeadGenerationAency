import React from "react";
import "./Trusted.css";

function Trusted() {
  return (
    <div className="mb-6">
      <h3 className="text-2xl mx-4 md:mx-7 my-16 md:text-4xl text-center font-bold text-gray-300 mb-3 lg:my-6">
        Businesses that have trusted Our strategies.
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
        <div className="trusted flex flex-wrap justify-center mt-20 gap-4">
          <img
            src="./images/gof.png"
            alt="Description"
            className="w-fullr fw-1/2 fmd:w-1/3 flg:w-1/5 fxl:w-1/6 object-contain"
          />
          <img
            src="./images/lanline.png"
            alt="Description"
            className="w-fulls w-1/2 md:w-1/5 lg:w-1/5 xl:w-1/6 object-contain"
          />
          <img
            src="./images/bg.png"
            alt="Description"
            className="w-fulls w-1/2 md:w-1/5 lg:w-1/5 xl:w-1/8 object-contain"
          />
          <img
            src="./images/dc.png"
            alt="Description"
            className="w-fulls w-1/2 md:w-1/5 lg:w-1/5 xl:w-1/8 object-contain"
          />
        </div>
      </div>
    </div>
  );
}

export default Trusted;