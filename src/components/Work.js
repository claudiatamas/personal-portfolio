import React, { useEffect, useRef } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom"; 
import "./swiper-custom.css";  

const projects = [
  {
    title: "FocusKeeper",
    description: "FocusKeeper is a revolutionary application designed to detect signs of fatigue in real time, empowering users to make safer choices, especially while driving. By leveraging cutting-edge technology, it monitors user behavior and provides timely alerts to prevent potential accidents caused by fatigue.",
    paragraph: "Python | JavaScript | Bootstrap | Artificial Intelligence",
    link: "https://github.com/claudiatamas/FocusKeeper", 
    image: "/focus.png",
  },
  {
    title: "THERAPYi",
    description: "Therapyi is a dedicated platform designed to promote mental health awareness and provide essential support for students navigating the challenges of academic and personal life. This app connects users with counselors, ensuring access to professional guidance and a safe environment.",
    paragraph: "PHP | JavaScript | HTML | CSS | SQL",
    link: "/therapyi",
    image: "/therapy.png",
  },
];

const Work = () => {
  const projectRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("fadeInUp");
            entry.target.classList.remove("opacity-0");
          } else {
            entry.target.classList.remove("fadeInUp");
            entry.target.classList.add("opacity-0");
          }
        });
      },
      { threshold: 0.2 }
    );

    projectRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      projectRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  return (
    <div id="work-section" className="py-12  mb-24 md:mt-60 md:mb-48">
      
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-28">
        {projects.map((project, index) => (
          <div
            key={index}
            ref={(el) => (projectRefs.current[index] = el)}
            className={`opacity-0 transition-opacity duration-700 transform translate-y-10 rounded-3xl border border-[#2F363F] p-6 flex flex-col items-center text-center md:w-2/3 ${
              index % 2 === 0 ? 'mr-auto' : 'ml-auto'
            }`}
          >
            
            {/* Title */}
            <h1 className="text-5xl mb-6 text-[#2F363F] font-bold transition-transform duration-300 transform hover:scale-105">
              {project.title}
            </h1>

            {/* Description */}
            <h2 className="text-xl mb-4 transition-transform duration-300 transform hover:scale-105">
              {project.description}
            </h2>

            {/* Project Info */}
            <p className="mb-4 text-gray-400 transition-transform duration-300 transform hover:scale-105">
              {project.paragraph}
            </p>

            {/* Link */}
            <div className="mt-6">
              {project.link.startsWith("/") ? (
                <Link
                  to={project.link}
                  className="inline-flex items-center justify-center px-6 py-2 text-white bg-gradient-to-r from-[#9e88ff] to-[#d29edc] rounded-2xl shadow-md transition-transform duration-300 transform hover:scale-105"
                >
                  <span className="mr-2">View Project</span>
                  <FaArrowRightLong className="transition-transform duration-300 transform hover:translate-x-2" />
                </Link>
              ) : (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-6 py-2 text-white bg-gradient-to-r from-[#9e88ff] to-[#d29edc] rounded-2xl shadow-md transition-transform duration-300 transform hover:scale-105"
                >
                  <span className="mr-2">View Project</span>
                  <FaArrowRightLong className="transition-transform duration-300 transform hover:translate-x-2" />
                </a>
              )}
            </div>

            {/* Image */}
            <div className="flex w-full max-w-md mt-6">
              <img
                src={project.image}
                alt={project.title}
                className="w-full mb-12 h-full object-cover transition-transform duration-300 transform hover:scale-105 rounded-lg"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
