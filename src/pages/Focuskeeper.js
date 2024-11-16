import React from "react";
import NavbarProjects from "../components/NavbarProjects";
import Footer from "../components/Footer";

const Focuskeeper = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <NavbarProjects />

      {/* Overview Section */}
      <section className="py-12 px-4 md:px-20 mt-56 flex flex-col md:flex-row items-center">
        <div className="w-full md:w-1/2">
          <img src="/focus.png" alt="FocusKeeper Overview" className="transition-transform duration-300 transform hover:scale-105" />
        </div>
        <div className="w-full md:w-1/2 md:pl-10">
          <h2 className="text-5xl font-semibold text-[#2F363F] mb-4 transition-transform duration-300 transform hover:scale-105">
            FocusKeeper
          </h2>
          <p className="text-2xl  text-[#2F363F] mb-4 transition-transform duration-300 transform hover:scale-105">
            FocusKeeper is a revolutionary application designed to detect signs
            of fatigue in real-time. It empowers users to make safer choices,
            especially while driving or engaging in critical tasks.
          </p>
        </div>
      </section>

      {/* Driving Session */}

      <section className="relative border-2 mx-10 md:mx-20 border-[#76787b] rounded-xl py-12 max-w-3xl mt-24 flex flex-col md:flex-row-reverse items-center overflow-hidden">
  {/* Gradient Circle */}
  <div className="absolute inset-0 flex justify-left items-center">
    <div className="w-80 h-80 rounded-full bg-gradient-to-r from-blue-600 to-teal-400 opacity-10 blur-3xl"></div>
  </div>

  <div className="w-auto md:w-1/2 flex justify-center z-10">
    <img src="/driving.png" alt="Daily Stats" className="h-96 transition-transform duration-300 transform hover:scale-105" />
  </div>
  
  <div className="w-full md:w-1/2 ml-12 z-10">
    <h2 className="text-4xl font-semibold text-[#2F363F] mb-4">Driving Session</h2>
    <p className="text-2xl text-[#2F363F] mb-4">
      The user starts by taking a selfie with their device’s camera, providing a reference for alertness. After assessment, users are directed to a real-time video session where they are notified of their alertness level.
    </p>
  </div>
</section>

      {/* Daily Stats Section */}
      <section className="py-12 px-4 md:px-20 mt-12 flex flex-col md:flex-row-reverse items-center">
        <div className="w-full md:w-1/2">
          <img
            src="/daily-stats.png"
            alt="Daily Stats"
            className="rounded-lg shadow-lg"
          />
        </div>
        <div className="w-full md:w-1/2 md:pr-10">
          <h2 className="text-3xl font-semibold text-[#2F363F] mb-4">
            Daily Stats
          </h2>
          <p>
            Our app provides daily statistics that help users track their
            fatigue levels, study patterns, and overall performance throughout
            the day.
          </p>
        </div>
      </section>

      {/* Feedback Section */}
      <section className="py-12 px-4 md:px-20 flex flex-col md:flex-row items-center">
        <div className="w-full md:w-1/2">
          <img
            src="/feedback.png"
            alt="User Feedback"
            className="rounded-lg shadow-lg"
          />
        </div>
        <div className="w-full md:w-1/2 md:pl-10">
          <h2 className="text-3xl font-semibold text-[#2F363F] mb-4">
            User Feedback
          </h2>
          <p>
            Users can provide feedback on their experience, allowing us to
            continuously improve the app's functionality and user experience.
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 px-4 md:px-20 flex flex-col md:flex-row-reverse items-center">
        <div className="w-full md:w-1/2">
          <img src="/faq.png" alt="FAQ" className="rounded-lg shadow-lg" />
        </div>
        <div className="w-full md:w-1/2 md:pr-10">
          <h2 className="text-3xl font-semibold text-[#2F363F] mb-4">FAQ</h2>
          <p>
            Find answers to frequently asked questions about FocusKeeper and
            learn how to make the most out of your experience.
          </p>
        </div>
      </section>

      {/* Admin Section */}
      <section className="py-12 px-4 md:px-20 flex flex-col md:flex-row items-center">
        <div className="w-full md:w-1/2">
          <img
            src="/admin.png"
            alt="Admin Panel"
            className="rounded-lg shadow-lg"
          />
        </div>
        <div className="w-full md:w-1/2 md:pl-10">
          <h2 className="text-3xl font-semibold text-[#2F363F] mb-4">
            Admin Panel
          </h2>
          <p>
            An intuitive admin panel allows for easy management of user data,
            feedback, and application settings to ensure optimal performance.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Focuskeeper;
