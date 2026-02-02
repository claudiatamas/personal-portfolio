import React, { useEffect, useRef } from "react";
import { FiCamera } from 'react-icons/fi';
import { BiBookOpen } from 'react-icons/bi';
import { FiGlobe } from "react-icons/fi";
import { MdOutlineDesignServices } from "react-icons/md";

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
      <h2 className="text-md text-center bg-gradient-to-r from-[#9454ee] to-[#bb8cfc] bg-clip-text text-transparent font-medium sm:mb-0 md:mb-20">
        ABOUT ME
      </h2>
      <div
        ref={sectionRef}
        id="about-section"
        className="opacity-0 translate-y-10 flex flex-col xl:flex-row gap-16 items-start justify-center py-12 px-4 xl:px-32 transition-all duration-700 mb-24"
      >
        {/* Left Section */}
        <div className="bg-white rounded-2xl px-6 flex flex-col items-start w-full xl:w-1/2 transition-transform duration-300 transform hover:scale-[1.02] mt-2 sm:mt-0 md:mt-8">
          <h2 className="text-3xl font-semibold tracking-widest text-[#2E343D] mt-1 sm:mt-0 md:mt-6">
            Discover My Passions
          </h2>

      
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-2 gap-6 w-full mt-8 py-4">
            {[
              {
                icon: <FiCamera className="text-4xl mb-2 text-black" />,
                title: "Photography",
                text: "Capturing timeless moments and stories through my lens.",
                gradient: "from-pink-400 to-rose-400",
              },
              {
                icon: <MdOutlineDesignServices className="text-4xl mb-2 text-black" />,
                title: "UI/UX Design",
                text: "Creating intuitive and beautiful digital experiences.",
                gradient: "from-purple-400 to-indigo-400",
              },
              {
                icon: <FiGlobe className="text-4xl mb-2 text-black" />,
                title: "Travelling",
                text: "Finding inspiration in every landscape and culture.",
                gradient: "from-teal-400 to-blue-400",
              },
              {
                icon: <BiBookOpen className="text-4xl mb-2 text-black" />,
                title: "Reading",
                text: "Exploring new worlds and ideas through literature.",
                gradient: "from-amber-400 to-orange-400",
              },
            ].map((card, i) => (
              <div
                key={i}
                ref={(el) => (cardRefs.current[i] = el)}
                className="cursor-pointer opacity-0 translate-y-10 group relative flex flex-col items-center bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 shadow-md hover:shadow-2xl transition-all duration-300 min-h-48 overflow-hidden border border-gray-100"
              >
    
                <div className={`absolute inset-0 bg-gradient-to-br ${card.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-2xl`}></div>
                
           
                <div className={`relative bg-gradient-to-br ${card.gradient} bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300`}>
                  {card.icon}
                </div>
                
                <h3 className="relative text-lg font-semibold mb-1 text-[#2E343D] tracking-wider group-hover:text-[#9454ee] transition-colors duration-300">
                  {card.title}
                </h3>
                
                <p className="relative text-center text-sm font-light leading-relaxed text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                  {card.text}
                </p>
                
          
                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${card.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left`}></div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Section */}
        <div className="xl:w-1/2 w-full mt-6 xl:mt-0 grid grid-cols-2 sm:grid-cols-2 gap-4">
          {["/photo1.jpg", "/photo2.jpg", "/photo3.jpg", "/photo4.jpg"].map((src, index) => (
            <div key={index} className="relative group overflow-hidden rounded-2xl">
              <img
                src={src}
                alt={`About me ${index + 1}`}
                className="w-full h-56 sm:h-full xl:h-80 cursor-pointer object-cover transition-all duration-500 transform group-hover:scale-110"
              />
              
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default About;