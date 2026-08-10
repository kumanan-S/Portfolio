import ParticleBackground from "../components/ParticleBackground";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Experience from "../components/Experience";
import Education from "../components/Education";
import Achievements from "../components/Achievements";
import Certificates from "../components/Certificates";
import Testimonials from "../components/Testimonials";
import Blog from "../components/Blog";
import Resume from "../components/Resume";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[#0f172a] text-slate-100 selection:bg-accentCyan/30 selection:text-white">
      {/* Dynamic Canvas Particles */}
      <ParticleBackground />

      {/* Main Layout Elements */}
      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Education />
          <Achievements />
          <Certificates />
          <Resume />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}
