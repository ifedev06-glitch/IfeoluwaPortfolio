const Home = () => {
  return (
    <section className="flex-1 flex items-center justify-center px-1 pt-20">
      <div className="text-white max-w-6xl text-left space-y-6">
        {/* Animated Heading */}
        <h1 className="animate-fadeUp delay-[0ms] duration-[2000ms] ease-out text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold tracking-wide leading-tight">
          MY NAME IS OLADIPO IFEOLUWA.
        </h1>

        {/* Animated Paragraph */}
        <p className="animate-fadeUp delay-[4000ms] duration-[4500ms] ease-out text-base text-gray-300 max-w-5xl mx-auto leading-relaxed text-justify tracking-wide backdrop-blur-sm">
          I'm a fullstack developer. I specialize in both front-end and back-end development. I write
          <span className="text-white font-semibold"> Spring Boot (Java) </span> for backend services and 
          <span className="text-white font-semibold"> React.js </span> for building dynamic front-end interfaces.
          On this website, you can learn more about my background and skills, explore the various projects I've worked on,
          and see how I can help bring your ideas to life.

          Explore the <span className="text-white font-semibold">About</span> page to learn more about my journey, the
          <span className="text-white font-semibold"> Projects</span> page to see my work in action, and the
          <span className="text-white font-semibold"> Contact</span> page to reach out and discuss potential collaborations.

          You can effortlessly navigate through different pages by clicking on the links at the top of the page.
          Thank you for visiting, and enjoy your experience! 😊
        </p>
      </div>
    </section>
  );
};

export default Home;
