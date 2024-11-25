import React from "react";
import TestimonialCard from "./TestimonialCard ";
import man1 from "../../Images/man1.jpg";
import man2 from "../../Images/man2.jpg";
import Man3 from "../../Images/man3.jpg";

const testimonials = [
  {
    id: 1,
    name: "John Hewlett",
    title: "Founder & CEO of Miracle",
    description:
      "This is a description of the card content. It provides additional information about what is being presented on the card.",
    image: man1,
  },
  {
    id: 2,
    name: "Jane Doe",
    title: "Co-Founder of Innovation",
    description:
      "This is another description of the card content for Jane Doe.",
    image: man2,
  },
  // Duplicate testimonials
  {
    id: 3,
    name: "John Hewlett",
    title: "Founder & CEO of Miracle",
    description:
      "This is a description of the card content. It provides additional information about what is being presented on the card.",
    image: Man3,
  },
];

const Testimonials = () => {
  return (
    <div className="seperator grid grid-cols-1 sm:grid-cols-2 sm:grid-cols-3 gap-12 p-4">
      {testimonials.map((testimonial) => (
        <TestimonialCard key={testimonial.id} testimonial={testimonial} />
      ))}
    </div>
  );
};

export default Testimonials;
