"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Sparkles, Target, Zap, Users, Handshake, Brain } from "lucide-react";

const highlights = [
  { icon: Target, label: "Problem Solver", desc: "Turning complex challenges into elegant solutions" },
  { icon: Zap, label: "Fast Learner", desc: "Quickly adapting to new technologies & frameworks" },
  { icon: Users, label: "Team Player", desc: "Collaborating effectively in diverse teams" },
  { icon: Sparkles, label: "Detail Oriented", desc: "Pixel-perfect implementations every time" },
  { 
  icon: Handshake, 
  label: "Team Leadership", 
  desc: "Leading teams, coordinating tasks, and working effectively with people" 
},
{
  icon: Brain,
  label: "Human-Computer Interaction",
  desc: "Designing intuitive and user-friendly digital experiences"
}
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 px-6 relative" ref={ref}>
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          className="flex items-center gap-4 mb-12"
        >
          <div className="h-px flex-1 bg-linear-to-r from-[#6366f1]/50 to-transparent" />
          <h2 className="text-3xl md:text-4xl font-bold text-white">About Me</h2>
          <div className="h-px flex-1 bg-gradient-to-l from-[#6366f1]/50 to-transparent" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="relative group"
          >
            <div className="absolute -inset-1 bg-linear-to-r from-[#f16363] to-[#8b5cf6] rounded-2xl opacity-20 group-hover:opacity-40 blur transition duration-500" />
            <div className="relative bg-[#0f0f23]/80 border border-white/10 rounded-2xl p-8 backdrop-blur-sm">
              <p className="text-slate-300 leading-relaxed text-lg mb-6">
                Motivated <span className="text-[#818cf8] font-semibold">Information Technology undergraduate</span> at SLIIT with hands-on experience building scalable, user-friendly full-stack applications, while also managing client-server networks, cloud applications, and IT solutions that support business needs and day-to-day operations with ensuring Security.

              </p>
              <p className="text-slate-400 leading-relaxed mb-6">
                From <span className="text-[#a78bfa]">AI-powered systems</span>to e-commerce platforms to cloud-based architectures, I enjoy turning ideas into practical solutions and modernizing traditional, outdated systems with innovative technology. Skilled across software development, IT solutions, computer networking and security, and cloud platforms such as AWS and Azure.
              </p>
              <p className="text-slate-400 leading-relaxed">
                Currently seeking opportunities to apply my technical skills, enhance my knowledge, and contribute effectively to professional IT environments.
              </p>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {highlights.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{ delay: 0.3 + index * 0.1 }}
                className="group relative"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-[#6366f1]/0 to-[#8b5cf6]/0 group-hover:from-[#6366f1]/30 group-hover:to-[#8b5cf6]/30 rounded-xl blur transition duration-500" />
                <div className="relative bg-[#0f0f23]/60 border border-white/5 rounded-xl p-6 hover:border-[#6366f1]/30 transition-all h-full">
                  <item.icon size={28} className="text-[#6366f1] mb-4" />
                  <h3 className="text-white font-semibold mb-2">{item.label}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}