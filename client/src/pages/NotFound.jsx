import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#0f172a] flex flex-col items-center justify-center p-4 overflow-hidden relative">
      {/* Decorative Blob */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primaryBlue/10 rounded-full filter blur-[120px] pointer-events-none" />

      <div className="text-center relative z-10 space-y-6 max-w-lg">
        {/* Animated Error Code */}
        <motion.h1
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, type: "spring" }}
          className="text-9xl font-extrabold tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-primaryBlue via-accentPurple to-accentCyan"
        >
          404
        </motion.h1>

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-2xl sm:text-3xl font-extrabold text-white tracking-wide"
        >
          Lost in the Developer Void?
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="text-sm sm:text-base text-slate-400 font-medium leading-relaxed"
        >
          The page you are looking for doesn't exist, was removed, or is currently compiling in a parallel universe.
        </motion.p>

        {/* Link Button */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="pt-6"
        >
          <Link
            to="/"
            className="inline-block px-8 py-3 bg-gradient-to-r from-primaryBlue to-accentCyan text-white font-bold text-sm rounded-full hover:scale-105 active:scale-95 transition-all shadow-lg"
          >
            Back to Home Base
          </Link>
        </motion.div>
      </div>

      {/* Aesthetic float lines */}
      <div className="absolute top-10 left-10 font-mono text-[9px] text-slate-700 select-none">
        const voidState = true; // compiling_universe_error
      </div>
    </div>
  );
}
