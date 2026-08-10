import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaAward, FaExternalLinkAlt, FaTimes } from "react-icons/fa";
import { portfolioData } from "../data/portfolioData";

export default function Certificates() {
  const { certificates } = portfolioData;
  const [selectedCert, setSelectedCert] = useState(null);

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { type: "spring", stiffness: 100 } },
  };

  return (
    <section
      id="certificates"
      className="py-24 relative overflow-hidden bg-gradient-to-b from-[#090d1a] to-[#0f172a]"
    >
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-primaryBlue/5 rounded-full filter blur-3xl pointer-events-none" />

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
            Licenses & <span className="text-accentCyan">Certificates</span>
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="h-1 bg-accentCyan mx-auto mt-4 rounded-full"
          />
        </div>

        {/* Certificates Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {certificates.map((cert, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="glass-card rounded-xl overflow-hidden border border-white/5 hover:border-primaryBlue/20 transition-all duration-300 flex flex-col justify-between group"
            >
              {/* Certificate Image preview */}
              <div
                onClick={() => setSelectedCert(cert)}
                className="h-32 bg-gradient-to-br from-slate-900 to-[#162238] flex flex-col items-center justify-center border-b border-white/5 relative overflow-hidden cursor-pointer"
              >
                {cert.image ? (
                  <img
                    src={cert.image}
                    alt={cert.name}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                ) : (
                  <>
                    <div className="absolute top-2 left-2 text-[9px] font-mono text-slate-600 font-bold select-none uppercase">
                      Credential Verification
                    </div>
                    
                    <div className="w-10 h-10 rounded-full bg-accentCyan/15 flex items-center justify-center text-accentCyan text-xl mb-2 group-hover:scale-110 transition-transform">
                      <FaAward />
                    </div>
                    
                    <span className="text-[10px] font-mono font-bold text-slate-400">
                      {cert.issuer} Academy
                    </span>
                  </>
                )}
              </div>

              {/* Card Meta */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="font-bold text-white tracking-wide text-sm group-hover:text-accentCyan transition-colors">
                    {cert.name}
                  </h3>
                  <div className="flex justify-between items-center text-xs text-slate-500 font-bold mt-2">
                    <span>Issued by: {cert.issuer}</span>
                    <span>{cert.date}</span>
                  </div>
                </div>

                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    setSelectedCert(cert);
                  }}
                  className="w-full flex items-center justify-center gap-2 py-2 bg-slate-900 border border-white/5 group-hover:border-accentCyan/20 text-slate-400 group-hover:text-white font-bold text-xs rounded-lg transition-all"
                >
                  View Certificate
                  <FaExternalLinkAlt className="text-[9px]" />
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Lightbox Modal for Certificate Image */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedCert(null)}
              className="absolute top-4 right-4 z-50 text-white text-3xl hover:text-accentCyan transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <FaTimes />
            </button>

            {/* Click outside to close */}
            <div
              className="absolute inset-0 cursor-zoom-out"
              onClick={() => setSelectedCert(null)}
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
                    {selectedCert.issuer}
                  </span>
                  <h3 className="text-xl font-extrabold text-white leading-snug">
                    {selectedCert.name}
                  </h3>
                  <div className="text-sm text-slate-400 font-medium">
                    Issued: {selectedCert.date}
                  </div>
                </div>
                
                <div className="pt-6 text-slate-500 font-mono text-[10px]">
                  * Snapshot of credential verification.
                </div>
              </div>

              {/* Right: Certificate Snapshot Image */}
              <div className="md:w-2/3 max-h-[80vh] overflow-y-auto flex items-center justify-center bg-slate-950 p-4">
                <img
                  src={selectedCert.image}
                  alt={selectedCert.name}
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
