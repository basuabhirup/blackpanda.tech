import { Cpu, Workflow, Terminal, Layers } from "lucide-react";
import { motion } from "framer-motion";

const services = [
  {
    icon: Workflow,
    title: "White-label Automation",
    description: "Complex workflow maintenance and orchestration using Make.com and n8n. Delivered under your brand."
  },
  {
    icon: Cpu,
    title: "Internal Agency Tools",
    description: "Streamlining your own operations so you can scale without the chaos of manual processes."
  },
  {
    icon: Terminal,
    title: "Custom AI Assistants",
    description: "Chat-based tools with defined responsibility, fallback logic, and human override paths."
  },
  {
    icon: Layers,
    title: "Frontend Dashboards",
    description: "When low-code isn't enough, we build custom frontend interfaces connected to your automations."
  }
];

export function Services() {
  return (
    <section id="services" className="py-24 bg-background relative border-b border-white/5">
      <div className="container px-6 mx-auto">
        <div className="mb-16 md:flex justify-between items-end border-l-2 border-white/10 pl-6">
          <div className="max-w-xl">
            <h2 className="text-3xl md:text-4xl font-display font-medium text-white mb-4">
              Behind the scenes infrastructure.
            </h2>
            <p className="text-muted-foreground text-lg font-light">
              We operate as your offshore technical partner. Your agency remains client-facing; we handle the logic.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group p-6 bg-card/30 border border-white/5 hover:border-white/20 transition-all duration-300 min-h-[280px] flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 bg-white/5 rounded flex items-center justify-center mb-6 group-hover:bg-white/10 transition-colors">
                  <service.icon className="w-6 h-6 text-white/80" />
                </div>
                <h3 className="text-xl font-display font-medium text-white mb-3">
                  {service.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>
              <div className="mt-4 pt-4 border-t border-white/5 flex justify-between items-center opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="text-xs font-mono text-muted-foreground">AVAILABLE</span>
                <span className="w-2 h-2 bg-emerald-500 rounded-full" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
