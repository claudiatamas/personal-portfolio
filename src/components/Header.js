import React, { useState, useEffect } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiFigma } from "react-icons/si";

const Header = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-4 relative overflow-hidden md:mb-0">
      {/* Gradient 1 – hidden on mobile */}
      <div className="hidden sm:block absolute top-1 left-1 w-80 h-64 rounded-full bg-gradient-to-r from-[#C59BFF] to-[#FED3FF] opacity-30 blur-3xl"></div>

      {/* Gradient 2 – remains on all screens */}
      <div className="absolute bottom-12 md:bottom-36 right-10 sm:right-20 w-3/4 sm:w-4/12 h-96 rounded-full bg-gradient-to-r from-[#C59BFF] to-[#FED3FF] opacity-40 blur-3xl"></div>

      <div
        className={`flex flex-col md:flex-row items-center justify-between w-full max-w-6xl gap-10
          transition-all duration-700 ease-in-out
          ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
        `}
      >
        {/* Text Section */}
      <div
          className={`text-left w-full max-w-md md:ml-4 px-6 sm:px-0 
            mt-32 md:mt-0
            transition-all duration-700 delay-200
            ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
            hover:scale-105 hover:cursor-pointer
            transform transition-transform duration-300
          `}
        >

          <h1 className="tracking-wider text-5xl sm:text-6xl font-light mb-2">Hi,</h1>
          <h2 className="tracking-wider text-5xl sm:text-6xl font-light mb-4">
            I’m <span className="font-medium text-black">Claudia</span>
          </h2>
          <div className="flex flex-wrap gap-2 mb-4">

            <span className="border border-gray-300 rounded-full px-4 py-1 text-xs">UI/UX Designer</span>
            <span className="border border-gray-300 rounded-full px-4 py-1 text-xs">Frontend Dev</span>
            <span className="border border-gray-300 rounded-full px-4 py-1 text-xs">Educational Mentor</span>
          </div>
          <p className="text-gray-700 tracking-wider mb-6 text-md font-light leading-relaxed">
            Junior designer and developer focused on building thoughtful, genuine digital experiences.
          </p>

          <a
            href="/CV_Resume_Claudia_Paula_Tamas.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#bb8cfc] text-white px-6 py-2 rounded-full text-sm font-medium
              hover:bg-[#9454ee] hover:scale-105 transition transform duration-300"
          >
            See Resume
          </a>
        </div>

        {/* Image + Socials */}
      <div
          className={`relative flex flex-col items-center md:items-end mt-10 md:mt-64
            transition-all duration-700 delay-400
            ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
            hover:scale-105 hover:cursor-pointer
            transform transition-transform duration-300
          `}
        >
          <img
            src="/profilepic.png"
            alt="Claudia"
            className="w-[220px] sm:w-[300px] md:w-[380px] object-cover mr-0 md:mr-4 "
          />

          {/* Hidden black line on mobile */}
          <div className="hidden md:block w-[700px] h-[1px] bg-black" />

          <div className="flex gap-4 mt-2 md:mt-4 md:mr-12">
            <a
              href="https://www.figma.com/files/team/1330094435266435165/recents-and-sharing?fuid=1330094433288764885"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 border rounded-full px-4 py-1 text-sm
                hover:scale-110 hover:bg-purple-100 transition transform duration-300"
            >
              <SiFigma /> Figma
            </a>
            <a
              href="https://github.com/claudiatamas"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 border rounded-full px-4 py-1 text-sm
                hover:scale-110 hover:bg-teal-50 transition transform duration-300"
            >
              <FaGithub /> GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/claudia-t%C4%83ma%C8%99-b79a98224/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 border rounded-full px-4 py-1 text-sm
                hover:scale-110 hover:bg-blue-100 transition transform duration-300"
            >
              <FaLinkedin /> LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
