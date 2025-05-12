import React, { useEffect, useRef } from "react";
import profile from "../images/profile.jpg";
import { FaLinkedin, FaFileAlt, FaFigma, FaGithub } from "react-icons/fa";

const Header = () => {
  const headerRef = useRef(null);

  useEffect(() => {
    const currentHeaderRef = headerRef.current; 

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove("opacity-0", "translate-y-10");
            entry.target.classList.add("opacity-100", "translate-y-0");
          } else {
            entry.target.classList.add("opacity-0", "translate-y-10");
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    if (currentHeaderRef) observer.observe(currentHeaderRef); 

    return () => {
      if (currentHeaderRef) observer.unobserve(currentHeaderRef); 
    };
  }, []);

  return (
    <div
      ref={headerRef}
      className={`flex flex-col items-center justify-center mt-36 transition-all duration-700 ease-out ${
        headerRef.current ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      {/* Gradient  */}
      <div className="hidden md:flex absolute -bottom-16 left-20 w-80 h-80 rounded-full bg-gradient-to-r from-purple-300 to-blue-50 opacity-40 blur-3xl"></div>
      <div className="hidden md:flex absolute top-8 right-12 w-80 h-80 rounded-full bg-gradient-to-r from-purple-300 to-blue-100 opacity-40 blur-3xl"></div>

      <div className="cursor-pointer w-40 h-40 rounded-full overflow-hidden shadow-lg mb-6 mt-8 md:mt-20">
        <img
          src={profile}
          alt="Profile"
          className="w-full h-full object-cover transition-transform duration-300 transform hover:scale-105"
        />
      </div>
      {/* Description */}
      <div className="cursor-pointer text-center max-w-xl px-4">
        <h1 className="text-4xl font-semibold text-[#2F363F] mb-2 transition-transform duration-300 transform hover:scale-105">
          Claudia{" "}
          <span className="bg-clip-text text-transparent bg-[#ad91ed]">
            Tămaș
          </span>
        </h1>
        <p className="cursor-pointer text-[#2F363F] text-2xl mb-4 mt-2 transition-transform duration-300 transform hover:scale-105">
          I'm a passionate entry-level web developer with a focus on creating
          responsive and engaging user interfaces. Currently focused on
          front-end development with React and Tailwind CSS.
        </p>
      </div>
      {/* Social Media Links */}
      <div className="grid grid-cols-2 gap-4 mt-6 w-full mx-auto max-w-md text-center md:flex md:justify-center md:space-x-12 md:max-w-none">
        <a
          href="/CV_Resume_Claudia_Paula_Tamas.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:scale-110 transition-transform duration-200 text-2xl flex items-center text-[#2F363F] hover:text-[#ad91ed] justify-center"
        >
          <FaFileAlt size={24} className="mr-2" /> Resume
        </a>
        <a
          href="https://www.linkedin.com/in/claudia-t%C4%83ma%C8%99-b79a98224/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center text-2xl text-[#2F363F] hover:text-[#ad91ed] hover:scale-110 transition-transform duration-200 justify-center"
        >
          <FaLinkedin size={24} className="mr-2" /> LinkedIn
        </a>
        <a
          href="/"
          target=""
          rel="noopener noreferrer"
          className="flex items-center text-2xl text-[#2F363F] hover:text-[#ad91ed] hover:scale-110 transition-transform duration-200 justify-center"
        >
          <FaFigma size={24} className="mr-2" /> Figma
        </a>
        <a
          href="https://github.com/claudiatamas"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center text-2xl text-[#2F363F] hover:text-[#ad91ed] hover:scale-110 transition-transform duration-200 justify-center"
        >
          <FaGithub size={24} className="mr-2" /> GitHub
        </a>
      </div>
    </div>
  );
};

export default Header;
