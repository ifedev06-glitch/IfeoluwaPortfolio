import React from 'react'

const projects = [
  {
    title: "Project One",
    image: "/Screenshot 2025-07-11 201119.png",
    description: "A fullstack Banking application using (Spring Boot and React).",
  },
  {
    title: "Project Two",
    image: "/Screenshot 2025-07-11 201247.png",
    description: "A beautiful portfolio site built with (ReactJs and TailwindCSS).",
  },
  {
    title: "Project Three",
    image: "project3.png",
    description: "A SpringBoot payment integration project using Paystack API (SpringBoot).",
  },
   {
    title: "Project Four",
    image: "project4.png",
    description: "A SpringBoot payment integration project using Paystack API (SpringBoot).",
  },
   {
    title: "Project Five",
    image: "project4.png",
    description: "A SpringBoot payment integration project using Flutterwave API (SpringBoot).",
  },
   {
    title: "Project six",
    image: "project4.png",
    description: "A SpringBoot payment integration project using Paypal API (SpringBoot).",
  },
  
];


const Projects = () => {
  return (
     <section className="min-h-screen px-8 py-16  text-white animate-fadeUp duration-[3000ms] ease-out">
      <h2 className="text-3xl font-bold mb-10 border-b-2 border-blue-500 w-fit">Projects</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div key={index} className="bg-white/10 p-4 rounded-lg shadow-md hover:shadow-xl transition-all duration-300">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-52 object-cover rounded-md mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
            <p className="text-gray-300">{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects
