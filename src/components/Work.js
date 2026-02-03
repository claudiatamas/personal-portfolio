import React, { useEffect, useRef } from "react";
import "./swiper-custom.css";

const projects = [
  {
    title: "Dentflow",
    description:
      "Developing a dental management application using React and Python, with a machine learning model for detecting oral diseases.",
    paragraph: "React JS | Python | SQL | Machine Learning",
    link: "https://github.com/claudiatamas/dentflow",
    image: "/dentflow.png",
  },
  {
    title: "FocusKeeper",
    description:
      "Developed an application using Python and AI to monitor and optimize user focus and energy levels during driving and work sessions.",
    paragraph: "Bootstrap | Flask | Python | Artificial Intelligence",
    link: "https://github.com/claudiatamas/FocusKeeper",
    image: "/focuskeeper.png",
  },

   {
    title: "Youth Camp - Crinul din Vale",
    description:
      "Developed a user-friendly web platform for a local youth camp, creating interactive interfaces for managing registrations and activities, using structured data handling to ensure smooth participant management.",
    paragraph: "React JS | Node JS | Data Management",
    link: "https://tabaracrinuldinvale.com/",
    image: "/youthcamo.png",
  },
  {
    title: "PizzaPay",
    description:
      "Designed and developed both the UI/UX-focused frontend and backend of a React app for a pizzeria, supporting order management for staff and admin workflows.",
    paragraph: "React JS | UI/UX | Python | SQL ",
    link: "https://github.com/claudiatamas/pizzapay/tree/master",
    image: "/pizzapay.png",
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
    <div id="work-section" className="py-12 mb-24 mt-12 md:mt-20 md:mb-48">
      <div className="text-center bg-gradient-to-r from-[#9454ee] to-[#bb8cfc] bg-clip-text text-transparent mb-4 md:mb-16 text-md font-medium">PROJECTS</div>

      <div className="max-w-5xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12">
        {projects.map((project, index) => (
          <div
            key={index}
            ref={(el) => (projectRefs.current[index] = el)}
            className="group opacity-0  px-4 transform translate-y-10 rounded-2xl border border-[#ebeaea] p-4 flex flex-col justify-between shadow-md bg-white  hover:scale-[1.02] transition-transform duration-300"
          >
        <img
            src={project.image}
            alt={project.title}
            className="w-full h-48 md:h-64 rounded-lg mb-4 transition-transform duration-300 transform hover:scale-105 cursor-pointer object-cover"
          />

            <h3 className="text-xl tracking-widest font-semibold text-[#2F363F]  mb-2 py-2 ">
              {project.title}
            </h3>

            <div className="flex flex-wrap gap-2 mb-3">
              {project.paragraph.split("|").map((tech, i) => (
                <span
                  key={i}
                  className={`rounded-full px-3 py-1 text-xs ${
                    i === 0
                      ? "bg-gradient-to-r from-[#9454ee] to-[#bb8cfc] text-white transition-transform duration-300 transform hover:scale-105 cursor-pointer"
                      : "border border-gray-300 text-gray-600 transition-transform duration-300 transform hover:scale-105 cursor-pointer"
                  }`}
                >
                  {tech.trim()}
                </span>
              ))}
            </div>

            <p className="text-md font-light text-gray-800  mb-4 py-2 tracking-wide">
              {project.description}
            </p>

            <div className="mt-auto flex justify-end p-6">
  
              <a  href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-sm px-4 py-2 bg-gradient-to-r from-[#9454ee] to-[#bb8cfc] text-white rounded-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
              >
                View Project
              </a>
            </div>
          </div>
        ))}

      </div>
    </div>
  );
};

export default Work;