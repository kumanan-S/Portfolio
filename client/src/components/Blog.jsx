import { motion } from "framer-motion";
import { FaBookOpen, FaRegClock } from "react-icons/fa";
import { portfolioData } from "../data/portfolioData";

export default function Blog() {
  const { blogs } = portfolioData;

  return (
    <section className="py-24 relative overflow-hidden bg-gradient-to-b from-[#0f172a] to-[#090d1a]">
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
            My <span className="text-accentCyan">Blog</span>
          </motion.h2>
          <p className="text-slate-400 mt-2 font-medium tracking-wide">
            Sharing my learning journey, tutorials, and backend optimizations.
          </p>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="h-1 bg-accentCyan mx-auto mt-4 rounded-full"
          />
        </div>

        {/* Blog Post Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {blogs.map((post) => (
            <motion.article
              key={post.id}
              whileHover={{ y: -5 }}
              className="glass-card rounded-2xl overflow-hidden border border-white/5 hover:border-accentCyan/30 transition-all duration-300 flex flex-col justify-between group"
            >
              {/* Card visual banner */}
              <div className="h-40 bg-gradient-to-r from-slate-900 to-[#1b2235] p-6 flex flex-col justify-between border-b border-white/5">
                <div className="flex items-center justify-between text-xs text-slate-500 font-bold">
                  <span className="flex items-center gap-1">
                    <FaRegClock />
                    {post.readTime}
                  </span>
                  <span>{post.date}</span>
                </div>
                <div className="w-10 h-10 rounded-lg bg-slate-900 flex items-center justify-center text-accentCyan text-lg border border-white/5">
                  <FaBookOpen />
                </div>
              </div>

              {/* Card details */}
              <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                <div className="space-y-2">
                  <h3 className="text-lg font-bold text-white tracking-wide group-hover:text-accentCyan transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-sm text-slate-400 font-medium leading-relaxed">
                    {post.summary}
                  </p>
                </div>

                <a
                  href={post.link}
                  onClick={(e) => e.preventDefault()}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-accentCyan group-hover:text-white transition-colors pt-4 border-t border-slate-800"
                >
                  Read Full Article →
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
