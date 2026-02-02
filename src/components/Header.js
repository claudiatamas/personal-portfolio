import React, { useState, useEffect } from "react";
import { FaGithub, FaLinkedin, FaFigma } from "react-icons/fa";

const Header = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <section id="hero-section" className="mt-8 md:mt-0 min-h-screen flex flex-col items-center justify-center px-4 pt-20 md:pt-0 relative overflow-hidden">
   
      <div className="hidden sm:block absolute top-0 left-0 w-96 h-96 rounded-full bg-gradient-to-br from-[#C59BFF]/30 to-[#FED3FF]/20 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-gradient-to-tl from-[#FED3FF]/40 to-[#C59BFF]/30 blur-3xl"></div>

      <div
        className={`flex flex-col md:flex-row items-center justify-between w-full max-w-6xl gap-12 md:gap-16
          transition-all duration-1000 ease-out
          ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
        `}
      >

        <div
          className={`text-left w-full md:w-1/2 max-w-xl
            transition-all duration-700 delay-200
            ${loaded ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}
          `}
        >
          <div className="space-y-2 mb-6">
            <h1 className="text-6xl sm:text-7xl font-light tracking-tight">
              Hi,
            </h1>
            <h2 className="text-6xl sm:text-7xl font-light tracking-tight">
              I'm <span className="font-medium  bg-gradient-to-r from-[#9454ee] to-[#bb8cfc] bg-clip-text text-transparent">Claudia</span>
            </h2>
          </div>

          <div className="flex flex-wrap gap-2 mb-6">
            <span className="cursor-pointer border border-gray-300 rounded-full px-4 py-1.5 text-xs font-medium text-gray-700 hover:border-[#bb8cfc] hover:text-[#9454ee] transition-colors duration-300">
              UI/UX Design
            </span>
            <span className="cursor-pointer border border-gray-300 rounded-full px-4 py-1.5 text-xs font-medium text-gray-700 hover:border-[#bb8cfc] hover:text-[#9454ee] transition-colors duration-300">
              Frontend Developer
            </span>
            <span className="cursor-pointer border border-gray-300 rounded-full px-4 py-1.5 text-xs font-medium text-gray-700 hover:border-[#bb8cfc] hover:text-[#9454ee] transition-colors duration-300">
              Web Design
            </span>
          </div>

          <p className="text-gray-600 mb-8 text-base leading-relaxed max-w-md">
            I craft intuitive, visually consistent user interfaces and bring designs to life with clean, modern code. Specializing in React, Tailwind CSS, and creating seamless user experiences.
          </p>

          
           <a href="/CV_Resume_Claudia_Paula_Tamas.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gradient-to-r from-[#9454ee] to-[#bb8cfc] text-white px-8 py-3 rounded-full text-sm font-medium
              hover:shadow-lg hover:shadow-purple-300/50 hover:scale-105 transition-all duration-300"
          >
            See Resume
          </a>
        </div>

 
        <div
          className={`relative mt-4 md:mt-20 flex flex-col items-center md:items-end w-full md:w-1/2
            transition-all duration-700 delay-400
            ${loaded ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}
          `}
        >

          <div className="relative group">
            <img
              src="/profilepic.png"
              alt="Claudia"
              className="w-64 sm:w-80 md:w-96 object-cover"
            />
          </div>


          <div className="hidden md:block w-[600px] h-[0.5px] bg-gray-500" />

          <div className="flex flex-wrap gap-3 mt-4 md:mt-6 md:mr-12 justify-center md:justify-end">
            
             <a href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 border border-gray-500 rounded-full px-5 py-2 text-sm font-medium
                hover:border-purple-400 hover:bg-purple-50 hover:scale-105 transition-all duration-300"
            >
              <FaFigma className="text-purple-600" /> Figma
            </a>

            
            <a  href="https://github.com/claudiatamas"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 border border-gray-500 rounded-full px-5 py-2 text-sm font-medium
                hover:border-gray-800 hover:bg-gray-50 hover:scale-105 transition-all duration-300"
            >
              <FaGithub className="text-gray-800" /> GitHub
            </a>

            
             <a href="https://www.linkedin.com/in/claudia-t%C4%83ma%C8%99-b79a98224/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 border border-gray-500 rounded-full px-5 py-2 text-sm font-medium
                hover:border-blue-600 hover:bg-blue-50 hover:scale-105 transition-all duration-300"
            >
              <FaLinkedin className="text-blue-600" /> LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;