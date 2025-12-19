import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const steps = [
  {
    title: "Understanding Your Model",
    description: "We start by understanding your agency's service model, current workflows, and where the real pain points are."
  },
  {
    title: "Mapping Standardized vs Custom",
    description: "Together we identify what should be standardized across clients, what needs to be customized, and what should stay manual."
  },
  {
    title: "Designing the Systems",
    description: "We design systems incrementally. No big bang deployments — just quiet, reliable improvements built step by step."
  },
  {
    title: "Ongoing Maintenance",
    description: "We maintain and improve your systems over time. Technical continuity means fewer surprises when things scale."
  }
];

export function ProjectStart() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-50 rounded-full blur-3xl opacity-30" />
      
      <div className="container px-6 mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-4 text-center">
            How projects usually start
          </h2>
          <p className="text-xl text-gray-600 text-center font-light mb-16">
            There's rarely a perfect brief. We begin with conversations like these:
          </p>

          <div className="bg-emerald-50 border-l-4 border-emerald-600 p-6 rounded mb-12">
            <div className="space-y-3 text-gray-700 font-light">
              <p className="italic">"Clients keep asking for automation"</p>
              <p className="italic">"We've hacked something together and it's fragile"</p>
              <p className="italic">"We need a backend partner we don't have to micro-manage"</p>
            </div>
          </div>

          <h3 className="text-2xl font-display font-bold text-gray-900 mb-8">From there, we follow this path:</h3>

          <Accordion type="single" collapsible className="space-y-4">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <AccordionItem value={`item-${index}`} className="border-2 border-gray-200 rounded-lg px-6 data-[state=open]:border-emerald-500 data-[state=open]:bg-emerald-50 transition-all">
                  <AccordionTrigger className="hover:text-emerald-600 py-6 font-semibold text-lg">
                    <div className="flex items-center gap-4">
                      <div className="w-8 h-8 bg-emerald-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                        {index + 1}
                      </div>
                      <span>{step.title}</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-700 font-light pb-6">
                    {step.description}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
