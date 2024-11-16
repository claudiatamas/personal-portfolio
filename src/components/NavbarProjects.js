import React, { useState, useEffect } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../images/logo_light.png";

const NavbarProjects = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isAnimated, setIsAnimated] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimated(true);
    }, 100);

    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-700 ease-out transform ${
        isAnimated ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"
      } ${isScrolled ? "bg-white shadow-lg h-36 " : "bg-transparent"}`}
    >
      <nav className="container mx-auto flex justify-center items-center mt-10">
        {/* Navbar */}
        <div className="md:flex items-center px-8 py-0 border border-[#2F363F] rounded-full shadow-md">
          {/* Logo */}
          <a
            href="/"
            className="hidden md:flex px-1 text-sm font-medium mr-16 transition-transform duration-300 transform hover:scale-105"
          >
            <img src={logo} alt="My Portfolio Logo" className="w-16" />
          </a>
          <div className="md:hidden flex items-center justify-between w-full px-4">
            {/* Logo Mobile */}
            <a
              href="/"
              className="flex-shrink-0 mr-12 transition-transform duration-300 transform hover:scale-105"
            >
              <img src={logo} alt="My Portfolio Logo" className="w-16" />
            </a>

            {/* Menu button Mobile */}
            <button
              onClick={toggleMenu}
              className="text-[#2F363F] focus:outline-none transition-transform duration-300 transform hover:scale-105"
            >
              <span className="text-2xl">
                {isOpen ? <FaTimes /> : <FaBars />}
              </span>
            </button>
          </div>

          {/* Nav Links */}
          <div className="hidden md:flex space-x-6">
            <a
              href="/CV_Tămaș_Claudia Paula_en.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#2F363F] px-3 py-1 hover:text-[#6E54EF] hover:scale-110 transition-transform duration-200 text-lg font-medium cursor-pointer"
            >
              Resume
            </a>
            <a
              href="/therapyi"
              rel="noopener noreferrer"
              className="text-[#08090a] px-3 py-1 hover:text-[#6E54EF] hover:scale-110 transition-transform duration-200 text-lg font-medium cursor-pointer flex items-center space-x-2"
            >
              <span>Next Project</span>
              <FaArrowRightLong className="transition-transform duration-300 transform hover:translate-x-2" />
            </a>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white text-[#2F363F] flex flex-col items-center space-y-4 py-4 shadow-md">
          <a
            href="/CV_Tămaș_Claudia Paula_en.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#2F363F] px-3 py-1 hover:text-[#6E54EF] hover:scale-110 transition-transform duration-200 text-lg font-medium cursor-pointer"
          >
            Resume
          </a>
          <a
              href="/therapyi"
              rel="noopener noreferrer"
              className="text-[#08090a] px-3 py-1 hover:text-[#6E54EF] hover:scale-110 transition-transform duration-200 text-lg font-medium cursor-pointer flex items-center space-x-2"
            >
              <span>Next Project</span>
              <FaArrowRightLong className="transition-transform duration-300 transform hover:translate-x-2" />
            </a>
        </div>
      )}
    </header>
  );
};

export default NavbarProjects;
