import { Workflow, Zap, MessageSquare, Layers, Code, Wrench } from "lucide-react";
import { motion } from "framer-motion";

const services = [
  {
    icon: Workflow,
    title: "Workflow Automation",
    description: "Make.com and n8n orchestration for complex client processes. Maintain and scale with confidence."
  },
  {
    icon: Zap,
    title: "AI-Assisted Systems",
    description: "Intelligent automation with defined responsibility, fallback logic, and human override paths."
  },
  {
    icon: MessageSquare,
    title: "Chatbot Development",
    description: "Custom chat-based tools tailored to your agency's service stack."
  },
  {
    icon: Code,
    title: "Frontend Engineering",
    description: "Dashboards, internal tools, and custom interfaces when low-code isn't enough."
  },
  {
    icon: Layers,
    title: "Open-Source Customization",
    description: "Adapt and deploy open-source systems for your specific use cases."
  },
  {
    icon: Wrench,
    title: "Internal Agency Tools",
    description: "Streamline your operations so you can scale without chaos."
  }
];

export function Services() {
  return (
    <section id="services" className="py-24 bg-gray-50 relative">
      <div className="container px-6 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-4">
            What We Build
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Infrastructure that supports your agency's growth without adding complexity.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05, duration: 0.4 }}
              className="group p-8 bg-white border-2 border-gray-200 rounded-lg hover:border-emerald-500 hover:shadow-lg transition-all duration-300 min-h-[280px] flex flex-col justify-between"
            >
              <div>
                <div className="w-14 h-14 bg-emerald-100 rounded-lg flex items-center justify-center mb-6 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                  <service.icon className="w-7 h-7 text-emerald-600 group-hover:text-white" />
                </div>
                <h3 className="text-xl font-display font-bold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
