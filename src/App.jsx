import Navbar from "./components/Navbar";
import Hero from "./components/sections/Hero";
import Challenges from "./components/sections/Challenges";
import Solution from "./components/sections/Solution";
import Setup from "./components/sections/Setup";
import EndUser from "./components/sections/EndUser";
import Edge from "./components/sections/Edge";
import Pricing from "./components/sections/Pricing";
import Mission from "./components/sections/Mission";
import Contacts from "./components/sections/Contacts";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Challenges />
        <Solution />
        <Setup />
        <EndUser />
        <Edge />
        <Pricing />
        <Mission />
        <Contacts />
      </main>
      <Footer />
    </div>
  );
}

export default App;
