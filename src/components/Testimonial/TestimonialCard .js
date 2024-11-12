import React from "react";

const TestimonialCard = ({ testimonial }) => {
  return (
    <div className="max-w-sm mx-auto bg- shadow-lg rounded-lg overflow-hidden">
      <div className="relative">
        <img
          className="w-full h-48 object-cover"
          src={testimonial.image}
          alt="Card background"
        />
        {/* Profile Section - Top Left */}
        <div className="absolute top-2 left-2 flex items-center">
          <img
            className="w-16 h-16 rounded-full object-contain border-2 border-white"
            src={testimonial.image}
            alt="Profile"
          />
          <h2 className="ml-2 text-lg font-bold text-white bg-black bg-opacity-50 px-2 py-1 rounded">
            {testimonial.name}
          </h2>
        </div>
        {/* Bottom Left Title */}
        <div className="absolute bottom-2 left-2 bg-white bg-opacity-50">
          <span className="text-lg font-black text-black px-2 py-1 rounded">
            {testimonial.name}
          </span>
          <br />
          <span className="text-lg font-black text-black px-2 py-1 rounded">
            {testimonial.title}
          </span>
        </div>
      </div>
      {/* Description */}
      <div className="py-4 mt-4">
        <h2 className="ml-2 text-2xl font-bold text-white px-2 py-1 rounded">
          {testimonial.name}
        </h2>
        <span className="ml-2 text-xl font-bold text-white px-2 py-1 rounded">
          {testimonial.title}
        </span>
        <p className="text-gray-400 mt-4 text-lg px-2">
          {testimonial.description}
        </p>
      </div>
    </div>
  );
};

export default TestimonialCard;
