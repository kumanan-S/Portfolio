import { motion } from "framer-motion";
import { FaBriefcase } from "react-icons/fa";
import { portfolioData } from "../data/portfolioData";

export default function Experience() {
  const { experience } = portfolioData;

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 100 } },
  };

  return (
    <section
      id="experience"
      className="py-24 relative overflow-hidden bg-gradient-to-b from-[#0f172a] to-[#090d1a]"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl"
          >
            Internship <span className="text-accentCyan">Experience</span>
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="h-1 bg-accentCyan mx-auto mt-4 rounded-full"
          />
        </div>

        {/* Timeline container */}
        <div className="relative border-l border-slate-800/80 md:border-l-0 max-w-4xl mx-auto pl-6 md:pl-0">
          
          {/* Vertical central timeline line for larger screens */}
          <div className="absolute left-6 top-0 bottom-0 w-[1px] bg-slate-850 md:left-1/2 md:transform md:-translate-x-1/2 pointer-events-none" />

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-12"
          >
            {experience.map((exp, idx) => {
              const isEven = idx % 2 === 0;

              return (
                <div
                  key={idx}
                  className={`relative flex flex-col md:flex-row ${
                    isEven ? "md:justify-start" : "md:justify-end"
                  } items-start w-full`}
                >
                  {/* Timeline Badge Node */}
                  <div className="absolute -left-[35px] md:left-1/2 md:-translate-x-1/2 top-1.5 z-20 w-8 h-8 rounded-full bg-slate-900 border-2 border-accentCyan flex items-center justify-center text-accentCyan text-sm shadow-lg shadow-accentCyan/20">
                    <FaBriefcase />
                  </div>

                  {/* Card Container */}
                  <motion.div
                    variants={cardVariants}
                    className={`w-full md:w-[45%] glass-card p-6 rounded-xl border border-white/5 relative group hover:border-accentCyan/20 transition-all ${
                      isEven ? "md:text-right" : "md:text-left"
                    }`}
                  >
                    {/* Node Hover Glow */}
                    <div className="absolute inset-0 bg-gradient-to-r from-accentCyan/0 to-accentCyan/[0.01] opacity-0 group-hover:opacity-100 transition-opacity rounded-xl pointer-events-none" />

                    <span className="text-xs font-mono font-bold text-accentCyan tracking-wider uppercase block mb-1">
                      {exp.duration}
                    </span>
                    <h3 className="text-xl font-bold text-white tracking-wide">
                      {exp.role}
                    </h3>
                    <h4 className="text-sm font-semibold text-primaryBlue mt-1">
                      {exp.company}
                    </h4>

                    {/* Tech Badges */}
                    <div className={`flex flex-wrap gap-1.5 mt-3 ${isEven ? "md:justify-end" : "md:justify-start"}`}>
                      {exp.tech.map((t) => (
                        <span
                          key={t}
                          className="px-2 py-0.5 text-[10px] font-mono font-bold rounded bg-slate-900/60 text-slate-350 border border-white/5"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    {/* Description bullet list */}
                    <ul className={`mt-4 space-y-2 text-sm text-slate-400 font-medium ${
                      isEven ? "md:list-none" : "list-disc pl-4"
                    }`}>
                      {exp.description.map((bullet, i) => (
                        <li key={i} className={isEven ? "md:pr-0" : ""}>
                          {isEven && <span className="hidden md:inline text-accentCyan mr-1.5">•</span>}
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                </div>
              );
            })}
          </motion.div>
        </div>

        {/* FUTURE EXPERIENCES NOTE FOR THE USER */}
        {/* 
            To add new experiences in the future:
            1. Open 'client/src/data/portfolioData.js'
            2. Find the 'experience' array
            3. Add a new object with the following shape:
               {
                 company: "Company Name",
                 duration: "Employment Duration",
                 role: "Job Title/Role",
                 tech: ["Tech A", "Tech B", ...],
                 description: [
                   "Responsibility or achievement 1",
                   "Responsibility or achievement 2"
                 ]
               }
        */}
      </div>
    </section>
  );
}
