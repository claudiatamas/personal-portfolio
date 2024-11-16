import React from "react";
import NavbarProjects from "../components/NavbarProjects";


import Footer from "../components/Footer";

const Therapyi = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <NavbarProjects />
      <div className="relative min-h-screen flex items-center justify-center bg-cover bg-center">
      
        <div className="absolute top-10 left-10 w-64 h-64 rounded-full bg-gradient-to-r from-[#6F53EF] to-pink-400 opacity-20 blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 rounded-full bg-gradient-to-r from-[#437AF4] to-teal-200 opacity-20 blur-3xl"></div>

       
      </div>

      <Footer />
    </div>
  );
};

export default Therapyi;
