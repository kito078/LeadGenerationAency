import React from "react";

function GenerationData({ icon, title, description }) {
  return (
    <div className="shadow-md rounded-lg p-2 m-4w w-full flex flex-col items-center sm:items-start">
      <div className="flex items-start mb-4">
        <div className="text-4xl text-blue-500 mr-4 mt-2">{icon}</div>
        <div>
          <h2 className="text-lg sm:text-xl font-bold mb-2 text-centerd sm:text-left">
            {title}
          </h2>
          <p className="text-sm sm:text-base text-gray-300 text-centers sm:text-left">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}

export default GenerationData;
