"use client";

import Hero from "@/components/Hero";
import About from "@/components/About";
import Education from "@/components/Education";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Certifications from "@/components/Certifications";
import Languages from "@/components/Languages";
import Contact from "@/components/Contact";
import Navbar from "@/components/Navbar";
import MessageCenter from "@/components/contactme";
import {
  SiNextdotjs,
  SiReact,
  SiTypescript,
  SiTailwindcss,
  SiFramer,
} from "react-icons/si";

export default function Home() {
  const lastUpdated = new Date().toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });

  return (
    <main className="min-h-screen bg-dark text-slate-200">
      <Navbar />
      <Hero />
      <About />
      <Education />
      <Skills />
      <Projects />
      <Certifications />
      <Languages />
      <Contact />
      <section className="py-10 px-6">
        <div className="mx-auto max-w-4xl flex justify-center">
          <MessageCenter />
        </div>
      </section>
      <footer className="py-8 text-slate-500 text-sm border-t border-white/5">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="mb-3">Powered by</p>
          <div className="flex flex-wrap items-center justify-center gap-4 mb-3 text-slate-300">
            <span className="inline-flex items-center gap-2">
              <SiNextdotjs className="text-base" aria-hidden="true" />
              <span>Next.js</span>
            </span>
            <span className="inline-flex items-center gap-2">
              <SiReact className="text-base" aria-hidden="true" />
              <span>React</span>
            </span>
            <span className="inline-flex items-center gap-2">
              <SiTypescript className="text-base" aria-hidden="true" />
              <span>TypeScript</span>
            </span>
            <span className="inline-flex items-center gap-2">
              <SiTailwindcss className="text-base" aria-hidden="true" />
              <span>Tailwind CSS</span>
            </span>
            <span className="inline-flex items-center gap-2">
              <SiFramer className="text-base" aria-hidden="true" />
              <span>Framer Motion</span>
            </span>
          </div>
          <p>Made by Imantha Jayashan · {new Date().getFullYear()}</p>
          <p className="mt-1 text-slate-600">Last updated: {lastUpdated}</p>
        </div>
      </footer>
    </main>
  );
}