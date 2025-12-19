import { useScroll, useSpring, motion } from "framer-motion";
import { Hero } from "@/components/sections/hero";
import { Services } from "@/components/sections/services";
import { WhenToWork } from "@/components/sections/when-to-work";
import { HowWeWork } from "@/components/sections/how-we-work";
import { TechStack } from "@/components/sections/tech-stack";
import { ProjectStart } from "@/components/sections/project-start";
import { Philosophy } from "@/components/sections/philosophy";
import { UseCases } from "@/components/sections/use-cases";
import { WhoFits } from "@/components/sections/who-fits";
import { Founder } from "@/components/sections/founder";
import { Contact } from "@/components/sections/contact";

export default function Home() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div className="min-h-screen bg-white text-gray-900 selection:bg-emerald-200">
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-emerald-600 origin-left z-50"
        style={{ scaleX }}
      />

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-40 px-6 py-4 bg-white/80 backdrop-blur-md border-b border-gray-200">
        <div className="container mx-auto flex justify-between items-center">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-2 font-display font-bold text-lg text-emerald-600"
          >
            <span className="text-2xl">🐼</span>
            <span className="hidden sm:inline uppercase">
              Black Panda Technologies
            </span>
            <span className="sm:hidden uppercase">
              Black Panda Technologies
            </span>
          </motion.div>
          <div className="hidden md:flex gap-8 text-sm font-semibold text-gray-700">
            <button
              onClick={() =>
                document
                  .getElementById("services")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="hover:text-emerald-600 transition-colors hover:cursor-pointer"
            >
              What We Do
            </button>
            <button
              onClick={() =>
                document
                  .getElementById("when-to-work")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="hover:text-emerald-600 transition-colors hover:cursor-pointer"
            >
              When to Work
            </button>
            <button
              onClick={() =>
                document
                  .getElementById("use-cases")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="hover:text-emerald-600 transition-colors hover:cursor-pointer"
            >
              Use Cases
            </button>
            <button
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="hover:text-emerald-600 transition-colors hover:cursor-pointer"
            >
              Contact
            </button>
          </div>
        </div>
      </nav>

      <main className="pt-4">
        <Hero />

        <div id="services">
          <Services />
        </div>

        <div id="when-to-work">
          <WhenToWork />
        </div>

        <HowWeWork />
        {/* <TechStack /> */}
        {/* <ProjectStart /> */}
        <div id="use-cases">
          <UseCases />
        </div>
        <Philosophy />
        <WhoFits />
        <Founder />

        <div id="contact">
          <Contact />
        </div>
      </main>
    </div>
  );
}
