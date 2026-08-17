"use client";

import { AnimatePresence, motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Award, Calendar, Building2, ExternalLink, X } from "lucide-react";

type CertItem = {
  icon?: string;
  image?: string;
  title: string;
  org: string;
  year: string;
  color: string;
  pdfUrl: string;
};

const generalCerts: CertItem[] = [
  {
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTp6Odn5GJiOrzUNnGEBS3nLS8zBTw4zitrNerCP22hWudPGjwa0XptUdOs&s=10",
    title: "Web Design for Beginners",
    org: "University of Moratuwa",
    year: "2022",
    color: "#6366f1",
    pdfUrl: "https://drive.google.com/file/d/11z4sPn9tIQRC4vshaiNDkFl5QkS_CSlW/preview",
  },
  {
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSehbLiUYd6NahWGqCwxOeZO0jDa5Hg0bEPxwqfX4J6GfhhEtmLRBlJOnJC&s=10",
    title: "UX/UI Design",
    org: "Great Learning",
    year: "2024",
    color: "#8b5cf6",
    pdfUrl: "https://drive.google.com/file/d/1BR2JhqlYP7BdQJqzgw_03H0XONHBtL9Z/preview",
  },
  {
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSehbLiUYd6NahWGqCwxOeZO0jDa5Hg0bEPxwqfX4J6GfhhEtmLRBlJOnJC&s=10",
    title: "Introduction to Cyber Crime",
    org: "Great Learning",
    year: "2024",
    color: "#ec4899",
    pdfUrl: "https://drive.google.com/file/d/1i7lpoJfi4MH4iqPATeFHW_2OIyfehQ_P/preview",
  },
  {
     image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSehbLiUYd6NahWGqCwxOeZO0jDa5Hg0bEPxwqfX4J6GfhhEtmLRBlJOnJC&s=10",
    title: "ChatGPT for Coders",
    org: "Great Learning",
    year: "2024",
    color: "#10b981",
    pdfUrl: "https://drive.google.com/file/d/14ADtYLNPpepQln0HnPDZUqy-uEtgD4C5/preview",
  },
];

const cloudCerts: CertItem[] = [
  {
    image: "https://www.bluematador.com/hs-fs/hubfs/2020/AWS/AWS-services-section.png?width=314&name=AWS-services-section.png",
    title: "AWS SimuLearn: Computing Solutions",
    org: "AWS",
    year: "2025",
    color: "#f59e0b",
    pdfUrl: "https://drive.google.com/file/d/1T0xV8ifvTL7119S0UZnrZOh6jikm-3Hu/preview",
  },
  {
    image: "https://www.bluematador.com/hs-fs/hubfs/2020/AWS/AWS-services-section.png?width=314&name=AWS-services-section.png",
    title: "AWS SimuLearn: Cloud Computing Essentials",
    org: "AWS",
    year: "2025",
    color: "#fbbf24",
    pdfUrl: "https://drive.google.com/file/d/1ayoOROVe141yfYAhGsIW-P5epyRjhvo_/preview",
  },
  {
    image: "https://www.bluematador.com/hs-fs/hubfs/2020/AWS/AWS-services-section.png?width=314&name=AWS-services-section.png",
    title: "Introduction to Amazon Simple Storage Service (S3)",
    org: "AWS",
    year: "2025",
    color: "#f97316",
    pdfUrl: "https://drive.google.com/file/d/1dETTE1kvp7TgOvyMJIE092cG8g2vkUEw/preview",
  },
  {
    image: "https://www.bluematador.com/hs-fs/hubfs/2020/AWS/AWS-services-section.png?width=314&name=AWS-services-section.png",
    title: "AWS SimuLearn: File Systems in the Cloud",
    org: "AWS",
    year: "2025",
    color: "#fb7185",
    pdfUrl: "https://drive.google.com/file/d/19qQSLU6UVDEJAznOX0BwQ7X6ewvcjnb1/preview",
  },
  {
    image: "https://www.bluematador.com/hs-fs/hubfs/2020/AWS/AWS-services-section.png?width=314&name=AWS-services-section.png",
    title: "AWS SimuLearn: Networking Concepts",
    org: "AWS",
    year: "2025",
    color: "#f59e0b",
    pdfUrl: "https://drive.google.com/file/d/1WgnuUB_I7S_dXBoEzHqCBNF8ry3co4ki/preview",
  },
  {
    image: "https://www.bluematador.com/hs-fs/hubfs/2020/AWS/AWS-services-section.png?width=314&name=AWS-services-section.png",
    title: "AWS SimuLearn: Connecting VPCs",
    org: "AWS",
    year: "2025",
    color: "#facc15",
    pdfUrl: "https://drive.google.com/file/d/1XwYHz7DLqd5YIQNYyS1IiX-zZ86vhmqR/preview",
  },
  {
    image: "https://www.bluematador.com/hs-fs/hubfs/2020/AWS/AWS-services-section.png?width=314&name=AWS-services-section.png",
    title: "AWS SimuLearn: Highly Available Web Applications",
    org: "AWS",
    year: "2025",
    color: "#ef4444",
    pdfUrl: "https://drive.google.com/file/d/1b7JOC0-rODhspdwd_Z-jhLOW9rTY9Nrf/preview",
  },
  {
    image: "https://www.bluematador.com/hs-fs/hubfs/2020/AWS/AWS-services-section.png?width=314&name=AWS-services-section.png",
    title: "AWS SimuLearn: Auto-Healing and Scaling Applications",
    org: "AWS",
    year: "2025",
    color: "#10b981",
    pdfUrl: "https://drive.google.com/file/d/1r4BMpRjFCtE0BTkTuXqi3o5nNFdqlI42/preview",
  },
  {
    image: "https://www.bluematador.com/hs-fs/hubfs/2020/AWS/AWS-services-section.png?width=314&name=AWS-services-section.png",
    title: "AWS SimuLearn: Databases in Practice",
    org: "AWS",
    year: "2025",
    color: "#3b82f6",
    pdfUrl: "https://drive.google.com/file/d/1r8-bPTnBZ1yqO_I1kq49YuO4nMVJbWBD/preview",
  },
  {
    image: "https://www.bluematador.com/hs-fs/hubfs/2020/AWS/AWS-services-section.png?width=314&name=AWS-services-section.png",
    title: "AWS SimuLearn: Core Security Concepts",
    org: "AWS",
    year: "2025",
    color: "#8b5cf6",
    pdfUrl: "https://drive.google.com/file/d/1kDfaM0d07j-mEiN-AYmZWUgDfJFybJe7/preview",
  },
];

//azure
const azureCerts: CertItem[] = [
  {
    image: "https://www.northware.mx/wp-content/uploads/2022/09/northware-microsoft-azure-logo.png",
    title: "Introduction to Azure virtual machines",
    org: "Microsoft",
    year: "2025",
    color: "#0ea5e9",
    pdfUrl: "https://drive.google.com/file/d/1UMtOu6ujYrocLcKoAj_NcfFL94sR63JL/preview",
  },
  {
    image: "https://www.northware.mx/wp-content/uploads/2022/09/northware-microsoft-azure-logo.png",
    title: "Add and size disks in Azure virtual machines",
    org: "Microsoft",
    year: "2025",
    color: "#38bdf8",
    pdfUrl: "https://drive.google.com/file/d/1V7WQNB_9kZl608xbTU3RtHZfAK-Bez7E/preview",
  },
  {
    image: "https://www.northware.mx/wp-content/uploads/2022/09/northware-microsoft-azure-logo.png",
    title: "Configure Azure Blob Storage",
    org: "Microsoft",
    year: "2025",
    color: "#22c55e",
    pdfUrl: "https://drive.google.com/file/d/1Zuw1TThYNjwJX3CWeUDpJWpkff7a0JpG/preview",
  },
  {
    image: "https://www.northware.mx/wp-content/uploads/2022/09/northware-microsoft-azure-logo.png",
    title: "Configure virtual networks",
    org: "Microsoft",
    year: "2025",
    color: "#3b82f6",
    pdfUrl: "https://drive.google.com/file/d/1zAGfwMxLpRqkYz9NB5zGTpnv20B1Bu0L/preview",
  },
  {
    image: "https://www.northware.mx/wp-content/uploads/2022/09/northware-microsoft-azure-logo.png",
    title: "Improve application scalability and resiliency by using Azure Load Balancer",
    org: "Microsoft",
    year: "2025",
    color: "#f97316",
    pdfUrl: "https://drive.google.com/file/d/1AJU083HDDnSRzS3jbE0cK_x7S3zIHx4B/preview",
  },
  {
    image: "https://www.northware.mx/wp-content/uploads/2022/09/northware-microsoft-azure-logo.png",
    title: "Configure virtual machine availability",
    org: "Microsoft",
    year: "2025",
    color: "#8b5cf6",
    pdfUrl: "https://drive.google.com/file/d/1W_7uNHtuVBXwjgyhM3uH7YDtJY7LICZ1/preview",
  },
  {
    image: "https://www.northware.mx/wp-content/uploads/2022/09/northware-microsoft-azure-logo.png",
    title: "Describe Azure identity, access, and security",
    org: "Microsoft",
    year: "2025",
    color: "#14b8a6",
    pdfUrl: "https://drive.google.com/file/d/1uOI5OCGkSr6C9Xjf0iZCBtNGFEuhx0eQ/preview",
  },
  {
    image: "https://www.northware.mx/wp-content/uploads/2022/09/northware-microsoft-azure-logo.png",
    title: "Explore relational database services in Azure",
    org: "Microsoft",
    year: "2025",
    color: "#f59e0b",
    pdfUrl: "https://drive.google.com/file/d/1N7Sw1UpJqLVFlwi4kSNjY4MzJQe00m91/preview",
  },
];

export default function Certifications() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activePdf, setActivePdf] = useState<string | null>(null);

  return (
    <section id="certs" className="py-24 px-6 relative" ref={ref}>
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          className="flex items-center gap-4 mb-12"
        >
          <div className="h-px flex-1 bg-gradient-to-r from-[#6366f1]/50 to-transparent" />
          <h2 className="text-3xl md:text-4xl font-bold text-white">Certifications</h2>
          <div className="h-px flex-1 bg-gradient-to-l from-[#6366f1]/50 to-transparent" />
        </motion.div>

        <div className="space-y-10">
          <div>
            <h3 className="text-xl font-semibold text-white mb-5">General Certifications</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {generalCerts.map((cert, index) => (
                <motion.div
                  key={cert.title}
                  initial={{ opacity: 0, y: 30, scale: 0.95 }}
                  animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                  transition={{ delay: index * 0.1 }}
                  className="group relative"
                >
                  <div
                    className="absolute -inset-0.5 rounded-2xl opacity-0 group-hover:opacity-100 blur transition duration-500"
                    style={{ background: `linear-gradient(135deg, ${cert.color}40, transparent)` }}
                  />
                  <div className="relative bg-[#0f0f23]/80 border border-white/10 rounded-2xl p-6 hover:border-white/20 transition-all h-full">
                    <div className="flex items-start gap-4">
                      <div
                        className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl flex-shrink-0 overflow-hidden"
                        style={{ background: `${cert.color}15` }}
                      >
                        {cert.image ? (
                          <img
                            src={cert.image}
                            alt={`${cert.title} logo`}
                            className="w-9 h-9 object-contain"
                          />
                        ) : (
                          cert.icon
                        )}
                      </div>
                      <div className="min-w-0 flex-1">
                        <h3 className="font-semibold text-white text-sm leading-snug mb-2">{cert.title}</h3>
                        <div className="flex items-center gap-1.5 text-slate-500 text-xs mb-1">
                          <Building2 size={12} />
                          <span>{cert.org}</span>
                        </div>
                        <div className="flex items-center gap-1.5 text-slate-600 text-xs mb-3">
                          <Calendar size={12} />
                          <span>{cert.year}</span>
                        </div>
                        <button
                          onClick={() => cert.pdfUrl && setActivePdf(cert.pdfUrl)}
                          disabled={!cert.pdfUrl}
                          className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-xs font-medium text-slate-200 transition hover:bg-white/10 disabled:cursor-not-allowed disabled:opacity-60"
                        >
                          <Award size={12} />
                          {cert.pdfUrl ? "View Certificate" : "Certificate details pending"}
                          {cert.pdfUrl && <ExternalLink size={12} />}
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-white mb-5">Cloud Certifications</h3>

            <div className="mb-8">
              <h4 className="text-lg font-semibold text-amber-300 mb-4">AWS</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {cloudCerts.map((cert, index) => (
                  <motion.div
                    key={cert.title}
                    initial={{ opacity: 0, y: 30, scale: 0.95 }}
                    animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                    transition={{ delay: index * 0.05 }}
                    className="group relative"
                  >
                    <div
                      className="absolute -inset-0.5 rounded-2xl opacity-0 group-hover:opacity-100 blur transition duration-500"
                      style={{ background: `linear-gradient(135deg, ${cert.color}40, transparent)` }}
                    />
                    <div className="relative bg-[#0f0f23]/80 border border-white/10 rounded-2xl p-6 hover:border-white/20 transition-all h-full">
                      <div className="flex items-start gap-4">
                        <div
                          className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl flex-shrink-0 overflow-hidden"
                          style={{ background: `${cert.color}15` }}
                        >
                          {cert.image ? (
                            <img
                              src={cert.image}
                              alt={`${cert.title} logo`}
                              className="w-9 h-9 object-contain"
                            />
                          ) : (
                            cert.icon
                          )}
                        </div>
                        <div className="min-w-0 flex-1">
                          <h3 className="font-semibold text-white text-sm leading-snug mb-2">{cert.title}</h3>
                          <div className="flex items-center gap-1.5 text-slate-500 text-xs mb-1">
                            <Building2 size={12} />
                            <span>{cert.org}</span>
                          </div>
                          <div className="flex items-center gap-1.5 text-slate-600 text-xs mb-3">
                            <Calendar size={12} />
                            <span>{cert.year}</span>
                          </div>
                          <button
                            onClick={() => cert.pdfUrl && setActivePdf(cert.pdfUrl)}
                            disabled={!cert.pdfUrl}
                            className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-xs font-medium text-slate-200 transition hover:bg-white/10 disabled:cursor-not-allowed disabled:opacity-60"
                          >
                            <Award size={12} />
                            {cert.pdfUrl ? "View Certificate" : "Certificate details pending"}
                            {cert.pdfUrl && <ExternalLink size={12} />}
                          </button>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="mt-6 flex justify-center">
                <a
                  href="https://drive.google.com/file/d/1fPpDkskNz0PfAiul86JemTTMzaKg6oAm/view?usp=sharing"
                  target="_blank"
                  rel="noreferrer"
                  className="block overflow-hidden rounded-2xl border border-amber-400/40 bg-[#101828] p-2 shadow-lg shadow-amber-500/10 transition hover:scale-[1.02] hover:border-amber-300/60"
                >
                  <img
                    src="/aws-academy-graduate-cloud-web-application-builder-.png"
                    alt="AWS Academy Graduate Cloud Web Application Builder badge"
                    className="h-28 w-auto object-contain mx-auto"
                  />
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-sky-300 mb-4">Azure</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {azureCerts.map((cert, index) => (
                  <motion.div
                    key={cert.title}
                    initial={{ opacity: 0, y: 30, scale: 0.95 }}
                    animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                    transition={{ delay: index * 0.05 }}
                    className="group relative"
                  >
                    <div
                      className="absolute -inset-0.5 rounded-2xl opacity-0 group-hover:opacity-100 blur transition duration-500"
                      style={{ background: `linear-gradient(135deg, ${cert.color}40, transparent)` }}
                    />
                    <div className="relative bg-[#0f0f23]/80 border border-white/10 rounded-2xl p-6 hover:border-white/20 transition-all h-full">
                      <div className="flex items-start gap-4">
                        <div
                          className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl flex-shrink-0 overflow-hidden"
                          style={{ background: `${cert.color}15` }}
                        >
                          {cert.image ? (
                            <img
                              src={cert.image}
                              alt={`${cert.title} logo`}
                              className="w-9 h-9 object-contain"
                            />
                          ) : (
                            cert.icon
                          )}
                        </div>
                        <div className="min-w-0 flex-1">
                          <h3 className="font-semibold text-white text-sm leading-snug mb-2">{cert.title}</h3>
                          <div className="flex items-center gap-1.5 text-slate-500 text-xs mb-1">
                            <Building2 size={12} />
                            <span>{cert.org}</span>
                          </div>
                          <div className="flex items-center gap-1.5 text-slate-600 text-xs mb-3">
                            <Calendar size={12} />
                            <span>{cert.year}</span>
                          </div>
                          <button
                            onClick={() => cert.pdfUrl && setActivePdf(cert.pdfUrl)}
                            disabled={!cert.pdfUrl}
                            className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-xs font-medium text-slate-200 transition hover:bg-white/10 disabled:cursor-not-allowed disabled:opacity-60"
                          >
                            <Award size={12} />
                            {cert.pdfUrl ? "View Certificate" : "Certificate details pending"}
                            {cert.pdfUrl && <ExternalLink size={12} />}
                          </button>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {activePdf && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 px-4 py-6"
            onClick={() => setActivePdf(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="relative w-full max-w-5xl h-[85vh] rounded-2xl border border-white/10 bg-[#0f0f23] p-2 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setActivePdf(null)}
                className="absolute right-3 top-3 z-10 rounded-full bg-white/10 p-2 text-white transition hover:bg-white/20"
              >
                <X size={18} />
              </button>
              <iframe
                src={activePdf || "about:blank"}
                title="Certificate Preview"
                className="h-full w-full rounded-xl"
                allow="fullscreen"
                loading="lazy"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}