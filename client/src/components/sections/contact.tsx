import { motion } from "framer-motion";
import { Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Contact() {
  return (
    <section id="contact" className="py-24 bg-gray-50 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-96 h-96 bg-emerald-50 rounded-full blur-3xl opacity-40" />
      
      <div className="container px-6 mx-auto max-w-4xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-6">
            Ready to talk?
          </h2>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto font-light">
            If your agency is growing and automation keeps coming up in client conversations, this is usually a good time to chat.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-lg border-2 border-emerald-200 p-12 text-center space-y-8"
        >
          <div className="space-y-4">
            <h3 className="text-2xl font-bold font-display text-gray-900">Get in Touch</h3>
            
            <a 
              href="mailto:abhirup@blackpanda.tech"
              className="inline-flex items-center gap-3 px-8 py-4 bg-emerald-600 text-white rounded-lg font-semibold hover:bg-emerald-700 transition-colors text-lg group"
            >
              <Mail className="w-6 h-6" />
              <span>abhirup@blackpanda.tech</span>
            </a>
          </div>

          <div className="border-t-2 border-gray-200 pt-8">
            <div className="flex items-center justify-center gap-2 text-gray-700 font-semibold mb-4">
              <MapPin className="w-5 h-5 text-emerald-600" />
              <span>We Work With</span>
            </div>
            <div className="flex justify-center gap-6 text-lg font-semibold text-emerald-600">
              <span>🇬🇧 UK-Based Agencies</span>
              <span className="text-gray-400">•</span>
              <span>🇺🇸 US-Based Agencies</span>
            </div>
            <p className="text-gray-600 text-sm mt-3 font-light">
              Serving agencies and their clients across UK and US timezones
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16 pt-12 border-t-2 border-gray-200 text-center text-gray-600 font-light"
        >
          <p className="text-sm">
            © {new Date().getFullYear()} Black Panda Technologies. All rights reserved.
          </p>
          <p className="text-xs text-gray-500 mt-2 font-mono">
            www.blackpanda.tech
          </p>
        </motion.div>
      </div>
    </section>
  );
}
