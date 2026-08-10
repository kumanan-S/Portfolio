import { motion } from "framer-motion";
import { useState } from "react";
import { FaFilePdf, FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { HiDownload } from "react-icons/hi";
import { portfolioData } from "../data/portfolioData";

export default function Resume() {
  const { personalInfo } = portfolioData;
  const [showViewer, setShowViewer] = useState(false);

  return (
    <section
      id="resume"
      className="py-24 relative overflow-hidden bg-gradient-to-b from-[#0f172a] to-[#090d1a]"
    >
      <div className="absolute top-1/4 right-1/4 w-80 h-80 bg-primaryBlue/5 rounded-full filter blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl"
          >
            My <span className="text-accentCyan">Resume</span>
          </motion.h2>
          <p className="text-slate-400 mt-2 font-medium tracking-wide">
            Detailed professional resume summarizing engineering skills and academic background.
          </p>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="h-1 bg-accentCyan mx-auto mt-4 rounded-full"
          />
        </div>

        {/* Resume Action Panel */}
        <div className="max-w-2xl mx-auto glass-card p-8 rounded-2xl border border-white/5 text-center space-y-6">
          <div className="w-16 h-16 rounded-full bg-primaryBlue/10 flex items-center justify-center text-primaryBlue text-3xl mx-auto border border-primaryBlue/20">
            <FaFilePdf />
          </div>

          <div className="space-y-2">
            <h3 className="text-2xl font-bold text-white tracking-wide">
              Kumanan_Resume.pdf
            </h3>
            <p className="text-sm text-slate-400 font-medium max-w-md mx-auto">
              Ready to print or download. Contains full academic transcript indexes, programming languages list, and database designs.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 pt-2">
            <a
              href={personalInfo.resumeUrl}
              download
              className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primaryBlue to-accentPurple text-white font-semibold text-sm rounded-full hover:scale-105 active:scale-95 transition-all shadow-lg"
            >
              <HiDownload className="text-base" />
              Download Resume
            </a>
            
            <button
              onClick={() => setShowViewer(!showViewer)}
              className="flex items-center gap-2 px-6 py-3 bg-slate-900 border border-white/10 hover:border-slate-700 text-white font-semibold text-sm rounded-full hover:scale-105 active:scale-95 transition-all cursor-pointer"
            >
              {showViewer ? (
                <>
                  <FaRegEyeSlash className="text-base text-accentCyan" />
                  Hide Resume Preview
                </>
              ) : (
                <>
                  <FaRegEye className="text-base text-accentCyan" />
                  Preview Resume Online
                </>
              )}
            </button>
          </div>
        </div>

        {/* Embedded Iframe PDF Previewer */}
        {showViewer && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 30 }}
            transition={{ duration: 0.4 }}
            className="mt-12 glass-card rounded-2xl overflow-hidden border border-white/10 shadow-2xl h-[700px] w-full max-w-4xl mx-auto"
          >
            <iframe
              src={`${personalInfo.resumeUrl}#view=FitH`}
              title="Kumanan S Resume Preview"
              className="w-full h-full border-0"
            />
          </motion.div>
        )}
      </div>
    </section>
  );
}
