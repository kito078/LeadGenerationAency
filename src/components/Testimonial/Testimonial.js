import React from "react";
import TestimonialCard from "./TestimonialCard ";
import man1 from "../../Images/man1.webp";
import man5 from "../../Images/man5.png";
import Man3 from "../../Images/man3.jpg";

const testimonials = [
  {
    id: 1,
    name: "Thabo Mokoena",
    title: "Founder & CEO of Nest IT Solution",
    description:
      "Elite Lead Agency has been instrumental in expanding our client base. Their lead generation strategies have consistently delivered qualified leads, contributing significantly to our sales growth.",
    image: man1,
  },
  {
    id: 2,
    name: "Johan van der Merwe",
    title: "Co-Founder of Lanline",
    description:
      "Partnering with Elite Lead Agency transformed our online presence. Their expertise in web design and digital marketing has led to a noticeable increase in customer engagement and sales..",
    image: man5,
  },
  // Duplicate testimonials
  {
    id: 3,
    name: "Lebo Masango",
    title: "Founder & CEO of The Leo Furniture",
    description:
      "Elite Lead Agency is the best digital marketing agency I’ve had the privilege of working with – it’s been a joyous experience and my business has grown. The team is timeous and professional... it’s like magic! Thank you, team Elite Lead Agency.",
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
