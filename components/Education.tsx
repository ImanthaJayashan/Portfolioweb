"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, BookOpen } from "lucide-react";

const education = [
  {
    degree: "BSc (Hons) Information Technology Special",
    school: "Faculty of Computing, Sri Lanka Institute of Information Technology (SLIIT)",
    year: "2022 — 2026",
    icon: GraduationCap,
    color: "from-[#6366f1] to-[#8b5cf6]",
  },
  {
    degree: "Diploma in Psychology and Counselling",
    school: "IMBS Green Campus",
    year: "2021 — 2022",
    icon: BookOpen,
    color: "from-[#8b5cf6] to-[#ec4899]",
  },
];

export default function Education() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="education" className="py-24 px-6 relative" ref={ref}>
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          className="flex items-center gap-4 mb-12"
        >
          <div className="h-px flex-1 bg-gradient-to-r from-[#6366f1]/50 to-transparent" />
          <h2 className="text-3xl md:text-4xl font-bold text-white">Education</h2>
          <div className="h-px flex-1 bg-gradient-to-l from-[#6366f1]/50 to-transparent" />
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-[#6366f1]/50 via-[#8b5cf6]/30 to-transparent hidden md:block" />

          <div className="space-y-8">
            {education.map((edu, index) => (
              <motion.div
                key={edu.degree}
                initial={{ opacity: 0, x: -40 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: index * 0.3 }}
                className="relative flex flex-col md:flex-row gap-6 md:pl-20"
              >
                {/* Timeline dot */}
                <div className="hidden md:flex absolute left-0 top-6 w-16 h-16 items-center justify-center">
                  <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${edu.color} p-0.5`}>
                    <div className="w-full h-full rounded-2xl bg-[#0a0a1a] flex items-center justify-center">
                      <edu.icon size={22} className="text-white" />
                    </div>
                  </div>
                </div>

                <div className="flex-1 relative group">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-[#6366f1]/0 to-[#8b5cf6]/0 group-hover:from-[#6366f1]/20 group-hover:to-[#8b5cf6]/20 rounded-2xl blur transition duration-500" />
                  <div className="relative bg-[#0f0f23]/80 border border-white/10 rounded-2xl p-8 hover:border-[#6366f1]/30 transition-all">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-3">
                      <h3 className="text-xl font-bold text-white">{edu.degree}</h3>
                      <span className="px-4 py-1.5 rounded-full bg-[#6366f1]/10 border border-[#6366f1]/30 text-[#a5b4fc] text-sm font-medium w-fit">
                        {edu.year}
                      </span>
                    </div>
                    <p className="text-[#818cf8] text-lg">{edu.school}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}