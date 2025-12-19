import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CheckCircle } from "lucide-react";

export function TechStack() {
  return (
    <section className="py-24 bg-gray-50 relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-50 rounded-full blur-3xl opacity-30" />
      
      <div className="container px-6 mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-4">
            How automation is handled here
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto font-light">
            Automation is treated as <span className="font-semibold text-emerald-600">infrastructure</span>, not a buzzword.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <Tabs defaultValue="tools" className="space-y-8">
            <TabsList className="grid w-full grid-cols-2 bg-gray-200 rounded-lg p-1 h-auto">
              <TabsTrigger value="tools" className="py-3 px-6 text-base font-semibold rounded data-[state=active]:bg-emerald-600 data-[state=active]:text-white">
                Our Tools
              </TabsTrigger>
              <TabsTrigger value="principles" className="py-3 px-6 text-base font-semibold rounded data-[state=active]:bg-emerald-600 data-[state=active]:text-white">
                Our Principles
              </TabsTrigger>
            </TabsList>

            <TabsContent value="tools" className="space-y-8 mt-12">
              <div className="bg-white border-2 border-gray-200 rounded-lg p-8">
                <h3 className="text-2xl font-display font-bold text-gray-900 mb-6">
                  We standardize using:
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="p-6 bg-gradient-to-br from-emerald-50 to-blue-50 rounded-lg border-2 border-emerald-200"
                  >
                    <h4 className="text-2xl font-bold text-emerald-600 mb-3">Make.com</h4>
                    <p className="text-gray-700 mb-4">Visual workflow automation platform for complex integrations and processes.</p>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="p-6 bg-gradient-to-br from-blue-50 to-emerald-50 rounded-lg border-2 border-emerald-200"
                  >
                    <h4 className="text-2xl font-bold text-emerald-600 mb-3">n8n</h4>
                    <p className="text-gray-700 mb-4">Open-source workflow engine for maximum transparency and customization.</p>
                  </motion.div>
                </div>

                <div className="mt-8 p-6 bg-emerald-50 border-l-4 border-emerald-600 rounded">
                  <h4 className="font-semibold text-gray-900 mb-4">Why these tools?</h4>
                  <ul className="space-y-3">
                    {[
                      "Transparent and inspectable by your team",
                      "Support complex logic without overengineering",
                      "Maintainable by teams over time"
                    ].map((item, i) => (
                      <li key={i} className="flex items-center gap-3 text-gray-700">
                        <CheckCircle className="w-5 h-5 text-emerald-600 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="principles" className="space-y-8 mt-12">
              <div className="bg-white border-2 border-gray-200 rounded-lg p-8">
                <h3 className="text-2xl font-display font-bold text-gray-900 mb-6">
                  AI is added with discipline:
                </h3>
                <div className="space-y-4">
                  {[
                    { title: "Defined Responsibility", desc: "Every AI component has a clear, specific role." },
                    { title: "Fallback Logic", desc: "Systems gracefully degrade if AI components fail." },
                    { title: "Human Override Paths", desc: "Always a way for humans to take control." }
                  ].map((principle, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      className="p-6 bg-gradient-to-r from-emerald-50 to-transparent border-l-4 border-emerald-600 rounded"
                    >
                      <h4 className="font-semibold text-gray-900 mb-2">{principle.title}</h4>
                      <p className="text-gray-600">{principle.desc}</p>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-8 p-6 bg-blue-50 border border-blue-200 rounded-lg">
                  <p className="text-gray-800 italic font-light">
                    "If something is better solved without AI, that's the direction we take."
                  </p>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </motion.div>
      </div>
    </section>
  );
}
