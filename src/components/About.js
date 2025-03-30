import React, { useEffect, useRef } from "react";
import { FaCamera, FaTree, FaMusic, FaCode } from "react-icons/fa";

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
    <div
      ref={sectionRef}
      id="about-section"
      className="opacity-0 translate-y-10 flex flex-col lg:flex-row items-start justify-center py-12 px-4 lg:px-48 mb-6 transition-all duration-700"
    >
      {/* Left Section */}
      <div className="bg-white border mt-20 border-[#2E343D] shadow-lg rounded-2xl p-6 mr-0 lg:mr-6 flex flex-col items-start w-full lg:w-1/2 transition-transform duration-300 transform hover:scale-105">
        <h2 className="text-3xl font-bold tracking-wide text-[#2E343D] mt-6 ml-6">
          Discover My Passions
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 w-full mt-12">
          {/* Card 1 */}
          <div
            ref={(el) => (cardRefs.current[0] = el)}
            className="opacity-0 translate-y-10 flex flex-col items-center border border-gray-300 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-200"
          >
            <FaCamera className="text-4xl text-blue-500 mb-2" />
            <h3 className="text-lg text-[#2E343D] font-semibold mb-1">Photography</h3>
            <p className="text-center text-sm text-gray-600 leading-relaxed">
              Capturing moments and creating memories through my lens.
            </p>
          </div>

          {/* Card 2 */}
          <div
            ref={(el) => (cardRefs.current[1] = el)}
            className="opacity-0 translate-y-10 flex flex-col items-center border border-gray-300 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-200"
          >
            <FaTree className="text-4xl text-green-500 mb-2" />
            <h3 className="text-lg font-semibold mb-1 text-[#2E343D]">Nature</h3>
            <p className="text-center text-sm text-gray-600 leading-relaxed">
              Discovering the beauty of the great outdoors.
            </p>
          </div>

          {/* Card 3 */}
          <div
            ref={(el) => (cardRefs.current[2] = el)}
            className="opacity-0 translate-y-10 flex flex-col items-center border border-gray-300 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-200"
          >
            <FaMusic className="text-4xl text-yellow-500 mb-2" />
            <h3 className="text-lg font-semibold mb-1 text-[#2E343D]">Music</h3>
            <p className="text-center text-sm text-gray-600 leading-relaxed">
              Listening to music to enhance creativity.
            </p>
          </div>

          {/* Card 4 */}
          <div
            ref={(el) => (cardRefs.current[3] = el)}
            className="opacity-0 translate-y-10 flex flex-col items-center border border-gray-300 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-200"
          >
            <FaCode className="text-4xl text-purple-500 mb-2" />
            <h3 className="text-lg font-semibold mb-1 text-[#2E343D]">Web Development</h3>
            <p className="text-center text-sm text-gray-600 leading-relaxed">
              Crafting beautiful and functional web experiences.
            </p>
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="lg:w-1/2 w-full mt-6 lg:mt-0">
        <img
          src="/Colaj.png"
          alt="About Me"
          className="w-full h-auto rounded-2xl transition-transform duration-300 transform hover:scale-105"
        />
      </div>
    </div>
  );
};

export default About;
