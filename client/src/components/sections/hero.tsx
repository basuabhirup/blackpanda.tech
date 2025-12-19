import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import heroBg from "@assets/generated_images/dark_abstract_topographic_digital_layers.png";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex flex-col justify-center items-center overflow-hidden border-b border-white/5">
      {/* Background with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroBg} 
          alt="Abstract Technical Layers" 
          className="w-full h-full object-cover opacity-30 mix-blend-luminosity"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
        <div className="absolute inset-0 bg-grid-pattern opacity-20" />
      </div>

      <div className="container relative z-10 px-6 mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl mx-auto space-y-8"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono uppercase tracking-wider text-muted-foreground mb-4">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            Operational Capacity: Available
          </div>

          <h1 className="text-5xl md:text-7xl font-display font-medium tracking-tight text-white leading-[1.1]">
            White-label automation <br/>
            <span className="text-muted-foreground">delivered offshore.</span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground/80 max-w-2xl mx-auto font-light leading-relaxed">
            We help agencies offer AI-assisted workflows and internal tools 
            without building an in-house engineering team.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <Button 
              size="lg" 
              className="bg-white text-black hover:bg-white/90 rounded-none h-12 px-8 font-medium text-base tracking-wide"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Start a Conversation
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="bg-transparent border-white/20 text-white hover:bg-white/5 hover:text-white rounded-none h-12 px-8 font-medium text-base tracking-wide"
              onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Explore Services
            </Button>
          </div>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-muted-foreground/50 animate-bounce"
      >
        <ChevronDown size={24} />
      </motion.div>
    </section>
  );
}
