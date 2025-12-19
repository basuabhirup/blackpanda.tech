import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import pandaLogo from "@assets/generated_images/cute_playful_panda_face_mascot.png";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden bg-white">
      {/* Background shapes */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-50 rounded-full blur-3xl opacity-40" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-50 rounded-full blur-3xl opacity-40" />

      <div className="container relative z-10 px-6 mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-8 max-w-5xl mx-auto"
        >
          {/* Panda Logo */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="flex justify-center mb-6"
          >
            <img 
              src={pandaLogo} 
              alt="Black Panda Mascot" 
              className="w-32 h-32 drop-shadow-md"
            />
          </motion.div>

          <div>
            <h1 className="text-6xl md:text-7xl font-display font-bold text-emerald-600 tracking-tight leading-tight mb-6">
              BLACK PANDA <br />TECHNOLOGIES
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-700 font-light leading-relaxed max-w-3xl mx-auto">
              White-label automation and software development for digital marketing agencies. 
              <br />
              <span className="text-emerald-600 font-semibold">Serving UK & US based agencies and their clients</span>
            </p>
          </div>

          <p className="text-lg text-gray-600 max-w-2xl mx-auto font-light">
            Workflow automation, AI-assisted systems, chatbot development, and custom frontends — 
            designed to support your agency's service offerings.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <Button 
              size="lg" 
              className="bg-emerald-600 text-white hover:bg-emerald-700 rounded-lg h-14 px-8 font-semibold text-base gap-2"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Start a Conversation
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-2 border-emerald-600 text-emerald-600 hover:bg-emerald-50 rounded-lg h-14 px-8 font-semibold text-base"
              onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
            >
              See Our Services
            </Button>
          </div>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-emerald-600 animate-bounce"
      >
        <ChevronDown size={28} strokeWidth={3} />
      </motion.div>
    </section>
  );
}
