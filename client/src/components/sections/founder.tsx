import { motion } from "framer-motion";

export function Founder() {
  return (
    <section className="py-24 bg-emerald-600 text-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500 rounded-full blur-3xl opacity-20" />
      
      <div className="container px-6 mx-auto relative z-10">
        <div className="max-w-4xl">
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-mono uppercase tracking-widest text-emerald-100 mb-4"
          >
            Who's Behind It
          </motion.h2>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-3xl md:text-4xl font-display font-bold mb-3">
                Abhirup Basu
              </h3>
              <p className="text-emerald-100 font-light text-lg">
                Founder & Technical Lead
              </p>
            </div>

            <p className="text-xl leading-relaxed font-light text-white/90 max-w-2xl">
              Before working in software, Abhirup studied Earth Science and Geology. This shaped how he approaches systems: looking at layers, dependencies, long-term behavior, and edge cases.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8 border-t-2 border-white/20">
              <div className="space-y-2">
                <h4 className="font-semibold text-lg">Curiosity First</h4>
                <p className="text-emerald-100 font-light">Every agency is different. We adapt systems to fit your stack.</p>
              </div>
              <div className="space-y-2">
                <h4 className="font-semibold text-lg">Experimentation</h4>
                <p className="text-emerald-100 font-light">Test assumptions before formalizing. More robust, less fragile.</p>
              </div>
              <div className="space-y-2">
                <h4 className="font-semibold text-lg">Long-term Thinking</h4>
                <p className="text-emerald-100 font-light">Build infrastructure that scales without becoming a liability.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
