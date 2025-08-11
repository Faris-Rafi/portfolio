"use client";

import { ArrowDown, Github, Linkedin, LucideIcon, Mail } from "lucide-react";
import { motion } from "framer-motion";

type SosmedLink = {
  icon: LucideIcon;
  href: string;
  label: string;
};

export default function Hero() {
  const sosmedLinks: SosmedLink[] = [
    { icon: Github, href: "#", label: "GitHub" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Mail, href: "#", label: "Email" },
  ];

  return (
    <section className="flex justify-center items-center min-h-80 w-full pt-5">
      <div className="max-w-[1280px] px-9 py-5 mt-20 mb-32">
        <div className="w-full text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-foreground to-primary inline-block bg-clip-text text-transparent"
          >
            Muhammad Faris Rafi
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
            className="text-lg md:text-xl text-center mt-5"
          >
            Full-Stack Developer with a Passion for Front-End Excellence
          </motion.p>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1.2, y: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="flex gap-6 justify-center mt-20 animate-fade-in [animation-delay:0.8s]"
        >
          {sosmedLinks.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              className="p-3 rounded-full border hover:border-primary transition-all duration-300 hover:shadow-[var(--shadow-glow)] hover:scale-110 group"
              aria-label={label}
            >
              <Icon className="h-6 w-6 text-muted-foreground group-hover:text-primary transition-colors" />
            </a>
          ))}
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.5 }}
          className="mt-20 animate-fade-in [animation-delay:1s]"
        >
          <div className="flex flex-col items-center">
            <span className="text-sm text-muted-foreground mb-2">
              Scroll to explore
            </span>
            <ArrowDown className="h-6 w-6 text-primary animate-bounce" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
