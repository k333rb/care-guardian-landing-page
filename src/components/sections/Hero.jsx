const Hero = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center px-4"
    >
      {/* Background Video with Overlay */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
          style={{
            borderBottomLeftRadius: "30px",
            borderBottomRightRadius: "30px",
          }}
        >
          <source src="/videos/hero_video.mp4" type="video/mp4" />
        </video>
        {/* Dark overlay for better text readability */}
        <div
          className="absolute inset-0 bg-black/40"
          style={{
            borderBottomLeftRadius: "30px",
            borderBottomRightRadius: "30px",
          }}
        ></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-5xl mx-auto pt-20">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-white mb-8 leading-tight">
          Peace of mind for every Filipino family
        </h1>

        <p className="text-xl md:text-2xl text-white mb-12 font-light">
          Smart monitoring. Instant alerts. Safer homes.
        </p>

        <button className="bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-blue-700 transition shadow-2xl inline-flex items-center gap-2">
          Join Today
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>
    </section>
  );
};

export default Hero;
