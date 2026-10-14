import { motion, useScroll, useSpring } from "framer-motion";
import { Nav } from "@/components/site/nav";
import { Hero } from "@/components/sections/hero";
import { Problem } from "@/components/sections/problem";
import { Services } from "@/components/sections/services";
import { Pipelines } from "@/components/sections/pipelines";
import { Audits } from "@/components/sections/audits";
import { CoFounder } from "@/components/sections/cofounder";
import { Audience } from "@/components/sections/audience";
import { Tools } from "@/components/sections/tools";
import { CTA } from "@/components/sections/cta";

export default function Home() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div className="min-h-screen bg-ink text-foreground">
      <motion.div
        aria-hidden
        className="fixed inset-x-0 top-0 z-60 h-0.5 origin-left bg-signal"
        style={{ scaleX }}
      />
      <Nav />
      <main>
        <Hero />
        <Tools />
        <Problem />
        <Services />
        <Pipelines />
        <Audits />
        <CoFounder />
        <Audience />
        <CTA />
      </main>
    </div>
  );
}
