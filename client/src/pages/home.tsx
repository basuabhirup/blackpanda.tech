import { useState, useEffect } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { Hero } from "@/components/sections/hero";
import { Services } from "@/components/sections/services";
import { Philosophy } from "@/components/sections/philosophy";
import { Founder } from "@/components/sections/founder";
import { Contact } from "@/components/sections/contact";

export default function Home() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-white/20">
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-white origin-left z-50 mix-blend-difference"
        style={{ scaleX }}
      />

      {/* Navigation - Minimal Floating */}
      <nav className="fixed top-0 left-0 right-0 z-40 px-6 py-6 mix-blend-difference text-white">
        <div className="container mx-auto flex justify-between items-center">
            <div className="font-display font-bold text-xl tracking-tight">
                BLACK PANDA
            </div>
            <div className="hidden md:flex gap-8 text-sm font-mono uppercase tracking-wider opacity-80">
                <button onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })} className="hover:opacity-100 transition-opacity">Work</button>
                <button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} className="hover:opacity-100 transition-opacity">Contact</button>
            </div>
        </div>
      </nav>

      <main>
        <Hero />
        <Services />
        <Philosophy />
        <Founder />
        <Contact />
      </main>
    </div>
  );
}
