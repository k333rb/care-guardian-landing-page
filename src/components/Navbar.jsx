const Navbar = () => {
  const scrollToSection = (e, targetId) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <nav className="fixed top-8 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-6xl">
      <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-6 py-4 shadow-lg">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <img
              href="#hero"
              onClick={(e) => scrollToSection(e, "hero")}
              src="/src/assets/images/careguardianlogo.png"
              alt="Care Guardian Logo"
              className="h-10 w-auto"
            />
          </div>

          {/* Nav Links */}
          <div className="hidden md:flex items-center gap-8">
            <a
              href="#solution"
              onClick={(e) => scrollToSection(e, "solution")}
              className="text-sm font-medium hover:opacity-80 transition cursor-pointer"
              style={{ color: "#0047AB" }}
            >
              FEATURES
            </a>
            <a
              href="#how-it-works"
              onClick={(e) => scrollToSection(e, "how-it-works")}
              className="text-sm font-medium hover:opacity-80 transition cursor-pointer"
              style={{ color: "#0047AB" }}
            >
              HOW IT WORKS
            </a>
            <a
              href="#pricing"
              onClick={(e) => scrollToSection(e, "pricing")}
              className="text-sm font-medium hover:opacity-80 transition cursor-pointer"
              style={{ color: "#0047AB" }}
            >
              PRICING
            </a>
            <a
              href="#mission"
              onClick={(e) => scrollToSection(e, "mission")}
              className="text-sm font-medium hover:opacity-80 transition cursor-pointer"
              style={{ color: "#0047AB" }}
            >
              IMPACT
            </a>
          </div>

          {/* CTA Button */}
          <button className="bg-blue-600 text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-blue-700 transition shadow-lg">
            Request a Demo
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
