import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const fitTraits = [
  { label: "Want to offer AI under your brand", color: "bg-emerald-100 text-emerald-800" },
  { label: "Need a long-term technical partner", color: "bg-blue-100 text-blue-800" },
  { label: "Value clarity & maintainability", color: "bg-emerald-100 text-emerald-800" },
  { label: "Don't want to oversell AI", color: "bg-blue-100 text-blue-800" }
];

export function WhoFits() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-96 h-96 bg-emerald-50 rounded-full blur-3xl opacity-30" />
      
      <div className="container px-6 mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-6">
            Who this works best for
          </h2>
          <p className="text-xl text-gray-600 font-light mb-12">
            We're a great fit for agencies that...
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {fitTraits.map((trait, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-8 bg-gray-50 rounded-lg border-2 border-gray-200 hover:border-emerald-500 hover:shadow-lg transition-all duration-300"
              >
                <Badge className={`${trait.color} border-0 px-4 py-2 text-base font-semibold`}>
                  ✓ {trait.label}
                </Badge>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-12 bg-gradient-to-br from-emerald-50 to-blue-50 rounded-lg border-2 border-emerald-300"
          >
            <h3 className="text-2xl font-display font-bold text-gray-900 mb-4">
              The Perfect Time to Talk
            </h3>
            <p className="text-xl text-gray-700 font-light">
              If your agency is growing and automation keeps coming up in client conversations — 
              <span className="font-semibold text-emerald-600"> this is usually a good time to chat.</span>
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
