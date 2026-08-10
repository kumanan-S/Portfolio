import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { FaEnvelope, FaGithub, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import { HiDownload } from "react-icons/hi";
import { portfolioData } from "../data/portfolioData";

export default function Hero() {
  const { personalInfo } = portfolioData;
  const [titleIndex, setTitleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timer;
    const currentTitle = personalInfo.titles[titleIndex];
    
    const type = () => {
      if (!isDeleting) {
        setDisplayText(currentTitle.substring(0, displayText.length + 1));
        if (displayText === currentTitle) {
          timer = setTimeout(() => setIsDeleting(true), 2000);
        } else {
          timer = setTimeout(type, 100);
        }
      } else {
        setDisplayText(currentTitle.substring(0, displayText.length - 1));
        if (displayText === "") {
          setIsDeleting(false);
          setTitleIndex((prev) => (prev + 1) % personalInfo.titles.length);
        } else {
          timer = setTimeout(type, 50);
        }
      }
    };

    if (displayText !== currentTitle || isDeleting) {
      timer = setTimeout(type, isDeleting ? 50 : 100);
    } else {
      timer = setTimeout(() => setIsDeleting(true), 2000);
    }

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, titleIndex, personalInfo.titles]);

  const handleScrollToContact = () => {
    const contactSec = document.getElementById("contact");
    if (contactSec) {
      window.scrollTo({
        top: contactSec.offsetTop - 80,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-12 overflow-hidden bg-gradient-to-b from-[#0f172a] via-[#090d1a] to-[#0f172a]"
    >
      {/* Background Blobs */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primaryBlue/15 rounded-full filter blur-3xl animate-float-delayed pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accentPurple/15 rounded-full filter blur-3xl animate-float pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column: Text Content */}
        <div className="lg:col-span-7 text-left space-y-6 order-2 lg:order-1 flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h4 className="text-accentCyan font-mono font-bold tracking-widest text-lg">
              Hi, I'm
            </h4>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight"
          >
            {personalInfo.name}
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-2xl sm:text-3xl font-bold font-sans text-slate-300 flex items-center h-12"
          >
            <span className="mr-2">Professional</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primaryBlue via-accentPurple to-accentCyan border-r-2 border-accentCyan pr-1 animate-pulse">
              {displayText}
            </span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-lg text-slate-450 leading-relaxed max-w-2xl text-slate-400 font-medium"
          >
            {personalInfo.subtitle}
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-wrap gap-4 pt-4"
          >
            <a
              href={personalInfo.resumeUrl}
              download
              className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primaryBlue to-accentPurple text-white font-semibold rounded-full hover:scale-105 active:scale-95 transition-all shadow-lg shadow-primaryBlue/20 border border-white/10"
            >
              <HiDownload className="text-lg" />
              Download Resume
            </a>
            <a
              href={personalInfo.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-emerald-650 hover:bg-emerald-600 bg-emerald-600 text-white font-semibold rounded-full hover:scale-105 active:scale-95 transition-all shadow-lg shadow-emerald-650/20 border border-white/5"
            >
              <FaWhatsapp className="text-lg text-emerald-300" />
              Contact Me (WhatsApp)
            </a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex items-center gap-4 pt-6"
          >
            <span className="text-sm font-semibold tracking-wider font-mono text-slate-500 uppercase">
              Connect:
            </span>
            <div className="flex gap-3">
              {[
                { icon: <FaGithub />, link: personalInfo.github, color: "hover:text-white" },
                { icon: <FaLinkedinIn />, link: personalInfo.linkedin, color: "hover:text-primaryBlue" },
                { icon: <FaEnvelope />, link: "https://mail.google.com/mail/?view=cm&fs=1&to=skumanan9@gmail.com", color: "hover:text-accentCyan" },
              ].map((social, idx) => (
                <a
                  key={idx}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-10 h-10 rounded-full glass-card flex items-center justify-center text-slate-400 ${social.color} hover:scale-110 hover:border-slate-400 transition-all duration-300`}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Right Column: Visual Avatar */}
        <div className="lg:col-span-5 order-1 lg:order-2 flex justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, type: "spring", bounce: 0.25 }}
            className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-[380px] lg:h-[380px] flex items-center justify-center"
          >
            {/* Animated outer ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 rounded-full border-2 border-dashed border-primaryBlue/35 pointer-events-none"
            />
            
            {/* Background glowing circle */}
            <div className="absolute inset-4 rounded-full bg-gradient-to-tr from-primaryBlue via-accentPurple to-accentCyan opacity-20 filter blur-xl animate-pulse-slow" />
            
            {/* Profile Image */}
            <div className="w-[85%] h-[85%] rounded-full glass-card overflow-hidden flex items-center justify-center border-2 border-white/10 relative">
              <img
                src={personalInfo.profileImage}
                alt={personalInfo.name}
                className="w-full h-full object-cover object-center animate-float"
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        onClick={handleScrollToContact}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center cursor-pointer z-10 text-slate-500 hover:text-slate-350 transition-colors"
      >
        <span className="text-xs tracking-widest font-mono mb-2 uppercase">Scroll Down</span>
        <div className="w-6 h-10 border-2 border-slate-600 rounded-full flex justify-center p-1">
          <div className="w-1.5 h-3 bg-accentCyan rounded-full" />
        </div>
      </motion.div>
    </section>
  );
}
