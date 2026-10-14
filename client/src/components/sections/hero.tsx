import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Check, GitBranch, Loader2 } from "lucide-react";
import { ButtonLink, WindowChrome } from "@/components/site/primitives";
import { AUDIT_CODEBASE_HREF } from "@/lib/site";
import { cn } from "@/lib/utils";

const STAGES = [
  { id: "commit", label: "git push", detail: "feat/checkout-flow → 3 files" },
  { id: "test", label: "test & lint", detail: "42 passed · 0 failed" },
  { id: "scan", label: "secret scan", detail: "0 exposed keys" },
  { id: "build", label: "build image", detail: "docker · 184 MB" },
  { id: "staging", label: "deploy → staging", detail: "preview ready" },
  { id: "prod", label: "promote → production", detail: "zero downtime" },
] as const;

/** Loops through the deploy pipeline so the hero shows the product, not a slogan. */
function PipelineConsole() {
  const [active, setActive] = useState(0);
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    if (mq.matches) {
      setActive(STAGES.length);
      return;
    }
    const t = setInterval(() => {
      setActive((a) => (a >= STAGES.length + 2 ? 0 : a + 1));
    }, 1100);
    return () => clearInterval(t);
  }, []);

  const done = active >= STAGES.length;

  return (
    <div className="panel overflow-hidden">
      <WindowChrome
        title="~/your-app — sample pipeline run"
        right={
          <span
            className={cn(
              "flex items-center gap-1.5 font-mono text-[10.5px] uppercase tracking-wider transition-colors",
              done ? "text-signal" : "text-warn",
            )}
          >
            <span
              className={cn(
                "pulse-dot h-1.5 w-1.5 rounded-full bg-current",
              )}
            />
            {done ? "live" : "running"}
          </span>
        }
      />

      <div className="space-y-5 p-5 font-mono text-[12.5px]">
        {/* prompt line */}
        <div className="flex items-center gap-2 text-white/70">
          <span className="text-signal">$</span>
          <span>git push origin feat/checkout-flow</span>
          <span className="caret" />
        </div>

        {/* stage list */}
        <ol className="relative space-y-1">
          <span
            aria-hidden
            className="absolute bottom-3 left-[13px] top-3 w-px bg-gradient-to-b from-white/15 to-white/5"
          />
          {STAGES.map((s, i) => {
            const state =
              i < active ? "done" : i === active && !reduced ? "run" : "idle";
            return (
              <li
                key={s.id}
                className={cn(
                  "relative flex items-center gap-3 rounded-lg px-1 py-2 transition-colors duration-300",
                  state === "run" && "bg-white/[0.04]",
                )}
              >
                <span
                  className={cn(
                    "relative z-10 flex h-[26px] w-[26px] shrink-0 items-center justify-center rounded-full border transition-all duration-300",
                    state === "done" &&
                      "border-signal/60 bg-signal/15 text-signal",
                    state === "run" && "border-warn/60 bg-warn/10 text-warn",
                    state === "idle" && "border-white/10 bg-ink text-white/25",
                  )}
                >
                  {state === "done" ? (
                    <Check className="h-3.5 w-3.5" strokeWidth={3} />
                  ) : state === "run" ? (
                    <Loader2 className="h-3.5 w-3.5 animate-spin" />
                  ) : (
                    <span className="text-[10px]">{i + 1}</span>
                  )}
                </span>
                <span
                  className={cn(
                    "transition-colors duration-300",
                    state === "idle" ? "text-white/35" : "text-white",
                  )}
                >
                  {s.label}
                </span>
                <span
                  className={cn(
                    "ml-auto hidden truncate text-[11px] transition-opacity duration-300 sm:block",
                    state === "done" ? "text-white/45 opacity-100" : "opacity-0",
                  )}
                >
                  {s.detail}
                </span>
              </li>
            );
          })}
        </ol>

        {/* result */}
        <div
          className={cn(
            "flex items-center justify-between rounded-lg border px-4 py-3 transition-all duration-500",
            done
              ? "border-signal/30 bg-signal/[0.07] text-signal"
              : "border-white/8 bg-white/[0.02] text-white/30",
          )}
        >
          <span className="flex items-center gap-2">
            <GitBranch className="h-3.5 w-3.5" />
            {done ? "Deployed. Previous version kept for instant rollback." : "Waiting for pipeline…"}
          </span>
        </div>
      </div>
    </div>
  );
}

export function Hero() {
  return (
    <section
      id="top"
      className="relative isolate overflow-hidden bg-noise pt-28 md:pt-36"
    >
      {/* backdrop */}
      <div className="bg-grid absolute inset-0 -z-10" />
      <div className="absolute left-1/2 top-[-18rem] -z-10 h-[40rem] w-[60rem] -translate-x-1/2 rounded-full bg-signal/[0.12] blur-[120px]" />

      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 pb-24 md:px-8 lg:grid-cols-[1.08fr_0.92fr] lg:gap-10 lg:pb-32">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/[0.04] py-1.5 pl-2 pr-4 font-mono text-[11.5px] text-white/65"
          >
            <span className="flex items-center gap-1.5 rounded-full bg-signal/15 px-2 py-0.5 text-signal">
              <span className="pulse-dot h-1.5 w-1.5 rounded-full bg-current" />
              DevOps
            </span>
            Cloud infrastructure &amp; backend automation boutique
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="mt-7 text-[2.6rem] font-semibold leading-[1.02] sm:text-6xl xl:text-[4.4rem]"
          >
            <span className="text-gradient">Production-grade infrastructure for AI</span>{" "}
            <span className="font-serif text-[1.08em] font-normal italic text-gradient-signal">
              “vibe coders”
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
            className="mt-7 max-w-xl text-lg leading-relaxed text-white/60 md:text-xl"
          >
            You prompt the application into existence. We build the Git
            workflows, CI/CD pipelines, and cloud environments to safely deploy
            it, scale it, and keep it running.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="mt-10 flex flex-col gap-3 sm:flex-row"
          >
            <ButtonLink href={AUDIT_CODEBASE_HREF}>Audit My AI Codebase</ButtonLink>
            <ButtonLink href="#pipelines" variant="ghost" arrow={false}>
              See Our Deployment Pipelines
            </ButtonLink>
          </motion.div>

          <motion.ul
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-12 grid max-w-xl grid-cols-1 gap-x-8 gap-y-3 border-t border-line pt-6 font-mono text-[12px] text-white/50 sm:grid-cols-3"
          >
            {[
              ["01", "Runs in your cloud accounts"],
              ["02", "Dev → Staging → Prod"],
              ["03", "Audited on a schedule"],
            ].map(([n, t]) => (
              <li key={n} className="flex gap-2.5">
                <span className="text-signal">{n}</span>
                {t}
              </li>
            ))}
          </motion.ul>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <div className="absolute -inset-6 -z-10 rounded-[2rem] bg-signal/[0.07] blur-3xl" />
          <PipelineConsole />
        </motion.div>
      </div>
    </section>
  );
}
