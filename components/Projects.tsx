"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const projects = [
  {
    image: "https://bynocs.com/_next/image?url=https%3A%2F%2Fblogs.bynocs.com%2Fwp-content%2Fuploads%2F2025%2F08%2FAbmblyopia.jpg&w=3840&q=75",
    title: "Lazy Eye Detection & Vision Therapy System for Preschool Children",
    desc: "AI-powered preschool learning and vision-therapy platform for early amblyopia support. Uses front-camera eye tracking with interactive binocular activities, educational games, and progress monitoring for rehabilitation.",
    techs: ["React.js", "JavaScript", "Python", "Flask", "PyTorch", "TensorFlow.js", "MediaPipe", "OpenCV", "Node.js", "HTML", "CSS", "Machine Learning", "Computer Vision"],
  },
  {
    image: "https://t3.ftcdn.net/jpg/04/59/15/58/360_F_459155812_i8zcXL46AxG1VKNQ5KaxSb6gGpapLuO0.jpg",
    title: "Janatha Super Traders - E-commerce Application for Stores",
    desc: "Custom stock management system for a real production environment with real-time stock tracking, low-stock and expiry notifications, report generation, and full CRUD operations through a monitoring dashboard.",
    techs: ["MongoDB", "Express.js", "React", "Node.js"],
  },
  {
    image: "https://thumbs.dreamstime.com/b/businessman-presents-digital-tax-concept-modern-office-surrounded-icons-representing-finance-strategies-effective-466936386.jpg",
    title: "Smart Tax Web Application",
    desc: "MERN-based tax platform with CRUD feedback management, advanced tax calculator with payment guidance, report generation, nearest tax office locator, centralized file storage, and a searchable tax learning hub.",
    techs: ["MongoDB", "Express.js", "React", "Tailwind CSS", "Node.js", "JavaScript", "GitHub"],
  },
  {
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnfEn2Eo0WaSPK2OlN7IKEvJ2RypmFhQQmN7a2nJo1H4-sHxcNcCRrrus&s=10",
    title: "Bus Booking Reservation Application (UI/UX)",
    desc: "Designed UI/UX for bus route and timetable management with CRUD flows, ticket handling, feedback management, seat selection, and dynamic booking confirmation updates.",
    techs: ["HTML", "CSS", "Bootstrap 5"],
  },
  {
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80",
    title: "Skill-Sharing & Learning Platform (UI/UX)",
    desc: "Designed user experience for a social learning platform where users can share up to 3 photos or short videos (30 seconds max) per post, with descriptions for knowledge sharing.",
    techs: ["Spring Boot", "React", "Tailwind CSS", "MySQL", "GitHub"],
  },
  {
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTevI0ixBg1p9uopFqeWOYmIP4aw-8uZz58_Ye8MBqJ-Zrjya5tCpY5ItLx&s=10",
    title: "Cloud-Based Web Application on AWS",
    desc: "Designed secure and scalable AWS architecture with private/public network separation, IAM and role-based access, full CRUD support, load balancing, high availability, and auto-scaling for reliable performance.",
    techs: ["AWS", "IAM", "VPC", "Load Balancer", "Auto Scaling", "Cloud Architecture"],
  },
  {
    image: "https://media.istockphoto.com/id/2195012879/photo/server-room-network-infrastructure-data-center-server-rack-network-cables.jpg?s=612x612&w=0&k=20&c=HgrsOZiwVSqV3UVcDJWfmEFtMI9mdyYLBrsuPHB4FXw=",
    title: "Client-Server Network Deployment using CentOS & Linux",
    desc: "Designed and tested a client-server network using CentOS server and Linux clients with static and DHCP IP addressing, NAT setup, and Linux administration for troubleshooting and controlled access.",
    techs: ["CentOS", "Linux", "NAT", "DHCP", "Static IP Addressing"],
  },
  {
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRe8nxth7NGX-ef-0XPdqFGfzhXHOyX5OwggeDHs6pkenzQKZJ-tltss-Fp&s=10",
    title: "Student Management Application",
    desc: "Full-featured student management system for small tuition classes and local education businesses with an easy-to-use interface and efficient backend services for handling student data.",
    techs: ["React", "Tailwind CSS", "Express.js", "Node.js", "MongoDB"],
  },
];

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-20 px-6" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          className="text-3xl font-bold mb-8 flex items-center gap-3"
        >
          <span className="text-primary">🚀</span> Projects
          <span className="flex-1 h-px bg-linear-to-r from-primary/50 to-transparent ml-4" />
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.15 }}
              className="bg-card/50 border border-white/5 rounded-2xl overflow-hidden hover:border-primary/30 hover:-translate-y-2 transition-all group"
            >
              <div className="h-40 bg-linear-to-br from-primary/30 to-secondary/30 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-lg font-bold text-slate-100 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                </div>
                <p className="text-slate-400 text-sm leading-relaxed mb-4">
                  {project.desc}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.techs.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-lg bg-primary/10 text-primary text-xs border border-primary/20"
                    >
                      {tech}
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