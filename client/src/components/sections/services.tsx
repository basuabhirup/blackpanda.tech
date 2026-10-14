import { Boxes, Database, GitMerge, Workflow } from "lucide-react";
import { Reveal, SectionHeader } from "@/components/site/primitives";
import { cn } from "@/lib/utils";

/* ---------- mini visuals ---------- */

function YamlVisual() {
  const lines: [string, string][] = [
    ["text-white/35", "# .github/workflows/deploy.yml"],
    ["text-white", "on: push: { branches: [main] }"],
    ["text-white", "jobs:"],
    ["text-white", "  ship:"],
    ["text-white", "    steps:"],
    ["text-signal", "      - run: npm test"],
    ["text-signal", "      - run: npm run build"],
    ["text-signal", "      - run: ./deploy.sh --env production"],
  ];
  return (
    <div className="rounded-lg border border-line bg-ink p-4 font-mono text-[11.5px] leading-[1.7]">
      {lines.map(([c, t], i) => (
        <p key={i} className={cn("whitespace-pre", c)}>
          {t}
        </p>
      ))}
    </div>
  );
}

function EnvVisual() {
  const envs = [
    { name: "development", url: "localhost:3000", tone: "text-white/60", bar: "bg-white/25", note: "prompt freely" },
    { name: "staging", url: "staging.yourapp.com", tone: "text-warn", bar: "bg-warn", note: "test with confidence" },
    { name: "production", url: "yourapp.com", tone: "text-signal", bar: "bg-signal", note: "real users, protected" },
  ];
  return (
    <div className="space-y-2.5">
      {envs.map((e, i) => (
        <div
          key={e.name}
          className="flex items-stretch overflow-hidden rounded-lg border border-line bg-ink"
          style={{ marginLeft: i * 14 }}
        >
          <span className={cn("w-1", e.bar)} />
          <div className="flex flex-1 items-center justify-between gap-3 px-3.5 py-2.5">
            <div>
              <p className={cn("font-mono text-xs font-medium", e.tone)}>{e.name}</p>
              <p className="font-mono text-[11px] text-white/40">{e.url}</p>
            </div>
            <p className="hidden text-right text-[11px] text-white/40 sm:block">{e.note}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

function GitVisual() {
  return (
    <div className="rounded-lg border border-line bg-ink p-4">
      <svg viewBox="0 0 320 110" className="w-full" role="img" aria-label="Git branch graph with a rollback to a stable commit">
        {/* main */}
        <line x1="14" y1="28" x2="306" y2="28" stroke="rgb(255 255 255 / .18)" strokeWidth="2" />
        {/* feature branch */}
        <path d="M70 28 C 90 28, 90 82, 112 82 L 200 82 C 222 82, 222 28, 244 28" fill="none" stroke="#34d399" strokeWidth="2" />
        {/* broken commit */}
        <line x1="150" y1="72" x2="150" y2="92" stroke="#f87171" strokeWidth="2" />
        <circle cx="150" cy="82" r="6" fill="#07090b" stroke="#f87171" strokeWidth="2" />
        <path d="M147 79l6 6m0-6l-6 6" stroke="#f87171" strokeWidth="1.5" />
        {/* main commits */}
        {[14, 70, 244, 306].map((x) => (
          <circle key={x} cx={x} cy="28" r="5.5" fill="#07090b" stroke="rgb(255 255 255 / .7)" strokeWidth="2" />
        ))}
        <circle cx="112" cy="82" r="5" fill="#07090b" stroke="#34d399" strokeWidth="2" />
        <circle cx="200" cy="82" r="5" fill="#07090b" stroke="#34d399" strokeWidth="2" />
        {/* rollback arrow */}
        <path d="M306 28 C 306 8, 70 4, 70 20" fill="none" stroke="#fbbf24" strokeWidth="1.5" strokeDasharray="4 4" />
        <path d="M66 17l4 6 4-6" fill="none" stroke="#fbbf24" strokeWidth="1.5" />
        <text x="157" y="55" fill="#fbbf24" fontSize="9" fontFamily="Geist Mono, monospace" textAnchor="middle">
          revert → stable
        </text>
        <text x="150" y="104" fill="rgb(255 255 255 / .4)" fontSize="9" fontFamily="Geist Mono, monospace" textAnchor="middle">
          ai-hallucinated change
        </text>
      </svg>
    </div>
  );
}

function CloudVisual() {
  return (
    <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-3">
      <div className="rounded-lg border border-line bg-ink p-3.5">
        <p className="mb-2 font-mono text-[10.5px] uppercase tracking-wider text-white/40">
          Container
        </p>
        <p className="font-mono text-[11.5px] leading-[1.7] text-white/75">
          <span className="text-signal">FROM</span> node:22-slim
          <br />
          <span className="text-signal">COPY</span> . /app
          <br />
          <span className="text-signal">CMD</span> [“npm”, “start”]
        </p>
      </div>
      <svg width="40" height="16" viewBox="0 0 40 16" aria-hidden>
        <line x1="0" y1="8" x2="40" y2="8" stroke="#34d399" strokeWidth="1.5" className="flow-line" />
      </svg>
      <div className="rounded-lg border border-line bg-ink p-3.5">
        <p className="mb-2 font-mono text-[10.5px] uppercase tracking-wider text-white/40">
          Postgres
        </p>
        <ul className="space-y-1 font-mono text-[11.5px] text-white/75">
          {["row-level security", "pooled connections", "daily backups"].map((t) => (
            <li key={t} className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-signal" />
              {t}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

/* ---------- cards ---------- */

const SERVICES = [
  {
    icon: Workflow,
    tag: "pipelines",
    title: "Automated CI/CD Pipelines",
    body: "We configure GitHub Actions and deployment scripts. You hit save; we automatically test and push your code to the live server.",
    visual: <YamlVisual />,
    span: "lg:col-span-7",
  },
  {
    icon: Boxes,
    tag: "environments",
    title: "Multi-Environment Architecture",
    body: "Never test on your live users again. We set up isolated Development, Staging, and Production environments so you can vibe-code safely.",
    visual: <EnvVisual />,
    span: "lg:col-span-5",
  },
  {
    icon: GitMerge,
    tag: "version control",
    title: "Git-Based Workflow Setup",
    body: "We implement professional branching strategies, ensuring you can always roll back to a stable version if the AI generates broken code.",
    visual: <GitVisual />,
    span: "lg:col-span-5",
  },
  {
    icon: Database,
    tag: "cloud & data",
    title: "Cloud Hosting & Database Orchestration",
    body: "From containerizing complex backend scripts generated by Claude Code to connecting secure Supabase/Postgres databases for your Cursor frontends.",
    visual: <CloudVisual />,
    span: "lg:col-span-7",
  },
];

export function Services() {
  return (
    <section id="build" className="relative border-y border-line bg-surface/60 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeader
          index="02"
          label="What we build"
          title={
            <>
              The safety net for{" "}
              <span className="whitespace-nowrap font-serif font-normal italic text-gradient-signal">
                AI-assisted
              </span>{" "}
              <span className="font-serif font-normal italic text-gradient-signal">
                development
              </span>
            </>
          }
        >
          We are a boutique consultancy focusing on cloud infrastructure and
          backend automation. We act as your technical backstop, allowing you to
          generate features rapidly while we ensure the underlying architecture
          is bulletproof.
        </SectionHeader>

        <div className="mt-14 grid gap-5 lg:grid-cols-12">
          {SERVICES.map((s, i) => (
            <Reveal
              key={s.title}
              delay={(i % 2) * 0.08}
              className={cn(
                "panel group flex flex-col p-6 transition-colors duration-300 hover:border-signal/25 md:p-7",
                s.span,
              )}
            >
              <div className="flex items-center justify-between">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-signal/25 bg-signal/10 text-signal">
                  <s.icon className="h-5 w-5" />
                </div>
                <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-white/30">
                  {s.tag}
                </span>
              </div>
              <h3 className="mt-5 text-2xl font-semibold text-white">{s.title}</h3>
              <p className="mt-3 max-w-lg leading-relaxed text-white/55">{s.body}</p>
              <div className="mt-7 flex flex-1 items-end">
                <div className="w-full">{s.visual}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
