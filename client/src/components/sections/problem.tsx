import { motion } from "framer-motion";
import { KeyRound, ShieldAlert, Unplug } from "lucide-react";
import { Reveal, SectionHeader } from "@/components/site/primitives";

const GAP_ITEMS = [
  "Hosting",
  "CI/CD",
  "Environments",
  "Secrets",
  "Rollbacks",
  "Scaling",
];

function NinetyTen() {
  return (
    <Reveal className="panel mt-14 p-6 md:p-8">
      <div className="mb-5 flex items-end justify-between font-mono text-[11px] uppercase tracking-[0.14em] text-white/45">
        <span>localhost → production</span>
        <span className="hidden sm:inline">what it takes to ship</span>
      </div>

      <div className="relative flex h-16 w-full overflow-hidden rounded-xl border border-line bg-ink md:h-20">
        {/* 90% — AI */}
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: "90%" }}
          viewport={{ once: true }}
          transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
          className="relative flex items-center justify-between overflow-hidden bg-gradient-to-r from-signal/25 to-signal/10 px-4 md:px-6"
        >
          <span className="font-mono text-xs text-signal md:text-sm">
            AI-generated app
          </span>
          <span className="text-2xl font-semibold text-white md:text-4xl">90%</span>
        </motion.div>

        {/* 10% — gap */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="flex flex-1 items-center justify-center border-l border-dashed border-warn/60 bg-[repeating-linear-gradient(135deg,rgb(251_191_36/0.14)_0_6px,transparent_6px_12px)]"
        >
          <span className="text-lg font-semibold text-warn md:text-2xl">10%</span>
        </motion.div>
      </div>

      <div className="mt-5 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <p className="font-mono text-xs text-white/40">
          ↑ Cursor, Claude Code, Bolt, v0, Lovable, Copilot
        </p>
        <ul className="flex flex-wrap gap-2">
          {GAP_ITEMS.map((g) => (
            <li
              key={g}
              className="rounded-md border border-warn/30 bg-warn/[0.07] px-2.5 py-1 font-mono text-[11px] text-warn"
            >
              {g}
            </li>
          ))}
        </ul>
      </div>
    </Reveal>
  );
}

const BOTTLENECKS = [
  {
    icon: Unplug,
    title: "The Deployment Wall",
    body: "Your app runs locally, but configuring Vercel, AWS, or Docker containers to host it feels like a different language.",
    log: [
      ["ERR", "Cannot connect to the Docker daemon"],
      ["ERR", "Error: ENOENT .env.production"],
      ["WARN", "Build failed on Vercel (exit 1)"],
    ],
  },
  {
    icon: ShieldAlert,
    title: "The Fear of Breaking Production",
    body: "You want to prompt a new feature, but without version control or staging environments, one bad AI hallucination could take down your live app.",
    log: [
      ["WARN", "No staging environment found"],
      ["ERR", "main: 14 uncommitted changes"],
      ["ERR", "Rollback target: none"],
    ],
  },
  {
    icon: KeyRound,
    title: "Security & Tech Debt",
    body: "The AI generated the logic, but left API keys exposed and built a database architecture that will not scale.",
    log: [
      ["ERR", "Secret in client bundle: sk_live_••••"],
      ["WARN", "Table users: no row-level security"],
      ["WARN", "N+1 query on /api/feed"],
    ],
  },
] as const;

export function Problem() {
  return (
    <section id="problem" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeader
          index="01"
          label="The core problem"
          title={
            <>
              AI gets you to 90%.{" "}
              <span className="font-serif font-normal italic text-white/55">
                We build the infrastructure for the final 10%.
              </span>
            </>
          }
        >
          The barrier to generating code has vanished. Whether you are using
          Cursor, Claude Code, Bolt, v0, or GitHub Copilot, you can build a
          functional application on your local machine in days. But moving that
          code from localhost to a live, secure production environment requires
          specialized cloud infrastructure and backend automation expertise.
        </SectionHeader>

        <NinetyTen />

        <Reveal className="mb-6 mt-16 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.14em] text-white/45">
          <span className="h-px flex-1 bg-line" />
          The “works on my machine” bottlenecks
          <span className="h-px flex-1 bg-line" />
        </Reveal>

        <div className="grid gap-5 md:grid-cols-3">
          {BOTTLENECKS.map((b, i) => (
            <Reveal key={b.title} delay={i * 0.08} className="panel flex flex-col p-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-fault/25 bg-fault/10 text-fault">
                <b.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 text-xl font-semibold text-white">{b.title}</h3>
              <p className="mt-3 flex-1 leading-relaxed text-white/55">{b.body}</p>

              <div className="mt-6 space-y-1.5 rounded-lg border border-line bg-ink p-3.5 font-mono text-[11.5px] leading-snug">
                {b.log.map(([lvl, msg]) => (
                  <p key={msg} className="flex gap-2.5">
                    <span
                      className={lvl === "ERR" ? "text-fault" : "text-warn"}
                    >
                      {lvl.padEnd(4, " ")}
                    </span>
                    <span className="text-white/55">{msg}</span>
                  </p>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
