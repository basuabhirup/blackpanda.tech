import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Zap, RotateCw, MessageCircle, Wrench, LayoutGrid, LifeBuoy } from "lucide-react";

const useCases = [
  {
    id: "lead-automation",
    title: "White-Label Client Automation",
    subtitle: "Lead Handling & Management",
    icon: Zap,
    description: "Automate lead capture, enrichment, and routing across multiple platforms",
    details: [
      "Automated lead intake from forms, ads, chatbots, and landing pages",
      "Enrichment and validation of lead data",
      "Routing logic based on rules or context",
      "Handoff to CRMs, email tools, or internal dashboards",
      "Workflows orchestrated using Make.com or n8n",
      "Logic that agencies can inspect and adjust"
    ],
    result: "A system agencies can resell under their own brand, without needing to explain technical details to clients."
  },
  {
    id: "internal-automation",
    title: "Internal Automation",
    subtitle: "Agency Operations",
    icon: RotateCw,
    description: "Streamline your internal processes and workflows",
    details: [
      "Onboarding new clients",
      "Campaign setup checklists",
      "Internal reporting and alerts",
      "Syncing data between tools used by different teams"
    ],
    result: "Systems that start small and evolve over time, rather than being 'fully automated' from day one."
  },
  {
    id: "ai-assistants",
    title: "Client-Facing AI Assistants",
    subtitle: "White-Label Bots",
    icon: MessageCircle,
    description: "Chat-based experiences tailored to your agency's needs",
    details: [
      "Website assistants for lead qualification or FAQs",
      "Onboarding assistants for SaaS or service businesses",
      "Internal knowledge assistants for client teams",
      "Narrow scope and predictable behavior",
      "Clear boundaries on what the assistant can and can't do",
      "White-label design that integrates into existing funnels"
    ],
    result: "AI experiences delivered white-label and designed to integrate cleanly without generic AI bot feel."
  },
  {
    id: "workflow-rescue",
    title: "Workflow Rescue & Cleanup",
    subtitle: "Fixing Fragile Systems",
    icon: Wrench,
    description: "Audit, simplify, and rebuild existing automations",
    details: [
      "Auditing existing workflows for issues",
      "Simplifying duplicated or complex logic",
      "Rebuilding critical paths using Make.com or n8n",
      "Documenting systems for easier maintenance",
      "Identifying automations breaking silently",
      "Establishing clear ownership and documentation"
    ],
    result: "Systems that your team can understand and maintain, often a starting point before new automation is added."
  },
  {
    id: "custom-tools",
    title: "Custom Frontend Tools",
    subtitle: "Agency-Specific Solutions",
    icon: LayoutGrid,
    description: "Lightweight tools that don't justify a full product build",
    details: [
      "Internal dashboards and admin panels",
      "Client-specific reporting views",
      "Tools that sit between existing platforms",
      "Frontend-heavy, practical solutions",
      "Built to solve very specific problems",
      "Integration with your existing tech stack"
    ],
    result: "Focused tools that solve real agency problems without bloat or unnecessary complexity."
  },
  {
    id: "ongoing-support",
    title: "Ongoing Technical Support",
    subtitle: "Long-Term Partnership",
    icon: LifeBuoy,
    description: "Continuous technical continuity and evolution",
    details: [
      "Maintaining existing automations",
      "Extending workflows as client needs evolve",
      "Acting as a quiet technical backend for new offerings",
      "Your agency stays client-facing",
      "Technical work stays behind the scenes",
      "Consistent, predictable support"
    ],
    result: "You grow your service offerings with a reliable technical partner, not a vendor."
  }
];

export function UseCases() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-50 rounded-full blur-3xl opacity-30" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-50 rounded-full blur-3xl opacity-30" />

      <div className="container px-6 mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-4">
            Real Use Cases
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto font-light">
            Here's what we typically build for agencies. Each can be customized for your needs.
          </p>
        </motion.div>

        <Tabs defaultValue="lead-automation" className="w-full">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-3 lg:grid-cols-6 bg-gray-100 rounded-lg p-1 mb-12 gap-1 h-auto">
            {useCases.map((useCase) => (
              <TabsTrigger 
                key={useCase.id}
                value={useCase.id}
                className="text-xs md:text-sm py-2 px-2 md:px-3 rounded data-[state=active]:bg-emerald-600 data-[state=active]:text-white font-semibold hover:bg-emerald-500 hover:text-white hover:cursor-pointer"
              >
                <useCase.icon className="w-4 h-4 mr-1 inline" />
                <span className="hidden sm:inline">{useCase.title.split(" ")[0]}</span>
              </TabsTrigger>
            ))}
          </TabsList>

          {useCases.map((useCase) => (
            <TabsContent key={useCase.id} value={useCase.id} className="mt-12">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 lg:grid-cols-3 gap-8"
              >
                {/* Header */}
                <div className="lg:col-span-1 flex flex-col justify-start">
                  <div className="w-16 h-16 bg-emerald-100 rounded-lg flex items-center justify-center mb-6">
                    <useCase.icon className="w-8 h-8 text-emerald-600" />
                  </div>
                  <h3 className="text-3xl font-display font-bold text-gray-900 mb-2">
                    {useCase.title}
                  </h3>
                  <p className="text-lg text-emerald-600 font-semibold mb-4">
                    {useCase.subtitle}
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    {useCase.description}
                  </p>
                </div>

                {/* Details & Result */}
                <div className="lg:col-span-2 space-y-8">
                  <div className="bg-gradient-to-br from-emerald-50 to-blue-50 border-2 border-emerald-200 rounded-lg p-8">
                    <h4 className="font-semibold text-gray-900 mb-6 text-lg">What we typically build:</h4>
                    <ul className="space-y-3">
                      {useCase.details.map((detail, i) => (
                        <li key={i} className="flex items-start gap-3 text-gray-700">
                          <span className="w-2 h-2 bg-emerald-600 rounded-full mt-2 shrink-0" />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-emerald-600 text-white rounded-lg p-8 border-2 border-emerald-700">
                    <h4 className="font-semibold mb-3 text-lg">The Result:</h4>
                    <p className="font-light leading-relaxed">
                      {useCase.result}
                    </p>
                  </div>
                </div>
              </motion.div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}
