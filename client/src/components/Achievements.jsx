import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { FaFileInvoice, FaRegFilePdf, FaTimes } from "react-icons/fa";
import { portfolioData } from "../data/portfolioData";

export default function Achievements() {
  const { achievements } = portfolioData;
  const [selectedPaper, setSelectedPaper] = useState(null);

  return (
    <section
      id="achievements"
      className="py-24 relative overflow-hidden bg-gradient-to-b from-[#0f172a] to-[#090d1a]"
    >
      <div className="absolute top-1/3 left-1/4 w-80 h-80 bg-accentPurple/5 rounded-full filter blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl"
          >
            Academic <span className="text-accentCyan">Achievements</span>
          </motion.h2>
          <p className="text-slate-400 mt-2 font-medium tracking-wide">
            Contributions to research and publications in peer-reviewed journals.
          </p>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="h-1 bg-accentCyan mx-auto mt-4 rounded-full"
          />
        </div>

        {/* Publications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {achievements.map((paper, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -5 }}
              onClick={() => setSelectedPaper(paper)}
              className="glass-card p-6 rounded-2xl border border-white/5 hover:border-accentCyan/30 transition-all duration-300 flex flex-col justify-between cursor-pointer group"
            >
              <div className="space-y-4">
                {/* Icon & Label */}
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-lg bg-accentCyan/10 flex items-center justify-center text-accentCyan text-xl group-hover:bg-accentCyan/20 transition-colors">
                    <FaFileInvoice />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono font-bold text-accentCyan uppercase tracking-widest block">
                      Journal Publication
                    </span>
                    <span className="text-xs text-slate-500 font-bold tracking-wide">
                      {paper.journal}
                    </span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-white tracking-wide group-hover:text-accentCyan transition-colors">
                  {paper.title}
                </h3>

                {/* Details */}
                <p className="text-sm text-slate-400 font-medium leading-relaxed">
                  {paper.detail}
                </p>
              </div>

              {/* View paper prompt */}
              <div className="mt-6 pt-4 border-t border-slate-800 flex items-center justify-between text-xs font-bold text-slate-500 group-hover:text-accentCyan transition-colors">
                <span>Published in IJIRT Journal</span>
                <span className="flex items-center gap-1">
                  View Snapshot <FaRegFilePdf className="text-sm" />
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal for Publication Image */}
      <AnimatePresence>
        {selectedPaper && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedPaper(null)}
              className="absolute top-4 right-4 z-50 text-white text-3xl hover:text-accentCyan transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <FaTimes />
            </button>

            {/* Click outside to close */}
            <div
              className="absolute inset-0 cursor-zoom-out"
              onClick={() => setSelectedPaper(null)}
            />

            {/* Content Card */}
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="relative max-w-4xl w-full glass-card border border-white/10 rounded-2xl overflow-hidden shadow-2xl z-10 flex flex-col md:flex-row"
            >
              {/* Left: Details */}
              <div className="p-6 md:w-1/3 flex flex-col justify-between border-b md:border-b-0 md:border-r border-slate-800 bg-[#0c1220]">
                <div className="space-y-4">
                  <span className="text-xs font-mono font-bold text-accentCyan uppercase tracking-widest block">
                    {selectedPaper.journal}
                  </span>
                  <h3 className="text-xl font-extrabold text-white leading-snug">
                    {selectedPaper.title}
                  </h3>
                  <p className="text-sm text-slate-400 font-medium leading-relaxed">
                    {selectedPaper.detail}
                  </p>
                </div>
                
                <div className="pt-6 text-slate-500 font-mono text-[10px]">
                  * Screenshot of official publication sheet.
                </div>
              </div>

              {/* Right: Paper Snapshot Image */}
              <div className="md:w-2/3 max-h-[80vh] overflow-y-auto flex items-center justify-center bg-slate-950 p-4">
                <img
                  src={selectedPaper.image}
                  alt={selectedPaper.title}
                  className="max-w-full h-auto object-contain rounded border border-white/5 shadow-2xl"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
