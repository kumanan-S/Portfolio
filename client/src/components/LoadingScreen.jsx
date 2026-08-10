import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function LoadingScreen({ onComplete }) {
  const [percent, setPercent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPercent((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            onComplete();
          }, 500);
          return 100;
        }
        return prev + 5;
      });
    }, 45);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#0f172a]"
    >
      <div className="relative flex items-center justify-center flex-col">
        {/* Animated logo border */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          className="w-24 h-24 rounded-full border-4 border-t-primaryBlue border-r-accentPurple border-b-accentCyan border-l-transparent"
        />
        
        {/* Logo label */}
        <div className="absolute text-2xl font-extrabold text-white tracking-widest font-sans">
          KS
        </div>

        {/* Loading percentage */}
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mt-8 text-xl font-bold tracking-wider text-slate-300"
        >
          Loading {percent}%
        </motion.h2>

        {/* Interactive loading bar */}
        <div className="w-48 h-1.5 bg-slate-800 rounded-full mt-4 overflow-hidden border border-slate-700">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${percent}%` }}
            transition={{ ease: "easeInOut" }}
            className="h-full bg-gradient-to-r from-primaryBlue via-accentPurple to-accentCyan"
          />
        </div>

        <p className="mt-4 text-sm text-slate-500 font-medium tracking-wide">
          Preparing Developer Workspace...
        </p>
      </div>
    </motion.div>
  );
}
