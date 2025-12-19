import { useScroll, useSpring, motion } from "framer-motion";
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
    <div className="min-h-screen bg-white text-gray-900 selection:bg-emerald-200">
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-emerald-600 origin-left z-50"
        style={{ scaleX }}
      />

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-40 px-6 py-6 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="container mx-auto flex justify-between items-center">
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-display font-bold text-2xl text-emerald-600"
          >
            🐼 BLACK PANDA
          </motion.div>
          <div className="hidden md:flex gap-8 text-sm font-semibold text-gray-700">
            <button 
              onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })} 
              className="hover:text-emerald-600 transition-colors"
            >
              Services
            </button>
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} 
              className="hover:text-emerald-600 transition-colors"
            >
              Contact
            </button>
          </div>
        </div>
      </nav>

      <main className="pt-20">
        <Hero />
        <Services />
        <Philosophy />
        <Founder />
        <Contact />
      </main>
    </div>
  );
}
