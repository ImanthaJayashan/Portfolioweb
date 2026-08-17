"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const languages = [
  { flag: "🇱🇰", name: "Sinhala", level: "Native Proficiency", percent: 100, color: "#f59e0b" },
  { flag: "ᴇɴ", name: "English", level: "Working Proficiency", percent: 85, color: "#6366f1" },
];

export default function Languages() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="languages" className="py-24 px-6 relative" ref={ref}>
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          className="flex items-center gap-4 mb-12"
        >
          <div className="h-px flex-1 bg-gradient-to-r from-[#6366f1]/50 to-transparent" />
          <h2 className="text-3xl md:text-4xl font-bold text-white">Languages</h2>
          <div className="h-px flex-1 bg-gradient-to-l from-[#6366f1]/50 to-transparent" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
          {languages.map((lang, index) => (
            <motion.div
              key={lang.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.2 }}
              className="group relative"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-[#6366f1]/0 to-[#8b5cf6]/0 group-hover:from-[#6366f1]/20 group-hover:to-[#8b5cf6]/20 rounded-2xl blur transition duration-500" />
              <div className="relative bg-[#0f0f23]/80 border border-white/10 rounded-2xl p-8 hover:border-white/20 transition-all">
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-4xl">{lang.flag}</span>
                  <div>
                    <h3 className="text-xl font-bold text-white">{lang.name}</h3>
                    <p className="text-slate-400 text-sm">{lang.level}</p>
                  </div>
                </div>
                <div className="w-full h-2 bg-white/5 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={isInView ? { width: `${lang.percent}%` } : {}}
                    transition={{ delay: 0.5 + index * 0.3, duration: 1.2, ease: "easeOut" }}
                    className="h-full rounded-full"
                    style={{ background: `linear-gradient(90deg, ${lang.color}, ${lang.color}80)` }}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}