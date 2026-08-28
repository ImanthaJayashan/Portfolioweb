"use client";

import { motion } from "framer-motion";
import { ArrowDown, GitBranch, ExternalLink, Mail, FlaskConical } from "lucide-react";

export default function Hero() {
  const profileImageSrc =
    "profile.png";

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
    >
      {/* Background glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-1500 h-150 bg-primary/20 rounded-full blur-[120px] animate-pulse" />

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center mb-6"
        >
          <div className="relative w-36 h-36 md:w-70 md:h-70 rounded-full p-1 bg-linear-to-br from-primary via-secondary to-cyan-400 shadow-2xl shadow-primary/25">
            <div className="w-full h-full rounded-full border border-white/10 bg-[#0d1026] overflow-hidden flex items-center justify-center">
              <img
                src={profileImageSrc}
                alt="Imantha Jayashan"
                className="w-[95%] h-[95%] rounded-full object-cover border border-white/10"
                referrerPolicy="no-referrer"
                loading="eager"
                draggable="false"
              />
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/30 text-primary text-sm font-medium mb-6">
            IT Undergraduate
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl md:text-7xl font-extrabold mb-4 bg-linear-to-r from-white via-primary to-secondary bg-clip-text text-transparent"
        >
          Imantha Jayashan
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl md:text-2xl text-slate-400 mb-4"
        >
          IT Undergraduate | Full-Stack Developer | Cloud, Networking & Security
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-slate-500 mb-8"
        >
          📍 Colombo , Sri Lanka
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex gap-4 justify-center mb-10"
        >
          <a
            href="#projects"
            className="px-8 py-3 rounded-full bg-linear-to-r from-primary to-secondary text-white font-semibold hover:shadow-lg hover:shadow-primary/30 transition-all hover:-translate-y-1"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="px-8 py-3 rounded-full border border-primary/40 text-primary font-semibold hover:bg-primary/10 transition-all hover:-translate-y-1"
          >
            Contact Me
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="flex gap-6 justify-center"
        >
          <a href="https://github.com/imanthajayashan" target="_blank" className="text-slate-400 hover:text-primary transition-colors">
            <GitBranch size={24} />
          </a>
          <a href="https://linkedin.com/in/imantha-jayashan-1ab4421bb" target="_blank" className="text-slate-400 hover:text-primary transition-colors">
            <ExternalLink size={24} />
          </a>
          <a href="mailto:imanthajayashan@gmail.com" className="text-slate-400 hover:text-primary transition-colors">
            <Mail size={24} />
          </a>
          <a href="https://www.researchgate.net/profile/Imantha-Jayashan/research" target="blank" className="text-slate-400 hover:text-primary transition-colors">
            <FlaskConical size={24} />
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, repeat: Infinity, repeatType: "reverse" }}
          className="mt-16"
        >
          <a href="#about" className="text-slate-500 hover:text-primary transition-colors">
            <ArrowDown size={24} className="mx-auto animate-bounce" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}