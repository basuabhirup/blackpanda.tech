import { motion } from "framer-motion";
import { Check } from "lucide-react";

export function Philosophy() {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
       <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-white/5 to-transparent pointer-events-none" />
       
      <div className="container px-6 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div className="space-y-8">
            <h2 className="text-3xl md:text-5xl font-display font-medium text-white leading-tight">
              Automation is treated as <span className="text-muted-foreground">infrastructure</span>, not a buzzword.
            </h2>
            <div className="space-y-6 text-lg text-muted-foreground font-light">
              <p>
                We standardize workflow maintenance and orchestration using tools like Make.com and n8n because they are transparent, inspectable, and maintainable.
              </p>
              <p>
                AI components are added only where they make sense—always with defined responsibility, fallback logic, and human override paths.
              </p>
              <div className="p-6 bg-white/5 border-l-2 border-white/20 mt-8">
                <p className="italic text-white/80 font-serif">
                  "If something is better solved without AI, that’s the direction we take."
                </p>
              </div>
            </div>
          </div>

          <div className="relative">
             {/* Abstract System Diagram */}
             <div className="aspect-square md:aspect-video bg-card/20 border border-white/10 relative rounded-lg p-8 flex flex-col justify-center items-center backdrop-blur-sm">
                <div className="absolute inset-0 bg-grid-pattern opacity-10" />
                
                <div className="grid grid-cols-1 gap-4 w-full max-w-sm relative z-10">
                    {["Transparent & Inspectable", "Complex Logic Support", "Maintainable Over Time", "Defined Responsibility"].map((item, i) => (
                      <motion.div 
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        className="flex items-center gap-4 p-4 bg-background/80 border border-white/5"
                      >
                        <div className="w-6 h-6 rounded-full border border-white/20 flex items-center justify-center shrink-0">
                          <Check className="w-3 h-3 text-white" />
                        </div>
                        <span className="font-mono text-sm text-white/90 uppercase tracking-wide">{item}</span>
                      </motion.div>
                    ))}
                </div>

                {/* Decorative connectors */}
                <div className="absolute top-1/2 left-0 w-full h-px bg-white/5 -z-0" />
                <div className="absolute left-1/2 top-0 w-px h-full bg-white/5 -z-0" />
             </div>
          </div>

        </div>
      </div>
    </section>
  );
}
