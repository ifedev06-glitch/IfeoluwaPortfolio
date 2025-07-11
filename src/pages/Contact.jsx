import React from "react";

const Contact = () => {
  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center px-4 sm:px-8 lg:px-16 py-16 sm:py-24"
    >
      <div className="w-full max-w-5xl rounded-xl text-white animate-fadeUp duration-[2000ms] ease-out">
        {/* Header */}
        <h1 className="text-3xl sm:text-4xl font-bold mb-6 border-b-2 border-blue-500 pb-2 w-fit">
          Contact Me
        </h1>

        {/* Intro paragraph */}
        <p className="text-gray-300 mb-5 leading-relaxed text-base sm:text-lg text-left">
          Get in touch by filling out this short form.                        
        </p>

        {/* Contact form */}
        <form className="w-full space-y-6">
          {/* Name Field */}
          <div className="flex flex-col">
            <input
              type="text"
              id="name"
              placeholder="Your name"
              className="px-4 py-3 rounded-lg bg-transparent border-2 border-white text-white placeholder-gray-300 focus:outline-none focus:ring-1 focus:ring-white"
            />
          </div>

          {/* Email Field */}
          <div className="flex flex-col">
            <input
              type="email"
              id="email"
              placeholder="you@example.com"
              className="px-4 py-3 rounded-lg bg-transparent border-2 border-white text-white placeholder-gray-300 focus:outline-none focus:ring-1 focus:ring-white"
            />
          </div>

          {/* Message Field */}
          <div className="flex flex-col">
            <textarea
              id="message"
              rows="5"
              placeholder="Write your message..."
              className="px-4 py-3 rounded-lg bg-transparent border-2 border-white text-white placeholder-gray-300 focus:outline-none focus:ring-1 focus:ring-white resize-none sm:resize-y"
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="flex">
            <button
              type="submit"
              className="bg-white text-black hover:bg-transparent hover:text-white font-semibold px-12 py-4 rounded-lg transition-all duration-300 border-2 border-white"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
