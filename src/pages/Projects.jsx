// src/pages/Projects.jsx
import React from 'react';
import { FaGithub } from 'react-icons/fa';

const projects = [
  {
    title: "FLEXPAY-FRONTEND",
    image: "/Screenshot 2025-07-11 201119.png",
    description: "A fullstack Banking application using (Spring Boot and React).",
    githubLink: "https://github.com/ifedev06-glitch/FLEXPAYFRONTEND",
  },
  {
    title: "MY PORTFOLIO",
    image: "/Screenshot 2025-07-11 201247.png",
    description: "A beautiful portfolio site built with (ReactJs and TailwindCSS).",
    githubLink: "https://github.com/ifedev06-glitch/IfeoluwaPortfolio",
  },
  {
    title: "FLEXPAY-BACKEND",
    image: "/flexpayBackend.png",
    description: "A Bank app Backend written in JAVA(SpringBoot).",
    githubLink: "https://github.com/ifedev06-glitch/FLEXPAY-BACKEND",
  },
  {
    title: "PAYSTACK INTEGRATION",
    image: "/project4.png",
    description: "A SpringBoot payment integration project using Paystack API.",
    githubLink: "https://github.com/ifedev06-glitch/PaystackIntegration",
  },
  {
    title: "FLUTTERWAVE-INTEGRATION",
    image: "/project3.png",
    description: "A SpringBoot payment integration project using Flutterwave API.",
    githubLink: "https://github.com/ifedev06-glitch/FlutterWave-Integration",
  },
  {
    title: "PAYPAL-INTEGRATION",
    image: "/project3.png",
    description: "A SpringBoot payment integration project using PayPal API.",
    githubLink: "https://github.com/ifedev06-glitch/Paypal-Integration",
  },
];

const Projects = () => {
  return (
    <section className="min-h-screen px-4 sm:px-6 lg:px-8 py-16 text-white animate-fadeUp duration-[3000ms] ease-out">
      <h2 className="text-3xl font-bold mb-10 border-b-2 border-blue-500 w-fit">Projects</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white/10 p-4 rounded-lg shadow-md hover:shadow-xl transition-all duration-300"
          >
            {/* Image Container */}
            <div className="relative group">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-52 object-cover rounded-md"
              />

              {/* Overlay + GitHub Icon */}
              <div className="absolute inset-0 bg-black/50 rounded-md opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white text-3xl"
                >
                  <FaGithub />
                </a>
              </div>
            </div>

            {/* Text Content */}
            <h3 className="text-xl font-semibold mt-4 mb-2">{project.title}</h3>
            <p className="text-gray-300">{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
