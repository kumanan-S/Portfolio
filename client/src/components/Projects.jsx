import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { FaChevronDown, FaChevronUp, FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { portfolioData } from "../data/portfolioData";

export default function Projects() {
  const { projects } = portfolioData;
  const [filter, setFilter] = useState("All");
  const [expandedCards, setExpandedCards] = useState({});

  const categories = ["All", "Frontend", "Backend", "Full Stack"];

  const filteredProjects = filter === "All"
    ? projects
    : projects.filter((project) => project.category === filter);

  const toggleExpand = (id) => {
    setExpandedCards((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <section
      id="projects"
      className="py-24 relative overflow-hidden bg-[#0f172a]"
    >
      <div className="absolute top-10 right-10 w-96 h-96 bg-accentCyan/5 rounded-full filter blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-accentPurple/5 rounded-full filter blur-3xl pointer-events-none" />

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
            Featured <span className="text-accentCyan">Projects</span>
          </motion.h2>
          <p className="text-slate-400 mt-2 font-medium tracking-wide">
            A showcase of my full-stack expertise, databases, and ML integration.
          </p>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="h-1 bg-accentCyan mx-auto mt-4 rounded-full"
          />
        </div>

        {/* Filter Controls */}
        <div className="flex justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 rounded-lg text-sm font-semibold tracking-wide border transition-all cursor-pointer ${
                filter === cat
                  ? "bg-accentCyan/15 text-accentCyan border-accentCyan/30 shadow-md shadow-accentCyan/5"
                  : "bg-slate-900/60 text-slate-400 border-white/5 hover:border-slate-800 hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-start"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                layout
                key={project.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="glass-card rounded-2xl overflow-hidden border border-white/5 flex flex-col hover:border-primaryBlue/20 transition-all duration-300"
              >
                {/* Visual Project Header (Styled Placeholder) */}
                <div className="relative h-48 bg-gradient-to-tr from-slate-900 to-[#1e293b] flex items-center justify-center p-4 overflow-hidden border-b border-white/5">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(59,130,246,0.1),transparent_70%)] pointer-events-none" />
                  
                  <div className="text-center z-10">
                    <span className="text-xs uppercase font-mono font-bold tracking-widest text-slate-500 block mb-1">
                      {project.category}
                    </span>
                    <h3 className="text-xl font-extrabold tracking-tight text-white px-2">
                      {project.name}
                    </h3>
                  </div>

                  {/* Aesthetic tech decorations in image area */}
                  <div className="absolute bottom-2 right-3 font-mono text-[9px] text-slate-700 select-none">
                    0{project.id} // SECURE_PORTFOLIO
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div className="space-y-4">
                    {/* Technology tags */}
                    <div className="flex flex-wrap gap-1.5">
                      {project.tech.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-0.5 text-[11px] font-mono font-bold rounded bg-slate-900/80 text-primaryBlue border border-primaryBlue/10"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <p className="text-sm text-slate-350 text-slate-400 font-medium leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Expandable details (Features & Challenges) */}
                  <div className="mt-4">
                    <button
                      onClick={() => toggleExpand(project.id)}
                      className="flex items-center gap-1.5 text-xs font-bold text-accentCyan hover:text-white transition-colors cursor-pointer"
                    >
                      {expandedCards[project.id] ? (
                        <>
                          Hide Details <FaChevronUp />
                        </>
                      ) : (
                        <>
                          View Features & Challenges <FaChevronDown />
                        </>
                      )}
                    </button>

                    <AnimatePresence>
                      {expandedCards[project.id] && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden mt-3 text-xs text-slate-350 border-t border-slate-800 pt-3 space-y-3"
                        >
                          <div>
                            <h4 className="font-bold text-white mb-1">Key Features:</h4>
                            <ul className="list-disc pl-4 space-y-1 text-slate-400 font-medium">
                              {project.features.map((feat, i) => (
                                <li key={i}>{feat}</li>
                              ))}
                            </ul>
                          </div>

                          <div>
                            <h4 className="font-bold text-white mb-1">Challenge Solved:</h4>
                            <p className="text-slate-400 font-medium leading-relaxed">
                              {project.challenge}
                            </p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3 pt-6 mt-4 border-t border-slate-800/80">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-slate-900 border border-white/10 hover:border-white/20 text-slate-300 hover:text-white font-semibold text-xs rounded-lg transition-all"
                    >
                      <FaGithub className="text-sm" />
                      Code
                    </a>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-primaryBlue to-accentPurple text-white font-semibold text-xs rounded-lg hover:scale-[1.03] transition-all"
                    >
                      <FaExternalLinkAlt className="text-xs" />
                      Live Demo
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* FUTURE PROJECTS NOTE FOR THE USER */}
        {/* 
            To add new projects in the future:
            1. Open 'client/src/data/portfolioData.js'
            2. Find the 'projects' array
            3. Add a new object with the following shape:
               {
                 id: 4,
                 name: "Your Project Name",
                 category: "Frontend" | "Backend" | "Full Stack",
                 image: "/path-to-image.png",
                 tech: ["React", "CSS", ...],
                 description: "Short project summary.",
                 features: ["Feature A", "Feature B"],
                 challenge: "Description of technical challenge resolved.",
                 github: "Repository URL",
                 demo: "Live deployment URL"
               }
        */}
      </div>
    </section>
  );
}
