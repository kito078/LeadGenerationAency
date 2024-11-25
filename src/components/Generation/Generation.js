import React from "react";
import GenerationData from "./GenerationData";
import { FaRocket, FaLightbulb, FaHeart } from "react-icons/fa";

const generationData = [
  {
    icon: <FaRocket />,
    title: "Facebook Lead Generation",
    description:
      "👉We create a high-converting video ad that highlights your brand and attracts customers.",
  },
  {
    icon: <FaLightbulb />,
    title: "Customer Relationship Management",
    description:
      "👉 We run and manage your ads, ensuring they reach the right audience to drive sales while providing marketing strategies that help you build relationships with your ideal customers.",
  },
  {
    icon: <FaHeart />,
    title: "Automatic bookings directly to your calendar",
    description:
      "👉We create a website that presents an irresistible offer to your customers—one they can't resist.",
  },
];

function Generation() {
  return (
    <div className="seperator">
      <div>
        <h3 className="text-lg text-red-500 uppercase mt-16 md:mt-24 mb-4 md:text-3xl lg:text-3xl text-center font-bold text-gray-300 mb-3 lg:my-6">
          How do we achieve the best results?
        </h3>
        <h3 className="text-2xl mb-16 lg:mb-20 md:text-4xl text-center font-bold text-gray-300 mb-3 lg:my-6">
          Imagine launching your ad and getting your first customer within the
          first 24 hours!
        </h3>
        {/* <h3 className="text-2xl mb-16 lg:mb-20 md:text-4xl text-center font-bold text-gray-300 mb-3 lg:my-6">
          Facebook Ads allow us to reach people already interested in products
          like yours, bringing you quality customers ready to buy.
        </h3> */}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Map over the generationData array to generate each card */}
        {generationData.map((card, index) => (
          <GenerationData
            key={index}
            icon={card.icon}
            title={card.title}
            description={card.description}
          />
        ))}
      </div>
    </div>
  );
}

export default Generation;
