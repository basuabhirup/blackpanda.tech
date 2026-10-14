import { motion, type HTMLMotionProps } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

export function Reveal({
  delay = 0,
  y = 18,
  className,
  ...props
}: HTMLMotionProps<"div"> & { delay?: number; y?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
      {...props}
    />
  );
}

export function SectionHeader({
  index,
  label,
  title,
  children,
  align = "left",
  className,
}: {
  index: string;
  label: string;
  title: React.ReactNode;
  children?: React.ReactNode;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <Reveal
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      <p className="eyebrow flex items-center gap-3">
        <span className="text-white/35">{index}</span>
        <span className="h-px w-8 bg-signal/40" />
        <span>{label}</span>
      </p>
      <h2 className="mt-5 text-4xl font-semibold leading-[1.05] text-white md:text-[3.25rem]">
        {title}
      </h2>
      {children && (
        <p className="mt-6 text-lg leading-relaxed text-white/60">{children}</p>
      )}
    </Reveal>
  );
}

type ButtonLinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  variant?: "primary" | "ghost";
  arrow?: boolean;
};

export function ButtonLink({
  variant = "primary",
  arrow = true,
  className,
  children,
  ...props
}: ButtonLinkProps) {
  return (
    <a
      className={cn(
        "group relative inline-flex h-12 items-center justify-center gap-2 whitespace-nowrap rounded-lg px-6 text-[15px] font-medium transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-signal",
        variant === "primary" &&
          "bg-signal text-ink shadow-[0_0_0_1px_rgb(52_211_153/0.5),0_8px_30px_-6px_rgb(52_211_153/0.45)] hover:bg-[#6ee7b7] hover:shadow-[0_0_0_1px_rgb(110_231_183/0.6),0_10px_40px_-6px_rgb(52_211_153/0.6)]",
        variant === "ghost" &&
          "border border-white/12 bg-white/[0.03] text-white hover:border-white/25 hover:bg-white/[0.07]",
        className,
      )}
      {...props}
    >
      {children}
      {arrow && (
        <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
      )}
    </a>
  );
}

/** Window chrome used for terminal / code panels */
export function WindowChrome({
  title,
  right,
}: {
  title: string;
  right?: React.ReactNode;
}) {
  return (
    <div className="flex items-center gap-3 border-b border-line px-4 py-2.5">
      <div className="flex gap-1.5">
        <span className="h-2.5 w-2.5 rounded-full bg-white/12" />
        <span className="h-2.5 w-2.5 rounded-full bg-white/12" />
        <span className="h-2.5 w-2.5 rounded-full bg-white/12" />
      </div>
      <span className="truncate font-mono text-[11px] text-white/45">{title}</span>
      {right && <span className="ml-auto">{right}</span>}
    </div>
  );
}
