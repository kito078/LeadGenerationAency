// import React from "react";

// const Testimonial = () => {

//   return (
//     <div>
//       <div className="max-w-sm mx-auto bg-whitee shadow-lg rounded-lg overflow-hidden">
//         <div className="relative">
//           <img
//             className="w-full h-48 object-cover"
//             src="./images/bman.jpeg"
//             alt="Card background"
//           />
//           {/* Profile Section - Top Left */}
//           <div className="absolute top-2 left-2 flex items-center">
//             <img
//               className="w-16 h-16 rounded-full object-contain border-2 border-white"
//               src="./images/bman.jpeg"
//               alt="Profile"
//             />
//             <h2 className="ml-2 text-lg font-bold text-white bg-black bg-opacity-50 px-2 py-1 rounded">
//               John Testimonial
//             </h2>
//           </div>
//           {/* Bottom Left Title */}
//           <div className="absolute bottom-2 left-2 bg-gray-100 bg-opacity-50">
//             <span className=" text-lg font-black text-black px-2 py-1s rounded">
//               John Hewlett
//             </span>
//             <br />
//             <span className="text-lg font-black text-black px-2 py-1 rounded">
//               Founder & CEO of Miracle
//             </span>
//           </div>
//         </div>
//         {/* Description */}
//         <div className="py-4 mt-4">
//           <h2 className="ml-2e text-2xl font-bold text-white  px-2e py-1 rounded">
//             John Hewlett
//           </h2>
//           <span className="ml-2e text-2xl pb-2 font-boldd text-white  px-2e py-1 rounded">
//             Founder and CEO of Cardio Miracle
//           </span>
//           <p className="text-gray-400 mt-4 text-lg">
//             This is a description of the card content. It provides additional
//             information about what is being presented on the card.
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Testimonial;
import React from "react";
import TestimonialCard from "./TestimonialCard ";

const testimonials = [
  {
    id: 1,
    name: "John Hewlett",
    title: "Founder & CEO of Miracle",
    description:
      "This is a description of the card content. It provides additional information about what is being presented on the card.",
    image: "./images/man1.jpg",
  },
  {
    id: 2,
    name: "Jane Doe",
    title: "Co-Founder of Innovation",
    description:
      "This is another description of the card content for Jane Doe.",
    image: "./images/man2.jpg", // Change the image if needed
  },
  // Duplicate testimonials
  {
    id: 3,
    name: "John Hewlett",
    title: "Founder & CEO of Miracle",
    description:
      "This is a description of the card content. It provides additional information about what is being presented on the card.",
    image: "./images/man3.jpg",
  },
  // {
  //   id: 4,
  //   name: "Jane Doe",
  //   title: "Co-Founder of Innovation",
  //   description:
  //     "This is another description of the card content for Jane Doe.",
  //   image: "./images/bman.jpeg", // Change the image if needed
  // },
];

const Testimonials = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 sm:grid-cols-3 gap-12 p-4">
      {testimonials.map((testimonial) => (
        <TestimonialCard key={testimonial.id} testimonial={testimonial} />
      ))}
    </div>
  );
};

export default Testimonials;
