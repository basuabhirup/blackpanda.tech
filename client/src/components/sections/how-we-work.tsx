import { motion } from "framer-motion";
import { ShieldCheck, Lock, Zap, Layers } from "lucide-react";

const principles = [
  {
    icon: ShieldCheck,
    title: "Your Agency Stays Client-Facing",
    description: "We work behind the scenes. Your brand, your client relationships, your success."
  },
  {
    icon: Lock,
    title: "White-Label & Discrete",
    description: "All work is delivered under your brand. Communication is clean, predictable, and focused on reliability."
  },
  {
    icon: Zap,
    title: "Consistent & Maintainable",
    description: "We focus on technical continuity and fewer things breaking when your clients scale."
  },
  {
    icon: Layers,
    title: "Your Stack, Adapted",
    description: "Everything is designed to fit your existing service stack, not replace it or create dependencies."
  }
];

export function HowWeWork() {
  return (
    <section className="py-24 bg-gray-100 relative">
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-50 rounded-full blur-3xl opacity-30" />
      
      <div className="container px-6 mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-6 leading-tight">
            White-label, offshore, and <span className="text-emerald-600">deliberately quiet</span>
          </h2>
          <p className="text-xl text-gray-700 font-light mb-16">
            We operate as your offshore technical partner. That means reliable infrastructure, not visibility.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {principles.map((principle, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="p-8 bg-white border-2 border-gray-200 rounded-lg hover:border-emerald-500 hover:shadow-lg transition-all duration-300 hover:scale-105 hover:cursor-pointer"
            >
              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center shrink-0">
                  <principle.icon className="w-5 h-5 text-emerald-600" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-lg text-gray-900 mb-2">
                    {principle.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-sm">
                    {principle.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
