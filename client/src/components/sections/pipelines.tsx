import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Reveal, SectionHeader, WindowChrome } from "@/components/site/primitives";
import { cn } from "@/lib/utils";

type Node = { label: string; sub: string; kind?: "gate" | "env" };

const PIPELINES = [
  {
    id: "frontend",
    tab: "Frontend app",
    from: "Cursor · v0 · Lovable",
    to: "Vercel",
    blurb:
      "Every pull request gets its own preview URL. Merging to main promotes the tested build to production, and a bad deploy is one click from rolled back.",
    nodes: [
      { label: "Pull request", sub: "feature branch" },
      { label: "Lint & test", sub: "GitHub Actions", kind: "gate" },
      { label: "Preview", sub: "unique URL", kind: "env" },
      { label: "Staging", sub: "main branch", kind: "env" },
      { label: "Production", sub: "promoted build", kind: "env" },
    ] as Node[],
    file: ".github/workflows/web.yml",
    code: [
      ["c", "name: web"],
      ["", "on: [pull_request, push]"],
      ["", "jobs:"],
      ["", "  verify:"],
      ["g", "    - run: npm ci && npm run lint"],
      ["g", "    - run: npm test -- --ci"],
      ["", "  deploy:"],
      ["", "    needs: verify"],
      ["g", "    - run: vercel deploy --prebuilt"],
      ["y", "      # PR → preview · main → staging"],
      ["g", "    - run: vercel promote   # manual gate"],
    ],
  },
  {
    id: "backend",
    tab: "Backend & scripts",
    from: "Claude Code · Copilot",
    to: "AWS",
    blurb:
      "Backend code is containerised, scanned, and shipped as an immutable image. Staging and production run the exact same artifact, so it behaves the same in both.",
    nodes: [
      { label: "Push to main", sub: "git" },
      { label: "Test & scan", sub: "unit · secrets · deps", kind: "gate" },
      { label: "Docker build", sub: "tagged by SHA" },
      { label: "Staging", sub: "ECS service", kind: "env" },
      { label: "Production", sub: "blue / green", kind: "env" },
    ] as Node[],
    file: ".github/workflows/api.yml",
    code: [
      ["c", "name: api"],
      ["", "on: { push: { branches: [main] } }"],
      ["", "jobs:"],
      ["", "  build:"],
      ["g", "    - run: pytest -q"],
      ["g", "    - run: gitleaks detect --no-git"],
      ["g", "    - run: docker build -t api:${{ github.sha }} ."],
      ["g", "    - run: docker push $ECR/api:${{ github.sha }}"],
      ["", "  release:"],
      ["g", "    - run: ./deploy.sh staging  $SHA"],
      ["y", "    - run: ./deploy.sh prod     $SHA  # approval"],
    ],
  },
  {
    id: "fullstack",
    tab: "Full-stack + database",
    from: "Bolt · Lovable · Cursor",
    to: "Supabase / Postgres",
    blurb:
      "Schema changes ship as versioned migrations, rehearsed on staging data before they ever touch production. No more editing tables by hand in a dashboard.",
    nodes: [
      { label: "Commit", sub: "app + migration" },
      { label: "CI checks", sub: "tests · types", kind: "gate" },
      { label: "Migrate staging", sub: "dry-run first", kind: "gate" },
      { label: "Deploy staging", sub: "smoke tests", kind: "env" },
      { label: "Migrate & ship prod", sub: "backup → apply", kind: "env" },
    ] as Node[],
    file: ".github/workflows/release.yml",
    code: [
      ["c", "name: release"],
      ["", "jobs:"],
      ["", "  staging:"],
      ["g", "    - run: supabase db push --dry-run"],
      ["g", "    - run: supabase db push --linked"],
      ["g", "    - run: npm run smoke -- $STAGING_URL"],
      ["", "  production:"],
      ["", "    needs: staging"],
      ["y", "    - run: pg_dump $PROD_DB > backup.sql"],
      ["g", "    - run: supabase db push --linked"],
      ["g", "    - run: ./deploy.sh production"],
    ],
  },
] as const;

const CODE_TONE: Record<string, string> = {
  c: "text-white/35",
  "": "text-white/80",
  g: "text-signal",
  y: "text-warn",
};

function Diagram({ nodes }: { nodes: readonly Node[] }) {
  return (
    <ol className="grid grid-cols-1 gap-3 md:grid-cols-5 md:gap-0">
      {nodes.map((n, i) => (
        <li key={n.label} className="relative flex md:flex-col md:items-center">
          {/* connector */}
          {i < nodes.length - 1 && (
            <>
              <svg
                aria-hidden
                className="absolute left-[22px] top-[44px] hidden h-[calc(100%-8px)] w-px max-md:block"
                preserveAspectRatio="none"
              >
                <line x1="0.5" y1="0" x2="0.5" y2="100%" stroke="#34d399" strokeOpacity=".5" className="flow-line" />
              </svg>
              <svg
                aria-hidden
                className="absolute left-[calc(50%+26px)] top-[21px] hidden h-[2px] w-[calc(100%-52px)] md:block"
                preserveAspectRatio="none"
              >
                <line x1="0" y1="1" x2="100%" y2="1" stroke="#34d399" strokeOpacity=".5" strokeWidth="1.5" className="flow-line" />
              </svg>
            </>
          )}

          <span
            className={cn(
              "relative z-10 flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border font-mono text-sm",
              n.kind === "gate" && "border-warn/40 bg-warn/10 text-warn",
              n.kind === "env" && "border-signal/40 bg-signal/10 text-signal",
              !n.kind && "border-white/15 bg-surface-2 text-white/70",
            )}
          >
            {i + 1}
          </span>
          <div className="ml-4 md:ml-0 md:mt-4 md:text-center">
            <p className="text-sm font-medium text-white">{n.label}</p>
            <p className="font-mono text-[11px] text-white/40">{n.sub}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}

export function Pipelines() {
  const [active, setActive] = useState<(typeof PIPELINES)[number]["id"]>("frontend");
  const p = PIPELINES.find((x) => x.id === active)!;

  return (
    <section id="pipelines" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeader
          index="03"
          label="Deployment pipelines"
          title={
            <>
              From <span className="font-mono text-[0.85em] text-white/60">localhost</span> to
              live,{" "}
              <span className="font-serif font-normal italic text-gradient-signal">
                without the drama
              </span>
            </>
          }
        >
          Three reference pipelines we adapt to your stack. Whatever tool wrote
          the code, it travels the same road: tested, scanned, rehearsed on
          staging, then promoted, with a way back at every step.
        </SectionHeader>

        <Reveal className="panel mt-14 overflow-hidden">
          {/* tabs */}
          <div
            role="tablist"
            aria-label="Reference pipelines"
            className="flex overflow-x-auto border-b border-line"
          >
            {PIPELINES.map((t) => (
              <button
                key={t.id}
                role="tab"
                aria-selected={active === t.id}
                aria-controls={`pipeline-${t.id}`}
                onClick={() => setActive(t.id)}
                className={cn(
                  "relative flex-1 whitespace-nowrap px-5 py-4 text-left transition-colors",
                  active === t.id ? "bg-white/[0.04]" : "hover:bg-white/[0.02]",
                )}
              >
                <span
                  className={cn(
                    "block text-sm font-medium",
                    active === t.id ? "text-white" : "text-white/50",
                  )}
                >
                  {t.tab}
                </span>
                <span className="mt-0.5 block font-mono text-[11px] text-white/35">
                  {t.from} → {t.to}
                </span>
                {active === t.id && (
                  <motion.span
                    layoutId="pipeline-tab"
                    className="absolute inset-x-0 bottom-0 h-0.5 bg-signal"
                  />
                )}
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={p.id}
              id={`pipeline-${p.id}`}
              role="tabpanel"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -4 }}
              transition={{ duration: 0.25 }}
              className="grid gap-px bg-line lg:grid-cols-[1.15fr_0.85fr]"
            >
              <div className="bg-surface p-6 md:p-9">
                <p className="max-w-xl leading-relaxed text-white/60">{p.blurb}</p>
                <div className="mt-10">
                  <Diagram nodes={p.nodes} />
                </div>
                <div className="mt-10 flex flex-wrap gap-5 font-mono text-[11px] text-white/45">
                  <span className="flex items-center gap-2">
                    <span className="h-2.5 w-2.5 rounded-[3px] border border-warn/50 bg-warn/20" />
                    quality gate
                  </span>
                  <span className="flex items-center gap-2">
                    <span className="h-2.5 w-2.5 rounded-[3px] border border-signal/50 bg-signal/20" />
                    environment
                  </span>
                </div>
              </div>

              <div className="bg-surface">
                <WindowChrome title={p.file} />
                <pre className="overflow-x-auto p-5 font-mono text-[12px] leading-[1.75]">
                  {p.code.map(([tone, line], i) => (
                    <div key={i} className="flex gap-4">
                      <span className="w-4 select-none text-right text-white/20">{i + 1}</span>
                      <span className={cn("whitespace-pre", CODE_TONE[tone])}>{line}</span>
                    </div>
                  ))}
                </pre>
              </div>
            </motion.div>
          </AnimatePresence>
        </Reveal>

        <p className="mt-4 text-center font-mono text-[11px] text-white/30">
          Illustrative reference pipelines. Final configuration is tailored to your repo, stack and cloud account.
        </p>
      </div>
    </section>
  );
}
