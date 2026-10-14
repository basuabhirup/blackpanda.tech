import { motion } from "framer-motion";
import { Layers, Scissors, Unlock } from "lucide-react";
import { Reveal, SectionHeader } from "@/components/site/primitives";
import { cn } from "@/lib/utils";

const PRINCIPLES = [
  {
    icon: Layers,
    title: "Tool Agnostic",
    body: "We do not care if you generated the code with an agentic CLI tool or a web-based UI builder. Good infrastructure is universal.",
  },
  {
    icon: Scissors,
    title: "Built for Practical, Maintainable Systems",
    body: "We audit your AI’s output to strip out convoluted logic, ensuring your codebase remains clean and maintainable long-term.",
  },
  {
    icon: Unlock,
    title: "Zero Lock-in",
    body: "We set up the infrastructure on your own AWS, GCP, or Vercel accounts and teach you how to manage the daily merges.",
  },
];

/** Geological strata, re-labelled as the layers below the prompt. */
const STRATA = [
  { label: "Your prompts & product vision", owner: "you", w: "100%", tone: "bg-white/[0.07] text-white/80" },
  { label: "AI-generated app code", owner: "you + AI", w: "100%", tone: "bg-white/[0.045] text-white/65" },
  { label: "Git workflow · branches · rollbacks", owner: "us", w: "100%", tone: "bg-signal/[0.12] text-signal" },
  { label: "CI/CD · tests · secret scanning", owner: "us", w: "100%", tone: "bg-signal/[0.17] text-signal" },
  { label: "Environments · containers · databases", owner: "us", w: "100%", tone: "bg-signal/[0.23] text-signal" },
  { label: "Your cloud account (AWS · GCP · Vercel)", owner: "you own it", w: "100%", tone: "bg-signal/[0.30] text-white" },
];

function Strata() {
  return (
    <div className="space-y-1.5">
      {STRATA.map((s, i) => (
        <motion.div
          key={s.label}
          initial={{ opacity: 0, x: -14 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.08, duration: 0.5 }}
          className={cn(
            "flex items-center justify-between gap-3 rounded-md px-4 py-3 text-[13px]",
            s.tone,
          )}
          style={{ width: s.w }}
        >
          <span>{s.label}</span>
          <span className="shrink-0 font-mono text-[10.5px] uppercase tracking-wider opacity-70">
            {s.owner}
          </span>
        </motion.div>
      ))}
    </div>
  );
}

export function CoFounder() {
  return (
    <section id="founder" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeader
          index="05"
          label="The deliberately quiet advantage"
          title={
            <>
              Your invisible{" "}
              <span className="font-serif font-normal italic text-gradient-signal">
                technical co-founder
              </span>
            </>
          }
        >
          You maintain full ownership of your product and the creative direction
          of your AI prompts. We operate quietly in the background, managing the
          deployment pipelines, servers, and backend automation.
        </SectionHeader>

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {PRINCIPLES.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.08} className="panel p-6">
              <p.icon className="h-5 w-5 text-signal" />
              <h3 className="mt-5 text-lg font-semibold text-white">{p.title}</h3>
              <p className="mt-2.5 leading-relaxed text-white/55">{p.body}</p>
            </Reveal>
          ))}
        </div>

        {/* Founder */}
        <Reveal className="panel mt-5 overflow-hidden">
          <div className="grid lg:grid-cols-[1fr_1.05fr]">
            <div className="p-7 md:p-10">
              <p className="eyebrow">Who’s behind it</p>

              <div className="mt-6 flex items-center gap-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-signal/30 bg-gradient-to-br from-signal/25 to-signal/5 font-mono text-xl font-medium text-signal">
                  AB
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-white">Abhirup Basu</h3>
                  <p className="font-mono text-xs text-white/45">
                    Founder &amp; Technical Lead
                  </p>
                </div>
              </div>

              <p className="mt-8 font-serif text-[1.65rem] italic leading-snug text-white/90 md:text-3xl">
                Before working in software, Abhirup studied Earth Science and
                Geology.
              </p>
              <p className="mt-5 max-w-lg leading-relaxed text-white/55">
                That shaped how he approaches systems: looking at layers,
                dependencies, long-term behavior, and edge cases. It’s the same
                instinct that turns a fragile AI-generated prototype into
                infrastructure that holds up under load.
              </p>

              <dl className="mt-8 grid gap-5 border-t border-line pt-7 sm:grid-cols-3">
                {[
                  ["Curiosity first", "Every project is different. We adapt to your stack."],
                  ["Test assumptions", "Rehearse on staging before it touches production."],
                  ["Think long-term", "Infrastructure that scales without becoming a liability."],
                ].map(([t, d]) => (
                  <div key={t}>
                    <dt className="text-sm font-medium text-white">{t}</dt>
                    <dd className="mt-1 text-[13px] leading-relaxed text-white/45">{d}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="border-t border-line bg-surface/70 p-7 md:p-10 lg:border-l lg:border-t-0">
              <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-white/40">
                The layers beneath your prompt
              </p>
              <div className="mt-5">
                <Strata />
              </div>
              <p className="mt-5 text-[13px] leading-relaxed text-white/40">
                You stay on top, building. We work the strata underneath, and the
                bedrock stays in your name.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
