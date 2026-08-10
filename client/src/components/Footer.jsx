import { useEffect, useState } from "react";
import { FaAngleUp, FaEnvelope, FaGithub, FaLinkedinIn } from "react-icons/fa";
import { portfolioData } from "../data/portfolioData";

const quickLinks = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "education", label: "Education" },
  { id: "achievements", label: "Achievements" },
  { id: "certificates", label: "Certificates" },
  { id: "resume", label: "Resume" },
  { id: "contact", label: "Contact" },
];

export default function Footer() {
  const { personalInfo } = portfolioData;
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleLinkClick = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <footer className="relative bg-[#090d1a] border-t border-slate-900/60 py-12 text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center space-y-8">
        
        {/* Profile Identity */}
        <div className="text-center space-y-2">
          <h2 className="text-2xl font-extrabold text-white tracking-wider">
            {personalInfo.name}
          </h2>
          <p className="text-xs uppercase font-mono font-bold text-accentCyan tracking-widest">
            {personalInfo.title}
          </p>
        </div>

        {/* Quick links grid */}
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-3 max-w-2xl text-sm font-semibold">
          {quickLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleLinkClick(link.id)}
              className="hover:text-white transition-colors cursor-pointer"
            >
              {link.label}
            </button>
          ))}
        </div>

        {/* Social connections */}
        <div className="flex gap-4">
          {[
            { icon: <FaGithub />, link: personalInfo.github, hover: "hover:text-white" },
            { icon: <FaLinkedinIn />, link: personalInfo.linkedin, hover: "hover:text-primaryBlue" },
            { icon: <FaEnvelope />, link: "https://mail.google.com/mail/?view=cm&fs=1&to=skumanan9@gmail.com", hover: "hover:text-accentCyan" },
          ].map((social, idx) => (
            <a
              key={idx}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`w-9 h-9 rounded-full bg-slate-900 flex items-center justify-center border border-white/5 ${social.hover} transition-all duration-300 text-base`}
            >
              {social.icon}
            </a>
          ))}
        </div>

        {/* Divider */}
        <div className="w-full max-w-3xl h-[1px] bg-slate-850" />

        {/* Copyright */}
        <div className="text-center text-xs text-slate-500 font-medium">
          © {new Date().getFullYear()} Kumanan S. All rights reserved. Designed with React & Tailwind.
        </div>
      </div>

      {/* Back to top float button */}
      {showScrollTop && (
        <button
          onClick={handleScrollToTop}
          className="fixed bottom-6 right-6 z-40 w-11 h-11 rounded-full bg-gradient-to-tr from-primaryBlue to-accentCyan text-white flex items-center justify-center text-lg shadow-lg hover:scale-110 active:scale-95 transition-all cursor-pointer border border-white/10 animate-float"
          aria-label="Back to top"
        >
          <FaAngleUp />
        </button>
      )}
    </footer>
  );
}
