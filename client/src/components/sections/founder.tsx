import { motion } from "framer-motion";

export function Founder() {
  return (
    <section className="py-24 bg-white text-black relative">
      <div className="container px-6 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-4">
             <h2 className="text-2xl font-display font-medium mb-6 uppercase tracking-widest text-black/40">The Founder</h2>
             <div className="h-1 w-20 bg-black mb-8" />
             <p className="font-mono text-sm uppercase tracking-wide mb-2">Abhirup Basu</p>
             <p className="text-black/60 text-sm">Founder & Technical Lead</p>
          </div>
          
          <div className="md:col-span-8 space-y-8">
            <p className="text-xl md:text-2xl font-serif leading-relaxed text-black/80">
              Before working in software, Abhirup studied Earth Science and Geology. This shaped how he approaches systems: looking at layers, dependencies, long-term behavior, and edge cases.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8 border-t border-black/10">
              <div className="space-y-2">
                <h4 className="font-medium font-display text-lg">Curiosity over rigid templates</h4>
                <p className="text-black/60 font-light">Every agency is different. We adapt our systems to fit your stack, not the other way around.</p>
              </div>
              <div className="space-y-2">
                <h4 className="font-medium font-display text-lg">Experimentation first</h4>
                <p className="text-black/60 font-light">We test assumptions before formalizing infrastructure. Less fragile code, more robust systems.</p>
              </div>
              <div className="space-y-2">
                <h4 className="font-medium font-display text-lg">Scale without liabilities</h4>
                <p className="text-black/60 font-light">The goal isn't just to ship fast, but to build things that don't break when you grow.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
