import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "./swiper-custom.css";

const projects = [
  {
    title: "Dentflow",
    description:
      "Developing a dental management application to help dental offices efficiently organize appointments, patient records, and workflows",
    paragraph: "React JS | Tailwind CSS | Python | Artificial Intelligence",
    link: "https://github.com/claudiatamas/dentflow",
    image: "/dentflow.png",
  },
  {
    title: "FocusKeeper",
    description:
      "Developed an application using Python and AI to monitor and optimize user focus and energy levels during driving and work sessions.",
    paragraph: "Python | Flask | Bootstrap | Machine Learning",
    link: "https://github.com/claudiatamas/FocusKeeper",
    image: "/focus.png",
  },
  {
    title: "Carnivora",
    description:
      "Website concept for plant lovers — clean design, easy navigation, and an immersive way to explore carnivorous plants.",
    paragraph: "Figma | UX Research | Prototyping",
    link: "https://www.figma.com/design/4JVqXFxV4ocIQj8kTQQ7EV/Carnivora-%E2%80%93-UI-UX-Passion-Project?node-id=0-1&t=GWzCVBlv5DxUMCf2-1",
    image: "/Carnivora.png",
  },
  {
    title: "Therapyi",
    description:
      "Therapyi is a dedicated platform designed to promote mental health awareness and provide essential support for students.",
    paragraph: "PHP | JavaScript | HTML | CSS | MySQL",
    link: "https://github.com/claudiatamas/therapyi",
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
    <div id="work-section" className="py-12 mb-24 mt-12 md:mt-20 md:mb-48">
      <div className="text-center text-[#C59BFF] mb-4 md:mb-16 text-md">PROJECTS</div>

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
                      ? "bg-[rgba(197,155,255,0.2)] text-[#2F363F]  transition-transform duration-300 transform hover:scale-105 cursor-pointer"
                      : "border border-gray-300 text-gray-600  transition-transform duration-300 transform hover:scale-105 cursor-pointer"
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
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-sm px-4 py-2 bg-[rgba(197,155,255,0.2)] hover:bg-[#C59BFF] hover:text-white rounded-2xl transition-colors duration-300 transform hover:scale-105"
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