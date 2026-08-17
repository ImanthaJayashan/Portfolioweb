"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const skillCategories = [
  {
    title: "Backend",
    icon: "⚙️",
    skills: ["Node.js", "Express.js", "Spring Boot", "Flask","Java","Python"],
    color: "#6366f1",
  },
  {
    title: "Frontend",
    icon: "🎨",
    skills: ["React.js", "JavaScript", "HTML5", "Bootstrap", "Tailwind CSS"],
    color: "#8b5cf6",
  },
  {
    title: "Mobile",
    icon: "📱",
    skills: ["Kotlin", "Android Studio"],
    color: "#ec4899",
  },
  {
    title: "Databases",
    icon: "🗄️",
    skills: ["MongoDB", "MySQL"],
    color: "#10b981",
  },
  {
    title: "Cloud",
    icon: "☁️",
    skills: ["AWS (S3, VPC, IAM, LB)", "Microsoft Azure (Blob Storage, Virtual Network, App Service)"],
    color: "#f59e0b",
  },
  {
    title: "Data Science / AI / ML / DL  ",
    icon: "🧠",
    skills: ["Python", "PyTorch", "TensorFlow.js", "OpenCV", "MediaPipe","jupyter Notebook", "Pandas", "NumPy", "Matplotlib", "Seaborn" , "power BI",],
    color: "#ef4444",
  },
  {
    title: "Networking",
    icon: "🌐",
    skills: ["TCP/IP", "DHCP", "NAT", "CentOS / Linux Admin" , "Cisco Packet Tracer", "Wireshark"],
    color: "#06b6d4",
  },
  {
    title: "Tools & Design",
    icon: "🛠️",
    skills: ["Git / GitHub", "Postman", "Figma", "Adobe Illustrator", "Adobe Photoshop", "Selenium"],
    color: "#84cc16",
  },
  {
  title: "Cyber security",
  icon: "🔐",
  skills: ["Kali Linux", "Metasploit", "Burp Suite"],
  color: "#f97316",
},
{
  title: "Project Management",
  icon: "📋",
  skills: ["Ms planner"],
  color: "#14b8a6",
},

];

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-24 px-6 relative" ref={ref}>
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          className="flex items-center gap-4 mb-12"
        >
          <div className="h-px flex-1 bg-gradient-to-r from-[#6366f1]/50 to-transparent" />
          <h2 className="text-3xl md:text-4xl font-bold text-white">Technical Skills</h2>
          <div className="h-px flex-1 bg-gradient-to-l from-[#6366f1]/50 to-transparent" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCategories.map((cat, index) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1 }}
              className="group relative"
            >
              <div 
                className="absolute -inset-0.5 rounded-2xl opacity-0 group-hover:opacity-100 blur transition duration-500"
                style={{ background: `linear-gradient(135deg, ${cat.color}40, transparent)` }}
              />
              <div className="relative bg-[#0f0f23]/80 border border-white/10 rounded-2xl p-6 hover:border-white/20 transition-all h-full">
                <div className="flex items-center gap-3 mb-5">
                  <span className="text-2xl">{cat.icon}</span>
                  <h3 
                    className="font-bold text-lg"
                    style={{ color: cat.color }}
                  >
                    {cat.title}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 rounded-lg bg-white/5 text-slate-300 text-sm border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}