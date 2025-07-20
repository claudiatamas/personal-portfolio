import React, { useEffect, useRef } from "react";
import { FiCamera, FiGlobe } from 'react-icons/fi';
import { HiOutlineLightBulb } from 'react-icons/hi';
import { BiBookOpen } from 'react-icons/bi';

const About = () => {
  const sectionRef = useRef(null);
  const cardRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in-up");
            entry.target.classList.remove("opacity-0", "translate-y-10");
          } else {
            entry.target.classList.remove("animate-fade-in-up");
            entry.target.classList.add("opacity-0", "translate-y-10");
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    cardRefs.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
      cardRefs.current.forEach((card) => {
        if (card) observer.unobserve(card);
      });
    };
  }, []);

  return (
     <>
    <h2 className="text-md  font-normal text-center text-[#C59BFF] sm:mb-0   md:mb-20">
      ABOUT ME
    </h2>
    <div
      ref={sectionRef}
      id="about-section"
      className="opacity-0 translate-y-10 flex flex-col xl:flex-row gap-16 items-start justify-center py-12 px-4 xl:px-32  transition-all duration-700 mb-24"
    >
      
      {/* Left Section */}
      <div className="bg-white  rounded-2xl px-6  flex flex-col items-start w-full xl:w-1/2 transition-transform duration-300 transform hover:scale-105 mt-2 sm:mt-0 md:mt-8">
        <h2 className="text-3xl font-semibold tracking-widest text-[#2E343D] mt-1 sm:mt-0 md:mt-6 ">
          Discover My Passions
        </h2>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-2 gap-6 w-full mt-8 py-4">

          {[
            {
              icon: <FiCamera className="text-4xl  mb-2"  />,
              title: "Photography",
              text: "Capturing timeless moments through my lens.",
            },
            {
              icon: <FiGlobe className="text-3xl mb-2" />,
              title: "Travelling",
              text: "Finding inspiration in every landscape.",
            },
            {
              icon: <BiBookOpen className="text-4xl  mb-2" />,
              title: "Reading",
              text: "Exploring minds through pages.",
            },
            {
              icon: <HiOutlineLightBulb className="text-4xl mb-2" />,
              title: "Creative Tech",
              text: "Crafting beautiful and functional web experiences.",
            },
          ].map((card, i) => (
          <div
              key={i}
              ref={(el) => (cardRefs.current[i] = el)}
              className="cursor-pointer opacity-0 translate-y-10 flex flex-col items-center bg-[rgba(197,155,255,0.2)] rounded-lg p-8 shadow-sm hover:shadow-lg transition-shadow duration-200 min-h-48"
            >
              {card.icon}
              <h3 className="text-lg font-semibold mb-1 text-[#2E343D] tracking-wider">
                {card.title}
              </h3>
              <p className="text-center text-sm font-extralight leading-relaxed">
                {card.text}
              </p>
            </div>

          ))}
        </div>
      </div>

{/* Right Section */}
<div className="xl:w-1/2 w-full mt-6 xl:mt-0 grid grid-cols-2 sm:grid-cols-2 gap-4">
  {["/photo1.jpg", "/photo2.jpg", "/photo3.jpg", "/photo4.jpg"].map((src, index) => (
    <img
      key={index}
      src={src}
      alt={`About me ${index + 1}`}
      className="w-full h-72 sm:h-full xl:h-96 cursor-pointer rounded-2xl object-cover transition-transform duration-300 transform hover:scale-105"
    />
  ))}
</div>




</div>
    </>
  );
};

export default About;
