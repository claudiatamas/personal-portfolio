import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../images/logo_light.png";

const Navbar = () => {
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
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    
    return () => {
      clearTimeout(timer);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navLinks = [
     { name: "Home", to: "hero-section" },
    { name: "Work", to: "work-section" },
    { name: "About", to: "about-section" },
    { name: "Contact", to: "contact-section" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-out ${
        isAnimated ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"
      } ${isScrolled ? "bg-white/95 backdrop-blur-sm shadow-lg py-4" : "bg-transparent py-6"}`}
    >
      <nav className="container mx-auto px-4">
        {/* Desktop Navbar */}
<div className="hidden md:flex items-center justify-center">
  <div className={`flex items-center gap-8 px-8 py-3 bg-white/90 backdrop-blur-md transition-all duration-500 ${
    isScrolled 
      ? "border-0 rounded-none shadow-none" 
      : "border border-gray-50 rounded-full shadow-lg hover:shadow-xl"
  }`}>
    {/* Logo */}
  
    {/* Nav Links */}
    <div className="flex items-center gap-1">
      {navLinks.map((link) =>
        link.isExternal ? (
          
        <a    key={link.name}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="relative px-4 py-2 text-[#2F363F] font-medium text-md
              hover:text-[#9454ee] transition-colors duration-300
              after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 
              after:bg-gradient-to-r after:from-[#9454ee] after:to-[#bb8cfc]
              after:transition-all after:duration-300 hover:after:w-full"
          >
            {link.name}
          </a>
        ) : (
          <Link
            key={link.name}
            to={link.to}
            smooth={true}
            duration={500}
            spy={true}
            activeClass="text-[#9454ee]"
            className="relative px-4 py-2 text-[#2F363F] font-medium text-md cursor-pointer
              hover:text-[#9454ee] transition-colors duration-300
              after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 
              after:bg-gradient-to-r after:from-[#9454ee] after:to-[#bb8cfc]
              after:transition-all after:duration-300 hover:after:w-full"
          >
            {link.name}
          </Link>
        )
      )}
    </div>
  </div>
</div>

        {/* Mobile Navbar */}

      <div className="md:hidden flex items-center justify-end">
        {/* Menu Button */}
        <button
          onClick={toggleMenu}
          className="p-2 text-[#2F363F] bg-white/90 backdrop-blur-md border border-gray-200 rounded-full shadow-md
            hover:bg-gray-50 hover:shadow-lg transition-all duration-300"
          aria-label="Toggle menu"
        >
          <span className="text-xl">
            {isOpen ? <FaTimes /> : <FaBars />}
          </span>
        </button>
      </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-white/95 backdrop-blur-md border-t border-gray-200 shadow-lg mt-4 mx-4 rounded-2xl">
          <div className="flex flex-col py-4">
            {navLinks.map((link, index) =>
              link.isExternal ? (
                
                <a  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsOpen(false)}
                  className={`px-6 py-3 text-[#2F363F] font-medium text-base
                    hover:text-[#9454ee] hover:bg-purple-50 transition-all duration-300
                    ${index === 0 ? "rounded-t-2xl" : ""} 
                    ${index === navLinks.length - 1 ? "rounded-b-2xl" : ""}
                    border-l-4 border-transparent hover:border-[#bb8cfc]`}
                >
                  {link.name}
                </a>
              ) : (
                <Link
                  key={link.name}
                  to={link.to}
                  smooth={true}
                  duration={500}
                  onClick={() => setIsOpen(false)}
                  className={`px-6 py-3 text-[#2F363F] font-medium text-base cursor-pointer
                    hover:text-[#9454ee] hover:bg-purple-50 transition-all duration-300
                    ${index === 0 ? "rounded-t-2xl" : ""} 
                    ${index === navLinks.length - 1 ? "rounded-b-2xl" : ""}
                    border-l-4 border-transparent hover:border-[#bb8cfc]`}
                >
                  {link.name}
                </Link>
              )
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;