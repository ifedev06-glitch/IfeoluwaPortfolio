import React from 'react';

const About = () => {
  return (
    <section className="flex-1 flex items-center justify-center px-4 sm:px-8 md:px-12 lg:px-20 py-16 relative z-10">
      <div className="animate-fadeUp duration-[2500ms] ease-out text-white max-w-4xl space-y-6 mx-auto text-white">
        <h2 className="text-3xl sm:text-4xl font-bold text-white border-b-2 border-blue-500 pb-2 w-fit">
          About Me
        </h2>
        <p className="text-base leading-relaxed text-gray-300 text-justify tracking-wide">
          Hello! I’m <span className="text-white font-semibold">Ifeoluwa Oladipo</span>, a passionate and detail-oriented 
          Fullstack Developer with four years of experience building robust and scalable
           web applications. My expertise lies in backend development, particularly using
            <span className="text-white font-semibold"> Spring Boot (Java)</span>,
             while also being skilled in frontend tools like 
             <span className="text-white font-semibold"> React.js </span>
              and <span className="text-white font-semibold"> TailwindCSS </span> 
              — allowing me to develop seamless, end-to-end solutions.
        </p>
                    <p className="text-base leading-relaxed text-gray-300 text-justify tracking-wide">
            I'm currently a <span className="text-white font-semibold">Backend Engineer at Ideation House</span> — 
            a fintech company that provides financial solutions to businesses, enabling the seamless movement of funds across the globe. 
            At Ideation House, I work primarily with <span className="text-white font-semibold">Spring Boot (Java) </span> 
             to build and maintain secure, scalable backend systems. I'm responsible for  
             <span className="text-white font-semibold"> securing</span>, 
            <span className="text-white font-semibold"> maintaining</span>, and 
            <span className="text-white font-semibold"> integrating new software solutions </span> 
            to improve the company’s infrastructure and overall efficiency.
            </p>
        <p className="text-base leading-relaxed text-gray-300 text-justify tracking-wide">
          I hold a <span className="text-white font-semibold">Bachelor of Engineering in Mechanical Engineering</span> 
          from <span className="text-white font-semibold">Landmark University</span>, 
          a background that sharpens my analytical and structured approach to software development. Outside of tech,
           I’m a <span className="text-white font-semibold"> skilled Bass guitarist</span> and an 
           <span className="text-white font-semibold">entrepreneur</span>, actively managing multiple 
           side businesses that reflect my passion for innovation and leadership.
        </p>
        <p className="text-base leading-relaxed text-gray-300 text-justify tracking-wide">
          Beyond my technical skills, I thrive in Agile environments, use Git/GitHub for version control, and value clean,
           maintainable code. I'm always open to meaningful collaboration, exciting challenges, and growth
            opportunities. Feel free to explore my projects and get in touch!
        </p>
      </div>
    </section>
  );
};

export default About;
