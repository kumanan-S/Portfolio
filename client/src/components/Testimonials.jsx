import { motion } from "framer-motion";
import { FaQuoteLeft, FaStar } from "react-icons/fa";
import { portfolioData } from "../data/portfolioData";

export default function Testimonials() {
  const { testimonials } = portfolioData;

  return (
    <section className="py-24 relative overflow-hidden bg-[#0f172a]">
      {/* Decorative Glow */}
      <div className="absolute top-1/4 left-1/3 w-80 h-80 bg-primaryBlue/5 rounded-full filter blur-3xl pointer-events-none" />

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
            Peer <span className="text-accentCyan">Testimonials</span>
          </motion.h2>
          <p className="text-slate-400 mt-2 font-medium tracking-wide">
            Feedback and recommendations from tech leads and senior developers.
          </p>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="h-1 bg-accentCyan mx-auto mt-4 rounded-full"
          />
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {testimonials.map((t, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.01 }}
              className="glass-card p-8 rounded-2xl border border-white/5 relative flex flex-col justify-between"
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-8 text-4xl text-slate-800 pointer-events-none">
                <FaQuoteLeft />
              </div>

              <div className="space-y-4">
                {/* Stars */}
                <div className="flex gap-1 text-amber-400 text-sm">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} />
                  ))}
                </div>

                {/* Quote Content */}
                <p className="text-base text-slate-300 italic leading-relaxed font-medium">
                  "{t.quote}"
                </p>
              </div>

              {/* Author Metadata */}
              <div className="mt-8 pt-4 border-t border-slate-800/80 flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-slate-900 border border-white/5 flex items-center justify-center font-bold text-accentCyan text-sm">
                  {t.author.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-white text-sm">
                    {t.author}
                  </h4>
                  <p className="text-xs text-slate-500 font-bold">
                    {t.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
