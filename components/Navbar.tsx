"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Education", href: "#education" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Certs", href: "#certs" },
  { name: "Contact", href: "#contact" },
];

const cvLink = "https://drive.google.com/your-cv-link-here";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3 }
    );

    navLinks.forEach((link) => {
      const el = document.querySelector(link.href);
      if (el) observer.observe(el);
    });

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled 
          ? "bg-[#0a0a1a]/80 backdrop-blur-xl border-b border-white/5 shadow-[0_4px_30px_rgba(0,0,0,0.3)]" 
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-2 py-4 flex justify-between items-center">
        <motion.a 
          href="#home" 
          className="text-2xl font-black tracking-tighter"
          whileHover={{ scale: 1.05 }}
        >
          <span className="bg-gradient-to-r from-[#ca3333] to-[#fa8b8b] bg-clip-text text-transparent">
            IJ.
          </span>
        </motion.a>

        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`relative px-4 py-2 rounded-full text-sm font-medium transition-all ${
                activeSection === link.href.slice(1)
                  ? "text-white bg-[#6366f1]/20"
                  : "text-slate-400 hover:text-white hover:bg-white/5"
              }`}
            >
              {link.name}
              {activeSection === link.href.slice(1) && (
                <motion.div
                  layoutId="activeNav"
                  className="absolute inset-0 rounded-full bg-[#6366f1]/10 border border-[#6366f1]/30"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
            </a>
          ))}

          <a
            href="https://drive.google.com/file/d/1pNkOQLCbkJsNT1TNru7hxGaruuuxnUAV/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
            className="ml-2 inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#ca3333] to-[#fa8b8b] px-2 py-1 text-sm font-semibold text-white shadow-lg shadow-[#ca3333]/20 transition-transform hover:scale-[1.02]"
          >
            Download CV
          </a>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <a
            href="https://drive.google.com/file/d/1pNkOQLCbkJsNT1TNru7hxGaruuuxnUAV/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#ca3333] to-[#fa8b8b] px-3 py-2 text-xs font-semibold text-white shadow-lg shadow-[#ca3333]/20"
          >
            CV
          </a>
          <button 
            className="text-slate-300 p-2 rounded-full hover:bg-white/5 transition-colors" 
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#0a0a1a]/95 backdrop-blur-xl border-b border-white/5 overflow-hidden"
          >
            <div className="flex flex-col px-6 py-4 gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                    activeSection === link.href.slice(1)
                      ? "text-white bg-[#6366f1]/20 border border-[#6366f1]/30"
                      : "text-slate-400 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {link.name}
                </a>
              ))}
              <a
                href={cvLink}
                target="_blank"
                rel="noreferrer"
                onClick={() => setIsOpen(false)}
                className="mt-2 inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#ca3333] to-[#fa8b8b] px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-[#ca3333]/20"
              >
                Download CV
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}