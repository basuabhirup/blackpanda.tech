import { motion } from "framer-motion";
import { Zap, AlertCircle, Brain, Users } from "lucide-react";

const reasons = [
  {
    icon: Zap,
    title: "Automation keeps coming up",
    description: "Clients consistently ask for automation capabilities but you don't have the engineering bandwidth."
  },
  {
    icon: AlertCircle,
    title: "Workflows are getting messy",
    description: "Your internal processes or client solutions are becoming brittle, fragile, and hard to maintain."
  },
  {
    icon: Brain,
    title: "You want to offer AI",
    description: "You want to add AI services under your brand — not as vague add-ons, but as real solutions."
  },
  {
    icon: Users,
    title: "Hiring doesn't make sense",
    description: "Building and maintaining a full technical team is expensive and slows your agency down."
  }
];

export function WhenToWork() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-50 rounded-full blur-3xl opacity-30" />
      
      <div className="container px-6 mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-4">
            Agencies usually come to us when...
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto font-light">
            We work best with agencies facing these specific challenges.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group p-8 bg-gradient-to-br from-emerald-50 to-blue-50 border-2 border-emerald-100 rounded-lg hover:border-emerald-500 hover:shadow-lg transition-all duration-300 hover:scale-105 hover:cursor-pointer"
            >
              <div className="flex gap-4">
                <div className="w-12 h-12 flex items-center justify-center bg-emerald-600 text-white rounded-lg shrink-0 group-hover:scale-110 transition-transform">
                  <reason.icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-display font-bold text-gray-900 mb-2">
                    {reason.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    {reason.description}
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
