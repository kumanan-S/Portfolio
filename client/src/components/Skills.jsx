import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import {
  FaChartBar,
  FaCode,
  FaCodeBranch,
  FaCss3Alt,
  FaDatabase,
  FaDesktop,
  FaExchangeAlt,
  FaFileExcel,
  FaGitAlt,
  FaGithub,
  FaHtml5,
  FaJava,
  FaJs,
  FaLaptopCode,
  FaLeaf,
  FaNodeJs,
  FaPython,
  FaReact,
  FaServer,
  FaWind,
} from "react-icons/fa";
import { portfolioData } from "../data/portfolioData";

// Helper function to map skill names to matching icons
const getSkillIcon = (name) => {
  switch (name.toLowerCase()) {
    case "java":
      return <FaJava className="text-[#f89820]" />;
    case "python":
      return <FaPython className="text-[#3776ab]" />;
    case "javascript":
      return <FaJs className="text-[#f7df1e]" />;
    case "sql":
    case "mysql":
    case "dbms":
      return <FaDatabase className="text-[#00758f]" />;
    case "html":
      return <FaHtml5 className="text-[#e34f26]" />;
    case "css":
      return <FaCss3Alt className="text-[#1572b6]" />;
    case "react.js":
      return <FaReact className="text-[#61dafb]" />;
    case "tailwind css":
      return <FaWind className="text-[#38bdf8]" />;
    case "node.js":
      return <FaNodeJs className="text-[#339933]" />;
    case "express.js":
      return <FaServer className="text-[#ffffff]" />;
    case "mongodb":
      return <FaLeaf className="text-[#47a248]" />;
    case "git":
      return <FaGitAlt className="text-[#f05032]" />;
    case "github":
      return <FaGithub className="text-[#ffffff]" />;
    case "vs code":
      return <FaLaptopCode className="text-[#007acc]" />;
    case "power bi":
      return <FaChartBar className="text-[#f2c811]" />;
    case "ms excel":
      return <FaFileExcel className="text-[#217346]" />;
    case "oop":
      return <FaCode className="text-[#a855f7]" />;
    case "rest apis":
      return <FaExchangeAlt className="text-[#06b6d4]" />;
    case "data structures":
      return <FaCodeBranch className="text-[#3b82f6]" />;
    case "operating systems":
      return <FaDesktop className="text-[#eab308]" />;
    default:
      return <FaCode className="text-slate-400" />;
  }
};

export default function Skills() {
  const { skills } = portfolioData;
  const categories = Object.keys(skills);
  const [activeTab, setActiveTab] = useState(categories[0]);

  return (
    <section
      id="skills"
      className="py-24 relative overflow-hidden bg-gradient-to-b from-[#090d1a] to-[#0f172a]"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.05),transparent_60%)] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl"
          >
            My <span className="text-accentCyan">Skills</span>
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="h-1 bg-accentCyan mx-auto mt-4 rounded-full"
          />
        </div>

        {/* Categories Tab Selector */}
        <div className="flex flex-wrap justify-center gap-2 mb-12 max-w-4xl mx-auto">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveTab(category)}
              className={`px-5 py-2.5 rounded-full font-semibold text-sm tracking-wide transition-all duration-300 border cursor-pointer ${
                activeTab === category
                  ? "bg-gradient-to-r from-primaryBlue to-accentPurple text-white border-transparent shadow-lg shadow-primaryBlue/20"
                  : "bg-slate-900/60 text-slate-400 border-white/5 hover:border-slate-700 hover:text-white"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Skill Card Grid */}
        <div className="max-w-4xl mx-auto min-h-[300px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              {skills[activeTab].map((skill, idx) => (
                <motion.div
                  key={skill.name}
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  className="glass-card p-5 rounded-xl flex items-center gap-4 relative overflow-hidden group hover:border-accentCyan/30"
                >
                  {/* Glowing background hint */}
                  <div className="absolute inset-0 bg-gradient-to-r from-accentCyan/0 to-accentCyan/[0.02] opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

                  {/* Skill Icon */}
                  <div className="w-12 h-12 rounded-lg bg-slate-900/60 flex items-center justify-center text-2xl border border-white/5 shadow-inner">
                    {getSkillIcon(skill.name)}
                  </div>

                  {/* Name and Progress bar */}
                  <div className="flex-1">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-bold text-white tracking-wide text-sm">
                        {skill.name}
                      </span>
                      <span className="text-xs font-mono font-bold text-accentCyan">
                        {skill.level}%
                      </span>
                    </div>

                    <div className="w-full h-2 bg-slate-800/80 rounded-full overflow-hidden border border-slate-700/50">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="h-full bg-gradient-to-r from-primaryBlue to-accentCyan"
                      />
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
