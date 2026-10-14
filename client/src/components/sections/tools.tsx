import { Bot, Heart, MousePointer2, Terminal, Triangle, Zap } from "lucide-react";
import { Reveal } from "@/components/site/primitives";

const TOOLS = [
  { name: "Cursor", icon: MousePointer2 },
  { name: "Claude Code", icon: Terminal },
  { name: "Bolt.new", icon: Zap },
  { name: "v0 by Vercel", icon: Triangle },
  { name: "Lovable", icon: Heart },
  { name: "GitHub Copilot", icon: Bot },
];

function Row({ hidden }: { hidden?: boolean }) {
  return (
    <ul className="flex shrink-0 items-center gap-14 pr-14" aria-hidden={hidden}>
      {TOOLS.map((t) => (
        <li
          key={t.name}
          className="flex items-center gap-3 text-white/45 transition-colors hover:text-white"
        >
          <t.icon className="h-5 w-5" strokeWidth={1.8} />
          <span className="whitespace-nowrap text-xl font-medium tracking-tight">
            {t.name}
          </span>
        </li>
      ))}
    </ul>
  );
}

export function Tools() {
  return (
    <section aria-labelledby="tools-title" className="border-y border-line py-14">
      <Reveal className="mx-auto max-w-7xl px-5 text-center md:px-8">
        <h2
          id="tools-title"
          className="font-mono text-xs uppercase tracking-[0.18em] text-white/40"
        >
          The tools we orchestrate
        </h2>
      </Reveal>

      <div
        className="marquee mt-9 overflow-hidden"
        style={{
          maskImage: "linear-gradient(90deg, transparent, #000 12%, #000 88%, transparent)",
          WebkitMaskImage: "linear-gradient(90deg, transparent, #000 12%, #000 88%, transparent)",
        }}
      >
        <div className="marquee-track flex">
          <Row />
          <Row hidden />
        </div>
      </div>

      <p className="mt-8 px-5 text-center text-[11px] text-white/25">
        Product names belong to their respective owners. No affiliation or endorsement implied.
      </p>
    </section>
  );
}
