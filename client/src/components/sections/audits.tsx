import { motion } from "framer-motion";
import { Reveal, SectionHeader, WindowChrome } from "@/components/site/primitives";
import { cn } from "@/lib/utils";

const CADENCE = [
  {
    when: "Day 0",
    title: "Codebase audit",
    body: "We read what the AI wrote: exposed secrets, fragile dependencies, schema risks, missing tests. You get a ranked list, not a lecture.",
  },
  {
    when: "Weeks 1–2",
    title: "Pipeline build-out",
    body: "Git workflow, CI/CD, and Dev / Staging / Prod go live on your own cloud accounts. We walk you through your first merges.",
  },
  {
    when: "Monthly",
    title: "Health check",
    body: "Dependency and security updates, secret rotation, backup restore test, cloud-cost review, and a look at what your latest prompts changed.",
  },
  {
    when: "Quarterly",
    title: "Architecture review",
    body: "Is it still the right shape for your traffic? We plan scaling, prune the tech debt the AI keeps adding, and re-baseline the score.",
  },
];

const FINDINGS = [
  { sev: "high", text: "API key committed in client bundle", fix: "rotated + moved to secret manager" },
  { sev: "high", text: "No row-level security on `users` table", fix: "policy added, tested on staging" },
  { sev: "med", text: "Deploys run from a laptop", fix: "replaced by GitHub Actions" },
  { sev: "med", text: "3 dependencies with known CVEs", fix: "upgraded, lockfile pinned" },
  { sev: "low", text: "No automated database backups", fix: "daily snapshots + restore drill" },
] as const;

const SEV: Record<string, string> = {
  high: "border-fault/40 bg-fault/10 text-fault",
  med: "border-warn/40 bg-warn/10 text-warn",
  low: "border-white/20 bg-white/5 text-white/60",
};

function ScoreRing({ from, to }: { from: number; to: number }) {
  const r = 38;
  const c = 2 * Math.PI * r;
  return (
    <div className="relative h-28 w-28 shrink-0">
      <svg viewBox="0 0 100 100" className="-rotate-90">
        <circle cx="50" cy="50" r={r} fill="none" stroke="rgb(255 255 255 / .07)" strokeWidth="7" />
        <motion.circle
          cx="50"
          cy="50"
          r={r}
          fill="none"
          stroke="#34d399"
          strokeWidth="7"
          strokeLinecap="round"
          strokeDasharray={c}
          initial={{ strokeDashoffset: c * (1 - from / 100) }}
          whileInView={{ strokeDashoffset: c * (1 - to / 100) }}
          viewport={{ once: true }}
          transition={{ duration: 1.6, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="text-3xl font-semibold text-white">{to}</span>
        <span className="font-mono text-[10px] uppercase tracking-wider text-white/40">/ 100</span>
      </div>
    </div>
  );
}

export function Audits() {
  return (
    <section id="audits" className="relative border-y border-line bg-surface/60 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeader
          index="04"
          label="Continuous auditing"
          title={
            <>
              We don’t hand over the keys and vanish.{" "}
              <span className="font-serif font-normal italic text-white/55">
                We keep checking the locks.
              </span>
            </>
          }
        >
          AI keeps writing code, so your risk keeps changing. Every engagement
          includes a rhythm of audits that catches drift, debt and
          vulnerabilities before your users do.
        </SectionHeader>

        <div className="mt-14 grid items-start gap-10 lg:grid-cols-[1fr_1.05fr] lg:gap-14">
          {/* timeline */}
          <ol className="relative">
            <span
              aria-hidden
              className="absolute bottom-3 left-[7px] top-3 w-px bg-gradient-to-b from-signal/60 via-signal/20 to-transparent"
            />
            {CADENCE.map((c, i) => (
              <Reveal key={c.when} delay={i * 0.07} className="relative pb-9 pl-9 last:pb-0">
                <span className="absolute left-0 top-1.5 flex h-[15px] w-[15px] items-center justify-center rounded-full border border-signal/70 bg-ink">
                  <span className="h-1.5 w-1.5 rounded-full bg-signal" />
                </span>
                <p className="font-mono text-xs uppercase tracking-[0.14em] text-signal">{c.when}</p>
                <h3 className="mt-1.5 text-xl font-semibold text-white">{c.title}</h3>
                <p className="mt-2 max-w-md leading-relaxed text-white/55">{c.body}</p>
              </Reveal>
            ))}
          </ol>

          {/* sample report */}
          <Reveal delay={0.1} className="panel overflow-hidden lg:sticky lg:top-24">
            <WindowChrome
              title="audit-report.md"
              right={
                <span className="rounded border border-white/10 px-1.5 py-0.5 font-mono text-[10px] uppercase tracking-wider text-white/40">
                  sample
                </span>
              }
            />
            <div className="p-6">
              <div className="flex items-center gap-6">
                <ScoreRing from={34} to={91} />
                <div>
                  <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-white/40">
                    Production readiness
                  </p>
                  <p className="mt-1 text-lg font-medium text-white">
                    34 <span className="text-white/30">→</span>{" "}
                    <span className="text-signal">91</span> after pipeline build-out
                  </p>
                  <p className="mt-1 text-sm text-white/45">
                    Re-scored at every monthly health check.
                  </p>
                </div>
              </div>

              <ul className="mt-6 divide-y divide-line rounded-lg border border-line bg-ink">
                {FINDINGS.map((f) => (
                  <li key={f.text} className="flex items-start gap-3 px-4 py-3">
                    <span
                      className={cn(
                        "mt-0.5 shrink-0 rounded border px-1.5 py-0.5 font-mono text-[10px] uppercase tracking-wider",
                        SEV[f.sev],
                      )}
                    >
                      {f.sev}
                    </span>
                    <div className="min-w-0">
                      <p className="text-[13.5px] text-white/85">{f.text}</p>
                      <p className="mt-0.5 font-mono text-[11px] text-signal/80">✓ {f.fix}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
