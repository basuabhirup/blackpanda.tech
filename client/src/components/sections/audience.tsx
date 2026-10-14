import { Briefcase, Rocket, Stethoscope } from "lucide-react";
import { Reveal, SectionHeader } from "@/components/site/primitives";

const AUDIENCE = [
  {
    icon: Rocket,
    who: "Solo Founders & Bootstrappers",
    body: "Non-technical founders building MVPs who need to safely launch and handle real user traffic.",
    need: "Launch without the 3 a.m. outage",
  },
  {
    icon: Stethoscope,
    who: "Domain Experts",
    body: "Finance, operations, or healthcare professionals building internal tools who require secure, compliant cloud deployment.",
    need: "Secure, compliant by design",
  },
  {
    icon: Briefcase,
    who: "Creative Agencies",
    body: "Teams using AI to build client portals or workflow automations who lack an in-house DevOps engineer to manage the hosting.",
    need: "A DevOps engineer, on call",
  },
];

export function Audience() {
  return (
    <section className="relative border-t border-line bg-surface/60 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeader
          index="06"
          label="Who this works best for"
          title={
            <>
              Built for people who{" "}
              <span className="font-serif font-normal italic text-gradient-signal">
                build with AI
              </span>
              , not babysit servers
            </>
          }
        />

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {AUDIENCE.map((a, i) => (
            <Reveal
              key={a.who}
              delay={i * 0.08}
              className="panel group flex flex-col p-7 transition-colors hover:border-signal/25"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-white/80 transition-colors group-hover:border-signal/30 group-hover:text-signal">
                <a.icon className="h-6 w-6" strokeWidth={1.6} />
              </div>
              <h3 className="mt-6 text-xl font-semibold text-white">{a.who}</h3>
              <p className="mt-3 flex-1 leading-relaxed text-white/55">{a.body}</p>
              <p className="mt-6 border-t border-line pt-4 font-mono text-[12px] text-signal">
                → {a.need}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
