import { motion } from "framer-motion";
import { FaGraduationCap } from "react-icons/fa";
import { portfolioData } from "../data/portfolioData";

export default function Education() {
  const { education } = portfolioData;

  return (
    <section
      id="education"
      className="py-24 relative overflow-hidden bg-gradient-to-b from-[#090d1a] to-[#0f172a]"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(168,85,247,0.03),transparent_50%)] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl"
          >
            My <span className="text-accentCyan">Education</span>
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="h-1 bg-accentCyan mx-auto mt-4 rounded-full"
          />
        </div>

        {/* Education Timeline */}
        <div className="relative border-l border-slate-800/80 pl-8 ml-4 sm:ml-6 max-w-2xl mx-auto">
          {education.map((edu, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="relative mb-12 last:mb-0 group"
            >
              {/* Timeline graduation cap node */}
              <div className="absolute -left-[45px] top-0.5 z-20 w-8 h-8 rounded-full bg-slate-900 border-2 border-primaryBlue flex items-center justify-center text-primaryBlue text-sm group-hover:border-accentCyan group-hover:text-accentCyan transition-colors shadow-lg">
                <FaGraduationCap />
              </div>

              {/* Card content */}
              <div className="glass-card p-6 rounded-xl border border-white/5 group-hover:border-primaryBlue/20 transition-all duration-300">
                <span className="text-xs font-mono font-bold text-accentCyan tracking-wider uppercase block mb-1">
                  {edu.year}
                </span>
                
                <h3 className="text-xl font-bold text-white tracking-wide">
                  {edu.degree}
                </h3>
                
                <p className="text-slate-300 font-semibold mt-1">
                  {edu.institution}
                </p>
                
                <p className="text-sm text-slate-500 font-medium">
                  {edu.university}
                </p>

                {/* Score badge */}
                <div className="mt-4 inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900 border border-white/5 font-mono text-xs font-bold text-emerald-400">
                  <span>Score:</span>
                  <span>{edu.gpa}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
