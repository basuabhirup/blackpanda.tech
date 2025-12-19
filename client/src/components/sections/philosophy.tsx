import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

export function Philosophy() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-50 rounded-full blur-3xl opacity-30" />
      
      <div className="container px-6 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 leading-tight">
              Built for <span className="text-emerald-600">practical,</span> <span className="text-emerald-600">maintainable</span> systems
            </h2>
            
            <div className="space-y-6 text-lg text-gray-700 font-light leading-relaxed">
              <p>
                We use Make.com and n8n because they're transparent, inspectable, and maintainable over time—not because of hype.
              </p>
              <p>
                AI components are added only where they make sense. Every system has defined responsibility, fallback logic, and human override paths.
              </p>
              <p className="italic text-gray-600 border-l-4 border-emerald-600 pl-4">
                "If something is better solved without AI, that's the direction we take."
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            {[
              "Transparent & Inspectable",
              "Complex Logic Support",
              "Maintainable by Your Team",
              "Defined Responsibility",
              "Graceful Fallbacks",
              "Human Override Paths"
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="flex items-center gap-4 p-4 bg-emerald-50 rounded-lg border-2 border-emerald-200 group hover:border-emerald-500 transition-colors"
              >
                <CheckCircle className="w-6 h-6 text-emerald-600 shrink-0" />
                <span className="font-semibold text-gray-800 group-hover:text-emerald-600 transition-colors">{item}</span>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
