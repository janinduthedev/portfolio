import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import AboutServices from "./components/AboutServices";
import Footer from "./components/Footer";
import InteractiveSkills from "./components/InteractiveSkills";

function App() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-blue-500/30">
      <Navbar />
      <Hero />
      <InteractiveSkills />
      <Projects />
      <AboutServices />
      <Footer />
    </div>
  );
}

export default App;
