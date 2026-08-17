"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, ExternalLink, Phone, MapPin, MessageCircle } from "lucide-react";

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="contact"
      className="py-20 px-6 bg-gradient-to-b from-transparent to-darker/50"
      ref={ref}
    >
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Let's Connect!</h2>
          <p className="text-slate-400 mb-10">
            Open for internships, collaborations, and exciting opportunities
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap gap-4 justify-center"
        >
          <a
            href="mailto:imanthajayashan@gmail.com"
            className="flex items-center gap-3 px-6 py-3 rounded-full bg-primary/10 border border-primary/30 text-slate-200 hover:bg-primary/20 hover:border-primary transition-all"
          >
            <Mail size={18} className="text-primary" />
            imanthajayashan@gmail.com
          </a>
          <a
            href="https://linkedin.com/in/imantha-jayashan-1ab4421bb"
            target="_blank"
            className="flex items-center gap-3 px-6 py-3 rounded-full bg-primary/10 border border-primary/30 text-slate-200 hover:bg-primary/20 hover:border-primary transition-all"
          >
            <ExternalLink size={18} className="text-primary" />
            LinkedIn
          </a>
          <a
            href="https://wa.me/94752151681?text=Hi%20Imantha%2C%20I%20would%20like%20to%20discuss%20a%20project%20with%20you."
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-3 px-6 py-3 rounded-full bg-primary/10 border border-primary/30 text-slate-200 hover:bg-primary/20 hover:border-primary transition-all"
          >
            <MessageCircle size={18} className="text-primary" />
            WhatsApp
          </a>
          <a
            href="tel:+94729280152"
            className="flex items-center gap-3 px-6 py-3 rounded-full bg-primary/10 border border-primary/30 text-slate-200 hover:bg-primary/20 hover:border-primary transition-all"
          >
            <Phone size={18} className="text-primary" />
            072 928 0152
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.4 }}
          className="mt-10 flex items-center justify-center gap-2 text-slate-500"
        >
          <MapPin size={16} />
          <span>Colombo, Sri Lanka</span>
        </motion.div>
      </div>
    </section>
  );
}