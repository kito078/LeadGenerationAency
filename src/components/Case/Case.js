import React from "react";

function Case() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-8 lg:gap-16 p-6 md:p-12">
      {/* Image Section */}
      <div className="md:w-1/2 mb-6 md:mb-0">
        <img
          src="./images/case.png"
          alt="Descriptive Alt Text"
          className="w-full h-auto object-cover rounded-lg shadow-lg"
        />
      </div>

      {/* Text Section */}
      <div className="md:w-1/2 text-center md:text-left">
        <h2 className="text-2xl md:text-4xl font-bold mb-4">
          We grew Lanline Technologies' business to 1 million in 12 months
        </h2>
        <p className="text-lg md:text-xl text-gray-300 mb-6">
          Facebook Ads have resulted in seven figures in sales for Lanline
          Technologies. These ads have reached the right people and turned them
          into loyal customers, showing that Facebook Ads are a great way to get
          more leads and increase sales
        </p>
      </div>
    </div>
  );
}

export default Case;
