import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Imantha Jayashan | Full-Stack Developer & AI Enthusiast",
  description: "IT Undergraduate at SLIIT | MERN Stack | AI/ML | Cloud & Networking",
  keywords: ["Imantha Jayashan", "SLIIT", "Full-Stack Developer", "MERN Stack", "AI", "AWS", "React", "Node.js"],
  authors: [{ name: "Imantha Jayashan" }],
  openGraph: {
    title: "Imantha Jayashan | Portfolio",
    description: "Full-Stack Developer | AI/ML Enthusiast | Cloud & Networking",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}