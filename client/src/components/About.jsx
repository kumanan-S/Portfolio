import { motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";
import { portfolioData } from "../data/portfolioData";

export default function About() {
  const { personalInfo } = portfolioData;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } },
  };

  return (
    <section
      id="about"
      className="py-24 relative overflow-hidden bg-gradient-to-b from-[#0f172a] to-[#090d1a]"
    >
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
            About <span className="text-accentCyan">Me</span>
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="h-1 bg-accentCyan mx-auto mt-4 rounded-full"
          />
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"
        >
          {/* Left: Illustration */}
          <motion.div variants={itemVariants} className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md glass-card rounded-2xl p-6 border border-white/5 shadow-2xl">
              {/* Decorative light reflection */}
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-accentPurple/10 rounded-full filter blur-2xl pointer-events-none" />
              
              {/* Premium Workspace SVG */}
            
              <svg 
                viewBox="0 0 200 160"
                className="w-full h-auto text-slate-350 fill-current"
              >
                <image href="/profile2.png" x="0" y="0" width="200" height="160" preserveAspectRatio="xMidYMid slice" />
              </svg>
            </div>
          </motion.div>

          {/* Right: Bio & Interests */}
          <motion.div variants={itemVariants} className="lg:col-span-7 space-y-6 text-left">
            <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-wide">
              Who is <span className="text-primaryBlue">Kumanan S</span>?
            </h3>
            
            <div className="space-y-4 text-slate-350 text-base leading-relaxed text-slate-400 font-medium">
              {personalInfo.aboutText.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>

            <div className="pt-4 border-t border-slate-800">
              <h4 className="text-lg font-semibold text-white mb-4 tracking-wide uppercase font-mono">
                My Interests Include:
              </h4>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {personalInfo.interests.map((interest, idx) => (
                  <motion.div
                    key={idx}
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-3 p-3 rounded-lg bg-slate-850 border border-white/5 hover:border-accentCyan/20 hover:bg-slate-800/50 transition-all duration-300"
                  >
                    <FaCheckCircle className="text-accentCyan shrink-0 text-lg" />
                    <span className="font-semibold text-slate-300 text-sm tracking-wide">
                      {interest}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
