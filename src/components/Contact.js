import React, { useEffect, useRef, useState } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const formRef = useRef(null);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [emailError, setEmailError] = useState("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove("opacity-0", "translate-y-10");
            entry.target.classList.add("opacity-100", "transition-opacity", "duration-700", "translate-y-0");
          } else {
            entry.target.classList.remove("opacity-100", "translate-y-0");
            entry.target.classList.add("opacity-0", "translate-y-10");
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    if (formRef.current) observer.observe(formRef.current);

    return () => {
      if (formRef.current) observer.unobserve(formRef.current);
    };
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (name === "email") {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      setEmailError(emailPattern.test(value) ? "" : "Please enter a valid email address.");
    }
  };

  const validateForm = () => {
    const { firstName, lastName, email, message } = formData;
    if (!firstName || !lastName || !email || !message) {
      setErrorMessage("All fields are required.");
      return false;
    }
    if (emailError) {
      setErrorMessage(emailError);
      return false;
    }
    setErrorMessage("");
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return; 
    }

    emailjs
      .send("service_509z4xe", "template_rcamxmw", formData, "48CoHkUFPFFbMpm6b")
      .then(
        (response) => {
          console.log("Email sent successfully", response.status, response.text);
          setSuccessMessage("Your message has been sent successfully!");
          setFormData({ firstName: "", lastName: "", email: "", message: "" });
          setEmailError("");
        },
        (error) => {
          console.error("Failed to send email", error);
          setErrorMessage("Failed to send your message. Please try again.");
        }
      );
  };

  return (
    
    <div className="relative min-h-screen flex flex-col items-center justify-center bg-cover bg-center mb-8">
    <h2 className="text-md text-center bg-gradient-to-r from-[#9454ee] to-[#bb8cfc] bg-clip-text text-transparent font-medium mb-12 md:mb-20">CONTACT</h2> 

  {/* Gradient Backgrounds */}
  <div className="absolute top-10 left-10 w-64 h-64 rounded-full bg-gradient-to-r from-[#C59BFF] to-[#FED3FF] opacity-20 blur-3xl"></div>
  <div className="absolute bottom-20 right-20 w-80 h-80 rounded-full bg-gradient-to-r from-[#C59BFF] to-blue-50 opacity-20 blur-3xl"></div>

  {/* Form */}
  <div
    ref={formRef}
    id="contact-section"
    className="relative bg-transparent md:bg-white bg-opacity-90 p-8 md:p-16 rounded-lg shadow-transparent md:shadow-lg max-w-lg w-full opacity-0 translate-y-10"
  >
    <h2 className="text-4xl font-semibold mb-4 text-center text-[#2F363F]">Contact Me</h2>
    <p className="text-lg text-gray-600 mb-8 text-center font-extralight px-6 py-2 ">
      I’m always open to new opportunities or collaborations. Drop me a message!
    </p>
    {successMessage && <p className="text-green-600 text-center">{successMessage}</p>}
    {errorMessage && <p className="text-red-600 text-center">{errorMessage}</p>}

    <form className="space-y-7" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              value={formData.firstName}
              onChange={handleChange}
              className="w-full cursor-pointer font-extralight p-3 border rounded-md focus:ring focus:ring-indigo-300 focus:outline-none"
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleChange}
              className="w-full cursor-pointer p-3 font-extralight border rounded-md focus:ring focus:ring-indigo-300 focus:outline-none"
            />
          </div>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full cursor-pointer p-3 border font-extralight rounded-md focus:ring focus:ring-indigo-300 focus:outline-none"
          />
          {emailError && <p className="text-red-600">{emailError}</p>}
          <textarea
            name="message"
            placeholder="Message"
            rows="4"
            value={formData.message}
            onChange={handleChange}
            className="w-full cursor-pointer p-3 border font-extralight rounded-md focus:ring focus:ring-indigo-300 focus:outline-none"
          ></textarea>
          <button
            type="submit"
            className="w-32 ml-auto flex items-end justify-center rounded-xl py-3 bg-gradient-to-r from-[#9454ee] to-[#bb8cfc] font-light text-white focus:outline-none transition-transform duration-300 transform hover:scale-105 hover:shadow-lg"
          >
            Send message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
